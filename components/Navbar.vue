<template>
  <div>
  <mq-layout mq="lg">
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
                  <b-button class="search-button" type="submit">
                      <img src="~/assets/img/icon_search.svg" height="19" width="19">
                  </b-button>
              </b-input-group-prepend>
              <b-form-input placeholder= " 搜尋「減塑」 " name="query" aria-label="Search" @focus.native="setShowSearchSidebar(true)" autocomplete="off"></b-form-input>
          </b-input-group>
      </b-form>
      
    </nav>
  </mq-layout>

  <mq-layout mq="md">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="gt-nav">
      <nuxt-link to="/">
        <div class='map-logo'>
          <img src='../assets/img/icon_map.svg' width="40px"/>
          <img src='../assets/img/GT logo.png' height="70%"/>
        </div>
      </nuxt-link>
      <button id="mobile-button" @click="setShowSearchSidebar(!showSearchSidebar)">{{showSearchSidebar?"✖":"☰"}}</button>
      <b-form inline @submit.stop.prevent class='sidebar-inline-form'>
          <div class='navbar-middle'>
            <b-form-select :value='city' :options="cities" class='cities-select' @change="setCity"></b-form-select>
            <nuxt-link to="/recommendations">城市推薦綠點</nuxt-link>
          </div>
      </b-form>
    </nav>
  </mq-layout>
  <SearchSidebar :show="showSearchSidebar" :typeOptions="typeOptions" :searchHistory="searchHistory" :query="query" :search="search" :setType="setType"/>
</div>
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
    position: relative;
  }
  nav.navbar{
    z-index: 2;
  }
  nav img:nth-child(2){
    width: 40px;
    height: 11px;
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
  .btn-secondary:focus, .btn-secondary.focus{
    box-shadow: 0 0 0 0.2rem rgba(68, 173, 71, 0.5);
  }

  @media screen and (max-width:991px){
    nav{
      height: unset;
    }
    .map-logo{
      display: inline-block;
      border-right: solid 1px gray;
    }
    #gt-nav{
      padding: 0;
    }
    .sidebar-inline-form{
      display: block;
      position: fixed;
      top: 60px;
      width: 100%;
      background-color: white;
      border-top: solid 1px gray;
    }
    .sidebar-inline-form .navbar-middle{
      padding: 7px 20px;
      height: unset;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .map-logo{
      border: none;
      height: 60px;
      padding: 10px;
    }
    #mobile-button{
      border: none;
      border-left: solid 1px gray;
      background-color: white;
      margin-left: auto;
      display: inline-block;
      width: 60px;
      height: 60px;
      position: absolute;
      right: 0;
      top: 0;
    }
    .map-logo img{
      display: inline-block;
      height: 100%;
      margin: 0;
    }
    .map-logo img:nth-child(2){
      height: 70%;
      width: unset;
      margin-left: 5px;
    }
    
    .input-group.search{
      position: relative;
      border-bottom: none;
      background-color: white;
      padding: 10px 20px;
    }
    
  }
</style>

<script>
import SearchSidebar from '~/components/SearchSidebar.vue'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      showSearchSidebar: false,
      searchHistory: []
    }
  },
  mounted(){
    window.addEventListener('click', this.closeSearchSidebar);
    this.searchHistory = localStorage.getItem("searchHistory")?JSON.parse(localStorage.getItem("searchHistory")):[];
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
      const query = e instanceof Event?e.target.elements["query"].value:e;

      let index;
      if(!query){}
      else if(index = this.searchHistory.indexOf(query) >= 0){
        this.searchHistory.unshift(this.searchHistory.splice(index, 1)[0]);
        localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
      }else if(this.searchHistory[0] !== query){
        this.searchHistory.unshift(query);
        localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
      }

      this.$store.commit("setQuery", query);
      this.$store.dispatch("getShops");

      if(this.$mq === "lg" && e.target){
        e.target.elements["query"].value = "";
      }

      if($nuxt.$route.name !== 'index') $nuxt.$router.push('/');
      this.showSearchSidebar = false;
    },
    setCity (city){
      this.$store.dispatch("setCityAndCenter", city);
      switch($nuxt.$route.name){
        case 'recommendations':
          this.$store.dispatch("getRecommendationShops", city);
          break;
        case 'shop':
          $nuxt.$router.push('/');
          break;
        case 'index':
          console.log("getShops");
          this.$store.dispatch("getShops");
        default:
      }
    },
    setType (type){
      this.$store.commit("setType", type);
      this.$store.dispatch("getShops");
      if($nuxt.$route.name !== 'index') $nuxt.$router.push('/');
      this.showSearchSidebar = false;
    },
    setShowSearchSidebar (showSearchSidebar){
      this.showSearchSidebar = showSearchSidebar;
    },
    closeSearchSidebar (e){
      console.log(this.$mq);
      if(this.$mq === "lg"){
        if(!document.querySelector("#search-sidebar").contains(e.target) && !document.querySelector("#search-container").contains(e.target)){
            this.showSearchSidebar = false;
        }
      }else{
        if(!document.querySelector("#search-sidebar").contains(e.target) && !document.querySelector("#mobile-button").contains(e.target)){
            this.showSearchSidebar = false;
        }
      }
    }
  }
}
</script>