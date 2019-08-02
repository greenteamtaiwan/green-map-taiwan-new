<template>
    <div class="index-container">
        <Navbar/>
        <div class="index-top">
            <div class="index-filter-tab">
            <span>{{query||"零廢棄地圖綠點"}}</span>
            <ul>
                <li v-for="(item, index) in typeOptions" @click="setType(item.value)" :class="{'selected-type': checkIfIsSelected(item)}">
                    <img :src="item.icon"/>
                    {{ item.text }}
                </li>
            </ul>
            <nuxt-link to="/map"><button><img src='../assets/img/icon_map.svg' width="40px"/></button></nuxt-link>
            </div>
            <div class="index-shop-list" v-if="shops.length>0">
            <IndexShopItem v-for="(shop, index) in shops.slice(0, 20 * this.$store.state.pageNum)" :shop="shop"/>
            </div>
            <div class="no-result-placeholder" slot="content" v-else>
                <img src='../assets/img/no-result-placeholder-hint.png'/>
                <img :src='mascots[Math.floor(Math.random()*mascots.length)]'/>
                <p>目前沒有符合的搜尋結果</p>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style>
  html, body{
    overflow-y: initial!important;
  }

  .index-container{
    padding-top: 60px;
  }

  .index-top{
    min-height: 80vh;
    background-color: #f3f4f5;
    padding: 30px 40px;
  }

  .index-filter-tab{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .index-filter-tab span{
    display: inline-block;
    width: calc(calc(100% - 150px) * 0.2);
    font-weight: bold;
    line-height: 62px;
  }

    
  .index-filter-tab li{
    width: 19%;
    text-align: left;
    background-color: white;
    padding: 5px;
    cursor: pointer;
  }

  .index-filter-tab a{
    width: 60px;
    text-align: center;
  }

  .index-filter-tab a button{
    background-color: white;
    padding: 5px;
    border: none;
    width: 100%;
    height: 100%;
  }

  .index-filter-tab .selected-type, .index-filter-tab li:hover, .index-filter-tab button:hover{
    color: white;
    background-color: #2586db;
  }

  .index-filter-tab ul{
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    width: calc(calc(100% - 60px) * 0.8);
    margin-bottom: 0;
  }

  .index-filter-tab img{
    width: 40px;
  }

  .index-container .no-result-placeholder{
    width: 250px;
    margin: 50px auto 0;
    text-align: center;
  }
  .index-container .no-result-placeholder img:nth-child(1){
    width: 100%;
  }
  .index-container .no-result-placeholder img:nth-child(2){
    width: 50%;
    margin-bottom: 20px;
  }

  @media screen and (max-width:991px){
    .index-container{
      padding-top: 116px;
    }
  }
</style>

<script>
import Navbar from '~/components/Navbar.vue';
import IndexShopItem from '~/components/IndexShopItem.vue';
import Footer from '~/components/Footer.vue';
import MapPage from '~/components/MapPage.vue';

import throttle from '~/functions/throttle.js';

import BubbleGreenTea from '~/assets/img/BubbleGreenTea.png';
import GreenBeer from '~/assets/img/GreenBeer.png';
import GreenMilkTea from '~/assets/img/GreenMilkTea.png';
import Mocha from '~/assets/img/Mocha.png';
import GreenTea from '~/assets/img/GreenTea.png';

export default {
  components: {
    Navbar,
    IndexShopItem,
    Footer,
    MapPage
  },
    data() {
        return {
            mascots: [
                BubbleGreenTea,
                GreenBeer,
                GreenMilkTea,
                Mocha,
                GreenTea
            ]
        }
    },
  computed: {
    shops: function() {
      return this.$store.state.shops;
    },
    typeOptions: function () {
      return this.$store.state.sourceData.types.filter(option=>(option.checked)).slice(1);
    },
    query: function() {
      return this.$store.state.query
    }
  },
  mounted: function() {
    this.$store.dispatch("getShops");

    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy: function(){
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    setShop: function() {
      // this.$store.commit("setShop", this.selectedShop);
      $nuxt.$router.push(`/shop?objectID=${this.selectedShop.objectID}`);
    },
    initPageNum: function() {
      this.$store.commit("initPageNum");
    },
    onScroll: throttle(function ({target: elem}) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && this.$store.state.pageNum < Math.ceil(this.shops.length / 20) ) {
            this.$store.commit("addPageNum");
        }
    }, 1000),
    checkIfIsSelected (item) {
      return +this.$store.state.type === +item.value;
    },
    setType (type){
      if(type === this.$store.state.type){
        this.$store.commit("setType", null);
      }else{
        this.$store.commit("setType", type);
      }
      this.$store.dispatch("getShops");
    }
  }
}
</script>
