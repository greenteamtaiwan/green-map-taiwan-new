<template>
    <Sidebar :show="show" :onCloseButtonClick="onCloseButtonClick" :showCloseSidebarButton="true">
        <ul class="shopList" slot="content" v-if="shops.length>0" v-scroll="onScroll" >
            <ShopItem v-for="(shop, index) in shops.slice(0, 20 * this.$store.state.pageNum)" :shop="shop"/>
        </ul>
        <div class="no-result-placeholder" slot="content" v-if="shops.length===0">
            <img src='../assets/img/no-result-placeholder-hint.png'/>
            <img :src='mascots[Math.floor(Math.random()*mascots.length)]'/>
            <p>目前沒有符合的搜尋結果</p>
        </div>
    </Sidebar>
</template>

<style>
    .shopList {
        background-color: #f3f4f5;
        padding: 0;
        transition: left 1s;
        overflow-y: auto;
        height: 100%;
    }

    .no-result-placeholder{
        text-align: center;
    }

    .no-result-placeholder img:nth-child(1){
        width: 60%;
        margin: 30px auto 0;
        display: block;
    }
    .no-result-placeholder img:nth-child(2){
        width: 30%;
        margin: 0 auto 30px;
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
    },
    methods: {
        onScroll ({target: elem}) {
            console.log("??");
            if (elem.scrollTop >= (elem.scrollHeight - elem.offsetHeight - 500) && this.$store.state.pageNum < Math.ceil(this.shops.length / 20) ) {
                this.$store.commit("addPageNum");
            }
        }
    }
}
</script>