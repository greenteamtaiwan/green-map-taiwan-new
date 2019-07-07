<template>
    <Sidebar :show="show" :onCloseButtonClick="onCloseButtonClick" :showCloseSidebarButton="true">
        <ul class="shopList" slot="content" v-if="shops.length>0">
            <lazy-render :data="shops" :time="700" :limit="20" track-by-data>
                <ShopItem v-for="(shop, index) in shops" :shop="shop"/>
                <div slot="tip" style="display:inline-block;margin:20px;">Loading...</div>
            </lazy-render>
        </ul>
        <div class="no-result-placeholder" slot="content" v-if="shops.length===0">
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
        overflow: auto;
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