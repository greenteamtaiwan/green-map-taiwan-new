<template>
    <div class="index-map-shop-list-container" v-scroll="onScroll" >
        <ul class="index-map-shop-list" v-if="shops.length>0">
            <IndexMapShopItem v-for="(shop, index) in shops.slice(0, 20 * this.$store.state.pageNum)" :shop="shop"/>
        </ul>
    </div>
</template>

<style>
    .index-map-shop-list-container{
        position: fixed;
        overflow-x: auto;
        width: 100vw;
        bottom: 0;
        display: flex;
        flex-direction: row;
    }

    .index-map-shop-list{
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .index-map-shop-list .lazy-load{

    }

    .no-result-placeholder{
        text-align: center;
    }

    .no-result-placeholder img{
        width: 30%;
        margin: 30px auto;
        display: block;
    }

    @media screen and (max-width:1250px){
        .shopList {
            height: unset;
            padding: 10px;
        }
    }
</style>

<script>
import IndexMapShopItem from '~/components/IndexMapShopItem.vue'
import Sidebar from '~/components/Sidebar.vue'

import throttle from '~/functions/throttle.js';

import BubbleGreenTea from '~/assets/img/BubbleGreenTea.png';
import GreenBeer from '~/assets/img/GreenBeer.png';
import GreenMilkTea from '~/assets/img/GreenMilkTea.png';
import Mocha from '~/assets/img/Mocha.png';
import GreenTea from '~/assets/img/GreenTea.png';

export default {
    components: {
        IndexMapShopItem,
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
    },
    methods:{
        onScroll: throttle(function ({target: elem}) {
            if (elem.scrollLeft >= (elem.scrollWidth - 1000) && this.$store.state.pageNum < Math.ceil(this.shops.length / 20) ) {
                this.$store.commit("addPageNum");
            }
        }, 1000)
    }
}
</script>
