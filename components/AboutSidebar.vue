<template>
    <Sidebar :show="show" :isRight="isRight" :id="'about-sidebar'" :style="sidebarStyle">
        <div slot="content">
            <ul class="types">
                <li>
                    <nuxt-link to="/recommendations">城市精選綠點</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about#typeInfo" class="site-link" exact id="typeInfo-link">什麼是綠餐廳</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about#aboutUs" class="site-link" exact id="aboutUs-link">關於我們</nuxt-link>
                </li>
            </ul>
            
        </div>
    </Sidebar>
</template>

<style scoped>
    li{
        cursor: pointer;
        border-bottom: solid 1px lightgray;
    }
    li a{
        display: inline-block;
        width: 100%;
        padding: 20px 30px;
        font-weight: bold;
    }
    .selected-type, .types li:hover{
        background-color: #D8D8D8;
    }
    #about-sidebar{
        width: 300px; 
        padding: 1rem 0;
        z-index: 2;
    }

    #about-sidebar ul{
        margin: 0 15px;
    }
    @media screen and (max-width:1250px){
        .sidebar{
            border-top: solid 1px gray;
        }
        #about-sidebar{
            padding: 0;
            z-index: 2;
        }
        .search-button{
            padding: 0;
        }
    }
</style>

<script>
import Sidebar from '~/components/Sidebar.vue'

export default {
    components: {
        Sidebar
    },
    props:{
      typeOptions: {
          type: Array,
          default: []
      },
      show: {
          type: Boolean,
          default: false
      },
      searchHistory: {
          type: Array,
          default: []
      },
      search: {
          type: Function,
          default: ()=>{}
      },
      setType: {
          type: Function,
          default: ()=>{}
      },
      query: {
          type: String,
          default: ""
      },
      isRight: {
          type: Boolean,
          default: true
      },
      sidebarStyle: {
          type: Object,
          default: {}
      }
    },
    methods: {
        
    }
}
</script>