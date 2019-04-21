<template>
    <b-container>
        <b-row>
            <b-col lg='5' class='shopItem-main'>
                <img src="~/assets/img/picture 1.jpg">
            </b-col>
            <b-col lg='7' class='shopItem-aside'>
                <h3>商家名稱</h3><p class="recommend">
                <img src="~/assets/img/icon_like.svg" height="20" width="20"> 推薦
                </p>
                <p class='type'>類別</p>
                <br/>
                <p>台北市 中山區<br>
                中山北路一段 111號</p>
                
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
</style>

