(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-views-setting-index"],{"262a":function(t,e,n){"use strict";n.r(e);var o=n("2659"),a=n("b560");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("bdc6");var c,l=n("f0c5"),s=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"fa475f34",null,!1,o["a"],c);e["default"]=s.exports},2659:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"item_cell"},[n("v-uni-view",[t._v(t._s(t.cellname))]),n("v-uni-image",{attrs:{src:"/static/images/home/right.png"}})],1)},i=[]},2983:function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("cced"),i=o(n("262a")),c=getApp(),l={data:function(){return{themeColor:{},colorModal:!1,themeList:c.globalData.config}},components:{itemCell:i.default},props:{},onLoad:function(t){var e=(0,a.getConfig)();this.setData({themeColor:e})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{showColorModal:function(){this.setData({colorModal:!0})},closeColor:function(){this.setData({colorModal:!1})},SetColor:function(t){(0,a.setConfig)(t),this.setData({themeColor:t,colorModal:!1}),c.globalData.newColor=t.color},onexit:function(){uni.showModal({cancelColor:"#999",content:"确认要退出登录吗?",confirmColor:this.themeColor.color,success:function(t){t.confirm&&((0,a.removeToken)(),uni.showToast({title:"退出成功",icon:"none"}),setTimeout((function(){uni.switchTab({url:"../tabBar/home"})}),1500))}})}}};e.default=l},"305b":function(t,e,n){var o=n("ad34");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("1df39a44",o,!0,{sourceMap:!1,shadowMode:!1})},"357a":function(t,e,n){"use strict";var o=n("44d6"),a=n.n(o);a.a},"44d6":function(t,e,n){var o=n("b411");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("4c8d2af0",o,!0,{sourceMap:!1,shadowMode:!1})},"4c53":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{}},components:{},props:{cellname:{type:String},linkUrl:{type:String}},methods:{}};e.default=o},"4c8c":function(t,e,n){"use strict";var o=n("7918"),a=n.n(o);a.a},"4faf":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-8f0ca860]{background-color:#f8f8f8!important}body.?%PAGE?%[data-v-8f0ca860]{background-color:#f8f8f8!important}",""]),t.exports=e},7918:function(t,e,n){var o=n("4faf");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("9f792bb2",o,!0,{sourceMap:!1,shadowMode:!1})},ad34:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'.item_cell[data-v-fa475f34]{background-color:#fff;height:%?80?%;line-height:%?80?%;padding:0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.item_cell[data-v-fa475f34]:after{position:absolute;z-index:3;left:0;right:0;height:0;bottom:0;left:4%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);border-bottom:1px solid #e4e7ed}.item_cell[data-v-fa475f34]:active{background-color:#f5f5f5}.item_cell uni-view[data-v-fa475f34]{width:93%;float:left}.item_cell uni-image[data-v-fa475f34]{width:%?40?%;height:%?40?%;float:right}',""]),t.exports=e},b3e4:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"setting"},[n("v-uni-view",{staticClass:"cell_box"},[n("item-cell",{attrs:{cellname:"关于商城"}}),n("item-cell",{attrs:{cellname:"站点帮助"}}),n("item-cell",{attrs:{cellname:"意见反馈"}})],1),n("v-uni-view",{staticClass:"cu-list menu sm-border card-menu"},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content flex align-center"},[n("v-uni-text",{class:"cuIcon-colorlens text-"+t.themeColor.name}),n("v-uni-view",{class:"padding solid radius shadow-blur bg-"+t.themeColor.name}),n("v-uni-view",{staticClass:"title"},[t._v("主题色："),n("v-uni-text",{class:"text-"+t.themeColor.name},[t._v(t._s(t.themeColor.title))])],1)],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{class:"cu-btn round shadow bg-"+t.themeColor.name,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showColorModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-colorlens"}),t._v("选择主题")],1)],1)],1)],1),n("v-uni-view",{class:"cu-modal "+(1==t.colorModal?"show":"")},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar justify-end solid-bottom"},[n("v-uni-view",{staticClass:"content"},[t._v("选择颜色")]),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeColor.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"grid col-5 padding"},t._l(t.themeList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"padding-xs",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.SetColor(e)}}},[n("v-uni-view",{class:"padding-tb radius bg-"+e.name,staticStyle:{color:"#ffffff"}},[t._v(t._s(e.title))])],1)})),1)],1)],1),n("v-uni-view",{staticClass:"exit",style:"color:"+t.themeColor.color,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onexit.apply(void 0,arguments)}}},[t._v("退出登录")])],1)},i=[]},b411:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".bg-default[data-v-8f0ca860]{background-color:#fa436a;color:#fff}.text-default[data-v-8f0ca860]{color:#fa436a}.cu-item .title[data-v-8f0ca860]{margin-left:%?20?%;font-size:%?28?%}.action uni-button[data-v-8f0ca860]{width:%?200?%!important;font-size:%?24?%;color:#fff}.card-menu[data-v-8f0ca860]{margin:0!important;padding-top:%?20?%}.cell_box[data-v-8f0ca860]{padding-top:%?20?%}.exit[data-v-8f0ca860]{width:100%;height:%?80?%;line-height:%?80?%;text-align:center;background-color:#fff;font-size:%?30?%;position:fixed;left:0;bottom:%?50?%}",""]),t.exports=e},b560:function(t,e,n){"use strict";n.r(e);var o=n("4c53"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},bdc6:function(t,e,n){"use strict";var o=n("305b"),a=n.n(o);a.a},c4d6:function(t,e,n){"use strict";n.r(e);var o=n("2983"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},e90d:function(t,e,n){"use strict";n.r(e);var o=n("b3e4"),a=n("c4d6");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("357a"),n("4c8c");var c,l=n("f0c5"),s=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"8f0ca860",null,!1,o["a"],c);e["default"]=s.exports}}]);