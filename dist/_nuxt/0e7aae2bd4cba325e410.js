(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{584:function(t,e,n){"use strict";function o(t,e,n){var o,r,c,d=null,l=0;n||(n={});var h=function(){l=!1===n.leading?0:Date.now(),d=null,c=t.apply(o,r),d||(o=r=null)};return function(){var m=Date.now();l||!1!==n.leading||(l=m);var f=e-(m-l);return o=this,r=arguments,f<=0||f>e?(d&&(clearTimeout(d),d=null),l=m,c=t.apply(o,r),d||(o=r=null)):d||!1===n.trailing||(d=setTimeout(h,f)),c}}n.d(e,"a",function(){return o})},594:function(t,e,n){"use strict";var o=n(26),r=(n(625),n(693)),c=n.n(r),d=n(694),l=n.n(d),h=n(695),m=n.n(h),f=n(696),y=n.n(f),x=n(697),v=n.n(x),w=n(698),M=n.n(w),S={data:function(){return{placeholders:[c.a,l.a,m.a,y.a,v.a,M.a],finalSrc:null,style:{}}},props:{src:{type:String,default:""},alt:{type:String,default:""},containerStyle:{type:Object,default:function(){return{width:"100%",height:"100%",overflow:"hidden"}}},onClick:{type:Function,default:null},altPlaceholders:{type:Array,default:[]},index:{type:Number,default:null}},computed:{computedContainerStyle:function(){var t=Object(o.a)({},this.containerStyle);return this.finalSrc&&(t.backgroundImage="url('".concat(this.finalSrc,"')")),this.onClick&&(t.cursor="pointer"),t}},mounted:function(){this.checkImage()},watch:{src:function(t,e){t!==e&&this.checkImage()}},methods:{checkImage:function(){var img=new Image,t=this;img.onload=function(){t.finalSrc=t.src,this.width,this.height,t.style={width:"100%"}},img.onerror=function(){var e=t.altPlaceholders&&t.altPlaceholders.length>0?t.altPlaceholders:t.placeholders;t.finalSrc=e[Math.floor(Math.random()*e.length)],t.style={height:"100%"}},img.src=this.src},clickImg:function(){this.onClick&&this.onClick(this.finalSrc,this.index)}}},I=(n(718),n(10)),component=Object(I.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.computedContainerStyle,on:{click:this.clickImg}},[this.finalSrc?e("img",{style:this.style,attrs:{src:this.finalSrc,alt:this.alt}}):e("span",{staticStyle:{display:"inline-block",margin:"20px"}},[this._v("Loading...")])])},[],!1,null,"0dc0e8fe",null);e.a=component.exports},597:function(t,e,n){"use strict";n(49),n(650),n(625);var o=n(608),r=n(598),c={components:{ShopItem:o.a,Sidebar:r.a},props:{typeOptions:{type:Array,default:[]},show:{type:Boolean,default:!1},searchHistory:{type:Array,default:[]},search:{type:Function,default:function(){}},setType:{type:Function,default:function(){}},query:{type:String,default:""},isRight:{type:Boolean,default:!0},sidebarStyle:{type:Object,default:{}}},computed:{searchDisabled:function(){return""===this.query}},methods:{checkIfIsSelected:function(t){return t.value?this.$store.state.type[t.value]:0===this.$store.state.type.filter(function(data){return data}).length}}},d=(n(724),n(10)),l=Object(d.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Sidebar",{style:t.sidebarStyle,attrs:{show:t.show,isRight:t.isRight,id:"search-sidebar"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("mq-layout",{attrs:{mq:"lg"}},[o("ul",{staticClass:"history-container"},t._l(t.searchHistory,function(e,r){return o("li",{attrs:{tabindex:"0"},on:{click:function(n){return t.search(e)}}},[o("img",{attrs:{src:n(648),height:"19",width:"19"}}),t._v("\n                    "+t._s(e)+"\n                ")])}),0)]),t._v(" "),o("ul",{staticClass:"types"},[o("mq-layout",{attrs:{mq:"lg"}},[o("hr")]),t._v(" "),t._l(t.typeOptions,function(e,n){return o("li",{class:{"selected-type":t.checkIfIsSelected(e)},attrs:{tabindex:"0"},on:{click:function(n){return t.setType(e.value)}}},[o("img",{attrs:{src:e.typeIcon}}),t._v("\n                "+t._s(e.text)+"\n            ")])}),t._v(" "),o("hr")],2)],1)])},[],!1,null,"71c37ab4",null).exports,h={components:{Sidebar:r.a},props:{typeOptions:{type:Array,default:[]},show:{type:Boolean,default:!1},searchHistory:{type:Array,default:[]},search:{type:Function,default:function(){}},setType:{type:Function,default:function(){}},query:{type:String,default:""},isRight:{type:Boolean,default:!0},sidebarStyle:{type:Object,default:{}}},methods:{}},m=(n(726),Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Sidebar",{style:t.sidebarStyle,attrs:{show:t.show,isRight:t.isRight,id:"about-sidebar"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("ul",{staticClass:"types"},[n("li",[n("nuxt-link",{attrs:{to:"/recommendations"}},[t._v("城市精選綠點")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"site-link",attrs:{to:"/about#typeInfo",exact:"",id:"typeInfo-link"}},[t._v("什麼是綠餐廳")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"site-link",attrs:{to:"/about#aboutUs",exact:"",id:"aboutUs-link"}},[t._v("關於我們")])],1)])])])},[],!1,null,"5fc2a8c2",null).exports),f=(n(101),{data:function(){return{showSearchSidebar:!1,showAboutSidebar:!1,searchHistory:[]}},props:{setTypeProps:{type:Function,default:null},typeProps:{type:Number,default:null}},mounted:function(){window.addEventListener("click",this.closeSearchSidebar),window.addEventListener("click",this.closeAboutSidebar),this.searchHistory=localStorage.getItem("searchHistory")?JSON.parse(localStorage.getItem("searchHistory")):[]},beforeDestroy:function(){window.removeEventListener("scroll",this.closeSearchSidebar),window.removeEventListener("scroll",this.closeAboutSidebar)},components:{SearchSidebar:l,AboutSidebar:m},computed:{typeOptions:function(){return this.$store.state.sourceData.types.filter(function(option){return option.checked})},cities:function(){return this.$store.state.sourceData.cities},query:function(){return this.$store.state.query},city:function(){return this.$store.state.city},typeText:function(){var t;return t=this.typeProps?this.typeProps:(t=this.$store.state.type.findIndex(function(data){return data}))>=0?t:0,this.$store.state.sourceData.types[t].text},typeIcon:function(){var t;return t=this.typeProps?this.typeProps:(t=this.$store.state.type.findIndex(function(data){return data}))>=0?t:0,this.$store.state.sourceData.types[t].typeIcon}},methods:{search:function(t){var e,n=t instanceof Event?t.target.elements.query.value:t;n&&((e=this.searchHistory.indexOf(n)>=0)?(this.searchHistory.unshift(this.searchHistory.splice(e,1)[0]),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory))):this.searchHistory[0]!==n&&(this.searchHistory.unshift(n),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory)))),this.$store.commit("setType",{type:0,isSingleSelection:"md"===this.$mq}),this.$store.commit("setQuery",n),this.$store.dispatch("getShops"),"index"!==$nuxt.$route.name&&"map"!==$nuxt.$route.name&&"index-map"!==$nuxt.$route.name&&$nuxt.$router.push("/"),this.showSearchSidebar=!1},setCity:function(t){switch(this.$store.dispatch("setCityAndCenter",t),$nuxt.$route.name){case"recommendations":this.$store.dispatch("getRecommendationShops",t);break;case"shop":$nuxt.$router.push("/");break;case"index":case"index-map":case"map":this.$store.dispatch("getShops")}},setType:function(t){this.setTypeProps?this.setTypeProps(t):(this.$store.commit("setType",{type:t,isSingleSelection:"md"===this.$mq}),this.$store.dispatch("getShops"),"index"!==$nuxt.$route.name&&"map"!==$nuxt.$route.name&&"index-map"!==$nuxt.$route.name&&$nuxt.$router.push("/")),this.showSearchSidebar=!1},setShowSearchSidebar:function(t){this.showSearchSidebar=t},setShowAboutSidebar:function(t){this.showAboutSidebar=t},closeSearchSidebar:function(t){"lg"===this.$mq?document.querySelector("#search-sidebar").contains(t.target)||document.querySelector("#search-container").contains(t.target)||(this.showSearchSidebar=!1):document.querySelector("#search-sidebar").contains(t.target)||document.querySelector("#search-container").contains(t.target)||document.querySelector("#mobile-button").contains(t.target)||document.querySelector("#mobile-type-button").contains(t.target)||(this.showSearchSidebar=!1)},closeAboutSidebar:function(t){"md"!==this.$mq||document.querySelector("#about-sidebar").contains(t.target)||document.querySelector("#search-container").contains(t.target)||document.querySelector("#mobile-button").contains(t.target)||document.querySelector("#mobile-type-button").contains(t.target)||(this.showAboutSidebar=!1)},resetSearchParams:function(){this.$store.commit("setType",{type:0,isSingleSelection:"md"===this.$mq}),this.$store.commit("setQuery",""),"index"!==$nuxt.$route.name?$nuxt.$router.push("/"):this.$store.dispatch("getShops")},backToIndex:function(){switch($nuxt.$route.name){case"map":case"index-map":$nuxt.$router.push("/");break;case"shop-map":this.selectedShop.objectID?$nuxt.$router.push("/shop?objectID=".concat(this.selectedShop.objectID)):$nuxt.$router.push("/")}},isMapPage:function(){return"index-map"===$nuxt.$route.name||"shop-map"===$nuxt.$route.name},isAboutPage:function(){return"about"===$nuxt.$route.name}}}),y=(n(728),Object(d.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mq-layout",{attrs:{mq:"lg"}},[o("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",class:{"show-backdrop":t.showSearchSidebar},attrs:{id:"gt-nav"}},[o("a",{attrs:{href:"javascript:0"},on:{click:t.resetSearchParams}},[o("div",{staticClass:"map-logo"},[o("img",{attrs:{src:n(716),width:"40px"}})])]),t._v(" "),o("b-form",{staticClass:"sidebar-inline-form",attrs:{inline:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[o("div",{staticClass:"navbar-middle"},[o("b-form-select",{staticClass:"cities-select",attrs:{value:t.city,options:t.cities},on:{change:t.setCity}})],1)]),t._v(" "),o("b-form",{attrs:{inline:"",id:"search-container"},on:{submit:[function(t){t.stopPropagation(),t.preventDefault()},t.search]}},[o("b-input-group",{staticClass:"search"},[o("b-input-group-prepend",[o("b-button",{staticClass:"search-button",attrs:{type:"submit"}},[o("img",{attrs:{src:n(648),height:"19",width:"19"}})])],1),t._v(" "),o("b-form-input",{attrs:{placeholder:" 搜尋「店家」 ",name:"query","aria-label":"Search",autocomplete:"off",value:t.query},nativeOn:{focus:function(e){return t.setShowSearchSidebar(!0)}}})],1),t._v(" "),"lg"===this.$mq?o("SearchSidebar",{directives:[{name:"show",rawName:"v-show",value:t.showSearchSidebar,expression:"showSearchSidebar"}],attrs:{show:!0,typeOptions:t.typeOptions,searchHistory:t.searchHistory,query:t.query,search:t.search,setType:t.setType,isRight:!1,sidebarStyle:{left:"auto",transform:"translateX(0)"}}}):t._e()],1),t._v(" "),o("div",{staticClass:"navbar-links"},[o("nuxt-link",{staticClass:"site-link",attrs:{to:"/recommendations"}},[t._v("城市精選綠點")]),t._v(" "),o("nuxt-link",{staticClass:"site-link",attrs:{to:"/about#typeInfo",exact:"",id:"typeInfo-link"}},[t._v("什麼是綠餐廳")]),t._v(" "),o("nuxt-link",{staticClass:"site-link",attrs:{to:"/about#aboutUs",exact:"",id:"aboutUs-link"}},[t._v("關於我們")])],1)],1)]),t._v(" "),o("mq-layout",{attrs:{mq:"md"}},[o("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",class:{"show-backdrop":t.showSearchSidebar||t.showAboutSidebar},attrs:{id:"gt-nav"}},[o("div",{staticClass:"mobile-navbar-content"},[o("a",{attrs:{href:"javascript:0"},on:{click:t.resetSearchParams}},[o("div",{staticClass:"map-logo"},[o("img",{attrs:{src:n(717),width:"40px"}})])]),t._v(" "),o("b-form",{attrs:{inline:"",id:"search-container"},on:{submit:[function(t){t.stopPropagation(),t.preventDefault()},t.search]}},[o("b-input-group",{staticClass:"search"},[o("b-input-group-prepend",[o("b-button",{staticClass:"search-button",attrs:{type:"submit"}},[o("img",{attrs:{src:n(648),height:"19",width:"19"}})])],1),t._v(" "),o("b-form-input",{attrs:{placeholder:" 搜尋「店家」 ",name:"query","aria-label":"Search",autocomplete:"off",value:t.query}})],1)],1),t._v(" "),o("button",{attrs:{id:"mobile-button"},on:{click:function(e){return t.setShowAboutSidebar(!t.showAboutSidebar)}}},[t._v(t._s(t.showAboutSidebar?"✖":"☰"))])],1),t._v(" "),o("b-form",{staticClass:"sidebar-inline-form",attrs:{inline:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[o("div",{staticClass:"navbar-middle"},[t.isAboutPage()?t._e():o("b-form-select",{staticClass:"cities-select",attrs:{value:t.city,options:t.cities},on:{change:t.setCity}}),t._v(" "),o("button",{attrs:{id:"mobile-type-button"},on:{click:function(e){return t.setShowSearchSidebar(!0)}}},[o("img",{attrs:{src:t.typeIcon,width:"15px"}}),t._v("\n              "+t._s(t.typeText)+"\n              "),o("img",{attrs:{src:n(692),width:"15px"}})]),t._v(" "),t.isMapPage()?o("button",{class:["back-to-index-button"],on:{click:t.backToIndex}},[t._v("✖")]):t._e(),t._v(" "),t.isMapPage()||t.isAboutPage()?t._e():o("nuxt-link",{attrs:{to:"/index-map"}},[o("button",[o("img",{attrs:{src:n(649),width:"40px"}})])])],1)])],1)]),t._v(" "),"md"===this.$mq?o("SearchSidebar",{attrs:{show:t.showSearchSidebar,typeOptions:t.typeOptions,searchHistory:t.searchHistory,query:t.query,search:t.search,setType:t.setType}}):t._e(),t._v(" "),"md"===this.$mq?o("AboutSidebar",{attrs:{show:t.showAboutSidebar}}):t._e()],1)},[],!1,null,null,null));e.a=y.exports},598:function(t,e,n){"use strict";var o={props:{show:{type:Boolean,default:!0},isRight:{type:Boolean,default:!1},showCloseSidebarButton:{type:Boolean,default:!1},onCloseButtonClick:{type:Function,default:function(){}},style:{type:String,default:""},id:{type:String,default:""}}},r=(n(722),n(10)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar",class:{"show-sidebar":t.show,"is-right":t.isRight},staticStyle:{},attrs:{id:t.id}},[n("button",{staticClass:"close-sidebar-button",class:{showCloseSidebarButton:t.showCloseSidebarButton},on:{click:t.onCloseButtonClick}},[t._v(t._s(t.show?"◂":"▸"))]),t._v(" "),n("div",{staticClass:"content"},[t._t("content")],2)])},[],!1,null,null,null);e.a=component.exports},605:function(t,e,n){t.exports=n.p+"img/6f5f1d2.svg"},608:function(t,e,n){"use strict";var o=n(594),r=n(604),c=n(626),d=n.n(c),l=n(627),h=n.n(l),m=n(628),f=n.n(m),y=n(629),x=n.n(y),v=n(630),w=n.n(v),M={components:{ImageHandler:o.a,VClamp:r.a},computed:{types:function(){return this.$store.state.sourceData.types},altPlaceholders:function(){return[d.a,h.a,f.a,x.a,w.a]}},props:{shop:{type:Object,default:{}},containerStyle:{type:Object,default:function(){return{}}},isMarkerClicked:{type:Boolean,default:!1}},methods:{setShop:function(){this.$store.commit("setShop",this.shop);var t=window.open(this.shop.google_map_link,"_blank");t&&t.focus&&t.focus()}}},S=(n(720),n(10)),component=Object(S.a)(M,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shopItem-container",class:{isMarkerClicked:t.isMarkerClicked},staticStyle:{},on:{click:t.setShop}},[o("div",{staticClass:"shopItem-main"},[o("ImageHandler",{attrs:{src:t.shop.photo0||t.shop.facebook_avatar,alt:t.shop.name,altPlaceholders:t.altPlaceholders}})],1),t._v(" "),o("div",{staticClass:"shopItem-aside"},[o("div",{staticStyle:{width:"100%"}},[o("div",{staticClass:"recommend-container"},[t.shop.is_recommended?o("p",{staticClass:"recommend"},[o("img",{attrs:{src:n(605),height:"20",width:"20"}}),t._v(" 精選店家")]):t._e()]),t._v(" "),o("h3",{on:{click:t.setShop}},[o("a",{attrs:{href:"javascript:void"},on:{click:t.setShop}},[o("v-clamp",{attrs:{autoresize:"","max-lines":1}},[t._v(t._s(t.shop.name))])],1)]),t._v(" "),o("p",{staticClass:"type"},[t._l(t.shop.type,function(e,n){return t.shop.type&&t.types[t.shop.type[0]]?o("span",[t._v("\n                    "+t._s(t.shop.open_status&&t.shop.open_status.type?" ‧ ":"")+"\n                    "+t._s(t.types[e].text+(n===t.shop.type.length-1?"":", "))+"\n                ")]):t._e()}),t._v(" "),o("span",{staticClass:"running-status"},[t._v(t._s(t.shop.open_status&&t.shop.open_status.type?t.shop.open_status.text:""))])],2),t._v(" "),o("p",{staticClass:"shopItem-description"},[o("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v(t._s(t.shop.description))])],1)])])])},[],!1,null,"2b29fe48",null);e.a=component.exports},626:function(t,e,n){t.exports=n.p+"img/f2923f8.png"},627:function(t,e,n){t.exports=n.p+"img/c017761.png"},628:function(t,e,n){t.exports=n.p+"img/0ba6e3c.png"},629:function(t,e,n){t.exports=n.p+"img/f3ab57d.png"},630:function(t,e,n){t.exports=n.p+"img/ada1af1.png"},648:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDEwLjIzIDQxMC4yMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDEwLjIzIDQxMC4yMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnPgoJPHBhdGggZD0iTTQwMS42MjUsMzY0LjA5MmwtMTA3LjEtMTA3LjFjMTkuMTI1LTI2Ljc3NSwzMC42LTU5LjI4OCwzMC42LTkzLjcxM2MwLTg5Ljg4OC03Mi42NzUtMTYyLjU2Mi0xNjIuNTYyLTE2Mi41NjIgICBTMCw3My4zOTIsMCwxNjMuMjc5czcyLjY3NSwxNjIuNTYyLDE2Mi41NjIsMTYyLjU2MmMzNC40MjUsMCw2Ni45MzgtMTEuNDc1LDkzLjcxMy0zMC42bDEwNy4xLDEwNy4xICAgYzkuNTYyLDkuNTYyLDI2Ljc3NSw5LjU2MiwzOC4yNSwwbDAsMEM0MTMuMSwzOTAuODY3LDQxMy4xLDM3NS41NjYsNDAxLjYyNSwzNjQuMDkyeiBNMTYyLjU2MiwyODcuNTkyICAgYy02OC44NSwwLTEyNC4zMTItNTUuNDYzLTEyNC4zMTItMTI0LjMxMmMwLTY4Ljg1LDU1LjQ2Mi0xMjQuMzEyLDEyNC4zMTItMTI0LjMxMmM2OC44NSwwLDEyNC4zMTIsNTUuNDYyLDEyNC4zMTIsMTI0LjMxMiAgIEMyODYuODc1LDIzMi4xMjksMjMxLjQxMiwyODcuNTkyLDE2Mi41NjIsMjg3LjU5MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPjwvZz4gPC9zdmc+Cg=="},649:function(t,e,n){t.exports=n.p+"img/3afca14.svg"},651:function(t,e,n){var content=n(719);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("59062af7",content,!0,{sourceMap:!1})},652:function(t,e,n){var content=n(721);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("b513f4c4",content,!0,{sourceMap:!1})},653:function(t,e,n){var content=n(723);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("57a76406",content,!0,{sourceMap:!1})},654:function(t,e,n){var content=n(725);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("09d01576",content,!0,{sourceMap:!1})},655:function(t,e,n){var content=n(727);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("2e52746c",content,!0,{sourceMap:!1})},656:function(t,e,n){var content=n(729);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("1fcd4353",content,!0,{sourceMap:!1})},692:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDUxLjg0NyA0NTEuODQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ3IDQ1MS44NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjUuOTIzLDM1NC43MDZjLTguMDk4LDAtMTYuMTk1LTMuMDkyLTIyLjM2OS05LjI2M0w5LjI3LDE1MS4xNTdjLTEyLjM1OS0xMi4zNTktMTIuMzU5LTMyLjM5NywwLTQ0Ljc1MSAgIGMxMi4zNTQtMTIuMzU0LDMyLjM4OC0xMi4zNTQsNDQuNzQ4LDBsMTcxLjkwNSwxNzEuOTE1bDE3MS45MDYtMTcxLjkwOWMxMi4zNTktMTIuMzU0LDMyLjM5MS0xMi4zNTQsNDQuNzQ0LDAgICBjMTIuMzY1LDEyLjM1NCwxMi4zNjUsMzIuMzkyLDAsNDQuNzUxTDI0OC4yOTIsMzQ1LjQ0OUMyNDIuMTE1LDM1MS42MjEsMjM0LjAxOCwzNTQuNzA2LDIyNS45MjMsMzU0LjcwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPjwvZz4gPC9zdmc+Cg=="},693:function(t,e,n){t.exports=n.p+"img/0440883.png"},694:function(t,e,n){t.exports=n.p+"img/2180ab9.png"},695:function(t,e,n){t.exports=n.p+"img/c5b253d.png"},696:function(t,e,n){t.exports=n.p+"img/a0cc12e.png"},697:function(t,e,n){t.exports=n.p+"img/9320285.png"},698:function(t,e,n){t.exports=n.p+"img/7411593.png"},716:function(t,e,n){t.exports=n.p+"img/96402f5.svg"},717:function(t,e,n){t.exports=n.p+"img/4bd3833.svg"},718:function(t,e,n){"use strict";var o=n(651);n.n(o).a},719:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,"div[data-v-0dc0e8fe]{position:relative;background-size:cover;background-position:50% 50%}img[data-v-0dc0e8fe]{width:0;height:0}",""])},720:function(t,e,n){"use strict";var o=n(652);n.n(o).a},721:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,".shopItem-container[data-v-2b29fe48]{padding:0;margin:20px 0;cursor:pointer}.shopItem-container:hover a[data-v-2b29fe48]{color:#44ad47}.shopItem-main[data-v-2b29fe48]{overflow:hidden}.shopItem-main img[data-v-2b29fe48]{width:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.shopItem-container h3[data-v-2b29fe48]{font-weight:700;font-size:16px;display:inline-block}.shopItem-aside[data-v-2b29fe48]{padding:10px}.shopItem-description[data-v-2b29fe48]{min-height:45px}.shopItem-container .type[data-v-2b29fe48]{border-bottom:1px solid #d3d3d3;padding-bottom:5px;margin-bottom:5px}.shopItem-container .recommend-container[data-v-2b29fe48]{min-height:21px}.shopItem-container .recommend[data-v-2b29fe48]{justify-content:flex-end}.shopItem-container .description[data-v-2b29fe48],.shopItem-container .recommend[data-v-2b29fe48],.shopItem-container .type[data-v-2b29fe48]{font-size:14px}.description[data-v-2b29fe48]{min-height:28px}.running-status[data-v-2b29fe48]{color:#44ad47}.shopItem-container[data-v-2b29fe48]{display:flex;flex-direction:row}.shopItem-main[data-v-2b29fe48]{width:35%;display:flex}.shopItem-aside[data-v-2b29fe48]{width:65%;display:flex;background-color:#fff}.isMarkerClicked[data-v-2b29fe48]{border-top:5px solid #44ad47}",""])},722:function(t,e,n){"use strict";var o=n(653);n.n(o).a},723:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,".sidebar.show-sidebar{-webkit-transform:translateX(0);transform:translateX(0)}.close-sidebar-button{z-index:3;position:absolute;left:100%;top:50px;background-color:#fff;border:1px solid #9fa0a0;border-left:none;color:red;display:none}.showCloseSidebarButton{display:block}.sidebar{width:400px;background-color:#f3f4f5;padding:0;position:fixed;top:60px;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);z-index:1;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.is-right{left:auto;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.content{height:calc(100vh - 60px);overflow-x:hidden;overflow-y:auto}@media screen and (max-width:1250px){.sidebar{height:unset;padding:10px}.close-sidebar-button{display:none!important}}",""])},724:function(t,e,n){"use strict";var o=n(654);n.n(o).a},725:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,".history-container[data-v-71c37ab4]{max-height:120px;overflow-y:auto}.history-container li[data-v-71c37ab4]{margin:10px 0}img[data-v-71c37ab4]{width:50px}li[data-v-71c37ab4]{cursor:pointer}.selected-type[data-v-71c37ab4],.types li[data-v-71c37ab4]:hover{background-color:#d8d8d8}#search-sidebar[data-v-71c37ab4]{width:300px;padding:1rem 0;z-index:2}#search-sidebar ul[data-v-71c37ab4]{margin:0 15px}.types li[data-v-71c37ab4]{height:65px;line-height:60px;margin:10px}@media screen and (max-width:1250px){.sidebar[data-v-71c37ab4]{border-top:1px solid grey}#search-sidebar[data-v-71c37ab4]{padding:0;z-index:2}.search-button[data-v-71c37ab4]{padding:0}.history-container[data-v-71c37ab4]{max-height:120px}}",""])},726:function(t,e,n){"use strict";var o=n(655);n.n(o).a},727:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,"li[data-v-5fc2a8c2]{cursor:pointer;border-bottom:1px solid #d3d3d3}li a[data-v-5fc2a8c2]{display:inline-block;width:100%;padding:20px 30px}.selected-type[data-v-5fc2a8c2],.types li[data-v-5fc2a8c2]:hover{background-color:#d8d8d8}#about-sidebar[data-v-5fc2a8c2]{width:300px;padding:1rem 0;z-index:2}#about-sidebar ul[data-v-5fc2a8c2]{margin:0 15px}@media screen and (max-width:1250px){.sidebar[data-v-5fc2a8c2]{border-top:1px solid grey}#about-sidebar[data-v-5fc2a8c2]{padding:0;z-index:2}.search-button[data-v-5fc2a8c2]{padding:0}}",""])},728:function(t,e,n){"use strict";var o=n(656);n.n(o).a},729:function(t,e,n){e=t.exports=n(39)(!1);var o=n(276)(n(692));e.push([t.i,"a{color:#000}a:hover{text-decoration:none;color:#44ad47}nav{height:60px;border-bottom:1px solid #d3d3d3;line-height:40px;background-color:#fff;position:relative}nav.navbar{z-index:2}nav img:nth-child(2){width:40px;height:11px}.navbar-middle{padding:10px 0 10px 20px}.input-group.search{padding:10px 20px}.map-logo img{display:block;margin:2px 15px 2px 2px}.navbar-middle{height:60px;border-left:1px solid #d3d3d3}.input-group.search{height:60px;width:300px}.search input{background-color:transparent;border-radius:0;border:none;border-bottom:1px solid;height:100%}.site-link{margin-right:20px}.custom-select{background:url("+o+') no-repeat right .75rem center/8px 10px;background-size:15px 15px;border:none}button.gm-ui-hover-effect{display:none!important}.cities-select.custom-select{width:90px}button.btn.btn-secondary.search-button{border-radius:0;background-color:transparent;border:none;border-bottom:1px solid #000}button.btn.btn-secondary.search-button:active{background-color:transparent}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(68,173,71,.5)}#search-container{height:60px;z-index:2;background-color:#fff}.show-backdrop:after{content:"";width:100vw;height:100vh;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.4)}.navbar-links{position:absolute;right:0;height:60px;padding:10px 20px}nav button{background-color:transparent;border:none}@media screen and (max-width:1250px){nav{height:unset}.map-logo{display:inline-block;border-right:1px solid grey;height:60px;padding:10px}#gt-nav{padding:0}.sidebar-inline-form{display:block;position:fixed;top:60px;width:100%;background-color:#fff;border-top:1px solid grey}.sidebar-inline-form .navbar-middle{padding:7px 10px;height:59px;width:100%;display:flex;justify-content:space-between}#mobile-button{border:none;border-left:1px solid grey;background-color:#fff;margin-left:auto;display:inline-block;width:60px;height:60px;position:absolute;right:0;top:0}.map-logo img{display:inline-block;height:100%;margin:0}.map-logo img:nth-child(2){height:70%;width:unset}.input-group.search{position:relative;border-bottom:none;background-color:#fff;padding:10px 20px}.navbar-middle{padding:10px 20px}.custom-select{margin-right:10px}.mobile-navbar-content{width:100%;background-color:#fff;z-index:2;display:flex}#search-container{width:calc(100% - 122px)}.search input,button.btn.btn-secondary.search-button{border-bottom:none}#mobile-type-button{line-height:16px;position:relative;padding-left:40px;left:-15px;margin:0 auto;white-space:nowrap}#mobile-type-button img{margin-left:15px;width:15px;height:15px}#mobile-type-button img:first-child{margin-left:0;position:absolute;left:0;top:-5px;width:40px;height:50px}nav .input-group.search{width:unset}button.back-to-index-button{position:relative;border:none;padding:0;height:unset;top:0;right:0;width:unset}}',""])}}]);