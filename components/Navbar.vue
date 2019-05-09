<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="gt-nav">
    <nuxt-link to="/">
      <div class='map-logo'>
        <img src='../assets/img/icon_map.svg' width="40px"/>
        <img src='../assets/img/GT logo.png' width="40px"/>
      </div>
    </nuxt-link>
    <b-form inline class='sidebar-inline-form'>
        <div class='navbar-middle'>
          <b-form-select :value='1' :options="cities" class='cities-select'></b-form-select>
          <nuxt-link to="/recommendations">城市推薦綠點</nuxt-link>
        </div>
        <b-input-group class="search">
            <b-input-group-prepend>
                <b-button class="search-button" disable="true">
                    <img src="~/assets/img/icon_search.svg" height="19" width="19">
                </b-button>
            </b-input-group-prepend>
            <b-form-input placeholder= " 搜尋「裸賣」 " aria-label="Search"></b-form-input>
        </b-input-group>
    </b-form>
    <SearchSidebar :show="false" :typeOptions="typeOptions" :style="{left: 'auto', right: 0, width: '300px'}"/>
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

export default {
  components: {
    SearchSidebar
  },
  props:{
      typeOptions: {
          type: Array,
          default: []
      },
      cities: {
          type: Array,
          default: []
      }
  }
}
</script>