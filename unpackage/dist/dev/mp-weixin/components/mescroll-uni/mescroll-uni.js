(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mescroll-uni/mescroll-uni"],{

/***/ 363:
/*!*************************************************************************!*\
  !*** E:/idea-work/imwj/WeChat/components/mescroll-uni/mescroll-uni.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-uni.vue?vue&type=template&id=8f18eaf8& */ 364);
/* harmony import */ var _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-uni.vue?vue&type=script&lang=js& */ 366);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mescroll-uni.vue?vue&type=style&index=0&lang=css& */ 370);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/mescroll-uni/mescroll-uni.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 364:
/*!********************************************************************************************************!*\
  !*** E:/idea-work/imwj/WeChat/components/mescroll-uni/mescroll-uni.vue?vue&type=template&id=8f18eaf8& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mescroll-uni.vue?vue&type=template&id=8f18eaf8& */ 365);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 365:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/idea-work/imwj/WeChat/components/mescroll-uni/mescroll-uni.vue?vue&type=template&id=8f18eaf8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 366:
/*!**************************************************************************************************!*\
  !*** E:/idea-work/imwj/WeChat/components/mescroll-uni/mescroll-uni.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mescroll-uni.vue?vue&type=script&lang=js& */ 367);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 367:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/idea-work/imwj/WeChat/components/mescroll-uni/mescroll-uni.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


















































var _mescrollUni = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni.js */ 368));

