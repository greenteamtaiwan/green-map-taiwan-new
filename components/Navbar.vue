<template>
  <div>
  <mq-layout mq="lg">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="gt-nav" :class="{'show-backdrop': showSearchSidebar}">
      <a href="javascript:0" @click="resetSearchParams">
        <div class='map-logo'>
          <img src='../assets/img/GT_logo.svg' width="40px"/>
        </div>
      </a>
      <b-form inline @submit.stop.prevent class='sidebar-inline-form'>
          <div class='navbar-middle'>
            <b-form-select :value='city' :options="cities" class='cities-select' @change="setCity"></b-form-select>
          </div>
      </b-form>
      <b-form inline @submit.stop.prevent @submit="search" id="search-container">
          <b-input-group class="search">
              <b-input-group-prepend>
                  <b-button class="search-button" type="submit">
                      <img src="~/assets/img/icon_search.svg" height="19" width="19">
                  </b-button>
              </b-input-group-prepend>
              <b-form-input placeholder= " 搜尋「店家」 " name="query" aria-label="Search" @focus.native="setShowSearchSidebar(true)" autocomplete="off" :value="query"></b-form-input>
          </b-input-group>
          <SearchSidebar
            v-if="this.$mq==='lg'"
            v-show="showSearchSidebar"
            :show="true"
            :typeOptions="typeOptions"
            :searchHistory="searchHistory"
            :query="query"
            :search="search"
            :setType="setType"
            :isRight="false"
            :sidebarStyle="{left: 'auto', transform: 'translateX(0)'}"
          />
      </b-form>
      <div class="navbar-links">
          <nuxt-link to="/recommendations" class="site-link">城市精選綠點</nuxt-link>
          <nuxt-link to="/about#typeInfo" class="site-link" exact id="typeInfo-link">什麼是綠餐廳</nuxt-link>
          <nuxt-link to="/about#aboutUs" class="site-link" exact id="aboutUs-link">關於我們</nuxt-link>
      </div>

    </nav>
  </mq-layout>

  <mq-layout mq="md">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="gt-nav" :class="{'show-backdrop': showSearchSidebar || showAboutSidebar}">
      <div class="mobile-navbar-content">
        <a href="javascript:0" @click="resetSearchParams">
          <div class='map-logo'>
            <img src='../assets/img/GT_logo_no_text.svg' width="40px"/>
          </div>
        </a>
        <b-form inline @submit.stop.prevent @submit="search" id="search-container">
          <b-input-group class="search">
                <b-input-group-prepend>
                    <b-button class="search-button" type="submit">
                        <img src="~/assets/img/icon_search.svg" height="19" width="19">
                    </b-button>
                </b-input-group-prepend>
                <b-form-input placeholder= " 搜尋「店家」 " name="query" aria-label="Search" autocomplete="off" :value="query"></b-form-input>
            </b-input-group>
        </b-form>
        <button id="mobile-button" @click="setShowAboutSidebar(!showAboutSidebar)" >{{showAboutSidebar?"✖":"☰"}}</button>
      </div>
      <b-form inline @submit.stop.prevent class='sidebar-inline-form'>
          <div class='navbar-middle'>
            <b-form-select :value='city' :options="cities" class='cities-select' @change="setCity" v-if="!isAboutPage()"></b-form-select>
            <button id="mobile-type-button" @click="setShowSearchSidebar(true)">
              <img :src='typeIcon' width="15px"/>
              {{typeText}}
              <img src='../assets/img/icon_down_arrow.svg' width="15px"/>
            </button>
            <button :class="['back-to-index-button']" v-if="isMapPage()" @click="backToIndex">✖</button>
            <nuxt-link to="/index-map" v-if="!isMapPage() && !isAboutPage()"><button><img src='../assets/img/icon_map.svg' width="40px"/></button></nuxt-link>
          </div>
      </b-form>
    </nav>
  </mq-layout>
  <SearchSidebar
    v-if="this.$mq==='md'"
    :show="showSearchSidebar"
    :typeOptions="typeOptions"
    :searchHistory="searchHistory"
    :query="query"
    :search="search"
    :setType="setType"
  />
  <AboutSidebar
    v-if="this.$mq==='md'"
    :show="showAboutSidebar"
  />
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

  .navbar-middle{
    padding: 10px 0 10px 20px;
  }

  .input-group.search{
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
    width: 300px;
  }

  .search input{
    background-color: rgba(0,0,0,0);
    border: none;
    border-radius: 0;
    border-bottom: solid 1px;
    height: 100%;
  }

  .site-link{
    margin-right: 20px;
  }

  /*--覆蓋預設樣式--*/
  .custom-select{
    background: url('../assets/img/icon_down_arrow.svg') no-repeat right 0.75rem center/8px 10px;
    background-size: 15px 15px;
    border: none;
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

  #search-container{
    height: 60px; /* fix safari layout error */
    z-index: 2;
    background-color: #fff;
  }
  .show-backdrop::after{
    content: "";
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
  }

  .navbar-links{
    position: absolute;
    right: 0px;
    height: 60px;
    padding: 10px 20px;
  }

  nav button{
    background-color: rgba(0,0,0,0);
    border: none;
  }

  @media screen and (max-width:1250px){
    nav{
      height: unset;
    }
    .map-logo{
      display: inline-block;
      border-right: solid 1px gray;
      height: 60px;
      padding: 10px;
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
      padding: 7px 10px;
      height: 59px;
      width: 100%;
      display: flex;
      justify-content: space-between;
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
    }

    .input-group.search{
      position: relative;
      border-bottom: none;
      background-color: white;
      padding: 10px 20px;
    }
    .navbar-middle{
      padding: 10px 20px;
    }
    .custom-select{
      margin-right: 10px;
    }
    .mobile-navbar-content{
      width: 100%;
      background-color: #fff;
      z-index: 2;
      display: flex;
    }

    #search-container{
      width: calc(100% - 122px);
    }

    button.btn.btn-secondary.search-button, .search input{
      border-bottom: none;
    }

    #mobile-type-button{
      line-height: 16px;
      position: relative;
      padding-left: 40px;
      left: -15px;
      margin: 0 auto;
      white-space: nowrap;
    }

    #mobile-type-button img{
      margin-left: 15px;
      width: 15px;
      height: 15px;
    }

    #mobile-type-button img:nth-child(1){
      margin-left: 0;
      position: absolute;
      left: 0;
      top: -5px;
      width: 40px;
      height: 50px;
    }

    nav .input-group.search{
      width: unset;
    }

    button.back-to-index-button{
      position: relative;
      border: none;
      padding: 0;
      height: unset;
      top: 0px;
      right: 0;
      width: unset;
    }
  }
