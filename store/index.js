import * as firebase from 'firebase'

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
  'HNGIWGJG9Q',
  'a9dc298f742ab70ad577ccc6f2195ea0'
);
const index = algolia.initIndex('greenmaptaiwan');


function getFilterString(){
  const result = Array.from(arguments).reduce((a,v,i)=>{
    if(a && typeof +v.value === 'number' && isFinite(+v.value) && +v.value > 0) return `${a} AND ${v.name} = ${v.value}`; 
    else if(typeof +v.value === 'number' && isFinite(+v.value) && +v.value > 0) return `${v.name} = ${v.value}`;
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
    city: 0
  })
  
export const actions = {
  async nuxtServerInit ({ commit, dispatch, getters }) {
    await dispatch("getShops");
  },
  async getShops (context){
    const data = await index.search({ 
      filters: getFilterString({name: 'type', value: context.state.type}, {name: 'city', value: context.state.city}),
      query: context.state.query,
      restrictSearchableAttributes: [
        "name",
        "remark"
      ]
    });

    context.commit("setShops", data.hits);
    context.commit("setShop", data.hits.length > 0?data.hits[0]:{});
  },
  getUserLocation (context){
    try{
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("position:::", position);
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
    }
  }