(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myPrinter/myPrinter"],{"0bc4":function(e,t,n){"use strict";n.r(t);var c=n("f8eb"),o=n("4139");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("34c2");var a,i=n("f0c5"),d=Object(i["a"])(o["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],a);t["default"]=d.exports},3244:function(e,t,n){"use strict";(function(e){n("5e56");c(n("66fd"));var t=c(n("0bc4"));function c(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"34c2":function(e,t,n){"use strict";var c=n("b92d"),o=n.n(c);o.a},4139:function(e,t,n){"use strict";n.r(t);var c=n("99eb"),o=n.n(c);for(var r in c)"default"!==r&&function(e){n.d(t,e,(function(){return c[e]}))}(r);t["default"]=o.a},"99eb":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=d(n("f1fd")),o=(d(n("79f4")),d(n("1239"))),r=n("8a96"),a=n("1d5b"),i=n("26cb");function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={data:function(){return{searchList:[],order_data:[{orderBill:"100009319371",billcode:"29349234982349",registerDate:"2021-5-18",twoCode:"102",threeCode:"T052",fourCode:"01",destinationCenter:"",sendProvince:"广东省",sendCity:"深圳市",sendCounty:"宝安区",sendTown:"新安街道",sendManAddress:"中粮大厦商务公园",sendMan:"张三寄件人",sendManMobile:"131000000000",sendManCompany:"深圳智腾达有限公司",acceptProvince:"广东省",acceptCity:"深圳市",acceptCounty:"西乡区",acceptTown:"测试街道",acceptManAddress:"测试详细地址",acceptMan:"李四收件人",acceptManMobile:"181000100001",acceptManCompany:"测试公司",goodsName:"食品",remark:"韵达同城配相信你的之快"}],pageId:"",blePrint:[],preData:{}}},computed:s({},(0,i.mapGetters)([r.GET_BLE_DATA,r.GET_BLE_DATA_PRINT,r.GET_CONNECT_DEVICEId,r.GET_BLE_DATA_PRINT_LIST])),onLoad:function(e){if(console.log(e.pageId),this.pageId=e.pageId,"ddcx"==this.pageId)try{this.preData=JSON.parse(e.data)}catch(t){console.log(t)}console.log("GET_BLE_DATA_PRINT_LIST",this.GET_BLE_DATA_PRINT_LIST)},onShow:function(){var t=this;e.openBluetoothAdapter({success:function(t){console.log(t),e.getBluetoothAdapterState({success:function(e){console.log(e)}})}}),t.blePrint=t.$getStorageSync("blePrint")||[]},methods:s(s({},(0,i.mapActions)([a.SET_BLE_DATA,a.SET_BLE_DATA_PRINT,a.SET_CONNECT_DEVICEId,a.SET_BLE_DATA_PRINT_LIST])),{},{searchBle:function(){var e=this;wx.getSetting({success:function(t){wx.getSystemInfo({success:function(n){t.authSetting["scope.userLocation"]?n.locationEnabled?e.$throttle((function(){e.openSearchBle()}),500):e.$toast("请开启手机GPS权限再搜索设备"):e.$refs.layerModel.openModal()}})}})},closeBle:function(){c.default.disconnect(),this.searchList=[],this.SET_BLE_DATA({name:"请先连接蓝牙",deviceId:""}),this.SET_BLE_DATA_PRINT({}),this.SET_CONNECT_DEVICEId("")},printBle:function(){var e=["! 0 200 200 840 1\r\n","PW 608 \r\n","GAP-SENSE\r\n","SETMAG 3 3\r\n","T 24 0 90 120 46-56-9952\r\n","SETMAG 1 1\r\n","B 128 2 20 100 50 230 LG45645698713\r\n","SETMAG 1 1 \r\n","T 24 0 180 345 LG45645698713\r\n","SETMAG 0 0 \r\n","ENDML\r\n","SETSP 0\r\n","FORM\r\n","PRINT\r\n"];c.default.getConnectState((function(t){if(t.state&&200==t.code){var n=(0,o.default)(e,{}),r=n.join("");c.default.sendCmd(r)}}))},openSearchBle:function(){var e=this;e.searchList=[],c.default.searchBle((function(t){e.searchList=t}))},connectTo:function(t){var n=this;n.GET_BLE_DATA.deviceId?n.$toast("当前已连接设备,请先手动断开"):c.default.connect(t,(function(t){if(console.log("item",t),200==t.code){n.SET_CONNECT_DEVICEId(t.device.deviceId),n.SET_BLE_DATA({name:t.device.name,deviceId:t.device.deviceId}),n.SET_BLE_DATA_PRINT({name:t.device.name,deviceId:t.device.deviceId});var c=[];n.GET_BLE_DATA_PRINT_LIST.length>0?n.GET_BLE_DATA_PRINT_LIST.forEach((function(e){e.deviceId!=t.device.deviceId&&(c.push({name:t.device.name,deviceId:t.device.deviceId}),n.blePrint=c,console.log(n.blePrint),n.SET_BLE_DATA_PRINT_LIST(c),n.$setStorageSync("blePrint",c))})):(c.push({name:t.device.name,deviceId:t.device.deviceId}),n.blePrint=c,console.log(n.blePrint),n.SET_BLE_DATA_PRINT_LIST(c),n.$setStorageSync("blePrint",c)),console.log(n.GET_BLE_DATA_PRINT_LIST),"ddcx"==n.pageId?setTimeout((function(){getApp().globalData.currentIndex=1,e.switchTab({url:"/pages/tabbar/inquire/index"})}),500):"send"==n.pageId&&setTimeout((function(){e.navigateBack({delta:1})}),500)}}),(function(e){console.log(e)}))}})};t.default=f}).call(this,n("543d")["default"])},b92d:function(e,t,n){},f8eb:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c}));var c={animationAuthModal:function(){return n.e("components/animation-auth-modal/animation-auth-modal").then(n.bind(null,"43e5"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.searchList,(function(t,n){var c=e.__get_orig(t),o=t.name?e._f("filterBleMP")(t.deviceId):null;return{$orig:c,f0:o}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},r=[]}},[["3244","common/runtime","common/vendor"]]]);