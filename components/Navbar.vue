<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="gt-nav">
    <nuxt-link to="/">
      <div class='map-logo'>
        <img src='../assets/img/icon_map.svg' width="40px"/>
        <img src='../assets/img/GT logo.png' width="40px"/>
      </div>
    </nuxt-link>
    <b-form inline @submit.stop.prevent class='sidebar-inline-form'>
        <div class='navbar-middle'>
          <b-form-select :value='city' :options="cities" class='cities-select' @change="setCity"></b-form-select>
          <nuxt-link to="/recommendations">城市推薦綠點</nuxt-link>
        </div>
        
    </b-form>
    <b-form inline @submit.stop.prevent @submit="search" id="search-container">
        <b-input-group class="search">
            <b-input-group-prepend>
                <b-button class="search-button">
                    <img src="~/assets/img/icon_search.svg" height="19" width="19">
                </b-button>
            </b-input-group-prepend>
            <b-form-input placeholder= " 搜尋「裸賣」 " name="query" aria-label="Search" @focus.native="setShowSearchSidebar(true)" :value="query"></b-form-input>
        </b-input-group>
    </b-form>
    <SearchSidebar :show="showSearchSidebar" :typeOptions="typeOptions"/>
  </nav>
</template>

<style>
  a{
    color: black;
  }
  a:hover{
    text-decoration: none;
    color: #44AD47;
  }
  nav{
    height: 60px;
    border-bottom: solid 1px lightgray;
    line-height: 40px;
    background-color: #ffffff;
  }

  nav > div, nav > form > div{
    padding: 10px 20px;
  }

  .map-logo img{
    display: block;
    margin: 2px;
    margin-right: 15px;
  }

  .navbar-middle{
    height: 60px;
    border-left: solid 1px lightgray;
  }

  .input-group.search{
    height: 60px;
    border-left: solid 1px lightgray;
    position: absolute;
    right: 0;
    width: 300px; 
  }

  .search input{
    background-color: rgba(0,0,0,0);
    border: none;
    border-radius: 0;
    border-bottom: solid 1px;
    height: 100%;
  }

  /*--覆蓋預設樣式--*/
  .custom-select{
    background: url('../assets/img/icon_down_arrow.svg') no-repeat right 0.75rem center/8px 10px;
    background-size: 15px 15px;
    border: none;
    margin-right: 10px;
  }
  button.gm-ui-hover-effect{
    display: none!important;
    
  }
  .cities-select.custom-select{
    width: 90px;
  }
  button.btn.btn-secondary.search-button{
    border: none;
    border-radius: 0;
    background-color: rgba(0,0,0,0); 
    border-bottom: solid 1px black;
  }
  button.btn.btn-secondary.search-button:active{
    background-color: rgba(0,0,0,0); 
  }
</style>

<script>
import SearchSidebar from '~/components/SearchSidebar.vue'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      showSearchSidebar: false
    }
  },
  mounted(){
    window.addEventListener('click', this.closeSearchSidebar);
  },
  components: {
    SearchSidebar
  },
  computed: {
    typeOptions () {
      return this.$store.state.sourceData.types.filter(option=>(option.checked));
    },
    cities () {
      return this.$store.state.sourceData.cities
    },
    query () {
      return this.$store.state.query;
    },
    city () {
      return this.$store.state.city;
    }
  },
  methods: {
    search (e){
      const query = e.target.elements["query"].value;
      
      this.$store.commit("setQuery", query);
      this.$store.dispatch("getShops");
      $nuxt.$router.push('/');
    },
    setCity (city){
      this.$store.dispatch("setCityAndCenter", city);
      this.$store.dispatch("getShops");
      $nuxt.$router.push('/');
    },
    setShowSearchSidebar (showSearchSidebar){
      this.showSearchSidebar = showSearchSidebar;
    },
    closeSearchSidebar (e){
      if(!document.querySelector("#search-sidebar").contains(e.target) && !document.querySelector("#search-container").contains(e.target)){
          this.showSearchSidebar = false;
      }
    }
  }
}
</script>