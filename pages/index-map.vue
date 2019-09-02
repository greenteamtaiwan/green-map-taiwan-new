<template>
  <div class="index-map-container">
    <mq-layout mq="md">
      <Navbar/>
    </mq-layout>
    <Map/>
    <IndexMapShopList :shops="shops"/>
  </div>
</template>

<style>
    .index-map-container .index-map{
        height: 100vh;
        width: 100vw;
        overflow: hidden;
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

  @media screen and (max-width:1250px){
    .index-map{
      height: calc(100vh - 116px);
    }
    .index-map-container .map-container{
        margin-top: 115px;
    }
  }
</style>

<script>
import Navbar from '~/components/Navbar.vue';
import IndexMapShopList from '~/components/IndexMapShopList.vue';
import Map from '~/components/Map.vue';

export default {
  head() {
    return {
      bodyAttrs: {
        class: 'overflow-hidden'
      },
      htmlAttrs: {
        class: 'overflow-hidden'
      }
    }
  },
  components: {
    IndexMapShopList,
    Map,
    Navbar
  },
  computed: {
    shops: function() {
      return this.$store.state.shops;
    }
  }
}
</script>
