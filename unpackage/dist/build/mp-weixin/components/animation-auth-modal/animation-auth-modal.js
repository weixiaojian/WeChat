(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/animation-auth-modal/animation-auth-modal"],{"0391":function(t,n,o){"use strict";var e=o("ef6b"),a=o.n(e);a.a},"04e8":function(t,n,o){"use strict";o.r(n);var e=o("1b33"),a=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=a.a},"1b33":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"animation-auth-modal",props:{title:{type:String,default:"温馨提示"},content:{type:String,default:"获取定位失败，请前往设置打开定位权限"}},data:function(){return{layerModel:!1,animationData:"",animationPop:"",animation:""}},methods:{openModal:function(){var n=this,o=t.createAnimation({duration:200,timingFunction:"ease-in"});this.animation=o,o.opacity(0).step(),this.animationData=o.export(),this.layerModel=!0,setTimeout((function(){o.opacity(1).step(),n.animationData=o.export()}),200)},hideModal:function(){var n=this,o=t.createAnimation({duration:200,timingFunction:"ease-out"});this.animation=o,o.opacity(0).step(),this.animationData=o.export(),setTimeout((function(){n.layerModel=!1}),200)},changeModalCancel:function(){this.hideModal(),this.$toast("拒绝授权")},openSetting:function(){var n=this;this.hideModal(),wx.getSetting({success:function(o){void 0!=o.authSetting["scope.userLocation"]&&1!=o.authSetting["scope.userLocation"]?t.showModal({title:"提示",content:"需要获取你的地理位置，请确认授权",confirmColor:"#FDD605",success:function(t){t.cancel?n.$toast("拒绝授权"):t.confirm&&wx.openSetting({success:function(t){1==t.authSetting["scope.userLocation"]?n.getLocation(t):n.$toast("授权失败")}})}}):void 0==o.authSetting["scope.userLocation"]?(console.log("authSetting:status:初始化进入，未授权",o.authSetting["scope.userLocation"]),n.getLocation(o)):o.authSetting["scope.userLocation"]&&(console.log("authSetting:status:已授权",o.authSetting["scope.userLocation"]),n.getLocation(o))}})},getLocation:function(n){var o=this;wx.getLocation({type:"wgs84",success:function(t){},fail:function(e){"getLocation:fail:auth denied"===e.errMsg&&o.$toast("拒绝授权"),n&&n.authSetting["scope.userLocation"]&&(n.authSetting["scope.userLocation"]?t.showModal({title:"",content:"请在系统设置中打开定位服务",showCancel:!1,success:function(t){}}):o.$toast("授权失败"))}})}}};n.default=o}).call(this,o("543d")["default"])},"43e5":function(t,n,o){"use strict";o.r(n);var e=o("536e"),a=o("04e8");for(var i in a)"default"!==i&&function(t){o.d(n,t,(function(){return a[t]}))}(i);o("0391");var c,u=o("f0c5"),s=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"0c1e1769",null,!1,e["a"],c);n["default"]=s.exports},"536e":function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement;t._self._c},i=[]},ef6b:function(t,n,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/animation-auth-modal/animation-auth-modal-create-component',
    {
        'components/animation-auth-modal/animation-auth-modal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("43e5"))
        })
    },
    [['components/animation-auth-modal/animation-auth-modal-create-component']]
]);