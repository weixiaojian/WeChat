(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/addedservices/index"],{"0b1b":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var u=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"5da5":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){t.e("components/uni-number-box/uni-number-box").then(function(){return resolve(t("9bc3"))}.bind(null,t)).catch(t.oe)},u={data:function(){return{isGoodsPayment:!1,isInsuredValue:!1,insuredValue:"",optionType:"",goodsPayment:"",pageId:"",allSelect:!1,maxInsuredValue:"",specialValue:"",blSpecial:0}},onLoad:function(e){var n=JSON.parse(e.data);this.optionType=n.type,this.pageId=e.pageId,this.echoData(n.item)},watch:{isGoodsPayment:function(e,n){console.log(e),this.goodsPayment=e?this.goodsPayment:""},isInsuredValue:function(e,n){console.log(e),this.insuredValue=e?this.insuredValue:""}},components:{uniNumberBox:a},methods:{getOrderConstant:function(){var e=this;this.$api.getOrderConstant().then((function(n){console.log(n),200==n.code&&(e.maxInsuredValue=n.data.insuredValue,e.specialValue=n.data.specialValue)}))},switchChange:function(e){var n=this;n.allSelect=e.detail.value},goodsPaymentSwitch:function(e){var n=this;n.isGoodsPayment=e.detail.value},isInsuredValueSwitch:function(e){var n=this;n.isInsuredValue=e.detail.value},insuredValueMethod:function(e){var n=this,t=this.$Reg.RegDecimalTwo(e.detail.value);this.$nextTick((function(){n.insuredValue=t}))},goodsPaymentMethod:function(){},focusRbillcode:function(){},focusWeight:function(){},inputValueReg:function(){},echoData:function(e){var n=this;n.goodsPayment=e.goodsPayment||"",n.insuredValue=e.insuredValue||"",n.isGoodsPayment=!!e.goodsPayment,n.isInsuredValue=!!e.insuredValue},confirm:function(){var n=this;if(n.maxInsuredValue&&parseInt(n.insuredValue)>parseInt(n.maxInsuredValue))return wx.showToast({title:"保价金额不得大于"+n.maxInsuredValue,icon:"none",duration:2e3}),!1;n.specialValue&&parseInt(n.insuredValue)>parseInt(n.specialValue)&&(n.blSpecial=1);var t={goodsPayment:n.goodsPayment,insuredValue:n.insuredValue,blSpecial:n.blSpecial};t.type=n.optionType,"sends"==n.pageId&&(t.allSelect=n.allSelect),e.$emit("addedservices",t),e.navigateBack({delta:1})}}};n.default=u}).call(this,t("543d")["default"])},"5dec":function(e,n,t){"use strict";t.r(n);var a=t("5da5"),u=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=u.a},"81bf":function(e,n,t){"use strict";var a=t("c0f8"),u=t.n(a);u.a},c0f8:function(e,n,t){},d38b:function(e,n,t){"use strict";t.r(n);var a=t("0b1b"),u=t("5dec");for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);t("81bf");var o,s=t("f0c5"),l=Object(s["a"])(u["default"],a["b"],a["c"],!1,null,"96b297b4",null,!1,a["a"],o);n["default"]=l.exports},fb7f:function(e,n,t){"use strict";(function(e){t("5e56");a(t("66fd"));var n=a(t("d38b"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["fb7f","common/runtime","common/vendor"]]]);