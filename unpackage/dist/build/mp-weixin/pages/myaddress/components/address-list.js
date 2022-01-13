(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myaddress/components/address-list"],{"0915":function(t,e,n){},"28eb":function(t,e,n){"use strict";n.r(e);var r=n("ff1d"),a=n.n(r);for(var d in r)"default"!==d&&function(t){n.d(e,t,(function(){return r[t]}))}(d);e["default"]=a.a},a00f:function(t,e,n){"use strict";n.r(e);var r=n("ea63"),a=n("28eb");for(var d in a)"default"!==d&&function(t){n.d(e,t,(function(){return a[t]}))}(d);n("f226");var i,u=n("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"786c2104",null,!1,r["a"],i);e["default"]=s.exports},ea63:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},d=[]},f226:function(t,e,n){"use strict";var r=n("0915"),a=n.n(r);a.a},ff1d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"address-list",props:{addressData:{type:Array,default:function(){return[]}},defaultAddress:{type:Boolean,default:function(){return!1}}},data:function(){return{}},onLoad:function(t){},methods:{editDefault:function(t,e){var n={index:t,item:e};this.$emit("editDefault",n)},editor_address:function(t,e){var n={type:t,item:e};this.$emit("editor_address",n)},delte_address:function(t,e){var n={index:t,item:e};this.$emit("delte_address",n)},selectAddress:function(t,e){var n={index:t,item:e};this.$emit("selectAddress",n)}}};e.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/myaddress/components/address-list-create-component',
    {
        'pages/myaddress/components/address-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a00f"))
        })
    },
    [['pages/myaddress/components/address-list-create-component']]
]);
