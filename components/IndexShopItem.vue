<template>
        <div class="index-shopItem-container" @click="setShop" style="containerStyle">
                <div class='index-shopItem-main'>
                    <ImageHandler :src="shop.photo0 || shop.facebook_avatar" :alt="shop.name" :altPlaceholders="altPlaceholders"/>
                </div>
                <div class='index-shopItem-aside'>
                    <div style="width: 100%">
                    <div class="index-shopItem-title">
                        <h3><v-clamp autoresize :max-lines="1">{{shop.name}}</v-clamp></h3>
                        <div class="recommend-container"><p class="recommend" v-if="shop.is_recommended"><img src="~/assets/img/icon_recommend.svg" height="20" width="20"> 精選店家</p></div>
                    </div>
                    <p class='type'>
                        <span v-if="shop.type&&types[shop.type[0]]" v-for="(type, index) in shop.type">
                            {{`${types[type].text}${index===shop.type.length-1?"":", "}`}}
                            {{shop.open_status && shop.open_status.type?" ‧ ":""}}
                        </span>
                        <span class="running-status">{{shop.open_status && shop.open_status.type?shop.open_status.text:""}}</span>
                    </p>
                    <div class="recommendation-data">
                        <p class="stars">
                            <span v-for="num in shop.stars">★ </span>
                        </p>
                        <ul>
                            <li>食物<span>5.0</span></li>
                            <li>環境<span>5.0</span></li>
                            <li>服務<span>5.0</span></li>
                        </ul>
                    </div>
                    <p class="index-shopItem-description">
                        <v-clamp autoresize :max-lines="3">{{shop.description}}</v-clamp>
                    </p> 
                    </div>
                </div>
        </div>    
</template>

<style scoped>
    .index-shopItem-container{
        padding: 0;
        margin-bottom: 20px;        
        cursor: pointer;
    }

    .index-shopItem-container:hover h3{
        color: #44AD47;
    }

    .index-shopItem-main img{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .index-shopItem-description{
        min-height: 70px;
        margin-bottom: 0;
    }

    .index-shopItem-container .type{
        margin-bottom: 20px;
    }

    .index-shopItem-container .type span:nth-child(1){
        color: rgba(0,0,0,0.4);
    }

    .index-shopItem-container .recommendation-data{
        border-bottom: solid 1px rgba(0,0,0,0.4);
        padding-bottom: 10px;
        margin-bottom: 40px;
    }

    .index-shopItem-container .recommendation-data .stars{
        color: #F8C940;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .index-shopItem-container .recommendation-data ul{
        list-style-type: none;
        display: flex;
    }

    .index-shopItem-container .recommendation-data li{
        margin-right: 30px;
    }
    .index-shopItem-container .recommendation-data li span{
        display: inline-block;
        margin-left: 10px;
        color: #EE5593;
        font-weight: bold;
    }

    .index-shopItem-container .recommend-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .index-shopItem-container .recommend{
        justify-content: flex-end;
        color: #EE5593;
        font-weight: bold;
        margin: 0 0 20px;
    }
    .index-shopItem-container .recommend img{
        /*width: 14px;*/
    }

    .index-shopItem-container .recommend, .description, .type{
        font-size: 18px;
    }

    .index-shopItem-container .description {
        min-height: 28px;
    }

    .index-shopItem-container .running-status{
        color: #44AD47;
    }
    .index-shopItem-container{
        display: flex;
        flex-direction: row;
    }

    .index-shopItem-main{
        width: 45%;
        overflow: hidden;
        display: flex;
    }
    .index-shopItem-aside{
        width: 55%;
        display: flex;
        background-color: white;
        padding: 50px 60px;
    }

    .index-shopItem-title{
        display: flex;
        justify-content: space-between;
    }

    .index-shopItem-title h3{
        font-size: 32px;
        display: inline-block;
        width: calc(100% - 100px);
        margin-bottom: 20px;
    }

    @media screen and (max-width:1250px){

    }
</style>

<script>
import ImageHandler from '~/components/ImageHandler.vue';
import VClamp from 'vue-clamp';
import GT1 from '~/assets/img/ShopItem_GT1.png';
import GT2 from '~/assets/img/ShopItem_GT2.png';
import GT3 from '~/assets/img/ShopItem_GT3.png';
import GT4 from '~/assets/img/ShopItem_GT4.png';
import GT5 from '~/assets/img/ShopItem_GT5.png';

export default {
    components: {
        ImageHandler,
        VClamp
    },
    computed: {
        types: function (){
            return this.$store.state.sourceData.types;
        },
        altPlaceholders: function(){
            return [
                GT1,
                GT2,
                GT3,
                GT4,
                GT5
            ];
        }
    },
    props:{
        shop: {
            type: Object,
            default: {}
        },
        containerStyle: {
            type: Object,
            default: ()=>({})
        }
    },
    methods:{
        setShop: function() {
            this.$store.commit("setShop", this.shop);
            if(this.shop.google_map_link && !this.shop.photo1 && !this.shop.recommendation_description && !this.shop.description){
                var win = window.open(this.shop.google_map_link, '_blank');
                win.focus();
            }else{
                $nuxt.$router.push(`/shop?objectID=${this.shop.objectID}`);
            }
        }
    }
}
</script>