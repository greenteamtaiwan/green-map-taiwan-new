<template>
    <Sidebar :show="show" :isRight="true" style="width: 300px; padding: 1rem 0;" :id="'search-sidebar'">
        <div slot="content" >
            <ul>
                <li v-for="(history, index) in searchHistory" @click="search(history)">
                    <img src="~/assets/img/icon_search.svg" height="19" width="19">
                    {{history}}
                </li>
            </ul>
            <ul>
                <hr/>   
                <li v-for="(item, index) in typeOptions" @click="setType(item.value)" :class="{'selected-type': checkIfIsSelected(item)}">
                    <img :src="item.icon"/>
                    {{ item.text }}
                </li>
                <hr/>
            </ul>
        </div>
    </Sidebar>
</template>

<style scoped>
    ul:nth-child(1){
        max-height: 120px;
        overflow-y: auto;
    }
    img{
        width: 50px;
        margin: 5px 10px;
    }
    li{
        cursor: pointer;
    }
    .selected-type, li:hover{
        color: #44AD47;
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
      }
    },
    computed: {
        
    },
    methods: {
        setType (type) {
            this.$store.commit("setType", type);
            this.$store.dispatch("getShops");
            if($nuxt.$route.name !== 'index') $nuxt.$router.push('/');
        },
        checkIfIsSelected (item) {
            return +this.$store.state.type === +item.value;
        }
    }
}
</script>