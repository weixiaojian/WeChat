(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/send/index"],{"14a0":function(e,t,o){"use strict";o.d(t,"b",(function(){return s})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return a}));var a={uniPopup:function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"e88b"))}},s=function(){var e=this,t=e.$createElement;e._self._c},n=[]},1902:function(e,t,o){},"1a34":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(o("f1fd")),s=r(o("79f4")),n=r(o("1239")),i=o("8a96"),d=o("26cb");function r(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){u(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var p=function(){o.e("pages/order/components/send-receive/index").then(function(){return resolve(o("aa9a"))}.bind(null,o)).catch(o.oe)},h=function(){o.e("pages/order/components/goods-info/index").then(function(){return resolve(o("e1d4"))}.bind(null,o)).catch(o.oe)},g=function(){o.e("pages/order/components/expectTime/index").then(function(){return resolve(o("e880"))}.bind(null,o)).catch(o.oe)},m=function(){o.e("pages/order/components/agreement/index").then(function(){return resolve(o("7347"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/ble-pop/ble-pop").then(function(){return resolve(o("75ca"))}.bind(null,o)).catch(o.oe)},y=function(){o.e("components/yd-toast/yd-toast").then(function(){return resolve(o("85a2"))}.bind(null,o)).catch(o.oe)},D=null,T={data:function(){return{addressDataJJ:{},addressDataSJ:{},realName:!1,hasTips:!1,optionType:"",newaddressId:"",tabIndex:0,goodsInfo:{goodsWeight:1,goodsName:"",goodsType:"",packingPiece:"",remark:"",goodsPayment:0,insuredValue:"",blSpecial:0},freight:"0",topayment:"0",agree:!0,pageId:"",specEmployee:"",specEmployeeCode:"",ownerSite:"",ownerSiteCode:"",isEdit:!1,isAgain:!1,editData:{},isCash:!0,customerDeliveryBeginTime:"",customerDeliveryEndTime:"",prePageData:null,titleX:"下单",changeList:[{icon:o("1522"),name:"下单",currentIndex:0},{icon:o("3f93"),name:"下单并打印",currentIndex:1}],currentKey:0,orderBill:"",teamModel:"",editTeamInfo:{groupId:"",groupMember:"",sendSite:"",sendSiteCode:"",customerCode:"",customerName:""},userData:{},monthly:{customerCode:"",customerName:""},smartObj:{name:"",phone:"",company:"",provice:"",city:"",country:"",townName:"",detailAddress:""},isCopyText:"",disable:!1,isProductType:!1,editProductType:!1}},computed:l({},(0,d.mapGetters)([i.GET_CONNECT_DEVICEId])),components:{SendReceive:p,GoodsInfo:h,ExpectTime:g,Agreement:m,BlePop:f,YDTOAST:y},onShow:function(){var e,t,o=this;this.addressDataJJ.phone&&(console.log("realName"),o.blurValue());try{e=JSON.parse(o.$getStorageSync("sendOrder"))}catch(a){console.log(a)}t=!e||0==Object.keys(e.addressDataJJ).length,0!=Object.keys(o.addressDataJJ).length||o.isEdit||o.isAgain||!t||o.getAddressDefault(),this.addressDataSJ.city&&o.checkDispByCity()},onLoad:function(t){var o,a=this,s=a.$getStorageSync("userData");if("undefined"==typeof s)return e.showModal({title:"提示",content:"请先登录授权~",success:function(t){t.confirm?e.switchTab({url:"/pages/tabbar/my/index?pageId=send"}):t.cancel&&e.switchTab({url:"/pages/tabbar/home/index?pageId=send"})}}),!1;try{a.userData=JSON.parse(s)}catch(l){console.log(l)}if(t.q){var n=decodeURIComponent(t.q);console.log("ewmDataStrD",n);var i=n.indexOf("scanOrder/");n=n.substring(i+10,n.length),console.log(n),a.checkBillCode(n)}try{o=JSON.parse(t.data)}catch(l){console.log(l)}if("{}"!=t.data&&void 0!=t.data&&""!=t.data){a.prePageData=o;var d=!!o.orderBill&&o.orderBill;d?(console.log(o),"edit"==o.operatType?(a.isEdit=!0,a.getOrderData(o.orderBill)):(a.isAgain=!0,a.getOrderData(o.orderBill))):a.$nextTick((function(){a.specEmployee=o.specEmployeeName,a.specEmployeeCode=o.specEmployeeCode,a.ownerSite=o.ownerSite,a.ownerSiteCode=o.ownerSiteCode}))}a.teamModel="1"==a.$getStorageSync("teamModel")?"1":"2",wx.setNavigationBarTitle({title:"下单寄件".concat("1"===a.$getStorageSync("teamModel")?"（团队）":"")});var r=a.$getStorageSync("teamInfo");console.log("teamInfo",r);var c=!!r&&r.groupId;if("1"!=a.teamModel&&!a.userData.customerCode&&!a.isEdit&&!a.isAgain)return c?(e.showModal({title:"提示",content:"请选择团队模式下单",showCancel:!1,success:function(t){t.confirm?e.switchTab({url:"/pages/tabbar/home/index?pageId=send"}):t.cancel&&(a.disable=!0)}}),!1):(e.showModal({title:"提示",content:"散客不支持下单，请联系021-39209005或绑定月结客户编码再下单。",confirmText:"去绑定",showCancel:!1,success:function(t){t.confirm?e.navigateTo({url:"/pages/bind-monthly/index?pageId=send"}):t.cancel&&(e.switchTab({url:"/pages/tabbar/home/index?pageId=send"}),a.disable=!0)}}),!1);("1"==a.teamModel||a.userData.customerCode)&&a.getBlProductType(),a.isEdit||a.isAgain||a.getClipboard()},beforeDestroy:function(){this.setStorageData()},onHide:function(){this.setStorageData()},mounted:function(){var t=this;e.$on("selectAddress",(function(e){console.log(e),"0"==t.tabIndex?(t.addressDataJJ=e,t.blurValue()):"1"==t.tabIndex&&(t.addressDataSJ=e,t.checkDispByCity())})),e.$on("packageinfo",(function(e){console.log(e),t.goodsInfo.goodsWeight=e.goodsWeight,t.goodsInfo.goodsName=e.goodsName,t.goodsInfo.goodsType=e.goodsType,t.goodsInfo.packingPiece=e.packingPiece,t.goodsInfo.remark=e.remark})),e.$on("addedservices",(function(e){t.goodsInfo.goodsPayment=e.goodsPayment,t.goodsInfo.insuredValue=e.insuredValue,t.goodsInfo.blSpecial=e.blSpecial})),e.$on("inputAddress",(function(e){"jjr"==t.newaddressId?t.addressDataJJ=e:"sjr"==t.newaddressId&&(t.addressDataSJ=e)})),t.echoOrderData(),t.$nextTick((function(){var e=!!t.prePageData&&t.prePageData.billCode;e&&(t.$refs.GoodsInfo.billCode=t.prePageData.billCode),"1"!=t.teamModel&&t.userData.customerCode&&(t.$refs.GoodsInfo.payment_type="月结")})),t.blurValue()},onUnload:function(){e.$off("selectAddress"),e.$off("packageinfo"),e.$off("addedservices"),e.$off("inputAddress")},watch:{dayItem:function(e,t){this.hourList=[],1==e?this.hourList=this.hourMould:this.computerToday()}},methods:{goConnectBle:function(){e.navigateTo({url:"/pages/myPrinter/myPrinter?pageId=send"})},showPopup:function(t){console.log(t);var o={};o.type=t,"wpxx"==t?(o.item={goodsName:this.goodsInfo.goodsName,remark:this.goodsInfo.remark,goodsWeight:this.goodsInfo.goodsWeight,packingPiece:this.goodsInfo.packingPiece},e.navigateTo({url:"/pages/order/packageinfo/index?pageId=send&data="+JSON.stringify(o)})):(o.item={goodsPayment:this.goodsInfo.goodsPayment,insuredValue:this.goodsInfo.insuredValue,blSpecial:this.goodsInfo.blSpecial},e.navigateTo({url:"/pages/order/addedservices/index?pageId=send&data="+JSON.stringify(o)}))},goRead:function(){var e=this;e.$refs["showpopup1"].open()},confirmAgreement:function(){var e=this;e.$refs["showpopup1"].close(),e.agree=!0},getBlProductType:function(){var e=this,t=e.$getStorageSync("teamInfo"),o={type:"1"==e.teamModel?1:0,code:"1"==e.teamModel?t.siteCode:e.userData.customerCode};e.$api.getBlProductType(o).then((function(t){console.log("getBlProductType",t),200==t.code&&(e.isProductType=!0)}))},getTrackFreight:function(){var e=this,t=e.addressDataJJ?e.addressDataJJ.city:"",o=e.addressDataSJ?e.addressDataSJ.provice:"",a=e.addressDataSJ?e.addressDataSJ.city:"",s=e.addressDataSJ?e.addressDataSJ.country:"",n=e.goodsInfo.goodsWeight?e.goodsInfo.goodsWeight:"";if(t&&o&&a&&s&&n){var i={sendCity:t,acceptProvince:o,acceptCity:a,acceptCounty:s,goodsWeight:n};e.$api.trackFreight(i).then((function(t){"现金"==e.$refs.GoodsInfo.payment_type?(e.freight=t.data+"",e.topayment="0"):"到付"==e.$refs.GoodsInfo.payment_type?(e.topayment=t.data+"",e.freight="0"):(e.freight=t.data+"",e.topayment="0")}))}},getPaymentType:function(e){var t=this;console.log(e),t.isCash="现金"==e},selectExpectTime:function(){var e=this;e.$refs["showpopup"].open()},getExpectTime:function(e){var t=this;t.$refs.GoodsInfo.expectTime=e.dayItem+" "+e.hour,"今天"==e.dayItem?(t.customerDeliveryBeginTime=t.$momm.getdate()+" "+e.hour.split("-")[0]+":00",t.customerDeliveryEndTime=t.$momm.getdate()+" "+e.hour.split("-")[1]+":00"):"明天"==e.dayItem&&(t.customerDeliveryBeginTime=t.$momm.getdate(1)+" "+e.hour.split("-")[0]+":00",t.customerDeliveryEndTime=t.$momm.getdate(1)+" "+e.hour.split("-")[1]+":00"),t.$refs["showpopup"].close()},timeCancel:function(){var e=this;e.$refs["showpopup"].close()},editMycourier:function(){e.navigateTo({url:"/pages/mycourier/index?pageId=send"})},blurValue:function(){var e=this,t=!!this.addressDataJJ&&this.addressDataJJ.phone;if(t){var o={phone:this.addressDataJJ.phone};e.$getByPhone(o).then((function(t){console.log(t),e.realName=t,e.hasTips=!t}))}},checkDispByCity:function(){var e=this,t=!!this.addressDataSJ&&this.addressDataSJ.city;if(t){var o={city:this.addressDataSJ.city};e.$api.checkDispByCity(o).then((function(t){400==t.code?e.disable=!0:200==t.code&&(e.disable=!1)}))}},getAddressDefault:function(){var e=this,t=this;t.$api.getAddressDefault().then((function(o){200==o.code&&null!=o.data&&(t.addressDataJJ=o.data,e.$forceUpdate(),t.blurValue())}))},realnameMethod:function(){var t={phone:this.addressDataJJ.phone};e.navigateTo({url:"/pages/myrealname/index?data="+JSON.stringify(t)})},getBillCode:function(){var t=this;e.scanCode({success:function(e){var o=e.result,a=o.indexOf("scanOrder/");o=o.substring(a+10,o.length),t.checkBillCode(o)}})},checkBillCode:function(t){var o=this,a={billCode:t};o.$api.checkBillCode(a).then((function(t){200==t.code?o.$refs.GoodsInfo.billCode=t.data:e.showToast({icon:"none",title:"该运单号已使用！",duration:2e3})}))},getOrderData:function(t){var o=this,a={orderBill:t};o.$api.getOrderData(a).then((function(t){console.log(t),200==t.code?(o.editData=t.data,o.echoOrderData()):(e.showToast({icon:"none",title:"订单数据获取失败~",duration:1500,mask:!0}),setTimeout((function(){e.navigateBack({delta:1})}),1e3))}))},myaddress:function(t){this.tabIndex=t.tabIndex,e.navigateTo({url:"/pages/myaddress/index?pageId=send&data="+JSON.stringify(t)})},newaddress:function(t){var o={type:"send"};this.newaddressId=t,"jjr"==t?o.item=this.addressDataJJ:"sjr"==t&&(o.item=this.addressDataSJ),o.isEdit=this.isEdit?this.isEdit:this.isAgain,e.navigateTo({url:"/pages/newaddress/index?pageId="+t+"&data="+JSON.stringify(o)})},checkboxChange:function(e){this.agree="agree"==e.detail.value},changeSub:function(){this.$refs["showpopup2"].open()},showModalChange:function(e){var t=this;"下单并打印"==e.name?a.default.getConnectState((function(o){t.xiaChange(e)}),(function(e){})):this.xiaChange(e),this.$refs["showpopup2"].close()},xiaChange:function(e){this.titleX=e.name,this.currentKey=e.currentIndex},editAddr:function(e){var t=this;"jjr"==e?t.addressDataJJ=t.smartObj:t.addressDataSJ=t.smartObj,console.log(t.addressDataSJ),t.$refs.showpopup4.close()},getClipboard:function(){var t=this;e.getClipboardData({success:function(e){if(null!=e.data&&void 0!=e.data&&""!=t.$Reg.removeHTMLTag(e.data)&&""!=e.data.trim()){if(t.$getStorageSync("clipboardData")&&e.data==t.$getStorageSync("clipboardData"))return;t.$setStorageSync("clipboardData",t.$Reg.removeHTMLTag(e.data)),t.isCopyText=t.$Reg.removeHTMLTag(e.data),t.isCopyText&&(t.isCopyText.includes("省")||t.isCopyText.includes("市")||t.isCopyText.includes("区")||t.isCopyText.includes("洲")||t.isCopyText.includes("街道"))&&t.analysis()}},complete:function(){e.hideToast({})}})},analysis:function(){var t=this,o={address:t.isCopyText};t.$api.addressAnalysis(o).then((function(e){if(200==e.code){if(t.smartObj.name=e.data.name||"",t.smartObj.phone=e.data.phone||"",t.smartObj.detailAddress=t.$Reg.stripscript(e.data.formatAddress)||"",e.data.province||e.data.cityName||e.data.countyName){var o={province:e.data.province||"",city:e.data.cityName||"",county:e.data.countyName||"",town:e.data.townName||""};return t.$api.checkProvince(o)}return Promise.reject()}Promise.reject()})).then((function(o){if(200==o.code){t.$refs.showpopup4.open();var a=o.data.townName?"/"+o.data.townName:"";o.data.townCode&&o.data.townCode;t.smartObj.provice=o.data.province||"",t.smartObj.city=o.data.cityName||"",t.smartObj.country=o.data.countyName||"",t.smartObj.townName=a||"",console.log(t.smartObj)}else 400==o.code&&e.showToast({icon:"none",title:o.message,duration:2e3})}),(function(e){console.log(e)}))},submit:function(t){var o=this,a=this;if(!a.disable){var s=a.$getStorageSync("teamInfo");if(""!=this.addressDataJJ.name&&void 0!=this.addressDataJJ.name&&null!=this.addressDataJJ.name)if(""!=this.addressDataSJ.name&&void 0!=this.addressDataSJ.name&&null!=this.addressDataSJ.name)if(""!=a.addressDataJJ.name)if(""!=a.addressDataJJ.phone)if(""!=a.addressDataJJ.provice&&""!=a.addressDataJJ.city&&""!=a.addressDataJJ.country)if(""!=a.addressDataJJ.detailAddress)if(""!=a.addressDataSJ.name)if(""!=a.addressDataSJ.phone)if(""!=a.addressDataSJ.provice&&""!=a.addressDataSJ.city&&""!=a.addressDataSJ.country)if(""!=a.addressDataSJ.detailAddress)if(this.realName)if(""!=this.goodsInfo.goodsWeight)if(""!=this.goodsInfo.goodsName)if(""!=this.$refs.GoodsInfo.payment_type)if(this.agree){if(null!=D&&clearTimeout(D),a.isEdit){if(a.addressDataJJ.provice!=a.editData.sendProvince)return void e.showToast({icon:"none",title:"寄件人省份无法修改"});if(a.addressDataSJ.provice!=a.editData.acceptProvince)return void e.showToast({icon:"none",title:"收件人省份无法修改"})}var n={sendMan:this.addressDataJJ.name,sendManMobile:this.addressDataJJ.phone,sendCountry:"中国",sendProvince:this.addressDataJJ.provice,sendCity:this.addressDataJJ.city,sendCounty:this.addressDataJJ.country,sendTown:this.addressDataJJ.townName,sendManCompany:this.addressDataJJ.company,sendManAddress:this.addressDataJJ.detailAddress,acceptMan:this.addressDataSJ.name,acceptManMobile:this.addressDataSJ.phone,acceptCountry:"中国",acceptProvince:this.addressDataSJ.provice,acceptCity:this.addressDataSJ.city,acceptCounty:this.addressDataSJ.country,acceptTown:this.addressDataSJ.townName,acceptManCompany:this.addressDataSJ.company,acceptManAddress:this.addressDataSJ.detailAddress,billCode:this.$refs.GoodsInfo.billCode,freight:parseInt(this.freight),topayment:parseInt(this.topayment),goodsPayment:this.goodsInfo.goodsPayment,insuredValue:""==this.goodsInfo.insuredValue?0:this.goodsInfo.insuredValue,blSpecial:this.goodsInfo.blSpecial,goodsName:this.goodsInfo.goodsName,goodsType:this.goodsInfo.goodsType,paymentType:this.$refs.GoodsInfo.payment_type,productType:this.$refs.GoodsInfo.productType,packingPiece:this.goodsInfo.packingPiece,customerDeliveryBeginTime:this.customerDeliveryBeginTime,customerDeliveryEndTime:this.customerDeliveryEndTime,remark:this.goodsInfo.remark,recMan:this.specEmployee||"",recManCode:this.specEmployeeCode||"",sendSite:this.ownerSite||"",sendSiteCode:this.ownerSiteCode||"",goodsWeight:this.goodsInfo.goodsWeight,dataFrom:"微信"};a.isEdit?(n.openId=a.editData.openId,n.orderBill=a.editData.orderBill,n.groupId=a.editTeamInfo.groupId,n.groupMember=a.editTeamInfo.groupMember,n.sendSite=a.editTeamInfo.sendSite||s.siteName,n.sendSiteCode=a.editTeamInfo.sendSiteCode||s.siteCode,a.editTeamInfo.groupId?(n.customerCode=a.editTeamInfo.customerCode,n.customerName=a.editTeamInfo.customerName):(n.customerCode=a.monthly.customerCode,n.customerName=a.monthly.customerName),this.$api.editBill(n).then((function(t){200==t.code?(e.showToast({icon:"success",title:t.message,duration:5e3}),a.reset_order(),a.jumpSwitchTab(0)):400==t.code&&o.$refs.ydToast.show({title:t.message})}))):(n.openId=a.$getStorageSync("token"),"1"==a.teamModel?(n.groupId=s.groupId,n.groupMember=s.nickName,n.sendSite=s.siteName,n.sendSiteCode=s.siteCode,n.customerCode=s.customerCode,n.customerName=s.customerName):a.userData.customerCode&&(n.customerCode=a.userData.customerCode,n.customerName=a.userData.customerName),D=setTimeout((function(){o.$api.saveBill(n).then((function(t){if(console.log(t),200==t.code){var s=t.data;a.orderBill=t.data,e.showToast({icon:"none",title:t.message,duration:3e3}),a.reset_order(),"下单"==a.titleX?a.jumpSwitchTab(0):a.getOrderPrint(s)}else 400==t.code&&o.$refs.ydToast.show({title:t.message})}))}),1e3))}else e.showToast({icon:"none",title:"请勾选快递协议"});else e.showToast({icon:"none",title:"请填写付款方式"});else e.showToast({icon:"none",title:"请填写物品名称"});else e.showToast({icon:"none",title:"请填写重量信息"});else e.showToast({icon:"none",title:"请先进行实名认证"});else e.showToast({icon:"none",title:"完善收件人详细地址"});else e.showToast({icon:"none",title:"完善收件人省市区"});else e.showToast({icon:"none",title:"完善收件人手机号"});else e.showToast({icon:"none",title:"完善收件人姓名"});else e.showToast({icon:"none",title:"完善寄件人详细地址"});else e.showToast({icon:"none",title:"完善寄件人省市区"});else e.showToast({icon:"none",title:"完善寄件人手机号"});else e.showToast({icon:"none",title:"完善寄件人姓名"});else e.showToast({icon:"none",title:"请填写收件人信息"});else e.showToast({icon:"none",title:"请填写寄件人信息"})}},getOrderPrint:function(e){var t=this,o=this,i={orderBill:e};a.default.getConnectState((function(e){e.state&&200==e.code&&o.$api.getOrderPrint(i).then((function(e){if(console.log(e),200==e.code&&e.data.length>0)return e.data.forEach((function(e,t){var o=[];if(o.push(e.billCode),e.pieceNumber>1&&e.billCodeSub1){var i=e.billCodeSub1.split(";").filter((function(e){return""!=e}));o=o.concat(i)}o.forEach((function(t,o){e.billCode=t;var i=(0,n.default)(s.default["韵达同城联"],e),d=i.join("");a.default.sendCmd(d)}))})),i.blPrint=1,t.$api.updateBlPrint(i);o.reset_order(),o.jumpSwitchTab(0),Promise.reject()})).then((function(e){200==e.code?console.log(e.message):wx.showToast({title:e.message,icon:"none",duration:2e3})}))}),(function(e){o.reset_order()}))},jumpSwitchTab:function(t){getApp().globalData.currentIndex=t,e.switchTab({url:"/pages/tabbar/inquire/index"})},reset_order:function(){this.$refs.GoodsInfo.billCode="",this.addressDataJJ={},this.addressDataSJ={},this.freight="0",this.topayment="0",this.goodsInfo.goodsPayment=0,this.goodsInfo.insuredValue="",this.goodsInfo.blSpecial="",this.specEmployee="",this.specEmployeeCode="",this.ownerSiteCode="",this.ownerSite="",this.customerDeliveryBeginTime="",this.customerDeliveryEndTime="",this.$setStorageSync("sendOrder",{})},echoOrderData:function(){var t,o=this;try{t=JSON.parse(this.$getStorageSync("sendOrder"))}catch(Z){console.log(Z)}if(console.log(t),t||this.isEdit||this.isAgain)if("{}"!=JSON.stringify(this.editData)){var a=this.editData,s=a.sendMan,n=a.sendManMobile,i=a.sendProvince,d=a.sendCity,r=a.sendCounty,c=a.sendManCompany,l=a.sendManAddress,u=a.acceptMan,p=a.acceptManMobile,h=a.acceptProvince,g=a.acceptCity,m=a.acceptCounty,f=a.acceptManCompany,y=a.acceptManAddress,D=a.freight,T=a.topayment,b=a.sendSite,v=a.sendSiteCode,I=a.recMan,S=a.recManCode,J=a.goodsPayment,C=a.insuredValue,w=a.blSpecial,$=a.goodsName,P=a.goodsType,N=a.paymentType,O=a.productType,x=a.packingPiece,k=a.remark,M=a.goodsWeight,E=a.customerDeliveryBeginTime,j=a.customerDeliveryEndTime,B=a.groupId,A=a.groupMember,_=a.customerCode,V=a.customerName,G=this.editData.billCode?this.editData.billCode:"";o.addressDataJJ={provice:i,city:d,country:r,detailAddress:l,name:s,phone:n,company:c},o.addressDataSJ={provice:h,city:g,country:m,detailAddress:y,name:u,phone:p,company:f},o.$nextTick((function(){if(this.$refs.GoodsInfo.billCode=this.isEdit?G:"",this.goodsInfo.goodsPayment=J||0,this.goodsInfo.insuredValue=C||"",this.goodsInfo.blSpecial=w||0,this.goodsInfo.goodsName=$||"",this.goodsInfo.goodsType=P||"",this.$refs.GoodsInfo.payment_type=N||"",this.goodsInfo.packingPiece=x||"",this.goodsInfo.remark=k||"",this.goodsInfo.goodsWeight=M||0,this.specEmployee=I||"",this.specEmployeeCode=S||"",this.ownerSite=b||"",this.ownerSiteCode=v||"",this.freight=D?D+"":"0",this.topayment=T?T+"":"0",this.customerDeliveryBeginTime=E||"",this.customerDeliveryEndTime=j||"",this.isCash="现金"==N,this.editTeamInfo.groupId=B||"",this.editTeamInfo.groupMember=A||"",this.editTeamInfo.sendSite=b||"",this.editTeamInfo.sendSiteCode=v||"",this.$refs.GoodsInfo.productType=O||"",this.editProductType=!!O,B?(this.editTeamInfo.customerCode=_||"",this.editTeamInfo.customerName=V||""):(this.monthly.customerCode=_||"",this.monthly.customerName=V||""),console.log("echo",this.editTeamInfo),E){var t=o.$momm.compareDate(this.customerDeliveryBeginTime.replace(/\-/g,"/"),(o.$momm.getdate()+" 17:01:00").replace(/\-/g,"/")),a=this.customerDeliveryBeginTime.split(" ")[1].split(":")[0];console.log(a),this.$refs.GoodsInfo.expectTime=t?"明天 "+a+":00-"+(a+1)+":00":"今天 "+a+":00-"+(parseInt(a)+1)+":00"}this.isEdit&&e.showToast({icon:"none",title:"地址省份不能修改~",duration:2e3}),o.agree=!0,o.blurValue()}))}else{var W=t,L=(W.billCode,W.addressDataJJ),R=W.addressDataSJ,U=W.goodsPayment,q=W.insuredValue,H=W.blSpecial,X=W.goodsName,F=W.goodsType,K=W.paymentType,Y=W.packingPiece,z=W.remark,Q=W.goodsWeight;0!=Object.keys(L).length&&(this.addressDataJJ=L),this.addressDataSJ=R,this.addressDataSJ.city&&this.checkDispByCity(),o.$nextTick((function(){this.goodsInfo.goodsPayment=U||0,this.goodsInfo.insuredValue=q||"",this.goodsInfo.blSpecial=H||0,this.goodsInfo.goodsName=X||"",this.goodsInfo.goodsType=F||"",this.goodsInfo.packingPiece=Y||"",this.goodsInfo.remark=z||"",this.goodsInfo.goodsWeight=Q||0,this.isCash="现金"==K}))}},setStorageData:function(){if(!this.isEdit){var e={addressDataJJ:this.addressDataJJ,addressDataSJ:this.addressDataSJ,goodsPayment:this.goodsInfo.goodsPayment,insuredValue:this.goodsInfo.insuredValue,blSpecial:this.goodsInfo.blSpecial,goodsName:this.goodsInfo.goodsName,goodsType:this.goodsInfo.goodsType,paymentType:this.$refs.GoodsInfo.payment_type,packingPiece:this.goodsInfo.packingPiece,remark:this.goodsInfo.remark,goodsWeight:this.goodsInfo.goodsWeight,title:this.titleX};this.$setStorageSync("sendOrder",JSON.stringify(e))}}}};t.default=T}).call(this,o("543d")["default"])},2346:function(e,t,o){"use strict";o.r(t);var a=o("1a34"),s=o.n(a);for(var n in a)"default"!==n&&function(e){o.d(t,e,(function(){return a[e]}))}(n);t["default"]=s.a},"43e7":function(e,t,o){"use strict";var a=o("1902"),s=o.n(a);s.a},aaad:function(e,t,o){"use strict";o.r(t);var a=o("14a0"),s=o("2346");for(var n in s)"default"!==n&&function(e){o.d(t,e,(function(){return s[e]}))}(n);o("43e7");var i,d=o("f0c5"),r=Object(d["a"])(s["default"],a["b"],a["c"],!1,null,"a14ecc10",null,!1,a["a"],i);t["default"]=r.exports},da53:function(e,t,o){"use strict";(function(e){o("5e56");a(o("66fd"));var t=a(o("aaad"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=o,e(t.default)}).call(this,o("543d")["createPage"])}},[["da53","common/runtime","common/vendor"]]]);