<template>
    <b-container class='map-container'>
      <b-row>  
        <b-col lg='12' class='map'>
          <slot></slot>
          <button class="get-location-button" @click="getUserLocation"><img src="../assets/img/icon_getUserLocation.svg"/></button>
          <no-ssr>
            <gmap-map
              :center="center"
              :zoom="zoomLevel"
              map-type-id="roadmap"
              class="index-map"
              :options="{
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: true,
                streetViewControl: true,
                rotateControl: true,
                fullscreenControl: true,
                disableDefaultUi: false
              }"
              @center_changed="updateCenter"
              @dragend="dragEnd"
            >
              <gmap-marker
                v-for="(shop, index) in shops"
                :key="index"

                :position="{lat: parseFloat(shop.latitude), lng: parseFloat(shop.longitude)}"
                :clickable="true"
                :draggable="false"
                :icon="{url: getIcon(shop.type?shop.type[0]:0), scaledSize: selectedShop&&shop.objectID===selectedShop.objectID?{width: 67, height: 79}:{width: 55, height: 65} }"
                @click="markerClick(shop, index)"
              ></gmap-marker>
              <gmap-info-window
                :options="{pixelOffset: {width: 5,height: -65}}"
                
                :opened="selectedShop !== null && Object.getOwnPropertyNames(selectedShop).length > 1"
                :position="{lat: +selectedShop.latitude || 0, lng: +selectedShop.longitude || 0}"
                @closeclick=""
                style="width: 100px;"
              >
                <div class="info-window-container">
                  <span @click="clearSelectedShop" class="clear-info-window-button">X</span>
                  <ImageHandler 
                    :src="selectedShop.facebook_avatar"
                    v-if="selectedShop.facebook_avatar"
                    :containerStyle="{width:'120px', height: '80px', overflow: 'hidden', position: 'relative'}"
                    :alt="selectedShop.name"
                    :onClick="setShop"
                  />
                  <div style="padding: 10px; min-width: 160px;">
                    <h1 @click="setShop">{{selectedShop.name}}</h1>
                    <br/>
                    <p style="margin-top: 5px;font-size: 14px;">
                      {{this.$store.state.sourceData.types[selectedShop.type]?this.$store.state.sourceData.types[selectedShop.type[0]].text:""}}
                      <span style="float:right;color:#4de680;font-weight:bold;">{{selectedShop.open_status && selectedShop.open_status.type?selectedShop.open_status.text:""}}</span>
                    </p>  
                  </div>
                </div>

              </gmap-info-window>
            </gmap-map>
          </no-ssr>
        </b-col>
      </b-row>
    </b-container>
</template>

<style>
  .expand-map-button-index{
    border: none;
    background-color: rgba(255,255,255,0.9);
    color: gray;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    padding: 5px 30px;
  }
  html, body{
    overflow-y: hidden
  }
  
  .index-map{
    width: 100%; 
    height: calc(100vh - 60px);
  }

    .get-location-button{
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
        border: solid 1px gray;
        width: 45px;
        height: 45px;
        padding: 10px;
    }

    .get-location-button img{
        width: 100%;
        height: 100%;
    }

  .map-container h1{
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 0;
    height: 27px;
  }
    .clear-info-window-button{
        position: absolute;
        top: 5px;
        right: 10px;
        font-weight: bold;
        cursor: pointer;
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

  .type{
    color: #9FA0A0;
    font-size: 13px;
    margin: 0;
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
  }
  .info-window-container h1{
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .info-window-container h1:hover {
    color: #44AD47;
  }
  @media screen and (max-width:991px){
      .index-map{
        height: calc(60vh - 116px);
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
import markerIcon from '~/assets/img/icon_location.svg';
import { mapMutations } from 'vuex'
import ImageHandler from '~/components/ImageHandler.vue';

export default {
  components: {
    ImageHandler
  },
  data() {
    return {
      zoomLevel: 14,
      centerForSync: {...this.$store.center}
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
    },
    selectedShop: function() {
      return this.$store.state.shop;
    },
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
    setShop: function() {
      // this.$store.commit("setShop", this.selectedShop);
      $nuxt.$router.push(`/shop?objectID=${this.selectedShop.objectID}`);
    },
    getIcon: function(type) {
      if(this.$store.state.type) this.$store.state.sourceData.types[this.$store.state.type].icon;
      return this.$store.state.sourceData.types[type].icon;
      // return markerIcon;
    },
    initPageNum: function() {
      this.$store.commit("initPageNum");
    },
    getUserLocation: function(){
        this.$store.dispatch('getUserLocation');
    },
    clearSelectedShop: function(){
        this.$store.commit('setShop', {});
    },
    updateCenter(center) {
        this.centerForSync = {
            lat: center.lat(),
            lng: center.lng()
        };
    },
    dragEnd(){
        this.$store.commit("setCenter", this.centerForSync);
    }
  }
}
</script>
