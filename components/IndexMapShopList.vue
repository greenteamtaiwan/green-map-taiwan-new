<template>
    <div class="index-map-shop-list-container">
        <ul class="index-map-shop-list" slot="content" v-if="shops.length>0">
            <ShopItem v-for="(shop, index) in shops" :shop="shop" :containerStyle="`width: 200px;`"/>
        </ul>
    </div>
</template>

<style>
    .index-map-shop-list-container{
        position: absolute;
        overflow-x: auto;
        width: 100vw;
        bottom: 0;
        display: flex;
        flex-direction: row;
    }

    .index-map-shop-list{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 0;
    }
    .index-map-shop-list .shopItem-container{
        margin: 5px;
    }
    .index-map-shop-list .shopItem-container .row{
        width: 450px;
    }

    .index-map-shop-list .shopItem-main{
        width: 35%!important;
    }
    .index-map-shop-list .shopItem-aside{
        width: 65%!important;
    }
    
    .no-result-placeholder{
        text-align: center;
    }

    .no-result-placeholder img{
        width: 30%;
        margin: 30px auto;
        display: block;
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
import BubbleGreenTea from '~/assets/img/BubbleGreenTea.png';
import GreenBeer from '~/assets/img/GreenBeer.png';
import GreenMilkTea from '~/assets/img/GreenMilkTea.png';
import Mocha from '~/assets/img/Mocha.png';
import GreenTea from '~/assets/img/GreenTea.png';

export default {
    components: {
        ShopItem,
        Sidebar
    },
    data() {
        return {
            mascots: [
                BubbleGreenTea,
                GreenBeer,
                GreenMilkTea,
                Mocha,
                GreenTea
            ]
        }
    },
    props:{
        shops: {
            type: Array,
            default: []
        }
    }
}
</script>