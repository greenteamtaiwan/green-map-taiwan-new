(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{729:function(e,t,n){"use strict";var r=n(735),o=n(783),l=n(790),c=n.n(l),d=n(791),h=n.n(d),f=n(792),_=n.n(f),m=n(793),v=n.n(m),x=n(794),y=n.n(x),w={components:{ImageHandler:r.a,VClamp:o.a},computed:{types:function(){return this.$store.state.sourceData.types},altPlaceholders:function(){return[c.a,h.a,_.a,v.a,y.a]}},props:{shop:{type:Object,default:{}},containerStyle:{type:Object,default:function(){return{}}},isMarkerClicked:{type:Boolean,default:!1}},methods:{setShop:function(){(this.$store.commit("setShop",this.shop),!this.shop.google_map_link||this.shop.photo1||this.shop.recommendation_description||this.shop.description)?$nuxt.$router.push("/shop?objectID=".concat(this.shop.objectID)):window.open(this.shop.google_map_link,"_blank").focus()}}},z=(n(801),n(12)),component=Object(z.a)(w,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shopItem-container",class:{isMarkerClicked:e.isMarkerClicked},staticStyle:{},on:{click:e.setShop}},[r("div",{staticClass:"shopItem-main"},[r("ImageHandler",{attrs:{src:e.shop.photo0||e.shop.facebook_avatar,alt:e.shop.name,altPlaceholders:e.altPlaceholders}})],1),e._v(" "),r("div",{staticClass:"shopItem-aside"},[r("div",{staticStyle:{width:"100%"}},[r("div",{staticClass:"recommend-container"},[e.shop.is_recommended?r("p",{staticClass:"recommend"},[r("img",{attrs:{src:n(758),height:"20",width:"20"}}),e._v(" 精選店家")]):e._e()]),e._v(" "),r("h3",[r("v-clamp",{attrs:{autoresize:"","max-lines":1}},[e._v(e._s(e.shop.name))])],1),e._v(" "),r("p",{staticClass:"type"},[e._l(e.shop.type,function(t,n){return e.shop.type&&e.types[e.shop.type[0]]?r("span",[e._v("\n                    "+e._s(e.shop.open_status&&e.shop.open_status.type?" ‧ ":"")+"\n                    "+e._s(e.types[t].text+(n===e.shop.type.length-1?"":", "))+"\n                ")]):e._e()}),e._v(" "),r("span",{staticClass:"running-status"},[e._v(e._s(e.shop.open_status&&e.shop.open_status.type?e.shop.open_status.text:""))])],2),e._v(" "),r("p",{staticClass:"shopItem-description"},[r("v-clamp",{attrs:{autoresize:"","max-lines":2}},[e._v(e._s(e.shop.description))])],1)])])])},[],!1,null,"25b575bb",null);t.a=component.exports},730:function(e,t,n){"use strict";var r={props:{show:{type:Boolean,default:!0},isRight:{type:Boolean,default:!1},showCloseSidebarButton:{type:Boolean,default:!1},onCloseButtonClick:{type:Function,default:function(){}},style:{type:String,default:""},id:{type:String,default:""}}},o=(n(803),n(12)),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar",class:{"show-sidebar":e.show,"is-right":e.isRight},staticStyle:{},attrs:{id:e.id}},[n("button",{staticClass:"close-sidebar-button",class:{showCloseSidebarButton:e.showCloseSidebarButton},on:{click:e.onCloseButtonClick}},[e._v("◂")]),e._v(" "),n("div",{staticClass:"content"},[e._t("content")],2)])},[],!1,null,null,null);t.a=component.exports},735:function(e,t,n){"use strict";var r=n(35),o=(n(796),n(784)),l=n.n(o),c=n(785),d=n.n(c),h=n(786),f=n.n(h),_=n(787),m=n.n(_),v=n(788),x=n.n(v),y=n(789),w=n.n(y),z={data:function(){return{placeholders:[l.a,d.a,f.a,m.a,x.a,w.a],finalSrc:null,style:{}}},props:{src:{type:String,default:""},alt:{type:String,default:""},containerStyle:{type:Object,default:function(){return{width:"100%",height:"100%",overflow:"hidden"}}},onClick:{type:Function,default:function(){}},altPlaceholders:{type:Array,default:[]},index:{type:Number,default:null}},computed:{computedContainerStyle:function(){var e=Object(r.a)({},this.containerStyle);return this.finalSrc&&(e.backgroundImage="url('".concat(this.finalSrc,"')")),this.onClick&&(e.cursor="pointer"),e}},mounted:function(){this.checkImage()},watch:{src:function(e,t){e!==t&&this.checkImage()}},methods:{checkImage:function(){var img=new Image,e=this;img.onload=function(){e.finalSrc=e.src,this.width,this.height,e.style={width:"100%"}},img.onerror=function(){var t=e.altPlaceholders&&e.altPlaceholders.length>0?e.altPlaceholders:e.placeholders;e.finalSrc=t[Math.floor(Math.random()*t.length)],e.style={height:"100%"}},img.src=this.src},clickImg:function(){this.onClick(this.finalSrc,this.index)}}},C=(n(799),n(12)),component=Object(C.a)(z,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{style:this.computedContainerStyle,on:{click:this.clickImg}},[this.finalSrc?t("img",{style:this.style,attrs:{src:this.finalSrc,alt:this.alt}}):t("span",{staticStyle:{display:"inline-block",margin:"20px"}},[this._v("Loading...")])])},[],!1,null,"cd70fbfc",null);t.a=component.exports},736:function(e,t,n){"use strict";function r(e,t,n){var r,o,l,c=null,d=0;n||(n={});var h=function(){d=!1===n.leading?0:Date.now(),c=null,l=e.apply(r,o),c||(r=o=null)};return function(){var f=Date.now();d||!1!==n.leading||(d=f);var _=t-(f-d);return r=this,o=arguments,_<=0||_>t?(c&&(clearTimeout(c),c=null),d=f,l=e.apply(r,o),c||(r=o=null)):c||!1===n.trailing||(c=setTimeout(h,_)),l}}n.d(t,"a",function(){return r})},737:function(e,t,n){e.exports=n.p+"img/659a8bf.png"},738:function(e,t,n){e.exports=n.p+"img/ec0bdff.png"},739:function(e,t,n){e.exports=n.p+"img/89eedb7.png"},740:function(e,t,n){e.exports=n.p+"img/bcb1e7f.png"},741:function(e,t,n){e.exports=n.p+"img/e33d511.png"},758:function(e,t,n){e.exports=n.p+"img/238bc99.svg"},759:function(e,t,n){var content=n(800);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("f763dbd2",content,!0,{sourceMap:!1})},760:function(e,t,n){var content=n(802);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("6f6de618",content,!0,{sourceMap:!1})},761:function(e,t,n){var content=n(804);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("57a76406",content,!0,{sourceMap:!1})},783:function(e,t,n){"use strict";let r=null;let o=null;function l(e,t={}){let n=document.createElement(e);return Object.keys(t).forEach(e=>{n[e]=t[e]}),n}function c(e,t,n){return(window.getComputedStyle(e,n||null)||{display:"none"})[t]}function d(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};let t=e;for(;t!==document;){if("none"===c(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var h='.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}';let f=0,style=null;function _(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=function(){let{rendered:e,detached:t}=d(this);e!==this.__resize_rendered__&&(!t&&this.__resize_triggers__&&(x(this),this.addEventListener("scroll",m,!0)),this.__resize_rendered__=e,v(this))}.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){let{offsetWidth:t,offsetHeight:n}=e,r=new ResizeObserver(()=>{(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==t||e.offsetHeight!==n))&&v(e)}),{detached:o,rendered:l}=d(e);e.__resize_observer_triggered__=!1===o&&!1===l,e.__resize_observer__=r,r.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){v(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(f||(style=function(e){var style=document.createElement("style");return style.type="text/css",style.styleSheet?style.styleSheet.cssText=e:style.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(style),style}(h)),function(e){let t=c(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};let n=l("div",{className:"resize-triggers"}),r=l("div",{className:"resize-expand-trigger"}),o=l("div"),d=l("div",{className:"resize-contract-trigger"});r.appendChild(o),n.appendChild(r),n.appendChild(d),e.appendChild(n),e.__resize_triggers__={triggers:n,expand:r,expandChild:o,contract:d},x(e),e.addEventListener("scroll",m,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=d(e).rendered,window.MutationObserver){let t=new MutationObserver(e.__resize_mutation_handler__);t.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=t}e.__resize_listeners__.push(t),f++}function m(){var e,t;x(this),this.__resize_raf__&&(e=this.__resize_raf__,o||(o=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),o(e)),this.__resize_raf__=(t=(()=>{let e=function(e){let{width:t,height:n}=e.__resize_last__,{offsetWidth:r,offsetHeight:o}=e;return r!==t||o!==n?{width:r,height:o}:null}(this);e&&(this.__resize_last__=e,v(this))}),r||(r=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),r(t))}function v(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach(t=>{t.call(e)})}function x(e){let{expand:t,expandChild:n,contract:r}=e.__resize_triggers__,{scrollWidth:o,scrollHeight:l}=r,{offsetWidth:c,offsetHeight:d,scrollWidth:h,scrollHeight:f}=t;r.scrollLeft=o,r.scrollTop=l,n.style.width=c+1+"px",n.style.height=d+1+"px",t.scrollLeft=h,t.scrollTop=f}const y=["maxLines","maxHeight","ellipsis","isClamped"],w=["tag","text","autoresize"];t.a={name:"vue-clamper",props:{tag:{type:String,default:"div"},autoresize:{type:Boolean,default:!1},maxLines:Number,maxHeight:[String,Number],ellipsis:{type:String,default:"…"},expanded:Boolean},data(){return{offset:null,text:this.getText(),localExpanded:!!this.expanded}},computed:{clampedText(){return this.text.slice(0,this.offset)+this.ellipsis},isClamped(){return!!this.text&&this.offset!==this.text.length},realText(){return this.isClamped?this.clampedText:this.text},realMaxHeight(){if(this.localExpanded)return null;let{maxHeight:e}=this;return e?"number"==typeof e?`${e}px`:e:null}},watch:{expanded(e){this.localExpanded=e},localExpanded(e){e?this.clampAt(this.text.length):this.update(),this.expanded!==e&&this.$emit("update:expanded",e)}},mounted(){this.init(),w.forEach(e=>{this.$watch(e,this.init)}),y.forEach(e=>{this.$watch(e,this.update)})},updated(){this.text=this.getText(),this.applyChange()},beforeDestroy(){this.cleanUp()},methods:{init(){if(this.$slots.default){if(this.offset=this.text.length,this.cleanUp(),this.autoresize){let e=()=>{this.update()};_(this.$el,e),this.unregisterResizeCallback=(()=>{!function(e,t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);let n=e.__resize_listeners__;n&&(n.splice(n.indexOf(t),1),n.length||(e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",m),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null),!--f&&style&&style.parentNode.removeChild(style))}(this.$el,e)})}this.update()}},update(){this.localExpanded||(this.applyChange(),(this.isOverflow()||this.isClamped)&&this.search())},expand(){this.localExpanded=!0},collapse(){this.localExpanded=!1},toggle(){this.localExpanded=!this.localExpanded},isOverflow(){if(!this.maxLines&&!this.maxHeight)return!1;if(this.maxLines){if(this.$refs.content.getClientRects().length>this.maxLines)return!0}return!!(this.maxHeight&&this.$el.scrollHeight>this.$el.offsetHeight)},getText(){let[content]=(this.$slots.default||[]).filter(e=>!e.tag&&!e.isComment);return content?content.text:""},moveEdge(e){this.clampAt(this.offset+e)},clampAt(e){this.offset=e,this.applyChange()},applyChange(){this.$refs.text.textContent=this.realText},stepToFit(){this.fill(),this.clamp()},fill(){for(;!this.isOverflow()&&this.offset<this.text.length;)this.moveEdge(1)},clamp(){for(;this.isOverflow()&&this.offset>0;)this.moveEdge(-1)},search(...e){let[t=0,n=this.offset]=e;if(n-t<=3)return void this.stepToFit();let r=Math.floor((n+t)/2);this.clampAt(r),this.isOverflow()?this.search(t,r):this.search(r,n)},cleanUp(){this.unregisterResizeCallback&&this.unregisterResizeCallback()}},render(e){let t=[e("span",{ref:"text",attrs:{"aria-label":this.text.trim()}},this.realText)],{expand:n,collapse:r,toggle:o}=this,l={expand:n,collapse:r,toggle:o,clamped:this.isClamped,expanded:this.localExpanded},c=this.$scopedSlots.before?this.$scopedSlots.before(l):this.$slots.before;c&&t.unshift(...Array.isArray(c)?c:[c]);let d=this.$scopedSlots.after?this.$scopedSlots.after(l):this.$slots.after;d&&t.push(...Array.isArray(d)?d:[d]);let h=[e("span",{style:{boxShadow:"transparent 0 0"},ref:"content"},t)];return e(this.tag,{style:{maxHeight:this.realMaxHeight,overflow:"hidden"}},h)}}},784:function(e,t,n){e.exports=n.p+"img/0440883.png"},785:function(e,t,n){e.exports=n.p+"img/2180ab9.png"},786:function(e,t,n){e.exports=n.p+"img/c5b253d.png"},787:function(e,t,n){e.exports=n.p+"img/a0cc12e.png"},788:function(e,t,n){e.exports=n.p+"img/9320285.png"},789:function(e,t,n){e.exports=n.p+"img/7411593.png"},790:function(e,t,n){e.exports=n.p+"img/f2923f8.png"},791:function(e,t,n){e.exports=n.p+"img/c017761.png"},792:function(e,t,n){e.exports=n.p+"img/0ba6e3c.png"},793:function(e,t,n){e.exports=n.p+"img/f3ab57d.png"},794:function(e,t,n){e.exports=n.p+"img/ada1af1.png"},796:function(e,t,n){"use strict";var r=n(13),o=n(53),l=n(61),c=n(335),d=n(134),h=n(29),f=n(135).f,_=n(194).f,m=n(24).f,v=n(797).trim,x=r.Number,y=x,w=x.prototype,z="Number"==l(n(193)(w)),C="trim"in String.prototype,k=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,l=(t=C?t.trim():v(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+t};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof x&&(z?h(function(){w.valueOf.call(n)}):"Number"!=l(n))?c(new y(k(t)),n,x):k(t)};for(var I,S=n(25)?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;S.length>E;E++)o(y,I=S[E])&&!o(x,I)&&m(x,I,_(y,I));x.prototype=w,w.constructor=x,n(36)(r,"Number",x)}},797:function(e,t,n){var r=n(21),o=n(60),l=n(29),c=n(798),d="["+c+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),_=function(e,t,n){var o={},d=l(function(){return!!c[e]()||"​"!="​"[e]()}),h=o[e]=d?t(m):c[e];n&&(o[n]=h),r(r.P+r.F*d,"String",o)},m=_.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(h,"")),2&t&&(e=e.replace(f,"")),e};e.exports=_},798:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},799:function(e,t,n){"use strict";var r=n(759);n.n(r).a},800:function(e,t,n){(e.exports=n(51)(!1)).push([e.i,"div[data-v-cd70fbfc]{position:relative;background-size:cover;background-position:50% 50%}img[data-v-cd70fbfc]{width:0;height:0}",""])},801:function(e,t,n){"use strict";var r=n(760);n.n(r).a},802:function(e,t,n){(e.exports=n(51)(!1)).push([e.i,".shopItem-container[data-v-25b575bb]{padding:0;margin:20px 0;cursor:pointer}.shopItem-container:hover h3[data-v-25b575bb]{color:#44ad47}.shopItem-main[data-v-25b575bb]{overflow:hidden}.shopItem-main img[data-v-25b575bb]{width:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.shopItem-container h3[data-v-25b575bb]{font-weight:700;font-size:16px;display:inline-block}.shopItem-aside[data-v-25b575bb]{padding:10px}.shopItem-description[data-v-25b575bb]{min-height:45px}.shopItem-container .type[data-v-25b575bb]{border-bottom:1px solid #d3d3d3;padding-bottom:5px;margin-bottom:5px}.shopItem-container .recommend-container[data-v-25b575bb]{min-height:21px}.shopItem-container .recommend[data-v-25b575bb]{justify-content:flex-end}.shopItem-container .description[data-v-25b575bb],.shopItem-container .recommend[data-v-25b575bb],.shopItem-container .type[data-v-25b575bb]{font-size:14px}.description[data-v-25b575bb]{min-height:28px}.running-status[data-v-25b575bb]{color:#44ad47}.shopItem-container[data-v-25b575bb]{display:flex;flex-direction:row}.shopItem-main[data-v-25b575bb]{width:35%;display:flex}.shopItem-aside[data-v-25b575bb]{width:65%;display:flex;background-color:#fff}.isMarkerClicked[data-v-25b575bb]{border-top:5px solid #44ad47}",""])},803:function(e,t,n){"use strict";var r=n(761);n.n(r).a},804:function(e,t,n){(e.exports=n(51)(!1)).push([e.i,".sidebar.show-sidebar{-webkit-transform:translateX(0);transform:translateX(0)}.close-sidebar-button{z-index:3;position:absolute;left:100%;top:50px;background-color:#fff;border:1px solid #9fa0a0;border-left:none;color:red;display:none}.showCloseSidebarButton{display:block}.sidebar{width:400px;background-color:#f3f4f5;padding:0;position:fixed;top:60px;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);z-index:1;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.is-right{left:auto;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.content{height:calc(100vh - 60px);overflow-x:hidden;overflow-y:auto}@media screen and (max-width:1250px){.sidebar{height:unset;padding:10px}.close-sidebar-button{display:none!important}}",""])}}]);