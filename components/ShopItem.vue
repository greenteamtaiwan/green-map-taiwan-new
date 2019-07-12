<template>
        <div class="shopItem-container" @click="setShop" style="containerStyle">
                <div class='shopItem-main'>
                    <ImageHandler :src="shop.facebook_avatar || shop.photo1" :alt="shop.name"/>
                </div>
                <div class='shopItem-aside'>
                    <div style="width: 100%">
                    <div class="recommend-container"><p class="recommend" v-if="shop.is_recommended"><img src="~/assets/img/icon_like.svg" height="20" width="20"> 綠點推薦</p></div>
                    <h3><v-clamp autoresize :max-lines="1">{{shop.name}}</v-clamp></h3>
                    <p class='type'>
                        {{shop.type&&types[shop.type[0]]?types[shop.type[0]].text:""}}
                        <span v-if="shop.open_status && shop.open_status.type"> ‧ </span>
                        <span class="running-status">{{shop.open_status && shop.open_status.type?shop.open_status.text:""}}</span></p>
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

    h3{
        font-weight: bold;
        font-size: 16px;
        display: inline-block;
    }

    .shopItem-aside{
        padding: 10px;
    }

    .type{
        border-bottom: solid 1px lightgray;
        padding-bottom: 5px;
        margin-bottom: 5px;
    }

    .recommend-container{
        min-height: 21px;
    }
    .recommend{
        justify-content: flex-end;
    }
    .recommend img{
        width: 14px;
    }

    .recommend, .description, .type{
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

    @media screen and (max-width:991px){

    }
</style>

<script>
import ImageHandler from '~/components/ImageHandler.vue';
import VClamp from 'vue-clamp';

export default {
    components: {
        ImageHandler,
        VClamp
    },
    computed: {
        types: function (){
            return this.$store.state.sourceData.types;
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
            $nuxt.$router.push(`/shop?objectID=${this.shop.objectID}`);
        }
    }
}
</script>