var _mescrollUniOption = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni-option.js */ 369));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ??????mescroll-uni.js,??????????????????
// ??????????????????
var MescrollEmpty = function MescrollEmpty() {__webpack_require__.e(/*! require.ensure | components/mescroll-uni/components/mescroll-empty */ "components/mescroll-uni/components/mescroll-empty").then((function () {return resolve(__webpack_require__(/*! ./components/mescroll-empty.vue */ 515));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var MescrollTop = function MescrollTop() {__webpack_require__.e(/*! require.ensure | components/mescroll-uni/components/mescroll-top */ "components/mescroll-uni/components/mescroll-top").then((function () {return resolve(__webpack_require__(/*! ./components/mescroll-top.vue */ 522));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { components: { MescrollEmpty: MescrollEmpty, MescrollTop: MescrollTop }, data: function data() {return { mescroll: { optDown: {}, optUp: {} }, // mescroll??????
      viewId: 'id_' + Math.random().toString(36).substr(2, 16), // ????????????mescroll???id(??????????????????,?????????????????????)
      downHight: 0, //????????????: ????????????
      downRate: 0, // ????????????(inOffset: rate<1; outOffset: rate>=1)
      downLoadType: 0, // ??????????????????: 0(loading???), 1(inOffset), 2(outOffset), 3(showLoading), 4(endDownScroll)
      upLoadType: 0, // ??????????????????: 0(loading???), 1loading???, 2???????????????,??????END????????????, 3(???????????????,?????????END????????????)
      isShowEmpty: false, // ?????????????????????
      isShowToTop: false, // ??????????????????????????????
      scrollTop: 0, // ??????????????????
      scrollAnim: false, // ????????????????????????
      windowTop: 0, // ??????????????????????????????
      windowBottom: 0, // ??????????????????????????????
      windowHeight: 0, // ????????????????????????
      statusBarHeight: 0, // ???????????????
      scrollToViewId: '' // ???????????????view???id
    };}, props: { down: Object, // ???????????????????????????
    up: Object, // ???????????????????????????
    top: [String, Number], // ?????????????????????????????? (??????20, "20rpx", "20px", "20%"????????????, ??????????????????????????????rpx, ?????????????????????windowHeight)
    topbar: [Boolean, String], // top???????????????????????????????????????, ??????false (????????????:????????????????????????,???????????????????????????????????????, ???????????????????????????,?????????,?????????,??????)
    bottom: [String, Number], // ?????????????????????????????? (??????20, "20rpx", "20px", "20%"????????????, ??????????????????????????????rpx, ?????????????????????windowHeight)
    safearea: Boolean, // bottom????????????????????????????????????????????????, ??????false (????????????iPhoneX?????????)
    fixed: { // ????????????fixed??????mescroll?????????, ??????true
      type: Boolean, default: true }, height: [String, Number], // ??????mescroll?????????, ????????????,????????????fixed. (??????20, "20rpx", "20px", "20%"????????????, ??????????????????????????????rpx, ?????????????????????windowHeight)
    bottombar: { // ??????????????????TabBar?????????(????????????H5??????tab?????????)
      type: Boolean, default: true } }, computed: { // ????????????fixed?????? (???height??????,????????????)
    isFixed: function isFixed() {return !this.height && this.fixed;}, // mescroll?????????
    scrollHeight: function scrollHeight() {if (this.isFixed) {return "auto";} else if (this.height) {return this.toPx(this.height) + 'px';} else {return "100%";}}, // ????????????????????????????????? (px)
    numTop: function numTop() {return this.toPx(this.top);}, fixedTop: function fixedTop() {return this.isFixed ? this.numTop + this.windowTop + 'px' : 0;}, padTop: function padTop() {return !this.isFixed ? this.numTop + 'px' : 0;}, // ???????????????????????? (px)
    numBottom: function numBottom() {return this.toPx(this.bottom);}, fixedBottom: function fixedBottom() {return this.isFixed ? this.numBottom + this.windowBottom + 'px' : 0;}, padBottom: function padBottom() {
      return !this.isFixed ? this.numBottom + 'px' : 0;
    },
    // ??????????????????????????????
    isDownReset: function isDownReset() {
      return this.downLoadType === 3 || this.downLoadType === 4;
    },
    // ??????
    transition: function transition() {
      return this.isDownReset ? 'transform 300ms' : '';
    },
    translateY: function translateY() {
      return this.downHight > 0 ? 'translateY(' + this.downHight + 'px)' : ''; // transform??????fixed??????,????????????fixed????????????mescroll??????
    },
    // ?????????????????????
    scrollable: function scrollable() {
      return this.downLoadType === 0 || this.isDownReset;
    },
    // ??????????????????
    isDownLoading: function isDownLoading() {
      return this.downLoadType === 3;
    },
    // ???????????????
    downRotate: function downRotate() {
      return 'rotate(' + 360 * this.downRate + 'deg)';
    },
    // ????????????
    downText: function downText() {
      switch (this.downLoadType) {
        case 1:return this.mescroll.optDown.textInOffset;
        case 2:return this.mescroll.optDown.textOutOffset;
        case 3:return this.mescroll.optDown.textLoading;
        case 4:return this.mescroll.optDown.textLoading;
        default:return this.mescroll.optDown.textInOffset;}

    } },

  methods: {
    //number,rpx,upx,px,% --> px?????????
    toPx: function toPx(num) {
      if (typeof num === "string") {
        if (num.indexOf('px') !== -1) {
          if (num.indexOf('rpx') !== -1) {// "10rpx"
            num = num.replace('rpx', '');
          } else if (num.indexOf('upx') !== -1) {// "10upx"
            num = num.replace('upx', '');
          } else {// "10px"
            return Number(num.replace('px', ''));
          }
        } else if (num.indexOf('%') !== -1) {
          // ????????????,????????????windowHeight,???"10%"?????????windowHeight???10%
          var rate = Number(num.replace("%", "")) / 100;
          return this.windowHeight * rate;
        }
      }
      return num ? uni.upx2px(Number(num)) : 0;
    },
    //????????????????????????,?????????????????????????????????
    scroll: function scroll(e) {var _this = this;
      this.mescroll.scroll(e.detail, function () {
        _this.$emit('scroll', _this.mescroll); // ????????????????????? this.mescroll.scrollTop?????????????????????; this.mescroll.isScrollUp????????????????????????
      });
    },
    //????????????touchstart??????,??????????????????
    touchstartEvent: function touchstartEvent(e) {
      this.mescroll.touchstartEvent(e);
    },
    //????????????touchmove??????,??????????????????
    touchmoveEvent: function touchmoveEvent(e) {
      this.mescroll.touchmoveEvent(e);
    },
    //????????????touchend??????,??????????????????
    touchendEvent: function touchendEvent(e) {
      this.mescroll.touchendEvent(e);
    },
    // ??????????????????????????????
    emptyClick: function emptyClick() {
      this.$emit('emptyclick', this.mescroll);
    },
    // ?????????????????????????????????
    toTopClick: function toTopClick() {
      this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration); // ??????????????????
      this.$emit('topclick', this.mescroll); // ???????????????????????????????????????
    },
    // ??????????????????????????? (???????????????????????????,??????????????????)
    setClientHeight: function setClientHeight() {var _this2 = this;
      if (this.mescroll.getClientHeight(true) === 0 && !this.isExec) {
        this.isExec = true; // ??????????????????
        this.$nextTick(function () {// ??????dom?????????
          var query = uni.createSelectorQuery();

          query = query.in(_this2); // ???????????????????????????in(this),?????????????????????????????????in(this), ?????????????????????

          var view = query.select('#' + _this2.viewId);
          view.boundingClientRect(function (data) {
            _this2.isExec = false;
            if (data) {
              _this2.mescroll.setClientHeight(data.height);
            } else if (_this2.clientNum != 3) {// ??????????????????,??????dom??????????????????,????????????,????????????3???
              _this2.clientNum = _this2.clientNum == null ? 1 : _this2.clientNum + 1;
              setTimeout(function () {
                _this2.setClientHeight();
              }, _this2.clientNum * 100);
            }
          }).exec();
        });
      }
    } },

  // ??????created?????????mescroll??????; ?????????mounted??????css???????????????H5?????????
  created: function created() {
    var vm = this;

    var diyOption = {
      // ?????????????????????
      down: {
        inOffset: function inOffset(mescroll) {
          vm.downLoadType = 1; // ?????????????????????offset??????????????????????????? (?????????mescroll?????????,???????????????)
        },
        outOffset: function outOffset(mescroll) {
          vm.downLoadType = 2; // ?????????????????????offset?????????????????? (?????????mescroll?????????,???????????????)
        },
        onMoving: function onMoving(mescroll, rate, downHight) {
          // ????????????????????????,???????????????????????????;
          vm.downHight = downHight; // ??????????????????????????? (?????????mescroll?????????,???????????????)
          vm.downRate = rate; //???????????? (inOffset: rate<1; outOffset: rate>=1)
        },
        showLoading: function showLoading(mescroll, downHight) {
          vm.downLoadType = 3; // ????????????????????????????????? (?????????mescroll?????????,???????????????)
          vm.downHight = downHight; // ??????????????????????????? (?????????mescroll?????????,???????????????)
        },
        endDownScroll: function endDownScroll(mescroll) {
          vm.downLoadType = 4; // ???????????? (?????????mescroll?????????,???????????????)
          vm.downHight = 0; // ??????????????????????????? (?????????mescroll?????????,???????????????)
          vm.downResetTimer && clearTimeout(vm.downResetTimer);
          vm.downResetTimer = setTimeout(function () {// ???????????????????????????,????????????0?????????,????????????this.transition,??????iOS??????????????????????????????
            vm.downLoadType = 0;
          }, 300);
        },
        // ???????????????????????????
        callback: function callback(mescroll) {
          vm.$emit('down', mescroll);
        } },

      // ?????????????????????
      up: {
        // ????????????????????????
        showLoading: function showLoading() {
          vm.upLoadType = 1;
        },
        // ??????????????????????????????
        showNoMore: function showNoMore() {
          vm.upLoadType = 2;
        },
        // ???????????????????????????
        hideUpScroll: function hideUpScroll(mescroll) {
          vm.upLoadType = mescroll.optUp.hasNext ? 0 : 3;
        },
        // ?????????
        empty: {
          onShow: function onShow(isShow) {// ?????????????????????
            vm.isShowEmpty = isShow;
          } },

        // ????????????
        toTop: {
          onShow: function onShow(isShow) {// ?????????????????????
            vm.isShowToTop = isShow;
          } },

        // ???????????????????????????
        callback: function callback(mescroll) {
          vm.$emit('up', mescroll);
          // ????????????????????? (???mescroll?????????)
          vm.setClientHeight();
        } } };



    _mescrollUni.default.extend(diyOption, _mescrollUniOption.default); // ?????????????????????
    var myOption = JSON.parse(JSON.stringify({
      'down': vm.down,
      'up': vm.up }));
    // ?????????,?????????props?????????
    _mescrollUni.default.extend(myOption, diyOption); // ???????????????????????????

    // ?????????MeScroll??????
    vm.mescroll = new _mescrollUni.default(myOption);
    vm.mescroll.viewId = vm.viewId; // ??????id
    // init??????mescroll??????
    vm.$emit('init', vm.mescroll);

    // ????????????
    var sys = uni.getSystemInfoSync();
    if (sys.windowTop) vm.windowTop = sys.windowTop;
    if (sys.windowBottom) vm.windowBottom = sys.windowBottom;
    if (sys.windowHeight) vm.windowHeight = sys.windowHeight;
    if (sys.statusBarHeight) vm.statusBarHeight = sys.statusBarHeight;
    // ???down???bottomOffset??????
    vm.mescroll.setBodyHeight(sys.windowHeight);

    // ??????????????????scrollview,??????????????????scrollTo
    vm.mescroll.resetScrollTo(function (y, t) {
      vm.scrollAnim = t !== 0; // t???0,????????????????????????
      if (typeof y === 'string') {// ?????????????????????????????????,?????????scroll-into-view

        // ???????????????????????????slot?????????scroll-into-view,????????????????????????
        uni.createSelectorQuery().select('#' + vm.viewId).boundingClientRect(function (rect) {
          var mescrollTop = rect.top; // mescroll??????????????????
          uni.createSelectorQuery().select('#' + y).boundingClientRect(function (rect) {
            var curY = vm.mescroll.getScrollTop();
            var top = rect.top - mescrollTop;
            top += curY;
            if (!vm.isFixed) top -= vm.numTop;
            vm.scrollTop = curY;
            vm.$nextTick(function () {
              vm.scrollTop = top;
            });
          }).exec();
        }).exec();












        return;
      }
      var curY = vm.mescroll.getScrollTop();
      if (t === 0 || t === 300) {// ???t?????????????????????300???,????????????????????????????????????
        vm.scrollTop = curY;
        vm.$nextTick(function () {
          vm.scrollTop = y;
        });
      } else {
        vm.mescroll.getStep(curY, y, function (step) {// ????????????????????????t
          vm.scrollTop = step;
        }, t);
      }
    });

    // ??????????????????????????????up.toTop.safearea,?????????vue???safearea???
    if (vm.up && vm.up.toTop && vm.up.toTop.safearea != null) {} else {
      vm.mescroll.optUp.toTop.safearea = vm.safearea;
    }
  },
  mounted: function mounted() {
    // ?????????????????????
    this.setClientHeight();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 370:
/*!**********************************************************************************************************!*\
  !*** E:/idea-work/imwj/WeChat/components/mescroll-uni/mescroll-uni.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mescroll-uni.vue?vue&type=style&index=0&lang=css& */ 371);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 371:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/idea-work/imwj/WeChat/components/mescroll-uni/mescroll-uni.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/mescroll-uni/mescroll-uni.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mescroll-uni/mescroll-uni-create-component',
    {
        'components/mescroll-uni/mescroll-uni-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(363))
        })
    },
    [['components/mescroll-uni/mescroll-uni-create-component']]
]);
