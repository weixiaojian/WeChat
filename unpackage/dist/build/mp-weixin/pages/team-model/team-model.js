(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/team-model/team-model"],{"0227":function(e,t,a){},1602:function(e,t,a){"use strict";a.r(t);var o=a("6769"),n=a("cbb2");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("9556");var u,i=a("f0c5"),c=Object(i["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=c.exports},6769:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o}));var o={uniPopup:function(){return a.e("components/uni-popup/uni-popup").then(a.bind(null,"e88b"))}},n=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"73ae":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{teamName:"",teamType:"",teamId:"",groupId:"",teamInfo:{},teamsiteCode:"",teamsiteName:""}},onLoad:function(){var e=this;e.getWxGroupByOpenId()},watch:{teamId:function(e){this.throttle(this.searcch,null,500,e)}},methods:{throttle:function(e,t,a,o){clearTimeout(e.timer),e.timer=setTimeout((function(){e.call(t,o)}),a)},searcch:function(){var t=this,a={groupId:t.teamId};t.$api.getWxGroupByIdOrName(a).then((function(a){200==a.code&&null!=a.data?(t.teamInfo=a.data,t.teamName=a.data.groupName,t.groupId=a.data.groupId,console.log(a.data),t.teamsiteCode=a.data.siteCode,t.teamsiteName=a.data.siteName):(e.showToast({icon:"none",duration:1500,title:"未搜索到团队~"}),t.teamInfo={},t.teamName="",t.groupId="",t.teamsiteCode="",t.teamsiteName="")}))},getWxGroupByOpenId:function(){var t=this;t.$api.getWxGroupByOpenId().then((function(a){if(console.log(a),200==a.code&&null!=a.data){t.$setStorageSync("teamInfo",a.data);var o={groupId:a.data.groupId};e.redirectTo({url:"create-team?pageId=cjtd&data="+JSON.stringify(o)})}}))},createTeam:function(){var e=this;this.teamType="creat",this.$nextTick((function(){e.$refs["showpopup"].open()}))},joinTeam:function(){var e=this;this.teamType="join",this.$nextTick((function(){e.$refs["showpopup"].open()}))},selectCancel:function(){this.$refs["showpopup"].close()},selectConfirm:function(){var t=this,a=this,o=a.$getStorageSync("token"),n=JSON.parse(a.$getStorageSync("userData"));console.log(n);var r={groupId:a.groupId,groupName:a.teamName,openId:o,phone:n.phone,nickName:n.nickName,headimgurl:n.headimgurl,status:1,blShare:0,createDate:"",updateDate:"",siteCode:a.teamsiteCode,siteName:a.teamsiteName,customerCode:"",customerName:""};"creat"==a.teamType?a.$api.createWxGroup(r).then((function(a){if(console.log(a),200==a.code){var o={groupId:a.data};e.redirectTo({url:"create-team?pageId=cjtd&data="+JSON.stringify(o)}),t.$refs["showpopup"].close()}})):a.$api.addWxGroup(r).then((function(a){if(console.log(a),200==a.code){var o={groupId:a.data};e.redirectTo({url:"create-team?pageId=cjtd&data="+JSON.stringify(o)}),t.$refs["showpopup"].close()}}))}}};t.default=a}).call(this,a("543d")["default"])},9556:function(e,t,a){"use strict";var o=a("0227"),n=a.n(o);n.a},cbb2:function(e,t,a){"use strict";a.r(t);var o=a("73ae"),n=a.n(o);for(var r in o)"default"!==r&&function(e){a.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},e907:function(e,t,a){"use strict";(function(e){a("5e56");o(a("66fd"));var t=o(a("1602"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])}},[["e907","common/runtime","common/vendor"]]]);