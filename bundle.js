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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nhtml {\n\tbackground-color: #100f0f;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000d6;\n}\n\nh1 {\n\tfont-size: 2.5rem;\n\tfont-family: monospace;\n\tcolor: antiquewhite;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tbackground-color: #3c3f4c;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\nbutton:hover {\n\tbackground-color: #532525;\n\ttransform: scale(1.01);\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tcolor: gray;\n}\n\n.not-found::placeholder {\n\tcolor: red;\n}\n\n.unit-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.degree {\n\ttransition: all .2s ease-in-out;\n\tcursor: pointer;\n}\n\n.unit {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\n.unit:hover,\n.degree:hover {\n\tcolor: #9e9e9e;\n\ttransform: scale(1.4);\n}\n\n.degree:hover {\n\tcolor: #9e9e9e;\n\ttransform: scale(1.1);\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n}\n\n/* today data div styling */\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(0 0 0 / 80%);\n\tborder: 1px solid #fc9898;\n}\n\n/* next 7 days styling */\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #010000;\n\tgap: 10px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #0b030ab0;\n\tpadding: 2px 10px;\n\tborder: 1px solid #fc9898;\n\tflex: 1;\n\tbox-sizing: border-box;\n\ttransition: all .2s ease-in-out;\n}\n\n/* watchlist div styling */\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #262829;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid #fc9898;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tbackground-color: #0b030ab0;\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city:hover,\n.add-icon {\n\tbackground-color: #262829;\n\ttransform: scale(1.02);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.add-icon {\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\n.add-icon:hover {\n\ttransform: scale(1.2);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card:hover {\n\ttransform: scale(1.02);\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #fc9898;\n\tbackground-color: #262829;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: #b3ee79;\n}\n\n.fa {\n\tcolor: white;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n\n\tfooter {\n\t\tbackground-color: #0b030ab0;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nhtml {\n\tbackground-color: #100f0f;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000d6;\n}\n\nh1 {\n\tfont-size: 2.5rem;\n\tfont-family: monospace;\n\tcolor: antiquewhite;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tbackground-color: #3c3f4c;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\nbutton:hover {\n\tbackground-color: #532525;\n\ttransform: scale(1.01);\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tcolor: gray;\n}\n\n.not-found::placeholder {\n\tcolor: red;\n}\n\n.unit-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.degree {\n\ttransition: all .2s ease-in-out;\n\tcursor: pointer;\n}\n\n.unit {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\n.unit:hover,\n.degree:hover {\n\tcolor: #9e9e9e;\n\ttransform: scale(1.4);\n}\n\n.degree:hover {\n\tcolor: #9e9e9e;\n\ttransform: scale(1.1);\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n}\n\n/* today data div styling */\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(0 0 0 / 80%);\n\tborder: 1px solid #fc9898;\n}\n\n/* next 7 days styling */\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #010000;\n\tgap: 10px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #0b030ab0;\n\tpadding: 2px 10px;\n\tborder: 1px solid #fc9898;\n\tflex: 1;\n\tbox-sizing: border-box;\n\ttransition: all .2s ease-in-out;\n}\n\n/* watchlist div styling */\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #262829;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid #fc9898;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tbackground-color: #0b030ab0;\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city:hover,\n.add-icon {\n\tbackground-color: #262829;\n\ttransform: scale(1.02);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.add-icon {\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\n.add-icon:hover {\n\ttransform: scale(1.2);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card:hover {\n\ttransform: scale(1.02);\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #fc9898;\n\tbackground-color: #262829;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: #b3ee79;\n}\n\n.fa {\n\tcolor: white;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n\n\tfooter {\n\t\tbackground-color: #0b030ab0;\n\t}\n}"],"sourceRoot":""}]);
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

/***/ "./src/app-click-events.js":
/*!*********************************!*\
  !*** ./src/app-click-events.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListenerForEventTo": () => (/* binding */ addListenerForEventTo),
/* harmony export */   "addListenerToButton": () => (/* binding */ addListenerToButton),
/* harmony export */   "displayAvailableWatchlist": () => (/* binding */ displayAvailableWatchlist),
/* harmony export */   "listenToEventFrom": () => (/* binding */ listenToEventFrom)
/* harmony export */ });
/* harmony import */ var _city_watchlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city-watchlist */ "./src/city-watchlist.js");
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _today_forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today-forecast */ "./src/today-forecast.js");





function addListenerToButton() {
	document.addEventListener("click", checkEventTargets);
}

function checkEventTargets(e) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		headerInput = document.body.children[0].children[1].children[0],
		headerButton = document.body.children[0].children[1].children[1],
		watchlistInput = addCityButton.childNodes[1],
		numberOfCities =
			document.body.children[1].children[2].children[1].childElementCount;

	if (e.target.className == "add-icon") {
		if (watchlistInput.value.trim() === "") {
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.displayErrorMessage.call(document.body, "Empty Input");
			return;
		}
		if (numberOfCities == 7) {
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.displayErrorMessage.call(document.body, "Max. Cities Reached");
			return;
		} else {
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.screenLoader.call(document);
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData.apply(document.body, [
				_city_watchlist__WEBPACK_IMPORTED_MODULE_0__.addCityToWatchlist.bind(document.body),
				_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat,
				watchlistInput.value,
				false,
				_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName,
			]);
		}
	}

	// Targets all children of city element
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
			(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(_today_forecast__WEBPACK_IMPORTED_MODULE_3__.getData, _fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat, city, false, _fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName);
		}
	});

	if (e.target === headerButton) {
		if (headerInput.value.trim() === "") {
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.displayErrorMessage.call(null, "Empty Input");
			return;
		}
		(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.screenLoader)();
		_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData.call(
			null,
			_today_forecast__WEBPACK_IMPORTED_MODULE_3__.getData,
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat,
			headerInput.value,
			headerInput,
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName
		);
	}
}

function addListenerForEventTo(element, unit) {
	element.addEventListener("click", () => {
		if (_local_storage__WEBPACK_IMPORTED_MODULE_2__.degree == "C") unit.textContent = "C";
		else unit.textContent = "F";
	});
}

function listenToEventFrom(element, unit) {
	element.addEventListener("click", () => {
		if (_local_storage__WEBPACK_IMPORTED_MODULE_2__.degree == "C")
			(0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.newDegree)("F"),
				(0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.setDegree)(),
				(unit.textContent = " C"),
				displayFahrenheit();
		else
			(0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.newDegree)("C"), (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.setDegree)(), (unit.textContent = " F"), displayCelsius();
	});
}

function displayFahrenheit() {
	document.querySelectorAll(".convert").forEach((temp) => {
		temp.textContent = convertCelsiusToFahrenheit(parseFloat(temp.textContent));
	});
}

function convertCelsiusToFahrenheit(celsius) {
	const fahrenheit = (celsius * 9) / 5 + 32;
	return Math.round((fahrenheit * 1000) / 1000);
}

function displayCelsius() {
	document.querySelectorAll(".convert").forEach((temp) => {
		temp.textContent = convertFahrenheitToCelsius(parseFloat(temp.textContent));
	});
}

function convertFahrenheitToCelsius(fahrenheit) {
	const celsius = ((fahrenheit - 32) * 5) / 9;
	return Math.round((celsius * 1000) / 1000);
}

/**
 * Use delayExecution and displayAvailableWatchlist functions to make
 * watchlist cities in localStorage fetch their data one after the other
 * so they are being rendered accordingly as it is in LS to make deleting
 * them with ul index correspond to index in LS. Still not 100% certain to
 * fetch synchronously but helps.
 */
function delayExecution(city) {
	const fetchNow = (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(
		_city_watchlist__WEBPACK_IMPORTED_MODULE_0__.addCityToWatchlist.bind(city),
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
	if (_local_storage__WEBPACK_IMPORTED_MODULE_2__.watchlistArray.length > 0)
		for (const city of _local_storage__WEBPACK_IMPORTED_MODULE_2__.watchlistArray) {
			await delayExecution(city);
		}
}



/***/ }),

/***/ "./src/city-watchlist.js":
/*!*******************************!*\
  !*** ./src/city-watchlist.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCityToWatchlist": () => (/* binding */ addCityToWatchlist),
/* harmony export */   "watchlist": () => (/* binding */ watchlist)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _icons_addcity_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/addcity.png */ "./src/icons/addcity.png");
/* harmony import */ var _icons_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/delete.png */ "./src/icons/delete.png");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-main */ "./src/page-main.js");







/**
 * Watchlist static elements, they do not require API request to display.
 */
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

/**
 * These are rendered when there's a request to add and display city
 * on the watchlist.
 */
function addCityToWatchlist(response) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		cityList = document.body.childNodes[2].childNodes[2].childNodes[1],
		watchlistInput = addCityButton.children[1],
		watchlistScreenLoaderDiv =
			document.body.childNodes[2].childNodes[2].lastChild,
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
	addListenerToDeleteButton(myDelete, city);

	// Removes screenloader once fetch request is successful.
	if (watchlistScreenLoaderDiv.className === "loader-container-watchlist")
		_fetch_data__WEBPACK_IMPORTED_MODULE_1__.clearScreenLoader.call(document.body);
}

/**
 * Gets temperature and weather icon for each instances of city
 */
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

	// Only pushes city to localStorage if not an empty string
	if (watchlistInput.value.trim() !== "")
		_local_storage__WEBPACK_IMPORTED_MODULE_4__.watchlistArray.push(watchlistInput.value), (0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.setwatchlistArray)();
	if (watchlistInput.value) watchlistInput.value = "";
}

/**
 * Add eventListener and display delete button on mouseenter, hide delete
 * button on mouseleave.
 */
function addListenerToDeleteButton(myDelete, city) {
	myDelete.addEventListener(
		"click",
		DeleteCityFromWatchlist.bind(null, myDelete)
	);
	city.addEventListener("mouseenter", () =>
		myDelete.classList.add("show-delete")
	);
	city.addEventListener("mouseleave", () =>
		myDelete.classList.remove("show-delete")
	);
}

/**
 * Deletes city from DOM and uses index of city on watchlist ul to delete
 * city name from localStorage.
 */
function DeleteCityFromWatchlist(myDelete) {
	let listArray = Array.from(document.querySelectorAll(".city"));
	let indexOfCity = listArray.indexOf(myDelete.parentNode);
	_local_storage__WEBPACK_IMPORTED_MODULE_4__.watchlistArray.splice(indexOfCity, 1);
	(0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.setwatchlistArray)();
	myDelete.parentNode.parentNode.removeChild(myDelete.parentNode);
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
	UNSPLASH_ACCESS_KEY2: "gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k",
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
/* harmony export */   "countryAndCityName": () => (/* binding */ countryAndCityName),
/* harmony export */   "countryAndCityName2": () => (/* binding */ countryAndCityName2),
/* harmony export */   "displayErrorMessage": () => (/* binding */ displayErrorMessage),
/* harmony export */   "getCountryName": () => (/* binding */ getCountryName),
/* harmony export */   "getLonAndLat": () => (/* binding */ getLonAndLat),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "getWeatherImage": () => (/* binding */ getWeatherImage),
/* harmony export */   "screenLoader": () => (/* binding */ screenLoader)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");




let unit, countryAndCityName, countryAndCityName2;

function getWeatherData(
	callback1,
	callback2,
	cityName,
	headerInput,
	callback3
) {
	checkPreferredUnit.bind(this);
	const exclude = `&units=${unit}&APPID=${_config__WEBPACK_IMPORTED_MODULE_0__.API_TOKEN.KEY}`;
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}${exclude}`,
		{
			mode: "cors",
		}
	)
		.then((response) => response.json())
		.then((response) => {
			if (response.cod == 404) {
				displayErrorMessage.call(this, "City Not Found");
				clearScreenLoader.call(this);
			} else if (response.cod == 200) {
				const { lat } = response.coord;
				const { lon } = response.coord;
				callback3.call(this, response);
				callback2(lat, lon, callback1, headerInput);
			}
		})
		.catch(() => {
			clearScreenLoader.call(this);
			displayErrorMessage.call(this, "Slow Network Response, Reload Page.");
		});
}

function checkPreferredUnit() {
	if (_local_storage__WEBPACK_IMPORTED_MODULE_2__.degree == "C") unit = "metric";
	else unit = "imperial";
}

function displayErrorMessage(errorPlaceholder) {
	const watchlistInput =
			document.body.children[1].children[2].children[1].lastChild.children[1],
		headerInput = document.body.children[0].children[1].children[0];
	if (this === document.body)
		watchlistInput.classList.add("not-found"),
			setPlaceholder.call(this, watchlistInput, "Add City", errorPlaceholder);
	else
		headerInput.classList.add("not-found"),
			setPlaceholder.call(
				this,
				headerInput,
				"Enter City Name",
				errorPlaceholder
			);
}

function setPlaceholder(input, placeholder, errorPlaceholder) {
	input.value = "";
	input.setAttribute("placeholder", errorPlaceholder);
	setTimeout(() => {
		input.classList.remove("not-found");
		input.setAttribute("placeholder", placeholder);
	}, 4000);
}

function getLonAndLat(lat, lon, callback, headerInput) {
	next7DaysForecast(lat, lon, callback, headerInput);
}

function next7DaysForecast(lat, lon, callback, headerInput) {
	checkPreferredUnit();
	const exclude2 = `&exclude=minutely,hourly,alerts&units=${unit}&appid=${_config__WEBPACK_IMPORTED_MODULE_0__.API_TOKEN.KEY}`;
	fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${exclude2}`
	)
		.then((response) => response.json())
		.then((response) => callback(response, headerInput));
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
		const [loaderContainer] = createScreenLoader(
			"loader-watchlist",
			"loader-container-watchlist"
		);
		document.body.childNodes[2].childNodes[2].append(loaderContainer);
	} else {
		const [loaderContainer] = createScreenLoader("loader", "loader-container");
		document.body.append(loaderContainer);
	}
}

function clearScreenLoader() {
	if (this === document.body)
		document.body.childNodes[2].childNodes[2].removeChild(
			document.body.childNodes[2].childNodes[2].lastChild
		);
	else if (document.querySelector(".loader-container"))
		document.body.lastChild.parentNode.removeChild(document.body.lastChild);
}

