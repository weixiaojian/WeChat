(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/components/goods-info/index"],{"476f":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return c})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},c=[]},6138:function(t,e,o){"use strict";var n=o("6c8a"),i=o.n(n);i.a},"6c8a":function(t,e,o){},e1d4:function(t,e,o){"use strict";o.r(e);var n=o("476f"),i=o("f4a9");for(var c in i)"default"!==c&&function(t){o.d(e,t,(function(){return i[t]}))}(c);o("6138");var a,s=o("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"d7bc388c",null,!1,n["a"],a);e["default"]=u.exports},e3d4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{payment_type:"现金",billCode:"",init_services:"请选择",productType:"",expectTime:"",mockList:this.$Mock.payment_type,typeList:this.$Mock.product_type,noPaymentType:!1}},props:{goodsInfo:{type:Object,default:function(){return{}}},isEdit:{type:Boolean,default:function(){return!1}},isProductType:{type:Boolean,default:function(){return!1}},editProductType:{type:Boolean,default:function(){return!1}}},watch:{payment_type:function(t,e){console.log("val",t),"月结"==t&&(this.noPaymentType=!0)},isProductType:function(t,e){console.log("val",t),t&&""==this.productType&&(this.productType="当日件")}},computed:{packageinfo:function(){return this.goodsInfo.goodsName?"".concat(this.goodsInfo.goodsName," ").concat(this.goodsInfo.goodsWeight,"KG ").concat(this.goodsInfo.packingPiece,"件 ").concat(this.goodsInfo.remark||""):"请选择"},addedservices:function(){var t=this.init_services;return(this.goodsInfo.goodsPayment||this.goodsInfo.insuredValue)&&(t="".concat(this.goodsInfo.goodsPayment?"代收货款: "+this.goodsInfo.goodsPayment:""," ").concat(this.goodsInfo.insuredValue?"保价金额: "+this.goodsInfo.insuredValue:"")),t}},methods:{showPopup:function(t){var e=this;e.$emit("showPopup",t)},bindPickerChange:function(t){var e=t.detail.value;this.payment_type=this.$Mock.payment_type[e].name,this.$emit("getPaymentType",this.payment_type)},productTypeChange:function(t){var e=t.detail.value;this.productType=this.$Mock.product_type[e].name,this.$emit("getProductType",this.productType)},selectExpectTime:function(){var t=this;t.$emit("selectExpectTime")},focusBillCode:function(){},inputValueReg:function(t){var e=this;e.billCode=t.detail.value},getBillCode:function(){var t=this;t.$emit("getBillCode")}}};e.default=n},f4a9:function(t,e,o){"use strict";o.r(e);var n=o("e3d4"),i=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/order/components/goods-info/index-create-component',
    {
        'pages/order/components/goods-info/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e1d4"))
        })
    },
    [['pages/order/components/goods-info/index-create-component']]
]);
