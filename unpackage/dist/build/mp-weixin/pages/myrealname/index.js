(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myrealname/index"],{"6bdf":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"866e":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{sex:"1",phone:"",realName:"",realIdType:"ID100001",nationality:this.$Mock.nation_data[0].name,realIdCode:"",provinces:"",address_detail:"",mockList:this.$Mock.nation_data}},onLoad:function(t){var a=this,n=a.$getStorageSync("userData");if("undefined"==typeof n)return e.showModal({title:"提示",content:"请先登录授权~",success:function(t){t.confirm&&e.switchTab({url:"/pages/tabbar/my/index?pageId=send"})}}),!1;a.getPhoneData()},components:{},computed:{},methods:{showMulLinkageThreePicker:function(){},getPhoneData:function(){var e=this,t=JSON.parse(e.$getStorageSync("userData"));this.phone=t.phone;var a={phone:t.phone,guid:""};this.$api.getRealId(a).then((function(t){200==t.code&&null!=t.data&&(console.log(t),e.sex=t.data.sex,e.realName=t.data.realName,e.realIdType=t.data.realIdType,e.nationality=t.data.national,e.realIdCode=t.data.realIdCode,e.address_detail=t.data.realIdAddress)}))},onConfirm:function(e){this.provinces=e.label.replace(/-/gi,"/")},hanldChange:function(){if(""!=this.phone)if(this.$Reg.RegPhone(this.phone))if(""!=this.realName)if(this.$Reg.RegCard(this.realIdCode)){this.provinces;var t={realIdAddress:this.address_detail,realIdType:this.realIdType,realName:this.realName,phone:this.phone,national:this.nationality,sex:this.sex,realIdCode:this.realIdCode};this.$api.addAuth(t).then((function(t){200==t.code&&(e.showToast({icon:"success",title:t.message,duration:2e3}),setTimeout((function(){e.navigateBack({delta:1})}),2e3))}))}else e.showToast({icon:"none",title:"身份证输入有误"});else e.showToast({icon:"none",title:"姓名为空"});else e.showToast({icon:"none",title:"寄件电话输入有误"});else e.showToast({icon:"none",title:"电话为空"})},radioChange:function(e){this.sex=e.detail.value,console.log(this.sex)},bindPickerChange:function(e){var t=e.detail.value;this.nationality=this.$Mock.nation_data[t].name}}};t.default=a}).call(this,a("543d")["default"])},"87ac":function(e,t,a){"use strict";a.r(t);var n=a("866e"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"95b5":function(e,t,a){"use strict";var n=a("b7cc"),i=a.n(n);i.a},b7cc:function(e,t,a){},e976:function(e,t,a){"use strict";(function(e){a("5e56");n(a("66fd"));var t=n(a("f3ac"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])},f3ac:function(e,t,a){"use strict";a.r(t);var n=a("6bdf"),i=a("87ac");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("95b5");var s,r=a("f0c5"),d=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"35c97199",null,!1,n["a"],s);t["default"]=d.exports}},[["e976","common/runtime","common/vendor"]]]);