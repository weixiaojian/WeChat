(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/suggestion/suggestion"],{"24a5":function(t,e,n){},"2af5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{current:0,types:0,texts:"",timer:null,items:[{value:"0",name:"系统问题"},{value:"1",name:"用户需求"},{value:"2",name:"其他"}]}},onLoad:function(){},methods:{inputText:function(t){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.texts=t.detail.value}),500)},radioChange:function(t){this.types=Number(t.detail.value)},submitSuggest:function(){var e=this,n=JSON.parse(this.$getStorageSync("userData")),a=n.openId,i=this.texts.trim();if(i.length<=0)return t.showToast({title:"内容不能为空",icon:"error",mask:!1});var u={openId:a,type:this.types,content:this.texts};this.$api.addWxAdvices(u).then((function(n){200==n.code&&(t.showToast({title:"建议提交成功",icon:"none",mask:!1}),e.texts="",setTimeout((function(){t.navigateBack({delta:1})}),1e3))}))},resets:function(){this.texts=""}}};e.default=n}).call(this,n("543d")["default"])},"6c9a":function(t,e,n){"use strict";n.r(e);var a=n("2af5"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},"760b":function(t,e,n){"use strict";n.r(e);var a=n("c4df"),i=n("6c9a");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("e228");var o,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"255b1dbc",null,!1,a["a"],o);e["default"]=s.exports},b4e5:function(t,e,n){"use strict";(function(t){n("5e56");a(n("66fd"));var e=a(n("760b"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},c4df:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c},u=[]},e228:function(t,e,n){"use strict";var a=n("24a5"),i=n.n(a);i.a}},[["b4e5","common/runtime","common/vendor"]]]);