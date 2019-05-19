<template>
        <b-container class="shopItem-container" @click="setShop">
            <b-row>
                <b-col lg='5' class='shopItem-main'>
                    <img src="~/assets/img/picture 1.jpg">
                </b-col>
                <b-col lg='7' class='shopItem-aside'>
                    <div class="recommend-container"><p class="recommend" v-if="shop.isRecommended"><img src="~/assets/img/icon_like.svg" height="20" width="20"> 綠點推薦</p></div>
                    <h3  v-line-clamp:20="1">{{shop.name}}</h3>
                    <p class='type'>{{types[shop.type]}} ‧ <span class="running-status">營業中</span></p>
                    <p class="description" v-line-clamp:20="2">{{shop.remark}}</p> 
                </b-col>
            </b-row>
        </b-container>
    
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
    
    .row{
        background-color: #ffffff;
        margin: 0;
    }
    
    .row > div{
        padding: 0;
    }

    .shopItem-main img{
        width: 100%;
        height: 100%;
    }

    h3{
        font-weight: bold;
        font-size: 16px;
        display: inline-block;
    }

    .row > .shopItem-aside{
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
        min-height: 2rem;
    }

    .running-status{
        color: #44AD47;
    }
</style>

<script>
export default {
    computed: {
        types: function (){
            return this.$store.state.sourceData.types;
        }
    },
    props:{
        shop: {
            type: Object,
            default: {}
        }
    },
    methods:{
        setShop: function() {
            this.$store.commit("setShop", this.shop);
            $nuxt.$router.push('/shop');
        }
    }
}
</script>