(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/parsing-batch/parsing-batch"],{"1b84":function(e,t,o){"use strict";o.r(t);var n=o("32e3"),r=o("f8ce");for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);o("d23a");var c,i=o("f0c5"),s=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=s.exports},"32e3":function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}));var n={uniPopup:function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"e88b"))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"6d72":function(e,t,o){"use strict";(function(e){o("5e56");n(o("66fd"));var t=n(o("1b84"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=o,e(t.default)}).call(this,o("543d")["createPage"])},"8a14":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){o.e("components/invinbg-image-cropper/invinbg-image-cropper").then(function(){return resolve(o("b9d3"))}.bind(null,o)).catch(o.oe)},r=requirePlugin("WechatSI"),a=r.getRecordRecognitionManager(),c="",i="",s={data:function(){return{placeholder:"例如：韵达同城，130xxxxx1234，广东省深圳市宝安区xx街道xx小区xx楼xx号（批量识别暂不支持港澳台、国际地址）",batchAddress:"",pageId:"",record:!1,recordState:"按住说话",recordTxt:!1,authTxt:"",isSetAuth:!1,tempFilePath:"",cropFilePath:"",imgCropper:!1,dotMove:!1,dottMove:!1}},onLoad:function(e){self=this,console.log(e),e.pageId&&(this.pageId=e.pageId)},components:{ImageCropper:n},methods:{closeAlert:function(){var e=this;e.record=!1,e.isSetAuth=!1,e.$refs["showpopup"].close(),e.$refs["showpopup1"].close()},soundRecoring:function(){var e=this;this.$getAuth("scope.record").then((function(t){t?(e.clicktouse=!0,e.$refs["showpopup"].open()):(e.authTxt="麦克风",e.$refs["showpopup1"].open())}))},stopMaoPao:function(){},pressstart:function(){},shotPress:function(){e.showToast({title:"说话时间太短",mask:!0,icon:"none",duration:1500})},pressEnd:function(){var e=this;e.recordState="识别中...",clearInterval(i),clearTimeout(c),a.stop(),e.dotMove=!1,e.dottMove=!1,setTimeout((function(){e.recordState="按住说话",e.recordTips="依次说出姓名、电话、地址信息"}),1e3)},longPress:function(){var t=this;t.needHand=!0,t.recordState="请说话",t.dotMove=!0,t.dottMove=!0,console.log(t.dottMove),c=setTimeout((function(){t.needHand=!0,t.recordState=10,t.dotMove=!1,t.dottMove=!0,t.recordTips="剩余时间",i=setInterval((function(){t.recordState=t.recordState-1,0==t.recordState&&(clearInterval(i),clearTimeout(c),t.recordState="按住说话",t.recordTips="依次说出姓名、电话、地址信息",that.pressEnd())}),1e3)}),2e4),a.onStart=function(e){console.log("成功开始录音识别",e)},a.onRecognize=function(e){console.log("current result",e.result)},a.onStop=function(o){console.log(o),console.log("record file path",o.tempFilePath),t.recordState="识别中...",null==o.result||""==o.result||void 0==o.result?(e.showToast({title:"无法识别请重试",mask:!0,icon:"none",duration:1500}),t.recordState="按住说话",t.dotMove=!1,t.dottMove=!1):(t.recordState="按住说话",t.dotMove=!1,t.dottMove=!1,console.log("res.data",o.result),t.batchAddress=o.result)},a.onError=function(e){console.error("error msg",e.msg),t.recordState="按住说话"},a.start({duration:4e4,lang:"zh_CN"})},cropperSure:function(t){var o=this;this.cropFilePath=t.detail.tempFilePath,console.log(this.cropFilePath);var n=e.getFileSystemManager();n.readFile({filePath:this.cropFilePath,encoding:"base64",success:function(e){var t=e.data;o.$api.imgAnalysis(t).then((function(e){console.log(e),200==e.code&&(o.batchAddress=e.data,o.clearImgData())}))}})},clearImgData:function(){var e=this;e.tempFilePath="",e.cropFilePath="",e.imgCropper=!1},cancel:function(){var e=this;e.clearImgData()},choosImg:function(t){var o=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){o.tempFilePath=e.tempFilePaths[0],console.log(o.tempFilePath),o.imgCropper=!0},fail:function(){}})},ChangeBtn:function(){var t=this;if(""!=this.batchAddress){var o={address:this.$Reg.removeHTMLTag(this.batchAddress)};console.log(o),this.$api.getAddressAnalyList(o).then((function(o){if(console.log(o),200==o.code){var n=o.data;"sends"==t.pageId?(setTimeout((function(){e.navigateBack({delta:1})}),500),e.$emit("batchRec",n)):e.navigateTo({url:"/pages/excelMail/orderExcel?order="+JSON.stringify(n)+"&pageId=batch"})}else e.showToast({icon:"none",title:o.message,duration:2500})}))}else e.showToast({icon:"none",title:"请输入要解析数据"})}}};t.default=s}).call(this,o("543d")["default"])},d23a:function(e,t,o){"use strict";var n=o("fd71"),r=o.n(n);r.a},f8ce:function(e,t,o){"use strict";o.r(t);var n=o("8a14"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},fd71:function(e,t,o){}},[["6d72","common/runtime","common/vendor"]]]);