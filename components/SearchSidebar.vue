<template>
    <Sidebar>
        <div slot="content">
            
            <ul>
                <hr/>   
                <li v-for="(item, index) in typeOptions">
                    {{ item.text }}
                </li>
                <hr/>
            </ul>
        </div>
    </Sidebar>
</template>

<style>
    .close-shopList-button{
        z-index: 3;
        position: absolute;
        left: 100%;
        top: 50px;
        background-color: #ffffff;
        border: solid 1px #9FA0A0;
        border-left: none;
        color: red;
    }

    .shopList {
        background-color: #f3f4f5;
        padding: 0;
        transition: left 1s;
        overflow: auto;
    }

    @media screen and (max-width:991px){
        .shopList {
            height: unset;
            padding: 10px;
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
      }
    }
}
</script>