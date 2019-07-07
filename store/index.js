import * as firebase from 'firebase'
export const strict = false;
const config = {
  apiKey: 'AIzaSyA5siB2Jg64LhQNlieawQ69kOL78X5Kov8',
  authDomain: 'greenmaptaiwan.firebaseapp.com',
  databaseURL: 'https://greenmaptaiwan.firebaseio.com',
  projectId: 'greenmaptaiwan',
  storageBucket: 'greenmaptaiwan.appspot.com',
  messagingSenderId: '395267289672',
  databaseURL: 'https://greenmaptaiwan.firebaseio.com/'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const algoliasearch = require('algoliasearch');

const database = firebase.database();

// configure algolia
const algolia = algoliasearch(
  // 'HNGIWGJG9Q',
  // 'a9dc298f742ab70ad577ccc6f2195ea0'
  'WLQYM2VEOS',
  '5b7c1bdd81c884fecd44ce897c93dbbf'
);
const index = algolia.initIndex('greenmaptaiwan');

// replicaIndex.setSettings({
//   hitsPerPage: 1000,
//   ranking: [
//     "recommend_area"
//   ]
// });

function getFilterString(){
  const result = Array.from(arguments).reduce((a,v,i)=>{
    if(a && v.check(v.value)) return `${a} AND ${v.name}:${v.value}`; 
    else if(v.check(v.value)) return `${v.name}:${v.value}`;
    else return a;
  }, '');
  
  return result;
}

export const state = () => ({
    center: { lat: 23.41322, lng: 121.219482 },
    shops: [],
    shop: {},
    query: "",
    type: null,
    city: 0,
    tag: "",
    largeImg: "",
    pageNum: 1
  })
  
export const actions = {
  async nuxtServerInit ({ commit, dispatch, getters }) {
    // await dispatch("getShops");
  },
  async getShops (context, dontSetShop){
    // let shops = await database.ref('/').once('value');
    // shops = shops.val().filter(data=>(data.recommendation_area||data.recommendation_level));
    // context.commit("setShops", shops);
    window.$nuxt.$nextTick(async ()=>{
      window.$nuxt.$loading.start();
      const data = await index.search({ 
        filters: getFilterString({
          name: 'type', value: "" + context.state.type, check: function(value){
            return typeof +value === 'number' && isFinite(+value) && +value > 0;
          }
        }, {
          name: 'city', value: "" + context.state.city, check: function(value){
            return typeof +value === 'number' && isFinite(+value) && +value > 0;
          }
        }, {
          name: '_tags', value: context.state.tag, check: function(value){
            return value;
          }
        }),
        query: context.state.query,
        restrictSearchableAttributes: [
          "name",
          "description",
          "tags"
        ]
      });
  
      let today = new Date();
      for (let i=0;i<data.hits.length;i++) {
        let info = data.hits[i].business_hours.match(/(星期[一|二|三|四|五|六|日]\s*(休息中|休息|\d+:*\d+\s*\-\s*\d+:*\d+))/gm);
        if(!info) continue;
        if(!info[today.getDay()?today.getDay()-1:6]) continue;
  
        let time = info[today.getDay()?today.getDay()-1:6].slice(3);
        let startTime, endTime;
        const firstDate = new Date(), secondDate = new Date();
        if(time === "休息" || !info){
          data.hits[i].open_status = {
            type: 1,
            text: "休息中"
          };
        }else{
          firstDate.setFullYear(today.getFullYear());
          firstDate.setFullYear(today.getMonth()+1);
          firstDate.setFullYear(today.getDate());
          secondDate.setFullYear(today.getFullYear());
          secondDate.setFullYear(today.getMonth()+1);
          secondDate.setFullYear(today.getDate());
  
          firstDate.setHours(time.split("-")[0].trim().slice(0,1));
          firstDate.setMinutes(time.split("-")[0].trim().slice(-2));
          secondDate.setHours(time.split("-")[0].trim().slice(0,1));
          secondDate.setMinutes(time.split("-")[0].trim().slice(-2));
  
          startTime = firstDate.getTime();
          endTime = secondDate.getTime();
  
          if(today.getTime() >= startTime && today.getTime() <= endTime){
            data.hits[i].open_status = {
              type: 1,
              text: "營業中"
            };
          } 
          else data.hits[i].open_status = {
            type: 1,
            text: "休息中"
          };
        }
      }
  
      context.commit("setShops", data.hits);
      if(!dontSetShop) context.commit("setShop", data.hits.length > 0?data.hits[0]:{});
      context.commit("setTag", '');
      window.$nuxt.$loading.finish();

      context.commit("initPageNum");
    });
    
    
  },
  getUserLocation (context){
    try{
      navigator.geolocation.getCurrentPosition(function (position) {
        context.commit("setCenter", { lat: position.coords.latitude, lng: position.coords.longitude });
      });
    }catch(err){
      context.commit("setCenter", { lat: context.state.sourceData.cities[1].latitude, lng: context.state.sourceData.cities[1].longitude });
    }
  },
  setCityAndCenter (context, city){
    context.commit("setCity", city);

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    if(+city > 0){
      const cityData = context.state.sourceData.cities[city];
      context.commit("setCenter", { lat: cityData.latitude, lng: cityData.longitude });
    }
  },
  async getRecommendationShops (context, city){
    context.commit("initPageNum");
    
    window.$nuxt.$nextTick(async ()=>{
      window.$nuxt.$loading.start();
      if(city){
        context.commit("setCity", city);
        if(+city > 0){
          const cityData = context.state.sourceData.cities[city];
          context.commit("setCenter", { lat: cityData.latitude, lng: cityData.longitude });
        }
      }else{
        city = context.state.city;
        if(!city) city = 1;
      }
      const query = city?context.state.sourceData.cities[city].text.slice(0, 2):'';
      const data = await index.search({ 
        query,
        restrictSearchableAttributes: [
          "recommendation_area",
          "recommendation_level"
        ],
        hitsPerPage: 8
      });
      console.log(data.hits);
      data.hits.sort((a,b)=>{
        const first = a.recommendation_level.indexOf(query)>=0?a.recommendation_level:a.recommendation_area;
        const second = b.recommendation_level.indexOf(query)>=0?b.recommendation_level:b.recommendation_area;
        return +first.slice(-1) - +second.slice(-1);
      });
      context.commit("setShops", data.hits);
  
      window.$nuxt.$loading.finish();
    });
  }
}
// export const strict = false;

  export const mutations = {
    setShops (state, shops) {
        state.shops = shops;
    },
    markerOnClick (state, index) {
      let shops = [...state.shops];
      let result = shops.splice(index, 1).concat(shops);

      state.shops = result;
    },
    setShop (state, shop) {
      state.shop = shop;
    },
    setQuery (state, query) {
      state.query = query;
    },
    setType (state, type) {
        state.type = type;
    },
    setCity (state, city) {
        state.city = city;
    },
    setCenter (state, center) {
        state.center = center;
    },
    setTag (state, tag) {
        state.tag = tag;
    },
    setLargeImg (state, largeImg) {
        state.largeImg = largeImg;
    },
    addPageNum (state){
      state.pageNum = state.pageNum + 1;
    },
    initPageNum (state){
      state.pageNum = 1;
    }
  }