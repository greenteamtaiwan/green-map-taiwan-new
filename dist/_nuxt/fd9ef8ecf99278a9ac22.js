(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{631:function(e,t,r){var content=r(675);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(49).default)("df59c432",content,!0,{sourceMap:!1})},667:function(e,t,r){e.exports=r.p+"img/6cd9454.svg"},668:function(e,t,r){e.exports=r.p+"img/270d1c6.svg"},669:function(e,t,r){e.exports=r.p+"img/457a0b2.svg"},670:function(e,t,r){e.exports=r.p+"img/1759291.svg"},671:function(e,t,r){e.exports=r.p+"img/c2b9a01.svg"},672:function(e,t,r){e.exports=r.p+"img/31bd149.svg"},673:function(e,t,r){e.exports=r.p+"img/97aa199.svg"},674:function(e,t,r){"use strict";var n=r(631);r.n(n).a},675:function(e,t,r){(e.exports=r(48)(!1)).push([e.i,"body,html{overflow-y:auto!important}h2{margin-top:20px}.recommendations-container{margin-top:60px;min-height:calc(100vh - 60px);background-color:#f3f4f5;padding:10px 30px 30px;text-align:center}.tags-container{background-color:#fff;padding:30px;margin-bottom:30px}.tags{max-width:100%;width:600px;display:flex;justify-content:center;margin:auto}.tags li{flex:1;cursor:pointer}.tags li:hover p{color:#44ad47}.tags img{max-width:60px;align-self:center}.shop{width:calc((100% - 40px)/3);display:flex;flex-direction:column}.shop .read-more:hover,.shop h2:hover{color:#44ad47;cursor:pointer}.shop .img{cursor:pointer;height:250px;overflow:hidden;position:relative}.first-shop .img{height:450px}.first-shop{display:flex;flex-direction:row;margin-bottom:30px;width:100%}.first-shop .img,.first-shop .shop-content{flex:1}.first-shop .shop-content{padding-top:50px}.first-shop h2{width:90%;margin:30px auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.shop-content{background-color:#fff;padding:30px;position:relative}.first-shop .description{white-space:pre-line;text-align:left}.read-more{position:absolute;bottom:20px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:flex;align-items:center}.arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);margin-left:5px}.read-more:hover path{fill:#44ad47}.shops{display:flex;justify-content:space-between}.story-title{font-weight:700;color:#44ad47}.recommendation-title{font-weight:700;color:#ee5593}@media screen and (max-width:991px){.recommendations-container{padding:0;margin-top:116px}.first-shop.shop{flex-direction:column-reverse}.shops{flex-direction:column}.shop{flex-direction:row;width:100%;margin-bottom:10px}.first-shop .img{height:350px}.first-shop .shop-content{padding-top:30px}.story-title h2{margin:20px auto 30px}.shop:not(.first-shop) .img{width:40%;height:150px}.shop:not(.first-shop) .shop-content{width:60%}}",""])},692:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"story-title"},[t("span",[this._v("● 綠點故事")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"recommendation-title"},[t("img",{attrs:{src:r(622),height:"20",width:"20"}}),t("span",[this._v(" 綠點推薦")])])}],o=r(115),l=(r(623),r(637)),c=r(639),h=r(621);r(177),r(178),r(179),r(180),r(181);let d=null;let _=null;function m(e,t={}){let r=document.createElement(e);return Object.keys(t).forEach(e=>{r[e]=t[e]}),r}function f(e,t,r){return(window.getComputedStyle(e,r||null)||{display:"none"})[t]}function x(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};let t=e;for(;t!==document;){if("none"===f(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var v='.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}';let w=0,style=null;function z(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=function(){let{rendered:e,detached:t}=x(this);e!==this.__resize_rendered__&&(!t&&this.__resize_triggers__&&(S(this),this.addEventListener("scroll",y,!0)),this.__resize_rendered__=e,C(this))}.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){let{offsetWidth:t,offsetHeight:r}=e,n=new ResizeObserver(()=>{(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==t||e.offsetHeight!==r))&&C(e)}),{detached:o,rendered:l}=x(e);e.__resize_observer_triggered__=!1===o&&!1===l,e.__resize_observer__=n,n.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){C(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(w||(style=function(e){var style=document.createElement("style");return style.type="text/css",style.styleSheet?style.styleSheet.cssText=e:style.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(style),style}(v)),function(e){let t=f(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};let r=m("div",{className:"resize-triggers"}),n=m("div",{className:"resize-expand-trigger"}),o=m("div"),l=m("div",{className:"resize-contract-trigger"});n.appendChild(o),r.appendChild(n),r.appendChild(l),e.appendChild(r),e.__resize_triggers__={triggers:r,expand:n,expandChild:o,contract:l},S(e),e.addEventListener("scroll",y,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=x(e).rendered,window.MutationObserver){let t=new MutationObserver(e.__resize_mutation_handler__);t.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=t}e.__resize_listeners__.push(t),w++}function y(){var e,t;S(this),this.__resize_raf__&&(e=this.__resize_raf__,_||(_=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),_(e)),this.__resize_raf__=(t=(()=>{let e=function(e){let{width:t,height:r}=e.__resize_last__,{offsetWidth:n,offsetHeight:o}=e;return n!==t||o!==r?{width:n,height:o}:null}(this);e&&(this.__resize_last__=e,C(this))}),d||(d=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),d(t))}function C(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach(t=>{t.call(e)})}function S(e){let{expand:t,expandChild:r,contract:n}=e.__resize_triggers__,{scrollWidth:o,scrollHeight:l}=n,{offsetWidth:c,offsetHeight:h,scrollWidth:d,scrollHeight:_}=t;n.scrollLeft=o,n.scrollTop=l,r.style.width=c+1+"px",r.style.height=h+1+"px",t.scrollLeft=d,t.scrollTop=_}const k=["maxLines","maxHeight","ellipsis","isClamped"],E=["tag","text","autoresize"];var $={name:"vue-clamper",props:{tag:{type:String,default:"div"},autoresize:{type:Boolean,default:!1},maxLines:Number,maxHeight:[String,Number],ellipsis:{type:String,default:"…"},expanded:Boolean},data(){return{offset:null,text:this.getText(),localExpanded:!!this.expanded}},computed:{clampedText(){return this.text.slice(0,this.offset)+this.ellipsis},isClamped(){return!!this.text&&this.offset!==this.text.length},realText(){return this.isClamped?this.clampedText:this.text},realMaxHeight(){if(this.localExpanded)return null;let{maxHeight:e}=this;return e?"number"==typeof e?`${e}px`:e:null}},watch:{expanded(e){this.localExpanded=e},localExpanded(e){e?this.clampAt(this.text.length):this.update(),this.expanded!==e&&this.$emit("update:expanded",e)}},mounted(){this.init(),E.forEach(e=>{this.$watch(e,this.init)}),k.forEach(e=>{this.$watch(e,this.update)})},updated(){this.text=this.getText(),this.applyChange()},beforeDestroy(){this.cleanUp()},methods:{init(){if(this.$slots.default){if(this.offset=this.text.length,this.cleanUp(),this.autoresize){let e=()=>{this.update()};z(this.$el,e),this.unregisterResizeCallback=(()=>{!function(e,t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);let r=e.__resize_listeners__;r&&(r.splice(r.indexOf(t),1),r.length||(e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",y),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null),!--w&&style&&style.parentNode.removeChild(style))}(this.$el,e)})}this.update()}},update(){this.localExpanded||(this.applyChange(),(this.isOverflow()||this.isClamped)&&this.search())},expand(){this.localExpanded=!0},collapse(){this.localExpanded=!1},toggle(){this.localExpanded=!this.localExpanded},isOverflow(){if(!this.maxLines&&!this.maxHeight)return!1;if(this.maxLines){if(this.$refs.content.getClientRects().length>this.maxLines)return!0}return!!(this.maxHeight&&this.$el.scrollHeight>this.$el.offsetHeight)},getText(){let[content]=(this.$slots.default||[]).filter(e=>!e.tag&&!e.isComment);return content?content.text:""},moveEdge(e){this.clampAt(this.offset+e)},clampAt(e){this.offset=e,this.applyChange()},applyChange(){this.$refs.text.textContent=this.realText},stepToFit(){this.fill(),this.clamp()},fill(){for(;!this.isOverflow()&&this.offset<this.text.length;)this.moveEdge(1)},clamp(){for(;this.isOverflow()&&this.offset>0;)this.moveEdge(-1)},search(...e){let[t=0,r=this.offset]=e;if(r-t<=3)return void this.stepToFit();let n=Math.floor((r+t)/2);this.clampAt(n),this.isOverflow()?this.search(t,n):this.search(n,r)},cleanUp(){this.unregisterResizeCallback&&this.unregisterResizeCallback()}},render(e){let t=[e("span",{ref:"text",attrs:{"aria-label":this.text.trim()}},this.realText)],{expand:r,collapse:n,toggle:o}=this,l={expand:r,collapse:n,toggle:o,clamped:this.isClamped,expanded:this.localExpanded},c=this.$scopedSlots.before?this.$scopedSlots.before(l):this.$slots.before;c&&t.unshift(...Array.isArray(c)?c:[c]);let h=this.$scopedSlots.after?this.$scopedSlots.after(l):this.$slots.after;h&&t.push(...Array.isArray(h)?h:[h]);let d=[e("span",{style:{boxShadow:"transparent 0 0"},ref:"content"},t)];return e(this.tag,{style:{maxHeight:this.realMaxHeight,overflow:"hidden"}},d)}},L=r(667),H=r.n(L),A=r(668),T=r.n(A),O=r(669),j=r.n(O),M=r(670),N=r.n(M),R=r(671),D=r.n(R),W=r(672),F=r.n(W),B=r(673),I=r.n(B);o.apps.length||o.initializeApp({apiKey:"AIzaSyA5siB2Jg64LhQNlieawQ69kOL78X5Kov8",authDomain:"greenmaptaiwan.firebaseapp.com",databaseURL:"https://greenmaptaiwan.firebaseio.com",projectId:"greenmaptaiwan",storageBucket:"greenmaptaiwan.appspot.com",messagingSenderId:"395267289672"});var U={components:{Navbar:l.a,ShopList:c.a,ImageHandler:h.a,VClamp:$},data:function(){return{tags:[{name:"不塑",icon:T.a},{name:"減塑",icon:N.a},{name:"零廢棄",icon:F.a},{name:"環保商店",icon:j.a},{name:"環境友善",icon:H.a},{name:"無包裝",icon:D.a},{name:"二手商店",icon:I.a}],demoShop:{address:"台中市中區三民路二段18巷6號",business_time:"請注意粉絲頁",latitude:24.1422103,longitude:120.6589805,name:"測試2號店-素食-禾",phone:"04-22211700",remark:"第一個在台灣實踐剩食利用的經營空間，嘗試開放共食、堅持以社區付的起的價格，推動在地市場的剩食，在地消耗。他們透過明日餐桌計畫，推動社區廚房減少食材過度浪費的問題。被人類拋棄的醜蔬果及剩餘食材，在這裡變身為一道道新鮮健康佳餚，來吧，走進這裡享受盛食，體會食材的美味，實踐真正的飲食零浪費。",type:"剩食冰箱",url:"https://www.facebook.com/7upkitchen/",logo:"https://i.imgur.com/OiSniLG.jpg",stack:["tag1_Unpackaged","tag2_ZeroWaste","tag3","tag4"],pic_fb_ProfilePic:"https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.0-9/38703274_2210299285852330_4242230006752739328_n.jpg?_nc_cat=102&_nc_ht=scontent.ftpe8-4.fna&oh=b23e90ae18f480e01b246cc3a03c9ac3&oe=5D719456",pic0_main:"https://i.imgur.com/AUmRdBD.jpg",pic1:"https://i.imgur.com/nRpuru2.jpg",pic2:"https://i.imgur.com/TDOSd3k.jpg",pic3:"https://i.imgur.com/eKOQDbN.jpg",pic4:"https://i.imgur.com/iNL9nVA.jpg",pic5:"https://i.imgur.com/fpDMHnW.jpg",pic6:"https://i.imgur.com/QyiD7pp.jpg"}}},computed:{firstShop:function(){return this.$store.state.shops[0]||{}}},mounted:function(){console.log("recommendation mounted"),this.$store.dispatch("getRecommendationShops")},methods:{setShop:function(e){this.$store.commit("setShop",e),$nuxt.$router.push("/shop")},setTag:function(e){this.$store.commit("setTag",e),$nuxt.$router.push("/")}}},Q=(r(674),r(11)),component=Object(Q.a)(U,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Navbar",{attrs:{cities:e.cities,typeOptions:e.items}}),e._v(" "),r("div",{staticClass:"recommendations-container"},[r("div",{staticClass:"tags-container"},[r("p",[e._v("城市熱搜")]),e._v(" "),r("ul",{staticClass:"tags"},e._l(e.tags,function(t,n){return r("li",{key:n,on:{click:function(r){return e.setTag(t.name)}}},[r("img",{attrs:{src:t.icon}}),e._v(" "),r("p",[e._v(e._s(t.name))])])}),0)]),e._v(" "),r("div",{staticClass:"first-shop shop"},[r("div",{staticClass:"shop-content"},[e._m(0),e._v(" "),r("h2",{on:{click:function(t){return e.setShop(e.firstShop)}}},[e._v(e._s(e.firstShop.name))]),e._v(" "),r("p",{staticClass:"description desktop"},[r("v-clamp",{attrs:{autoresize:"","max-lines":7}},[e._v(e._s(e.firstShop.recommendation_description?e.firstShop.recommendation_description.trim():""))])],1),e._v(" "),r("p",{staticClass:"read-more"},[r("span",{on:{click:function(t){return e.setShop(e.firstShop)}}},[e._v("閱讀更多")]),e._v(" "),r("svg",{staticClass:"arrow",staticStyle:{"enable-background":"new 0 0 451.847 451.847"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0",y:"0",width:"16",height:"16",viewBox:"0 0 451.847 451.847","xml:space":"preserve",preserveAspectRatio:"xMinYMin meet"}},[r("g",[r("g",[r("path",{staticClass:"active-path",attrs:{d:"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z","data-original":"#000000","data-old_color":"#000000"}})])])])])]),e._v(" "),r("div",{staticClass:"img",on:{click:function(t){return e.setShop(e.firstShop)}}},[r("ImageHandler",{attrs:{src:e.firstShop.recommendation_photo||e.firstShop.facebook_avatar,alt:e.firstShop.name}})],1)]),e._v(" "),r("div",{staticClass:"shops"},e._l(this.$store.state.shops.slice(1,4),function(t,n){return r("div",{key:n,staticClass:"shop"},[r("div",{staticClass:"img",on:{click:function(r){return e.setShop(t)}}},[r("ImageHandler",{attrs:{src:t.recommendation_photo||t.facebook_avatar,alt:t.name}})],1),e._v(" "),r("div",{staticClass:"shop-content"},[e._m(1,!0),e._v(" "),r("h2",{directives:[{name:"line-clamp",rawName:"v-line-clamp:20",value:1,expression:"1",arg:"20"}],on:{click:function(r){return e.setShop(t)}}},[e._v(e._s(t.name))])])])}),0)])],1)},n,!1,null,null,null);t.default=component.exports}}]);