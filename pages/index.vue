<template>
  <div>
    <Navbar/>
    <b-container id='map-container'>
      <b-row>
        <b-col lg='3' class='map-aside-container' v-class="{'hide-sidebar': hideSidebar}">
          <Sidebar :typeOptions="items" :cities="cities"/>
        </b-col>
        <b-col lg='12' class='map'>
          <no-ssr>
            <gmap-map
              :center="center"
              :zoom="zoomLevel"
              map-type-id="roadmap"
              style="width: 100%; height: calc(100vh - 40px);"
            >
              <gmap-marker
                :key="index"
                v-for="(node, index) in nodes"
                v-show="visiableItemArray.includes(node.type)"
                :position="{lat: node.latitude, lng: node.longitude}"
                :clickable="true"
                :draggable="false"
                @click="markerClick(node)"
              />
              <gmap-info-window
                :options="infoWindow.options"
                :position="infoWindow.positions"
                :opened="infoWindow.isOpen"
                @closeclick="infoWindow.isOpen=false"
                style="width: 100px;"
              >
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                  <h1>{{infoWindow.node.name}}</h1>
                  <img src="~/assets/img/icon_like.svg" height="20" width="20">
                </div>
                <p class='type'>類別</p>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <p class='address'>{{infoWindow.node.address}}</p>
                  
                    <button>
                      <img src="~/assets/img/icon_down_arrow.svg" height="20" width="20" class='gmap-info-window-arrow'>
                    </button>
                  
                </div>
                <a :href="`https://www.google.com/maps/search/?api=1&query=${infoWindow.node.name}`" target="_blank" rel="noopener noreferer">
                  <button class='google-map-button'>開啟 google map</button>
                </a>

              </gmap-info-window>
            </gmap-map>
          </no-ssr>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<style>
  *{
    font-family: 微軟正黑體;
  }

  html, body{
    overflow-y: hidden
  }

  .map-aside-container{
    position: fixed;
    left: 0;
    z-index: 1;    
    transition: left 1s;
  }

  .hide-sidebar{
      left: -100%;
  }

  h1{
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

  @media screen and (max-width:991px){
      html, body{
        overflow-y: initial;
      }
      .menu{
          display: none;
      }
  }

  #map-container{
    padding: 0;
    margin: 0;
    margin-top: 40px;
    max-width: unset;
  }
  #map-container > .row,
  #map-container > .row > div {
    margin: 0;
    padding: 0;
  }

  p.recommend {
      color:pink;
      font-weight: bold;
      float: right;
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

  .gmap-info-window-arrow{
    transform: rotate(-90deg)
  }

  /*--覆蓋預設樣式--*/
  .custom-select{
    background: url('../assets/img/icon_down_arrow.svg') no-repeat right 0.75rem center/8px 10px;
    background-color: #ffffff;
    background-size: 15px 15px;
  }
  .gm-style-iw.gm-style-iw-c{
    width: 200px;
  }
  button.gm-ui-hover-effect{
    display: none!important;
  }
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import * as firebase from 'firebase'
import { defaultCoreCipherList } from 'constants'
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'
import SubSidebar from '~/components/SubSidebar.vue'

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
    Logo,
    VuetifyLogo,
    Navbar,
    Sidebar,
    SubSidebar
  },
  data() {
    return {
      hideSidebar: true,
      infoWindow: {
        options: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        positions: { lat: 23.41322, lng: 121.219482 },
        isOpen: false,
        node: {}
      },
      showModal: false,
      infowindowOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      dialog: true,
      show: false,
      center: { lat: 23.41322, lng: 121.219482 },
      zoomLevel: 9,
      markerOptions: {
        opacity: 0.5
      },
      rawNodes: [],
      // for header
      drawer: true,
      items: [
        {
          value: null,
          icon: null,
          type: null,
          text: '所有分類',
          checked: true
        },
        {
          value: 1,
          icon: 'fastfood',
          type: 'food_share',
          text: '食物分享櫃',
          checked: true
        },
        {
          value: 2,
          icon: 'shop',
          type: 'free_shop',
          text: '免費商店',
          checked: false
        },
        {
          value: 2,
          icon: 'history',
          type: 'thrift_shop',
          text: '二手商店',
          checked: false
        },
        {
          value: 2,
          icon: 'face',
          type: 'vegetarian_shop',
          text: '素食店',
          checked: false
        }
      ],
      cities: [
        {value: '1', text: "台北市"},
        {value: '', text: "桃園市"},
        {value: '', text: "新竹市"},
        {value: '', text: "苗栗市"},
        {value: '', text: "台中市"},
        {value: '', text: "彰化市"},
        {value: '', text: "雲林市"},
        {value: '', text: "嘉義市"},
        {value: '', text: "台南市"},
        {value: '', text: "高雄市"},
        {value: '', text: "屏東市"},
        {value: '', text: "台東市"},
        {value: '', text: "花蓮市"},
        {value: '', text: "宜蘭市"},
        {value: '', text: "基隆市"},
        {value: '', text: "南投市"},
        {value: '', text: "澎湖市"},
        {value: '', text: "金門市"},
      ]
    }
  },
  computed: {
    visiableItemArray: function() {
      let map = []
      for (let index in this.items) {
        let item = this.items[index]
        if (item.checked) {
          map.push(item.type)
        }
      }
      return map
    },
    nodes: function() {
      let nodes = []
      for (let index in this.rawNodes) {
        let rawNode = this.rawNodes[index]
        if (this.visiableItemArray.includes(rawNode.type)) {
          nodes.push(rawNode)
        }
      }

      return nodes
    }
  },
  mounted: function() {
    firebase
      .database()
      .ref('nodes')
      .once('value')
      .then(snapshot => {
        this.rawNodes = snapshot.val()
      })
  },
  methods: {
    mapClick: function(event) {
      console.log(this.$refs.myMap.mapObject._zoom)
      if (this.$refs.myMap.mapObject._zoom < 15) {
        alert('需要再縮小')
      }
    },
    markerClick: function(node) {
      this.center = { lat: node.latitude, lng: node.longitude }
      this.infoWindow = {
        options: this.infowindowOptions,
        positions: { lat: node.latitude, lng: node.longitude },
        isOpen: true,
        node: node
      }
    },
    markerOver: function(event) {
      event.sourceTarget.setOpacity(1.0)
    },
    markerOut: function(event) {
      event.sourceTarget.setOpacity(0.5)
    }
  }
}
</script>
