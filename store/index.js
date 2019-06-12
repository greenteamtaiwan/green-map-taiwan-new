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
// const algolia = algoliasearch(
//   'HNGIWGJG9Q',
//   'a9dc298f742ab70ad577ccc6f2195ea0'
// );
// const index = algolia.initIndex('greenmaptaiwan');
// index.setSettings({
//   hitsPerPage: 1000
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
    tag: ""
  })
  
export const actions = {
  async nuxtServerInit ({ commit, dispatch, getters }) {
    // await dispatch("getShops");
  },
  async getShops (context){
    // const data = await index.search({ 
    //   filters: getFilterString({
    //     name: 'type', value: "" + context.state.type, check: function(value){
    //       return typeof +value === 'number' && isFinite(+value) && +value > 0;
    //     }
    //   }, {
    //     name: 'city', value: "" + context.state.city, check: function(value){
    //       return typeof +value === 'number' && isFinite(+value) && +value > 0;
    //     }
    //   }, {
    //     name: '_tags', value: context.state.tag, check: function(value){
    //       return value;
    //     }
    //   }),
    //   query: context.state.query,
    //   restrictSearchableAttributes: [
    //     "name",
    //     "description",
    //     "_tags"
    //   ]
    // });

    // let today = new Date();
    // data.hits.forEach(data=>{
    //   try{
    //     let info = data.business_time.split("/n");
    //     let time = info[today.getDay()].splice(3);
    //     let startTime, endTime;
    //     if(time === "休息"){
    //       data.open_status = {
    //         type: 1,
    //         text: "休息中"
    //       };
    //     }else{
    //       startTime = new Date(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${time.split["-"][0]}`).getTime();
    //       endTime = new Date(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${time.split["-"][1]}`).getTime();

    //       if(today.getTime() >= startTime && today.getTime() <= endTime){
    //         data.open_status = {
    //           type: 1,
    //           text: "營業中"
    //         };
    //       } 
    //       else data.open_status = {
    //         type: 1,
    //         text: "休息中"
    //       };
    //     }
    //   }catch(err){
    //     data.open_status = {};
    //   }
    // });

    const shops = await database.ref('/').once('value');
    context.commit("setShops", shops.val());
    // context.commit("setShops", data.hits);
    // context.commit("setShop", data.hits.length > 0?data.hits[0]:{});
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
    
    if(+city > 0){
      const cityData = context.state.sourceData.cities[city];
      console.log({ lat: cityData.latitude, lng: cityData.longitude });
      // context.commit("setCenter", { lat: cityData.latitude, lng: cityData.longitude });
    }
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
    }
  }