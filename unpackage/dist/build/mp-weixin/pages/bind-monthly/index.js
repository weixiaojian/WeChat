(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bind-monthly/index"],{"03e7":function(t,e,n){"use strict";(function(t){n("5e56");a(n("66fd"));var e=a(n("1ef1"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"0607":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isHadList:!1,isTeamMode:!1,accountStr:"",passStr:"",userData:{},pageId:"",isBind:!1}},onLoad:function(e){var n=this;n.pageId=e.pageId;var a=n.$getStorageSync("userData");if("undefined"==typeof a)return t.showModal({title:"提示",content:"请先登录授权~",success:function(e){e.confirm&&t.switchTab({url:"/pages/tabbar/my/index"})}}),!1;try{this.userData=JSON.parse(a)}catch(i){console.log(i)}console.log("userData",this.userData),this.isHadList=!!this.userData.customerName,this.userData.customerCode?(this.isHadList=!0,this.accountStr=this.userData.customerCode):this.isHadList=!1},onUnload:function(e){this.isBind||t.reLaunch({url:"/pages/tabbar/home/index?pageId=yj"})},methods:{bindAccount:function(){var e=this,n=this;if(n.isHadList){var a={customerCode:this.accountStr};n.$api.unBindCustomer(a).then((function(n){console.log(n),200==n.code&&(t.showToast({icon:"none",title:"解除绑定成功",duration:1500,mask:!0}),e.accountStr="",e.isHadList=!1,e.userData={},e.passStr="",e.isBind=!1)}))}else{if(""==this.customerCode)return void t.showToast({icon:"none",title:"请输入客户编码"});if(""==this.passStr)return void t.showToast({icon:"none",title:"请输入密码"});var i={customerCode:this.accountStr,balancePassword:this.passStr};n.$api.bindCustomer(i).then((function(n){console.log(n),200==n.code&&(t.showToast({icon:"none",title:"绑定成功",duration:1e3,mask:!0}),e.isBind=!0,setTimeout((function(){t.navigateBack({delta:1})}),1e3))}))}}}};e.default=n}).call(this,n("543d")["default"])},"1b65":function(t,e,n){"use strict";var a=n("bb98"),i=n.n(a);i.a},"1ef1":function(t,e,n){"use strict";n.r(e);var a=n("d18a"),i=n("2324");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1b65");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"60913eb1",null,!1,a["a"],s);e["default"]=u.exports},2324:function(t,e,n){"use strict";n.r(e);var a=n("0607"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},bb98:function(t,e,n){},d18a:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]}},[["03e7","common/runtime","common/vendor"]]]);