</style>

<script>
import SearchSidebar from '~/components/SearchSidebar.vue';
import AboutSidebar from '~/components/AboutSidebar.vue';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      showSearchSidebar: false,
      showAboutSidebar: false,
      searchHistory: []
    }
  },
  props: {
    setTypeProps: {
      type: Function,
      default: null
    },
    typeProps: {
      type: Number,
      default: null
    }
  },
  mounted(){
    window.addEventListener('click', this.closeSearchSidebar);
    window.addEventListener('click', this.closeAboutSidebar);

    this.searchHistory = localStorage.getItem("searchHistory")?JSON.parse(localStorage.getItem("searchHistory")):[];
  },
  beforeDestroy: function(){
    window.removeEventListener("scroll", this.closeSearchSidebar);
    window.removeEventListener("scroll", this.closeAboutSidebar);
  },
  components: {
    SearchSidebar,
    AboutSidebar
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
    },
    typeText () {
      let type;
      if(this.typeProps){
        type = this.typeProps;
      }else{
        type = this.$store.state.type.findIndex(data=>data);
        type = type>=0? type: 0;
      }

      return this.$store.state.sourceData.types[type].text;
    },
    typeIcon () {
      let type;
      if(this.typeProps){
        type = this.typeProps;
      }else{
        type = this.$store.state.type.findIndex(data=>data);
        type = type>=0? type: 0;
      }

      return this.$store.state.sourceData.types[type].typeIcon;
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

      this.$store.commit("setType", {
        type: 0,
        isSingleSelection: this.$mq==='md'
      });
      this.$store.commit("setQuery", query);
      this.$store.dispatch("getShops");

      if($nuxt.$route.name !== 'index' && $nuxt.$route.name !== 'map' && $nuxt.$route.name !== 'index-map') $nuxt.$router.push('/');
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
        case 'index-map':
          this.$store.dispatch("getShops");
        default:
      }
    },
    setType (type){
      if(this.setTypeProps){
        this.setTypeProps(type);
      }else{
        this.$store.commit("setType", {
          type,
          isSingleSelection: this.$mq==='md'
        });
        this.$store.dispatch("getShops");
        if($nuxt.$route.name !== 'index' && $nuxt.$route.name !== 'map' && $nuxt.$route.name !== 'index-map') $nuxt.$router.push('/');
      }
      this.showSearchSidebar = false;
    },
    setShowSearchSidebar (showSearchSidebar){
      this.showSearchSidebar = showSearchSidebar;
    },
    setShowAboutSidebar (showAboutSidebar){
      this.showAboutSidebar = showAboutSidebar;
    },
    closeSearchSidebar (e){
      if(this.$mq === "lg"){
        if(!document.querySelector("#search-sidebar").contains(e.target)
          && !document.querySelector("#search-container").contains(e.target)){
            this.showSearchSidebar = false;
        }
      }else{
        if(!document.querySelector("#search-sidebar").contains(e.target)
          && !document.querySelector("#search-container").contains(e.target)
          && !document.querySelector("#mobile-button").contains(e.target)
          && !document.querySelector("#mobile-type-button").contains(e.target)
        ){
            this.showSearchSidebar = false;
        }
      }
    },
    closeAboutSidebar (e){
      if(
        this.$mq === "md"
        && !document.querySelector("#about-sidebar").contains(e.target)
        && !document.querySelector("#search-container").contains(e.target)
        && !document.querySelector("#mobile-button").contains(e.target)
        && !document.querySelector("#mobile-type-button").contains(e.target)
      ){
          this.showAboutSidebar = false;
      }
    },
    resetSearchParams (){
      this.$store.commit("setType", {
        type: 0,
        isSingleSelection: this.$mq==='md'
      });
      this.$store.commit("setQuery", "");
      if($nuxt.$route.name !== 'index') $nuxt.$router.push('/');
      else this.$store.dispatch("getShops");
    },
    backToIndex(){
      switch($nuxt.$route.name){
        case 'map':
        case 'index-map':
          $nuxt.$router.push('/');
          break;
        case 'shop-map':
          if(this.selectedShop.objectID) $nuxt.$router.push(`/shop?objectID=${this.selectedShop.objectID}`);
          else $nuxt.$router.push('/');
          break;
        default:
      }
    },
    isMapPage () {
      if (process.browser) {
        return $nuxt.$route.name === 'index-map' || $nuxt.$route.name === 'shop-map';
      }
      return false;
    },
    isAboutPage () {
      if (process.browser) {
        return $nuxt.$route.name === 'about';
      }
      return false;
    }
  }
}
</script>
