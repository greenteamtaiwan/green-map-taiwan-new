<template>
  <div class="index-map-container">
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
  html, body{
    overflow-y: hidden!important;
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
        height: calc(60vh - 116px);
      }
      html, body{
        overflow-y: initial;
      }
  }
</style>

<script>
import IndexMapShopList from '~/components/IndexMapShopList.vue';
import Map from '~/components/Map.vue';

export default {
  components: {
    IndexMapShopList,
    Map
  },
  computed: {
    shops: function() {
      return this.$store.state.shops;
    }
  }
}
</script>
