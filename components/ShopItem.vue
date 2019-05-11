<template>
        <b-container>
            <b-row>
                <b-col lg='5' class='shopItem-main'>
                    <nuxt-link to="/shop">
                        <img src="~/assets/img/picture 1.jpg">
                    </nuxt-link>
                </b-col>
                <b-col lg='7' class='shopItem-aside'>
                    <p class="recommend"><img src="~/assets/img/icon_like.svg" height="20" width="20"> 綠點推薦</p>
                    <nuxt-link to="/shop">
                        <!-- <h3>商家名稱 {{data}}</h3> -->
                        <h3>商家名稱 :  {{selectedShops.name}}</h3>
                    </nuxt-link>
                    <p class='type'>類別 : {{selectedShops.type}} ‧ <span class="running-status">營業中</span></p>
                    <p class="description">簡介: {{selectedShops.remark}} </p>
                </b-col>
            </b-row>
        </b-container>

</template>

<style scoped>
    .container{
        padding: 0;
        margin: 20px 0;
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

    .recommend{
        justify-content: flex-end;
    }
    .recommend img{
        width: 14px;
    }

    .recommend, .description, .type{
        font-size: 14px;
    }

    .running-status{
        color: #44AD47;
    }
</style>

<script>

export default {
    props:{
        selectedShops: {
          type: Array,
          default: []
      }
    }
}
</script>
