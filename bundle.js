/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\n\nh1 {\n\tfont-size: 2rem;\n\tfont-family: monospace;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tbackground-color: rgb(0, 0, 0);\n\tborder: 1px solid #ffacac;\n\tanimation: blinkingBorder 2s infinite;\n}\n\n/* A subtle blinking border color */\n@keyframes blinkingBorder {\n\t0% {\n\t\tborder-color: #f56ce2;\n\t}\n\n\t25% {\n\t\tborder-color: #786cf5;\n\t}\n\n\t50% {\n\t\tborder-color: #acfcff;\n\t}\n\n\t70% {\n\t\tborder-color: #e4ffac;\n\t}\n\n\t100% {\n\t\tborder-color: #ffacac;\n\t}\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 0px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\n\nh1 {\n\tfont-size: 2rem;\n\tfont-family: monospace;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tbackground-color: rgb(0, 0, 0);\n\tborder: 1px solid #ffacac;\n\tanimation: blinkingBorder 2s infinite;\n}\n\n/* A subtle blinking border color */\n@keyframes blinkingBorder {\n\t0% {\n\t\tborder-color: #f56ce2;\n\t}\n\n\t25% {\n\t\tborder-color: #786cf5;\n\t}\n\n\t50% {\n\t\tborder-color: #acfcff;\n\t}\n\n\t70% {\n\t\tborder-color: #e4ffac;\n\t}\n\n\t100% {\n\t\tborder-color: #ffacac;\n\t}\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 0px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/city-watchlist.js":
/*!*******************************!*\
  !*** ./src/city-watchlist.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCityToWatchlist": () => (/* binding */ addCityToWatchlist),
/* harmony export */   "addListenerToButton": () => (/* binding */ addListenerToButton),
/* harmony export */   "displayAvailableWatchlist": () => (/* binding */ displayAvailableWatchlist),
/* harmony export */   "watchlist": () => (/* binding */ watchlist)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _icons_addcity_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/addcity.png */ "./src/icons/addcity.png");
/* harmony import */ var _icons_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/delete.png */ "./src/icons/delete.png");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");






function watchlist() {
	const watchlistDiv = document.body.childNodes[2].childNodes[2],
		watchlistHeader = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("h2"),
		cityList = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("ul"),
		addCityButton = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("li", { class: "add-button" }),
		watchlistInput = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("input", {
			class: "watchlist-input",
			type: "search",
			placeholder: "Add City",
		}),
		MyAddIcon = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { class: "add-icon", src: _icons_addcity_png__WEBPACK_IMPORTED_MODULE_2__ });

	addCityButton.append(MyAddIcon, watchlistInput);
	watchlistHeader.textContent = "Watchlist";
	cityList.append(addCityButton);
	watchlistDiv.append(watchlistHeader, cityList);
}

function addCityToWatchlist(response) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		cityList = document.body.childNodes[2].childNodes[2].childNodes[1],
		watchlistInput = addCityButton.children[1],
		iconAndCityName = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div"),
		city = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("li", { class: "city" }),
		temp = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		cityName = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		descIcon = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img"),
		myDelete = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { class: "delete", src: _icons_delete_png__WEBPACK_IMPORTED_MODULE_3__ });

	cityName.textContent = `${watchlistInput.value}`;
	if (this === document) iconAndCityName.append(descIcon, cityName);
	else iconAndCityName.append(descIcon, this);

	temp.append(` ${response.current.temp}`);
	getIconAndTemp(city, iconAndCityName, descIcon, response, temp, myDelete);
	cityList.insertBefore(city, addCityButton);
	addEventListenerToCity(myDelete, city);
	if (
		document.body.childNodes[2].childNodes[2].lastChild.className ===
		"loader-container-watchlist"
	)
		_fetch_data__WEBPACK_IMPORTED_MODULE_1__.clearScreenLoader.call(document);
}

function addEventListenerToCity(myDelete, city) {
	myDelete.addEventListener("click", () => {
		let listArray = Array.from(document.querySelectorAll(".city"));
		let indexOfCity = listArray.indexOf(myDelete.parentNode);
		_local_storage__WEBPACK_IMPORTED_MODULE_4__.watchlistArray.splice(indexOfCity, 1);
		(0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.setwatchlistArray)();
		myDelete.parentNode.parentNode.removeChild(myDelete.parentNode);
	});
	city.addEventListener("mouseenter", () =>
		myDelete.classList.add("show-delete")
	);
	city.addEventListener("mouseleave", () =>
		myDelete.classList.remove("show-delete")
	);
}

function getIconAndTemp(
	city,
	iconAndCityName,
	descIcon,
	response,
	temp,
	myDelete
) {
	const watchlistInput =
		document.body.childNodes[2].childNodes[2].childNodes[1].lastChild
			.childNodes[1];
	city.append(iconAndCityName, temp, myDelete);
	descIcon.src = `https://openweathermap.org/img/w/${response.current.weather[0].icon}.png`;
	watchlistInput.value = "";
}

function addListenerToButton() {
	document.addEventListener("click", addEventListeners);
}

function addEventListeners(e) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		headerInput = document.body.children[0].children[1].children[0],
		headerButton = document.body.children[0].children[1].children[1],
		watchlistInput = addCityButton.childNodes[1];

	if (e.target.className == "add-icon")
		watchlistInput.value.trim() === ""
			? false
			: _local_storage__WEBPACK_IMPORTED_MODULE_4__.watchlistArray.push(watchlistInput.value),
			(0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.setwatchlistArray)(),
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.screenLoader.call(document),
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData.apply(document.body, [
				addCityToWatchlist.bind(document),
				_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat,
				watchlistInput.value,
				false,
				_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName,
			]);

	document.querySelectorAll(".city").forEach((cityList) => {
		if (
			e.target == cityList ||
			e.target == cityList.children[0] ||
			e.target == cityList.children[1] ||
			e.target == cityList.children[0].children[1] ||
			e.target == cityList.children[0].children[0]
		) {
			(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.screenLoader)();
			const city = cityList.childNodes[0].childNodes[1].textContent;
			(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getData, _fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat, city, false, _fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName);
		}
	});

	if (e.target === headerButton) {
		(0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.newName)(headerInput.value);
		(0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.setCityName)();
		(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.screenLoader)();
		(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getData,
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat,
			headerInput.value,
			headerInput,
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName
		);
	}
}

function delayExecution(city) {
	const fetchNow = (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(
		addCityToWatchlist.bind(city),
		_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat,
		city,
		false,
		_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName
	);
	return new Promise((resolve) => {
		setTimeout(() => resolve(fetchNow), 1200);
	});
}

async function displayAvailableWatchlist() {
	if (_local_storage__WEBPACK_IMPORTED_MODULE_4__.watchlistArray.length > 0)
		for (const city of _local_storage__WEBPACK_IMPORTED_MODULE_4__.watchlistArray) {
			await delayExecution(city);
		}
}




/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_TOKEN": () => (/* binding */ API_TOKEN)
/* harmony export */ });
const API_TOKEN = {
	KEY: "c93fd1817f3fbe42aeac0a63076603b9",
	KEY2: "0ad713fac120b83bd907261fb7742fd7",
	KEY3: "20f7632ffc2c022654e4093c6947b4f4",
	UNSPLASH_ACCESS_KEY: "kdFqjbhciIFIb0lDefI2I4zqRbAjPa13ZGu0djnuns4",
	UNSPLASH_SECRET_KEY: "epkyCXogHqd8k2uX7oAradl1p442Dcf-DI8Iv7VETw8",
};

/***/ }),

/***/ "./src/create-dom-element.js":
/*!***********************************!*\
  !*** ./src/create-dom-element.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomElement": () => (/* binding */ createDomElement)
/* harmony export */ });
/**
 * Helper function for creating DOM Elements
 */

function createDomElement(type, attributes) {
	const newElement = document.createElement(`${type}`);
	if (attributes == null) return newElement;
	setAttributes(newElement, attributes);
	return newElement;
}

function setAttributes(element, attributes) {
	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});
}



/***/ }),

/***/ "./src/fetch-data.js":
/*!***************************!*\
  !*** ./src/fetch-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearScreenLoader": () => (/* binding */ clearScreenLoader),
/* harmony export */   "getCountryName": () => (/* binding */ getCountryName),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getLonAndLat": () => (/* binding */ getLonAndLat),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "screenLoader": () => (/* binding */ screenLoader)
/* harmony export */ });
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-main */ "./src/page-main.js");
/* harmony import */ var _seven_days_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seven-days-forecast */ "./src/seven-days-forecast.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");





let countryAndCityName;
let countryAndCityName2;
const exclude = `&units=metric&APPID=${_config__WEBPACK_IMPORTED_MODULE_2__.API_TOKEN.KEY}`,
	exclude2 = `&exclude=minutely,hourly,alerts&units=metric&appid=${_config__WEBPACK_IMPORTED_MODULE_2__.API_TOKEN.KEY}`;

function getWeatherData(func, cb, cityName, headerInput, getName) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}${exclude}`,
		{
			mode: "cors",
		}
	)
		.then((response) => response.json())
		.then((response) => {
			const { lat } = response.coord;
			const { lon } = response.coord;
			getName.call(this, response);
			cb(lat, lon, func, headerInput);
		})
		.catch((error) => console.log(error));
}

function getLonAndLat(lat, lon, callback, headerInput) {
	next7DaysForecast(lat, lon, callback, headerInput);
}

function next7DaysForecast(lat, lon, callback, headerInput) {
	fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${exclude2}`
	)
		.then((response) => response.json())
		.then((response) => {
			callback(response, headerInput);
		});
}

