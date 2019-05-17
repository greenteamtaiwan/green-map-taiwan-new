<template>
  <div>
    <Navbar :cities="cities" :typeOptions="items"/>
    <div class="recommendations-container">
        <div class="tags-container">
            <p>城市熱搜</p>
            <ul class="tags">
                  <li v-for="(item, index) in tags" :key="index">
                    <nuxt-link to="/">
                        <img :src="item.icon"/>
                        <p>{{ item.name }}</p>
                      </nuxt-link>
                  </li>
            </ul>
        </div>
        <div class="first-shop">
            <div class="shop-content">
                <p class="story-title"><span>● 綠點故事</span></p>
                <nuxt-link to="/shop"><h2>{{ demoShop.name  }}</h2></nuxt-link>
                <p>{{ demoShop.remark }}</p>
                <nuxt-link to="/shop">
                  <p class="read-more">
                    <span>閱讀更多</span>
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0" y="0" width="16" height="16" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve" preserveAspectRatio="xMinYMin meet"><g><g>
                      <path class="active-path" d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" data-original="#000000" data-old_color="#000000" />
                    </g></g> </svg>
                  </p>
                </nuxt-link>
            </div>
            <div class="img">
              <nuxt-link to="/shop"><img :src="demoShop.pic0_main"/></nuxt-link>

            </div>

        </div>

        <div class="shops">
            <div class="shop">
                <nuxt-link to="/shop"><img src="~/assets/img/picture 1.jpg"/></nuxt-link>
                <div class="shop-content">
                    <p class="recommendation-title"><img src="~/assets/img/icon_like.svg" height="20" width="20"><span> 綠點推薦</span></p>
                    <nuxt-link to="/shop"><h2>商店名稱</h2></nuxt-link>
                </div>
            </div>
            <div class="shop">
                <nuxt-link to="/shop"><img src="~/assets/img/picture 1.jpg"/></nuxt-link>
                <div class="shop-content">
                    <p class="recommendation-title"><img src="~/assets/img/icon_like.svg" height="20" width="20"><span> 綠點推薦</span></p>
                    <nuxt-link to="/shop"><h2>商店名稱</h2></nuxt-link>
                </div>
            </div>
            <div class="shop">
                <nuxt-link to="/shop"><img src="~/assets/img/picture 1.jpg"/></nuxt-link>
                <div class="shop-content">
                    <p class="recommendation-title"><img src="~/assets/img/icon_like.svg" height="20" width="20"><span> 綠點推薦</span></p>
                    <nuxt-link to="/shop"><h2>商店名稱</h2></nuxt-link>
                </div>
            </div>
        </div>

    </div>
  </div>
</template>

<style>
  html, body{
    overflow-y: auto!important;
  }

  h2{
    margin-top: 20px;
  }
    .recommendations-container{
        margin-top: 60px;
        min-height: calc(100vh - 60px);
        background-color: #f3f4f5;
        padding: 10px 30px 30px;
        text-align: center;
    }

    .recommendations-container img{
        max-width: 100%;
    }

    .tags-container{
        background-color: #ffffff;
        padding: 30px;
        margin-bottom: 30px;
    }

    .tags{
        max-width: 100%;
        width: 500px;
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .tags li{
      flex: 1;
    }

    .tags img{
        max-width: 60px;
        align-self: center;
    }

    .first-shop{
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
        width: 100%;
    }

    .first-shop .shop-content, .first-shop .img{
        flex: 1;
    }

    .first-shop .shop-content{
        padding-top: 50px;
    }
    .first-shop h2{
        margin: 30px;
    }

    .shop-content{
        background-color: #ffffff;
        padding: 30px;
        position: relative;
    }

    .read-more{
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
    }

    .arrow{
      transform: rotate(-90deg);
      margin-left: 5px;
    }
    .read-more:hover path{
      fill: #44AD47;
    }

    .shops{
        display: flex;
        justify-content: space-between;
    }

    .shop{
        width: calc(calc( 100% - 40px) / 3)
    }

    .story-title{
        font-weight: bold;
        color: #44AD47;
    }

    .recommendation-title{
        font-weight: bold;
        color: #EE5593;
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

import environment_friendly from '~/assets/img/icon_tag_environment-friendly.svg';
import non_plastic from '~/assets/img/icon_tag_non-plastic.svg';
import recycling_shop from '~/assets/img/icon_tag_recycling_shop.svg';
import reduce_plastic from '~/assets/img/icon_tag_reduce_plastic.svg';
import shop_naked from '~/assets/img/icon_tag_shop_naked.svg';
import zero_waste from '~/assets/img/icon_tag_zero_waste.svg';

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
      ],
      tags: [
        // {
        //   name: '愛心冰箱',
        //   icon: ''
        // },
        {
          name: '不塑',
          icon: non_plastic
        },
        {
          name: '減塑',
          icon: reduce_plastic
        },
        {
          name: '零廢棄',
          icon: zero_waste
        },
        // {
        //   name: '二手商店',
        //   icon: thrift_shop
        // },
        {
          name: '環保商店',
          icon: recycling_shop
        },
        {
          name: '環境友善',
          icon: environment_friendly
        },
        {
          name: '無包裝商店',
          icon: shop_naked
        },
        // {
        //   name: '環保商品',
        //   icon: ''
        // },
        // {
        //   name: '剩食餐廳',
        //   icon: ''
        // }
      ],
      // *************************** demo shop ***********************
      demoShop: {
        "address" : "台中市中區三民路二段18巷6號",
        "business_time" : "請注意粉絲頁",
        "latitude" : 24.1422103,
        "longitude" : 120.6589805,
        "name" : "測試2號店-素食-禾",
        "phone" : "04-22211700",
        "remark" : "第一個在台灣實踐剩食利用的經營空間，嘗試開放共食、堅持以社區付的起的價格，推動在地市場的剩食，在地消耗。他們透過明日餐桌計畫，推動社區廚房減少食材過度浪費的問題。被人類拋棄的醜蔬果及剩餘食材，在這裡變身為一道道新鮮健康佳餚，來吧，走進這裡享受盛食，體會食材的美味，實踐真正的飲食零浪費。",
        "type" : "剩食冰箱",
        "url" : "https://www.facebook.com/7upkitchen/",
        "logo": 'https://i.imgur.com/OiSniLG.jpg',
        "stack":  [ 'tag1_Unpackaged', 'tag2_ZeroWaste', 'tag3', 'tag4' ],
        "pic_fb_ProfilePic": 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.0-9/38703274_2210299285852330_4242230006752739328_n.jpg?_nc_cat=102&_nc_ht=scontent.ftpe8-4.fna&oh=b23e90ae18f480e01b246cc3a03c9ac3&oe=5D719456',
        "pic0_main": 'https://i.imgur.com/AUmRdBD.jpg',
        "pic1": 'https://i.imgur.com/nRpuru2.jpg',
        "pic2": 'https://i.imgur.com/TDOSd3k.jpg',
        "pic3": 'https://i.imgur.com/eKOQDbN.jpg',
        "pic4": 'https://i.imgur.com/iNL9nVA.jpg',
        "pic5": 'https://i.imgur.com/fpDMHnW.jpg',
        "pic6": 'https://i.imgur.com/QyiD7pp.jpg',
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
