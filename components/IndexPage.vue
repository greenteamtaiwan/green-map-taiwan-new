<template>
    <div class="index-container">
        <Navbar/>
        <div class="index-top">
          <mq-layout mq="lg">
            <IndexFilterTab :hasQuery="false" typesContainerClass="indexPage-types-container"/>
          </mq-layout>
          <mq-layout mq="lg">
              <div class="index-shop-list" v-if="shops.length>0">
                <IndexShopItem v-for="(shop, index) in shops.slice(0, 20 * this.$store.state.pageNum)" :shop="shop"/>
              </div>
          </mq-layout>
          <mq-layout mq="md">
              <div class="index-shop-list" v-if="shops.length>0">
                <ShopItem v-for="(shop, index) in shops.slice(0, 20 * this.$store.state.pageNum)" :shop="shop"/>
              </div>
          </mq-layout>
          <div class="no-result-placeholder" slot="content" v-if="shops.length===0">
              <!--<img src='../assets/img/no-result-placeholder-hint.png'/>-->
              <img :src='mascots[Math.floor(Math.random()*mascots.length)]'/>
              <p>{{isLoading?"Loading...":"目前沒有符合的搜尋結果"}}</p>
          </div>
        </div>
        <Footer/>
    </div>
</template>

<style>
  .index-container{
    padding-top: 60px;
  }

  .index-top{
    min-height: 80vh;
    background-color: #f3f4f5;
    padding: 30px 40px;
  }

  .index-container .no-result-placeholder{
    width: 250px;
    margin: 50px auto 0;
    text-align: center;
  }
  /*.index-container .no-result-placeholder img:nth-child(1){
    width: 100%;
  }*/
  .index-container .no-result-placeholder img{
    width: 50%;
    margin-bottom: 20px;
  }

  .index-shop-list{
    margin-top: 30px;
  }

  .indexPage-types-container{
    width: calc(100% - 70px)!important;
  }

  @media screen and (max-width:1250px){
    .index-container{
      padding-top: 116px;
    }
    .index-map-container .index-map{
      height: calc(100vh - 116px);
    }
    .index-top{
      padding: 10px;
    }
  }
</style>

<script>
import Navbar from '~/components/Navbar.vue';
import IndexShopItem from '~/components/IndexShopItem.vue';
import ShopItem from '~/components/ShopItem.vue';
import Footer from '~/components/Footer.vue';
import MapPage from '~/components/MapPage.vue';
import IndexFilterTab from '~/components/IndexFilterTab.vue';

import throttle from '~/functions/throttle.js';

import BubbleGreenTea from '~/assets/img/BubbleGreenTea.png';
import GreenBeer from '~/assets/img/GreenBeer.png';
import GreenMilkTea from '~/assets/img/GreenMilkTea.png';
import Mocha from '~/assets/img/Mocha.png';
import GreenTea from '~/assets/img/GreenTea.png';

export default {
  head() {
    return {
      bodyAttrs: {
        class: 'overflow-visible'
      },
      htmlAttrs: {
        class: 'overflow-visible'
      }
    }
  },
  components: {
    Navbar,
    IndexShopItem,
    Footer,
    MapPage,
    IndexFilterTab,
    ShopItem
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
  props: {
    isLoading: {
        type: Boolean,
        default: false
    }
  },
  computed: {
    shops: function() {
      return this.$store.state.shops;
    },
    isLoading: function() {
      return this.$store.state.isLoading;
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
        const footerHeight = document.querySelector(".footer-container").offsetHeight;
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - footerHeight - 2500 && this.$store.state.pageNum < Math.ceil(this.shops.length / 20) ) {
            this.$store.commit("addPageNum");
        }
    }, 1000)
  }
}
</script>
