<template>
  <div>
    <Navbar :cities="cities" :typeOptions="items"/>
    <div class='shop-container'>
        <div class='img-container'>
            <div class="img"><img :src="demoShop.photo1"/></div>
            <div class="imgs">
                <div class="img"><img :src="demoShop.photo2"/></div>
                <div class="img"><img :src="demoShop.photo3"/></div>
            </div>
            <div class="img"><img :src="demoShop.photo4"/></div>
            <div class="imgs">
                <div class="img"><img :src="demoShop.photo5"/></div>
                <div class="img"><img :src="demoShop.photo6"/></div>
            </div>
        </div>

        <div class="shop-content-container">
            <div class="shop-content">
                <p class="recommend"><img src="~/assets/img/icon_like.svg" height="20" width="20"> 綠點推薦</p>
                 <h1> {{ demoShop.name  }} </h1>
                <p class='type'>{{ demoShop.type }}</p>
                <p class="description">{{ demoShop.description }}</p>

            </div>
            <div class="shop-content">
                <p><img src="~/assets/img/icon_time.svg"/>{{ demoShop.business_time }}</p>
                <p><img src="~/assets/img/icon_location.svg"/>{{ demoShop.address }}</p>
                <p><img src="~/assets/img/icon_phone.svg"/>{{ demoShop.phone }}</p>
                <p><img src="~/assets/img/icon_website.svg"/><a href="#">{{ demoShop.url }}</a></p>
                <p><img src="~/assets/img/icon_memo.svg"/>備註：子類別：{{ subTypes[demoShop.shop_type][demoShop.sub_shop_type] }}/位於{{ cities[demoShop.city].text }} /類別：{{ items[demoShop.shop_type].text }} </p>
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
            text: '所有分類',
            checked: true
        },
        {
            value: 1,
            text: '素食',
            checked: true
        },
        {
            value: 2,
            text: '二手市集/商店',
            checked: true
        },
        {
            value: 3,
            text: '免費市集/商店',
            checked: true
        },
        {
            value: 4,
            text: '享食冰箱',
            checked: true
        },
        {
            value: 5,
            text: '食物銀行',
            checked: true
        }
      ],
      cities: [
        {value: '1', text: "台北市"},
        {value: '2', text: "桃園市"},
        {value: '3', text: "新竹市"},
        {value: '4', text: "苗栗市"},
        {value: '5', text: "台中市"},
        {value: '6', text: "彰化市"},
        {value: '7', text: "雲林市"},
        {value: '8', text: "嘉義市"},
        {value: '9', text: "台南市"},
        {value: '10', text: "高雄市"},
        {value: '11', text: "屏東市"},
        {value: '12', text: "台東市"},
        {value: '13', text: "花蓮市"},
        {value: '14', text: "宜蘭市"},
        {value: '15', text: "基隆市"},
        {value: '16', text: "南投市"},
        {value: '17', text: "澎湖市"},
        {value: '18', text: "金門市"},
      ],
      subTypes: [
        [
            "素食"
        ],
        [
            "二手商店",
            "二手家具店",
            "二手書店",
            "二手電器行"
        ],
        [
            "免費市集",
            "免費商店"
        ],
        [
            "享食冰箱"
        ],
        [
            "食物銀行"
        ]
      ],
      // *************************** demo shop ***********************
       demoShop: {
        is_recommended: true,
        recommend_level: 1,
        city: 0, // 對照city.js索引
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
      // END *************************** demo shop ***********************
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
