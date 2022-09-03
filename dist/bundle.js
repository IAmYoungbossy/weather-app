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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\n.not-found::placeholder {\n\tcolor: red;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\n\n.unit-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.unit {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n}\n\nh1 {\n\tfont-size: 2.5rem;\n\tfont-family: monospace;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tbackground-color: #000000;\n\tborder: 1px solid #e9b8b8;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\n.not-found::placeholder {\n\tcolor: red;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\n\n.unit-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.unit {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n}\n\nh1 {\n\tfont-size: 2.5rem;\n\tfont-family: monospace;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tbackground-color: #000000;\n\tborder: 1px solid #e9b8b8;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-main */ "./src/page-main.js");







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
		tempSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "convert" }),
		temp = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		cityName = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		descIcon = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img"),
		myDelete = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", { class: "delete", src: _icons_delete_png__WEBPACK_IMPORTED_MODULE_3__ });

	tempSpan.textContent = `${parseInt(response.current.temp)}`;
	cityName.textContent = `${watchlistInput.value}`;
	if (this === document.body) iconAndCityName.append(descIcon, cityName);
	else iconAndCityName.append(descIcon, this);

	temp.append(tempSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_5__.superScript)());
	getIconAndTemp(city, iconAndCityName, descIcon, response, temp, myDelete);
	cityList.insertBefore(city, addCityButton);
	addEventListenerToCity(myDelete, city);
	if (
		document.body.childNodes[2].childNodes[2].lastChild.className ===
		"loader-container-watchlist"
	)
		_fetch_data__WEBPACK_IMPORTED_MODULE_1__.clearScreenLoader.call(document.body);
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
	if (watchlistInput.value.trim() !== "")
		_local_storage__WEBPACK_IMPORTED_MODULE_4__.watchlistArray.push(watchlistInput.value), (0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.setwatchlistArray)();
	if (watchlistInput.value) watchlistInput.value = "";
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

	if (e.target.className == "add-icon") {
		if (watchlistInput.value.trim() === "") return;
		_fetch_data__WEBPACK_IMPORTED_MODULE_1__.screenLoader.call(document),
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData.apply(document.body, [
				addCityToWatchlist.bind(document.body),
				_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat,
				watchlistInput.value,
				false,
				_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName,
			]);
	}

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
		if (headerInput.value.trim() === "") return;
		(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.screenLoader)();
		_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData.call(
			null,
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");






let unit, countryAndCityName, countryAndCityName2;

function checkPreferredUnit() {
	if (_local_storage__WEBPACK_IMPORTED_MODULE_4__.degree == "C") unit = "metric";
	else unit = "imperial";
}

function getWeatherData(func, cb, cityName, headerInput, getName) {
	checkPreferredUnit();
	const exclude = `&units=${unit}&APPID=${_config__WEBPACK_IMPORTED_MODULE_2__.API_TOKEN.KEY}`;
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}${exclude}`,
		{
			mode: "cors",
		}
	)
		.then((response) => response.json())
		.then((response) => {
			if (response.cod == 404) {
				displayCityNotFound.call(this);
				clearScreenLoader.call(this);
			} else if (response.cod == 200) {
				const { lat } = response.coord;
				const { lon } = response.coord;
				getName.call(this, response);
				cb(lat, lon, func, headerInput);
			}
		})
		.catch((error) => console.log(error));
}

function getLonAndLat(lat, lon, callback, headerInput) {
	next7DaysForecast(lat, lon, callback, headerInput);
}

function next7DaysForecast(lat, lon, callback, headerInput) {
	checkPreferredUnit();
	const exclude2 = `&exclude=minutely,hourly,alerts&units=${unit}&appid=${_config__WEBPACK_IMPORTED_MODULE_2__.API_TOKEN.KEY}`;
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
	const todayDataDiv = document.body.childNodes[2].childNodes[0],
		next7DaysDiv = document.body.childNodes[2].childNodes[1];
	clearData(todayDataDiv),
		clearData(next7DaysDiv),
		displayWeatherReport.call(this, response),
		display7DaysForecast(response);
	if (headerInput.value)
		(0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.newName)(headerInput.value), (0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.setCityName)(), (headerInput.value = "");
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
	const lowTempSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("span", { class: "convert" }),
		highTempSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("span", { class: "convert" }),
		feelsLikeSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("span", { class: "convert" }),
		temperatureSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("span", { class: "convert" });
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
	lowTempSpan.textContent = `${parseInt(response.daily[0].temp.min)}`;
	feelsLikeSpan.textContent = `${parseInt(response.current.feels_like)}`;
	highTempSpan.textContent = `${parseInt(response.daily[0].temp.max)}`;
	temperatureSpan.textContent = `${parseInt(response.current.temp)}`;

	lowTemp.append("Low: ", lowTempSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_0__.superScript)());
	highTemp.append("High: ", highTempSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_0__.superScript)());
	temperature.append(temperatureSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_0__.superScript)());
	feelsLikeTemp.append("Feels Like ", feelsLikeSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_0__.superScript)());
	wind.append(`Wind Speed: ${response.current.wind_speed}`);
	dewPoint.append(`Dew Point: ${response.current.dew_point}`);
	timeZone.append(`time Zone: ${response.timezone}`);
	uvIndex.append(`UV Index: ${response.current.uvi}`);
	pressure.append(`Pressure: ${response.current.pressure}`);
	humidity.append(`Humidity: ${response.current.humidity}`);
	descIcon.src = `https://openweathermap.org/img/w/${response.current.weather[0].icon}.png`;
}

function getCountryName(response) {
	const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
	const countryName = regionNames.of(response.sys.country);
	if (this === document) {
		if (countryName == response.name) countryAndCityName = countryName;
		else countryAndCityName = `${response.name}, ${countryName}.`;
	} else {
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
	if (this === document.body)
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
		`https://api.unsplash.com/search/photos?query=${weatherDesc}&per_page=2&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`,
		{ mode: "cors" }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			document.body.children[1].children[0].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${response.results[1].urls.raw})`;
		});
}

function displayCityNotFound() {
	const watchlistInput =
			document.body.children[1].children[2].children[1].lastChild.children[1],
		headerInput = document.body.children[0].children[1].children[0];
	if (this === document.body)
		watchlistInput.classList.add("not-found"),
			setPlaceholder.call(this, watchlistInput, "Add City");
	else
		headerInput.classList.add("not-found"),
			setPlaceholder.call(this, headerInput, "Enter City Name");
}

function setPlaceholder(input, placeholder) {
	input.value = "";
	input.setAttribute("placeholder", "City Not Found");
	setTimeout(() => {
		input.classList.remove("not-found");
		input.setAttribute("placeholder", placeholder);
	}, 4000);
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
/* harmony export */   "degree": () => (/* binding */ degree),
/* harmony export */   "newDegree": () => (/* binding */ newDegree),
/* harmony export */   "newName": () => (/* binding */ newName),
/* harmony export */   "setCityName": () => (/* binding */ setCityName),
/* harmony export */   "setDegree": () => (/* binding */ setDegree),
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

if (localStorage.getItem("degree") == null)
	localStorage.setItem("degree", JSON.stringify("C"));
let degree = JSON.parse(localStorage.getItem("degree"));
function newDegree(setName) {
	degree = setName;
}
function setDegree() {
	localStorage.setItem("degree", JSON.stringify(degree));
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
/* harmony export */   "convertBetweenUnits": () => (/* binding */ convertBetweenUnits),
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
/* harmony import */ var _icons_degree_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/degree.png */ "./src/icons/degree.png");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");










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
	const supScript = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("sup", { class: "super-script" }),
		supScript2 = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("sup", { class: "super-script" }),
		degreeSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "super-span" });
	degreeSpan.textContent = _local_storage__WEBPACK_IMPORTED_MODULE_8__.degree;
	supScript.textContent = "o";
	supScript2.append(supScript, degreeSpan);
	addListenerForEventTo(document.querySelector(".degree"), degreeSpan);
	addListenerForEventTo(document.querySelector(".unit"), degreeSpan);
	return supScript2;
}

function addListenerForEventTo(element, unit) {
	element.addEventListener("click", () => {
		if (_local_storage__WEBPACK_IMPORTED_MODULE_8__.degree == "C") unit.textContent = "C";
		else unit.textContent = "F";
	});
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

function convertBetweenUnits() {
	const todayDataDiv = document.body.children[0],
		unit = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "unit" }),
		unitDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "unit-div" }),
		MyDegreeIcon = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img", {
			class: "degree",
			src: _icons_degree_png__WEBPACK_IMPORTED_MODULE_7__,
		});

	_local_storage__WEBPACK_IMPORTED_MODULE_8__.degree == "C" ? (unit.textContent = "F") : (unit.textContent = "C");
	unitDiv.append(MyDegreeIcon, unit);
	todayDataDiv.append(unitDiv);
	listenToEventFrom(unit, unit);
	listenToEventFrom(MyDegreeIcon, unit);
}

function listenToEventFrom(element, unit) {
	element.addEventListener("click", () => {
		if (_local_storage__WEBPACK_IMPORTED_MODULE_8__.degree == "C")
			(0,_local_storage__WEBPACK_IMPORTED_MODULE_8__.newDegree)("F"),
				(0,_local_storage__WEBPACK_IMPORTED_MODULE_8__.setDegree)(),
				(unit.textContent = " C"),
				displayFahrenheit();
		else
			(0,_local_storage__WEBPACK_IMPORTED_MODULE_8__.newDegree)("C"), (0,_local_storage__WEBPACK_IMPORTED_MODULE_8__.setDegree)(), (unit.textContent = " F"), displayCelsius();
	});
}

function displayFahrenheit() {
	document.querySelectorAll(".convert").forEach((temp) => {
		temp.textContent = convertCelsiusToFahrenheit(parseFloat(temp.textContent));
	});
}

function displayCelsius() {
	document.querySelectorAll(".convert").forEach((temp) => {
		temp.textContent = convertFahrenheitToCelsius(parseFloat(temp.textContent));
	});
}

function convertCelsiusToFahrenheit(celsius) {
	const fahrenheit = (celsius * 9) / 5 + 32;
	return Math.round((fahrenheit * 1000) / 1000);
}

function convertFahrenheitToCelsius(fahrenheit) {
	const celsius = ((fahrenheit - 32) * 5) / 9;
	return Math.round((celsius * 1000) / 1000);
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
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-main */ "./src/page-main.js");



function createForecastCard(daily) {
	const next7DaysDiv = document.body.childNodes[2].childNodes[1],
		card = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "card" }),
		dayAndDesc = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div"),
		iconDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "icon-div" }),
		tempDiv = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div"),
		day = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		weatherDesc = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		weatherDescIcon = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("img"),
		lowTempSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "convert" }),
		lowTemp = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p"),
		highTempSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "convert" }),
		highTemp = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p");

	const date = new Date(daily.dt * 1000);
	const weekday = date.toLocaleString("en-us", { weekday: "long" });

	lowTempSpan.textContent = `${parseInt(daily.temp.min)}`;
	highTempSpan.textContent = `${parseInt(daily.temp.max)}`;
	day.textContent = `${weekday}`;
	weatherDesc.textContent = `${daily.weather[0].description}`;
	weatherDescIcon.src = `https://openweathermap.org/img/w/${daily.weather[0].icon}.png`;
	highTemp.append(highTempSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_1__.superScript)());
	lowTemp.append(lowTempSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_1__.superScript)());
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

