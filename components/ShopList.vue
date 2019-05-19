<template>
    <Sidebar :show="show" :onCloseButtonClick="onCloseButtonClick" :showCloseSidebarButton="true">
        <ul class="shopList" slot="content">
            <ShopItem v-for="(shop, index) in shops" :shop="shop" />
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
        show: {
            type: Boolean,
            default: true
        },
        onCloseButtonClick: {
            type: Function,
            default: ()=>{}
        },
        shops: {
            type: Array,
            default: []
        }
    }
}
</script>