function getData(response, headerInput) {
	let weatherDesc = response.current.weather[0].description;
	console.log(weatherDesc);
	const todayDataDiv = document.body.childNodes[2].childNodes[0],
		next7DaysDiv = document.body.childNodes[2].childNodes[1];
	clearData(todayDataDiv);
	clearData(next7DaysDiv);
	displayWeatherReport.call(this, response);
	display7DaysForecast(response);
	if (headerInput.value) headerInput.value = "";
	getWeatherImage(weatherDesc);
}

function clearData(div) {
	while (div.firstChild) div.removeChild(div.firstChild);
}

function display7DaysForecast(response) {
	for (let i = 1; i < response.daily.length; i++)
		(0,_seven_days_forecast__WEBPACK_IMPORTED_MODULE_1__.createForecastCard)(response.daily[i]);
	clearScreenLoader();
}

function displayWeatherReport(response) {
	const [
		weatherDesc,
		descIcon,
		nameOfCity,
		temperature,
		lowTemp,
		highTemp,
		feelsLikeTemp,
	] = (0,_page_main__WEBPACK_IMPORTED_MODULE_0__.dataDisplay)();
	const [wind, dewPoint, timeZone, uvIndex, pressure, humidity] =
		(0,_page_main__WEBPACK_IMPORTED_MODULE_0__.minorDataReport)();

	if (this === document) nameOfCity.textContent = countryAndCityName;
	else nameOfCity.textContent = countryAndCityName2;
	weatherDesc.textContent = `${response.current.weather[0].description}`;
	lowTemp.append("Low: ", parseInt(response.daily[0].temp.min), (0,_page_main__WEBPACK_IMPORTED_MODULE_0__.superScript)());
	highTemp.append(
		"High: ",
		parseInt(response.daily[0].temp.max),
		(0,_page_main__WEBPACK_IMPORTED_MODULE_0__.superScript)()
	);
	temperature.append(parseInt(response.current.temp), (0,_page_main__WEBPACK_IMPORTED_MODULE_0__.superScript)());
	feelsLikeTemp.append(
		"Feels Like ",
		parseInt(response.current.feels_like),
		(0,_page_main__WEBPACK_IMPORTED_MODULE_0__.superScript)()
	);
	wind.append(`Wind Speed: ${response.current.wind_speed}`);
	dewPoint.append(`Dew Point: ${response.current.dew_point}`);
	timeZone.append(`time Zone: ${response.timezone}`);
	uvIndex.append(`UV Index: ${response.current.uvi}`);
	pressure.append(`Pressure: ${response.current.pressure}`);
	humidity.append(`Humidity: ${response.current.humidity}`);
	descIcon.src = `https://openweathermap.org/img/w/${response.current.weather[0].icon}.png`;
}

function getCountryName(response) {
	if (this === document) {
		const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
		const countryName = regionNames.of(response.sys.country);
		if (countryName == response.name) countryAndCityName = countryName;
		else countryAndCityName = `${response.name}, ${countryName}.`;
	} else {
		const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
		const countryName = regionNames.of(response.sys.country);
		if (countryName == response.name) countryAndCityName2 = countryName;
		else countryAndCityName2 = `${response.name}, ${countryName}.`;
	}
}

function screenLoader() {
	if (this === document) {
		const [loaderContainer] = createLoader(
			"loader-watchlist",
			"loader-container-watchlist"
		);
		document.body.childNodes[2].childNodes[2].append(loaderContainer);
	} else {
		const [loaderContainer] = createLoader("loader", "loader-container");
		document.body.append(loaderContainer);
	}
}

function clearScreenLoader() {
	if (this === document)
		document.body.childNodes[2].childNodes[2].removeChild(
			document.body.childNodes[2].childNodes[2].lastChild
		);
	else document.body.lastChild.parentNode.removeChild(document.body.lastChild);
}

function createLoader(loaderClass, loaderDivClass) {
	const loaderContainer = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("div", {
		class: loaderDivClass,
	});
	const loader = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("div", { class: loaderClass });
	loaderContainer.append(loader);
	return [loaderContainer];
}

function getWeatherImage(weatherDesc) {
	fetch(
		`https://api.unsplash.com/search/photos?query=${weatherDesc}&per_page=1&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`,
		{ mode: "cors" }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			console.log(response.results[0].urls.raw);
			// eslint-disable-next-line quotes
			document.body.children[1].children[0].style.background = `url(${response.results[0].urls.raw})`;
		});
}




/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cityName": () => (/* binding */ cityName),
/* harmony export */   "newName": () => (/* binding */ newName),
/* harmony export */   "setCityName": () => (/* binding */ setCityName),
/* harmony export */   "setwatchlistArray": () => (/* binding */ setwatchlistArray),
/* harmony export */   "watchlistArray": () => (/* binding */ watchlistArray)
/* harmony export */ });
if (localStorage.getItem("cityName") === null)
	localStorage.setItem("cityName", JSON.stringify("Port Harcourt"));

let cityName = JSON.parse(localStorage.getItem("cityName"));

function newName(setName) {
	cityName = setName;
}

function setCityName() {
	localStorage.setItem("cityName", JSON.stringify(cityName));
}

if (localStorage.getItem("watchlistArray") == null)
	localStorage.setItem("watchlistArray", JSON.stringify([]));

let watchlistArray = JSON.parse(localStorage.getItem("watchlistArray"));

function setwatchlistArray() {
	localStorage.setItem("watchlistArray", JSON.stringify(watchlistArray));
}



/***/ }),

/***/ "./src/page-footer.js":
/*!****************************!*\
  !*** ./src/page-footer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createfooter": () => (/* binding */ createfooter)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");


/**
 * Function for creating footer
 */
function createfooter() {
	const footer = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("footer");
	const anchorLink = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("a", {
		href: "https://github.com/IAmYoungbossy/weather-app",
	});
	const gitHubIcon = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("i", { fa: "fa-github" });
	const iconsCredit = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p");
	const flatIconAnchor = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("a", {
		target: "_blank",
		href: "https://www.flaticon.com/",
	});
	const icons8Anchor = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("a", {
		target: "_blank",
		href: "https://icons8.com/",
	});

	flatIconAnchor.textContent = " Flaticon ";
	icons8Anchor.textContent = " Icons8 ";
	iconsCredit.append("Icons by", flatIconAnchor, " & ", icons8Anchor);
	anchorLink.appendChild(gitHubIcon);
	footer.append(
		"Copyright \u00A9 2022 IAmYoungbossy",
		"  ",
		anchorLink,
		iconsCredit
	);
	document.body.appendChild(footer);
}



/***/ }),

/***/ "./src/page-header.js":
/*!****************************!*\
  !*** ./src/page-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");


function createHeader() {
	const header = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("header");
	const searchDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "search-div" });
	const searchBar = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("input", {
		type: "search",
		placeholder: "Enter City Name",
	});
	const searchButton = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("button", { type: "button" });
	const headerTitleDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "title-div" });
	const headerTitle = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("h1");

	searchButton.textContent = "Search";
	headerTitle.textContent = "CityWatch";

	searchDiv.append(searchBar, searchButton);
	headerTitleDiv.append(headerTitle);
	header.append(headerTitleDiv, searchDiv);
	document.body.append(header);
}



/***/ }),

/***/ "./src/page-main.js":
/*!**************************!*\
  !*** ./src/page-main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainContents": () => (/* binding */ createMainContents),
/* harmony export */   "dataDisplay": () => (/* binding */ dataDisplay),
/* harmony export */   "minorDataReport": () => (/* binding */ minorDataReport),
/* harmony export */   "superScript": () => (/* binding */ superScript)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");
/* harmony import */ var _icons_date_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/date.png */ "./src/icons/date.png");
/* harmony import */ var _icons_humidity_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/humidity.png */ "./src/icons/humidity.png");
/* harmony import */ var _icons_pressure_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/pressure.png */ "./src/icons/pressure.png");
/* harmony import */ var _icons_timezone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/timezone.png */ "./src/icons/timezone.png");
/* harmony import */ var _icons_wind_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/wind.png */ "./src/icons/wind.png");
/* harmony import */ var _icons_sealevel_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/sealevel.png */ "./src/icons/sealevel.png");








function createMainContents() {
	const mainDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("main", { class: "main" });
	createTodayForecastContainer(mainDiv);
	createNextdaysContainerDiv(mainDiv);
	getWatchlist(mainDiv);
	document.body.append(mainDiv);
}

function createTodayForecastContainer(mainDiv) {
	const todayDataDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "today-data-div" });
	mainDiv.append(todayDataDiv);
}

function createNextdaysContainerDiv(mainDiv) {
	const next7DaysDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "next-7days-div" });
	mainDiv.append(next7DaysDiv);
}

function getWatchlist(mainDiv) {
	const watchlistDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "watchlist-div" });
	mainDiv.append(watchlistDiv);
}