function createScreenLoader(loaderClass, loaderDivClass) {
	const loaderContainer = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_1__.createDomElement)("div", {
		class: loaderDivClass,
	});
	const loader = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_1__.createDomElement)("div", { class: loaderClass });
	loaderContainer.append(loader);
	return [loaderContainer];
}

function getWeatherImage(weatherDesc) {
	fetch(
		`https://api.unsplash.com/search/photos?query=${weatherDesc}&per_page=2&client_id=${_config__WEBPACK_IMPORTED_MODULE_0__.API_TOKEN.UNSPLASH_ACCESS_KEY2}`,
		{ mode: "cors" }
	)
		.then((response) => response.json())
		.then(
			(response) =>
				(document.body.children[1].children[0].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${response.results[1].urls.raw})`)
		);
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
/**
 * Storage For City Name
 */
if (localStorage.getItem("cityName") === null)
	localStorage.setItem("cityName", JSON.stringify("Port Harcourt"));
let cityName = JSON.parse(localStorage.getItem("cityName"));
function newName(setName) {
	cityName = setName;
}
function setCityName() {
	localStorage.setItem("cityName", JSON.stringify(cityName));
}

/**
 * Array For Names Of Cities On Watchlist
 */
if (localStorage.getItem("watchlistArray") == null)
	localStorage.setItem("watchlistArray", JSON.stringify(["Johannesburg", "Bori", "Las Vegas"]));
let watchlistArray = JSON.parse(localStorage.getItem("watchlistArray"));
function setwatchlistArray() {
	localStorage.setItem("watchlistArray", JSON.stringify(watchlistArray));
}

/**
 * Storage For Unit Preferrence
 */
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
	const gitHubIcon = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("i", { class: "fa fa-github" });
	const iconsCredit = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p");
	const weatherAPI = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("a", {
		target: "_blank",
		href: "https://openweathermap.org/",
	});
	const imageAPI = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("a", {
		target: "_blank",
		href: "https://unsplash.com/",
	});
	const icons8Anchor = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("a", {
		target: "_blank",
		href: "https://icons8.com/",
	});

	weatherAPI.textContent = " OpenWeatherMap ";
	imageAPI.textContent = " Unsplash ";
	icons8Anchor.textContent = " Icons8";
	iconsCredit.append(
		"Icons by",
		icons8Anchor,
		", Weather & Image API by",
		weatherAPI,
		" &",
		imageAPI
	);
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
/* harmony import */ var _app_click_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-click-events */ "./src/app-click-events.js");











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
	(0,_app_click_events__WEBPACK_IMPORTED_MODULE_9__.addListenerForEventTo)(document.querySelector(".degree"), degreeSpan);
	(0,_app_click_events__WEBPACK_IMPORTED_MODULE_9__.addListenerForEventTo)(document.querySelector(".unit"), degreeSpan);
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
	(0,_app_click_events__WEBPACK_IMPORTED_MODULE_9__.listenToEventFrom)(unit, unit), (0,_app_click_events__WEBPACK_IMPORTED_MODULE_9__.listenToEventFrom)(MyDegreeIcon, unit);
}



/***/ }),

/***/ "./src/seven-days-forecast.js":
/*!************************************!*\
  !*** ./src/seven-days-forecast.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForecastCard": () => (/* binding */ createForecastCard),
/* harmony export */   "display7DaysForecast": () => (/* binding */ display7DaysForecast)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-main */ "./src/page-main.js");




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
	highTemp.append(highTempSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_2__.superScript)());
	lowTemp.append(lowTempSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_2__.superScript)());
	dayAndDesc.append(day, weatherDesc);
	tempDiv.append(highTemp, lowTemp);
	iconDiv.append(weatherDescIcon, tempDiv);
	card.append(dayAndDesc, iconDiv);
	next7DaysDiv.append(card);
}

function display7DaysForecast(response) {
	for (let i = 1; i < response.daily.length; i++)
		createForecastCard(response.daily[i]);
	(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.clearScreenLoader)();
}



/***/ }),

/***/ "./src/today-forecast.js":
/*!*******************************!*\
  !*** ./src/today-forecast.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-main */ "./src/page-main.js");
/* harmony import */ var _seven_days_forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seven-days-forecast */ "./src/seven-days-forecast.js");






function getData(response, headerInput) {
	let weatherDesc = response.current.weather[0].description;
	const todayDataDiv = document.body.childNodes[2].childNodes[0],
		next7DaysDiv = document.body.childNodes[2].childNodes[1];
	clearData(todayDataDiv),
		clearData(next7DaysDiv),
		displayTodayFoecast.call(this, response),
		(0,_seven_days_forecast__WEBPACK_IMPORTED_MODULE_4__.display7DaysForecast)(response);
		
	if (headerInput.value)
		(0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.newName)(headerInput.value), (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.setCityName)(), (headerInput.value = "");
	(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherImage)(weatherDesc);
}

function clearData(div) {
	while (div.firstChild) div.removeChild(div.firstChild);
}

function displayTodayFoecast(response) {
	const lowTempSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "convert" }),
		highTempSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "convert" }),
		feelsLikeSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "convert" }),
		temperatureSpan = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "convert" });

	// Destructuring values from returned arrays from functions
	const [
		weatherDesc,
		descIcon,
		nameOfCity,
		temperature,
		lowTemp,
		highTemp,
		feelsLikeTemp,
	] = (0,_page_main__WEBPACK_IMPORTED_MODULE_3__.dataDisplay)();

	const [wind, dewPoint, timeZone, uvIndex, pressure, humidity] =
		(0,_page_main__WEBPACK_IMPORTED_MODULE_3__.minorDataReport)();

	if (this === document) nameOfCity.textContent = _fetch_data__WEBPACK_IMPORTED_MODULE_1__.countryAndCityName;
	else nameOfCity.textContent = _fetch_data__WEBPACK_IMPORTED_MODULE_1__.countryAndCityName2;
	weatherDesc.textContent = `${response.current.weather[0].description}`;
	lowTempSpan.textContent = `${parseInt(response.daily[0].temp.min)}`;
	feelsLikeSpan.textContent = `${parseInt(response.current.feels_like)}`;
	highTempSpan.textContent = `${parseInt(response.daily[0].temp.max)}`;
	temperatureSpan.textContent = `${parseInt(response.current.temp)}`;

	lowTemp.append("Low: ", lowTempSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_3__.superScript)());
	highTemp.append("High: ", highTempSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_3__.superScript)());
	temperature.append(temperatureSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_3__.superScript)());
	feelsLikeTemp.append("Feels Like ", feelsLikeSpan, (0,_page_main__WEBPACK_IMPORTED_MODULE_3__.superScript)());
	wind.append(`Wind Speed: ${response.current.wind_speed}`);
	dewPoint.append(`Dew Point: ${response.current.dew_point}`);
	timeZone.append(`time Zone: ${response.timezone}`);
	uvIndex.append(`UV Index: ${response.current.uvi}`);
	pressure.append(`Pressure: ${response.current.pressure}`);
	humidity.append(`Humidity: ${response.current.humidity}`);
	descIcon.src = `https://openweathermap.org/img/w/${response.current.weather[0].icon}.png`;
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
/* harmony import */ var _app_click_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-click-events */ "./src/app-click-events.js");
/* harmony import */ var _today_forecast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./today-forecast */ "./src/today-forecast.js");










