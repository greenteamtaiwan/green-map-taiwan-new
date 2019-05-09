<template>
  <div>
    <Navbar :cities="cities" :typeOptions="items"/>
    <b-container class='map-container'>
      <ShopList  :selectedShops="data"/>
      <b-row>
        <b-col lg='12' class='map'>
          <no-ssr>
            <gmap-map
              :center="center"
              :zoom="zoomLevel"
              map-type-id="roadmap"
              style="width: 100%; height: calc(100vh - 60px);"
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
                  <img src="~/assets/img/picture 1.jpg" width="110px" height="80px">
                  <div style="padding: 10px;">
                    <h1>{{infoWindow.node.name}}</h1>
                    <br/>
                    <p style="margin-top: 10px;font-size: 14px;">
                      類別
                      <span style="float:right;color:#4de680;font-weight:bold;">休息中</span>
                    </p>
                  </div>
                </div>

              </gmap-info-window>
            </gmap-map>
          </no-ssr>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<style>

  html, body{
    overflow-y: hidden
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

  @media screen and (max-width:991px){
      html, body{
        overflow-y: initial;
      }
      .menu{
          display: none;
      }
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
          checked: true
        },
        {
          value: 2,
          icon: thrift_shop,
          type: 'thrift_shop',
          text: '二手商店',
          checked: true
        },
        {
          value: 2,
          icon: vegetarian_shop,
          type: 'vegetarian_shop',
          text: '素食店',
          checked: true
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
      ],
      data: [
        {
          "address" : "台中市中區三民路二段18巷6號",
          "business_time" : "請注意粉絲頁",
          "latitude" : 24.1422103,
          "longitude" : 120.6589805,
          "name" : "七喜廚房",
          "phone" : "04-22211700",
          "remark" : "七喜廚房又叫明日餐桌，是第一個在台灣實踐剩食利用的經營空間，嘗試開放共食、堅持以社區付的起的價格，推動在地市場的剩食，在地消耗。他們透過明日餐桌計畫，推動社區廚房減少食材過度浪費的問題。被人類拋棄的醜蔬果及剩餘食材，在這裡變身為一道道新鮮健康佳餚，來吧，走進這裡享受盛食，體會食材的美味，實踐真正的飲食零浪費。",
          "type" : "food_share",
          "url" : "https://www.facebook.com/7upkitchen/\nhttps://www.7ckitchen.com",
          "logo": 'https://i.imgur.com/OiSniLG.jpg',
          "stack":  [ 'tag1_Unpackaged', 'tag2_ZeroWaste', 'tag3', 'tag4' ]
        },
        {
          "address" : "108台北市萬華區中華路二段334號",
          "business_time" : "每週四1130~1300市場惜食分享, 每週五1500~1800共煮送餐交流",
          "latitude" : 25.0989537,
          "longitude" : 121.5081786,
          "name" : "南機拌飯",
          "phone" : "0963 615 016",
          "remark" : "南機拌飯由「地下勞動合作社」經營，作為地方社群工作、社會行動實驗、社區生活交流的活動空間。共同分租的夥伴團體還有「人生百味公司」與「夢想城鄉協會」等。萬華南機場老社區的神秘地下室，正聚集一群人交流合作：經營社群基地與協力社區發展，實驗社區廚房與在地市集；再生舊物與剩食，分享勞動與理念。",
          "type" : "free_shop",
          "url" : "https://www.facebook.com/NanjiRice/",
          "logo": 'https://i.imgur.com/YGKTNkA.jpg',
          "stack":  [ 'tag1_Unpackaged', 'tag2_ZeroWaste', 'tag3' ]
        },
        {
          "address" : "950台東縣台東市漢陽北路169巷64弄26號",
          "business_time" : "",
          "latitude" : 22.74739,
          "longitude" : 121.132759,
          "name" : "迷走。回家旅人空間",
          "phone" : 989360055,
          "remark" : "迷走是生活的旅行，回家是生命的感動。台東市區友善環境旅人空間。綠色慢活Ｘ深度旅遊Ｘ共享冰箱。Eco-friendly traveler's inn in Taitung city.Slow life, in-depth travel, shared fridge.",
          "shop_type" : "",
          "type" : "food_share",
          "url" : "https://www.facebook.com/lostandfoundtaitung/\nhttps://jtwagor.wixsite.com/lostandfoundtaitung",
          "logo": 'https://i.imgur.com/OiSniLG.jpg',
          "stack":  [ 'tag1_Unpackaged', 'tag2_ZeroWaste' ]
        },
        {
          "address" : "300新竹市東區光復路二段101號清華大學風雲樓一樓水木書苑內",
          "business_time" : "週二~周日1000~1800",
          "latitude" : 24.792323,
          "longitude" : 120.9950025,
          "name" : "水木咖啡 * 小客廳",
          "phone" : "03 572 3474",
          "remark" : "咖啡、書籍、食農教育",
          "type" : "",
          "url" : "https://www.facebook.com/%E6%B0%B4%E6%9C%A8%E5%92%96%E5%95%A1-x-%E5%B0%8F%E5%AE%A2%E5%BB%B3-The-Living-Room-645497232164723/",
          "logo": 'https://i.imgur.com/YGKTNkA.jpg',
          "stack":  [ 'tag1_Unpackaged' ]
        },
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
