<template>
        <div class="shopItem-container" @click="setShop" style="containerStyle" :class="{'isMarkerClicked': isMarkerClicked}">
                <div class='shopItem-main'>
                    <ImageHandler :src="shop.photo0 || shop.facebook_avatar" :alt="shop.name" :altPlaceholders="altPlaceholders"/>
                </div>
                <div class='shopItem-aside'>
                    <div style="width: 100%">
                    <div class="recommend-container"><p class="recommend" v-if="shop.is_recommended"><img src="~/assets/img/icon_like.svg" height="20" width="20"> 精選店家</p></div>
                    <h3><v-clamp autoresize :max-lines="1">{{shop.name}}</v-clamp></h3>
                    <p class='type'>
                        <span v-if="shop.type&&types[shop.type[0]]" v-for="(type, index) in shop.type">
                            {{shop.open_status && shop.open_status.type?" ‧ ":""}}
                            {{`${types[type].text}${index===shop.type.length-1?"":", "}`}}
                        </span>
                        <span class="running-status">{{shop.open_status && shop.open_status.type?shop.open_status.text:""}}</span>
                    </p>
                    <p class="shopItem-description">
                        <v-clamp autoresize :max-lines="2">{{shop.description}}</v-clamp>
                    </p> 
                    </div>
                </div>
        </div>    
</template>

<style scoped>
    .shopItem-container{
        padding: 0;
        margin: 20px 0;        
        cursor: pointer;
    }

    .shopItem-container:hover h3{
        color: #44AD47;
    }

    .shopItem-main{
        overflow: hidden;
    }
    .shopItem-main img{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .shopItem-container h3{
        font-weight: bold;
        font-size: 16px;
        display: inline-block;
    }

    .shopItem-aside{
        padding: 10px;
    }
    
    .shopItem-description{
        min-height: 45px;
    }

    .shopItem-container .type{
        border-bottom: solid 1px lightgray;
        padding-bottom: 5px;
        margin-bottom: 5px;
    }

    .shopItem-container .recommend-container{
        min-height: 21px;
    }
    .shopItem-container .recommend{
        justify-content: flex-end;
    }
    .shopItem-container .recommend img{
        width: 14px;
    }

    .shopItem-container .recommend, .shopItem-container .description, .shopItem-container .type{
        font-size: 14px;
    }

    .description {
        min-height: 28px;
    }

    .running-status{
        color: #44AD47;
    }
    .shopItem-container{
        display: flex;
        flex-direction: row;
    }

    .shopItem-main{
        width: 35%;
        display: flex;
    }
    .shopItem-aside{
        width: 65%;
        display: flex;
        background-color: white;
    }

    .isMarkerClicked{
        border-top: solid 5px #44ad47;
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
        },
        isMarkerClicked: {
            type: Boolean,
            default: false
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