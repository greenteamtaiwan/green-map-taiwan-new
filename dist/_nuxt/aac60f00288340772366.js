(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{716:function(e,t,n){"use strict";var r=n(722),o=n(765),l={components:{ImageHandler:r.a,VClamp:o.a},computed:{types:function(){return this.$store.state.sourceData.types}},props:{shop:{type:Object,default:{}},containerStyle:{type:Object,default:function(){return{}}}},methods:{setShop:function(){this.$store.commit("setShop",this.shop),$nuxt.$router.push("/shop?objectID=".concat(this.shop.objectID))}}},c=(n(768),n(12)),component=Object(c.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shopItem-container",staticStyle:{},on:{click:e.setShop}},[r("div",{staticClass:"shopItem-main"},[r("ImageHandler",{attrs:{src:e.shop.photo0||e.shop.facebook_avatar,alt:e.shop.name}})],1),e._v(" "),r("div",{staticClass:"shopItem-aside"},[r("div",{staticStyle:{width:"100%"}},[r("div",{staticClass:"recommend-container"},[e.shop.is_recommended?r("p",{staticClass:"recommend"},[r("img",{attrs:{src:n(743),height:"20",width:"20"}}),e._v(" 綠點推薦")]):e._e()]),e._v(" "),r("h3",[r("v-clamp",{attrs:{autoresize:"","max-lines":1}},[e._v(e._s(e.shop.name))])],1),e._v(" "),r("p",{staticClass:"type"},[e._l(e.shop.type,function(t,n){return e.shop.type&&e.types[e.shop.type[0]]?r("span",[e._v(e._s(e.types[t].text+(n===e.shop.type.length-1?"":", ")))]):e._e()}),e._v(" "),r("span",{staticClass:"running-status"},[e._v(e._s(e.shop.open_status&&e.shop.open_status.type?e.shop.open_status.text:""))])],2),e._v(" "),r("p",{staticClass:"shopItem-description"},[r("v-clamp",{attrs:{autoresize:"","max-lines":2}},[e._v(e._s(e.shop.description))])],1)])])])},[],!1,null,"40cac3e4",null);t.a=component.exports},718:function(e,t,n){"use strict";var r={props:{show:{type:Boolean,default:!0},isRight:{type:Boolean,default:!1},showCloseSidebarButton:{type:Boolean,default:!1},onCloseButtonClick:{type:Function,default:function(){}},style:{type:String,default:""},id:{type:String,default:""}}},o=(n(770),n(12)),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar",class:{"show-sidebar":e.show,"is-right":e.isRight},staticStyle:{},attrs:{id:e.id}},[n("button",{staticClass:"close-sidebar-button",class:{showCloseSidebarButton:e.showCloseSidebarButton},on:{click:e.onCloseButtonClick}},[e._v("◂")]),e._v(" "),n("div",{staticClass:"content"},[e._t("content")],2)])},[],!1,null,null,null);t.a=component.exports},722:function(e,t,n){"use strict";var r=n(34),o=n(759),l=n.n(o),c=n(760),d=n.n(c),h=n(761),_=n.n(h),f=n(762),m=n.n(f),v=n(763),x=n.n(v),y=n(764),w=n.n(y),z={data:function(){return{placeholders:[l.a,d.a,_.a,m.a,x.a,w.a],finalSrc:null,style:{}}},props:{src:{type:String,default:""},alt:{type:String,default:""},containerStyle:{type:Object,default:function(){return{width:"100%",height:"100%",overflow:"hidden"}}},onClick:{type:Function,default:function(){}}},computed:{computedContainerStyle:function(){var e=Object(r.a)({},this.containerStyle);return this.finalSrc&&(e.backgroundImage="url('".concat(this.finalSrc,"')")),this.onClick&&(e.cursor="pointer"),e}},mounted:function(){this.checkImage()},watch:{src:function(e,t){e!==t&&this.checkImage()}},methods:{checkImage:function(){var img=new Image,e=this;img.onload=function(){e.finalSrc=e.src,this.width,this.height,e.style={width:"100%"}},img.onerror=function(){e.finalSrc=e.placeholders[Math.floor(Math.random()*e.placeholders.length)],e.style={height:"100%"}},img.src=this.src},clickImg:function(){this.onClick(this.finalSrc)}}},C=(n(766),n(12)),component=Object(C.a)(z,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{style:this.computedContainerStyle,on:{click:this.clickImg}},[this.finalSrc?t("img",{style:this.style,attrs:{src:this.finalSrc,alt:this.alt}}):t("span",{staticStyle:{display:"inline-block",margin:"20px"}},[this._v("Loading...")])])},[],!1,null,"34ea3380",null);t.a=component.exports},723:function(e,t,n){e.exports=n.p+"img/659a8bf.png"},724:function(e,t,n){e.exports=n.p+"img/ec0bdff.png"},725:function(e,t,n){e.exports=n.p+"img/89eedb7.png"},726:function(e,t,n){e.exports=n.p+"img/bcb1e7f.png"},727:function(e,t,n){e.exports=n.p+"img/e33d511.png"},743:function(e,t,n){e.exports=n.p+"img/43756ec.svg"},744:function(e,t,n){var content=n(767);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("67b64539",content,!0,{sourceMap:!1})},745:function(e,t,n){var content=n(769);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("0a896a46",content,!0,{sourceMap:!1})},746:function(e,t,n){var content=n(771);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("57a76406",content,!0,{sourceMap:!1})},759:function(e,t,n){e.exports=n.p+"img/751da2f.png"},760:function(e,t,n){e.exports=n.p+"img/3eda3a9.png"},761:function(e,t,n){e.exports=n.p+"img/a862ee0.png"},762:function(e,t,n){e.exports=n.p+"img/758dd3c.png"},763:function(e,t,n){e.exports=n.p+"img/ae1b6cb.png"},764:function(e,t,n){e.exports=n.p+"img/7411593.png"},765:function(e,t,n){"use strict";let r=null;let o=null;function l(e,t={}){let n=document.createElement(e);return Object.keys(t).forEach(e=>{n[e]=t[e]}),n}function c(e,t,n){return(window.getComputedStyle(e,n||null)||{display:"none"})[t]}function d(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};let t=e;for(;t!==document;){if("none"===c(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var h='.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}';let _=0,style=null;function f(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=function(){let{rendered:e,detached:t}=d(this);e!==this.__resize_rendered__&&(!t&&this.__resize_triggers__&&(x(this),this.addEventListener("scroll",m,!0)),this.__resize_rendered__=e,v(this))}.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){let{offsetWidth:t,offsetHeight:n}=e,r=new ResizeObserver(()=>{(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==t||e.offsetHeight!==n))&&v(e)}),{detached:o,rendered:l}=d(e);e.__resize_observer_triggered__=!1===o&&!1===l,e.__resize_observer__=r,r.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){v(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(_||(style=function(e){var style=document.createElement("style");return style.type="text/css",style.styleSheet?style.styleSheet.cssText=e:style.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(style),style}(h)),function(e){let t=c(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};let n=l("div",{className:"resize-triggers"}),r=l("div",{className:"resize-expand-trigger"}),o=l("div"),d=l("div",{className:"resize-contract-trigger"});r.appendChild(o),n.appendChild(r),n.appendChild(d),e.appendChild(n),e.__resize_triggers__={triggers:n,expand:r,expandChild:o,contract:d},x(e),e.addEventListener("scroll",m,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=d(e).rendered,window.MutationObserver){let t=new MutationObserver(e.__resize_mutation_handler__);t.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=t}e.__resize_listeners__.push(t),_++}function m(){var e,t;x(this),this.__resize_raf__&&(e=this.__resize_raf__,o||(o=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),o(e)),this.__resize_raf__=(t=(()=>{let e=function(e){let{width:t,height:n}=e.__resize_last__,{offsetWidth:r,offsetHeight:o}=e;return r!==t||o!==n?{width:r,height:o}:null}(this);e&&(this.__resize_last__=e,v(this))}),r||(r=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),r(t))}function v(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach(t=>{t.call(e)})}function x(e){let{expand:t,expandChild:n,contract:r}=e.__resize_triggers__,{scrollWidth:o,scrollHeight:l}=r,{offsetWidth:c,offsetHeight:d,scrollWidth:h,scrollHeight:_}=t;r.scrollLeft=o,r.scrollTop=l,n.style.width=c+1+"px",n.style.height=d+1+"px",t.scrollLeft=h,t.scrollTop=_}const y=["maxLines","maxHeight","ellipsis","isClamped"],w=["tag","text","autoresize"];t.a={name:"vue-clamper",props:{tag:{type:String,default:"div"},autoresize:{type:Boolean,default:!1},maxLines:Number,maxHeight:[String,Number],ellipsis:{type:String,default:"…"},expanded:Boolean},data(){return{offset:null,text:this.getText(),localExpanded:!!this.expanded}},computed:{clampedText(){return this.text.slice(0,this.offset)+this.ellipsis},isClamped(){return!!this.text&&this.offset!==this.text.length},realText(){return this.isClamped?this.clampedText:this.text},realMaxHeight(){if(this.localExpanded)return null;let{maxHeight:e}=this;return e?"number"==typeof e?`${e}px`:e:null}},watch:{expanded(e){this.localExpanded=e},localExpanded(e){e?this.clampAt(this.text.length):this.update(),this.expanded!==e&&this.$emit("update:expanded",e)}},mounted(){this.init(),w.forEach(e=>{this.$watch(e,this.init)}),y.forEach(e=>{this.$watch(e,this.update)})},updated(){this.text=this.getText(),this.applyChange()},beforeDestroy(){this.cleanUp()},methods:{init(){if(this.$slots.default){if(this.offset=this.text.length,this.cleanUp(),this.autoresize){let e=()=>{this.update()};f(this.$el,e),this.unregisterResizeCallback=(()=>{!function(e,t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);let n=e.__resize_listeners__;n&&(n.splice(n.indexOf(t),1),n.length||(e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",m),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null),!--_&&style&&style.parentNode.removeChild(style))}(this.$el,e)})}this.update()}},update(){this.localExpanded||(this.applyChange(),(this.isOverflow()||this.isClamped)&&this.search())},expand(){this.localExpanded=!0},collapse(){this.localExpanded=!1},toggle(){this.localExpanded=!this.localExpanded},isOverflow(){if(!this.maxLines&&!this.maxHeight)return!1;if(this.maxLines){if(this.$refs.content.getClientRects().length>this.maxLines)return!0}return!!(this.maxHeight&&this.$el.scrollHeight>this.$el.offsetHeight)},getText(){let[content]=(this.$slots.default||[]).filter(e=>!e.tag&&!e.isComment);return content?content.text:""},moveEdge(e){this.clampAt(this.offset+e)},clampAt(e){this.offset=e,this.applyChange()},applyChange(){this.$refs.text.textContent=this.realText},stepToFit(){this.fill(),this.clamp()},fill(){for(;!this.isOverflow()&&this.offset<this.text.length;)this.moveEdge(1)},clamp(){for(;this.isOverflow()&&this.offset>0;)this.moveEdge(-1)},search(...e){let[t=0,n=this.offset]=e;if(n-t<=3)return void this.stepToFit();let r=Math.floor((n+t)/2);this.clampAt(r),this.isOverflow()?this.search(t,r):this.search(r,n)},cleanUp(){this.unregisterResizeCallback&&this.unregisterResizeCallback()}},render(e){let t=[e("span",{ref:"text",attrs:{"aria-label":this.text.trim()}},this.realText)],{expand:n,collapse:r,toggle:o}=this,l={expand:n,collapse:r,toggle:o,clamped:this.isClamped,expanded:this.localExpanded},c=this.$scopedSlots.before?this.$scopedSlots.before(l):this.$slots.before;c&&t.unshift(...Array.isArray(c)?c:[c]);let d=this.$scopedSlots.after?this.$scopedSlots.after(l):this.$slots.after;d&&t.push(...Array.isArray(d)?d:[d]);let h=[e("span",{style:{boxShadow:"transparent 0 0"},ref:"content"},t)];return e(this.tag,{style:{maxHeight:this.realMaxHeight,overflow:"hidden"}},h)}}},766:function(e,t,n){"use strict";var r=n(744);n.n(r).a},767:function(e,t,n){(e.exports=n(51)(!1)).push([e.i,"div[data-v-34ea3380]{position:relative;background-size:cover;background-position:50% 50%}img[data-v-34ea3380]{width:0;height:0}",""])},768:function(e,t,n){"use strict";var r=n(745);n.n(r).a},769:function(e,t,n){(e.exports=n(51)(!1)).push([e.i,".shopItem-container[data-v-40cac3e4]{padding:0;margin:20px 0;cursor:pointer}.shopItem-container:hover h3[data-v-40cac3e4]{color:#44ad47}.shopItem-main[data-v-40cac3e4]{overflow:hidden}.shopItem-main img[data-v-40cac3e4]{width:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}h3[data-v-40cac3e4]{font-weight:700;font-size:16px;display:inline-block}.shopItem-aside[data-v-40cac3e4]{padding:10px}.shopItem-description[data-v-40cac3e4]{min-height:45px}.type[data-v-40cac3e4]{border-bottom:1px solid #d3d3d3;padding-bottom:5px;margin-bottom:5px}.recommend-container[data-v-40cac3e4]{min-height:21px}.recommend[data-v-40cac3e4]{justify-content:flex-end}.recommend img[data-v-40cac3e4]{width:14px}.description[data-v-40cac3e4],.recommend[data-v-40cac3e4],.type[data-v-40cac3e4]{font-size:14px}.description[data-v-40cac3e4]{min-height:28px}.running-status[data-v-40cac3e4]{color:#44ad47}.shopItem-container[data-v-40cac3e4]{display:flex;flex-direction:row}.shopItem-main[data-v-40cac3e4]{width:35%;display:flex}.shopItem-aside[data-v-40cac3e4]{width:65%;display:flex;background-color:#fff}",""])},770:function(e,t,n){"use strict";var r=n(746);n.n(r).a},771:function(e,t,n){(e.exports=n(51)(!1)).push([e.i,".sidebar.show-sidebar{-webkit-transform:translateX(0);transform:translateX(0)}.close-sidebar-button{z-index:3;position:absolute;left:100%;top:50px;background-color:#fff;border:1px solid #9fa0a0;border-left:none;color:red;display:none}.showCloseSidebarButton{display:block}.sidebar{width:400px;background-color:#f3f4f5;padding:0;position:fixed;top:60px;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);z-index:1;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.is-right{left:auto;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.content{height:calc(100vh - 60px);overflow:hidden}@media screen and (max-width:991px){.sidebar{height:unset;padding:10px}.close-sidebar-button{display:none!important}}",""])}}]);