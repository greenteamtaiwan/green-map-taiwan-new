<template>
    <Sidebar :show="show" :isRight="true" style="width: 300px;" :id="'search-sidebar'">
        <div slot="content" >
            
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
      }
    },
    computed: {
        
    },
    methods: {
        setType (type) {
            this.$store.commit("setType", type);
            this.$store.dispatch("getShops");
        },
        checkIfIsSelected (item) {
            return +this.$store.state.type === +item.value;
        }
    }
}
</script>