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
  'Z1TQILX2PS',
  '5af274c2ae7f9edc9ae4fcf378911ded'
);
let index;
let recommendationsIndex;
let recommendationsAllIndex;

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
    center: { lng: 121.5147601, lat: 25.047819 },
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

      if(!index) index = algolia.initIndex('firebaseApp_greenmaptaiwan');
      const data = await index.search({ 
        filters: getFilterString({
          name: 'type', value: "" + context.state.type, check: function(value){
            return typeof +value === 'number' && isFinite(+value) && +value > 0;
          }
        }, {
          name: 'city', value: "" + context.state.city, check: function(value){
            return typeof +value === 'number' && isFinite(+value) && +value > 0;
          }
        }, 
        //   {
        //   name: '_tags', value: context.state.tag, check: function(value){
        //     return value;
        //   }
        // }
        ),
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

        if(!time) data.hits[i].open_status = {}; 
        else if(time.trim() === "休息" || !info){
          data.hits[i].open_status = {
            type: 1,
            text: "休息中"
          };
        }else{
          firstDate.setFullYear(today.getFullYear());
          firstDate.setMonth(today.getMonth());
          firstDate.setDate(today.getDate());
          secondDate.setFullYear(today.getFullYear());
          secondDate.setMonth(today.getMonth());
          secondDate.setDate(today.getDate());
          
          firstDate.setHours(time.split("-")[0].trim().split(":")[0]);
          firstDate.setMinutes(time.split("-")[0].trim().split(":")[1]);
          secondDate.setHours(time.split("-")[1].trim().split(":")[0]);
          secondDate.setMinutes(time.split("-")[1].trim().split(":")[1]);
  
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
        console.log(position);
        context.commit("setCenter", { lat: position.coords.latitude, lng: position.coords.longitude });
      });
    }catch(err){
      console.log("getUserLocation err:::", err);
      // context.commit("setCenter", { lat: context.state.sourceData.cities[1].latitude, lng: context.state.sourceData.cities[1].longitude });
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
      }
      const query = city?context.state.sourceData.cities[city].text.slice(0, 2):'全部';
      if(city && !recommendationsIndex)recommendationsIndex = algolia.initIndex('firebaseApp_recommendations');
      else if(!recommendationsAllIndex) recommendationsAllIndex = algolia.initIndex('firebaseApp_recommendations-all');

      let index = city?recommendationsIndex:recommendationsAllIndex;
      const data = await index.search({ 
        query,
        restrictSearchableAttributes: [
          city?"recommendation_area":"recommendation_all"
        ],
        hitsPerPage: 4
      });

      context.commit("setShops", data.hits);
  
      window.$nuxt.$loading.finish();
    });
  },
  async getShop(context, objectID){
    window.$nuxt.$nextTick(async ()=>{
      window.$nuxt.$loading.start();

      if(!index) index = algolia.initIndex('firebaseApp_greenmaptaiwan');
      index.getObject(objectID, (err, shop) => {
        context.commit("setShop", shop);
  
        window.$nuxt.$loading.finish();
      });

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