<template>
  <div class="shop-map-container">
    <mq-layout mq="lg">
      <Navbar/>
    </mq-layout>
    <Map />
    <div class="shop-map-shop-container" v-if="selectedShop.name"><ShopItem :shop="selectedShop" /></div>
  </div>
</template>

<style>
    .shop-map-shop-container{
        position: fixed;
        bottom: 0;
        padding: 0 10px;
        width: 100%;
    }

    .shop-map-shop-container .recommend{
        justify-content: flex-start;
    }

    .index-map-container{
        height: 100vh;
        width: 100vw;
        position: relative;
    }
  html, body{
    overflow-y: hidden
  }
.index-map-container .map-container{
        margin-top: 0;
    }
    .index-map-container .recommend{
        justify-content: flex-start;
    }

  p{
    margin: 0;
  }

  li{
    list-style-type: none;
  }

  @media screen and (max-width:991px){
      .shop-map-container .index-map{
        height: 100vh;
      }
      .shop-map-container .map-container{
        margin-top: 0;
      }
      html, body{
        overflow-y: initial;
      }
  }
</style>

<script>
import IndexMapShopList from '~/components/IndexMapShopList.vue';
import Map from '~/components/Map.vue';
import ShopItem from '~/components/ShopItem.vue';
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    IndexMapShopList,
    Map,
    ShopItem,
    Navbar
  },
  computed: {
    shops: function() {
      return this.$store.state.shops;
    },
    selectedShop: function() {
      return this.$store.state.shop;
    },
  }
}
</script>