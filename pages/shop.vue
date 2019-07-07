<template>
  <div>
    <Navbar :cities="cities" :typeOptions="items"/>
    <div class='shop-container'>
        <div class='img-container'>
            <div class="img"><ImageHandler v-if="shop.photo1!=='空白'" :src="shop.photo1||this.placeholders[0]" :alt="shop.name" :onClick="setLargeImg"/></div>
            <div class="imgs">
                <div class="img"><ImageHandler v-if="shop.photo2!=='空白'" :src="shop.photo2||this.placeholders[1]" :alt="shop.name" :onClick="setLargeImg"/></div>
                <div class="img"><ImageHandler v-if="shop.photo3!=='空白'" :src="shop.photo3||this.placeholders[2]" :alt="shop.name" :onClick="setLargeImg"/></div>
            </div>
            <div class="img desktop"><ImageHandler v-if="shop.photo4!=='空白'" :src="shop.photo4||this.placeholders[3]" :alt="shop.name" :onClick="setLargeImg"/></div>
            <div class="imgs desktop">
                <div class="img"><ImageHandler v-if="shop.photo5!=='空白'" :src="shop.photo5||this.placeholders[4]" :alt="shop.name" :onClick="setLargeImg"/></div>
                <div class="img"><ImageHandler v-if="shop.photo6!=='空白'" :src="shop.photo6||this.placeholders[5]" :alt="shop.name" :onClick="setLargeImg"/></div>
            </div>
        </div>

        <div class="shop-content-container">
            <div class="shop-content">
                <div class="recommend-container"><p class="recommend" v-if="shop.is_recommended"><img src="~/assets/img/icon_like.svg" height="20" width="20"> 綠點推薦</p></div>
                <h1>{{shop.name}}</h1>
                <p class='type'>{{ this.$store.state.sourceData.types[shop.type]?this.$store.state.sourceData.types[shop.type].text:""}}</p>
                <p class="description">{{shop.recommendation_description || shop.description}}</p>

            </div>
            <div class="shop-content">
                <div class="shop-info">
                  <p v-if="shop.business_hours || shop.alt_business_hours" style="white-space: pre-line"><img src="~/assets/img/icon_time.svg"/>{{shop.business_hours || shop.alt_business_hours}}</p>
                  <p v-if="shop.address"><img src="~/assets/img/icon_location.svg"/>{{shop.address}}</p>
                  <p v-if="shop.phone"><img src="~/assets/img/icon_phone.svg"/>
                    <a v-for="(phone, index) in shop.phone" :href="`tel:${phone.replace(/\D/g, '')}`">{{phone}}</a>
                  </p>
                  <p v-if="shop.url && shop.url.length > 0">
                    <img src="~/assets/img/icon_website.svg"/>
                    <span>
                      <a v-for="(url, index) in shop.url" :href="url" target="_blank" rel="nofollow">{{url.indexOf("facebook")>=0?"Facebook":"官方網站"}}</a>
                    </span>
                  </p>
                  <p><img src="~/assets/img/icon_navigation.svg"/><a :href="`https://www.google.com/maps/dir/?api=1&destination=${shop.address}`" target="_blank">我要導航</a></p>
                  <p v-if="shop._tags">tags: {{shop.tags}}</p>
                  <!--<p style="background-color:#d3d3d3; ">備註（開發顯示用-上線將移除）：【tag】{{ demoShop._tags}} /【子類別】{{ this.$store.state.sourceData.subtypes[demoShop.shop_type][demoShop.sub_shop_type] }}/【城市】{{ this.$store.state.sourceData.cities[demoShop.city].text }}/【屬於推薦綠點？】{{ demoShop.is_recommended}} </p>-->
                </div>
                <div class="shop-map-container">
                <nuxt-link to="/shop-map"><button class="expand-map-button-map mobile">展開地圖</button></nuxt-link>
                <no-ssr>
                    <gmap-map
                      :center="{lat: parseFloat(shop.latitude), lng: parseFloat(shop.longitude)}"
                      :zoom="13"
                      map-type-id="roadmap"
                      class="shop-map"
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
                        :position="{lat: parseFloat(shop.latitude), lng: parseFloat(shop.longitude)}"
                        :clickable="true"
                        :draggable="false"
                        :icon="{url: getIcon(shop.type), scaledSize: {width: 55, height: 65} }"
                      />
                    </gmap-map>
                  </no-ssr>
              </div>
            </div>
        </div>
    </div>
    <LargeImgViewer v-if="this.$store.state.largeImg" :src="this.$store.state.largeImg"/>
  </div>
</template>

