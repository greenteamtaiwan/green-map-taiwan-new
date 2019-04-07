<template>
    <div class="subSidebar">
        <div>
            <img src="~/assets/img/picture 1.jpg">
        </div>
        <div class='subSidebar-section'>
            <h1>
                商家名稱
            </h1>
            <p class='type'>類別</p>
            <p class="recommend">
                <img src="~/assets/img/icon_like.svg" height="20" width="20"> 推薦
            </p>
        </div>
        <div class='subSidebar-section'>
            <p>
                台北市 中山區<br>
                中山北路一段 111號</p>
            </p>
            <button class='google-map-button'>開啟 google map</button>
        </div>
        <div class='subSidebar-section'>
            <p>02 2600 0000</p>
            
        </div>
        <div class='subSidebar-section'>
            <p>星期一    8am - 10px</p>
            
        </div>


    </div>
</template>

<style scoped>
    h1{
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
    }
    p{
        display: inline-block;
        font-size: 14px;
    }
    .subSidebar {
        background-color: #ffffff;
        padding: 0;
        height: calc(100vh - 40px);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
        transition: left 1s;
    }

    img{
        width: 100%;
    }

    .subSidebar-section{
        padding: 10px 10px 10px 20px;
        position: relative;
    }
    
    .subSidebar-section:not(:last-child){
        border-bottom: solid 1px #9FA0A0;
    }

    .subSidebar-section p{
        margin: 0;
    }

    .recommend{
        position: absolute;
        top: 10px;
        right: 10px;
    }

    @media screen and (max-width:991px){
        .subSidebar {
            display: none;
        }
    }
</style>

<script>
import ShopItem from '~/components/ShopItem.vue'

export default {
  components: {
    ShopItem
  }
}
</script>