<template>
    <div class="mobile mobile-shop-list" v-scroll="onScroll" >
        <ul class="shopList" slot="content" v-if="shops.length>0">
            <ShopItem v-for="(shop, index) in shops.slice(0, 20 * this.$store.state.pageNum)" :shop="shop" />
        </ul>
        <div class="no-result-placeholder" slot="content" v-if="shops.length===0">
            <img :src='mascots[Math.floor(Math.random()*mascots.length)]'/>
            <p>目前沒有符合的搜尋結果</p>
        </div>
    </div>
</template>

<style>
    .mobile-shop-list{
        position: absolute;
        top: 60vh;
        max-height: 100vh;
        min-height: 50vh;
        overflow-y: scroll;
        background-color: #f3f4f5;
        width: 100%;
    }

    .shopList {
        background-color: #f3f4f5;
        padding: 0;
        transition: left 1s;
        overflow: auto;
    }

    .no-result-placeholder{
        text-align: center;
    }

    .mobile-shop-list .no-result-placeholder img{
        height: 25vh;
        width: unset;
        margin: 20px auto;
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
    },
    methods: {
        onScroll ({target: elem}) {
            if (elem.scrollTop >= (elem.scrollHeight - elem.offsetHeight - 500) && this.$store.state.pageNum < Math.ceil(this.shops.length / 20) ) {
                this.$store.commit("addPageNum");
            }
        }
    }
}
</script>