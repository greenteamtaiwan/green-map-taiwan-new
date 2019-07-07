<template>
  <div class="index-map-container">
    <no-ssr>
            <gmap-map
              :center="center"
              :zoom="zoomLevel"
              map-type-id="roadmap"
              class="index-map"
            >
              <gmap-marker
                v-for="(shop, index) in shops"
                :key="index"

                :position="{lat: parseFloat(shop.latitude), lng: parseFloat(shop.longitude)}"
                :clickable="true"
                :draggable="false"
                :icon="{url: getIcon(shop.type), scaledSize: {width: 55, height: 65} }"
                @click="markerClick(shop, index)"
              ></gmap-marker>
              <gmap-info-window
                :options="{pixelOffset: {width: 0,height: -35}}"
                
                :opened="this.$store.state.shop !== null && Object.getOwnPropertyNames(this.$store.state.shop).length > 1"
                :position="{lat: +this.$store.state.shop.latitude || 0, lng: +this.$store.state.shop.longitude || 0}"
                @closeclick=""
                style="width: 100px;"
              >
                <div class="info-window-container"  @click="setShop">
                  <ImageHandler 
                    :src="this.$store.state.shop.facebook_avatar"
                    v-if="this.$store.state.shop.facebook_avatar"
                    :containerStyle="{width:'120px', height: '80px', overflow: 'hidden', position: 'relative'}"
                    :alt="this.$store.state.shop.name"
                  />
                  <div style="padding: 10px; min-width: 160px;">
                    <h1>{{this.$store.state.shop.name}}</h1>
                    <p style="margin-top: 10px;font-size: 14px;">
                      {{this.$store.state.sourceData.types[this.$store.state.shop.type]?this.$store.state.sourceData.types[this.$store.state.shop.type].text:""}}
                      <span style="float:right;color:#4de680;font-weight:bold;">{{this.$store.state.shop.open_status && this.$store.state.shop.open_status.type?this.$store.state.shop.open_status.text:""}}</span>
                    </p>  
                  </div>
                </div>

              </gmap-info-window>
            </gmap-map>
          </no-ssr>
          <div class="shop-map-shop-container" v-if="this.$store.state.shop.name"><ShopItem :shop="this.$store.state.shop" /></div>
  </div>
</template>

<style>
    .shop-map-shop-container{
        position: fixed;
        bottom: 0;
        padding: 0 10px;
        width: 100%;
    }

    .index-map-container .index-map{
        height: 100vh;
        width: 100vw;
    }
    .shop-map-shop-container .recommend{
        justify-content: flex-start;
    }
  html, body{
    overflow-y: hidden
  }
  
  .index-map{
    width: 100%; 
    height: calc(100vh - 60px);
  }

  .map-container h1{
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 0;
  }

  .address{
    margin: 10px 0;
  }

  .google-map-button{
      color: #44AD47;
      border-radius: 5px;
      padding: 5px 20px;
      border: solid 1px;
      font-size: 12px;
      display: block;
      margin: auto;
  }

  p{
    margin: 0;
  }

  .type{
    color: #9FA0A0;
    font-size: 13px;
    margin: 0;
  }

  li{
    list-style-type: none;
  }
  



  .map-container{
    padding: 0;
    margin: 0;
    margin-top: 60px;
    max-width: unset;
  }
  .map-container > .row,
  .map-container > .row > div {
    margin: 0;
    padding: 0;
  }

  p.recommend {
      color:#EE5593;
      font-weight: bold;
      display: flex;
      align-items: center;
  }
  .recommend img{
    width: unset;
    margin-right: 5px;
  }
  p.type{
    display: block;
    color: lightgray;
    font-size: 13px;
  }

  .info-window-container{
    display: flex; 
    justify-content: space-between; 
    margin-bottom: 5px;
    cursor: pointer;
  }
  .info-window-container h1{
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info-window-container:hover h1{
    color: #44AD47;
  }
  @media screen and (max-width:991px){
      .index-map{
        height: calc(60vh - 116px);
      }
      html, body{
        overflow-y: initial;
      }
      .menu{
          display: none;
      }

      .map-container .sidebar{
        display: none;
      }

      .map-container{
        margin-top: 116px;
      }
  }
  .gmap-info-window-arrow{
    transform: rotate(-90deg)
  }
  .gm-style-iw.gm-style-iw-c h1{
    font-size: 20px;
  }
  /*--覆蓋預設樣式--*/
  .gm-style-iw.gm-style-iw-c{
    padding: 0;
    height: 80px;
    font-family: 微軟正黑體;
  }
</style>

<script>
import { defaultCoreCipherList } from 'constants';
import Navbar from '~/components/Navbar.vue';
import ShopItem from '~/components/ShopItem.vue';
import IndexMapShopList from '~/components/IndexMapShopList.vue';
import markerIcon from '~/assets/img/icon_location.svg';
import { mapMutations } from 'vuex'
import ImageHandler from '~/components/ImageHandler.vue';

export default {
  components: {
    Navbar,
    ShopItem,
    ImageHandler,
    IndexMapShopList
  },
  data() {
    return {
      showShopList: true,
      zoomLevel: 9
    }
  },
  computed: {
    visiableItemArray: function() {
      let map = []
      for (let index in this.$store.state.sourceData.types) {
        let item = this.$store.state.sourceData.types[index]
        if (item.checked) {
          map.push(item.value)
        }
      }
      return map
    },
    shops: function() {
      return this.$store.state.shops;
    },
    center: function() {
      return this.$store.state.center;
    }
  },
  mounted: function() {
    this.$store.dispatch("getShops",true);
    this.$store.dispatch("getUserLocation");
  },
  methods: {
    mapClick: function(event) {
      // console.log(this.$refs.myMap.mapObject._zoom)
      if (this.$refs.myMap.mapObject._zoom < 15) {
        alert('需要再縮小')
      }
    },
    markerClick: function(shop, index) {
      this.$store.commit("setCenter", { lat: shop.latitude, lng: shop.longitude });
      this.$store.commit("markerOnClick", index);
      this.$store.commit("setShop", shop);
    },
    markerOver: function(event) {
      event.sourceTarget.setOpacity(1.0)
    },
    markerOut: function(event) {
      event.sourceTarget.setOpacity(0.5)
    },
    toggleShopList: function() {
      this.showShopList = !this.showShopList;
    },
    setShop: function() {
        this.$store.commit("setShop", this.$store.state.shop);
        $nuxt.$router.push(`/shop?objectID=${this.$store.state.shop.objectID}`);
    },
    getIcon: function(type) {
      return this.$store.state.sourceData.types[type].icon;
      // return markerIcon;
    }
  }
}
</script>