function minorDataReport() {
	const minorDataDiv = document.body.childNodes[2].childNodes[0].childNodes[3],
		windDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "wind-div" }),
		wind = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "wind" }),
		dewPointDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "dew-point-div" }),
		dewPoint = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "dew-point" }),
		timeZoneDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "time-zone-div" }),
		timeZone = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "time-zone" }),
		uvIndexDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "uv-index-div" }),
		uvIndex = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "uv-index" }),
		pressureDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "pressure-div" }),
		pressure = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "pressure" }),
		humidityDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "humidity-div" }),
		humidity = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "humidity" }),
		MyDate = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { src: _icons_date_png__WEBPACK_IMPORTED_MODULE_1__ }),
		MyHumidity = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { src: _icons_humidity_png__WEBPACK_IMPORTED_MODULE_2__ }),
		MyPressure = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { src: _icons_pressure_png__WEBPACK_IMPORTED_MODULE_3__ }),
		MyTimezone = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { src: _icons_timezone_png__WEBPACK_IMPORTED_MODULE_4__ }),
		MySeaLevel = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { src: _icons_sealevel_png__WEBPACK_IMPORTED_MODULE_6__ }),
		MyWind = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { src: _icons_wind_png__WEBPACK_IMPORTED_MODULE_5__ });

	windDiv.append(MyWind, wind);
	dewPointDiv.append(MySeaLevel, dewPoint);
	timeZoneDiv.append(MyTimezone, timeZone);
	uvIndexDiv.append(MyDate, uvIndex);
	pressureDiv.append(MyPressure, pressure);
	humidityDiv.append(MyHumidity, humidity);
	minorDataDiv.append(
		windDiv,
		dewPointDiv,
		timeZoneDiv,
		uvIndexDiv,
		pressureDiv,
		humidityDiv
	);
	return [wind, dewPoint, timeZone, uvIndex, pressure, humidity];
}

function superScript() {
	const supScript = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("sup", { class: "super-script" });
	const supScript2 = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("sup", { class: "super-script" });
	supScript.textContent = "o";
	supScript2.append(supScript, "C");
	return supScript2;
}

function dataDisplay() {
	const todayDataDiv = document.body.childNodes[2].childNodes[0];
	const weatherDesc = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "weather-desc" }),
		nameOfCity = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("h2", { class: "name-of-city" }),
		descIcon = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { class: "desc-icon" }),
		tempDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "temp-div" }),
		tempRange = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "temp-range" }),
		highTemp = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "high-temp" }),
		lowTemp = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "low-temp" }),
		feelsLikeTemp = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "feels-like-temp" }),
		temperatureDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "temperature-div" }),
		temperature = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "temperature" }),
		minorDataDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "minor-data-div" });

	tempRange.append(lowTemp, highTemp);
	temperatureDiv.append(temperature, descIcon);
	tempDiv.append(tempRange, temperatureDiv, feelsLikeTemp);
	todayDataDiv.append(weatherDesc, nameOfCity, tempDiv, minorDataDiv);

	return [
		weatherDesc,
		descIcon,
		nameOfCity,
		temperature,
		lowTemp,
		highTemp,
		feelsLikeTemp,
	];
}




/***/ }),

/***/ "./src/seven-days-forecast.js":
/*!************************************!*\
  !*** ./src/seven-days-forecast.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForecastCard": () => (/* binding */ createForecastCard)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");


function createForecastCard(daily) {
	const next7DaysDiv = document.body.childNodes[2].childNodes[1],
		card = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "card" }),
		dayAndDesc = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div"),
		iconDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "icon-div" }),
		tempDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div"),
		day = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		weatherDesc = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		weatherDescIcon = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img"),
		lowTemp = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		highTemp = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p");

	const date = new Date(daily.dt * 1000);
	const weekday = date.toLocaleString("en-us", { weekday: "long" });

	day.textContent = `${weekday}`;
	weatherDesc.textContent = `${daily.weather[0].description}`;
	weatherDescIcon.src = `https://openweathermap.org/img/w/${daily.weather[0].icon}.png`;
	highTemp.textContent = `${daily.temp.max}`;
	lowTemp.textContent = `${daily.temp.max}`;
	dayAndDesc.append(day, weatherDesc);
	tempDiv.append(highTemp, lowTemp);
	iconDiv.append(weatherDescIcon, tempDiv);
	card.append(dayAndDesc, iconDiv);
	next7DaysDiv.append(card);
}



/***/ }),

/***/ "./src/icons/addcity.png":
/*!*******************************!*\
  !*** ./src/icons/addcity.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2253ee1fff5723e4d77d.png";

/***/ }),

/***/ "./src/icons/date.png":
/*!****************************!*\
  !*** ./src/icons/date.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f60a219b80faa53710fb.png";

/***/ }),

/***/ "./src/icons/delete.png":
/*!******************************!*\
  !*** ./src/icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8470a119dea472af12c.png";

/***/ }),

/***/ "./src/icons/humidity.png":
/*!********************************!*\
  !*** ./src/icons/humidity.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e938000380b8f5aed89.png";

/***/ }),

/***/ "./src/icons/pressure.png":
/*!********************************!*\
  !*** ./src/icons/pressure.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e265fce443e99518fe2e.png";

/***/ }),

/***/ "./src/icons/sealevel.png":
/*!********************************!*\
  !*** ./src/icons/sealevel.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80a6370a6d7cb2734ef7.png";

/***/ }),

/***/ "./src/icons/timezone.png":
/*!********************************!*\
  !*** ./src/icons/timezone.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a832ba5393a2856285a.png";

/***/ }),

/***/ "./src/icons/wind.png":
/*!****************************!*\
  !*** ./src/icons/wind.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dccd203afdfe8934811.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header */ "./src/page-header.js");
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _page_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-footer */ "./src/page-footer.js");
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-main */ "./src/page-main.js");
/* harmony import */ var _city_watchlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city-watchlist */ "./src/city-watchlist.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");