(0,_page_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
(0,_page_main__WEBPACK_IMPORTED_MODULE_4__.createMainContents)();
(0,_page_main__WEBPACK_IMPORTED_MODULE_4__.convertBetweenUnits)();
(0,_page_footer__WEBPACK_IMPORTED_MODULE_3__.createfooter)();
(0,_city_watchlist__WEBPACK_IMPORTED_MODULE_5__.watchlist)();
(0,_fetch_data__WEBPACK_IMPORTED_MODULE_2__.screenLoader)();
(0,_app_click_events__WEBPACK_IMPORTED_MODULE_7__.addListenerToButton)();

(0,_app_click_events__WEBPACK_IMPORTED_MODULE_7__.displayAvailableWatchlist)();
_fetch_data__WEBPACK_IMPORTED_MODULE_2__.getWeatherData.call(
	document,
	_today_forecast__WEBPACK_IMPORTED_MODULE_8__.getData.bind(document),
	_fetch_data__WEBPACK_IMPORTED_MODULE_2__.getLonAndLat,
	_local_storage__WEBPACK_IMPORTED_MODULE_6__.cityName,
	false,
	_fetch_data__WEBPACK_IMPORTED_MODULE_2__.getCountryName
);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sNEJBQTRCLGNBQWMsZUFBZSwyQkFBMkIsMkJBQTJCLEdBQUcsVUFBVSw4QkFBOEIsR0FBRyxVQUFVLGtCQUFrQixrQkFBa0IsMkJBQTJCLGdDQUFnQyx1QkFBdUIsR0FBRyxrQ0FBa0Msa0JBQWtCLGlCQUFpQixhQUFhLG9CQUFvQix1QkFBdUIsd0JBQXdCLDJCQUEyQixxQ0FBcUMsZ0NBQWdDLEdBQUcsUUFBUSxzQkFBc0IsMkJBQTJCLHdCQUF3QixHQUFHLGdCQUFnQixZQUFZLEdBQUcsaUJBQWlCLFlBQVksa0JBQWtCLHFCQUFxQixHQUFHLHVCQUF1QixZQUFZLGlCQUFpQix1QkFBdUIsd0JBQXdCLHdCQUF3Qiw4QkFBOEIsK0JBQStCLGtDQUFrQyxrQkFBa0IsaUJBQWlCLG1CQUFtQixHQUFHLFlBQVksc0JBQXNCLHdCQUF3Qix3QkFBd0IsbUNBQW1DLGdDQUFnQyw4QkFBOEIsZ0JBQWdCLGtCQUFrQixpQkFBaUIsb0JBQW9CLG9DQUFvQyxHQUFHLGtCQUFrQiw4QkFBOEIsMkJBQTJCLG1DQUFtQyxnQ0FBZ0MsZ0JBQWdCLEdBQUcsNkJBQTZCLGVBQWUsR0FBRyxlQUFlLGtCQUFrQix3QkFBd0IsR0FBRyxhQUFhLG9DQUFvQyxvQkFBb0IsR0FBRyxXQUFXLHNCQUFzQixzQkFBc0Isb0JBQW9CLG9DQUFvQyxHQUFHLGlDQUFpQyxtQkFBbUIsMEJBQTBCLEdBQUcsbUJBQW1CLG1CQUFtQiwwQkFBMEIsR0FBRyw4QkFBOEIsWUFBWSxrQkFBa0IsR0FBRyxtREFBbUQsa0JBQWtCLDJCQUEyQiw4QkFBOEIsWUFBWSw4QkFBOEIsa0NBQWtDLHNDQUFzQyw0Q0FBNEMsMkNBQTJDLDhDQUE4QyxHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyx3RkFBd0YsaUJBQWlCLEdBQUcsaUJBQWlCLGtCQUFrQixjQUFjLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLGtCQUFrQixvQkFBb0IsR0FBRyxnQ0FBZ0Msb0JBQW9CLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLHNCQUFzQixzQkFBc0Isd0JBQXdCLEdBQUcscUJBQXFCLGtCQUFrQixnRUFBZ0UsY0FBYyxHQUFHLHVCQUF1QixrQkFBa0Isd0JBQXdCLGNBQWMsdUJBQXVCLHdCQUF3QixtQkFBbUIsaUJBQWlCLHNCQUFzQiwyQkFBMkIsdUNBQXVDLDhCQUE4QixHQUFHLGdEQUFnRCxZQUFZLHVCQUF1QixrQkFBa0IsZ0NBQWdDLG1DQUFtQyxvQkFBb0IsOEJBQThCLGNBQWMsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsa0NBQWtDLG1CQUFtQixnQ0FBZ0Msc0JBQXNCLDhCQUE4QixZQUFZLDJCQUEyQixvQ0FBb0MsR0FBRyxpREFBaUQsWUFBWSxnQ0FBZ0MsdUJBQXVCLDhCQUE4Qix1QkFBdUIsR0FBRyx1QkFBdUIsdUJBQXVCLCtCQUErQixpQkFBaUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFdBQVcsOEJBQThCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHVCQUF1QixtQkFBbUIsOEJBQThCLG9CQUFvQixvQ0FBb0MsR0FBRyxRQUFRLG9CQUFvQix1QkFBdUIscUJBQXFCLGdDQUFnQyxHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLHdCQUF3QixhQUFhLHVCQUF1Qiw2Q0FBNkMsR0FBRyw2QkFBNkIsOEJBQThCLDJCQUEyQixHQUFHLHVCQUF1QixpQkFBaUIsZ0JBQWdCLG9CQUFvQixpQkFBaUIsc0JBQXNCLDhCQUE4QixHQUFHLHFDQUFxQyxZQUFZLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLG9DQUFvQyxHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyw2QkFBNkIsa0JBQWtCLHdCQUF3QixHQUFHLGlDQUFpQyxzQkFBc0IsR0FBRyxhQUFhLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGFBQWEsdUJBQXVCLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLEdBQUcsaUJBQWlCLDJCQUEyQixHQUFHLCtCQUErQixzQkFBc0IsK0JBQStCLHVCQUF1QixHQUFHLGVBQWUsa0JBQWtCLDhCQUE4Qix3QkFBd0IsR0FBRyxrQ0FBa0MsaUJBQWlCLHVCQUF1QixpQkFBaUIscUJBQXFCLGtDQUFrQyw4QkFBOEIsR0FBRyxPQUFPLDBCQUEwQixtQkFBbUIsR0FBRyxTQUFTLGlCQUFpQixHQUFHLHFEQUFxRCx1QkFBdUIsZ0JBQWdCLGlCQUFpQixtQ0FBbUMsMENBQTBDLEdBQUcsaUNBQWlDLGdCQUFnQixpQkFBaUIsV0FBVyxZQUFZLEdBQUcsaUNBQWlDLCtCQUErQix1QkFBdUIsbUNBQW1DLGdCQUFnQixpQkFBaUIsK0NBQStDLHVDQUF1Qyx1QkFBdUIsYUFBYSxjQUFjLEdBQUcsdUJBQXVCLDhCQUE4QixrQ0FBa0MsZ0JBQWdCLGlCQUFpQixhQUFhLGNBQWMsR0FBRywyQ0FBMkMsUUFBUSxzQ0FBc0MsS0FBSyxZQUFZLHdDQUF3QyxLQUFLLEdBQUcscUJBQXFCLFFBQVEsOEJBQThCLEtBQUssWUFBWSxnQ0FBZ0MsS0FBSyxHQUFHLHlHQUF5RyxVQUFVLGNBQWMsb0JBQW9CLDZCQUE2QixLQUFLLHVCQUF1QixrQ0FBa0MsS0FBSyx1QkFBdUIsbUNBQW1DLEtBQUssc0JBQXNCLG1DQUFtQyxLQUFLLHlCQUF5QixlQUFlLGdCQUFnQixLQUFLLGVBQWUsZUFBZSxnQkFBZ0IsS0FBSyxjQUFjLGtDQUFrQyxLQUFLLEdBQUcsbUJBQW1CO0FBQ3I0akI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnNEO0FBT2hDO0FBQ3lEO0FBQ3BDOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxpRUFBd0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRyxpRUFBd0I7QUFDM0I7QUFDQSxJQUFJO0FBQ0osR0FBRywwREFBaUI7QUFDcEIsR0FBRyw2REFBb0I7QUFDdkIsSUFBSSxvRUFBdUI7QUFDM0IsSUFBSSxxREFBWTtBQUNoQjtBQUNBO0FBQ0EsSUFBSSx1REFBYztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyx5REFBWTtBQUNmO0FBQ0EsR0FBRywyREFBYyxDQUFDLG9EQUFPLEVBQUUscURBQVksZUFBZSx1REFBYztBQUNwRTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEdBQUcsaUVBQXdCO0FBQzNCO0FBQ0E7QUFDQSxFQUFFLHlEQUFZO0FBQ2QsRUFBRSw0REFBbUI7QUFDckI7QUFDQSxHQUFHLG9EQUFPO0FBQ1YsR0FBRyxxREFBWTtBQUNmO0FBQ0E7QUFDQSxHQUFHLHVEQUFjO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxrREFBTTtBQUNaO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxNQUFNLGtEQUFNO0FBQ1osR0FBRyx5REFBUztBQUNaLElBQUkseURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlEQUFTLE9BQU8seURBQVM7QUFDNUIsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyREFBYztBQUNoQyxFQUFFLG9FQUF1QjtBQUN6QixFQUFFLHFEQUFZO0FBQ2Q7QUFDQTtBQUNBLEVBQUUsdURBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxpRUFBcUI7QUFDMUIscUJBQXFCLDBEQUFjO0FBQ25DO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SXdEO0FBQ1A7QUFDUDtBQUNGO0FBQzRCO0FBQzFCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFFQUFnQjtBQUNwQyxhQUFhLHFFQUFnQjtBQUM3QixrQkFBa0IscUVBQWdCLFNBQVMscUJBQXFCO0FBQ2hFLG1CQUFtQixxRUFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGNBQWMscUVBQWdCLFVBQVUsd0JBQXdCLCtDQUFPLEVBQUU7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxRUFBZ0I7QUFDcEMsU0FBUyxxRUFBZ0IsU0FBUyxlQUFlO0FBQ2pELGFBQWEscUVBQWdCLFdBQVcsa0JBQWtCO0FBQzFELFNBQVMscUVBQWdCO0FBQ3pCLGFBQWEscUVBQWdCO0FBQzdCLGFBQWEscUVBQWdCO0FBQzdCLGFBQWEscUVBQWdCLFVBQVUsc0JBQXNCLDhDQUFNLEVBQUU7O0FBRXJFLDJCQUEyQixnQ0FBZ0M7QUFDM0QsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBLHVCQUF1Qix1REFBVztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsK0RBQXNCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxpQ0FBaUM7O0FBRXJGO0FBQ0E7QUFDQSxFQUFFLCtEQUFtQix3QkFBd0IsaUVBQWlCO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGlFQUFxQjtBQUN0QixDQUFDLGlFQUFpQjtBQUNsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUM7QUFDbUI7QUFDZjs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixLQUFLLFNBQVMsa0RBQWEsQ0FBQztBQUN2RDtBQUNBLHVEQUF1RCxTQUFTLEVBQUUsUUFBUTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsS0FBSyxrREFBTTtBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJELEtBQUssU0FBUyxrREFBYSxDQUFDO0FBQ3ZGO0FBQ0EseURBQXlELElBQUksT0FBTyxJQUFJLEVBQUUsU0FBUztBQUNuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxnQkFBZ0I7QUFDckU7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGNBQWMsSUFBSSxZQUFZO0FBQzdELEdBQUc7QUFDSDtBQUNBLGdDQUFnQyxjQUFjLElBQUksWUFBWTtBQUM5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIscUVBQWdCO0FBQ3pDO0FBQ0EsRUFBRTtBQUNGLGdCQUFnQixxRUFBZ0IsVUFBVSxvQkFBb0I7QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWSx3QkFBd0IsbUVBQThCLENBQUM7QUFDckgsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0lBQW9JLDZCQUE2QjtBQUNqSztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3dEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRUFBZ0I7QUFDaEMsb0JBQW9CLHFFQUFnQjtBQUNwQztBQUNBLEVBQUU7QUFDRixvQkFBb0IscUVBQWdCLFFBQVEsdUJBQXVCO0FBQ25FLHFCQUFxQixxRUFBZ0I7QUFDckMsb0JBQW9CLHFFQUFnQjtBQUNwQztBQUNBO0FBQ0EsRUFBRTtBQUNGLGtCQUFrQixxRUFBZ0I7QUFDbEM7QUFDQTtBQUNBLEVBQUU7QUFDRixzQkFBc0IscUVBQWdCO0FBQ3RDO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUN3RDs7QUFFeEQ7QUFDQSxnQkFBZ0IscUVBQWdCO0FBQ2hDLG1CQUFtQixxRUFBZ0IsVUFBVSxxQkFBcUI7QUFDbEUsbUJBQW1CLHFFQUFnQjtBQUNuQztBQUNBO0FBQ0EsRUFBRTtBQUNGLHNCQUFzQixxRUFBZ0IsYUFBYSxnQkFBZ0I7QUFDbkUsd0JBQXdCLHFFQUFnQixVQUFVLG9CQUFvQjtBQUN0RSxxQkFBcUIscUVBQWdCOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCd0Q7QUFDcEI7QUFDUTtBQUNBO0FBQ0E7QUFDUjtBQUNRO0FBQ0E7QUFDSDtBQUNxQzs7QUFFOUU7QUFDQSxpQkFBaUIscUVBQWdCLFdBQVcsZUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFFQUFnQixVQUFVLHlCQUF5QjtBQUN6RTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFFQUFnQixVQUFVLHlCQUF5QjtBQUN6RTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFFQUFnQixVQUFVLHdCQUF3QjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHFFQUFnQixVQUFVLG1CQUFtQjtBQUN6RCxTQUFTLHFFQUFnQixRQUFRLGVBQWU7QUFDaEQsZ0JBQWdCLHFFQUFnQixVQUFVLHdCQUF3QjtBQUNsRSxhQUFhLHFFQUFnQixRQUFRLG9CQUFvQjtBQUN6RCxnQkFBZ0IscUVBQWdCLFVBQVUsd0JBQXdCO0FBQ2xFLGFBQWEscUVBQWdCLFFBQVEsb0JBQW9CO0FBQ3pELGVBQWUscUVBQWdCLFVBQVUsdUJBQXVCO0FBQ2hFLFlBQVkscUVBQWdCLFFBQVEsbUJBQW1CO0FBQ3ZELGdCQUFnQixxRUFBZ0IsVUFBVSx1QkFBdUI7QUFDakUsYUFBYSxxRUFBZ0IsUUFBUSxtQkFBbUI7QUFDeEQsZ0JBQWdCLHFFQUFnQixVQUFVLHVCQUF1QjtBQUNqRSxhQUFhLHFFQUFnQixRQUFRLG1CQUFtQjtBQUN4RCxXQUFXLHFFQUFnQixVQUFVLEtBQUssNENBQUksRUFBRTtBQUNoRCxlQUFlLHFFQUFnQixVQUFVLEtBQUssZ0RBQVEsRUFBRTtBQUN4RCxlQUFlLHFFQUFnQixVQUFVLEtBQUssZ0RBQVEsRUFBRTtBQUN4RCxlQUFlLHFFQUFnQixVQUFVLEtBQUssZ0RBQVEsRUFBRTtBQUN4RCxlQUFlLHFFQUFnQixVQUFVLEtBQUssZ0RBQVEsRUFBRTtBQUN4RCxXQUFXLHFFQUFnQixVQUFVLEtBQUssNENBQUksRUFBRTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIscUVBQWdCLFVBQVUsdUJBQXVCO0FBQ3BFLGVBQWUscUVBQWdCLFVBQVUsdUJBQXVCO0FBQ2hFLGVBQWUscUVBQWdCLFdBQVcscUJBQXFCO0FBQy9ELDBCQUEwQixrREFBTTtBQUNoQztBQUNBO0FBQ0EsQ0FBQyx3RUFBcUI7QUFDdEIsQ0FBQyx3RUFBcUI7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFnQixRQUFRLHVCQUF1QjtBQUNwRSxlQUFlLHFFQUFnQixTQUFTLHVCQUF1QjtBQUMvRCxhQUFhLHFFQUFnQixVQUFVLG9CQUFvQjtBQUMzRCxZQUFZLHFFQUFnQixVQUFVLG1CQUFtQjtBQUN6RCxjQUFjLHFFQUFnQixVQUFVLHFCQUFxQjtBQUM3RCxhQUFhLHFFQUFnQixRQUFRLG9CQUFvQjtBQUN6RCxZQUFZLHFFQUFnQixRQUFRLG1CQUFtQjtBQUN2RCxrQkFBa0IscUVBQWdCLFFBQVEsMEJBQTBCO0FBQ3BFLG1CQUFtQixxRUFBZ0IsVUFBVSwwQkFBMEI7QUFDdkUsZ0JBQWdCLHFFQUFnQixRQUFRLHNCQUFzQjtBQUM5RCxpQkFBaUIscUVBQWdCLFVBQVUseUJBQXlCOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHFFQUFnQixRQUFRLGVBQWU7QUFDaEQsWUFBWSxxRUFBZ0IsVUFBVSxtQkFBbUI7QUFDekQsaUJBQWlCLHFFQUFnQjtBQUNqQztBQUNBLFFBQVEsOENBQVU7QUFDbEIsR0FBRzs7QUFFSCxDQUFDLGtEQUFNO0FBQ1A7QUFDQTtBQUNBLENBQUMsb0VBQWlCLGNBQWMsb0VBQWlCO0FBQ2pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlId0Q7QUFDUDtBQUNQOztBQUUxQztBQUNBO0FBQ0EsU0FBUyxxRUFBZ0IsVUFBVSxlQUFlO0FBQ2xELGVBQWUscUVBQWdCO0FBQy9CLFlBQVkscUVBQWdCLFVBQVUsbUJBQW1CO0FBQ3pELFlBQVkscUVBQWdCO0FBQzVCLFFBQVEscUVBQWdCO0FBQ3hCLGdCQUFnQixxRUFBZ0I7QUFDaEMsb0JBQW9CLHFFQUFnQjtBQUNwQyxnQkFBZ0IscUVBQWdCLFdBQVcsa0JBQWtCO0FBQzdELFlBQVkscUVBQWdCO0FBQzVCLGlCQUFpQixxRUFBZ0IsV0FBVyxrQkFBa0I7QUFDOUQsYUFBYSxxRUFBZ0I7O0FBRTdCO0FBQ0EsZ0RBQWdELGlCQUFpQjs7QUFFakUsOEJBQThCLHlCQUF5QjtBQUN2RCwrQkFBK0IseUJBQXlCO0FBQ3hELHNCQUFzQixRQUFRO0FBQzlCLDhCQUE4Qiw2QkFBNkI7QUFDM0QsMkRBQTJELHNCQUFzQjtBQUNqRiwrQkFBK0IsdURBQVc7QUFDMUMsNkJBQTZCLHVEQUFXO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQSxDQUFDLDhEQUFpQjtBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN3RDtBQUtsQztBQUNpQztBQUNpQjtBQUNYOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEVBQW9CO0FBQ3RCO0FBQ0E7QUFDQSxFQUFFLHVEQUFPLHFCQUFxQiwyREFBVztBQUN6QyxDQUFDLDREQUFlO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixxRUFBZ0IsV0FBVyxrQkFBa0I7QUFDbEUsaUJBQWlCLHFFQUFnQixXQUFXLGtCQUFrQjtBQUM5RCxrQkFBa0IscUVBQWdCLFdBQVcsa0JBQWtCO0FBQy9ELG9CQUFvQixxRUFBZ0IsV0FBVyxrQkFBa0I7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdURBQVc7O0FBRWhCO0FBQ0EsRUFBRSwyREFBZTs7QUFFakIsaURBQWlELDJEQUFrQjtBQUNuRSwrQkFBK0IsNERBQW1CO0FBQ2xELDhCQUE4Qix3Q0FBd0M7QUFDdEUsOEJBQThCLHFDQUFxQztBQUNuRSxnQ0FBZ0Msc0NBQXNDO0FBQ3RFLCtCQUErQixxQ0FBcUM7QUFDcEUsa0NBQWtDLGdDQUFnQzs7QUFFbEUsc0NBQXNDLHVEQUFXO0FBQ2pELHlDQUF5Qyx1REFBVztBQUNwRCxxQ0FBcUMsdURBQVc7QUFDaEQsb0RBQW9ELHVEQUFXO0FBQy9ELDRCQUE0Qiw0QkFBNEI7QUFDeEQsK0JBQStCLDJCQUEyQjtBQUMxRCwrQkFBK0Isa0JBQWtCO0FBQ2pELDZCQUE2QixxQkFBcUI7QUFDbEQsOEJBQThCLDBCQUEwQjtBQUN4RCw4QkFBOEIsMEJBQTBCO0FBQ3hELG9EQUFvRCxpQ0FBaUM7QUFDckY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3QjtBQU12QjtBQUN1QjtBQUN5QjtBQUN6QjtBQUNGO0FBSWY7QUFDZTs7QUFFM0MsMERBQVk7QUFDWiw4REFBa0I7QUFDbEIsK0RBQW1CO0FBQ25CLDBEQUFZO0FBQ1osMERBQVM7QUFDVCx5REFBWTtBQUNaLHNFQUFtQjs7QUFFbkIsNEVBQXlCO0FBQ3pCLDREQUFtQjtBQUNuQjtBQUNBLENBQUMseURBQVk7QUFDYixDQUFDLHFEQUFZO0FBQ2IsQ0FBQyxvREFBUTtBQUNUO0FBQ0EsQ0FBQyx1REFBYztBQUNmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAtY2xpY2stZXZlbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NpdHktd2F0Y2hsaXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jcmVhdGUtZG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXZlbi1kYXlzLWZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RvZGF5LWZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRnYXA6IDVweDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0cGFkZGluZzogMjBweCA1MHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDY7XFxufVxcblxcbmgxIHtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi50aXRsZS1kaXYge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5zZWFyY2gtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnNlYXJjaC1kaXY+aW5wdXQge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjb2xvcjogI2VkYWVhZTtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzZjRjO1xcblxcdGNvbG9yOiBzbm93O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1MzI1MjU7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcblxcdGNvbG9yOiBncmF5O1xcbn1cXG5cXG4ubm90LWZvdW5kOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6IHJlZDtcXG59XFxuXFxuLnVuaXQtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWdyZWUge1xcblxcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udW5pdCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi51bml0OmhvdmVyLFxcbi5kZWdyZWU6aG92ZXIge1xcblxcdGNvbG9yOiAjOWU5ZTllO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG59XFxuXFxuLmRlZ3JlZTpob3ZlciB7XFxuXFx0Y29sb3I6ICM5ZTllOWU7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBNYWluIFN0eWxpbmcgKi9cXG5tYWluIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi8qIHRvZGF5IGRhdGEgZGl2IHN0eWxpbmcgKi9cXG4udG9kYXktZGF0YS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiA1cHggNXB4IDBweCAyMHB4O1xcblxcdGZsZXg6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjBweCAyMHB4IGJsYWNrO1xcbn1cXG5cXG4ud2VhdGhlci1kZXNjIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RheS1kYXRhLWRpdj5kaXY6Zmlyc3Qtb2YtdHlwZSxcXG4udG9kYXktZGF0YS1kaXY+aDI6Zmlyc3Qtb2YtdHlwZSxcXG4udGVtcC1kaXY+KiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGVtcC1yYW5nZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi50ZW1wZXJhdHVyZS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuXFx0Zm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmU+LnN1cGVyLXNjcmlwdCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZGVzYy1pY29uIHtcXG5cXHR3aWR0aDogNzVweDtcXG59XFxuXFxuLmZlZWxzLWxpa2UtdGVtcCB7XFxuXFx0bWFyZ2luLXRvcDogLTE1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2Pioge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6ICMxYTAwMmE7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gODAlKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmM5ODk4O1xcbn1cXG5cXG4vKiBuZXh0IDcgZGF5cyBzdHlsaW5nICovXFxuLm5leHQtN2RheXMtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGdyaWQtYXJlYTogMi8xLzMvMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMjBweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMTAwMDA7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGNvbG9yOiAjZWJjYWNhO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwYjAzMGFiMDtcXG5cXHRwYWRkaW5nOiAycHggMTBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmM5ODk4O1xcblxcdGZsZXg6IDE7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiB3YXRjaGxpc3QgZGl2IHN0eWxpbmcgKi9cXG4ud2F0Y2hsaXN0LWRpdiB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiAxNXB4IDIwcHggNXB4IDEwcHg7XFxuXFx0Z3JpZC1hcmVhOiAxLzIvMy8zO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyNjI4Mjk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ud2F0Y2hsaXN0LWRpdj5oMiB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxudWwge1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5jaXR5IHtcXG5cXHRwYWRkaW5nOiA3cHggMzBweCA3cHggN3B4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGNvbG9yOiAjZmZlYmNlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmxpIHtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxuXFx0cGFkZGluZzogMjBweCAxMHB4O1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzBiMDMwYWIwO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcblxcbi5jaXR5OmhvdmVyLFxcbi5hZGQtaWNvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjgyOTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmFkZC1idXR0b24+aW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLWljb24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLWljb246aG92ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmNpdHk+ZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHk+ZGl2OmZpcnN0LW9mLXR5cGU+aW1nIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuXFx0d2lkdGg6IDIwcHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAxMHB4O1xcblxcdHRvcDogNXB4O1xcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3ctZGVsZXRlIHtcXG5cXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+Kj5pbWcge1xcblxcdHdpZHRoOiAyNXB4O1xcblxcdGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcbi5jYXJkPmRpdj5wOmZpcnN0LW9mLXR5cGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGZvbnQtc2l6ZTogMC45NXJlbTtcXG59XFxuXFxuLmljb24tZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXG5mb290ZXIge1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjgyOTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiAjYjNlZTc5O1xcbn1cXG5cXG4uZmEge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXIsXFxuLmxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpOyAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3Qge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLmxvYWRlcixcXG4ubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0Ym9yZGVyOiAxMHB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlci10b3A6IDEwcHggc29saWQgIzFkNGQ0ZjtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcblxcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMzUlO1xcblxcdGxlZnQ6IDQ1JTtcXG59XFxuXFxuLmxvYWRlci13YXRjaGxpc3Qge1xcblxcdGJvcmRlcjogNXB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHRvcDogNDAlO1xcblxcdGxlZnQ6IDQwJTtcXG59XFxuXFxuLyogU2FmYXJpICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIFVzZXMgZmxleC1kaXJlY3Rpb24gY29sdW1uIGZvciBzY3JlZW4gc2l6ZXMgYmVsb3cgNjAwcHggKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQudG9kYXktZGF0YS1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0Lm5leHQtN2RheXMtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQud2F0Y2hsaXN0LWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlci13YXRjaGxpc3Qge1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDQzJTtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlciB7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0XFx0bGVmdDogNDAlO1xcblxcdH1cXG5cXG5cXHRmb290ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwYjAzMGFiMDtcXG5cXHR9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtDQUN0QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0Isa0JBQWtCO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osUUFBUTtDQUNSLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixnQ0FBZ0M7Q0FDaEMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLDBCQUEwQjtDQUMxQiw2QkFBNkI7Q0FDN0IsYUFBYTtDQUNiLFlBQVk7Q0FDWixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsYUFBYTtDQUNiLFlBQVk7Q0FDWixlQUFlO0NBQ2YsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FD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QUVBO0VBQ0MsUUFBUTtFQUNSLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLDJCQUEyQjtDQUM1QjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGdhcDogNXB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiAyMHB4IDUwcHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmM5ODk4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkNjtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0Y29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLnRpdGxlLWRpdiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcblxcdGZsZXg6IDI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWRpdj5pbnB1dCB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiAjZWRhZWFlO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzYzNmNGM7XFxuXFx0Y29sb3I6IHNub3c7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUzMjUyNTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuXFx0Y29sb3I6IGdyYXk7XFxufVxcblxcbi5ub3QtZm91bmQ6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogcmVkO1xcbn1cXG5cXG4udW5pdC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlZ3JlZSB7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51bml0IHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnVuaXQ6aG92ZXIsXFxuLmRlZ3JlZTpob3ZlciB7XFxuXFx0Y29sb3I6ICM5ZTllOWU7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbn1cXG5cXG4uZGVncmVlOmhvdmVyIHtcXG5cXHRjb2xvcjogIzllOWU5ZTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIE1haW4gU3R5bGluZyAqL1xcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLyogdG9kYXkgZGF0YSBkaXYgc3R5bGluZyAqL1xcbi50b2RheS1kYXRhLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDVweCA1cHggMHB4IDIwcHg7XFxuXFx0ZmxleDogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMHB4IDIwcHggYmxhY2s7XFxufVxcblxcbi53ZWF0aGVyLWRlc2Mge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZGF5LWRhdGEtZGl2PmRpdjpmaXJzdC1vZi10eXBlLFxcbi50b2RheS1kYXRhLWRpdj5oMjpmaXJzdC1vZi10eXBlLFxcbi50ZW1wLWRpdj4qIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi50ZW1wLXJhbmdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG5cXHRmb250LXNpemU6IDRyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZT4uc3VwZXItc2NyaXB0IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kZXNjLWljb24ge1xcblxcdHdpZHRoOiA3NXB4O1xcbn1cXG5cXG4uZmVlbHMtbGlrZS10ZW1wIHtcXG5cXHRtYXJnaW4tdG9wOiAtMTVweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+KiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRjb2xvcjogIzFhMDAyYTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bWluLXdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA4MCUpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmYzk4OTg7XFxufVxcblxcbi8qIG5leHQgNyBkYXlzIHN0eWxpbmcgKi9cXG4ubmV4dC03ZGF5cy1kaXYge1xcblxcdGZsZXg6IDI7XFxuXFx0Z3JpZC1hcmVhOiAyLzEvMy8yO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogMTBweCA1cHggMTBweCAyMHB4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAxMDAwMDtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi5jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0Y29sb3I6ICNlYmNhY2E7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzBiMDMwYWIwO1xcblxcdHBhZGRpbmc6IDJweCAxMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0ZmxleDogMTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIHdhdGNobGlzdCBkaXYgc3R5bGluZyAqL1xcbi53YXRjaGxpc3QtZGl2IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDE1cHggMjBweCA1cHggMTBweDtcXG5cXHRncmlkLWFyZWE6IDEvMi8zLzM7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjgyOTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi53YXRjaGxpc3QtZGl2PmgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG51bCB7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmNpdHkge1xcblxcdHBhZGRpbmc6IDdweCAzMHB4IDdweCA3cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29sb3I6ICNmZmViY2U7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxubGkge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXHRwYWRkaW5nOiAyMHB4IDEwcHg7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwMzBhYjA7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1yaWdodDogMzBweDtcXG5cXHRnYXA6IDVweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDIzMyAxODQgMTg0IC8gNTAlKTtcXG59XFxuXFxuLmNpdHk6aG92ZXIsXFxuLmFkZC1pY29uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyODI5O1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcbi5hZGQtYnV0dG9uPmlucHV0IHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWluLXdpZHRoOiA5NXB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dDpmb2N1cy12aXNpYmxlIHtcXG5cXHRmbGV4OiAxO1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtaWNvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hZGQtaWNvbjpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZT5pbWcge1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uZGVsZXRlIHtcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0dG9wOiA1cHg7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdy1kZWxldGUge1xcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdj4qPmltZyB7XFxuXFx0d2lkdGg6IDI1cHg7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuXFxuLmNhcmQ+ZGl2PnA6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Zm9udC1zaXplOiAwLjk1cmVtO1xcbn1cXG5cXG4uaWNvbi1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcbmZvb3RlciB7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyODI5O1xcbn1cXG5cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6ICNiM2VlNzk7XFxufVxcblxcbi5mYSB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubG9hZGVyLWNvbnRhaW5lcixcXG4ubG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3Qge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0LyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5sb2FkZXItY29udGFpbmVyLXdhdGNobGlzdCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4ubG9hZGVyLFxcbi5sb2FkZXItd2F0Y2hsaXN0IHtcXG5cXHRib3JkZXI6IDEwcHggc29saWQgIzkwNjI2MjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyLXRvcDogMTBweCBzb2xpZCAjMWQ0ZDRmO1xcblxcdHdpZHRoOiA2MHB4O1xcblxcdGhlaWdodDogNjBweDtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAzNSU7XFxuXFx0bGVmdDogNDUlO1xcbn1cXG5cXG4ubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0Ym9yZGVyOiA1cHggc29saWQgIzkwNjI2MjtcXG5cXHRib3JkZXItdG9wOiA1cHggc29saWQgIzFkNGQ0ZjtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0dG9wOiA0MCU7XFxuXFx0bGVmdDogNDAlO1xcbn1cXG5cXG4vKiBTYWZhcmkgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuXFx0MCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblxcdH1cXG59XFxuXFxuLyogVXNlcyBmbGV4LWRpcmVjdGlvbiBjb2x1bW4gZm9yIHNjcmVlbiBzaXplcyBiZWxvdyA2MDBweCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxNXB4KSB7XFxuXFx0bWFpbiB7XFxuXFx0XFx0ZmxleDogMTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcblxcblxcdC50b2RheS1kYXRhLWRpdiB7XFxuXFx0XFx0cGFkZGluZzogNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQubmV4dC03ZGF5cy1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDE1cHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcblxcdC53YXRjaGxpc3QtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0XFx0dG9wOiA1MCU7XFxuXFx0XFx0bGVmdDogNDMlO1xcblxcdH1cXG5cXG5cXHQubG9hZGVyIHtcXG5cXHRcXHR0b3A6IDQwJTtcXG5cXHRcXHRsZWZ0OiA0MCU7XFxuXFx0fVxcblxcblxcdGZvb3RlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzBiMDMwYWIwO1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhZGRDaXR5VG9XYXRjaGxpc3QgfSBmcm9tIFwiLi9jaXR5LXdhdGNobGlzdFwiO1xuaW1wb3J0IHtcblx0ZGlzcGxheUVycm9yTWVzc2FnZSxcblx0Z2V0Q291bnRyeU5hbWUsXG5cdGdldExvbkFuZExhdCxcblx0Z2V0V2VhdGhlckRhdGEsXG5cdHNjcmVlbkxvYWRlcixcbn0gZnJvbSBcIi4vZmV0Y2gtZGF0YVwiO1xuaW1wb3J0IHsgZGVncmVlLCBuZXdEZWdyZWUsIHNldERlZ3JlZSwgd2F0Y2hsaXN0QXJyYXkgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vdG9kYXktZm9yZWNhc3RcIjtcblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0J1dHRvbigpIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrRXZlbnRUYXJnZXRzKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tFdmVudFRhcmdldHMoZSkge1xuXHRjb25zdCBhZGRDaXR5QnV0dG9uID1cblx0XHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkLFxuXHRcdGhlYWRlcklucHV0ID0gZG9jdW1lbnQuYm9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSxcblx0XHRoZWFkZXJCdXR0b24gPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLFxuXHRcdHdhdGNobGlzdElucHV0ID0gYWRkQ2l0eUJ1dHRvbi5jaGlsZE5vZGVzWzFdLFxuXHRcdG51bWJlck9mQ2l0aWVzID1cblx0XHRcdGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uY2hpbGRFbGVtZW50Q291bnQ7XG5cblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC1pY29uXCIpIHtcblx0XHRpZiAod2F0Y2hsaXN0SW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG5cdFx0XHRkaXNwbGF5RXJyb3JNZXNzYWdlLmNhbGwoZG9jdW1lbnQuYm9keSwgXCJFbXB0eSBJbnB1dFwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKG51bWJlck9mQ2l0aWVzID09IDcpIHtcblx0XHRcdGRpc3BsYXlFcnJvck1lc3NhZ2UuY2FsbChkb2N1bWVudC5ib2R5LCBcIk1heC4gQ2l0aWVzIFJlYWNoZWRcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNjcmVlbkxvYWRlci5jYWxsKGRvY3VtZW50KTtcblx0XHRcdGdldFdlYXRoZXJEYXRhLmFwcGx5KGRvY3VtZW50LmJvZHksIFtcblx0XHRcdFx0YWRkQ2l0eVRvV2F0Y2hsaXN0LmJpbmQoZG9jdW1lbnQuYm9keSksXG5cdFx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdFx0d2F0Y2hsaXN0SW5wdXQudmFsdWUsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRnZXRDb3VudHJ5TmFtZSxcblx0XHRcdF0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIFRhcmdldHMgYWxsIGNoaWxkcmVuIG9mIGNpdHkgZWxlbWVudFxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIikuZm9yRWFjaCgoY2l0eUxpc3QpID0+IHtcblx0XHRpZiAoXG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdCB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMF0gfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzFdIHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblswXS5jaGlsZHJlblsxXSB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cblx0XHQpIHtcblx0XHRcdHNjcmVlbkxvYWRlcigpO1xuXHRcdFx0Y29uc3QgY2l0eSA9IGNpdHlMaXN0LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdGdldFdlYXRoZXJEYXRhKGdldERhdGEsIGdldExvbkFuZExhdCwgY2l0eSwgZmFsc2UsIGdldENvdW50cnlOYW1lKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChlLnRhcmdldCA9PT0gaGVhZGVyQnV0dG9uKSB7XG5cdFx0aWYgKGhlYWRlcklucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuXHRcdFx0ZGlzcGxheUVycm9yTWVzc2FnZS5jYWxsKG51bGwsIFwiRW1wdHkgSW5wdXRcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNjcmVlbkxvYWRlcigpO1xuXHRcdGdldFdlYXRoZXJEYXRhLmNhbGwoXG5cdFx0XHRudWxsLFxuXHRcdFx0Z2V0RGF0YSxcblx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdGhlYWRlcklucHV0LnZhbHVlLFxuXHRcdFx0aGVhZGVySW5wdXQsXG5cdFx0XHRnZXRDb3VudHJ5TmFtZVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJGb3JFdmVudFRvKGVsZW1lbnQsIHVuaXQpIHtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChkZWdyZWUgPT0gXCJDXCIpIHVuaXQudGV4dENvbnRlbnQgPSBcIkNcIjtcblx0XHRlbHNlIHVuaXQudGV4dENvbnRlbnQgPSBcIkZcIjtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RlblRvRXZlbnRGcm9tKGVsZW1lbnQsIHVuaXQpIHtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChkZWdyZWUgPT0gXCJDXCIpXG5cdFx0XHRuZXdEZWdyZWUoXCJGXCIpLFxuXHRcdFx0XHRzZXREZWdyZWUoKSxcblx0XHRcdFx0KHVuaXQudGV4dENvbnRlbnQgPSBcIiBDXCIpLFxuXHRcdFx0XHRkaXNwbGF5RmFocmVuaGVpdCgpO1xuXHRcdGVsc2Vcblx0XHRcdG5ld0RlZ3JlZShcIkNcIiksIHNldERlZ3JlZSgpLCAodW5pdC50ZXh0Q29udGVudCA9IFwiIEZcIiksIGRpc3BsYXlDZWxzaXVzKCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmFocmVuaGVpdCgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb252ZXJ0XCIpLmZvckVhY2goKHRlbXApID0+IHtcblx0XHR0ZW1wLnRleHRDb250ZW50ID0gY29udmVydENlbHNpdXNUb0ZhaHJlbmhlaXQocGFyc2VGbG9hdCh0ZW1wLnRleHRDb250ZW50KSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0Q2Vsc2l1c1RvRmFocmVuaGVpdChjZWxzaXVzKSB7XG5cdGNvbnN0IGZhaHJlbmhlaXQgPSAoY2Vsc2l1cyAqIDkpIC8gNSArIDMyO1xuXHRyZXR1cm4gTWF0aC5yb3VuZCgoZmFocmVuaGVpdCAqIDEwMDApIC8gMTAwMCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDZWxzaXVzKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnZlcnRcIikuZm9yRWFjaCgodGVtcCkgPT4ge1xuXHRcdHRlbXAudGV4dENvbnRlbnQgPSBjb252ZXJ0RmFocmVuaGVpdFRvQ2Vsc2l1cyhwYXJzZUZsb2F0KHRlbXAudGV4dENvbnRlbnQpKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGYWhyZW5oZWl0VG9DZWxzaXVzKGZhaHJlbmhlaXQpIHtcblx0Y29uc3QgY2Vsc2l1cyA9ICgoZmFocmVuaGVpdCAtIDMyKSAqIDUpIC8gOTtcblx0cmV0dXJuIE1hdGgucm91bmQoKGNlbHNpdXMgKiAxMDAwKSAvIDEwMDApO1xufVxuXG4vKipcbiAqIFVzZSBkZWxheUV4ZWN1dGlvbiBhbmQgZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCBmdW5jdGlvbnMgdG8gbWFrZVxuICogd2F0Y2hsaXN0IGNpdGllcyBpbiBsb2NhbFN0b3JhZ2UgZmV0Y2ggdGhlaXIgZGF0YSBvbmUgYWZ0ZXIgdGhlIG90aGVyXG4gKiBzbyB0aGV5IGFyZSBiZWluZyByZW5kZXJlZCBhY2NvcmRpbmdseSBhcyBpdCBpcyBpbiBMUyB0byBtYWtlIGRlbGV0aW5nXG4gKiB0aGVtIHdpdGggdWwgaW5kZXggY29ycmVzcG9uZCB0byBpbmRleCBpbiBMUy4gU3RpbGwgbm90IDEwMCUgY2VydGFpbiB0b1xuICogZmV0Y2ggc3luY2hyb25vdXNseSBidXQgaGVscHMuXG4gKi9cbmZ1bmN0aW9uIGRlbGF5RXhlY3V0aW9uKGNpdHkpIHtcblx0Y29uc3QgZmV0Y2hOb3cgPSBnZXRXZWF0aGVyRGF0YShcblx0XHRhZGRDaXR5VG9XYXRjaGxpc3QuYmluZChjaXR5KSxcblx0XHRnZXRMb25BbmRMYXQsXG5cdFx0Y2l0eSxcblx0XHRmYWxzZSxcblx0XHRnZXRDb3VudHJ5TmFtZVxuXHQpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoZmV0Y2hOb3cpLCAxMjAwKTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QoKSB7XG5cdGlmICh3YXRjaGxpc3RBcnJheS5sZW5ndGggPiAwKVxuXHRcdGZvciAoY29uc3QgY2l0eSBvZiB3YXRjaGxpc3RBcnJheSkge1xuXHRcdFx0YXdhaXQgZGVsYXlFeGVjdXRpb24oY2l0eSk7XG5cdFx0fVxufVxuXG5leHBvcnQge1xuXHRhZGRMaXN0ZW5lclRvQnV0dG9uLFxuXHRkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0LFxuXHRhZGRMaXN0ZW5lckZvckV2ZW50VG8sXG5cdGxpc3RlblRvRXZlbnRGcm9tLFxufTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGVhclNjcmVlbkxvYWRlciB9IGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCIuL2ljb25zL2FkZGNpdHkucG5nXCI7XG5pbXBvcnQgRGVsZXRlIGZyb20gXCIuL2ljb25zL2RlbGV0ZS5wbmdcIjtcbmltcG9ydCB7IHNldHdhdGNobGlzdEFycmF5LCB3YXRjaGxpc3RBcnJheSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IHN1cGVyU2NyaXB0IH0gZnJvbSBcIi4vcGFnZS1tYWluXCI7XG5cbi8qKlxuICogV2F0Y2hsaXN0IHN0YXRpYyBlbGVtZW50cywgdGhleSBkbyBub3QgcmVxdWlyZSBBUEkgcmVxdWVzdCB0byBkaXNwbGF5LlxuICovXG5mdW5jdGlvbiB3YXRjaGxpc3QoKSB7XG5cdGNvbnN0IHdhdGNobGlzdERpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLFxuXHRcdHdhdGNobGlzdEhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiKSxcblx0XHRjaXR5TGlzdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRhZGRDaXR5QnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudChcImxpXCIsIHsgY2xhc3M6IFwiYWRkLWJ1dHRvblwiIH0pLFxuXHRcdHdhdGNobGlzdElucHV0ID0gY3JlYXRlRG9tRWxlbWVudChcImlucHV0XCIsIHtcblx0XHRcdGNsYXNzOiBcIndhdGNobGlzdC1pbnB1dFwiLFxuXHRcdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkFkZCBDaXR5XCIsXG5cdFx0fSksXG5cdFx0TXlBZGRJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImFkZC1pY29uXCIsIHNyYzogQWRkSWNvbiB9KTtcblxuXHRhZGRDaXR5QnV0dG9uLmFwcGVuZChNeUFkZEljb24sIHdhdGNobGlzdElucHV0KTtcblx0d2F0Y2hsaXN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJXYXRjaGxpc3RcIjtcblx0Y2l0eUxpc3QuYXBwZW5kKGFkZENpdHlCdXR0b24pO1xuXHR3YXRjaGxpc3REaXYuYXBwZW5kKHdhdGNobGlzdEhlYWRlciwgY2l0eUxpc3QpO1xufVxuXG4vKipcbiAqIFRoZXNlIGFyZSByZW5kZXJlZCB3aGVuIHRoZXJlJ3MgYSByZXF1ZXN0IHRvIGFkZCBhbmQgZGlzcGxheSBjaXR5XG4gKiBvbiB0aGUgd2F0Y2hsaXN0LlxuICovXG5mdW5jdGlvbiBhZGRDaXR5VG9XYXRjaGxpc3QocmVzcG9uc2UpIHtcblx0Y29uc3QgYWRkQ2l0eUJ1dHRvbiA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZCxcblx0XHRjaXR5TGlzdCA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0sXG5cdFx0d2F0Y2hsaXN0SW5wdXQgPSBhZGRDaXR5QnV0dG9uLmNoaWxkcmVuWzFdLFxuXHRcdHdhdGNobGlzdFNjcmVlbkxvYWRlckRpdiA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5sYXN0Q2hpbGQsXG5cdFx0aWNvbkFuZENpdHlOYW1lID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiKSxcblx0XHRjaXR5ID0gY3JlYXRlRG9tRWxlbWVudChcImxpXCIsIHsgY2xhc3M6IFwiY2l0eVwiIH0pLFxuXHRcdHRlbXBTcGFuID0gY3JlYXRlRG9tRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJjb252ZXJ0XCIgfSksXG5cdFx0dGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdGNpdHlOYW1lID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0ZGVzY0ljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIpLFxuXHRcdG15RGVsZXRlID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImRlbGV0ZVwiLCBzcmM6IERlbGV0ZSB9KTtcblxuXHR0ZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHJlc3BvbnNlLmN1cnJlbnQudGVtcCl9YDtcblx0Y2l0eU5hbWUudGV4dENvbnRlbnQgPSBgJHt3YXRjaGxpc3RJbnB1dC52YWx1ZX1gO1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQuYm9keSkgaWNvbkFuZENpdHlOYW1lLmFwcGVuZChkZXNjSWNvbiwgY2l0eU5hbWUpO1xuXHRlbHNlIGljb25BbmRDaXR5TmFtZS5hcHBlbmQoZGVzY0ljb24sIHRoaXMpO1xuXG5cdHRlbXAuYXBwZW5kKHRlbXBTcGFuLCBzdXBlclNjcmlwdCgpKTtcblx0Z2V0SWNvbkFuZFRlbXAoY2l0eSwgaWNvbkFuZENpdHlOYW1lLCBkZXNjSWNvbiwgcmVzcG9uc2UsIHRlbXAsIG15RGVsZXRlKTtcblx0Y2l0eUxpc3QuaW5zZXJ0QmVmb3JlKGNpdHksIGFkZENpdHlCdXR0b24pO1xuXHRhZGRMaXN0ZW5lclRvRGVsZXRlQnV0dG9uKG15RGVsZXRlLCBjaXR5KTtcblxuXHQvLyBSZW1vdmVzIHNjcmVlbmxvYWRlciBvbmNlIGZldGNoIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC5cblx0aWYgKHdhdGNobGlzdFNjcmVlbkxvYWRlckRpdi5jbGFzc05hbWUgPT09IFwibG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3RcIilcblx0XHRjbGVhclNjcmVlbkxvYWRlci5jYWxsKGRvY3VtZW50LmJvZHkpO1xufVxuXG4vKipcbiAqIEdldHMgdGVtcGVyYXR1cmUgYW5kIHdlYXRoZXIgaWNvbiBmb3IgZWFjaCBpbnN0YW5jZXMgb2YgY2l0eVxuICovXG5mdW5jdGlvbiBnZXRJY29uQW5kVGVtcChcblx0Y2l0eSxcblx0aWNvbkFuZENpdHlOYW1lLFxuXHRkZXNjSWNvbixcblx0cmVzcG9uc2UsXG5cdHRlbXAsXG5cdG15RGVsZXRlXG4pIHtcblx0Y29uc3Qgd2F0Y2hsaXN0SW5wdXQgPVxuXHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkXG5cdFx0XHQuY2hpbGROb2Rlc1sxXTtcblx0Y2l0eS5hcHBlbmQoaWNvbkFuZENpdHlOYW1lLCB0ZW1wLCBteURlbGV0ZSk7XG5cdGRlc2NJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3Jlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5pY29ufS5wbmdgO1xuXG5cdC8vIE9ubHkgcHVzaGVzIGNpdHkgdG8gbG9jYWxTdG9yYWdlIGlmIG5vdCBhbiBlbXB0eSBzdHJpbmdcblx0aWYgKHdhdGNobGlzdElucHV0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIilcblx0XHR3YXRjaGxpc3RBcnJheS5wdXNoKHdhdGNobGlzdElucHV0LnZhbHVlKSwgc2V0d2F0Y2hsaXN0QXJyYXkoKTtcblx0aWYgKHdhdGNobGlzdElucHV0LnZhbHVlKSB3YXRjaGxpc3RJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbi8qKlxuICogQWRkIGV2ZW50TGlzdGVuZXIgYW5kIGRpc3BsYXkgZGVsZXRlIGJ1dHRvbiBvbiBtb3VzZWVudGVyLCBoaWRlIGRlbGV0ZVxuICogYnV0dG9uIG9uIG1vdXNlbGVhdmUuXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9EZWxldGVCdXR0b24obXlEZWxldGUsIGNpdHkpIHtcblx0bXlEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcImNsaWNrXCIsXG5cdFx0RGVsZXRlQ2l0eUZyb21XYXRjaGxpc3QuYmluZChudWxsLCBteURlbGV0ZSlcblx0KTtcblx0Y2l0eS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PlxuXHRcdG15RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJzaG93LWRlbGV0ZVwiKVxuXHQpO1xuXHRjaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+XG5cdFx0bXlEZWxldGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZGVsZXRlXCIpXG5cdCk7XG59XG5cbi8qKlxuICogRGVsZXRlcyBjaXR5IGZyb20gRE9NIGFuZCB1c2VzIGluZGV4IG9mIGNpdHkgb24gd2F0Y2hsaXN0IHVsIHRvIGRlbGV0ZVxuICogY2l0eSBuYW1lIGZyb20gbG9jYWxTdG9yYWdlLlxuICovXG5mdW5jdGlvbiBEZWxldGVDaXR5RnJvbVdhdGNobGlzdChteURlbGV0ZSkge1xuXHRsZXQgbGlzdEFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIikpO1xuXHRsZXQgaW5kZXhPZkNpdHkgPSBsaXN0QXJyYXkuaW5kZXhPZihteURlbGV0ZS5wYXJlbnROb2RlKTtcblx0d2F0Y2hsaXN0QXJyYXkuc3BsaWNlKGluZGV4T2ZDaXR5LCAxKTtcblx0c2V0d2F0Y2hsaXN0QXJyYXkoKTtcblx0bXlEZWxldGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG15RGVsZXRlLnBhcmVudE5vZGUpO1xufVxuXG5leHBvcnQgeyB3YXRjaGxpc3QsIGFkZENpdHlUb1dhdGNobGlzdCB9OyIsImV4cG9ydCBjb25zdCBBUElfVE9LRU4gPSB7XG5cdEtFWTogXCJjOTNmZDE4MTdmM2ZiZTQyYWVhYzBhNjMwNzY2MDNiOVwiLFxuXHRLRVkyOiBcIjBhZDcxM2ZhYzEyMGI4M2JkOTA3MjYxZmI3NzQyZmQ3XCIsXG5cdEtFWTM6IFwiMjBmNzYzMmZmYzJjMDIyNjU0ZTQwOTNjNjk0N2I0ZjRcIixcblx0VU5TUExBU0hfQUNDRVNTX0tFWTogXCJrZEZxamJoY2lJRkliMGxEZWZJMkk0enFSYkFqUGExM1pHdTBkam51bnM0XCIsXG5cdFVOU1BMQVNIX1NFQ1JFVF9LRVk6IFwiZXBreUNYb2dIcWQ4azJ1WDdvQXJhZGwxcDQ0MkRjZi1ESThJdjdWRVR3OFwiLFxuXHRVTlNQTEFTSF9BQ0NFU1NfS0VZMjogXCJnSzUyRGUyVG1fZEw1bzFJWEthOUZST0JBSi1MSVlxUjQxeEJkbGczWDJrXCIsXG59OyIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBET00gRWxlbWVudHNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcblx0aWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG5cdHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG5cdHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcblx0T2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH07IiwiaW1wb3J0IHsgQVBJX1RPS0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQgeyBkZWdyZWUgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmxldCB1bml0LCBjb3VudHJ5QW5kQ2l0eU5hbWUsIGNvdW50cnlBbmRDaXR5TmFtZTI7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKFxuXHRjYWxsYmFjazEsXG5cdGNhbGxiYWNrMixcblx0Y2l0eU5hbWUsXG5cdGhlYWRlcklucHV0LFxuXHRjYWxsYmFjazNcbikge1xuXHRjaGVja1ByZWZlcnJlZFVuaXQuYmluZCh0aGlzKTtcblx0Y29uc3QgZXhjbHVkZSA9IGAmdW5pdHM9JHt1bml0fSZBUFBJRD0ke0FQSV9UT0tFTi5LRVl9YDtcblx0ZmV0Y2goXG5cdFx0YGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0ke2V4Y2x1ZGV9YCxcblx0XHR7XG5cdFx0XHRtb2RlOiBcImNvcnNcIixcblx0XHR9XG5cdClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGlmIChyZXNwb25zZS5jb2QgPT0gNDA0KSB7XG5cdFx0XHRcdGRpc3BsYXlFcnJvck1lc3NhZ2UuY2FsbCh0aGlzLCBcIkNpdHkgTm90IEZvdW5kXCIpO1xuXHRcdFx0XHRjbGVhclNjcmVlbkxvYWRlci5jYWxsKHRoaXMpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXNwb25zZS5jb2QgPT0gMjAwKSB7XG5cdFx0XHRcdGNvbnN0IHsgbGF0IH0gPSByZXNwb25zZS5jb29yZDtcblx0XHRcdFx0Y29uc3QgeyBsb24gfSA9IHJlc3BvbnNlLmNvb3JkO1xuXHRcdFx0XHRjYWxsYmFjazMuY2FsbCh0aGlzLCByZXNwb25zZSk7XG5cdFx0XHRcdGNhbGxiYWNrMihsYXQsIGxvbiwgY2FsbGJhY2sxLCBoZWFkZXJJbnB1dCk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuY2F0Y2goKCkgPT4ge1xuXHRcdFx0Y2xlYXJTY3JlZW5Mb2FkZXIuY2FsbCh0aGlzKTtcblx0XHRcdGRpc3BsYXlFcnJvck1lc3NhZ2UuY2FsbCh0aGlzLCBcIlNsb3cgTmV0d29yayBSZXNwb25zZSwgUmVsb2FkIFBhZ2UuXCIpO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1ByZWZlcnJlZFVuaXQoKSB7XG5cdGlmIChkZWdyZWUgPT0gXCJDXCIpIHVuaXQgPSBcIm1ldHJpY1wiO1xuXHRlbHNlIHVuaXQgPSBcImltcGVyaWFsXCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFcnJvck1lc3NhZ2UoZXJyb3JQbGFjZWhvbGRlcikge1xuXHRjb25zdCB3YXRjaGxpc3RJbnB1dCA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmxhc3RDaGlsZC5jaGlsZHJlblsxXSxcblx0XHRoZWFkZXJJbnB1dCA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF07XG5cdGlmICh0aGlzID09PSBkb2N1bWVudC5ib2R5KVxuXHRcdHdhdGNobGlzdElucHV0LmNsYXNzTGlzdC5hZGQoXCJub3QtZm91bmRcIiksXG5cdFx0XHRzZXRQbGFjZWhvbGRlci5jYWxsKHRoaXMsIHdhdGNobGlzdElucHV0LCBcIkFkZCBDaXR5XCIsIGVycm9yUGxhY2Vob2xkZXIpO1xuXHRlbHNlXG5cdFx0aGVhZGVySW5wdXQuY2xhc3NMaXN0LmFkZChcIm5vdC1mb3VuZFwiKSxcblx0XHRcdHNldFBsYWNlaG9sZGVyLmNhbGwoXG5cdFx0XHRcdHRoaXMsXG5cdFx0XHRcdGhlYWRlcklucHV0LFxuXHRcdFx0XHRcIkVudGVyIENpdHkgTmFtZVwiLFxuXHRcdFx0XHRlcnJvclBsYWNlaG9sZGVyXG5cdFx0XHQpO1xufVxuXG5mdW5jdGlvbiBzZXRQbGFjZWhvbGRlcihpbnB1dCwgcGxhY2Vob2xkZXIsIGVycm9yUGxhY2Vob2xkZXIpIHtcblx0aW5wdXQudmFsdWUgPSBcIlwiO1xuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBlcnJvclBsYWNlaG9sZGVyKTtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0aW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1mb3VuZFwiKTtcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XG5cdH0sIDQwMDApO1xufVxuXG5mdW5jdGlvbiBnZXRMb25BbmRMYXQobGF0LCBsb24sIGNhbGxiYWNrLCBoZWFkZXJJbnB1dCkge1xuXHRuZXh0N0RheXNGb3JlY2FzdChsYXQsIGxvbiwgY2FsbGJhY2ssIGhlYWRlcklucHV0KTtcbn1cblxuZnVuY3Rpb24gbmV4dDdEYXlzRm9yZWNhc3QobGF0LCBsb24sIGNhbGxiYWNrLCBoZWFkZXJJbnB1dCkge1xuXHRjaGVja1ByZWZlcnJlZFVuaXQoKTtcblx0Y29uc3QgZXhjbHVkZTIgPSBgJmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZ1bml0cz0ke3VuaXR9JmFwcGlkPSR7QVBJX1RPS0VOLktFWX1gO1xuXHRmZXRjaChcblx0XHRgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JHtleGNsdWRlMn1gXG5cdClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQudGhlbigocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlLCBoZWFkZXJJbnB1dCkpO1xufVxuXG5mdW5jdGlvbiBnZXRDb3VudHJ5TmFtZShyZXNwb25zZSkge1xuXHRjb25zdCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbXCJlblwiXSwgeyB0eXBlOiBcInJlZ2lvblwiIH0pO1xuXHRjb25zdCBjb3VudHJ5TmFtZSA9IHJlZ2lvbk5hbWVzLm9mKHJlc3BvbnNlLnN5cy5jb3VudHJ5KTtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KSB7XG5cdFx0aWYgKGNvdW50cnlOYW1lID09IHJlc3BvbnNlLm5hbWUpIGNvdW50cnlBbmRDaXR5TmFtZSA9IGNvdW50cnlOYW1lO1xuXHRcdGVsc2UgY291bnRyeUFuZENpdHlOYW1lID0gYCR7cmVzcG9uc2UubmFtZX0sICR7Y291bnRyeU5hbWV9LmA7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKGNvdW50cnlOYW1lID09IHJlc3BvbnNlLm5hbWUpIGNvdW50cnlBbmRDaXR5TmFtZTIgPSBjb3VudHJ5TmFtZTtcblx0XHRlbHNlIGNvdW50cnlBbmRDaXR5TmFtZTIgPSBgJHtyZXNwb25zZS5uYW1lfSwgJHtjb3VudHJ5TmFtZX0uYDtcblx0fVxufVxuXG5mdW5jdGlvbiBzY3JlZW5Mb2FkZXIoKSB7XG5cdGlmICh0aGlzID09PSBkb2N1bWVudCkge1xuXHRcdGNvbnN0IFtsb2FkZXJDb250YWluZXJdID0gY3JlYXRlU2NyZWVuTG9hZGVyKFxuXHRcdFx0XCJsb2FkZXItd2F0Y2hsaXN0XCIsXG5cdFx0XHRcImxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0XCJcblx0XHQpO1xuXHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmFwcGVuZChsb2FkZXJDb250YWluZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IFtsb2FkZXJDb250YWluZXJdID0gY3JlYXRlU2NyZWVuTG9hZGVyKFwibG9hZGVyXCIsIFwibG9hZGVyLWNvbnRhaW5lclwiKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChsb2FkZXJDb250YWluZXIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2NyZWVuTG9hZGVyKCkge1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQuYm9keSlcblx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5yZW1vdmVDaGlsZChcblx0XHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmxhc3RDaGlsZFxuXHRcdCk7XG5cdGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyLWNvbnRhaW5lclwiKSlcblx0XHRkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2NyZWVuTG9hZGVyKGxvYWRlckNsYXNzLCBsb2FkZXJEaXZDbGFzcykge1xuXHRjb25zdCBsb2FkZXJDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHtcblx0XHRjbGFzczogbG9hZGVyRGl2Q2xhc3MsXG5cdH0pO1xuXHRjb25zdCBsb2FkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IGxvYWRlckNsYXNzIH0pO1xuXHRsb2FkZXJDb250YWluZXIuYXBwZW5kKGxvYWRlcik7XG5cdHJldHVybiBbbG9hZGVyQ29udGFpbmVyXTtcbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckltYWdlKHdlYXRoZXJEZXNjKSB7XG5cdGZldGNoKFxuXHRcdGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvcz9xdWVyeT0ke3dlYXRoZXJEZXNjfSZwZXJfcGFnZT0yJmNsaWVudF9pZD0ke0FQSV9UT0tFTi5VTlNQTEFTSF9BQ0NFU1NfS0VZMn1gLFxuXHRcdHsgbW9kZTogXCJjb3JzXCIgfVxuXHQpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oXG5cdFx0XHQocmVzcG9uc2UpID0+XG5cdFx0XHRcdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUyNykscmdiYSgwLCAwLCAwLCAwLjUpKSAsdXJsKCR7cmVzcG9uc2UucmVzdWx0c1sxXS51cmxzLnJhd30pYClcblx0XHQpO1xufVxuXG5leHBvcnQge1xuXHRjb3VudHJ5QW5kQ2l0eU5hbWUsXG5cdGNvdW50cnlBbmRDaXR5TmFtZTIsXG5cdGdldFdlYXRoZXJEYXRhLFxuXHRnZXRMb25BbmRMYXQsXG5cdGdldENvdW50cnlOYW1lLFxuXHRzY3JlZW5Mb2FkZXIsXG5cdGNsZWFyU2NyZWVuTG9hZGVyLFxuXHRkaXNwbGF5RXJyb3JNZXNzYWdlLFxuXHRnZXRXZWF0aGVySW1hZ2UsXG59OyIsIi8qKlxuICogU3RvcmFnZSBGb3IgQ2l0eSBOYW1lXG4gKi9cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlOYW1lXCIpID09PSBudWxsKVxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlOYW1lXCIsIEpTT04uc3RyaW5naWZ5KFwiUG9ydCBIYXJjb3VydFwiKSk7XG5sZXQgY2l0eU5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eU5hbWVcIikpO1xuZnVuY3Rpb24gbmV3TmFtZShzZXROYW1lKSB7XG5cdGNpdHlOYW1lID0gc2V0TmFtZTtcbn1cbmZ1bmN0aW9uIHNldENpdHlOYW1lKCkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlOYW1lXCIsIEpTT04uc3RyaW5naWZ5KGNpdHlOYW1lKSk7XG59XG5cbi8qKlxuICogQXJyYXkgRm9yIE5hbWVzIE9mIENpdGllcyBPbiBXYXRjaGxpc3RcbiAqL1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIikgPT0gbnVsbClcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3YXRjaGxpc3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShbXCJKb2hhbm5lc2J1cmdcIiwgXCJCb3JpXCIsIFwiTGFzIFZlZ2FzXCJdKSk7XG5sZXQgd2F0Y2hsaXN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIikpO1xuZnVuY3Rpb24gc2V0d2F0Y2hsaXN0QXJyYXkoKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkod2F0Y2hsaXN0QXJyYXkpKTtcbn1cblxuLyoqXG4gKiBTdG9yYWdlIEZvciBVbml0IFByZWZlcnJlbmNlXG4gKi9cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlZ3JlZVwiKSA9PSBudWxsKVxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlZ3JlZVwiLCBKU09OLnN0cmluZ2lmeShcIkNcIikpO1xubGV0IGRlZ3JlZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkZWdyZWVcIikpO1xuZnVuY3Rpb24gbmV3RGVncmVlKHNldE5hbWUpIHtcblx0ZGVncmVlID0gc2V0TmFtZTtcbn1cbmZ1bmN0aW9uIHNldERlZ3JlZSgpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWdyZWVcIiwgSlNPTi5zdHJpbmdpZnkoZGVncmVlKSk7XG59XG5cbmV4cG9ydCB7XG5cdGNpdHlOYW1lLFxuXHRzZXRDaXR5TmFtZSxcblx0bmV3TmFtZSxcblx0d2F0Y2hsaXN0QXJyYXksXG5cdHNldHdhdGNobGlzdEFycmF5LFxuXHRkZWdyZWUsXG5cdHNldERlZ3JlZSxcblx0bmV3RGVncmVlLFxufTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5cbi8qKlxuICogRnVuY3Rpb24gZm9yIGNyZWF0aW5nIGZvb3RlclxuICovXG5mdW5jdGlvbiBjcmVhdGVmb290ZXIoKSB7XG5cdGNvbnN0IGZvb3RlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJmb290ZXJcIik7XG5cdGNvbnN0IGFuY2hvckxpbmsgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vSUFtWW91bmdib3NzeS93ZWF0aGVyLWFwcFwiLFxuXHR9KTtcblx0Y29uc3QgZ2l0SHViSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpXCIsIHsgY2xhc3M6IFwiZmEgZmEtZ2l0aHViXCIgfSk7XG5cdGNvbnN0IGljb25zQ3JlZGl0ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIik7XG5cdGNvbnN0IHdlYXRoZXJBUEkgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvXCIsXG5cdH0pO1xuXHRjb25zdCBpbWFnZUFQSSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJhXCIsIHtcblx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0aHJlZjogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9cIixcblx0fSk7XG5cdGNvbnN0IGljb25zOEFuY2hvciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJhXCIsIHtcblx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0aHJlZjogXCJodHRwczovL2ljb25zOC5jb20vXCIsXG5cdH0pO1xuXG5cdHdlYXRoZXJBUEkudGV4dENvbnRlbnQgPSBcIiBPcGVuV2VhdGhlck1hcCBcIjtcblx0aW1hZ2VBUEkudGV4dENvbnRlbnQgPSBcIiBVbnNwbGFzaCBcIjtcblx0aWNvbnM4QW5jaG9yLnRleHRDb250ZW50ID0gXCIgSWNvbnM4XCI7XG5cdGljb25zQ3JlZGl0LmFwcGVuZChcblx0XHRcIkljb25zIGJ5XCIsXG5cdFx0aWNvbnM4QW5jaG9yLFxuXHRcdFwiLCBXZWF0aGVyICYgSW1hZ2UgQVBJIGJ5XCIsXG5cdFx0d2VhdGhlckFQSSxcblx0XHRcIiAmXCIsXG5cdFx0aW1hZ2VBUElcblx0KTtcblx0YW5jaG9yTGluay5hcHBlbmRDaGlsZChnaXRIdWJJY29uKTtcblx0Zm9vdGVyLmFwcGVuZChcblx0XHRcIkNvcHlyaWdodCBcXHUwMEE5IDIwMjIgSUFtWW91bmdib3NzeVwiLFxuXHRcdFwiICBcIixcblx0XHRhbmNob3JMaW5rLFxuXHRcdGljb25zQ3JlZGl0XG5cdCk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlZm9vdGVyIH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG5cdGNvbnN0IGhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cdGNvbnN0IHNlYXJjaERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJzZWFyY2gtZGl2XCIgfSk7XG5cdGNvbnN0IHNlYXJjaEJhciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbnB1dFwiLCB7XG5cdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciBDaXR5IE5hbWVcIixcblx0fSk7XG5cdGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiIH0pO1xuXHRjb25zdCBoZWFkZXJUaXRsZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0aXRsZS1kaXZcIiB9KTtcblx0Y29uc3QgaGVhZGVyVGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaDFcIik7XG5cblx0c2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcblx0aGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkNpdHlXYXRjaFwiO1xuXG5cdHNlYXJjaERpdi5hcHBlbmQoc2VhcmNoQmFyLCBzZWFyY2hCdXR0b24pO1xuXHRoZWFkZXJUaXRsZURpdi5hcHBlbmQoaGVhZGVyVGl0bGUpO1xuXHRoZWFkZXIuYXBwZW5kKGhlYWRlclRpdGxlRGl2LCBzZWFyY2hEaXYpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIgfTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQgRGF0ZSBmcm9tIFwiLi9pY29ucy9kYXRlLnBuZ1wiO1xuaW1wb3J0IEh1bWlkaXR5IGZyb20gXCIuL2ljb25zL2h1bWlkaXR5LnBuZ1wiO1xuaW1wb3J0IFByZXNzdXJlIGZyb20gXCIuL2ljb25zL3ByZXNzdXJlLnBuZ1wiO1xuaW1wb3J0IFRpbWV6b25lIGZyb20gXCIuL2ljb25zL3RpbWV6b25lLnBuZ1wiO1xuaW1wb3J0IFdpbmQgZnJvbSBcIi4vaWNvbnMvd2luZC5wbmdcIjtcbmltcG9ydCBTZWFMZXZlbCBmcm9tIFwiLi9pY29ucy9zZWFsZXZlbC5wbmdcIjtcbmltcG9ydCBEZWdyZWVJY29uIGZyb20gXCIuL2ljb25zL2RlZ3JlZS5wbmdcIjtcbmltcG9ydCB7IGRlZ3JlZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IGFkZExpc3RlbmVyRm9yRXZlbnRUbywgbGlzdGVuVG9FdmVudEZyb20gfSBmcm9tIFwiLi9hcHAtY2xpY2stZXZlbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50cygpIHtcblx0Y29uc3QgbWFpbkRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJtYWluXCIsIHsgY2xhc3M6IFwibWFpblwiIH0pO1xuXHRjcmVhdGVUb2RheUZvcmVjYXN0Q29udGFpbmVyKG1haW5EaXYpO1xuXHRjcmVhdGVOZXh0ZGF5c0NvbnRhaW5lckRpdihtYWluRGl2KTtcblx0Z2V0V2F0Y2hsaXN0KG1haW5EaXYpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kYXlGb3JlY2FzdENvbnRhaW5lcihtYWluRGl2KSB7XG5cdGNvbnN0IHRvZGF5RGF0YURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2RheS1kYXRhLWRpdlwiIH0pO1xuXHRtYWluRGl2LmFwcGVuZCh0b2RheURhdGFEaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0ZGF5c0NvbnRhaW5lckRpdihtYWluRGl2KSB7XG5cdGNvbnN0IG5leHQ3RGF5c0RpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJuZXh0LTdkYXlzLWRpdlwiIH0pO1xuXHRtYWluRGl2LmFwcGVuZChuZXh0N0RheXNEaXYpO1xufVxuXG5mdW5jdGlvbiBnZXRXYXRjaGxpc3QobWFpbkRpdikge1xuXHRjb25zdCB3YXRjaGxpc3REaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2F0Y2hsaXN0LWRpdlwiIH0pO1xuXHRtYWluRGl2LmFwcGVuZCh3YXRjaGxpc3REaXYpO1xufVxuXG5mdW5jdGlvbiBtaW5vckRhdGFSZXBvcnQoKSB7XG5cdGNvbnN0IG1pbm9yRGF0YURpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbM10sXG5cdFx0d2luZERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ3aW5kLWRpdlwiIH0pLFxuXHRcdHdpbmQgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIndpbmRcIiB9KSxcblx0XHRkZXdQb2ludERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXctcG9pbnQtZGl2XCIgfSksXG5cdFx0ZGV3UG9pbnQgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImRldy1wb2ludFwiIH0pLFxuXHRcdHRpbWVab25lRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRpbWUtem9uZS1kaXZcIiB9KSxcblx0XHR0aW1lWm9uZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidGltZS16b25lXCIgfSksXG5cdFx0dXZJbmRleERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ1di1pbmRleC1kaXZcIiB9KSxcblx0XHR1dkluZGV4ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ1di1pbmRleFwiIH0pLFxuXHRcdHByZXNzdXJlRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInByZXNzdXJlLWRpdlwiIH0pLFxuXHRcdHByZXNzdXJlID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJwcmVzc3VyZVwiIH0pLFxuXHRcdGh1bWlkaXR5RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImh1bWlkaXR5LWRpdlwiIH0pLFxuXHRcdGh1bWlkaXR5ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJodW1pZGl0eVwiIH0pLFxuXHRcdE15RGF0ZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IERhdGUgfSksXG5cdFx0TXlIdW1pZGl0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IEh1bWlkaXR5IH0pLFxuXHRcdE15UHJlc3N1cmUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBQcmVzc3VyZSB9KSxcblx0XHRNeVRpbWV6b25lID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogVGltZXpvbmUgfSksXG5cdFx0TXlTZWFMZXZlbCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFNlYUxldmVsIH0pLFxuXHRcdE15V2luZCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFdpbmQgfSk7XG5cblx0d2luZERpdi5hcHBlbmQoTXlXaW5kLCB3aW5kKTtcblx0ZGV3UG9pbnREaXYuYXBwZW5kKE15U2VhTGV2ZWwsIGRld1BvaW50KTtcblx0dGltZVpvbmVEaXYuYXBwZW5kKE15VGltZXpvbmUsIHRpbWVab25lKTtcblx0dXZJbmRleERpdi5hcHBlbmQoTXlEYXRlLCB1dkluZGV4KTtcblx0cHJlc3N1cmVEaXYuYXBwZW5kKE15UHJlc3N1cmUsIHByZXNzdXJlKTtcblx0aHVtaWRpdHlEaXYuYXBwZW5kKE15SHVtaWRpdHksIGh1bWlkaXR5KTtcblx0bWlub3JEYXRhRGl2LmFwcGVuZChcblx0XHR3aW5kRGl2LFxuXHRcdGRld1BvaW50RGl2LFxuXHRcdHRpbWVab25lRGl2LFxuXHRcdHV2SW5kZXhEaXYsXG5cdFx0cHJlc3N1cmVEaXYsXG5cdFx0aHVtaWRpdHlEaXZcblx0KTtcblx0cmV0dXJuIFt3aW5kLCBkZXdQb2ludCwgdGltZVpvbmUsIHV2SW5kZXgsIHByZXNzdXJlLCBodW1pZGl0eV07XG59XG5cbmZ1bmN0aW9uIHN1cGVyU2NyaXB0KCkge1xuXHRjb25zdCBzdXBTY3JpcHQgPSBjcmVhdGVEb21FbGVtZW50KFwic3VwXCIsIHsgY2xhc3M6IFwic3VwZXItc2NyaXB0XCIgfSksXG5cdFx0c3VwU2NyaXB0MiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzdXBcIiwgeyBjbGFzczogXCJzdXBlci1zY3JpcHRcIiB9KSxcblx0XHRkZWdyZWVTcGFuID0gY3JlYXRlRG9tRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJzdXBlci1zcGFuXCIgfSk7XG5cdGRlZ3JlZVNwYW4udGV4dENvbnRlbnQgPSBkZWdyZWU7XG5cdHN1cFNjcmlwdC50ZXh0Q29udGVudCA9IFwib1wiO1xuXHRzdXBTY3JpcHQyLmFwcGVuZChzdXBTY3JpcHQsIGRlZ3JlZVNwYW4pO1xuXHRhZGRMaXN0ZW5lckZvckV2ZW50VG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWdyZWVcIiksIGRlZ3JlZVNwYW4pO1xuXHRhZGRMaXN0ZW5lckZvckV2ZW50VG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0XCIpLCBkZWdyZWVTcGFuKTtcblx0cmV0dXJuIHN1cFNjcmlwdDI7XG59XG5cbmZ1bmN0aW9uIGRhdGFEaXNwbGF5KCkge1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgd2VhdGhlckRlc2MgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIndlYXRoZXItZGVzY1wiIH0pLFxuXHRcdG5hbWVPZkNpdHkgPSBjcmVhdGVEb21FbGVtZW50KFwiaDJcIiwgeyBjbGFzczogXCJuYW1lLW9mLWNpdHlcIiB9KSxcblx0XHRkZXNjSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJkZXNjLWljb25cIiB9KSxcblx0XHR0ZW1wRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRlbXAtZGl2XCIgfSksXG5cdFx0dGVtcFJhbmdlID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRlbXAtcmFuZ2VcIiB9KSxcblx0XHRoaWdoVGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiaGlnaC10ZW1wXCIgfSksXG5cdFx0bG93VGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwibG93LXRlbXBcIiB9KSxcblx0XHRmZWVsc0xpa2VUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJmZWVscy1saWtlLXRlbXBcIiB9KSxcblx0XHR0ZW1wZXJhdHVyZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZW1wZXJhdHVyZS1kaXZcIiB9KSxcblx0XHR0ZW1wZXJhdHVyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidGVtcGVyYXR1cmVcIiB9KSxcblx0XHRtaW5vckRhdGFEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWlub3ItZGF0YS1kaXZcIiB9KTtcblxuXHR0ZW1wUmFuZ2UuYXBwZW5kKGxvd1RlbXAsIGhpZ2hUZW1wKTtcblx0dGVtcGVyYXR1cmVEaXYuYXBwZW5kKHRlbXBlcmF0dXJlLCBkZXNjSWNvbik7XG5cdHRlbXBEaXYuYXBwZW5kKHRlbXBSYW5nZSwgdGVtcGVyYXR1cmVEaXYsIGZlZWxzTGlrZVRlbXApO1xuXHR0b2RheURhdGFEaXYuYXBwZW5kKHdlYXRoZXJEZXNjLCBuYW1lT2ZDaXR5LCB0ZW1wRGl2LCBtaW5vckRhdGFEaXYpO1xuXHRyZXR1cm4gW1xuXHRcdHdlYXRoZXJEZXNjLFxuXHRcdGRlc2NJY29uLFxuXHRcdG5hbWVPZkNpdHksXG5cdFx0dGVtcGVyYXR1cmUsXG5cdFx0bG93VGVtcCxcblx0XHRoaWdoVGVtcCxcblx0XHRmZWVsc0xpa2VUZW1wLFxuXHRdO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0QmV0d2VlblVuaXRzKCkge1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzBdLFxuXHRcdHVuaXQgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcInVuaXRcIiB9KSxcblx0XHR1bml0RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInVuaXQtZGl2XCIgfSksXG5cdFx0TXlEZWdyZWVJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7XG5cdFx0XHRjbGFzczogXCJkZWdyZWVcIixcblx0XHRcdHNyYzogRGVncmVlSWNvbixcblx0XHR9KTtcblxuXHRkZWdyZWUgPT0gXCJDXCIgPyAodW5pdC50ZXh0Q29udGVudCA9IFwiRlwiKSA6ICh1bml0LnRleHRDb250ZW50ID0gXCJDXCIpO1xuXHR1bml0RGl2LmFwcGVuZChNeURlZ3JlZUljb24sIHVuaXQpO1xuXHR0b2RheURhdGFEaXYuYXBwZW5kKHVuaXREaXYpO1xuXHRsaXN0ZW5Ub0V2ZW50RnJvbSh1bml0LCB1bml0KSwgbGlzdGVuVG9FdmVudEZyb20oTXlEZWdyZWVJY29uLCB1bml0KTtcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlTWFpbkNvbnRlbnRzLFxuXHRtaW5vckRhdGFSZXBvcnQsXG5cdHN1cGVyU2NyaXB0LFxuXHRkYXRhRGlzcGxheSxcblx0Y29udmVydEJldHdlZW5Vbml0cyxcbn07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xlYXJTY3JlZW5Mb2FkZXIgfSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgeyBzdXBlclNjcmlwdCB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JlY2FzdENhcmQoZGFpbHkpIHtcblx0Y29uc3QgbmV4dDdEYXlzRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0sXG5cdFx0Y2FyZCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjYXJkXCIgfSksXG5cdFx0ZGF5QW5kRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0aWNvbkRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpY29uLWRpdlwiIH0pLFxuXHRcdHRlbXBEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIpLFxuXHRcdGRheSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdHdlYXRoZXJEZXNjID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0d2VhdGhlckRlc2NJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiKSxcblx0XHRsb3dUZW1wU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY29udmVydFwiIH0pLFxuXHRcdGxvd1RlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHRoaWdoVGVtcFNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHRoaWdoVGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpO1xuXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYWlseS5kdCAqIDEwMDApO1xuXHRjb25zdCB3ZWVrZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG5cblx0bG93VGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChkYWlseS50ZW1wLm1pbil9YDtcblx0aGlnaFRlbXBTcGFuLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQoZGFpbHkudGVtcC5tYXgpfWA7XG5cdGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXl9YDtcblx0d2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBgJHtkYWlseS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG5cdHdlYXRoZXJEZXNjSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtkYWlseS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG5cdGhpZ2hUZW1wLmFwcGVuZChoaWdoVGVtcFNwYW4sIHN1cGVyU2NyaXB0KCkpO1xuXHRsb3dUZW1wLmFwcGVuZChsb3dUZW1wU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdGRheUFuZERlc2MuYXBwZW5kKGRheSwgd2VhdGhlckRlc2MpO1xuXHR0ZW1wRGl2LmFwcGVuZChoaWdoVGVtcCwgbG93VGVtcCk7XG5cdGljb25EaXYuYXBwZW5kKHdlYXRoZXJEZXNjSWNvbiwgdGVtcERpdik7XG5cdGNhcmQuYXBwZW5kKGRheUFuZERlc2MsIGljb25EaXYpO1xuXHRuZXh0N0RheXNEaXYuYXBwZW5kKGNhcmQpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5N0RheXNGb3JlY2FzdChyZXNwb25zZSkge1xuXHRmb3IgKGxldCBpID0gMTsgaSA8IHJlc3BvbnNlLmRhaWx5Lmxlbmd0aDsgaSsrKVxuXHRcdGNyZWF0ZUZvcmVjYXN0Q2FyZChyZXNwb25zZS5kYWlseVtpXSk7XG5cdGNsZWFyU2NyZWVuTG9hZGVyKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvcmVjYXN0Q2FyZCwgZGlzcGxheTdEYXlzRm9yZWNhc3QgfTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQge1xuXHRjb3VudHJ5QW5kQ2l0eU5hbWUsXG5cdGNvdW50cnlBbmRDaXR5TmFtZTIsXG5cdGdldFdlYXRoZXJJbWFnZSxcbn0gZnJvbSBcIi4vZmV0Y2gtZGF0YVwiO1xuaW1wb3J0IHsgbmV3TmFtZSwgc2V0Q2l0eU5hbWUgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBkYXRhRGlzcGxheSwgbWlub3JEYXRhUmVwb3J0LCBzdXBlclNjcmlwdCB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuaW1wb3J0IHsgZGlzcGxheTdEYXlzRm9yZWNhc3QgfSBmcm9tIFwiLi9zZXZlbi1kYXlzLWZvcmVjYXN0XCI7XG5cbmZ1bmN0aW9uIGdldERhdGEocmVzcG9uc2UsIGhlYWRlcklucHV0KSB7XG5cdGxldCB3ZWF0aGVyRGVzYyA9IHJlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblx0Y29uc3QgdG9kYXlEYXRhRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0sXG5cdFx0bmV4dDdEYXlzRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV07XG5cdGNsZWFyRGF0YSh0b2RheURhdGFEaXYpLFxuXHRcdGNsZWFyRGF0YShuZXh0N0RheXNEaXYpLFxuXHRcdGRpc3BsYXlUb2RheUZvZWNhc3QuY2FsbCh0aGlzLCByZXNwb25zZSksXG5cdFx0ZGlzcGxheTdEYXlzRm9yZWNhc3QocmVzcG9uc2UpO1xuXHRcdFxuXHRpZiAoaGVhZGVySW5wdXQudmFsdWUpXG5cdFx0bmV3TmFtZShoZWFkZXJJbnB1dC52YWx1ZSksIHNldENpdHlOYW1lKCksIChoZWFkZXJJbnB1dC52YWx1ZSA9IFwiXCIpO1xuXHRnZXRXZWF0aGVySW1hZ2Uod2VhdGhlckRlc2MpO1xufVxuXG5mdW5jdGlvbiBjbGVhckRhdGEoZGl2KSB7XG5cdHdoaWxlIChkaXYuZmlyc3RDaGlsZCkgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5Rm9lY2FzdChyZXNwb25zZSkge1xuXHRjb25zdCBsb3dUZW1wU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY29udmVydFwiIH0pLFxuXHRcdGhpZ2hUZW1wU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY29udmVydFwiIH0pLFxuXHRcdGZlZWxzTGlrZVNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHR0ZW1wZXJhdHVyZVNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KTtcblxuXHQvLyBEZXN0cnVjdHVyaW5nIHZhbHVlcyBmcm9tIHJldHVybmVkIGFycmF5cyBmcm9tIGZ1bmN0aW9uc1xuXHRjb25zdCBbXG5cdFx0d2VhdGhlckRlc2MsXG5cdFx0ZGVzY0ljb24sXG5cdFx0bmFtZU9mQ2l0eSxcblx0XHR0ZW1wZXJhdHVyZSxcblx0XHRsb3dUZW1wLFxuXHRcdGhpZ2hUZW1wLFxuXHRcdGZlZWxzTGlrZVRlbXAsXG5cdF0gPSBkYXRhRGlzcGxheSgpO1xuXG5cdGNvbnN0IFt3aW5kLCBkZXdQb2ludCwgdGltZVpvbmUsIHV2SW5kZXgsIHByZXNzdXJlLCBodW1pZGl0eV0gPVxuXHRcdG1pbm9yRGF0YVJlcG9ydCgpO1xuXG5cdGlmICh0aGlzID09PSBkb2N1bWVudCkgbmFtZU9mQ2l0eS50ZXh0Q29udGVudCA9IGNvdW50cnlBbmRDaXR5TmFtZTtcblx0ZWxzZSBuYW1lT2ZDaXR5LnRleHRDb250ZW50ID0gY291bnRyeUFuZENpdHlOYW1lMjtcblx0d2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcblx0bG93VGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChyZXNwb25zZS5kYWlseVswXS50ZW1wLm1pbil9YDtcblx0ZmVlbHNMaWtlU3Bhbi50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHJlc3BvbnNlLmN1cnJlbnQuZmVlbHNfbGlrZSl9YDtcblx0aGlnaFRlbXBTcGFuLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQocmVzcG9uc2UuZGFpbHlbMF0udGVtcC5tYXgpfWA7XG5cdHRlbXBlcmF0dXJlU3Bhbi50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHJlc3BvbnNlLmN1cnJlbnQudGVtcCl9YDtcblxuXHRsb3dUZW1wLmFwcGVuZChcIkxvdzogXCIsIGxvd1RlbXBTcGFuLCBzdXBlclNjcmlwdCgpKTtcblx0aGlnaFRlbXAuYXBwZW5kKFwiSGlnaDogXCIsIGhpZ2hUZW1wU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdHRlbXBlcmF0dXJlLmFwcGVuZCh0ZW1wZXJhdHVyZVNwYW4sIHN1cGVyU2NyaXB0KCkpO1xuXHRmZWVsc0xpa2VUZW1wLmFwcGVuZChcIkZlZWxzIExpa2UgXCIsIGZlZWxzTGlrZVNwYW4sIHN1cGVyU2NyaXB0KCkpO1xuXHR3aW5kLmFwcGVuZChgV2luZCBTcGVlZDogJHtyZXNwb25zZS5jdXJyZW50LndpbmRfc3BlZWR9YCk7XG5cdGRld1BvaW50LmFwcGVuZChgRGV3IFBvaW50OiAke3Jlc3BvbnNlLmN1cnJlbnQuZGV3X3BvaW50fWApO1xuXHR0aW1lWm9uZS5hcHBlbmQoYHRpbWUgWm9uZTogJHtyZXNwb25zZS50aW1lem9uZX1gKTtcblx0dXZJbmRleC5hcHBlbmQoYFVWIEluZGV4OiAke3Jlc3BvbnNlLmN1cnJlbnQudXZpfWApO1xuXHRwcmVzc3VyZS5hcHBlbmQoYFByZXNzdXJlOiAke3Jlc3BvbnNlLmN1cnJlbnQucHJlc3N1cmV9YCk7XG5cdGh1bWlkaXR5LmFwcGVuZChgSHVtaWRpdHk6ICR7cmVzcG9uc2UuY3VycmVudC5odW1pZGl0eX1gKTtcblx0ZGVzY0ljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7cmVzcG9uc2UuY3VycmVudC53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG59XG5cbmV4cG9ydCB7IGdldERhdGEgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL3BhZ2UtaGVhZGVyXCI7XG5pbXBvcnQge1xuXHRnZXRDb3VudHJ5TmFtZSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRnZXRXZWF0aGVyRGF0YSxcblx0c2NyZWVuTG9hZGVyLFxufSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgeyBjcmVhdGVmb290ZXIgfSBmcm9tIFwiLi9wYWdlLWZvb3RlclwiO1xuaW1wb3J0IHsgY29udmVydEJldHdlZW5Vbml0cywgY3JlYXRlTWFpbkNvbnRlbnRzIH0gZnJvbSBcIi4vcGFnZS1tYWluXCI7XG5pbXBvcnQgeyB3YXRjaGxpc3QgfSBmcm9tIFwiLi9jaXR5LXdhdGNobGlzdFwiO1xuaW1wb3J0IHsgY2l0eU5hbWUgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQge1xuXHRhZGRMaXN0ZW5lclRvQnV0dG9uLFxuXHRkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0LFxufSBmcm9tIFwiLi9hcHAtY2xpY2stZXZlbnRzXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vdG9kYXktZm9yZWNhc3RcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jcmVhdGVNYWluQ29udGVudHMoKTtcbmNvbnZlcnRCZXR3ZWVuVW5pdHMoKTtcbmNyZWF0ZWZvb3RlcigpO1xud2F0Y2hsaXN0KCk7XG5zY3JlZW5Mb2FkZXIoKTtcbmFkZExpc3RlbmVyVG9CdXR0b24oKTtcblxuZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCgpO1xuZ2V0V2VhdGhlckRhdGEuY2FsbChcblx0ZG9jdW1lbnQsXG5cdGdldERhdGEuYmluZChkb2N1bWVudCksXG5cdGdldExvbkFuZExhdCxcblx0Y2l0eU5hbWUsXG5cdGZhbHNlLFxuXHRnZXRDb3VudHJ5TmFtZVxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=