(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{630:function(t,e,o){var content=o(669);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("df59c432",content,!0,{sourceMap:!1})},661:function(t,e,o){t.exports=o.p+"img/6cd9454.svg"},662:function(t,e,o){t.exports=o.p+"img/270d1c6.svg"},663:function(t,e,o){t.exports=o.p+"img/457a0b2.svg"},664:function(t,e,o){t.exports=o.p+"img/1759291.svg"},665:function(t,e,o){t.exports=o.p+"img/c2b9a01.svg"},666:function(t,e,o){t.exports=o.p+"img/31bd149.svg"},667:function(t,e,o){t.exports=o.p+"img/97aa199.svg"},668:function(t,e,o){"use strict";var n=o(630);o.n(n).a},669:function(t,e,o){(t.exports=o(48)(!1)).push([t.i,"body,html{overflow-y:auto!important}h2{margin-top:20px}.recommendations-container{margin-top:60px;min-height:calc(100vh - 60px);background-color:#f3f4f5;padding:10px 30px 30px;text-align:center}.tags-container{background-color:#fff;padding:30px;margin-bottom:30px}.tags{max-width:100%;width:500px;display:flex;justify-content:center;margin:auto}.tags li{flex:1;cursor:pointer}.tags li:hover p{color:#44ad47}.tags img{max-width:60px;align-self:center}.shop{width:calc((100% - 40px)/3)}.shop .read-more:hover,.shop h2:hover{color:#44ad47;cursor:pointer}.shop .img{cursor:pointer;height:250px;overflow:hidden;position:relative}.first-shop .img{height:450px}.first-shop{display:flex;flex-direction:row;margin-bottom:30px;width:100%}.first-shop .img,.first-shop .shop-content{flex:1}.first-shop .shop-content{padding-top:50px}.first-shop h2{margin:30px}.shop-content{background-color:#fff;padding:30px;position:relative}.read-more{position:absolute;bottom:20px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:flex;align-items:center}.arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);margin-left:5px}.read-more:hover path{fill:#44ad47}.shops{display:flex;justify-content:space-between}.story-title{font-weight:700;color:#44ad47}.recommendation-title{font-weight:700;color:#ee5593}",""])},683:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"story-title"},[e("span",[this._v("● 綠點故事")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"recommendation-title"},[e("img",{attrs:{src:o(622),height:"20",width:"20"}}),e("span",[this._v(" 綠點推薦")])])}],r=o(115),c=(o(623),o(635)),m=o(636),l=o(621),h=(o(177),o(178),o(179),o(180),o(181),o(661)),f=o.n(h),d=o(662),v=o.n(d),_=o(663),x=o.n(_),w=o(664),k=o.n(w),S=o(665),y=o.n(S),C=o(666),j=o.n(C),$=o(667),L=o.n($);r.apps.length||r.initializeApp({apiKey:"AIzaSyA5siB2Jg64LhQNlieawQ69kOL78X5Kov8",authDomain:"greenmaptaiwan.firebaseapp.com",databaseURL:"https://greenmaptaiwan.firebaseio.com",projectId:"greenmaptaiwan",storageBucket:"greenmaptaiwan.appspot.com",messagingSenderId:"395267289672"});var D={components:{Navbar:c.a,ShopList:m.a,ImageHandler:l.a},data:function(){return{tags:[{name:"不塑",icon:v.a},{name:"減塑",icon:k.a},{name:"零廢棄",icon:j.a},{name:"環保商店",icon:x.a},{name:"環境友善",icon:f.a},{name:"無包裝",icon:y.a},{name:"二手商店",icon:L.a}],demoShop:{address:"台中市中區三民路二段18巷6號",business_time:"請注意粉絲頁",latitude:24.1422103,longitude:120.6589805,name:"測試2號店-素食-禾",phone:"04-22211700",remark:"第一個在台灣實踐剩食利用的經營空間，嘗試開放共食、堅持以社區付的起的價格，推動在地市場的剩食，在地消耗。他們透過明日餐桌計畫，推動社區廚房減少食材過度浪費的問題。被人類拋棄的醜蔬果及剩餘食材，在這裡變身為一道道新鮮健康佳餚，來吧，走進這裡享受盛食，體會食材的美味，實踐真正的飲食零浪費。",type:"剩食冰箱",url:"https://www.facebook.com/7upkitchen/",logo:"https://i.imgur.com/OiSniLG.jpg",stack:["tag1_Unpackaged","tag2_ZeroWaste","tag3","tag4"],pic_fb_ProfilePic:"https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.0-9/38703274_2210299285852330_4242230006752739328_n.jpg?_nc_cat=102&_nc_ht=scontent.ftpe8-4.fna&oh=b23e90ae18f480e01b246cc3a03c9ac3&oe=5D719456",pic0_main:"https://i.imgur.com/AUmRdBD.jpg",pic1:"https://i.imgur.com/nRpuru2.jpg",pic2:"https://i.imgur.com/TDOSd3k.jpg",pic3:"https://i.imgur.com/eKOQDbN.jpg",pic4:"https://i.imgur.com/iNL9nVA.jpg",pic5:"https://i.imgur.com/fpDMHnW.jpg",pic6:"https://i.imgur.com/QyiD7pp.jpg"}}},computed:{firstShop:function(){return this.$store.state.shops[0]||{}}},mounted:function(){console.log("recommendation mounted"),this.$store.dispatch("getRecommendationShops")},methods:{setShop:function(t){this.$store.commit("setShop",t),$nuxt.$router.push("/shop")},setTag:function(t){this.$store.commit("setTag",t),$nuxt.$router.push("/")}}},A=(o(668),o(11)),component=Object(A.a)(D,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Navbar",{attrs:{cities:t.cities,typeOptions:t.items}}),t._v(" "),o("div",{staticClass:"recommendations-container"},[o("div",{staticClass:"tags-container"},[o("p",[t._v("城市熱搜")]),t._v(" "),o("ul",{staticClass:"tags"},t._l(t.tags,function(e,n){return o("li",{key:n,on:{click:function(o){return t.setTag(e.name)}}},[o("img",{attrs:{src:e.icon}}),t._v(" "),o("p",[t._v(t._s(e.name))])])}),0)]),t._v(" "),o("div",{staticClass:"first-shop shop"},[o("div",{staticClass:"shop-content"},[t._m(0),t._v(" "),o("h2",{on:{click:function(e){return t.setShop(t.firstShop)}}},[t._v(t._s(t.firstShop.name))]),t._v(" "),o("p",[t._v("\n                  "+t._s(t.firstShop.description)+"\n              ")]),t._v(" "),o("p",{staticClass:"read-more"},[o("span",{on:{click:function(e){return t.setShop(t.firstShop)}}},[t._v("閱讀更多")]),t._v(" "),o("svg",{staticClass:"arrow",staticStyle:{"enable-background":"new 0 0 451.847 451.847"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0",y:"0",width:"16",height:"16",viewBox:"0 0 451.847 451.847","xml:space":"preserve",preserveAspectRatio:"xMinYMin meet"}},[o("g",[o("g",[o("path",{staticClass:"active-path",attrs:{d:"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z","data-original":"#000000","data-old_color":"#000000"}})])])])])]),t._v(" "),o("div",{staticClass:"img",on:{click:function(e){return t.setShop(t.firstShop)}}},[o("ImageHandler",{attrs:{src:t.firstShop.recommendation_photo||t.firstShop.facebook_avatar}})],1)]),t._v(" "),o("div",{staticClass:"shops"},t._l(this.$store.state.shops.slice(1,4),function(e,n){return o("div",{key:n,staticClass:"shop"},[o("div",{staticClass:"img",on:{click:function(o){return t.setShop(e)}}},[o("ImageHandler",{attrs:{src:e.recommendation_photo||e.facebook_avatar}})],1),t._v(" "),o("div",{staticClass:"shop-content"},[t._m(1,!0),t._v(" "),o("h2",{directives:[{name:"line-clamp",rawName:"v-line-clamp:20",value:1,expression:"1",arg:"20"}],on:{click:function(o){return t.setShop(e)}}},[t._v(t._s(e.name))])])])}),0)])],1)},n,!1,null,null,null);e.default=component.exports}}]);