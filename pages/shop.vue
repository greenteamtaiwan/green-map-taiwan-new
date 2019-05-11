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
                <p class="recommend"><img src="~/assets/img/icon_like.svg" height="20" width="20"> 綠點推薦</p>
                <h1>商家名稱</h1>
                <p class='type'>類別</p>
                <p class="description">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</p>
                
            </div>
            <div class="shop-content">
                <p><img src="~/assets/img/icon_time.svg"/>電話</p>
                <p><img src="~/assets/img/icon_location.svg"/>地址地址地址</p>
                <p><img src="~/assets/img/icon_phone.svg"/>0000000000</p>
                <p><img src="~/assets/img/icon_website.svg"/><a href="#">連結</a></p>
                <p><img src="~/assets/img/icon_memo.svg"/>備註</p>
                <no-ssr>
                    <gmap-map
                      :center="center"
                      :zoom="zoomLevel"
                      map-type-id="roadmap"
                      style="width: 200px; height: 200px; position: absolute; right: 0; bottom: 0; margin: 10px;"
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
                        v-for="(node, index) in nodes"
                        v-show="visiableItemArray.includes(node.type)"
                        :position="{lat: node.latitude, lng: node.longitude}"
                        :clickable="true"
                        :draggable="false"
                        @click="markerClick(node)"
                      />
                    </gmap-map>
                  </no-ssr>
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
    }
    .shop-content:nth-child(1){
        margin-right: 20px;
    }
    .type{
        border-bottom: solid 1px lightgray;
        margin-bottom: 20px;
        padding-bottom: 20px;
        color: lightgray;
        font-size: 14px;
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
        align-items: center;
        margin-bottom: 20px;
    }

  .shop-content:nth-child(2) img{
      width: 20px;
      margin-right: 20px;
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
    Logo,
    VuetifyLogo,
    Navbar,
    ShopList
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
      zoomLevel: 13,
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
          icon: food_share,
          type: 'food_share',
          text: '食物分享櫃',
          checked: true
        },
        {
          value: 2,
          icon: free_shop,
          type: 'free_shop',
          text: '免費商店',
          checked: false
        },
        {
          value: 2,
          icon: thrift_shop,
          type: 'thrift_shop',
          text: '二手商店',
          checked: false
        },
        {
          value: 2,
          icon: vegetarian_shop,
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
        const data = snapshot.val();

        console.log(data);

        this.rawNodes = data;
        this.center = {
          lat: data[0].latitude,
          lng: data[0].longitude
        }
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