(0,_page_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
(0,_page_main__WEBPACK_IMPORTED_MODULE_4__.createMainContents)();
(0,_page_footer__WEBPACK_IMPORTED_MODULE_3__.createfooter)();
(0,_city_watchlist__WEBPACK_IMPORTED_MODULE_5__.watchlist)();
(0,_fetch_data__WEBPACK_IMPORTED_MODULE_2__.screenLoader)();
(0,_city_watchlist__WEBPACK_IMPORTED_MODULE_5__.addListenerToButton)();
(0,_city_watchlist__WEBPACK_IMPORTED_MODULE_5__.displayAvailableWatchlist)();
_fetch_data__WEBPACK_IMPORTED_MODULE_2__.getWeatherData.call(
	document,
	_fetch_data__WEBPACK_IMPORTED_MODULE_2__.getData.bind(document),
	_fetch_data__WEBPACK_IMPORTED_MODULE_2__.getLonAndLat,
	_local_storage__WEBPACK_IMPORTED_MODULE_6__.cityName,
	false,
	_fetch_data__WEBPACK_IMPORTED_MODULE_2__.getCountryName
);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sVUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCO0FBT3ZCO0FBQ3VCO0FBQ0k7QUFLdkI7QUFDaUI7O0FBRTNDLDBEQUFZO0FBQ1osOERBQWtCO0FBQ2xCLDBEQUFZO0FBQ1osMERBQVM7QUFDVCx5REFBWTtBQUNaLG9FQUFtQjtBQUNuQiwwRUFBeUI7QUFDekIsNERBQW1CO0FBQ25CO0FBQ0EsQ0FBQyxxREFBWTtBQUNiLENBQUMscURBQVk7QUFDYixDQUFDLG9EQUFRO0FBQ1Q7QUFDQSxDQUFDLHVEQUFjO0FBQ2YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NpdHktd2F0Y2hsaXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jcmVhdGUtZG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXZlbi1kYXlzLWZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRnYXA6IDVweDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0cGFkZGluZzogMjBweCA1MHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc2VhcmNoLWRpdj5pbnB1dCB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiAjZWRhZWFlO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xcblxcdGNvbG9yOiBzbm93O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5zZWFyY2gtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnRpdGxlLWRpdiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nICovXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjsgKi9cXG59XFxuXFxuLnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogNXB4IDVweCAwcHggMjBweDtcXG5cXHRmbGV4OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi50b2RheS1kYXRhLWRpdj5kaXY6Zmlyc3Qtb2YtdHlwZSxcXG4udG9kYXktZGF0YS1kaXY+aDI6Zmlyc3Qtb2YtdHlwZSxcXG4udGVtcC1kaXY+KiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VhdGhlci1kZXNjIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDIwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLndhdGNobGlzdC1kaXYge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMTVweCAyMHB4IDVweCAxMHB4O1xcblxcdGdyaWQtYXJlYTogMS8yLzMvMztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndhdGNobGlzdC1kaXY+aDIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbnVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5saSB7XFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcblxcdHBhZGRpbmc6IDIwcHggMTBweDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwKTtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcblxcdGdhcDogNXB4O1xcblxcdHBhZGRpbmctbGVmdDogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzIDE4NCAxODQgLyA1MCUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmFkZC1idXR0b24+aW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY2l0eSB7XFxuXFx0cGFkZGluZzogN3B4IDMwcHggN3B4IDdweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjb2xvcjogI2ZmZWJjZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzIDE4NCAxODQgLyA1MCUpO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZT5pbWcge1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uZGVsZXRlIHtcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0dG9wOiA1cHg7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdy1kZWxldGUge1xcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50ZW1wLXJhbmdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG5cXHRmb250LXNpemU6IDRyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZT4uc3VwZXItc2NyaXB0IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kZXNjLWljb24ge1xcblxcdHdpZHRoOiA3NXB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+KiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6ICMxYTAwMmE7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmYWNhYztcXG5cXHRhbmltYXRpb246IGJsaW5raW5nQm9yZGVyIDJzIGluZmluaXRlO1xcbn1cXG5cXG4vKiBBIHN1YnRsZSBibGlua2luZyBib3JkZXIgY29sb3IgKi9cXG5Aa2V5ZnJhbWVzIGJsaW5raW5nQm9yZGVyIHtcXG5cXHQwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjZjU2Y2UyO1xcblxcdH1cXG5cXG5cXHQyNSUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogIzc4NmNmNTtcXG5cXHR9XFxuXFxuXFx0NTAlIHtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNhY2ZjZmY7XFxuXFx0fVxcblxcblxcdDcwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjZTRmZmFjO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNmZmFjYWM7XFxuXFx0fVxcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+Kj5pbWcge1xcblxcdHdpZHRoOiAyNXB4O1xcblxcdGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRjb2xvcjogI2ViY2FjYTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcblxcdHBhZGRpbmc6IDJweCAxMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNlOWI4Yjg7XFxuXFx0ZmxleDogMTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY2FyZD5kaXY+cDpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxufVxcblxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mZWVscy1saWtlLXRlbXAge1xcblxcdG1hcmdpbi10b3A6IC0xNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuZm9vdGVyIHtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDUxYjFiO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5sb2FkZXItY29udGFpbmVyLFxcbi5sb2FkZXItY29udGFpbmVyLXdhdGNobGlzdCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHQvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTsgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxufVxcblxcbi5sb2FkZXIsXFxuLmxvYWRlci13YXRjaGxpc3Qge1xcblxcdGJvcmRlcjogMTBweCBzb2xpZCAjOTA2MjYyO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDYwcHg7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDM1JTtcXG5cXHRsZWZ0OiA0NSU7XFxufVxcblxcbi5sb2FkZXItd2F0Y2hsaXN0IHtcXG5cXHRib3JkZXI6IDVweCBzb2xpZCAjOTA2MjYyO1xcblxcdGJvcmRlci10b3A6IDVweCBzb2xpZCAjMWQ0ZDRmO1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHR0b3A6IDQwJTtcXG5cXHRsZWZ0OiA0MCU7XFxufVxcblxcbi8qIFNhZmFyaSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcXG5cXHQwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG4vKiBVc2VzIGZsZXgtZGlyZWN0aW9uIGNvbHVtbiBmb3Igc2NyZWVuIHNpemVzIGJlbG93IDYwMHB4ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjE1cHgpIHtcXG5cXHRtYWluIHtcXG5cXHRcXHRmbGV4OiAxO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFxuXFx0LnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiA1cHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcblxcdC5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQud2F0Y2hsaXN0LWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlci13YXRjaGxpc3Qge1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDQzJTtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlciB7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0XFx0bGVmdDogNDAlO1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFB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ekIsNkJBQTZCO0NBQzdCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osUUFBUTtDQUNSLFNBQVM7QUFDVjs7QUFFQSxXQUFXO0FBQ1g7Q0FDQztFQUNDLCtCQUErQjtDQUNoQzs7Q0FFQTtFQUNDLGlDQUFpQztDQUNsQztBQUNEOztBQUVBO0NBQ0M7RUFDQyx1QkFBdUI7Q0FDeEI7O0NBRUE7RUFDQyx5QkFBeUI7Q0FDMUI7QUFDRDs7QUFFQSw0REFBNEQ7QUFDNUQ7Q0FDQztFQUNDLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsMkJBQTJCO0NBQzVCOztDQUVBO0VBQ0MsMkJBQTJCO0NBQzVCOztDQUVBO0VBQ0MsNEJBQTRCO0NBQzdCOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLFFBQVE7RUFDUixTQUFTO0NBQ1Y7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRnYXA6IDVweDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0cGFkZGluZzogMjBweCA1MHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc2VhcmNoLWRpdj5pbnB1dCB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiAjZWRhZWFlO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xcblxcdGNvbG9yOiBzbm93O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5zZWFyY2gtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnRpdGxlLWRpdiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nICovXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjsgKi9cXG59XFxuXFxuLnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogNXB4IDVweCAwcHggMjBweDtcXG5cXHRmbGV4OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi50b2RheS1kYXRhLWRpdj5kaXY6Zmlyc3Qtb2YtdHlwZSxcXG4udG9kYXktZGF0YS1kaXY+aDI6Zmlyc3Qtb2YtdHlwZSxcXG4udGVtcC1kaXY+KiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VhdGhlci1kZXNjIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDIwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLndhdGNobGlzdC1kaXYge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMTVweCAyMHB4IDVweCAxMHB4O1xcblxcdGdyaWQtYXJlYTogMS8yLzMvMztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndhdGNobGlzdC1kaXY+aDIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbnVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5saSB7XFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcblxcdHBhZGRpbmc6IDIwcHggMTBweDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwKTtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcblxcdGdhcDogNXB4O1xcblxcdHBhZGRpbmctbGVmdDogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzIDE4NCAxODQgLyA1MCUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmFkZC1idXR0b24+aW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY2l0eSB7XFxuXFx0cGFkZGluZzogN3B4IDMwcHggN3B4IDdweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjb2xvcjogI2ZmZWJjZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzIDE4NCAxODQgLyA1MCUpO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZT5pbWcge1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uZGVsZXRlIHtcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0dG9wOiA1cHg7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdy1kZWxldGUge1xcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50ZW1wLXJhbmdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG5cXHRmb250LXNpemU6IDRyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZT4uc3VwZXItc2NyaXB0IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kZXNjLWljb24ge1xcblxcdHdpZHRoOiA3NXB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+KiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6ICMxYTAwMmE7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmYWNhYztcXG5cXHRhbmltYXRpb246IGJsaW5raW5nQm9yZGVyIDJzIGluZmluaXRlO1xcbn1cXG5cXG4vKiBBIHN1YnRsZSBibGlua2luZyBib3JkZXIgY29sb3IgKi9cXG5Aa2V5ZnJhbWVzIGJsaW5raW5nQm9yZGVyIHtcXG5cXHQwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjZjU2Y2UyO1xcblxcdH1cXG5cXG5cXHQyNSUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogIzc4NmNmNTtcXG5cXHR9XFxuXFxuXFx0NTAlIHtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNhY2ZjZmY7XFxuXFx0fVxcblxcblxcdDcwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjZTRmZmFjO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNmZmFjYWM7XFxuXFx0fVxcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+Kj5pbWcge1xcblxcdHdpZHRoOiAyNXB4O1xcblxcdGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRjb2xvcjogI2ViY2FjYTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcblxcdHBhZGRpbmc6IDJweCAxMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNlOWI4Yjg7XFxuXFx0ZmxleDogMTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY2FyZD5kaXY+cDpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxufVxcblxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mZWVscy1saWtlLXRlbXAge1xcblxcdG1hcmdpbi10b3A6IC0xNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuZm9vdGVyIHtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDUxYjFiO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5sb2FkZXItY29udGFpbmVyLFxcbi5sb2FkZXItY29udGFpbmVyLXdhdGNobGlzdCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHQvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTsgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxufVxcblxcbi5sb2FkZXIsXFxuLmxvYWRlci13YXRjaGxpc3Qge1xcblxcdGJvcmRlcjogMTBweCBzb2xpZCAjOTA2MjYyO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDYwcHg7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDM1JTtcXG5cXHRsZWZ0OiA0NSU7XFxufVxcblxcbi5sb2FkZXItd2F0Y2hsaXN0IHtcXG5cXHRib3JkZXI6IDVweCBzb2xpZCAjOTA2MjYyO1xcblxcdGJvcmRlci10b3A6IDVweCBzb2xpZCAjMWQ0ZDRmO1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHR0b3A6IDQwJTtcXG5cXHRsZWZ0OiA0MCU7XFxufVxcblxcbi8qIFNhZmFyaSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcXG5cXHQwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG4vKiBVc2VzIGZsZXgtZGlyZWN0aW9uIGNvbHVtbiBmb3Igc2NyZWVuIHNpemVzIGJlbG93IDYwMHB4ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjE1cHgpIHtcXG5cXHRtYWluIHtcXG5cXHRcXHRmbGV4OiAxO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFxuXFx0LnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiA1cHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcblxcdC5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQud2F0Y2hsaXN0LWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlci13YXRjaGxpc3Qge1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDQzJTtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlciB7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0XFx0bGVmdDogNDAlO1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQge1xuXHRjbGVhclNjcmVlbkxvYWRlcixcblx0Z2V0Q291bnRyeU5hbWUsXG5cdGdldERhdGEsXG5cdGdldExvbkFuZExhdCxcblx0Z2V0V2VhdGhlckRhdGEsXG5cdHNjcmVlbkxvYWRlcixcbn0gZnJvbSBcIi4vZmV0Y2gtZGF0YVwiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIi4vaWNvbnMvYWRkY2l0eS5wbmdcIjtcbmltcG9ydCBEZWxldGUgZnJvbSBcIi4vaWNvbnMvZGVsZXRlLnBuZ1wiO1xuaW1wb3J0IHtcblx0bmV3TmFtZSxcblx0c2V0Q2l0eU5hbWUsXG5cdHNldHdhdGNobGlzdEFycmF5LFxuXHR3YXRjaGxpc3RBcnJheSxcbn0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiB3YXRjaGxpc3QoKSB7XG5cdGNvbnN0IHdhdGNobGlzdERpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLFxuXHRcdHdhdGNobGlzdEhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiKSxcblx0XHRjaXR5TGlzdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRhZGRDaXR5QnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudChcImxpXCIsIHsgY2xhc3M6IFwiYWRkLWJ1dHRvblwiIH0pLFxuXHRcdHdhdGNobGlzdElucHV0ID0gY3JlYXRlRG9tRWxlbWVudChcImlucHV0XCIsIHtcblx0XHRcdGNsYXNzOiBcIndhdGNobGlzdC1pbnB1dFwiLFxuXHRcdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkFkZCBDaXR5XCIsXG5cdFx0fSksXG5cdFx0TXlBZGRJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImFkZC1pY29uXCIsIHNyYzogQWRkSWNvbiB9KTtcblxuXHRhZGRDaXR5QnV0dG9uLmFwcGVuZChNeUFkZEljb24sIHdhdGNobGlzdElucHV0KTtcblx0d2F0Y2hsaXN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJXYXRjaGxpc3RcIjtcblx0Y2l0eUxpc3QuYXBwZW5kKGFkZENpdHlCdXR0b24pO1xuXHR3YXRjaGxpc3REaXYuYXBwZW5kKHdhdGNobGlzdEhlYWRlciwgY2l0eUxpc3QpO1xufVxuXG5mdW5jdGlvbiBhZGRDaXR5VG9XYXRjaGxpc3QocmVzcG9uc2UpIHtcblx0Y29uc3QgYWRkQ2l0eUJ1dHRvbiA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZCxcblx0XHRjaXR5TGlzdCA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0sXG5cdFx0d2F0Y2hsaXN0SW5wdXQgPSBhZGRDaXR5QnV0dG9uLmNoaWxkcmVuWzFdLFxuXHRcdGljb25BbmRDaXR5TmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0Y2l0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcImNpdHlcIiB9KSxcblx0XHR0ZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0Y2l0eU5hbWUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHRkZXNjSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0bXlEZWxldGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgY2xhc3M6IFwiZGVsZXRlXCIsIHNyYzogRGVsZXRlIH0pO1xuXG5cdGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7d2F0Y2hsaXN0SW5wdXQudmFsdWV9YDtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KSBpY29uQW5kQ2l0eU5hbWUuYXBwZW5kKGRlc2NJY29uLCBjaXR5TmFtZSk7XG5cdGVsc2UgaWNvbkFuZENpdHlOYW1lLmFwcGVuZChkZXNjSWNvbiwgdGhpcyk7XG5cblx0dGVtcC5hcHBlbmQoYCAke3Jlc3BvbnNlLmN1cnJlbnQudGVtcH1gKTtcblx0Z2V0SWNvbkFuZFRlbXAoY2l0eSwgaWNvbkFuZENpdHlOYW1lLCBkZXNjSWNvbiwgcmVzcG9uc2UsIHRlbXAsIG15RGVsZXRlKTtcblx0Y2l0eUxpc3QuaW5zZXJ0QmVmb3JlKGNpdHksIGFkZENpdHlCdXR0b24pO1xuXHRhZGRFdmVudExpc3RlbmVyVG9DaXR5KG15RGVsZXRlLCBjaXR5KTtcblx0aWYgKFxuXHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmxhc3RDaGlsZC5jbGFzc05hbWUgPT09XG5cdFx0XCJsb2FkZXItY29udGFpbmVyLXdhdGNobGlzdFwiXG5cdClcblx0XHRjbGVhclNjcmVlbkxvYWRlci5jYWxsKGRvY3VtZW50KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvQ2l0eShteURlbGV0ZSwgY2l0eSkge1xuXHRteURlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGxldCBsaXN0QXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKSk7XG5cdFx0bGV0IGluZGV4T2ZDaXR5ID0gbGlzdEFycmF5LmluZGV4T2YobXlEZWxldGUucGFyZW50Tm9kZSk7XG5cdFx0d2F0Y2hsaXN0QXJyYXkuc3BsaWNlKGluZGV4T2ZDaXR5LCAxKTtcblx0XHRzZXR3YXRjaGxpc3RBcnJheSgpO1xuXHRcdG15RGVsZXRlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChteURlbGV0ZS5wYXJlbnROb2RlKTtcblx0fSk7XG5cdGNpdHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT5cblx0XHRteURlbGV0ZS5jbGFzc0xpc3QuYWRkKFwic2hvdy1kZWxldGVcIilcblx0KTtcblx0Y2l0eS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PlxuXHRcdG15RGVsZXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWRlbGV0ZVwiKVxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uQW5kVGVtcChcblx0Y2l0eSxcblx0aWNvbkFuZENpdHlOYW1lLFxuXHRkZXNjSWNvbixcblx0cmVzcG9uc2UsXG5cdHRlbXAsXG5cdG15RGVsZXRlXG4pIHtcblx0Y29uc3Qgd2F0Y2hsaXN0SW5wdXQgPVxuXHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkXG5cdFx0XHQuY2hpbGROb2Rlc1sxXTtcblx0Y2l0eS5hcHBlbmQoaWNvbkFuZENpdHlOYW1lLCB0ZW1wLCBteURlbGV0ZSk7XG5cdGRlc2NJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3Jlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5pY29ufS5wbmdgO1xuXHR3YXRjaGxpc3RJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9CdXR0b24oKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRFdmVudExpc3RlbmVycyk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGUpIHtcblx0Y29uc3QgYWRkQ2l0eUJ1dHRvbiA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZCxcblx0XHRoZWFkZXJJbnB1dCA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0sXG5cdFx0aGVhZGVyQnV0dG9uID0gZG9jdW1lbnQuYm9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSxcblx0XHR3YXRjaGxpc3RJbnB1dCA9IGFkZENpdHlCdXR0b24uY2hpbGROb2Rlc1sxXTtcblxuXHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiYWRkLWljb25cIilcblx0XHR3YXRjaGxpc3RJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCJcblx0XHRcdD8gZmFsc2Vcblx0XHRcdDogd2F0Y2hsaXN0QXJyYXkucHVzaCh3YXRjaGxpc3RJbnB1dC52YWx1ZSksXG5cdFx0XHRzZXR3YXRjaGxpc3RBcnJheSgpLFxuXHRcdFx0c2NyZWVuTG9hZGVyLmNhbGwoZG9jdW1lbnQpLFxuXHRcdFx0Z2V0V2VhdGhlckRhdGEuYXBwbHkoZG9jdW1lbnQuYm9keSwgW1xuXHRcdFx0XHRhZGRDaXR5VG9XYXRjaGxpc3QuYmluZChkb2N1bWVudCksXG5cdFx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdFx0d2F0Y2hsaXN0SW5wdXQudmFsdWUsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRnZXRDb3VudHJ5TmFtZSxcblx0XHRcdF0pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKS5mb3JFYWNoKChjaXR5TGlzdCkgPT4ge1xuXHRcdGlmIChcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0IHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblswXSB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMV0gfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdIHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuXHRcdCkge1xuXHRcdFx0c2NyZWVuTG9hZGVyKCk7XG5cdFx0XHRjb25zdCBjaXR5ID0gY2l0eUxpc3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXHRcdFx0Z2V0V2VhdGhlckRhdGEoZ2V0RGF0YSwgZ2V0TG9uQW5kTGF0LCBjaXR5LCBmYWxzZSwgZ2V0Q291bnRyeU5hbWUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKGUudGFyZ2V0ID09PSBoZWFkZXJCdXR0b24pIHtcblx0XHRuZXdOYW1lKGhlYWRlcklucHV0LnZhbHVlKTtcblx0XHRzZXRDaXR5TmFtZSgpO1xuXHRcdHNjcmVlbkxvYWRlcigpO1xuXHRcdGdldFdlYXRoZXJEYXRhKFxuXHRcdFx0Z2V0RGF0YSxcblx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdGhlYWRlcklucHV0LnZhbHVlLFxuXHRcdFx0aGVhZGVySW5wdXQsXG5cdFx0XHRnZXRDb3VudHJ5TmFtZVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVsYXlFeGVjdXRpb24oY2l0eSkge1xuXHRjb25zdCBmZXRjaE5vdyA9IGdldFdlYXRoZXJEYXRhKFxuXHRcdGFkZENpdHlUb1dhdGNobGlzdC5iaW5kKGNpdHkpLFxuXHRcdGdldExvbkFuZExhdCxcblx0XHRjaXR5LFxuXHRcdGZhbHNlLFxuXHRcdGdldENvdW50cnlOYW1lXG5cdCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShmZXRjaE5vdyksIDEyMDApO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCgpIHtcblx0aWYgKHdhdGNobGlzdEFycmF5Lmxlbmd0aCA+IDApXG5cdFx0Zm9yIChjb25zdCBjaXR5IG9mIHdhdGNobGlzdEFycmF5KSB7XG5cdFx0XHRhd2FpdCBkZWxheUV4ZWN1dGlvbihjaXR5KTtcblx0XHR9XG59XG5cbmV4cG9ydCB7XG5cdHdhdGNobGlzdCxcblx0YWRkTGlzdGVuZXJUb0J1dHRvbixcblx0YWRkQ2l0eVRvV2F0Y2hsaXN0LFxuXHRkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0LFxufTtcbiIsImV4cG9ydCBjb25zdCBBUElfVE9LRU4gPSB7XG5cdEtFWTogXCJjOTNmZDE4MTdmM2ZiZTQyYWVhYzBhNjMwNzY2MDNiOVwiLFxuXHRLRVkyOiBcIjBhZDcxM2ZhYzEyMGI4M2JkOTA3MjYxZmI3NzQyZmQ3XCIsXG5cdEtFWTM6IFwiMjBmNzYzMmZmYzJjMDIyNjU0ZTQwOTNjNjk0N2I0ZjRcIixcblx0VU5TUExBU0hfQUNDRVNTX0tFWTogXCJrZEZxamJoY2lJRkliMGxEZWZJMkk0enFSYkFqUGExM1pHdTBkam51bnM0XCIsXG5cdFVOU1BMQVNIX1NFQ1JFVF9LRVk6IFwiZXBreUNYb2dIcWQ4azJ1WDdvQXJhZGwxcDQ0MkRjZi1ESThJdjdWRVR3OFwiLFxufTsiLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgRE9NIEVsZW1lbnRzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG5cdGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG5cdGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuXHRzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuXHRyZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG5cdE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuXHR9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9OyIsImltcG9ydCB7IGRhdGFEaXNwbGF5LCBtaW5vckRhdGFSZXBvcnQsIHN1cGVyU2NyaXB0IH0gZnJvbSBcIi4vcGFnZS1tYWluXCI7XG5pbXBvcnQgeyBjcmVhdGVGb3JlY2FzdENhcmQgfSBmcm9tIFwiLi9zZXZlbi1kYXlzLWZvcmVjYXN0XCI7XG5pbXBvcnQgeyBBUElfVE9LRU4gfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcblxubGV0IGNvdW50cnlBbmRDaXR5TmFtZTtcbmxldCBjb3VudHJ5QW5kQ2l0eU5hbWUyO1xuY29uc3QgZXhjbHVkZSA9IGAmdW5pdHM9bWV0cmljJkFQUElEPSR7QVBJX1RPS0VOLktFWX1gLFxuXHRleGNsdWRlMiA9IGAmZXhjbHVkZT1taW51dGVseSxob3VybHksYWxlcnRzJnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSV9UT0tFTi5LRVl9YDtcblxuZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoZnVuYywgY2IsIGNpdHlOYW1lLCBoZWFkZXJJbnB1dCwgZ2V0TmFtZSkge1xuXHRmZXRjaChcblx0XHRgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSR7ZXhjbHVkZX1gLFxuXHRcdHtcblx0XHRcdG1vZGU6IFwiY29yc1wiLFxuXHRcdH1cblx0KVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0Y29uc3QgeyBsYXQgfSA9IHJlc3BvbnNlLmNvb3JkO1xuXHRcdFx0Y29uc3QgeyBsb24gfSA9IHJlc3BvbnNlLmNvb3JkO1xuXHRcdFx0Z2V0TmFtZS5jYWxsKHRoaXMsIHJlc3BvbnNlKTtcblx0XHRcdGNiKGxhdCwgbG9uLCBmdW5jLCBoZWFkZXJJbnB1dCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5mdW5jdGlvbiBnZXRMb25BbmRMYXQobGF0LCBsb24sIGNhbGxiYWNrLCBoZWFkZXJJbnB1dCkge1xuXHRuZXh0N0RheXNGb3JlY2FzdChsYXQsIGxvbiwgY2FsbGJhY2ssIGhlYWRlcklucHV0KTtcbn1cblxuZnVuY3Rpb24gbmV4dDdEYXlzRm9yZWNhc3QobGF0LCBsb24sIGNhbGxiYWNrLCBoZWFkZXJJbnB1dCkge1xuXHRmZXRjaChcblx0XHRgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JHtleGNsdWRlMn1gXG5cdClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGNhbGxiYWNrKHJlc3BvbnNlLCBoZWFkZXJJbnB1dCk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEocmVzcG9uc2UsIGhlYWRlcklucHV0KSB7XG5cdGxldCB3ZWF0aGVyRGVzYyA9IHJlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblx0Y29uc29sZS5sb2cod2VhdGhlckRlc2MpO1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXSxcblx0XHRuZXh0N0RheXNEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXTtcblx0Y2xlYXJEYXRhKHRvZGF5RGF0YURpdik7XG5cdGNsZWFyRGF0YShuZXh0N0RheXNEaXYpO1xuXHRkaXNwbGF5V2VhdGhlclJlcG9ydC5jYWxsKHRoaXMsIHJlc3BvbnNlKTtcblx0ZGlzcGxheTdEYXlzRm9yZWNhc3QocmVzcG9uc2UpO1xuXHRpZiAoaGVhZGVySW5wdXQudmFsdWUpIGhlYWRlcklucHV0LnZhbHVlID0gXCJcIjtcblx0Z2V0V2VhdGhlckltYWdlKHdlYXRoZXJEZXNjKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEYXRhKGRpdikge1xuXHR3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXk3RGF5c0ZvcmVjYXN0KHJlc3BvbnNlKSB7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgcmVzcG9uc2UuZGFpbHkubGVuZ3RoOyBpKyspXG5cdFx0Y3JlYXRlRm9yZWNhc3RDYXJkKHJlc3BvbnNlLmRhaWx5W2ldKTtcblx0Y2xlYXJTY3JlZW5Mb2FkZXIoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJSZXBvcnQocmVzcG9uc2UpIHtcblx0Y29uc3QgW1xuXHRcdHdlYXRoZXJEZXNjLFxuXHRcdGRlc2NJY29uLFxuXHRcdG5hbWVPZkNpdHksXG5cdFx0dGVtcGVyYXR1cmUsXG5cdFx0bG93VGVtcCxcblx0XHRoaWdoVGVtcCxcblx0XHRmZWVsc0xpa2VUZW1wLFxuXHRdID0gZGF0YURpc3BsYXkoKTtcblx0Y29uc3QgW3dpbmQsIGRld1BvaW50LCB0aW1lWm9uZSwgdXZJbmRleCwgcHJlc3N1cmUsIGh1bWlkaXR5XSA9XG5cdFx0bWlub3JEYXRhUmVwb3J0KCk7XG5cblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KSBuYW1lT2ZDaXR5LnRleHRDb250ZW50ID0gY291bnRyeUFuZENpdHlOYW1lO1xuXHRlbHNlIG5hbWVPZkNpdHkudGV4dENvbnRlbnQgPSBjb3VudHJ5QW5kQ2l0eU5hbWUyO1xuXHR3ZWF0aGVyRGVzYy50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuXHRsb3dUZW1wLmFwcGVuZChcIkxvdzogXCIsIHBhcnNlSW50KHJlc3BvbnNlLmRhaWx5WzBdLnRlbXAubWluKSwgc3VwZXJTY3JpcHQoKSk7XG5cdGhpZ2hUZW1wLmFwcGVuZChcblx0XHRcIkhpZ2g6IFwiLFxuXHRcdHBhcnNlSW50KHJlc3BvbnNlLmRhaWx5WzBdLnRlbXAubWF4KSxcblx0XHRzdXBlclNjcmlwdCgpXG5cdCk7XG5cdHRlbXBlcmF0dXJlLmFwcGVuZChwYXJzZUludChyZXNwb25zZS5jdXJyZW50LnRlbXApLCBzdXBlclNjcmlwdCgpKTtcblx0ZmVlbHNMaWtlVGVtcC5hcHBlbmQoXG5cdFx0XCJGZWVscyBMaWtlIFwiLFxuXHRcdHBhcnNlSW50KHJlc3BvbnNlLmN1cnJlbnQuZmVlbHNfbGlrZSksXG5cdFx0c3VwZXJTY3JpcHQoKVxuXHQpO1xuXHR3aW5kLmFwcGVuZChgV2luZCBTcGVlZDogJHtyZXNwb25zZS5jdXJyZW50LndpbmRfc3BlZWR9YCk7XG5cdGRld1BvaW50LmFwcGVuZChgRGV3IFBvaW50OiAke3Jlc3BvbnNlLmN1cnJlbnQuZGV3X3BvaW50fWApO1xuXHR0aW1lWm9uZS5hcHBlbmQoYHRpbWUgWm9uZTogJHtyZXNwb25zZS50aW1lem9uZX1gKTtcblx0dXZJbmRleC5hcHBlbmQoYFVWIEluZGV4OiAke3Jlc3BvbnNlLmN1cnJlbnQudXZpfWApO1xuXHRwcmVzc3VyZS5hcHBlbmQoYFByZXNzdXJlOiAke3Jlc3BvbnNlLmN1cnJlbnQucHJlc3N1cmV9YCk7XG5cdGh1bWlkaXR5LmFwcGVuZChgSHVtaWRpdHk6ICR7cmVzcG9uc2UuY3VycmVudC5odW1pZGl0eX1gKTtcblx0ZGVzY0ljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7cmVzcG9uc2UuY3VycmVudC53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG59XG5cbmZ1bmN0aW9uIGdldENvdW50cnlOYW1lKHJlc3BvbnNlKSB7XG5cdGlmICh0aGlzID09PSBkb2N1bWVudCkge1xuXHRcdGNvbnN0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFtcImVuXCJdLCB7IHR5cGU6IFwicmVnaW9uXCIgfSk7XG5cdFx0Y29uc3QgY291bnRyeU5hbWUgPSByZWdpb25OYW1lcy5vZihyZXNwb25zZS5zeXMuY291bnRyeSk7XG5cdFx0aWYgKGNvdW50cnlOYW1lID09IHJlc3BvbnNlLm5hbWUpIGNvdW50cnlBbmRDaXR5TmFtZSA9IGNvdW50cnlOYW1lO1xuXHRcdGVsc2UgY291bnRyeUFuZENpdHlOYW1lID0gYCR7cmVzcG9uc2UubmFtZX0sICR7Y291bnRyeU5hbWV9LmA7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgcmVnaW9uTmFtZXMgPSBuZXcgSW50bC5EaXNwbGF5TmFtZXMoW1wiZW5cIl0sIHsgdHlwZTogXCJyZWdpb25cIiB9KTtcblx0XHRjb25zdCBjb3VudHJ5TmFtZSA9IHJlZ2lvbk5hbWVzLm9mKHJlc3BvbnNlLnN5cy5jb3VudHJ5KTtcblx0XHRpZiAoY291bnRyeU5hbWUgPT0gcmVzcG9uc2UubmFtZSkgY291bnRyeUFuZENpdHlOYW1lMiA9IGNvdW50cnlOYW1lO1xuXHRcdGVsc2UgY291bnRyeUFuZENpdHlOYW1lMiA9IGAke3Jlc3BvbnNlLm5hbWV9LCAke2NvdW50cnlOYW1lfS5gO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNjcmVlbkxvYWRlcigpIHtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KSB7XG5cdFx0Y29uc3QgW2xvYWRlckNvbnRhaW5lcl0gPSBjcmVhdGVMb2FkZXIoXG5cdFx0XHRcImxvYWRlci13YXRjaGxpc3RcIixcblx0XHRcdFwibG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3RcIlxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0uYXBwZW5kKGxvYWRlckNvbnRhaW5lcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgW2xvYWRlckNvbnRhaW5lcl0gPSBjcmVhdGVMb2FkZXIoXCJsb2FkZXJcIiwgXCJsb2FkZXItY29udGFpbmVyXCIpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKGxvYWRlckNvbnRhaW5lcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2xlYXJTY3JlZW5Mb2FkZXIoKSB7XG5cdGlmICh0aGlzID09PSBkb2N1bWVudClcblx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5yZW1vdmVDaGlsZChcblx0XHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmxhc3RDaGlsZFxuXHRcdCk7XG5cdGVsc2UgZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvYWRlcihsb2FkZXJDbGFzcywgbG9hZGVyRGl2Q2xhc3MpIHtcblx0Y29uc3QgbG9hZGVyQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7XG5cdFx0Y2xhc3M6IGxvYWRlckRpdkNsYXNzLFxuXHR9KTtcblx0Y29uc3QgbG9hZGVyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBsb2FkZXJDbGFzcyB9KTtcblx0bG9hZGVyQ29udGFpbmVyLmFwcGVuZChsb2FkZXIpO1xuXHRyZXR1cm4gW2xvYWRlckNvbnRhaW5lcl07XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJJbWFnZSh3ZWF0aGVyRGVzYykge1xuXHRmZXRjaChcblx0XHRgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3M/cXVlcnk9JHt3ZWF0aGVyRGVzY30mcGVyX3BhZ2U9MSZjbGllbnRfaWQ9Z0s1MkRlMlRtX2RMNW8xSVhLYTlGUk9CQUotTElZcVI0MXhCZGxnM1gya2AsXG5cdFx0eyBtb2RlOiBcImNvcnNcIiB9XG5cdClcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3VsdHNbMF0udXJscy5yYXcpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3Rlc1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3Jlc3BvbnNlLnJlc3VsdHNbMF0udXJscy5yYXd9KWA7XG5cdFx0fSk7XG59XG5cbmV4cG9ydCB7XG5cdGdldFdlYXRoZXJEYXRhLFxuXHRnZXRMb25BbmRMYXQsXG5cdGdldERhdGEsXG5cdGdldENvdW50cnlOYW1lLFxuXHRzY3JlZW5Mb2FkZXIsXG5cdGNsZWFyU2NyZWVuTG9hZGVyLFxufTtcbiIsImlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlOYW1lXCIpID09PSBudWxsKVxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlOYW1lXCIsIEpTT04uc3RyaW5naWZ5KFwiUG9ydCBIYXJjb3VydFwiKSk7XG5cbmxldCBjaXR5TmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5TmFtZVwiKSk7XG5cbmZ1bmN0aW9uIG5ld05hbWUoc2V0TmFtZSkge1xuXHRjaXR5TmFtZSA9IHNldE5hbWU7XG59XG5cbmZ1bmN0aW9uIHNldENpdHlOYW1lKCkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlOYW1lXCIsIEpTT04uc3RyaW5naWZ5KGNpdHlOYW1lKSk7XG59XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIpID09IG51bGwpXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxubGV0IHdhdGNobGlzdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIpKTtcblxuZnVuY3Rpb24gc2V0d2F0Y2hsaXN0QXJyYXkoKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkod2F0Y2hsaXN0QXJyYXkpKTtcbn1cblxuZXhwb3J0IHsgY2l0eU5hbWUsIHNldENpdHlOYW1lLCBuZXdOYW1lLCB3YXRjaGxpc3RBcnJheSwgc2V0d2F0Y2hsaXN0QXJyYXkgfTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5cbi8qKlxuICogRnVuY3Rpb24gZm9yIGNyZWF0aW5nIGZvb3RlclxuICovXG5mdW5jdGlvbiBjcmVhdGVmb290ZXIoKSB7XG5cdGNvbnN0IGZvb3RlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJmb290ZXJcIik7XG5cdGNvbnN0IGFuY2hvckxpbmsgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vSUFtWW91bmdib3NzeS93ZWF0aGVyLWFwcFwiLFxuXHR9KTtcblx0Y29uc3QgZ2l0SHViSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpXCIsIHsgZmE6IFwiZmEtZ2l0aHViXCIgfSk7XG5cdGNvbnN0IGljb25zQ3JlZGl0ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGZsYXRJY29uQW5jaG9yID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuXHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0XHRocmVmOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIixcblx0fSk7XG5cdGNvbnN0IGljb25zOEFuY2hvciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJhXCIsIHtcblx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0aHJlZjogXCJodHRwczovL2ljb25zOC5jb20vXCIsXG5cdH0pO1xuXG5cdGZsYXRJY29uQW5jaG9yLnRleHRDb250ZW50ID0gXCIgRmxhdGljb24gXCI7XG5cdGljb25zOEFuY2hvci50ZXh0Q29udGVudCA9IFwiIEljb25zOCBcIjtcblx0aWNvbnNDcmVkaXQuYXBwZW5kKFwiSWNvbnMgYnlcIiwgZmxhdEljb25BbmNob3IsIFwiICYgXCIsIGljb25zOEFuY2hvcik7XG5cdGFuY2hvckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViSWNvbik7XG5cdGZvb3Rlci5hcHBlbmQoXG5cdFx0XCJDb3B5cmlnaHQgXFx1MDBBOSAyMDIyIElBbVlvdW5nYm9zc3lcIixcblx0XHRcIiAgXCIsXG5cdFx0YW5jaG9yTGluayxcblx0XHRpY29uc0NyZWRpdFxuXHQpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZWZvb3RlciB9OyIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXHRjb25zdCBoZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaGVhZGVyXCIpO1xuXHRjb25zdCBzZWFyY2hEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwic2VhcmNoLWRpdlwiIH0pO1xuXHRjb25zdCBzZWFyY2hCYXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaW5wdXRcIiwge1xuXHRcdHR5cGU6IFwic2VhcmNoXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgQ2l0eSBOYW1lXCIsXG5cdH0pO1xuXHRjb25zdCBzZWFyY2hCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiB9KTtcblx0Y29uc3QgaGVhZGVyVGl0bGVEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGl0bGUtZGl2XCIgfSk7XG5cdGNvbnN0IGhlYWRlclRpdGxlID0gY3JlYXRlRG9tRWxlbWVudChcImgxXCIpO1xuXG5cdHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG5cdGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJDaXR5V2F0Y2hcIjtcblxuXHRzZWFyY2hEaXYuYXBwZW5kKHNlYXJjaEJhciwgc2VhcmNoQnV0dG9uKTtcblx0aGVhZGVyVGl0bGVEaXYuYXBwZW5kKGhlYWRlclRpdGxlKTtcblx0aGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZURpdiwgc2VhcmNoRGl2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIi4vaWNvbnMvZGF0ZS5wbmdcIjtcbmltcG9ydCBIdW1pZGl0eSBmcm9tIFwiLi9pY29ucy9odW1pZGl0eS5wbmdcIjtcbmltcG9ydCBQcmVzc3VyZSBmcm9tIFwiLi9pY29ucy9wcmVzc3VyZS5wbmdcIjtcbmltcG9ydCBUaW1lem9uZSBmcm9tIFwiLi9pY29ucy90aW1lem9uZS5wbmdcIjtcbmltcG9ydCBXaW5kIGZyb20gXCIuL2ljb25zL3dpbmQucG5nXCI7XG5pbXBvcnQgU2VhTGV2ZWwgZnJvbSBcIi4vaWNvbnMvc2VhbGV2ZWwucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50cygpIHtcblx0Y29uc3QgbWFpbkRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJtYWluXCIsIHsgY2xhc3M6IFwibWFpblwiIH0pO1xuXHRjcmVhdGVUb2RheUZvcmVjYXN0Q29udGFpbmVyKG1haW5EaXYpO1xuXHRjcmVhdGVOZXh0ZGF5c0NvbnRhaW5lckRpdihtYWluRGl2KTtcblx0Z2V0V2F0Y2hsaXN0KG1haW5EaXYpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kYXlGb3JlY2FzdENvbnRhaW5lcihtYWluRGl2KSB7XG5cdGNvbnN0IHRvZGF5RGF0YURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2RheS1kYXRhLWRpdlwiIH0pO1xuXHRtYWluRGl2LmFwcGVuZCh0b2RheURhdGFEaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0ZGF5c0NvbnRhaW5lckRpdihtYWluRGl2KSB7XG5cdGNvbnN0IG5leHQ3RGF5c0RpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJuZXh0LTdkYXlzLWRpdlwiIH0pO1xuXHRtYWluRGl2LmFwcGVuZChuZXh0N0RheXNEaXYpO1xufVxuXG5mdW5jdGlvbiBnZXRXYXRjaGxpc3QobWFpbkRpdikge1xuXHRjb25zdCB3YXRjaGxpc3REaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2F0Y2hsaXN0LWRpdlwiIH0pO1xuXHRtYWluRGl2LmFwcGVuZCh3YXRjaGxpc3REaXYpO1xufVxuXG5mdW5jdGlvbiBtaW5vckRhdGFSZXBvcnQoKSB7XG5cdGNvbnN0IG1pbm9yRGF0YURpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbM10sXG5cdFx0d2luZERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ3aW5kLWRpdlwiIH0pLFxuXHRcdHdpbmQgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIndpbmRcIiB9KSxcblx0XHRkZXdQb2ludERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXctcG9pbnQtZGl2XCIgfSksXG5cdFx0ZGV3UG9pbnQgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImRldy1wb2ludFwiIH0pLFxuXHRcdHRpbWVab25lRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRpbWUtem9uZS1kaXZcIiB9KSxcblx0XHR0aW1lWm9uZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidGltZS16b25lXCIgfSksXG5cdFx0dXZJbmRleERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ1di1pbmRleC1kaXZcIiB9KSxcblx0XHR1dkluZGV4ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ1di1pbmRleFwiIH0pLFxuXHRcdHByZXNzdXJlRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInByZXNzdXJlLWRpdlwiIH0pLFxuXHRcdHByZXNzdXJlID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJwcmVzc3VyZVwiIH0pLFxuXHRcdGh1bWlkaXR5RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImh1bWlkaXR5LWRpdlwiIH0pLFxuXHRcdGh1bWlkaXR5ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJodW1pZGl0eVwiIH0pLFxuXHRcdE15RGF0ZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IERhdGUgfSksXG5cdFx0TXlIdW1pZGl0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IEh1bWlkaXR5IH0pLFxuXHRcdE15UHJlc3N1cmUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBQcmVzc3VyZSB9KSxcblx0XHRNeVRpbWV6b25lID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogVGltZXpvbmUgfSksXG5cdFx0TXlTZWFMZXZlbCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFNlYUxldmVsIH0pLFxuXHRcdE15V2luZCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFdpbmQgfSk7XG5cblx0d2luZERpdi5hcHBlbmQoTXlXaW5kLCB3aW5kKTtcblx0ZGV3UG9pbnREaXYuYXBwZW5kKE15U2VhTGV2ZWwsIGRld1BvaW50KTtcblx0dGltZVpvbmVEaXYuYXBwZW5kKE15VGltZXpvbmUsIHRpbWVab25lKTtcblx0dXZJbmRleERpdi5hcHBlbmQoTXlEYXRlLCB1dkluZGV4KTtcblx0cHJlc3N1cmVEaXYuYXBwZW5kKE15UHJlc3N1cmUsIHByZXNzdXJlKTtcblx0aHVtaWRpdHlEaXYuYXBwZW5kKE15SHVtaWRpdHksIGh1bWlkaXR5KTtcblx0bWlub3JEYXRhRGl2LmFwcGVuZChcblx0XHR3aW5kRGl2LFxuXHRcdGRld1BvaW50RGl2LFxuXHRcdHRpbWVab25lRGl2LFxuXHRcdHV2SW5kZXhEaXYsXG5cdFx0cHJlc3N1cmVEaXYsXG5cdFx0aHVtaWRpdHlEaXZcblx0KTtcblx0cmV0dXJuIFt3aW5kLCBkZXdQb2ludCwgdGltZVpvbmUsIHV2SW5kZXgsIHByZXNzdXJlLCBodW1pZGl0eV07XG59XG5cbmZ1bmN0aW9uIHN1cGVyU2NyaXB0KCkge1xuXHRjb25zdCBzdXBTY3JpcHQgPSBjcmVhdGVEb21FbGVtZW50KFwic3VwXCIsIHsgY2xhc3M6IFwic3VwZXItc2NyaXB0XCIgfSk7XG5cdGNvbnN0IHN1cFNjcmlwdDIgPSBjcmVhdGVEb21FbGVtZW50KFwic3VwXCIsIHsgY2xhc3M6IFwic3VwZXItc2NyaXB0XCIgfSk7XG5cdHN1cFNjcmlwdC50ZXh0Q29udGVudCA9IFwib1wiO1xuXHRzdXBTY3JpcHQyLmFwcGVuZChzdXBTY3JpcHQsIFwiQ1wiKTtcblx0cmV0dXJuIHN1cFNjcmlwdDI7XG59XG5cbmZ1bmN0aW9uIGRhdGFEaXNwbGF5KCkge1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgd2VhdGhlckRlc2MgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIndlYXRoZXItZGVzY1wiIH0pLFxuXHRcdG5hbWVPZkNpdHkgPSBjcmVhdGVEb21FbGVtZW50KFwiaDJcIiwgeyBjbGFzczogXCJuYW1lLW9mLWNpdHlcIiB9KSxcblx0XHRkZXNjSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJkZXNjLWljb25cIiB9KSxcblx0XHR0ZW1wRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRlbXAtZGl2XCIgfSksXG5cdFx0dGVtcFJhbmdlID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRlbXAtcmFuZ2VcIiB9KSxcblx0XHRoaWdoVGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiaGlnaC10ZW1wXCIgfSksXG5cdFx0bG93VGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwibG93LXRlbXBcIiB9KSxcblx0XHRmZWVsc0xpa2VUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJmZWVscy1saWtlLXRlbXBcIiB9KSxcblx0XHR0ZW1wZXJhdHVyZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZW1wZXJhdHVyZS1kaXZcIiB9KSxcblx0XHR0ZW1wZXJhdHVyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidGVtcGVyYXR1cmVcIiB9KSxcblx0XHRtaW5vckRhdGFEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWlub3ItZGF0YS1kaXZcIiB9KTtcblxuXHR0ZW1wUmFuZ2UuYXBwZW5kKGxvd1RlbXAsIGhpZ2hUZW1wKTtcblx0dGVtcGVyYXR1cmVEaXYuYXBwZW5kKHRlbXBlcmF0dXJlLCBkZXNjSWNvbik7XG5cdHRlbXBEaXYuYXBwZW5kKHRlbXBSYW5nZSwgdGVtcGVyYXR1cmVEaXYsIGZlZWxzTGlrZVRlbXApO1xuXHR0b2RheURhdGFEaXYuYXBwZW5kKHdlYXRoZXJEZXNjLCBuYW1lT2ZDaXR5LCB0ZW1wRGl2LCBtaW5vckRhdGFEaXYpO1xuXG5cdHJldHVybiBbXG5cdFx0d2VhdGhlckRlc2MsXG5cdFx0ZGVzY0ljb24sXG5cdFx0bmFtZU9mQ2l0eSxcblx0XHR0ZW1wZXJhdHVyZSxcblx0XHRsb3dUZW1wLFxuXHRcdGhpZ2hUZW1wLFxuXHRcdGZlZWxzTGlrZVRlbXAsXG5cdF07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1haW5Db250ZW50cywgbWlub3JEYXRhUmVwb3J0LCBzdXBlclNjcmlwdCwgZGF0YURpc3BsYXkgfTtcbiIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3RDYXJkKGRhaWx5KSB7XG5cdGNvbnN0IG5leHQ3RGF5c0RpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLFxuXHRcdGNhcmQgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY2FyZFwiIH0pLFxuXHRcdGRheUFuZERlc2MgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIpLFxuXHRcdGljb25EaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaWNvbi1kaXZcIiB9KSxcblx0XHR0ZW1wRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiKSxcblx0XHRkYXkgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHR3ZWF0aGVyRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdHdlYXRoZXJEZXNjSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0bG93VGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdGhpZ2hUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIik7XG5cblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhaWx5LmR0ICogMTAwMCk7XG5cdGNvbnN0IHdlZWtkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcblxuXHRkYXkudGV4dENvbnRlbnQgPSBgJHt3ZWVrZGF5fWA7XG5cdHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gYCR7ZGFpbHkud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuXHR3ZWF0aGVyRGVzY0ljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7ZGFpbHkud2VhdGhlclswXS5pY29ufS5wbmdgO1xuXHRoaWdoVGVtcC50ZXh0Q29udGVudCA9IGAke2RhaWx5LnRlbXAubWF4fWA7XG5cdGxvd1RlbXAudGV4dENvbnRlbnQgPSBgJHtkYWlseS50ZW1wLm1heH1gO1xuXHRkYXlBbmREZXNjLmFwcGVuZChkYXksIHdlYXRoZXJEZXNjKTtcblx0dGVtcERpdi5hcHBlbmQoaGlnaFRlbXAsIGxvd1RlbXApO1xuXHRpY29uRGl2LmFwcGVuZCh3ZWF0aGVyRGVzY0ljb24sIHRlbXBEaXYpO1xuXHRjYXJkLmFwcGVuZChkYXlBbmREZXNjLCBpY29uRGl2KTtcblx0bmV4dDdEYXlzRGl2LmFwcGVuZChjYXJkKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9yZWNhc3RDYXJkIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi9wYWdlLWhlYWRlclwiO1xuaW1wb3J0IHtcblx0Z2V0Q291bnRyeU5hbWUsXG5cdGdldERhdGEsXG5cdGdldExvbkFuZExhdCxcblx0Z2V0V2VhdGhlckRhdGEsXG5cdHNjcmVlbkxvYWRlcixcbn0gZnJvbSBcIi4vZmV0Y2gtZGF0YVwiO1xuaW1wb3J0IHsgY3JlYXRlZm9vdGVyIH0gZnJvbSBcIi4vcGFnZS1mb290ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5Db250ZW50cyB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuaW1wb3J0IHtcblx0YWRkTGlzdGVuZXJUb0J1dHRvbixcblx0ZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCxcblx0d2F0Y2hsaXN0LFxufSBmcm9tIFwiLi9jaXR5LXdhdGNobGlzdFwiO1xuaW1wb3J0IHsgY2l0eU5hbWUgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmNyZWF0ZUhlYWRlcigpO1xuY3JlYXRlTWFpbkNvbnRlbnRzKCk7XG5jcmVhdGVmb290ZXIoKTtcbndhdGNobGlzdCgpO1xuc2NyZWVuTG9hZGVyKCk7XG5hZGRMaXN0ZW5lclRvQnV0dG9uKCk7XG5kaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0KCk7XG5nZXRXZWF0aGVyRGF0YS5jYWxsKFxuXHRkb2N1bWVudCxcblx0Z2V0RGF0YS5iaW5kKGRvY3VtZW50KSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRjaXR5TmFtZSxcblx0ZmFsc2UsXG5cdGdldENvdW50cnlOYW1lXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==