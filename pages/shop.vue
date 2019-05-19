<template>
  <div>
    <Navbar :cities="cities" :typeOptions="items"/>
    <div class='shop-container'>
        <div class='img-container'>
            <div class="img"><img src="~/assets/img/picture 1.jpg"/></div>
            <div class="imgs">
                <div class="img"><img src="~/assets/img/picture 1.jpg"/></div>
                <div class="img"><img src="~/assets/img/picture 1.jpg"/></div>
            </div>
            <div class="img"><img src="~/assets/img/picture 1.jpg"/></div>
            <div class="imgs">
                <div class="img"><img src="~/assets/img/picture 1.jpg"/></div>
                <div class="img"><img src="~/assets/img/picture 1.jpg"/></div>
            </div>
        </div>

        <div class="shop-content-container">
            <div class="shop-content">
                <div class="recommend-container"><p class="recommend" v-if="shop.isreCommended"><img src="~/assets/img/icon_like.svg" height="20" width="20"> 綠點推薦</p></div>
                <h1>{{shop.name}}</h1>
                <p class='type'>推薦</p>
                <p class="description">{{shop.remark}}</p>
                
            </div>
            <div class="shop-content">
                <div style="width: calc(100% - 220px); marginRight: 20px;">
                  <p v-if="shop.phone"><img src="~/assets/img/icon_time.svg"/>{{shop.phone}}</p>
                  <p v-if="shop.address"><img src="~/assets/img/icon_location.svg"/>{{shop.address}}</p>
                  <p v-if="shop.phone"><img src="~/assets/img/icon_phone.svg"/><a :href="`tel:${shop.phone}`">{{shop.phone}}</a></p>
                  <p v-if="shop.url"><img src="~/assets/img/icon_website.svg"/><a :href="shop.url" target="_blank" rel="nofollow">{{shop.url}}</a></p>
                </div>
                <div style="width: 200px; position: relative;">
                <no-ssr>
                    <gmap-map
                      :center="{lat: shop.latitude, lng: shop.longitude}"
                      :zoom="13"
                      map-type-id="roadmap"
                      style="width: 200px; height: 200px; position: absolute; right: 0; bottom: 0;"
                       :options="{
                        zoomControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        fullscreenControl: false,
                        disableDefaultUi: false
                      }"
                    >
                      <gmap-marker
                        :key="index"
                        :position="{lat: shop.latitude, lng: shop.longitude}"
                        :clickable="true"
                        :draggable="false"
                      />
                    </gmap-map>
                  </no-ssr>
              </div>
            </div> 
        </div>
    </div>
  </div>
</template>

<style scoped>
  html, body{
    overflow-y: auto!important;
  }
    .shop-container{
        margin-top: 60px;
        min-height: calc(100vh - 60px);
        background-color: #f3f4f5;
    }

    .shop-container .img-container{
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #ffffff;
    }
    .shop-container .imgs{
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-right: 5px;
    }
    .shop-container .imgs .img:nth-child(1){
        margin-bottom: 5px;
    }
    h1{
        text-align: center;
        margin: 20px 0;
    }
    .img-container > .img{
        flex: 2; 
        margin-right: 5px;
    }
    .shop-container img{
        width: 100%;
        height: 100%;
    }

    .shop-content-container{
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }
    .shop-content{
        background-color: #ffffff;
        padding: 20px;
        flex: 1;
        align-items: stretch;
        position: relative;
        min-height: 240px;
    }
    .shop-content:nth-child(1){
        margin-right: 20px;
    }
    .shop-content:nth-child(2){
        display: flex;
    }
    .type{
        border-bottom: solid 1px lightgray;
        margin-bottom: 20px;
        padding-bottom: 20px;
        color: lightgray;
        font-size: 14px;
    }
    .recommend-container{
      min-height: 24px;
    }
      p.recommend {
      color:#EE5593;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .recommend img{
    width: 16px;
    margin-right: 5px;
  }

    .shop-content:nth-child(2) p{
        display: flex; 
        margin-bottom: 20px;
    }

  .shop-content:nth-child(2) img{
      width: 20px;
      margin-right: 20px;
      margin-top: 4px;
  }
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import * as firebase from 'firebase'
import { defaultCoreCipherList } from 'constants'
import Navbar from '~/components/Navbar.vue'
import ShopList from '~/components/ShopList.vue'
import food_share from '~/assets/img/icon_food_share.svg';
import free_shop from '~/assets/img/icon_free_shop.svg';
import thrift_shop from '~/assets/img/icon_thrift_shop.svg';
import vegetarian_shop from '~/assets/img/icon_tag_vegetarian_shop.svg';

const config = {
  apiKey: 'AIzaSyA5siB2Jg64LhQNlieawQ69kOL78X5Kov8',
  authDomain: 'greenmaptaiwan.firebaseapp.com',
  databaseURL: 'https://greenmaptaiwan.firebaseio.com',
  projectId: 'greenmaptaiwan',
  storageBucket: 'greenmaptaiwan.appspot.com',
  messagingSenderId: '395267289672'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default {
  components: {
    Navbar
  },
  data() {
    return {

    }
  },
  computed: {
    shop: function() {
      return this.$store.state.shop;
    }
  },
  mounted: function() {

  },
  methods: {

  }
}
</script>