<style scoped>
  .expand-map-button-map{
    border: none;
    background-color: rgba(255,255,255,0.9);
    color: gray;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    padding: 5px 30px;
  }

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
        flex-direction: column;
        margin-right: 5px;
    }
    .shop-container .img{
        overflow: hidden;
        position: relative;
    }
    .shop-container .imgs > .img{
        height: 155px;
    }
    .shop-container .imgs .img:nth-child(1){
        margin-bottom: 5px;
    }

    .description{
      white-space: pre-line;
    }

    h1{
        text-align: center;
        margin: 20px 0;
    }
    .img-container > .img{
        flex: 2;
        margin-right: 5px;
        height: 315px;
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
    .shop-content p{
      word-break: break-word;
    }
    .shop-content p span a{
      display: block;
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
        align-items: flex-start;
    }

  .shop-content:nth-child(2) img{
      width: 20px;
      margin-right: 20px;
      margin-top: 3px;
  }

  .shop-info{
    width: calc(100% - 220px); 
    margin-right: 20px;
  }

  .shop-map-container{
    width: 200px; 
    position: relative;
  }
  .shop-map{
    width: 200px; 
    height: 200px; 
    position: absolute; 
    right: 0; 
    bottom: 0;
  }

  @media screen and (max-width:991px){
    .shop-container{
      margin-top: 116px;
    }
    .shop-content-container{
      flex-direction: column;
      padding: 20px 0 0;
    }

    .shop-content:nth-child(1){
      margin-right: 0;
      border-bottom: solid 1px lightgray;
    }

    .shop-container .imgs.desktop{
        display: none;
    }

    .shop-content:nth-child(2){
      flex-direction: column;
      padding: 20px 0 0;
    }

    .shop-info{
      width: 100%;
      margin-right: 0;
      padding: 0 20px;
    }

    .shop-map-container{
      width: 100%;
    }

    .shop-map{
      position: relative;
      height: 300px; 
      width: 100%;
    }
  }
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import * as firebase from 'firebase'
import { defaultCoreCipherList } from 'constants'
import Navbar from '~/components/Navbar.vue'
import ShopList from '~/components/ShopList.vue'
import food_bank from '~/assets/img/icon_food_bank.svg';
import food_share from '~/assets/img/icon_food_share.svg';
import free_shop from '~/assets/img/icon_free_shop.svg';
import thrift_shop from '~/assets/img/icon_thrift_shop.svg';
import vegetarian_shop from '~/assets/img/icon_tag_vegetarian_shop.svg';
import markerIcon from '~/assets/img/icon_location.svg';
import ImageHandler from '~/components/ImageHandler.vue';
import LargeImgViewer from '~/components/LargeImgViewer.vue';

import GT1 from '~/assets/img/GT1.png';
import GT2 from '~/assets/img/GT2.png';
import GT3 from '~/assets/img/GT3.png';
import GT4 from '~/assets/img/GT4.png';
import GT5 from '~/assets/img/GT5.png';
import GT6 from '~/assets/img/GT6.png';

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
    Navbar,
    ImageHandler,
    LargeImgViewer
  },
  data() {
    return {
      demoShop: {
        is_recommended: true,
        recommend_level: 1,
        city: 1, // 對照city.js索引
        address:"台北市大安區新生南路二段1號\r\n大安森林公園露天音樂台",
        business_time:"週一9:00-20:00",
        alt_bussiness_time: "每個雙月(日期會提前於粉專公告)",
        latitude: 121.536231,
        longitude: 25.025691,
        name:"白象野曝",
        phone:"02-2222-2222",
        description:"白象野曝計畫是以分享為主題的野餐活動，在大安森林公園，每兩個月舉辦一次，透過交換或單純分享贈予，你我可以減少速食消費的現代問題。\r\n斷捨離讓我們學會過的知足簡單，而不再需要的東西可以為它找到延續的價值，就像帶來白象野曝，送給有需要的人，你也可能找到需要的二手物。\r\n「白象野曝」不是以物易物，而是所有的東西都是一個禮物，擁有者免費提供，讓有需要或喜歡的人可以帶走，讓分享的意義取代重複的浪費。",
        shop_type: 3, // 對照types.js索引
        sub_shop_type: 0, // 對照subTypes.js索引(如此案例為: subTypes[2][0])
        url:"https://www.facebook.com/white.elephant.free/",
        photo0: 'https://i.imgur.com/AUmRdBD.jpg',
        photo1: 'https://i.imgur.com/nRpuru2.jpg',
        photo2: 'https://i.imgur.com/TDOSd3k.jpg',
        photo3: 'https://i.imgur.com/eKOQDbN.jpg',
        photo4: 'https://i.imgur.com/iNL9nVA.jpg',
        photo5: 'https://i.imgur.com/fpDMHnW.jpg',
        photo6: 'https://i.imgur.com/QyiD7pp.jpg',
        _tags: "二手市集, 免費市集"
      },
      placeholders: [
        GT1,
        GT2,
        GT3,
        GT4,
        GT5,
        GT6
      ]
    }
  },
  computed: {
    shop: function() {
      return this.$store.state.shop;
    }
  },
  mounted: function() {
    if(this.$store.state.shop !== null && Object.getOwnPropertyNames(this.$store.state.shop).length > 1){
      this.getRandomPlaceholders();
    }else{
      $nuxt.$router.push(`/shop?objectID=${this.$store.state.shop.objectID}`);
    }
  },
  methods: {
    getRandomPlaceholders: function(){
      this.placeholders = this.shuffle(this.placeholders);
    },
    shuffle: function(input) {
      for (var i = input.length-1; i >=0; i--) {

          var randomIndex = Math.floor(Math.random()*(i+1));
          var itemAtIndex = input[randomIndex];

          input[randomIndex] = input[i];
          input[i] = itemAtIndex;
      }
      return input;
    },
    getIcon: function(type) {
      return this.$store.state.sourceData.types[type].icon;
      // return markerIcon;
    },
    setLargeImg: function(largeImg){
      this.$store.commit("setLargeImg", largeImg);
    }
  }
}
</script>
