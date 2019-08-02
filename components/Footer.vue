<template>
    <div class="footer-container">
        <div class="about-GT">
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
                    <span class="fontSize16"><img src="../assets/img/contact_us_messenger_icon.svg" />Zero Waste Taiwan</span>
                </a>
                <a Href="mailto:greenteamtaiwan@gmail.com ?subject=【來信洽詢】&CC=ivy11628@gmail.com">
                    <span class="fontSize16"><img src="../assets/img/contact_us_gmail_icon.svg" />Greenteamtaiwan@gmail.com</span>  
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

    .footer-container .about-GT h3{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .about-GT{
      background-color: #f3f4f5;
      padding: 30px 100px;
      display: flex;
      justify-content: space-between;
    }

    .about-GT-text{
      width: 55%;
      font-size: 16px;
    }

    .about-GT-contact{
        width: 30%;
        font-size: 16px;
        display: flex;
        flex-direction: column;
    }

    .about-GT-contact img{
        width: 30px;
        display: inline-block;
        margin-right: 10px;
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