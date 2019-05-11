<template>
    <Sidebar :click="onCloseButtonClick" showCloseSidebarButton="true">
        <ul class="shopList" slot="content">
            <ShopItem v-for="(item, index) in selectedShops" :key="index" :selectedShops="item"/>
            <!-- <ShopItem :selectedShops="selectedShops"/> -->
            <!-- <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/> -->
        </ul>
    </Sidebar>
</template>

<style>
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
        onCloseButtonClick: {
            type: Function,
            default: ()=>{}
        },
        selectedShops: {
          type: Array,
          default: []
      }

    }
}
</script>
