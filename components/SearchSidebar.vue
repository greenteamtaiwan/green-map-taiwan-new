<template>
    <Sidebar :show="show" :isRight="isRight" :id="'search-sidebar'" :style="sidebarStyle">
        <div slot="content">
            <mq-layout mq="lg">
                <ul class="history-container">
                    <li v-for="(history, index) in searchHistory" @click="search(history)" tabindex="0">
                        <img src="~/assets/img/icon_search.svg" height="19" width="19">
                        {{history}}
                    </li>
                </ul>
            </mq-layout>
            <ul class="types">
                <mq-layout mq="lg">
                    <hr/>   
                </mq-layout>
                <li v-for="(item, index) in typeOptions" @click="setType(item.value)" :class="{'selected-type': checkIfIsSelected(item)}" tabindex="0">
                    <img :src="item.typeIcon"/>
                    {{ item.text }}
                </li>
                <hr/>
            </ul>
        </div>
    </Sidebar>
</template>

<style scoped>
    .history-container{
        max-height: 120px;
        overflow-y: auto;
    }
    .history-container li{
        margin: 10px 0;
    }
    img{
        width: 50px;
    }
    li{
        cursor: pointer;
    }
    .selected-type, .types li:hover{
        background-color: #D8D8D8;
    }
    #search-sidebar{
        width: 300px; 
        padding: 1rem 0;
        z-index: 2;
    }

    #search-sidebar ul{
        margin: 0 15px;
    }

    .types li{
        height: 65px;
        line-height: 60px;
        margin: 10px;
    }
    @media screen and (max-width:1250px){
        .sidebar{
            border-top: solid 1px gray;
        }
        #search-sidebar{
            padding: 0;
            z-index: 2;
        }
        .search-button{
            padding: 0;
        }
        .history-container{
            max-height: 120px;
        }
    }
</style>

<script>
import ShopItem from '~/components/ShopItem.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
    components: {
        ShopItem,
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
    computed: {
        searchDisabled: function(){
            return this.query==='';
        }
    },
    methods: {
        checkIfIsSelected (item) {
            if(!item.value) return this.$store.state.type.filter(data=>data).length === 0;
            else return this.$store.state.type[item.value];
        }
    }
}
</script>