module.exports = __webpack_require__.p + "589a3cdb9face96102f3.png";

/***/ }),

/***/ "./src/icons/degree.png":
/*!******************************!*\
  !*** ./src/icons/degree.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5a7a39598490c283815.png";

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

module.exports = __webpack_require__.p + "8c6e6c323c2e61e3dc14.png";

/***/ }),

/***/ "./src/icons/pressure.png":
/*!********************************!*\
  !*** ./src/icons/pressure.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8847b906f21f94074363.png";

/***/ }),

/***/ "./src/icons/sealevel.png":
/*!********************************!*\
  !*** ./src/icons/sealevel.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84bb594c397113cbeb93.png";

/***/ }),

/***/ "./src/icons/timezone.png":
/*!********************************!*\
  !*** ./src/icons/timezone.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cf7afbf93086a33fb30.png";

/***/ }),

/***/ "./src/icons/wind.png":
/*!****************************!*\
  !*** ./src/icons/wind.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cffd38f9eafec37af5e.png";

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
(0,_page_main__WEBPACK_IMPORTED_MODULE_4__.convertBetweenUnits)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUss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O0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3QjtBQU92QjtBQUN1QjtBQUN5QjtBQUs1QztBQUNpQjs7QUFFM0MsMERBQVk7QUFDWiw4REFBa0I7QUFDbEIsK0RBQW1CO0FBQ25CLDBEQUFZO0FBQ1osMERBQVM7QUFDVCx5REFBWTtBQUNaLG9FQUFtQjtBQUNuQiwwRUFBeUI7QUFDekIsNERBQW1CO0FBQ25CO0FBQ0EsQ0FBQyxxREFBWTtBQUNiLENBQUMscURBQVk7QUFDYixDQUFDLG9EQUFRO0FBQ1Q7QUFDQSxDQUFDLHVEQUFjO0FBQ2YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NpdHktd2F0Y2hsaXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jcmVhdGUtZG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXZlbi1kYXlzLWZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRnYXA6IDVweDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0cGFkZGluZzogMjBweCA1MHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc2VhcmNoLWRpdj5pbnB1dCB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiAjZWRhZWFlO1xcbn1cXG5cXG4ubm90LWZvdW5kOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6IHJlZDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGltZ3JleTtcXG5cXHRjb2xvcjogc25vdztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnVuaXQtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi51bml0IHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5zZWFyY2gtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnRpdGxlLWRpdiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nICovXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjsgKi9cXG59XFxuXFxuLnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogNXB4IDVweCAwcHggMjBweDtcXG5cXHRmbGV4OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwcHggMjBweCBibGFjaztcXG59XFxuXFxuLnRvZGF5LWRhdGEtZGl2PmRpdjpmaXJzdC1vZi10eXBlLFxcbi50b2RheS1kYXRhLWRpdj5oMjpmaXJzdC1vZi10eXBlLFxcbi50ZW1wLWRpdj4qIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi53ZWF0aGVyLWRlc2Mge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5leHQtN2RheXMtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGdyaWQtYXJlYTogMi8xLzMvMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMjBweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4ud2F0Y2hsaXN0LWRpdiB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiAxNXB4IDIwcHggNXB4IDEwcHg7XFxuXFx0Z3JpZC1hcmVhOiAxLzIvMy8zO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ud2F0Y2hsaXN0LWRpdj5oMiB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxudWwge1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmxpIHtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxuXFx0cGFkZGluZzogMjBweCAxMHB4O1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDApO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcblxcbi5hZGQtYnV0dG9uPmlucHV0IHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWluLXdpZHRoOiA5NXB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dDpmb2N1cy12aXNpYmxlIHtcXG5cXHRmbGV4OiAxO1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jaXR5IHtcXG5cXHRwYWRkaW5nOiA3cHggMzBweCA3cHggN3B4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGNvbG9yOiAjZmZlYmNlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcblxcbi5jaXR5PmRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5PmRpdjpmaXJzdC1vZi10eXBlPmltZyB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5kZWxldGUge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMTBweDtcXG5cXHR0b3A6IDVweDtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93LWRlbGV0ZSB7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRlbXAtcmFuZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlPi5zdXBlci1zY3JpcHQge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRlc2MtaWNvbiB7XFxuXFx0d2lkdGg6IDc1cHg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdj4qIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRjb2xvcjogIzFhMDAyYTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bWluLXdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA1MCUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2U5YjhiODtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2Pio+aW1nIHtcXG5cXHR3aWR0aDogMjVweDtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0Y29sb3I6ICNlYmNhY2E7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG5cXHRwYWRkaW5nOiAycHggMTBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZTliOGI4O1xcblxcdGZsZXg6IDE7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNhcmQ+ZGl2PnA6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Zm9udC1zaXplOiAwLjk1cmVtO1xcbn1cXG5cXG4uaWNvbi1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmVlbHMtbGlrZS10ZW1wIHtcXG5cXHRtYXJnaW4tdG9wOiAtMTVweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcbmZvb3RlciB7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgIzQ1MWIxYjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4ubG9hZGVyLWNvbnRhaW5lcixcXG4ubG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3Qge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0LyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5sb2FkZXItY29udGFpbmVyLXdhdGNobGlzdCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4ubG9hZGVyLFxcbi5sb2FkZXItd2F0Y2hsaXN0IHtcXG5cXHRib3JkZXI6IDEwcHggc29saWQgIzkwNjI2MjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyLXRvcDogMTBweCBzb2xpZCAjMWQ0ZDRmO1xcblxcdHdpZHRoOiA2MHB4O1xcblxcdGhlaWdodDogNjBweDtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAzNSU7XFxuXFx0bGVmdDogNDUlO1xcbn1cXG5cXG4ubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0Ym9yZGVyOiA1cHggc29saWQgIzkwNjI2MjtcXG5cXHRib3JkZXItdG9wOiA1cHggc29saWQgIzFkNGQ0ZjtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0dG9wOiA0MCU7XFxuXFx0bGVmdDogNDAlO1xcbn1cXG5cXG4vKiBTYWZhcmkgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuXFx0MCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblxcdH1cXG59XFxuXFxuLyogVXNlcyBmbGV4LWRpcmVjdGlvbiBjb2x1bW4gZm9yIHNjcmVlbiBzaXplcyBiZWxvdyA2MDBweCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxNXB4KSB7XFxuXFx0bWFpbiB7XFxuXFx0XFx0ZmxleDogMTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcblxcblxcdC50b2RheS1kYXRhLWRpdiB7XFxuXFx0XFx0cGFkZGluZzogNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQubmV4dC03ZGF5cy1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDE1cHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcblxcdC53YXRjaGxpc3QtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0XFx0dG9wOiA1MCU7XFxuXFx0XFx0bGVmdDogNDMlO1xcblxcdH1cXG5cXG5cXHQubG9hZGVyIHtcXG5cXHRcXHR0b3A6IDQwJTtcXG5cXHRcXHRsZWZ0OiA0MCU7XFxuXFx0fVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsc0JBQXNCO0FBQ3ZC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O0VBQ0MsaUNBQWlDO0NBQ2xDO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHVCQUF1QjtDQUN4Qjs7Q0FFQTtFQUNDLHlCQUF5QjtDQUMxQjtBQUNEOztBQUVBLDREQUE0RDtBQUM1RDtDQUNDO0VBQ0MsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQywyQkFBMkI7Q0FDNUI7O0NBRUE7RUFDQyw0QkFBNEI7Q0FDN0I7O0NBRUE7RUFDQyw0QkFBNEI7Q0FDN0I7O0NBRUE7RUFDQyxRQUFRO0VBQ1IsU0FBUztDQUNWOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFNBQVM7Q0FDVjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGdhcDogNXB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiAyMHB4IDUwcHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmM5ODk4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5zZWFyY2gtZGl2PmlucHV0IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0aGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6ICNlZGFlYWU7XFxufVxcblxcbi5ub3QtZm91bmQ6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogcmVkO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xcblxcdGNvbG9yOiBzbm93O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4udW5pdC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnVuaXQge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcblxcdGZsZXg6IDI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4udGl0bGUtZGl2IHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4vKiBNYWluIFN0eWxpbmcgKi9cXG5tYWluIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0LyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyOyAqL1xcbn1cXG5cXG4udG9kYXktZGF0YS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiA1cHggNXB4IDBweCAyMHB4O1xcblxcdGZsZXg6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjBweCAyMHB4IGJsYWNrO1xcbn1cXG5cXG4udG9kYXktZGF0YS1kaXY+ZGl2OmZpcnN0LW9mLXR5cGUsXFxuLnRvZGF5LWRhdGEtZGl2PmgyOmZpcnN0LW9mLXR5cGUsXFxuLnRlbXAtZGl2Pioge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndlYXRoZXItZGVzYyB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV4dC03ZGF5cy1kaXYge1xcblxcdGZsZXg6IDI7XFxuXFx0Z3JpZC1hcmVhOiAyLzEvMy8yO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogMTBweCA1cHggMTBweCAyMHB4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi53YXRjaGxpc3QtZGl2IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDE1cHggMjBweCA1cHggMTBweDtcXG5cXHRncmlkLWFyZWE6IDEvMi8zLzM7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi53YXRjaGxpc3QtZGl2PmgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG51bCB7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxubGkge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXHRwYWRkaW5nOiAyMHB4IDEwcHg7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCk7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1yaWdodDogMzBweDtcXG5cXHRnYXA6IDVweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDIzMyAxODQgMTg0IC8gNTAlKTtcXG59XFxuXFxuLmFkZC1idXR0b24+aW5wdXQge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtaW4td2lkdGg6IDk1cHg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxufVxcblxcbi5hZGQtYnV0dG9uPmlucHV0OmZvY3VzLXZpc2libGUge1xcblxcdGZsZXg6IDE7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNpdHkge1xcblxcdHBhZGRpbmc6IDdweCAzMHB4IDdweCA3cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29sb3I6ICNmZmViY2U7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDIzMyAxODQgMTg0IC8gNTAlKTtcXG59XFxuXFxuLmNpdHk+ZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHk+ZGl2OmZpcnN0LW9mLXR5cGU+aW1nIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuXFx0d2lkdGg6IDIwcHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAxMHB4O1xcblxcdHRvcDogNXB4O1xcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3ctZGVsZXRlIHtcXG5cXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udGVtcC1yYW5nZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi50ZW1wZXJhdHVyZS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuXFx0Zm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmU+LnN1cGVyLXNjcmlwdCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZGVzYy1pY29uIHtcXG5cXHR3aWR0aDogNzVweDtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2Pioge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGNvbG9yOiAjMWEwMDJhO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDUwJSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZTliOGI4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+Kj5pbWcge1xcblxcdHdpZHRoOiAyNXB4O1xcblxcdGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRjb2xvcjogI2ViY2FjYTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcblxcdHBhZGRpbmc6IDJweCAxMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNlOWI4Yjg7XFxuXFx0ZmxleDogMTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY2FyZD5kaXY+cDpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxufVxcblxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mZWVscy1saWtlLXRlbXAge1xcblxcdG1hcmdpbi10b3A6IC0xNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuZm9vdGVyIHtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDUxYjFiO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5sb2FkZXItY29udGFpbmVyLFxcbi5sb2FkZXItY29udGFpbmVyLXdhdGNobGlzdCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHQvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTsgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxufVxcblxcbi5sb2FkZXIsXFxuLmxvYWRlci13YXRjaGxpc3Qge1xcblxcdGJvcmRlcjogMTBweCBzb2xpZCAjOTA2MjYyO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDYwcHg7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDM1JTtcXG5cXHRsZWZ0OiA0NSU7XFxufVxcblxcbi5sb2FkZXItd2F0Y2hsaXN0IHtcXG5cXHRib3JkZXI6IDVweCBzb2xpZCAjOTA2MjYyO1xcblxcdGJvcmRlci10b3A6IDVweCBzb2xpZCAjMWQ0ZDRmO1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHR0b3A6IDQwJTtcXG5cXHRsZWZ0OiA0MCU7XFxufVxcblxcbi8qIFNhZmFyaSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcXG5cXHQwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG4vKiBVc2VzIGZsZXgtZGlyZWN0aW9uIGNvbHVtbiBmb3Igc2NyZWVuIHNpemVzIGJlbG93IDYwMHB4ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjE1cHgpIHtcXG5cXHRtYWluIHtcXG5cXHRcXHRmbGV4OiAxO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFxuXFx0LnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiA1cHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcblxcdC5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0LndhdGNobGlzdC1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDE1cHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcblxcdC5sb2FkZXItd2F0Y2hsaXN0IHtcXG5cXHRcXHR0b3A6IDUwJTtcXG5cXHRcXHRsZWZ0OiA0MyU7XFxuXFx0fVxcblxcblxcdC5sb2FkZXIge1xcblxcdFxcdHRvcDogNDAlO1xcblxcdFxcdGxlZnQ6IDQwJTtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IHtcblx0Y2xlYXJTY3JlZW5Mb2FkZXIsXG5cdGdldENvdW50cnlOYW1lLFxuXHRnZXREYXRhLFxuXHRnZXRMb25BbmRMYXQsXG5cdGdldFdlYXRoZXJEYXRhLFxuXHRzY3JlZW5Mb2FkZXIsXG59IGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCIuL2ljb25zL2FkZGNpdHkucG5nXCI7XG5pbXBvcnQgRGVsZXRlIGZyb20gXCIuL2ljb25zL2RlbGV0ZS5wbmdcIjtcbmltcG9ydCB7IHNldHdhdGNobGlzdEFycmF5LCB3YXRjaGxpc3RBcnJheSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IHN1cGVyU2NyaXB0IH0gZnJvbSBcIi4vcGFnZS1tYWluXCI7XG5cbmZ1bmN0aW9uIHdhdGNobGlzdCgpIHtcblx0Y29uc3Qgd2F0Y2hsaXN0RGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0sXG5cdFx0d2F0Y2hsaXN0SGVhZGVyID0gY3JlYXRlRG9tRWxlbWVudChcImgyXCIpLFxuXHRcdGNpdHlMaXN0ID0gY3JlYXRlRG9tRWxlbWVudChcInVsXCIpLFxuXHRcdGFkZENpdHlCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KFwibGlcIiwgeyBjbGFzczogXCJhZGQtYnV0dG9uXCIgfSksXG5cdFx0d2F0Y2hsaXN0SW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KFwiaW5wdXRcIiwge1xuXHRcdFx0Y2xhc3M6IFwid2F0Y2hsaXN0LWlucHV0XCIsXG5cdFx0XHR0eXBlOiBcInNlYXJjaFwiLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiQWRkIENpdHlcIixcblx0XHR9KSxcblx0XHRNeUFkZEljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgY2xhc3M6IFwiYWRkLWljb25cIiwgc3JjOiBBZGRJY29uIH0pO1xuXG5cdGFkZENpdHlCdXR0b24uYXBwZW5kKE15QWRkSWNvbiwgd2F0Y2hsaXN0SW5wdXQpO1xuXHR3YXRjaGxpc3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIldhdGNobGlzdFwiO1xuXHRjaXR5TGlzdC5hcHBlbmQoYWRkQ2l0eUJ1dHRvbik7XG5cdHdhdGNobGlzdERpdi5hcHBlbmQod2F0Y2hsaXN0SGVhZGVyLCBjaXR5TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGFkZENpdHlUb1dhdGNobGlzdChyZXNwb25zZSkge1xuXHRjb25zdCBhZGRDaXR5QnV0dG9uID1cblx0XHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkLFxuXHRcdGNpdHlMaXN0ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXSxcblx0XHR3YXRjaGxpc3RJbnB1dCA9IGFkZENpdHlCdXR0b24uY2hpbGRyZW5bMV0sXG5cdFx0aWNvbkFuZENpdHlOYW1lID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiKSxcblx0XHRjaXR5ID0gY3JlYXRlRG9tRWxlbWVudChcImxpXCIsIHsgY2xhc3M6IFwiY2l0eVwiIH0pLFxuXHRcdHRlbXBTcGFuID0gY3JlYXRlRG9tRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJjb252ZXJ0XCIgfSksXG5cdFx0dGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdGNpdHlOYW1lID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0ZGVzY0ljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIpLFxuXHRcdG15RGVsZXRlID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImRlbGV0ZVwiLCBzcmM6IERlbGV0ZSB9KTtcblxuXHR0ZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHJlc3BvbnNlLmN1cnJlbnQudGVtcCl9YDtcblx0Y2l0eU5hbWUudGV4dENvbnRlbnQgPSBgJHt3YXRjaGxpc3RJbnB1dC52YWx1ZX1gO1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQuYm9keSkgaWNvbkFuZENpdHlOYW1lLmFwcGVuZChkZXNjSWNvbiwgY2l0eU5hbWUpO1xuXHRlbHNlIGljb25BbmRDaXR5TmFtZS5hcHBlbmQoZGVzY0ljb24sIHRoaXMpO1xuXG5cdHRlbXAuYXBwZW5kKHRlbXBTcGFuLCBzdXBlclNjcmlwdCgpKTtcblx0Z2V0SWNvbkFuZFRlbXAoY2l0eSwgaWNvbkFuZENpdHlOYW1lLCBkZXNjSWNvbiwgcmVzcG9uc2UsIHRlbXAsIG15RGVsZXRlKTtcblx0Y2l0eUxpc3QuaW5zZXJ0QmVmb3JlKGNpdHksIGFkZENpdHlCdXR0b24pO1xuXHRhZGRFdmVudExpc3RlbmVyVG9DaXR5KG15RGVsZXRlLCBjaXR5KTtcblx0aWYgKFxuXHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmxhc3RDaGlsZC5jbGFzc05hbWUgPT09XG5cdFx0XCJsb2FkZXItY29udGFpbmVyLXdhdGNobGlzdFwiXG5cdClcblx0XHRjbGVhclNjcmVlbkxvYWRlci5jYWxsKGRvY3VtZW50LmJvZHkpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9DaXR5KG15RGVsZXRlLCBjaXR5KSB7XG5cdG15RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0bGV0IGxpc3RBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpKTtcblx0XHRsZXQgaW5kZXhPZkNpdHkgPSBsaXN0QXJyYXkuaW5kZXhPZihteURlbGV0ZS5wYXJlbnROb2RlKTtcblx0XHR3YXRjaGxpc3RBcnJheS5zcGxpY2UoaW5kZXhPZkNpdHksIDEpO1xuXHRcdHNldHdhdGNobGlzdEFycmF5KCk7XG5cdFx0bXlEZWxldGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG15RGVsZXRlLnBhcmVudE5vZGUpO1xuXHR9KTtcblx0Y2l0eS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PlxuXHRcdG15RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJzaG93LWRlbGV0ZVwiKVxuXHQpO1xuXHRjaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+XG5cdFx0bXlEZWxldGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZGVsZXRlXCIpXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGdldEljb25BbmRUZW1wKFxuXHRjaXR5LFxuXHRpY29uQW5kQ2l0eU5hbWUsXG5cdGRlc2NJY29uLFxuXHRyZXNwb25zZSxcblx0dGVtcCxcblx0bXlEZWxldGVcbikge1xuXHRjb25zdCB3YXRjaGxpc3RJbnB1dCA9XG5cdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGRcblx0XHRcdC5jaGlsZE5vZGVzWzFdO1xuXHRjaXR5LmFwcGVuZChpY29uQW5kQ2l0eU5hbWUsIHRlbXAsIG15RGVsZXRlKTtcblx0ZGVzY0ljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7cmVzcG9uc2UuY3VycmVudC53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG5cdGlmICh3YXRjaGxpc3RJbnB1dC52YWx1ZS50cmltKCkgIT09IFwiXCIpXG5cdFx0d2F0Y2hsaXN0QXJyYXkucHVzaCh3YXRjaGxpc3RJbnB1dC52YWx1ZSksIHNldHdhdGNobGlzdEFycmF5KCk7XG5cdGlmICh3YXRjaGxpc3RJbnB1dC52YWx1ZSkgd2F0Y2hsaXN0SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclRvQnV0dG9uKCkge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRXZlbnRMaXN0ZW5lcnMpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhlKSB7XG5cdGNvbnN0IGFkZENpdHlCdXR0b24gPVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQsXG5cdFx0aGVhZGVySW5wdXQgPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLFxuXHRcdGhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0sXG5cdFx0d2F0Y2hsaXN0SW5wdXQgPSBhZGRDaXR5QnV0dG9uLmNoaWxkTm9kZXNbMV07XG5cblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC1pY29uXCIpIHtcblx0XHRpZiAod2F0Y2hsaXN0SW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XG5cdFx0c2NyZWVuTG9hZGVyLmNhbGwoZG9jdW1lbnQpLFxuXHRcdFx0Z2V0V2VhdGhlckRhdGEuYXBwbHkoZG9jdW1lbnQuYm9keSwgW1xuXHRcdFx0XHRhZGRDaXR5VG9XYXRjaGxpc3QuYmluZChkb2N1bWVudC5ib2R5KSxcblx0XHRcdFx0Z2V0TG9uQW5kTGF0LFxuXHRcdFx0XHR3YXRjaGxpc3RJbnB1dC52YWx1ZSxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdGdldENvdW50cnlOYW1lLFxuXHRcdFx0XSk7XG5cdH1cblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIikuZm9yRWFjaCgoY2l0eUxpc3QpID0+IHtcblx0XHRpZiAoXG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdCB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMF0gfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzFdIHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblswXS5jaGlsZHJlblsxXSB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cblx0XHQpIHtcblx0XHRcdHNjcmVlbkxvYWRlcigpO1xuXHRcdFx0Y29uc3QgY2l0eSA9IGNpdHlMaXN0LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdGdldFdlYXRoZXJEYXRhKGdldERhdGEsIGdldExvbkFuZExhdCwgY2l0eSwgZmFsc2UsIGdldENvdW50cnlOYW1lKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChlLnRhcmdldCA9PT0gaGVhZGVyQnV0dG9uKSB7XG5cdFx0aWYgKGhlYWRlcklucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuXHRcdHNjcmVlbkxvYWRlcigpO1xuXHRcdGdldFdlYXRoZXJEYXRhLmNhbGwoXG5cdFx0XHRudWxsLFxuXHRcdFx0Z2V0RGF0YSxcblx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdGhlYWRlcklucHV0LnZhbHVlLFxuXHRcdFx0aGVhZGVySW5wdXQsXG5cdFx0XHRnZXRDb3VudHJ5TmFtZVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVsYXlFeGVjdXRpb24oY2l0eSkge1xuXHRjb25zdCBmZXRjaE5vdyA9IGdldFdlYXRoZXJEYXRhKFxuXHRcdGFkZENpdHlUb1dhdGNobGlzdC5iaW5kKGNpdHkpLFxuXHRcdGdldExvbkFuZExhdCxcblx0XHRjaXR5LFxuXHRcdGZhbHNlLFxuXHRcdGdldENvdW50cnlOYW1lXG5cdCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShmZXRjaE5vdyksIDEyMDApO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCgpIHtcblx0aWYgKHdhdGNobGlzdEFycmF5Lmxlbmd0aCA+IDApXG5cdFx0Zm9yIChjb25zdCBjaXR5IG9mIHdhdGNobGlzdEFycmF5KSB7XG5cdFx0XHRhd2FpdCBkZWxheUV4ZWN1dGlvbihjaXR5KTtcblx0XHR9XG59XG5cbmV4cG9ydCB7XG5cdHdhdGNobGlzdCxcblx0YWRkTGlzdGVuZXJUb0J1dHRvbixcblx0YWRkQ2l0eVRvV2F0Y2hsaXN0LFxuXHRkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0LFxufTtcbiIsImV4cG9ydCBjb25zdCBBUElfVE9LRU4gPSB7XG5cdEtFWTogXCJjOTNmZDE4MTdmM2ZiZTQyYWVhYzBhNjMwNzY2MDNiOVwiLFxuXHRLRVkyOiBcIjBhZDcxM2ZhYzEyMGI4M2JkOTA3MjYxZmI3NzQyZmQ3XCIsXG5cdEtFWTM6IFwiMjBmNzYzMmZmYzJjMDIyNjU0ZTQwOTNjNjk0N2I0ZjRcIixcblx0VU5TUExBU0hfQUNDRVNTX0tFWTogXCJrZEZxamJoY2lJRkliMGxEZWZJMkk0enFSYkFqUGExM1pHdTBkam51bnM0XCIsXG5cdFVOU1BMQVNIX1NFQ1JFVF9LRVk6IFwiZXBreUNYb2dIcWQ4azJ1WDdvQXJhZGwxcDQ0MkRjZi1ESThJdjdWRVR3OFwiLFxufTsiLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgRE9NIEVsZW1lbnRzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG5cdGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG5cdGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuXHRzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuXHRyZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG5cdE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuXHR9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9OyIsImltcG9ydCB7IGRhdGFEaXNwbGF5LCBtaW5vckRhdGFSZXBvcnQsIHN1cGVyU2NyaXB0IH0gZnJvbSBcIi4vcGFnZS1tYWluXCI7XG5pbXBvcnQgeyBjcmVhdGVGb3JlY2FzdENhcmQgfSBmcm9tIFwiLi9zZXZlbi1kYXlzLWZvcmVjYXN0XCI7XG5pbXBvcnQgeyBBUElfVE9LRU4gfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcbmltcG9ydCB7IGRlZ3JlZSwgbmV3TmFtZSwgc2V0Q2l0eU5hbWUgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmxldCB1bml0LCBjb3VudHJ5QW5kQ2l0eU5hbWUsIGNvdW50cnlBbmRDaXR5TmFtZTI7XG5cbmZ1bmN0aW9uIGNoZWNrUHJlZmVycmVkVW5pdCgpIHtcblx0aWYgKGRlZ3JlZSA9PSBcIkNcIikgdW5pdCA9IFwibWV0cmljXCI7XG5cdGVsc2UgdW5pdCA9IFwiaW1wZXJpYWxcIjtcbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoZnVuYywgY2IsIGNpdHlOYW1lLCBoZWFkZXJJbnB1dCwgZ2V0TmFtZSkge1xuXHRjaGVja1ByZWZlcnJlZFVuaXQoKTtcblx0Y29uc3QgZXhjbHVkZSA9IGAmdW5pdHM9JHt1bml0fSZBUFBJRD0ke0FQSV9UT0tFTi5LRVl9YDtcblx0ZmV0Y2goXG5cdFx0YGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0ke2V4Y2x1ZGV9YCxcblx0XHR7XG5cdFx0XHRtb2RlOiBcImNvcnNcIixcblx0XHR9XG5cdClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGlmIChyZXNwb25zZS5jb2QgPT0gNDA0KSB7XG5cdFx0XHRcdGRpc3BsYXlDaXR5Tm90Rm91bmQuY2FsbCh0aGlzKTtcblx0XHRcdFx0Y2xlYXJTY3JlZW5Mb2FkZXIuY2FsbCh0aGlzKTtcblx0XHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuY29kID09IDIwMCkge1xuXHRcdFx0XHRjb25zdCB7IGxhdCB9ID0gcmVzcG9uc2UuY29vcmQ7XG5cdFx0XHRcdGNvbnN0IHsgbG9uIH0gPSByZXNwb25zZS5jb29yZDtcblx0XHRcdFx0Z2V0TmFtZS5jYWxsKHRoaXMsIHJlc3BvbnNlKTtcblx0XHRcdFx0Y2IobGF0LCBsb24sIGZ1bmMsIGhlYWRlcklucHV0KTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIGdldExvbkFuZExhdChsYXQsIGxvbiwgY2FsbGJhY2ssIGhlYWRlcklucHV0KSB7XG5cdG5leHQ3RGF5c0ZvcmVjYXN0KGxhdCwgbG9uLCBjYWxsYmFjaywgaGVhZGVySW5wdXQpO1xufVxuXG5mdW5jdGlvbiBuZXh0N0RheXNGb3JlY2FzdChsYXQsIGxvbiwgY2FsbGJhY2ssIGhlYWRlcklucHV0KSB7XG5cdGNoZWNrUHJlZmVycmVkVW5pdCgpO1xuXHRjb25zdCBleGNsdWRlMiA9IGAmZXhjbHVkZT1taW51dGVseSxob3VybHksYWxlcnRzJnVuaXRzPSR7dW5pdH0mYXBwaWQ9JHtBUElfVE9LRU4uS0VZfWA7XG5cdGZldGNoKFxuXHRcdGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0ke2V4Y2x1ZGUyfWBcblx0KVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0Y2FsbGJhY2socmVzcG9uc2UsIGhlYWRlcklucHV0KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShyZXNwb25zZSwgaGVhZGVySW5wdXQpIHtcblx0bGV0IHdlYXRoZXJEZXNjID0gcmVzcG9uc2UuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXSxcblx0XHRuZXh0N0RheXNEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXTtcblx0Y2xlYXJEYXRhKHRvZGF5RGF0YURpdiksXG5cdFx0Y2xlYXJEYXRhKG5leHQ3RGF5c0RpdiksXG5cdFx0ZGlzcGxheVdlYXRoZXJSZXBvcnQuY2FsbCh0aGlzLCByZXNwb25zZSksXG5cdFx0ZGlzcGxheTdEYXlzRm9yZWNhc3QocmVzcG9uc2UpO1xuXHRpZiAoaGVhZGVySW5wdXQudmFsdWUpXG5cdFx0bmV3TmFtZShoZWFkZXJJbnB1dC52YWx1ZSksIHNldENpdHlOYW1lKCksIChoZWFkZXJJbnB1dC52YWx1ZSA9IFwiXCIpO1xuXHRnZXRXZWF0aGVySW1hZ2Uod2VhdGhlckRlc2MpO1xufVxuXG5mdW5jdGlvbiBjbGVhckRhdGEoZGl2KSB7XG5cdHdoaWxlIChkaXYuZmlyc3RDaGlsZCkgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheTdEYXlzRm9yZWNhc3QocmVzcG9uc2UpIHtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCByZXNwb25zZS5kYWlseS5sZW5ndGg7IGkrKylcblx0XHRjcmVhdGVGb3JlY2FzdENhcmQocmVzcG9uc2UuZGFpbHlbaV0pO1xuXHRjbGVhclNjcmVlbkxvYWRlcigpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlclJlcG9ydChyZXNwb25zZSkge1xuXHRjb25zdCBsb3dUZW1wU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY29udmVydFwiIH0pLFxuXHRcdGhpZ2hUZW1wU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY29udmVydFwiIH0pLFxuXHRcdGZlZWxzTGlrZVNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHR0ZW1wZXJhdHVyZVNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KTtcblx0Y29uc3QgW1xuXHRcdHdlYXRoZXJEZXNjLFxuXHRcdGRlc2NJY29uLFxuXHRcdG5hbWVPZkNpdHksXG5cdFx0dGVtcGVyYXR1cmUsXG5cdFx0bG93VGVtcCxcblx0XHRoaWdoVGVtcCxcblx0XHRmZWVsc0xpa2VUZW1wLFxuXHRdID0gZGF0YURpc3BsYXkoKTtcblxuXHRjb25zdCBbd2luZCwgZGV3UG9pbnQsIHRpbWVab25lLCB1dkluZGV4LCBwcmVzc3VyZSwgaHVtaWRpdHldID1cblx0XHRtaW5vckRhdGFSZXBvcnQoKTtcblxuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQpIG5hbWVPZkNpdHkudGV4dENvbnRlbnQgPSBjb3VudHJ5QW5kQ2l0eU5hbWU7XG5cdGVsc2UgbmFtZU9mQ2l0eS50ZXh0Q29udGVudCA9IGNvdW50cnlBbmRDaXR5TmFtZTI7XG5cdHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG5cdGxvd1RlbXBTcGFuLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQocmVzcG9uc2UuZGFpbHlbMF0udGVtcC5taW4pfWA7XG5cdGZlZWxzTGlrZVNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChyZXNwb25zZS5jdXJyZW50LmZlZWxzX2xpa2UpfWA7XG5cdGhpZ2hUZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHJlc3BvbnNlLmRhaWx5WzBdLnRlbXAubWF4KX1gO1xuXHR0ZW1wZXJhdHVyZVNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChyZXNwb25zZS5jdXJyZW50LnRlbXApfWA7XG5cblx0bG93VGVtcC5hcHBlbmQoXCJMb3c6IFwiLCBsb3dUZW1wU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdGhpZ2hUZW1wLmFwcGVuZChcIkhpZ2g6IFwiLCBoaWdoVGVtcFNwYW4sIHN1cGVyU2NyaXB0KCkpO1xuXHR0ZW1wZXJhdHVyZS5hcHBlbmQodGVtcGVyYXR1cmVTcGFuLCBzdXBlclNjcmlwdCgpKTtcblx0ZmVlbHNMaWtlVGVtcC5hcHBlbmQoXCJGZWVscyBMaWtlIFwiLCBmZWVsc0xpa2VTcGFuLCBzdXBlclNjcmlwdCgpKTtcblx0d2luZC5hcHBlbmQoYFdpbmQgU3BlZWQ6ICR7cmVzcG9uc2UuY3VycmVudC53aW5kX3NwZWVkfWApO1xuXHRkZXdQb2ludC5hcHBlbmQoYERldyBQb2ludDogJHtyZXNwb25zZS5jdXJyZW50LmRld19wb2ludH1gKTtcblx0dGltZVpvbmUuYXBwZW5kKGB0aW1lIFpvbmU6ICR7cmVzcG9uc2UudGltZXpvbmV9YCk7XG5cdHV2SW5kZXguYXBwZW5kKGBVViBJbmRleDogJHtyZXNwb25zZS5jdXJyZW50LnV2aX1gKTtcblx0cHJlc3N1cmUuYXBwZW5kKGBQcmVzc3VyZTogJHtyZXNwb25zZS5jdXJyZW50LnByZXNzdXJlfWApO1xuXHRodW1pZGl0eS5hcHBlbmQoYEh1bWlkaXR5OiAke3Jlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHl9YCk7XG5cdGRlc2NJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3Jlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5pY29ufS5wbmdgO1xufVxuXG5mdW5jdGlvbiBnZXRDb3VudHJ5TmFtZShyZXNwb25zZSkge1xuXHRjb25zdCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbXCJlblwiXSwgeyB0eXBlOiBcInJlZ2lvblwiIH0pO1xuXHRjb25zdCBjb3VudHJ5TmFtZSA9IHJlZ2lvbk5hbWVzLm9mKHJlc3BvbnNlLnN5cy5jb3VudHJ5KTtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KSB7XG5cdFx0aWYgKGNvdW50cnlOYW1lID09IHJlc3BvbnNlLm5hbWUpIGNvdW50cnlBbmRDaXR5TmFtZSA9IGNvdW50cnlOYW1lO1xuXHRcdGVsc2UgY291bnRyeUFuZENpdHlOYW1lID0gYCR7cmVzcG9uc2UubmFtZX0sICR7Y291bnRyeU5hbWV9LmA7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKGNvdW50cnlOYW1lID09IHJlc3BvbnNlLm5hbWUpIGNvdW50cnlBbmRDaXR5TmFtZTIgPSBjb3VudHJ5TmFtZTtcblx0XHRlbHNlIGNvdW50cnlBbmRDaXR5TmFtZTIgPSBgJHtyZXNwb25zZS5uYW1lfSwgJHtjb3VudHJ5TmFtZX0uYDtcblx0fVxufVxuXG5mdW5jdGlvbiBzY3JlZW5Mb2FkZXIoKSB7XG5cdGlmICh0aGlzID09PSBkb2N1bWVudCkge1xuXHRcdGNvbnN0IFtsb2FkZXJDb250YWluZXJdID0gY3JlYXRlTG9hZGVyKFxuXHRcdFx0XCJsb2FkZXItd2F0Y2hsaXN0XCIsXG5cdFx0XHRcImxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0XCJcblx0XHQpO1xuXHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmFwcGVuZChsb2FkZXJDb250YWluZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IFtsb2FkZXJDb250YWluZXJdID0gY3JlYXRlTG9hZGVyKFwibG9hZGVyXCIsIFwibG9hZGVyLWNvbnRhaW5lclwiKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChsb2FkZXJDb250YWluZXIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2NyZWVuTG9hZGVyKCkge1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQuYm9keSlcblx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5yZW1vdmVDaGlsZChcblx0XHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmxhc3RDaGlsZFxuXHRcdCk7XG5cdGVsc2UgZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvYWRlcihsb2FkZXJDbGFzcywgbG9hZGVyRGl2Q2xhc3MpIHtcblx0Y29uc3QgbG9hZGVyQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7XG5cdFx0Y2xhc3M6IGxvYWRlckRpdkNsYXNzLFxuXHR9KTtcblx0Y29uc3QgbG9hZGVyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBsb2FkZXJDbGFzcyB9KTtcblx0bG9hZGVyQ29udGFpbmVyLmFwcGVuZChsb2FkZXIpO1xuXHRyZXR1cm4gW2xvYWRlckNvbnRhaW5lcl07XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJJbWFnZSh3ZWF0aGVyRGVzYykge1xuXHRmZXRjaChcblx0XHRgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3M/cXVlcnk9JHt3ZWF0aGVyRGVzY30mcGVyX3BhZ2U9MiZjbGllbnRfaWQ9Z0s1MkRlMlRtX2RMNW8xSVhLYTlGUk9CQUotTElZcVI0MXhCZGxnM1gya2AsXG5cdFx0eyBtb2RlOiBcImNvcnNcIiB9XG5cdClcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNTI3KSxyZ2JhKDAsIDAsIDAsIDAuNSkpICx1cmwoJHtyZXNwb25zZS5yZXN1bHRzWzFdLnVybHMucmF3fSlgO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q2l0eU5vdEZvdW5kKCkge1xuXHRjb25zdCB3YXRjaGxpc3RJbnB1dCA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmxhc3RDaGlsZC5jaGlsZHJlblsxXSxcblx0XHRoZWFkZXJJbnB1dCA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF07XG5cdGlmICh0aGlzID09PSBkb2N1bWVudC5ib2R5KVxuXHRcdHdhdGNobGlzdElucHV0LmNsYXNzTGlzdC5hZGQoXCJub3QtZm91bmRcIiksXG5cdFx0XHRzZXRQbGFjZWhvbGRlci5jYWxsKHRoaXMsIHdhdGNobGlzdElucHV0LCBcIkFkZCBDaXR5XCIpO1xuXHRlbHNlXG5cdFx0aGVhZGVySW5wdXQuY2xhc3NMaXN0LmFkZChcIm5vdC1mb3VuZFwiKSxcblx0XHRcdHNldFBsYWNlaG9sZGVyLmNhbGwodGhpcywgaGVhZGVySW5wdXQsIFwiRW50ZXIgQ2l0eSBOYW1lXCIpO1xufVxuXG5mdW5jdGlvbiBzZXRQbGFjZWhvbGRlcihpbnB1dCwgcGxhY2Vob2xkZXIpIHtcblx0aW5wdXQudmFsdWUgPSBcIlwiO1xuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkNpdHkgTm90IEZvdW5kXCIpO1xuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwibm90LWZvdW5kXCIpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcblx0fSwgNDAwMCk7XG59XG5cbmV4cG9ydCB7XG5cdGdldFdlYXRoZXJEYXRhLFxuXHRnZXRMb25BbmRMYXQsXG5cdGdldERhdGEsXG5cdGdldENvdW50cnlOYW1lLFxuXHRzY3JlZW5Mb2FkZXIsXG5cdGNsZWFyU2NyZWVuTG9hZGVyLFxufTtcbiIsImlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlOYW1lXCIpID09PSBudWxsKVxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlOYW1lXCIsIEpTT04uc3RyaW5naWZ5KFwiUG9ydCBIYXJjb3VydFwiKSk7XG5sZXQgY2l0eU5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eU5hbWVcIikpO1xuZnVuY3Rpb24gbmV3TmFtZShzZXROYW1lKSB7XG5cdGNpdHlOYW1lID0gc2V0TmFtZTtcbn1cbmZ1bmN0aW9uIHNldENpdHlOYW1lKCkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlOYW1lXCIsIEpTT04uc3RyaW5naWZ5KGNpdHlOYW1lKSk7XG59XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIpID09IG51bGwpXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcbmxldCB3YXRjaGxpc3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YXRjaGxpc3RBcnJheVwiKSk7XG5mdW5jdGlvbiBzZXR3YXRjaGxpc3RBcnJheSgpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3YXRjaGxpc3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeSh3YXRjaGxpc3RBcnJheSkpO1xufVxuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkZWdyZWVcIikgPT0gbnVsbClcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWdyZWVcIiwgSlNPTi5zdHJpbmdpZnkoXCJDXCIpKTtcbmxldCBkZWdyZWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGVncmVlXCIpKTtcbmZ1bmN0aW9uIG5ld0RlZ3JlZShzZXROYW1lKSB7XG5cdGRlZ3JlZSA9IHNldE5hbWU7XG59XG5mdW5jdGlvbiBzZXREZWdyZWUoKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGVncmVlXCIsIEpTT04uc3RyaW5naWZ5KGRlZ3JlZSkpO1xufVxuXG5leHBvcnQge1xuXHRjaXR5TmFtZSxcblx0c2V0Q2l0eU5hbWUsXG5cdG5ld05hbWUsXG5cdHdhdGNobGlzdEFycmF5LFxuXHRzZXR3YXRjaGxpc3RBcnJheSxcblx0ZGVncmVlLFxuXHRzZXREZWdyZWUsXG5cdG5ld0RlZ3JlZSxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5cbi8qKlxuICogRnVuY3Rpb24gZm9yIGNyZWF0aW5nIGZvb3RlclxuICovXG5mdW5jdGlvbiBjcmVhdGVmb290ZXIoKSB7XG5cdGNvbnN0IGZvb3RlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJmb290ZXJcIik7XG5cdGNvbnN0IGFuY2hvckxpbmsgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vSUFtWW91bmdib3NzeS93ZWF0aGVyLWFwcFwiLFxuXHR9KTtcblx0Y29uc3QgZ2l0SHViSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpXCIsIHsgZmE6IFwiZmEtZ2l0aHViXCIgfSk7XG5cdGNvbnN0IGljb25zQ3JlZGl0ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGZsYXRJY29uQW5jaG9yID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuXHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0XHRocmVmOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIixcblx0fSk7XG5cdGNvbnN0IGljb25zOEFuY2hvciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJhXCIsIHtcblx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0aHJlZjogXCJodHRwczovL2ljb25zOC5jb20vXCIsXG5cdH0pO1xuXG5cdGZsYXRJY29uQW5jaG9yLnRleHRDb250ZW50ID0gXCIgRmxhdGljb24gXCI7XG5cdGljb25zOEFuY2hvci50ZXh0Q29udGVudCA9IFwiIEljb25zOCBcIjtcblx0aWNvbnNDcmVkaXQuYXBwZW5kKFwiSWNvbnMgYnlcIiwgZmxhdEljb25BbmNob3IsIFwiICYgXCIsIGljb25zOEFuY2hvcik7XG5cdGFuY2hvckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViSWNvbik7XG5cdGZvb3Rlci5hcHBlbmQoXG5cdFx0XCJDb3B5cmlnaHQgXFx1MDBBOSAyMDIyIElBbVlvdW5nYm9zc3lcIixcblx0XHRcIiAgXCIsXG5cdFx0YW5jaG9yTGluayxcblx0XHRpY29uc0NyZWRpdFxuXHQpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZWZvb3RlciB9OyIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXHRjb25zdCBoZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaGVhZGVyXCIpO1xuXHRjb25zdCBzZWFyY2hEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwic2VhcmNoLWRpdlwiIH0pO1xuXHRjb25zdCBzZWFyY2hCYXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaW5wdXRcIiwge1xuXHRcdHR5cGU6IFwic2VhcmNoXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgQ2l0eSBOYW1lXCIsXG5cdH0pO1xuXHRjb25zdCBzZWFyY2hCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiB9KTtcblx0Y29uc3QgaGVhZGVyVGl0bGVEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGl0bGUtZGl2XCIgfSk7XG5cdGNvbnN0IGhlYWRlclRpdGxlID0gY3JlYXRlRG9tRWxlbWVudChcImgxXCIpO1xuXG5cdHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG5cdGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJDaXR5V2F0Y2hcIjtcblxuXHRzZWFyY2hEaXYuYXBwZW5kKHNlYXJjaEJhciwgc2VhcmNoQnV0dG9uKTtcblx0aGVhZGVyVGl0bGVEaXYuYXBwZW5kKGhlYWRlclRpdGxlKTtcblx0aGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZURpdiwgc2VhcmNoRGl2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIi4vaWNvbnMvZGF0ZS5wbmdcIjtcbmltcG9ydCBIdW1pZGl0eSBmcm9tIFwiLi9pY29ucy9odW1pZGl0eS5wbmdcIjtcbmltcG9ydCBQcmVzc3VyZSBmcm9tIFwiLi9pY29ucy9wcmVzc3VyZS5wbmdcIjtcbmltcG9ydCBUaW1lem9uZSBmcm9tIFwiLi9pY29ucy90aW1lem9uZS5wbmdcIjtcbmltcG9ydCBXaW5kIGZyb20gXCIuL2ljb25zL3dpbmQucG5nXCI7XG5pbXBvcnQgU2VhTGV2ZWwgZnJvbSBcIi4vaWNvbnMvc2VhbGV2ZWwucG5nXCI7XG5pbXBvcnQgRGVncmVlSWNvbiBmcm9tIFwiLi9pY29ucy9kZWdyZWUucG5nXCI7XG5pbXBvcnQgeyBkZWdyZWUsIG5ld0RlZ3JlZSwgc2V0RGVncmVlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudHMoKSB7XG5cdGNvbnN0IG1haW5EaXYgPSBjcmVhdGVEb21FbGVtZW50KFwibWFpblwiLCB7IGNsYXNzOiBcIm1haW5cIiB9KTtcblx0Y3JlYXRlVG9kYXlGb3JlY2FzdENvbnRhaW5lcihtYWluRGl2KTtcblx0Y3JlYXRlTmV4dGRheXNDb250YWluZXJEaXYobWFpbkRpdik7XG5cdGdldFdhdGNobGlzdChtYWluRGl2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbkRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZGF5Rm9yZWNhc3RDb250YWluZXIobWFpbkRpdikge1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidG9kYXktZGF0YS1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQodG9kYXlEYXRhRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dGRheXNDb250YWluZXJEaXYobWFpbkRpdikge1xuXHRjb25zdCBuZXh0N0RheXNEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibmV4dC03ZGF5cy1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQobmV4dDdEYXlzRGl2KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2F0Y2hsaXN0KG1haW5EaXYpIHtcblx0Y29uc3Qgd2F0Y2hsaXN0RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIndhdGNobGlzdC1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQod2F0Y2hsaXN0RGl2KTtcbn1cblxuZnVuY3Rpb24gbWlub3JEYXRhUmVwb3J0KCkge1xuXHRjb25zdCBtaW5vckRhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzNdLFxuXHRcdHdpbmREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2luZC1kaXZcIiB9KSxcblx0XHR3aW5kID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ3aW5kXCIgfSksXG5cdFx0ZGV3UG9pbnREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV3LXBvaW50LWRpdlwiIH0pLFxuXHRcdGRld1BvaW50ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJkZXctcG9pbnRcIiB9KSxcblx0XHR0aW1lWm9uZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0aW1lLXpvbmUtZGl2XCIgfSksXG5cdFx0dGltZVpvbmUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcInRpbWUtem9uZVwiIH0pLFxuXHRcdHV2SW5kZXhEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidXYtaW5kZXgtZGl2XCIgfSksXG5cdFx0dXZJbmRleCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidXYtaW5kZXhcIiB9KSxcblx0XHRwcmVzc3VyZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwcmVzc3VyZS1kaXZcIiB9KSxcblx0XHRwcmVzc3VyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwicHJlc3N1cmVcIiB9KSxcblx0XHRodW1pZGl0eURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJodW1pZGl0eS1kaXZcIiB9KSxcblx0XHRodW1pZGl0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiaHVtaWRpdHlcIiB9KSxcblx0XHRNeURhdGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBEYXRlIH0pLFxuXHRcdE15SHVtaWRpdHkgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBIdW1pZGl0eSB9KSxcblx0XHRNeVByZXNzdXJlID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogUHJlc3N1cmUgfSksXG5cdFx0TXlUaW1lem9uZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFRpbWV6b25lIH0pLFxuXHRcdE15U2VhTGV2ZWwgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBTZWFMZXZlbCB9KSxcblx0XHRNeVdpbmQgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBXaW5kIH0pO1xuXG5cdHdpbmREaXYuYXBwZW5kKE15V2luZCwgd2luZCk7XG5cdGRld1BvaW50RGl2LmFwcGVuZChNeVNlYUxldmVsLCBkZXdQb2ludCk7XG5cdHRpbWVab25lRGl2LmFwcGVuZChNeVRpbWV6b25lLCB0aW1lWm9uZSk7XG5cdHV2SW5kZXhEaXYuYXBwZW5kKE15RGF0ZSwgdXZJbmRleCk7XG5cdHByZXNzdXJlRGl2LmFwcGVuZChNeVByZXNzdXJlLCBwcmVzc3VyZSk7XG5cdGh1bWlkaXR5RGl2LmFwcGVuZChNeUh1bWlkaXR5LCBodW1pZGl0eSk7XG5cdG1pbm9yRGF0YURpdi5hcHBlbmQoXG5cdFx0d2luZERpdixcblx0XHRkZXdQb2ludERpdixcblx0XHR0aW1lWm9uZURpdixcblx0XHR1dkluZGV4RGl2LFxuXHRcdHByZXNzdXJlRGl2LFxuXHRcdGh1bWlkaXR5RGl2XG5cdCk7XG5cdHJldHVybiBbd2luZCwgZGV3UG9pbnQsIHRpbWVab25lLCB1dkluZGV4LCBwcmVzc3VyZSwgaHVtaWRpdHldO1xufVxuXG5mdW5jdGlvbiBzdXBlclNjcmlwdCgpIHtcblx0Y29uc3Qgc3VwU2NyaXB0ID0gY3JlYXRlRG9tRWxlbWVudChcInN1cFwiLCB7IGNsYXNzOiBcInN1cGVyLXNjcmlwdFwiIH0pLFxuXHRcdHN1cFNjcmlwdDIgPSBjcmVhdGVEb21FbGVtZW50KFwic3VwXCIsIHsgY2xhc3M6IFwic3VwZXItc2NyaXB0XCIgfSksXG5cdFx0ZGVncmVlU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwic3VwZXItc3BhblwiIH0pO1xuXHRkZWdyZWVTcGFuLnRleHRDb250ZW50ID0gZGVncmVlO1xuXHRzdXBTY3JpcHQudGV4dENvbnRlbnQgPSBcIm9cIjtcblx0c3VwU2NyaXB0Mi5hcHBlbmQoc3VwU2NyaXB0LCBkZWdyZWVTcGFuKTtcblx0YWRkTGlzdGVuZXJGb3JFdmVudFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlXCIpLCBkZWdyZWVTcGFuKTtcblx0YWRkTGlzdGVuZXJGb3JFdmVudFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdFwiKSwgZGVncmVlU3Bhbik7XG5cdHJldHVybiBzdXBTY3JpcHQyO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lckZvckV2ZW50VG8oZWxlbWVudCwgdW5pdCkge1xuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKGRlZ3JlZSA9PSBcIkNcIikgdW5pdC50ZXh0Q29udGVudCA9IFwiQ1wiO1xuXHRcdGVsc2UgdW5pdC50ZXh0Q29udGVudCA9IFwiRlwiO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGF0YURpc3BsYXkoKSB7XG5cdGNvbnN0IHRvZGF5RGF0YURpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdO1xuXHRjb25zdCB3ZWF0aGVyRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwid2VhdGhlci1kZXNjXCIgfSksXG5cdFx0bmFtZU9mQ2l0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzOiBcIm5hbWUtb2YtY2l0eVwiIH0pLFxuXHRcdGRlc2NJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImRlc2MtaWNvblwiIH0pLFxuXHRcdHRlbXBEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGVtcC1kaXZcIiB9KSxcblx0XHR0ZW1wUmFuZ2UgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGVtcC1yYW5nZVwiIH0pLFxuXHRcdGhpZ2hUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJoaWdoLXRlbXBcIiB9KSxcblx0XHRsb3dUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJsb3ctdGVtcFwiIH0pLFxuXHRcdGZlZWxzTGlrZVRlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImZlZWxzLWxpa2UtdGVtcFwiIH0pLFxuXHRcdHRlbXBlcmF0dXJlRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRlbXBlcmF0dXJlLWRpdlwiIH0pLFxuXHRcdHRlbXBlcmF0dXJlID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ0ZW1wZXJhdHVyZVwiIH0pLFxuXHRcdG1pbm9yRGF0YURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtaW5vci1kYXRhLWRpdlwiIH0pO1xuXG5cdHRlbXBSYW5nZS5hcHBlbmQobG93VGVtcCwgaGlnaFRlbXApO1xuXHR0ZW1wZXJhdHVyZURpdi5hcHBlbmQodGVtcGVyYXR1cmUsIGRlc2NJY29uKTtcblx0dGVtcERpdi5hcHBlbmQodGVtcFJhbmdlLCB0ZW1wZXJhdHVyZURpdiwgZmVlbHNMaWtlVGVtcCk7XG5cdHRvZGF5RGF0YURpdi5hcHBlbmQod2VhdGhlckRlc2MsIG5hbWVPZkNpdHksIHRlbXBEaXYsIG1pbm9yRGF0YURpdik7XG5cdHJldHVybiBbXG5cdFx0d2VhdGhlckRlc2MsXG5cdFx0ZGVzY0ljb24sXG5cdFx0bmFtZU9mQ2l0eSxcblx0XHR0ZW1wZXJhdHVyZSxcblx0XHRsb3dUZW1wLFxuXHRcdGhpZ2hUZW1wLFxuXHRcdGZlZWxzTGlrZVRlbXAsXG5cdF07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRCZXR3ZWVuVW5pdHMoKSB7XG5cdGNvbnN0IHRvZGF5RGF0YURpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0sXG5cdFx0dW5pdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidW5pdFwiIH0pLFxuXHRcdHVuaXREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidW5pdC1kaXZcIiB9KSxcblx0XHRNeURlZ3JlZUljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHtcblx0XHRcdGNsYXNzOiBcImRlZ3JlZVwiLFxuXHRcdFx0c3JjOiBEZWdyZWVJY29uLFxuXHRcdH0pO1xuXG5cdGRlZ3JlZSA9PSBcIkNcIiA/ICh1bml0LnRleHRDb250ZW50ID0gXCJGXCIpIDogKHVuaXQudGV4dENvbnRlbnQgPSBcIkNcIik7XG5cdHVuaXREaXYuYXBwZW5kKE15RGVncmVlSWNvbiwgdW5pdCk7XG5cdHRvZGF5RGF0YURpdi5hcHBlbmQodW5pdERpdik7XG5cdGxpc3RlblRvRXZlbnRGcm9tKHVuaXQsIHVuaXQpO1xuXHRsaXN0ZW5Ub0V2ZW50RnJvbShNeURlZ3JlZUljb24sIHVuaXQpO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5Ub0V2ZW50RnJvbShlbGVtZW50LCB1bml0KSB7XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoZGVncmVlID09IFwiQ1wiKVxuXHRcdFx0bmV3RGVncmVlKFwiRlwiKSxcblx0XHRcdFx0c2V0RGVncmVlKCksXG5cdFx0XHRcdCh1bml0LnRleHRDb250ZW50ID0gXCIgQ1wiKSxcblx0XHRcdFx0ZGlzcGxheUZhaHJlbmhlaXQoKTtcblx0XHRlbHNlXG5cdFx0XHRuZXdEZWdyZWUoXCJDXCIpLCBzZXREZWdyZWUoKSwgKHVuaXQudGV4dENvbnRlbnQgPSBcIiBGXCIpLCBkaXNwbGF5Q2Vsc2l1cygpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZhaHJlbmhlaXQoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udmVydFwiKS5mb3JFYWNoKCh0ZW1wKSA9PiB7XG5cdFx0dGVtcC50ZXh0Q29udGVudCA9IGNvbnZlcnRDZWxzaXVzVG9GYWhyZW5oZWl0KHBhcnNlRmxvYXQodGVtcC50ZXh0Q29udGVudCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNlbHNpdXMoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udmVydFwiKS5mb3JFYWNoKCh0ZW1wKSA9PiB7XG5cdFx0dGVtcC50ZXh0Q29udGVudCA9IGNvbnZlcnRGYWhyZW5oZWl0VG9DZWxzaXVzKHBhcnNlRmxvYXQodGVtcC50ZXh0Q29udGVudCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydENlbHNpdXNUb0ZhaHJlbmhlaXQoY2Vsc2l1cykge1xuXHRjb25zdCBmYWhyZW5oZWl0ID0gKGNlbHNpdXMgKiA5KSAvIDUgKyAzMjtcblx0cmV0dXJuIE1hdGgucm91bmQoKGZhaHJlbmhlaXQgKiAxMDAwKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RmFocmVuaGVpdFRvQ2Vsc2l1cyhmYWhyZW5oZWl0KSB7XG5cdGNvbnN0IGNlbHNpdXMgPSAoKGZhaHJlbmhlaXQgLSAzMikgKiA1KSAvIDk7XG5cdHJldHVybiBNYXRoLnJvdW5kKChjZWxzaXVzICogMTAwMCkgLyAxMDAwKTtcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlTWFpbkNvbnRlbnRzLFxuXHRtaW5vckRhdGFSZXBvcnQsXG5cdHN1cGVyU2NyaXB0LFxuXHRkYXRhRGlzcGxheSxcblx0Y29udmVydEJldHdlZW5Vbml0cyxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQgeyBzdXBlclNjcmlwdCB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JlY2FzdENhcmQoZGFpbHkpIHtcblx0Y29uc3QgbmV4dDdEYXlzRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0sXG5cdFx0Y2FyZCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjYXJkXCIgfSksXG5cdFx0ZGF5QW5kRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0aWNvbkRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpY29uLWRpdlwiIH0pLFxuXHRcdHRlbXBEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIpLFxuXHRcdGRheSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdHdlYXRoZXJEZXNjID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0d2VhdGhlckRlc2NJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiKSxcblx0XHRsb3dUZW1wU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY29udmVydFwiIH0pLFxuXHRcdGxvd1RlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHRoaWdoVGVtcFNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHRoaWdoVGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpO1xuXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYWlseS5kdCAqIDEwMDApO1xuXHRjb25zdCB3ZWVrZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG5cblx0bG93VGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChkYWlseS50ZW1wLm1pbil9YDtcblx0aGlnaFRlbXBTcGFuLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQoZGFpbHkudGVtcC5tYXgpfWA7XG5cdGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXl9YDtcblx0d2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBgJHtkYWlseS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG5cdHdlYXRoZXJEZXNjSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtkYWlseS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG5cdGhpZ2hUZW1wLmFwcGVuZChoaWdoVGVtcFNwYW4sIHN1cGVyU2NyaXB0KCkpO1xuXHRsb3dUZW1wLmFwcGVuZChsb3dUZW1wU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdGRheUFuZERlc2MuYXBwZW5kKGRheSwgd2VhdGhlckRlc2MpO1xuXHR0ZW1wRGl2LmFwcGVuZChoaWdoVGVtcCwgbG93VGVtcCk7XG5cdGljb25EaXYuYXBwZW5kKHdlYXRoZXJEZXNjSWNvbiwgdGVtcERpdik7XG5cdGNhcmQuYXBwZW5kKGRheUFuZERlc2MsIGljb25EaXYpO1xuXHRuZXh0N0RheXNEaXYuYXBwZW5kKGNhcmQpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JlY2FzdENhcmQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL3BhZ2UtaGVhZGVyXCI7XG5pbXBvcnQge1xuXHRnZXRDb3VudHJ5TmFtZSxcblx0Z2V0RGF0YSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRnZXRXZWF0aGVyRGF0YSxcblx0c2NyZWVuTG9hZGVyLFxufSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgeyBjcmVhdGVmb290ZXIgfSBmcm9tIFwiLi9wYWdlLWZvb3RlclwiO1xuaW1wb3J0IHsgY29udmVydEJldHdlZW5Vbml0cywgY3JlYXRlTWFpbkNvbnRlbnRzIH0gZnJvbSBcIi4vcGFnZS1tYWluXCI7XG5pbXBvcnQge1xuXHRhZGRMaXN0ZW5lclRvQnV0dG9uLFxuXHRkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0LFxuXHR3YXRjaGxpc3QsXG59IGZyb20gXCIuL2NpdHktd2F0Y2hsaXN0XCI7XG5pbXBvcnQgeyBjaXR5TmFtZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jcmVhdGVNYWluQ29udGVudHMoKTtcbmNvbnZlcnRCZXR3ZWVuVW5pdHMoKTtcbmNyZWF0ZWZvb3RlcigpO1xud2F0Y2hsaXN0KCk7XG5zY3JlZW5Mb2FkZXIoKTtcbmFkZExpc3RlbmVyVG9CdXR0b24oKTtcbmRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QoKTtcbmdldFdlYXRoZXJEYXRhLmNhbGwoXG5cdGRvY3VtZW50LFxuXHRnZXREYXRhLmJpbmQoZG9jdW1lbnQpLFxuXHRnZXRMb25BbmRMYXQsXG5cdGNpdHlOYW1lLFxuXHRmYWxzZSxcblx0Z2V0Q291bnRyeU5hbWVcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9