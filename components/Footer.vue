<template>
    <div class="footer-container" :class="containerClass" id="aboutUs">
        <div class="about-map" :class="sectionClass">
          <h3>台灣零廢棄地圖介紹</h3>
          <p>
            集結全台灣最完整環保實體店面資訊的“零廢棄地圖”誕生！ 
            一鍵點選”不塑、減廢、共享”資源全都露，做環保變得超級方便！

            目前內容包含：綠餐廳、二手市集/商店、免費市集/商店、享食冰箱、食物銀行、蔬（素）食餐廳。

            未來將陸續推出：環保優惠總彙整、維修商店據點(含縫紉店、清洗店)、飲水機(含加水站)、綠色旅館、無包裝商店(含裸賣店、傳統/農夫市集、洗衣粉補充機)、剩食餐廳、資源回收站(含自動回收機)、工具租借站、圖書館(含漂書站)、共享交通(含停車位)、共享工作空間…等地圖資訊整合服務。 

            Zero Waste Taiwan的目標是提供多元的循環/共享經濟產品服務資訊，讓更多人輕鬆實踐7R原則(Refuse、Reduce、Reuse、Repair、Recycle、Rot、Rethink)；優化＂使用權＂的服務範圍，讓每一份資源(人力、物資、能源、空間)都能更有效率的被利用。

            歡迎您使用地圖並提供回饋，一同成為Zero Waste的一員，支持綠色產業來守護台灣，用每一次的消費為台灣的未來投票。
          </p>
        </div>
        <div class="about-GT" :class="sectionClass">
          <div class="about-GT-text">
            <h3>關於Zero Waste Taiwan</h3>
            <p>
              台灣零廢棄平台由Zero Waste Taiwan台灣零廢棄社團、社團法人蠻野心足生態協會、減塑慢行社團聯合組成，
              致力於推廣7R(Refuse、Reduce、Reuse、Repair、Recycle、Rot、Rethink)環保生活理念。

              我們長期關注台灣廢棄物增加的現象，
              更進一步地發現垃圾進入焚化爐或掩埋場仍產生許多生態環境與世代正義問題，
              所以我們相信從日常生活中減少一次性垃圾的源頭減量才是根本之道。
            </p>
          </div>
          <div class="about-GT-contact">
                <h3 class="fontSize24">聯絡我們</h3>
                <a  href="javascript:void(0);" @click="openFBPagePlugin">
                    <span class="fontSize16"><img src="../assets/img/contact_us_messenger_icon.svg" />Zero Waste Taiwan 粉絲專頁</span>
                </a>
                <a  href="https://www.facebook.com/groups/622061734624660/" target="_blank" rel="nofollow noreferer noopener">
                    <span class="fontSize16"><img src="../assets/img/icon_facebook_group.svg" />Zero Waste Taiwan 臉書社團</span>
                </a>
                <a  href="https://greenteamtaiwan.github.io/gt-home/" target="_blank" rel="nofollow noreferer noopener">
                    <span class="fontSize16"><img src="../assets/img/GT logo.png" class="zero-waste-taiwan-logo"/>Zero Waste Taiwan 官方網站</span>
                </a>
                <a Href="mailto:greenteamtaiwan@gmail.com ?subject=【來信洽詢】&CC=ivy11628@gmail.com">
                    <span class="fontSize16"><img src="../assets/img/contact_us_gmail_icon.svg" />Zero Waste Taiwan 電子信箱</span>  
                </a>
          </div>
        </div>
        <footer class="footer">
            Copyright 2019 GT. Imagined by GT. 
            <img src="../assets/img/GT logo.png" alt="GT logo" class="logo" /> 
        </footer>
    </div>
</template>

<style>
    .footer-container{
      background-color: #fff;
      padding: 20px 0 0;
    }

    .footer-container h3{
      margin-top: 0;
    }

    .footer-container .about-GT h3{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    .footer-container .about-map h3{
        font-size: 20px;
        font-weight: bold;
    }

    .about-map{
      background-color: #f3f4f5;
      padding: 30px 200px;
      margin-bottom: 30px;
    }

    .about-map p{
      white-space: pre-line;
    }

    .footer-container .about-map h3{
      text-align: center;
    }

    .about-GT{
      background-color: #f3f4f5;
      padding: 30px 90px;
      display: flex;
      justify-content: space-between;
    }

    .about-GT-text{
      width: 55%;
      font-size: 16px;
    }

    .about-GT-contact{
        width: 35%;
        font-size: 16px;
        display: flex;
        flex-direction: column;
    }

    .about-GT-contact img{
        width: 30px;
        display: inline-block;
        margin-right: 10px;
    }

    .about-GT-contact img.zero-waste-taiwan-logo{
        width: unset;
        height: 25px;
    }

    .about-GT-contact a{
        display: inline-block;
        margin-bottom: 10px;
    }

    footer{
        height: 80px; 
        color:#9FA0A0;
        display: flex; 
        align-items: center; 
        padding: 20px
    }

    footer img{
        position: absolute; 
        right:20px;
        height: 40px;
    }
</style>

<script>

export default {
  props:{
    containerClass: {
        type: String,
        default: ""
    },
    sectionClass: {
        type: String,
        default: ""
    }
  },
  methods: {
    openFBPagePlugin: function(){
      this.PopupCenter("https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fzerowastetaiwan%2F&tabs=timeline%2Cmessages%2Cevents&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=706162263119818", "", 340, 500);
    },
    PopupCenter: function(url, title, w, h) {
      // Fixes dual-screen position                         Most browsers      Firefox
      var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
      var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;
  
      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  
      var systemZoom = width / window.screen.availWidth;
      var left = (width - w) / 2 / systemZoom + dualScreenLeft
      var top = (height - h) / 2 / systemZoom + dualScreenTop
      var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    
      // Puts focus on the newWindow
      if (window.focus) newWindow.focus();
    }
  }
}

</script>