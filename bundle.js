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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nhtml {\n\tbackground-color: #100f0f;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000d6;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\n.not-found::placeholder {\n\tcolor: red;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\nbutton:hover {\n\tbackground-color: #532525;\n\ttransform: scale(1.01);\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tcolor: gray;\n}\n\n.unit-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.degree {\n\ttransition: all .2s ease-in-out;\n\tcursor: pointer;\n}\n\n.unit {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\n.unit:hover, .degree:hover {\n\tcolor: #9e9e9e;\n  transform: scale(1.4);\n}\n\n.degree:hover {\n\tcolor: #9e9e9e;\n  transform: scale(1.1);\n}\n\nh1 {\n\tfont-size: 2.5rem;\n\tfont-family: monospace;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #010000;\n\tgap: 10px;\n}\n\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tbackground-color: #08040917;\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid #fc9898;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\n.city:hover {\n\tbackground-color: #262829;\n\ttransform: scale(1.02);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(0 0 0 / 80%);\n\tborder: 1px solid #fc9898;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #0b030ab0;\n\tpadding: 2px 10px;\n\tborder: 1px solid #fc9898;\n\tflex: 1;\n\tbox-sizing: border-box;\n\ttransition: all .2s ease-in-out;\n}\n\n.card:hover {\n\ttransform: scale(1.02);\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #fc9898;\n\tbackground-color: #000000d6;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: #b3ee79;\n}\n\n.fa {\n\tcolor: white;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nhtml {\n\tbackground-color: #100f0f;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000d6;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\n.not-found::placeholder {\n\tcolor: red;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\nbutton:hover {\n\tbackground-color: #532525;\n\ttransform: scale(1.01);\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tcolor: gray;\n}\n\n.unit-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.degree {\n\ttransition: all .2s ease-in-out;\n\tcursor: pointer;\n}\n\n.unit {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\n.unit:hover, .degree:hover {\n\tcolor: #9e9e9e;\n  transform: scale(1.4);\n}\n\n.degree:hover {\n\tcolor: #9e9e9e;\n  transform: scale(1.1);\n}\n\nh1 {\n\tfont-size: 2.5rem;\n\tfont-family: monospace;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #010000;\n\tgap: 10px;\n}\n\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tbackground-color: #08040917;\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid #fc9898;\n\tcursor: pointer;\n\ttransition: all .2s ease-in-out;\n}\n\n.city:hover {\n\tbackground-color: #262829;\n\ttransform: scale(1.02);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(0 0 0 / 80%);\n\tborder: 1px solid #fc9898;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #0b030ab0;\n\tpadding: 2px 10px;\n\tborder: 1px solid #fc9898;\n\tflex: 1;\n\tbox-sizing: border-box;\n\ttransition: all .2s ease-in-out;\n}\n\n.card:hover {\n\ttransform: scale(1.02);\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #fc9898;\n\tbackground-color: #000000d6;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: #b3ee79;\n}\n\n.fa {\n\tcolor: white;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxV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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3QjtBQU92QjtBQUN1QjtBQUN5QjtBQUs1QztBQUNpQjs7QUFFM0MsMERBQVk7QUFDWiw4REFBa0I7QUFDbEIsK0RBQW1CO0FBQ25CLDBEQUFZO0FBQ1osMERBQVM7QUFDVCx5REFBWTtBQUNaLG9FQUFtQjtBQUNuQiwwRUFBeUI7QUFDekIsNERBQW1CO0FBQ25CO0FBQ0EsQ0FBQyxxREFBWTtBQUNiLENBQUMscURBQVk7QUFDYixDQUFDLG9EQUFRO0FBQ1Q7QUFDQSxDQUFDLHVEQUFjO0FBQ2YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NpdHktd2F0Y2hsaXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jcmVhdGUtZG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXZlbi1kYXlzLWZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRnYXA6IDVweDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0cGFkZGluZzogMjBweCA1MHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDY7XFxufVxcblxcbi5zZWFyY2gtZGl2PmlucHV0IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0aGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6ICNlZGFlYWU7XFxufVxcblxcbi5ub3QtZm91bmQ6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogcmVkO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xcblxcdGNvbG9yOiBzbm93O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1MzI1MjU7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcblxcdGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udW5pdC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlZ3JlZSB7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51bml0IHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnVuaXQ6aG92ZXIsIC5kZWdyZWU6aG92ZXIge1xcblxcdGNvbG9yOiAjOWU5ZTllO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbn1cXG5cXG4uZGVncmVlOmhvdmVyIHtcXG5cXHRjb2xvcjogIzllOWU5ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5zZWFyY2gtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnRpdGxlLWRpdiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nICovXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjsgKi9cXG59XFxuXFxuLnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogNXB4IDVweCAwcHggMjBweDtcXG5cXHRmbGV4OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwcHggMjBweCBibGFjaztcXG59XFxuXFxuLnRvZGF5LWRhdGEtZGl2PmRpdjpmaXJzdC1vZi10eXBlLFxcbi50b2RheS1kYXRhLWRpdj5oMjpmaXJzdC1vZi10eXBlLFxcbi50ZW1wLWRpdj4qIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi53ZWF0aGVyLWRlc2Mge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5leHQtN2RheXMtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGdyaWQtYXJlYTogMi8xLzMvMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMjBweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMTAwMDA7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4ud2F0Y2hsaXN0LWRpdiB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiAxNXB4IDIwcHggNXB4IDEwcHg7XFxuXFx0Z3JpZC1hcmVhOiAxLzIvMy8zO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ud2F0Y2hsaXN0LWRpdj5oMiB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxudWwge1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmxpIHtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxuXFx0cGFkZGluZzogMjBweCAxMHB4O1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzA4MDQwOTE3O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcblxcbi5hZGQtYnV0dG9uPmlucHV0IHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWluLXdpZHRoOiA5NXB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dDpmb2N1cy12aXNpYmxlIHtcXG5cXHRmbGV4OiAxO1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jaXR5IHtcXG5cXHRwYWRkaW5nOiA3cHggMzBweCA3cHggN3B4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGNvbG9yOiAjZmZlYmNlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jaXR5OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyODI5O1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcbi5jaXR5PmRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5PmRpdjpmaXJzdC1vZi10eXBlPmltZyB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5kZWxldGUge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMTBweDtcXG5cXHR0b3A6IDVweDtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93LWRlbGV0ZSB7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRlbXAtcmFuZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlPi5zdXBlci1zY3JpcHQge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRlc2MtaWNvbiB7XFxuXFx0d2lkdGg6IDc1cHg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdj4qIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGNvbG9yOiAjMWEwMDJhO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDgwJSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2Pio+aW1nIHtcXG5cXHR3aWR0aDogMjVweDtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0Y29sb3I6ICNlYmNhY2E7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzBiMDMwYWIwO1xcblxcdHBhZGRpbmc6IDJweCAxMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0ZmxleDogMTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG5cXG4uY2FyZD5kaXY+cDpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxufVxcblxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mZWVscy1saWtlLXRlbXAge1xcblxcdG1hcmdpbi10b3A6IC0xNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuZm9vdGVyIHtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmM5ODk4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkNjtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiAjYjNlZTc5O1xcbn1cXG5cXG4uZmEge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXIsXFxuLmxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpOyAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3Qge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLmxvYWRlcixcXG4ubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0Ym9yZGVyOiAxMHB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlci10b3A6IDEwcHggc29saWQgIzFkNGQ0ZjtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcblxcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMzUlO1xcblxcdGxlZnQ6IDQ1JTtcXG59XFxuXFxuLmxvYWRlci13YXRjaGxpc3Qge1xcblxcdGJvcmRlcjogNXB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHRvcDogNDAlO1xcblxcdGxlZnQ6IDQwJTtcXG59XFxuXFxuLyogU2FmYXJpICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIFVzZXMgZmxleC1kaXJlY3Rpb24gY29sdW1uIGZvciBzY3JlZW4gc2l6ZXMgYmVsb3cgNjAwcHggKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQudG9kYXktZGF0YS1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0Lm5leHQtN2RheXMtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQud2F0Y2hsaXN0LWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlci13YXRjaGxpc3Qge1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDQzJTtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlciB7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0XFx0bGVmdDogNDAlO1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQixrQkFBa0I7QUFDbkI7O0FBRUEsbUJBQW1CO0FBQ25CO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixRQUFRO0NBQ1IsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQywyQkFBMkI7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UUFBUTtDQUNSLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qiw2QkFBNkI7Q0FDN0IsV0FBVztDQUNYLFlBQVk7Q0FDWixRQUFRO0NBQ1IsU0FBUztBQUNWOztBQUVBLFdBQVc7QUFDWDtDQUNDO0VBQ0MsK0JBQStCO0NBQ2hDOztDQUVBO0VBQ0MsaUNBQWlDO0NBQ2xDO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHVCQUF1QjtDQUN4Qjs7Q0FFQTtFQUNDLHlCQUF5QjtDQUMxQjtBQUNEOztBQUVBLDREQUE0RDtBQUM1RDtDQUNDO0VBQ0MsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQywyQkFBMkI7Q0FDNUI7O0NBRUE7RUFDQyw0QkFBNEI7Q0FDN0I7O0NBRUE7RUFDQyw0QkFBNEI7Q0FDN0I7O0NBRUE7RUFDQyxRQUFRO0VBQ1IsU0FBUztDQUNWOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFNBQVM7Q0FDVjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGdhcDogNXB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiAyMHB4IDUwcHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmM5ODk4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkNjtcXG59XFxuXFxuLnNlYXJjaC1kaXY+aW5wdXQge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjb2xvcjogI2VkYWVhZTtcXG59XFxuXFxuLm5vdC1mb3VuZDo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiByZWQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxuXFx0aGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XFxuXFx0Y29sb3I6IHNub3c7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUzMjUyNTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuXFx0Y29sb3I6IGdyYXk7XFxufVxcblxcbi51bml0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVncmVlIHtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVuaXQge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udW5pdDpob3ZlciwgLmRlZ3JlZTpob3ZlciB7XFxuXFx0Y29sb3I6ICM5ZTllOWU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxufVxcblxcbi5kZWdyZWU6aG92ZXIge1xcblxcdGNvbG9yOiAjOWU5ZTllO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcblxcdGZsZXg6IDI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4udGl0bGUtZGl2IHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4vKiBNYWluIFN0eWxpbmcgKi9cXG5tYWluIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0LyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyOyAqL1xcbn1cXG5cXG4udG9kYXktZGF0YS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiA1cHggNXB4IDBweCAyMHB4O1xcblxcdGZsZXg6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjBweCAyMHB4IGJsYWNrO1xcbn1cXG5cXG4udG9kYXktZGF0YS1kaXY+ZGl2OmZpcnN0LW9mLXR5cGUsXFxuLnRvZGF5LWRhdGEtZGl2PmgyOmZpcnN0LW9mLXR5cGUsXFxuLnRlbXAtZGl2Pioge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndlYXRoZXItZGVzYyB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV4dC03ZGF5cy1kaXYge1xcblxcdGZsZXg6IDI7XFxuXFx0Z3JpZC1hcmVhOiAyLzEvMy8yO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogMTBweCA1cHggMTBweCAyMHB4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAxMDAwMDtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi53YXRjaGxpc3QtZGl2IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDE1cHggMjBweCA1cHggMTBweDtcXG5cXHRncmlkLWFyZWE6IDEvMi8zLzM7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi53YXRjaGxpc3QtZGl2PmgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG51bCB7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxubGkge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXHRwYWRkaW5nOiAyMHB4IDEwcHg7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwNDA5MTc7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1yaWdodDogMzBweDtcXG5cXHRnYXA6IDVweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDIzMyAxODQgMTg0IC8gNTAlKTtcXG59XFxuXFxuLmFkZC1idXR0b24+aW5wdXQge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtaW4td2lkdGg6IDk1cHg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxufVxcblxcbi5hZGQtYnV0dG9uPmlucHV0OmZvY3VzLXZpc2libGUge1xcblxcdGZsZXg6IDE7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNpdHkge1xcblxcdHBhZGRpbmc6IDdweCAzMHB4IDdweCA3cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29sb3I6ICNmZmViY2U7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNpdHk6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyNjI4Mjk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuXFxuLmNpdHk+ZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHk+ZGl2OmZpcnN0LW9mLXR5cGU+aW1nIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuXFx0d2lkdGg6IDIwcHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAxMHB4O1xcblxcdHRvcDogNXB4O1xcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3ctZGVsZXRlIHtcXG5cXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udGVtcC1yYW5nZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi50ZW1wZXJhdHVyZS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuXFx0Zm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmU+LnN1cGVyLXNjcmlwdCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZGVzYy1pY29uIHtcXG5cXHR3aWR0aDogNzVweDtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2Pioge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6ICMxYTAwMmE7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gODAlKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmM5ODk4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+Kj5pbWcge1xcblxcdHdpZHRoOiAyNXB4O1xcblxcdGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRjb2xvcjogI2ViY2FjYTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwMzBhYjA7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRmbGV4OiAxO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcbi5jYXJkPmRpdj5wOmZpcnN0LW9mLXR5cGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGZvbnQtc2l6ZTogMC45NXJlbTtcXG59XFxuXFxuLmljb24tZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZlZWxzLWxpa2UtdGVtcCB7XFxuXFx0bWFyZ2luLXRvcDogLTE1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXG5mb290ZXIge1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ2O1xcbn1cXG5cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6ICNiM2VlNzk7XFxufVxcblxcbi5mYSB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubG9hZGVyLWNvbnRhaW5lcixcXG4ubG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3Qge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0LyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5sb2FkZXItY29udGFpbmVyLXdhdGNobGlzdCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4ubG9hZGVyLFxcbi5sb2FkZXItd2F0Y2hsaXN0IHtcXG5cXHRib3JkZXI6IDEwcHggc29saWQgIzkwNjI2MjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyLXRvcDogMTBweCBzb2xpZCAjMWQ0ZDRmO1xcblxcdHdpZHRoOiA2MHB4O1xcblxcdGhlaWdodDogNjBweDtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAzNSU7XFxuXFx0bGVmdDogNDUlO1xcbn1cXG5cXG4ubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0Ym9yZGVyOiA1cHggc29saWQgIzkwNjI2MjtcXG5cXHRib3JkZXItdG9wOiA1cHggc29saWQgIzFkNGQ0ZjtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0dG9wOiA0MCU7XFxuXFx0bGVmdDogNDAlO1xcbn1cXG5cXG4vKiBTYWZhcmkgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuXFx0MCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblxcdH1cXG59XFxuXFxuLyogVXNlcyBmbGV4LWRpcmVjdGlvbiBjb2x1bW4gZm9yIHNjcmVlbiBzaXplcyBiZWxvdyA2MDBweCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxNXB4KSB7XFxuXFx0bWFpbiB7XFxuXFx0XFx0ZmxleDogMTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcblxcblxcdC50b2RheS1kYXRhLWRpdiB7XFxuXFx0XFx0cGFkZGluZzogNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQubmV4dC03ZGF5cy1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDE1cHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcblxcdC53YXRjaGxpc3QtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0XFx0dG9wOiA1MCU7XFxuXFx0XFx0bGVmdDogNDMlO1xcblxcdH1cXG5cXG5cXHQubG9hZGVyIHtcXG5cXHRcXHR0b3A6IDQwJTtcXG5cXHRcXHRsZWZ0OiA0MCU7XFxuXFx0fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcbmltcG9ydCB7XG5cdGNsZWFyU2NyZWVuTG9hZGVyLFxuXHRnZXRDb3VudHJ5TmFtZSxcblx0Z2V0RGF0YSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRnZXRXZWF0aGVyRGF0YSxcblx0c2NyZWVuTG9hZGVyLFxufSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiLi9pY29ucy9hZGRjaXR5LnBuZ1wiO1xuaW1wb3J0IERlbGV0ZSBmcm9tIFwiLi9pY29ucy9kZWxldGUucG5nXCI7XG5pbXBvcnQgeyBzZXR3YXRjaGxpc3RBcnJheSwgd2F0Y2hsaXN0QXJyYXkgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBzdXBlclNjcmlwdCB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuXG5mdW5jdGlvbiB3YXRjaGxpc3QoKSB7XG5cdGNvbnN0IHdhdGNobGlzdERpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLFxuXHRcdHdhdGNobGlzdEhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiKSxcblx0XHRjaXR5TGlzdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRhZGRDaXR5QnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudChcImxpXCIsIHsgY2xhc3M6IFwiYWRkLWJ1dHRvblwiIH0pLFxuXHRcdHdhdGNobGlzdElucHV0ID0gY3JlYXRlRG9tRWxlbWVudChcImlucHV0XCIsIHtcblx0XHRcdGNsYXNzOiBcIndhdGNobGlzdC1pbnB1dFwiLFxuXHRcdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkFkZCBDaXR5XCIsXG5cdFx0fSksXG5cdFx0TXlBZGRJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImFkZC1pY29uXCIsIHNyYzogQWRkSWNvbiB9KTtcblxuXHRhZGRDaXR5QnV0dG9uLmFwcGVuZChNeUFkZEljb24sIHdhdGNobGlzdElucHV0KTtcblx0d2F0Y2hsaXN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJXYXRjaGxpc3RcIjtcblx0Y2l0eUxpc3QuYXBwZW5kKGFkZENpdHlCdXR0b24pO1xuXHR3YXRjaGxpc3REaXYuYXBwZW5kKHdhdGNobGlzdEhlYWRlciwgY2l0eUxpc3QpO1xufVxuXG5mdW5jdGlvbiBhZGRDaXR5VG9XYXRjaGxpc3QocmVzcG9uc2UpIHtcblx0Y29uc3QgYWRkQ2l0eUJ1dHRvbiA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZCxcblx0XHRjaXR5TGlzdCA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0sXG5cdFx0d2F0Y2hsaXN0SW5wdXQgPSBhZGRDaXR5QnV0dG9uLmNoaWxkcmVuWzFdLFxuXHRcdGljb25BbmRDaXR5TmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0Y2l0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcImNpdHlcIiB9KSxcblx0XHR0ZW1wU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY29udmVydFwiIH0pLFxuXHRcdHRlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHRjaXR5TmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdGRlc2NJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiKSxcblx0XHRteURlbGV0ZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJkZWxldGVcIiwgc3JjOiBEZWxldGUgfSk7XG5cblx0dGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChyZXNwb25zZS5jdXJyZW50LnRlbXApfWA7XG5cdGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7d2F0Y2hsaXN0SW5wdXQudmFsdWV9YDtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50LmJvZHkpIGljb25BbmRDaXR5TmFtZS5hcHBlbmQoZGVzY0ljb24sIGNpdHlOYW1lKTtcblx0ZWxzZSBpY29uQW5kQ2l0eU5hbWUuYXBwZW5kKGRlc2NJY29uLCB0aGlzKTtcblxuXHR0ZW1wLmFwcGVuZCh0ZW1wU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdGdldEljb25BbmRUZW1wKGNpdHksIGljb25BbmRDaXR5TmFtZSwgZGVzY0ljb24sIHJlc3BvbnNlLCB0ZW1wLCBteURlbGV0ZSk7XG5cdGNpdHlMaXN0Lmluc2VydEJlZm9yZShjaXR5LCBhZGRDaXR5QnV0dG9uKTtcblx0YWRkRXZlbnRMaXN0ZW5lclRvQ2l0eShteURlbGV0ZSwgY2l0eSk7XG5cdGlmIChcblx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5sYXN0Q2hpbGQuY2xhc3NOYW1lID09PVxuXHRcdFwibG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3RcIlxuXHQpXG5cdFx0Y2xlYXJTY3JlZW5Mb2FkZXIuY2FsbChkb2N1bWVudC5ib2R5KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvQ2l0eShteURlbGV0ZSwgY2l0eSkge1xuXHRteURlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGxldCBsaXN0QXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKSk7XG5cdFx0bGV0IGluZGV4T2ZDaXR5ID0gbGlzdEFycmF5LmluZGV4T2YobXlEZWxldGUucGFyZW50Tm9kZSk7XG5cdFx0d2F0Y2hsaXN0QXJyYXkuc3BsaWNlKGluZGV4T2ZDaXR5LCAxKTtcblx0XHRzZXR3YXRjaGxpc3RBcnJheSgpO1xuXHRcdG15RGVsZXRlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChteURlbGV0ZS5wYXJlbnROb2RlKTtcblx0fSk7XG5cdGNpdHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT5cblx0XHRteURlbGV0ZS5jbGFzc0xpc3QuYWRkKFwic2hvdy1kZWxldGVcIilcblx0KTtcblx0Y2l0eS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PlxuXHRcdG15RGVsZXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWRlbGV0ZVwiKVxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uQW5kVGVtcChcblx0Y2l0eSxcblx0aWNvbkFuZENpdHlOYW1lLFxuXHRkZXNjSWNvbixcblx0cmVzcG9uc2UsXG5cdHRlbXAsXG5cdG15RGVsZXRlXG4pIHtcblx0Y29uc3Qgd2F0Y2hsaXN0SW5wdXQgPVxuXHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkXG5cdFx0XHQuY2hpbGROb2Rlc1sxXTtcblx0Y2l0eS5hcHBlbmQoaWNvbkFuZENpdHlOYW1lLCB0ZW1wLCBteURlbGV0ZSk7XG5cdGRlc2NJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3Jlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5pY29ufS5wbmdgO1xuXHRpZiAod2F0Y2hsaXN0SW5wdXQudmFsdWUudHJpbSgpICE9PSBcIlwiKVxuXHRcdHdhdGNobGlzdEFycmF5LnB1c2god2F0Y2hsaXN0SW5wdXQudmFsdWUpLCBzZXR3YXRjaGxpc3RBcnJheSgpO1xuXHRpZiAod2F0Y2hsaXN0SW5wdXQudmFsdWUpIHdhdGNobGlzdElucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0J1dHRvbigpIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEV2ZW50TGlzdGVuZXJzKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoZSkge1xuXHRjb25zdCBhZGRDaXR5QnV0dG9uID1cblx0XHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkLFxuXHRcdGhlYWRlcklucHV0ID0gZG9jdW1lbnQuYm9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSxcblx0XHRoZWFkZXJCdXR0b24gPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLFxuXHRcdHdhdGNobGlzdElucHV0ID0gYWRkQ2l0eUJ1dHRvbi5jaGlsZE5vZGVzWzFdO1xuXG5cdGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJhZGQtaWNvblwiKSB7XG5cdFx0aWYgKHdhdGNobGlzdElucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuXHRcdHNjcmVlbkxvYWRlci5jYWxsKGRvY3VtZW50KSxcblx0XHRcdGdldFdlYXRoZXJEYXRhLmFwcGx5KGRvY3VtZW50LmJvZHksIFtcblx0XHRcdFx0YWRkQ2l0eVRvV2F0Y2hsaXN0LmJpbmQoZG9jdW1lbnQuYm9keSksXG5cdFx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdFx0d2F0Y2hsaXN0SW5wdXQudmFsdWUsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRnZXRDb3VudHJ5TmFtZSxcblx0XHRcdF0pO1xuXHR9XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpLmZvckVhY2goKGNpdHlMaXN0KSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QgfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdIHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblsxXSB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0gfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0KSB7XG5cdFx0XHRzY3JlZW5Mb2FkZXIoKTtcblx0XHRcdGNvbnN0IGNpdHkgPSBjaXR5TGlzdC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0XHRnZXRXZWF0aGVyRGF0YShnZXREYXRhLCBnZXRMb25BbmRMYXQsIGNpdHksIGZhbHNlLCBnZXRDb3VudHJ5TmFtZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAoZS50YXJnZXQgPT09IGhlYWRlckJ1dHRvbikge1xuXHRcdGlmIChoZWFkZXJJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcblx0XHRzY3JlZW5Mb2FkZXIoKTtcblx0XHRnZXRXZWF0aGVyRGF0YS5jYWxsKFxuXHRcdFx0bnVsbCxcblx0XHRcdGdldERhdGEsXG5cdFx0XHRnZXRMb25BbmRMYXQsXG5cdFx0XHRoZWFkZXJJbnB1dC52YWx1ZSxcblx0XHRcdGhlYWRlcklucHV0LFxuXHRcdFx0Z2V0Q291bnRyeU5hbWVcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlbGF5RXhlY3V0aW9uKGNpdHkpIHtcblx0Y29uc3QgZmV0Y2hOb3cgPSBnZXRXZWF0aGVyRGF0YShcblx0XHRhZGRDaXR5VG9XYXRjaGxpc3QuYmluZChjaXR5KSxcblx0XHRnZXRMb25BbmRMYXQsXG5cdFx0Y2l0eSxcblx0XHRmYWxzZSxcblx0XHRnZXRDb3VudHJ5TmFtZVxuXHQpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoZmV0Y2hOb3cpLCAxMjAwKTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QoKSB7XG5cdGlmICh3YXRjaGxpc3RBcnJheS5sZW5ndGggPiAwKVxuXHRcdGZvciAoY29uc3QgY2l0eSBvZiB3YXRjaGxpc3RBcnJheSkge1xuXHRcdFx0YXdhaXQgZGVsYXlFeGVjdXRpb24oY2l0eSk7XG5cdFx0fVxufVxuXG5leHBvcnQge1xuXHR3YXRjaGxpc3QsXG5cdGFkZExpc3RlbmVyVG9CdXR0b24sXG5cdGFkZENpdHlUb1dhdGNobGlzdCxcblx0ZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCxcbn07XG4iLCJleHBvcnQgY29uc3QgQVBJX1RPS0VOID0ge1xuXHRLRVk6IFwiYzkzZmQxODE3ZjNmYmU0MmFlYWMwYTYzMDc2NjAzYjlcIixcblx0S0VZMjogXCIwYWQ3MTNmYWMxMjBiODNiZDkwNzI2MWZiNzc0MmZkN1wiLFxuXHRLRVkzOiBcIjIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0XCIsXG5cdFVOU1BMQVNIX0FDQ0VTU19LRVk6IFwia2RGcWpiaGNpSUZJYjBsRGVmSTJJNHpxUmJBalBhMTNaR3UwZGpudW5zNFwiLFxuXHRVTlNQTEFTSF9TRUNSRVRfS0VZOiBcImVwa3lDWG9nSHFkOGsydVg3b0FyYWRsMXA0NDJEY2YtREk4SXY3VkVUdzhcIixcbn07IiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIERPTSBFbGVtZW50c1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQodHlwZSwgYXR0cmlidXRlcykge1xuXHRjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuXHRpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcblx0c2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHRPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblx0fSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfTsiLCJpbXBvcnQgeyBkYXRhRGlzcGxheSwgbWlub3JEYXRhUmVwb3J0LCBzdXBlclNjcmlwdCB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuaW1wb3J0IHsgY3JlYXRlRm9yZWNhc3RDYXJkIH0gZnJvbSBcIi4vc2V2ZW4tZGF5cy1mb3JlY2FzdFwiO1xuaW1wb3J0IHsgQVBJX1RPS0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQgeyBkZWdyZWUsIG5ld05hbWUsIHNldENpdHlOYW1lIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5sZXQgdW5pdCwgY291bnRyeUFuZENpdHlOYW1lLCBjb3VudHJ5QW5kQ2l0eU5hbWUyO1xuXG5mdW5jdGlvbiBjaGVja1ByZWZlcnJlZFVuaXQoKSB7XG5cdGlmIChkZWdyZWUgPT0gXCJDXCIpIHVuaXQgPSBcIm1ldHJpY1wiO1xuXHRlbHNlIHVuaXQgPSBcImltcGVyaWFsXCI7XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGZ1bmMsIGNiLCBjaXR5TmFtZSwgaGVhZGVySW5wdXQsIGdldE5hbWUpIHtcblx0Y2hlY2tQcmVmZXJyZWRVbml0KCk7XG5cdGNvbnN0IGV4Y2x1ZGUgPSBgJnVuaXRzPSR7dW5pdH0mQVBQSUQ9JHtBUElfVE9LRU4uS0VZfWA7XG5cdGZldGNoKFxuXHRcdGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JHtleGNsdWRlfWAsXG5cdFx0e1xuXHRcdFx0bW9kZTogXCJjb3JzXCIsXG5cdFx0fVxuXHQpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRpZiAocmVzcG9uc2UuY29kID09IDQwNCkge1xuXHRcdFx0XHRkaXNwbGF5Q2l0eU5vdEZvdW5kLmNhbGwodGhpcyk7XG5cdFx0XHRcdGNsZWFyU2NyZWVuTG9hZGVyLmNhbGwodGhpcyk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmNvZCA9PSAyMDApIHtcblx0XHRcdFx0Y29uc3QgeyBsYXQgfSA9IHJlc3BvbnNlLmNvb3JkO1xuXHRcdFx0XHRjb25zdCB7IGxvbiB9ID0gcmVzcG9uc2UuY29vcmQ7XG5cdFx0XHRcdGdldE5hbWUuY2FsbCh0aGlzLCByZXNwb25zZSk7XG5cdFx0XHRcdGNiKGxhdCwgbG9uLCBmdW5jLCBoZWFkZXJJbnB1dCk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5mdW5jdGlvbiBnZXRMb25BbmRMYXQobGF0LCBsb24sIGNhbGxiYWNrLCBoZWFkZXJJbnB1dCkge1xuXHRuZXh0N0RheXNGb3JlY2FzdChsYXQsIGxvbiwgY2FsbGJhY2ssIGhlYWRlcklucHV0KTtcbn1cblxuZnVuY3Rpb24gbmV4dDdEYXlzRm9yZWNhc3QobGF0LCBsb24sIGNhbGxiYWNrLCBoZWFkZXJJbnB1dCkge1xuXHRjaGVja1ByZWZlcnJlZFVuaXQoKTtcblx0Y29uc3QgZXhjbHVkZTIgPSBgJmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZ1bml0cz0ke3VuaXR9JmFwcGlkPSR7QVBJX1RPS0VOLktFWX1gO1xuXHRmZXRjaChcblx0XHRgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JHtleGNsdWRlMn1gXG5cdClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGNhbGxiYWNrKHJlc3BvbnNlLCBoZWFkZXJJbnB1dCk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEocmVzcG9uc2UsIGhlYWRlcklucHV0KSB7XG5cdGxldCB3ZWF0aGVyRGVzYyA9IHJlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblx0Y29uc3QgdG9kYXlEYXRhRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0sXG5cdFx0bmV4dDdEYXlzRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV07XG5cdGNsZWFyRGF0YSh0b2RheURhdGFEaXYpLFxuXHRcdGNsZWFyRGF0YShuZXh0N0RheXNEaXYpLFxuXHRcdGRpc3BsYXlXZWF0aGVyUmVwb3J0LmNhbGwodGhpcywgcmVzcG9uc2UpLFxuXHRcdGRpc3BsYXk3RGF5c0ZvcmVjYXN0KHJlc3BvbnNlKTtcblx0aWYgKGhlYWRlcklucHV0LnZhbHVlKVxuXHRcdG5ld05hbWUoaGVhZGVySW5wdXQudmFsdWUpLCBzZXRDaXR5TmFtZSgpLCAoaGVhZGVySW5wdXQudmFsdWUgPSBcIlwiKTtcblx0Z2V0V2VhdGhlckltYWdlKHdlYXRoZXJEZXNjKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEYXRhKGRpdikge1xuXHR3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXk3RGF5c0ZvcmVjYXN0KHJlc3BvbnNlKSB7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgcmVzcG9uc2UuZGFpbHkubGVuZ3RoOyBpKyspXG5cdFx0Y3JlYXRlRm9yZWNhc3RDYXJkKHJlc3BvbnNlLmRhaWx5W2ldKTtcblx0Y2xlYXJTY3JlZW5Mb2FkZXIoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJSZXBvcnQocmVzcG9uc2UpIHtcblx0Y29uc3QgbG93VGVtcFNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHRoaWdoVGVtcFNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHRmZWVsc0xpa2VTcGFuID0gY3JlYXRlRG9tRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJjb252ZXJ0XCIgfSksXG5cdFx0dGVtcGVyYXR1cmVTcGFuID0gY3JlYXRlRG9tRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJjb252ZXJ0XCIgfSk7XG5cdGNvbnN0IFtcblx0XHR3ZWF0aGVyRGVzYyxcblx0XHRkZXNjSWNvbixcblx0XHRuYW1lT2ZDaXR5LFxuXHRcdHRlbXBlcmF0dXJlLFxuXHRcdGxvd1RlbXAsXG5cdFx0aGlnaFRlbXAsXG5cdFx0ZmVlbHNMaWtlVGVtcCxcblx0XSA9IGRhdGFEaXNwbGF5KCk7XG5cblx0Y29uc3QgW3dpbmQsIGRld1BvaW50LCB0aW1lWm9uZSwgdXZJbmRleCwgcHJlc3N1cmUsIGh1bWlkaXR5XSA9XG5cdFx0bWlub3JEYXRhUmVwb3J0KCk7XG5cblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KSBuYW1lT2ZDaXR5LnRleHRDb250ZW50ID0gY291bnRyeUFuZENpdHlOYW1lO1xuXHRlbHNlIG5hbWVPZkNpdHkudGV4dENvbnRlbnQgPSBjb3VudHJ5QW5kQ2l0eU5hbWUyO1xuXHR3ZWF0aGVyRGVzYy50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuXHRsb3dUZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHJlc3BvbnNlLmRhaWx5WzBdLnRlbXAubWluKX1gO1xuXHRmZWVsc0xpa2VTcGFuLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQocmVzcG9uc2UuY3VycmVudC5mZWVsc19saWtlKX1gO1xuXHRoaWdoVGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChyZXNwb25zZS5kYWlseVswXS50ZW1wLm1heCl9YDtcblx0dGVtcGVyYXR1cmVTcGFuLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQocmVzcG9uc2UuY3VycmVudC50ZW1wKX1gO1xuXG5cdGxvd1RlbXAuYXBwZW5kKFwiTG93OiBcIiwgbG93VGVtcFNwYW4sIHN1cGVyU2NyaXB0KCkpO1xuXHRoaWdoVGVtcC5hcHBlbmQoXCJIaWdoOiBcIiwgaGlnaFRlbXBTcGFuLCBzdXBlclNjcmlwdCgpKTtcblx0dGVtcGVyYXR1cmUuYXBwZW5kKHRlbXBlcmF0dXJlU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdGZlZWxzTGlrZVRlbXAuYXBwZW5kKFwiRmVlbHMgTGlrZSBcIiwgZmVlbHNMaWtlU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdHdpbmQuYXBwZW5kKGBXaW5kIFNwZWVkOiAke3Jlc3BvbnNlLmN1cnJlbnQud2luZF9zcGVlZH1gKTtcblx0ZGV3UG9pbnQuYXBwZW5kKGBEZXcgUG9pbnQ6ICR7cmVzcG9uc2UuY3VycmVudC5kZXdfcG9pbnR9YCk7XG5cdHRpbWVab25lLmFwcGVuZChgdGltZSBab25lOiAke3Jlc3BvbnNlLnRpbWV6b25lfWApO1xuXHR1dkluZGV4LmFwcGVuZChgVVYgSW5kZXg6ICR7cmVzcG9uc2UuY3VycmVudC51dml9YCk7XG5cdHByZXNzdXJlLmFwcGVuZChgUHJlc3N1cmU6ICR7cmVzcG9uc2UuY3VycmVudC5wcmVzc3VyZX1gKTtcblx0aHVtaWRpdHkuYXBwZW5kKGBIdW1pZGl0eTogJHtyZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5fWApO1xuXHRkZXNjSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtyZXNwb25zZS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcbn1cblxuZnVuY3Rpb24gZ2V0Q291bnRyeU5hbWUocmVzcG9uc2UpIHtcblx0Y29uc3QgcmVnaW9uTmFtZXMgPSBuZXcgSW50bC5EaXNwbGF5TmFtZXMoW1wiZW5cIl0sIHsgdHlwZTogXCJyZWdpb25cIiB9KTtcblx0Y29uc3QgY291bnRyeU5hbWUgPSByZWdpb25OYW1lcy5vZihyZXNwb25zZS5zeXMuY291bnRyeSk7XG5cdGlmICh0aGlzID09PSBkb2N1bWVudCkge1xuXHRcdGlmIChjb3VudHJ5TmFtZSA9PSByZXNwb25zZS5uYW1lKSBjb3VudHJ5QW5kQ2l0eU5hbWUgPSBjb3VudHJ5TmFtZTtcblx0XHRlbHNlIGNvdW50cnlBbmRDaXR5TmFtZSA9IGAke3Jlc3BvbnNlLm5hbWV9LCAke2NvdW50cnlOYW1lfS5gO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChjb3VudHJ5TmFtZSA9PSByZXNwb25zZS5uYW1lKSBjb3VudHJ5QW5kQ2l0eU5hbWUyID0gY291bnRyeU5hbWU7XG5cdFx0ZWxzZSBjb3VudHJ5QW5kQ2l0eU5hbWUyID0gYCR7cmVzcG9uc2UubmFtZX0sICR7Y291bnRyeU5hbWV9LmA7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2NyZWVuTG9hZGVyKCkge1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQpIHtcblx0XHRjb25zdCBbbG9hZGVyQ29udGFpbmVyXSA9IGNyZWF0ZUxvYWRlcihcblx0XHRcdFwibG9hZGVyLXdhdGNobGlzdFwiLFxuXHRcdFx0XCJsb2FkZXItY29udGFpbmVyLXdhdGNobGlzdFwiXG5cdFx0KTtcblx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5hcHBlbmQobG9hZGVyQ29udGFpbmVyKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBbbG9hZGVyQ29udGFpbmVyXSA9IGNyZWF0ZUxvYWRlcihcImxvYWRlclwiLCBcImxvYWRlci1jb250YWluZXJcIik7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQobG9hZGVyQ29udGFpbmVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjbGVhclNjcmVlbkxvYWRlcigpIHtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50LmJvZHkpXG5cdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0ucmVtb3ZlQ2hpbGQoXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5sYXN0Q2hpbGRcblx0XHQpO1xuXHRlbHNlIGRvY3VtZW50LmJvZHkubGFzdENoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2FkZXIobG9hZGVyQ2xhc3MsIGxvYWRlckRpdkNsYXNzKSB7XG5cdGNvbnN0IGxvYWRlckNvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwge1xuXHRcdGNsYXNzOiBsb2FkZXJEaXZDbGFzcyxcblx0fSk7XG5cdGNvbnN0IGxvYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogbG9hZGVyQ2xhc3MgfSk7XG5cdGxvYWRlckNvbnRhaW5lci5hcHBlbmQobG9hZGVyKTtcblx0cmV0dXJuIFtsb2FkZXJDb250YWluZXJdO1xufVxuXG5mdW5jdGlvbiBnZXRXZWF0aGVySW1hZ2Uod2VhdGhlckRlc2MpIHtcblx0ZmV0Y2goXG5cdFx0YGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9zZWFyY2gvcGhvdG9zP3F1ZXJ5PSR7d2VhdGhlckRlc2N9JnBlcl9wYWdlPTImY2xpZW50X2lkPWdLNTJEZTJUbV9kTDVvMUlYS2E5RlJPQkFKLUxJWXFSNDF4QmRsZzNYMmtgLFxuXHRcdHsgbW9kZTogXCJjb3JzXCIgfVxuXHQpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUyNykscmdiYSgwLCAwLCAwLCAwLjUpKSAsdXJsKCR7cmVzcG9uc2UucmVzdWx0c1sxXS51cmxzLnJhd30pYDtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNpdHlOb3RGb3VuZCgpIHtcblx0Y29uc3Qgd2F0Y2hsaXN0SW5wdXQgPVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS5sYXN0Q2hpbGQuY2hpbGRyZW5bMV0sXG5cdFx0aGVhZGVySW5wdXQgPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdO1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQuYm9keSlcblx0XHR3YXRjaGxpc3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwibm90LWZvdW5kXCIpLFxuXHRcdFx0c2V0UGxhY2Vob2xkZXIuY2FsbCh0aGlzLCB3YXRjaGxpc3RJbnB1dCwgXCJBZGQgQ2l0eVwiKTtcblx0ZWxzZVxuXHRcdGhlYWRlcklucHV0LmNsYXNzTGlzdC5hZGQoXCJub3QtZm91bmRcIiksXG5cdFx0XHRzZXRQbGFjZWhvbGRlci5jYWxsKHRoaXMsIGhlYWRlcklucHV0LCBcIkVudGVyIENpdHkgTmFtZVwiKTtcbn1cblxuZnVuY3Rpb24gc2V0UGxhY2Vob2xkZXIoaW5wdXQsIHBsYWNlaG9sZGVyKSB7XG5cdGlucHV0LnZhbHVlID0gXCJcIjtcblx0aW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJDaXR5IE5vdCBGb3VuZFwiKTtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0aW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1mb3VuZFwiKTtcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XG5cdH0sIDQwMDApO1xufVxuXG5leHBvcnQge1xuXHRnZXRXZWF0aGVyRGF0YSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRnZXREYXRhLFxuXHRnZXRDb3VudHJ5TmFtZSxcblx0c2NyZWVuTG9hZGVyLFxuXHRjbGVhclNjcmVlbkxvYWRlcixcbn07XG4iLCJpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5TmFtZVwiKSA9PT0gbnVsbClcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXR5TmFtZVwiLCBKU09OLnN0cmluZ2lmeShcIlBvcnQgSGFyY291cnRcIikpO1xubGV0IGNpdHlOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlOYW1lXCIpKTtcbmZ1bmN0aW9uIG5ld05hbWUoc2V0TmFtZSkge1xuXHRjaXR5TmFtZSA9IHNldE5hbWU7XG59XG5mdW5jdGlvbiBzZXRDaXR5TmFtZSgpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXR5TmFtZVwiLCBKU09OLnN0cmluZ2lmeShjaXR5TmFtZSkpO1xufVxuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YXRjaGxpc3RBcnJheVwiKSA9PSBudWxsKVxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5sZXQgd2F0Y2hsaXN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIikpO1xuZnVuY3Rpb24gc2V0d2F0Y2hsaXN0QXJyYXkoKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkod2F0Y2hsaXN0QXJyYXkpKTtcbn1cblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGVncmVlXCIpID09IG51bGwpXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGVncmVlXCIsIEpTT04uc3RyaW5naWZ5KFwiQ1wiKSk7XG5sZXQgZGVncmVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlZ3JlZVwiKSk7XG5mdW5jdGlvbiBuZXdEZWdyZWUoc2V0TmFtZSkge1xuXHRkZWdyZWUgPSBzZXROYW1lO1xufVxuZnVuY3Rpb24gc2V0RGVncmVlKCkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlZ3JlZVwiLCBKU09OLnN0cmluZ2lmeShkZWdyZWUpKTtcbn1cblxuZXhwb3J0IHtcblx0Y2l0eU5hbWUsXG5cdHNldENpdHlOYW1lLFxuXHRuZXdOYW1lLFxuXHR3YXRjaGxpc3RBcnJheSxcblx0c2V0d2F0Y2hsaXN0QXJyYXksXG5cdGRlZ3JlZSxcblx0c2V0RGVncmVlLFxuXHRuZXdEZWdyZWUsXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuXG4vKipcbiAqIEZ1bmN0aW9uIGZvciBjcmVhdGluZyBmb290ZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlZm9vdGVyKCkge1xuXHRjb25zdCBmb290ZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZm9vdGVyXCIpO1xuXHRjb25zdCBhbmNob3JMaW5rID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuXHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0lBbVlvdW5nYm9zc3kvd2VhdGhlci1hcHBcIixcblx0fSk7XG5cdGNvbnN0IGdpdEh1Ykljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaVwiLCB7IGNsYXNzOiBcImZhIGZhLWdpdGh1YlwiIH0pO1xuXHRjb25zdCBpY29uc0NyZWRpdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCB3ZWF0aGVyQVBJID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuXHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0XHRocmVmOiBcImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL1wiLFxuXHR9KTtcblx0Y29uc3QgaW1hZ2VBUEkgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vXCIsXG5cdH0pO1xuXHRjb25zdCBpY29uczhBbmNob3IgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly9pY29uczguY29tL1wiLFxuXHR9KTtcblxuXHR3ZWF0aGVyQVBJLnRleHRDb250ZW50ID0gXCIgT3BlbldlYXRoZXJNYXAgXCI7XG5cdGltYWdlQVBJLnRleHRDb250ZW50ID0gXCIgVW5zcGxhc2ggXCI7XG5cdGljb25zOEFuY2hvci50ZXh0Q29udGVudCA9IFwiIEljb25zOFwiO1xuXHRpY29uc0NyZWRpdC5hcHBlbmQoXG5cdFx0XCJJY29ucyBieVwiLFxuXHRcdGljb25zOEFuY2hvcixcblx0XHRcIiwgV2VhdGhlciAmIEltYWdlIEFQSSBieVwiLFxuXHRcdHdlYXRoZXJBUEksXG5cdFx0XCIgJlwiLFxuXHRcdGltYWdlQVBJXG5cdCk7XG5cdGFuY2hvckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViSWNvbik7XG5cdGZvb3Rlci5hcHBlbmQoXG5cdFx0XCJDb3B5cmlnaHQgXFx1MDBBOSAyMDIyIElBbVlvdW5nYm9zc3lcIixcblx0XHRcIiAgXCIsXG5cdFx0YW5jaG9yTGluayxcblx0XHRpY29uc0NyZWRpdFxuXHQpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZWZvb3RlciB9OyIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXHRjb25zdCBoZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaGVhZGVyXCIpO1xuXHRjb25zdCBzZWFyY2hEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwic2VhcmNoLWRpdlwiIH0pO1xuXHRjb25zdCBzZWFyY2hCYXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaW5wdXRcIiwge1xuXHRcdHR5cGU6IFwic2VhcmNoXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgQ2l0eSBOYW1lXCIsXG5cdH0pO1xuXHRjb25zdCBzZWFyY2hCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiB9KTtcblx0Y29uc3QgaGVhZGVyVGl0bGVEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGl0bGUtZGl2XCIgfSk7XG5cdGNvbnN0IGhlYWRlclRpdGxlID0gY3JlYXRlRG9tRWxlbWVudChcImgxXCIpO1xuXG5cdHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG5cdGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJDaXR5V2F0Y2hcIjtcblxuXHRzZWFyY2hEaXYuYXBwZW5kKHNlYXJjaEJhciwgc2VhcmNoQnV0dG9uKTtcblx0aGVhZGVyVGl0bGVEaXYuYXBwZW5kKGhlYWRlclRpdGxlKTtcblx0aGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZURpdiwgc2VhcmNoRGl2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIi4vaWNvbnMvZGF0ZS5wbmdcIjtcbmltcG9ydCBIdW1pZGl0eSBmcm9tIFwiLi9pY29ucy9odW1pZGl0eS5wbmdcIjtcbmltcG9ydCBQcmVzc3VyZSBmcm9tIFwiLi9pY29ucy9wcmVzc3VyZS5wbmdcIjtcbmltcG9ydCBUaW1lem9uZSBmcm9tIFwiLi9pY29ucy90aW1lem9uZS5wbmdcIjtcbmltcG9ydCBXaW5kIGZyb20gXCIuL2ljb25zL3dpbmQucG5nXCI7XG5pbXBvcnQgU2VhTGV2ZWwgZnJvbSBcIi4vaWNvbnMvc2VhbGV2ZWwucG5nXCI7XG5pbXBvcnQgRGVncmVlSWNvbiBmcm9tIFwiLi9pY29ucy9kZWdyZWUucG5nXCI7XG5pbXBvcnQgeyBkZWdyZWUsIG5ld0RlZ3JlZSwgc2V0RGVncmVlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudHMoKSB7XG5cdGNvbnN0IG1haW5EaXYgPSBjcmVhdGVEb21FbGVtZW50KFwibWFpblwiLCB7IGNsYXNzOiBcIm1haW5cIiB9KTtcblx0Y3JlYXRlVG9kYXlGb3JlY2FzdENvbnRhaW5lcihtYWluRGl2KTtcblx0Y3JlYXRlTmV4dGRheXNDb250YWluZXJEaXYobWFpbkRpdik7XG5cdGdldFdhdGNobGlzdChtYWluRGl2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbkRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZGF5Rm9yZWNhc3RDb250YWluZXIobWFpbkRpdikge1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidG9kYXktZGF0YS1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQodG9kYXlEYXRhRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dGRheXNDb250YWluZXJEaXYobWFpbkRpdikge1xuXHRjb25zdCBuZXh0N0RheXNEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibmV4dC03ZGF5cy1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQobmV4dDdEYXlzRGl2KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2F0Y2hsaXN0KG1haW5EaXYpIHtcblx0Y29uc3Qgd2F0Y2hsaXN0RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIndhdGNobGlzdC1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQod2F0Y2hsaXN0RGl2KTtcbn1cblxuZnVuY3Rpb24gbWlub3JEYXRhUmVwb3J0KCkge1xuXHRjb25zdCBtaW5vckRhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzNdLFxuXHRcdHdpbmREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2luZC1kaXZcIiB9KSxcblx0XHR3aW5kID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ3aW5kXCIgfSksXG5cdFx0ZGV3UG9pbnREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV3LXBvaW50LWRpdlwiIH0pLFxuXHRcdGRld1BvaW50ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJkZXctcG9pbnRcIiB9KSxcblx0XHR0aW1lWm9uZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0aW1lLXpvbmUtZGl2XCIgfSksXG5cdFx0dGltZVpvbmUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcInRpbWUtem9uZVwiIH0pLFxuXHRcdHV2SW5kZXhEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidXYtaW5kZXgtZGl2XCIgfSksXG5cdFx0dXZJbmRleCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidXYtaW5kZXhcIiB9KSxcblx0XHRwcmVzc3VyZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwcmVzc3VyZS1kaXZcIiB9KSxcblx0XHRwcmVzc3VyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwicHJlc3N1cmVcIiB9KSxcblx0XHRodW1pZGl0eURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJodW1pZGl0eS1kaXZcIiB9KSxcblx0XHRodW1pZGl0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiaHVtaWRpdHlcIiB9KSxcblx0XHRNeURhdGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBEYXRlIH0pLFxuXHRcdE15SHVtaWRpdHkgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBIdW1pZGl0eSB9KSxcblx0XHRNeVByZXNzdXJlID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogUHJlc3N1cmUgfSksXG5cdFx0TXlUaW1lem9uZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFRpbWV6b25lIH0pLFxuXHRcdE15U2VhTGV2ZWwgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBTZWFMZXZlbCB9KSxcblx0XHRNeVdpbmQgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBXaW5kIH0pO1xuXG5cdHdpbmREaXYuYXBwZW5kKE15V2luZCwgd2luZCk7XG5cdGRld1BvaW50RGl2LmFwcGVuZChNeVNlYUxldmVsLCBkZXdQb2ludCk7XG5cdHRpbWVab25lRGl2LmFwcGVuZChNeVRpbWV6b25lLCB0aW1lWm9uZSk7XG5cdHV2SW5kZXhEaXYuYXBwZW5kKE15RGF0ZSwgdXZJbmRleCk7XG5cdHByZXNzdXJlRGl2LmFwcGVuZChNeVByZXNzdXJlLCBwcmVzc3VyZSk7XG5cdGh1bWlkaXR5RGl2LmFwcGVuZChNeUh1bWlkaXR5LCBodW1pZGl0eSk7XG5cdG1pbm9yRGF0YURpdi5hcHBlbmQoXG5cdFx0d2luZERpdixcblx0XHRkZXdQb2ludERpdixcblx0XHR0aW1lWm9uZURpdixcblx0XHR1dkluZGV4RGl2LFxuXHRcdHByZXNzdXJlRGl2LFxuXHRcdGh1bWlkaXR5RGl2XG5cdCk7XG5cdHJldHVybiBbd2luZCwgZGV3UG9pbnQsIHRpbWVab25lLCB1dkluZGV4LCBwcmVzc3VyZSwgaHVtaWRpdHldO1xufVxuXG5mdW5jdGlvbiBzdXBlclNjcmlwdCgpIHtcblx0Y29uc3Qgc3VwU2NyaXB0ID0gY3JlYXRlRG9tRWxlbWVudChcInN1cFwiLCB7IGNsYXNzOiBcInN1cGVyLXNjcmlwdFwiIH0pLFxuXHRcdHN1cFNjcmlwdDIgPSBjcmVhdGVEb21FbGVtZW50KFwic3VwXCIsIHsgY2xhc3M6IFwic3VwZXItc2NyaXB0XCIgfSksXG5cdFx0ZGVncmVlU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwic3VwZXItc3BhblwiIH0pO1xuXHRkZWdyZWVTcGFuLnRleHRDb250ZW50ID0gZGVncmVlO1xuXHRzdXBTY3JpcHQudGV4dENvbnRlbnQgPSBcIm9cIjtcblx0c3VwU2NyaXB0Mi5hcHBlbmQoc3VwU2NyaXB0LCBkZWdyZWVTcGFuKTtcblx0YWRkTGlzdGVuZXJGb3JFdmVudFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlXCIpLCBkZWdyZWVTcGFuKTtcblx0YWRkTGlzdGVuZXJGb3JFdmVudFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdFwiKSwgZGVncmVlU3Bhbik7XG5cdHJldHVybiBzdXBTY3JpcHQyO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lckZvckV2ZW50VG8oZWxlbWVudCwgdW5pdCkge1xuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKGRlZ3JlZSA9PSBcIkNcIikgdW5pdC50ZXh0Q29udGVudCA9IFwiQ1wiO1xuXHRcdGVsc2UgdW5pdC50ZXh0Q29udGVudCA9IFwiRlwiO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGF0YURpc3BsYXkoKSB7XG5cdGNvbnN0IHRvZGF5RGF0YURpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdO1xuXHRjb25zdCB3ZWF0aGVyRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwid2VhdGhlci1kZXNjXCIgfSksXG5cdFx0bmFtZU9mQ2l0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzOiBcIm5hbWUtb2YtY2l0eVwiIH0pLFxuXHRcdGRlc2NJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImRlc2MtaWNvblwiIH0pLFxuXHRcdHRlbXBEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGVtcC1kaXZcIiB9KSxcblx0XHR0ZW1wUmFuZ2UgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGVtcC1yYW5nZVwiIH0pLFxuXHRcdGhpZ2hUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJoaWdoLXRlbXBcIiB9KSxcblx0XHRsb3dUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJsb3ctdGVtcFwiIH0pLFxuXHRcdGZlZWxzTGlrZVRlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImZlZWxzLWxpa2UtdGVtcFwiIH0pLFxuXHRcdHRlbXBlcmF0dXJlRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRlbXBlcmF0dXJlLWRpdlwiIH0pLFxuXHRcdHRlbXBlcmF0dXJlID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ0ZW1wZXJhdHVyZVwiIH0pLFxuXHRcdG1pbm9yRGF0YURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtaW5vci1kYXRhLWRpdlwiIH0pO1xuXG5cdHRlbXBSYW5nZS5hcHBlbmQobG93VGVtcCwgaGlnaFRlbXApO1xuXHR0ZW1wZXJhdHVyZURpdi5hcHBlbmQodGVtcGVyYXR1cmUsIGRlc2NJY29uKTtcblx0dGVtcERpdi5hcHBlbmQodGVtcFJhbmdlLCB0ZW1wZXJhdHVyZURpdiwgZmVlbHNMaWtlVGVtcCk7XG5cdHRvZGF5RGF0YURpdi5hcHBlbmQod2VhdGhlckRlc2MsIG5hbWVPZkNpdHksIHRlbXBEaXYsIG1pbm9yRGF0YURpdik7XG5cdHJldHVybiBbXG5cdFx0d2VhdGhlckRlc2MsXG5cdFx0ZGVzY0ljb24sXG5cdFx0bmFtZU9mQ2l0eSxcblx0XHR0ZW1wZXJhdHVyZSxcblx0XHRsb3dUZW1wLFxuXHRcdGhpZ2hUZW1wLFxuXHRcdGZlZWxzTGlrZVRlbXAsXG5cdF07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRCZXR3ZWVuVW5pdHMoKSB7XG5cdGNvbnN0IHRvZGF5RGF0YURpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0sXG5cdFx0dW5pdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidW5pdFwiIH0pLFxuXHRcdHVuaXREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidW5pdC1kaXZcIiB9KSxcblx0XHRNeURlZ3JlZUljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHtcblx0XHRcdGNsYXNzOiBcImRlZ3JlZVwiLFxuXHRcdFx0c3JjOiBEZWdyZWVJY29uLFxuXHRcdH0pO1xuXG5cdGRlZ3JlZSA9PSBcIkNcIiA/ICh1bml0LnRleHRDb250ZW50ID0gXCJGXCIpIDogKHVuaXQudGV4dENvbnRlbnQgPSBcIkNcIik7XG5cdHVuaXREaXYuYXBwZW5kKE15RGVncmVlSWNvbiwgdW5pdCk7XG5cdHRvZGF5RGF0YURpdi5hcHBlbmQodW5pdERpdik7XG5cdGxpc3RlblRvRXZlbnRGcm9tKHVuaXQsIHVuaXQpO1xuXHRsaXN0ZW5Ub0V2ZW50RnJvbShNeURlZ3JlZUljb24sIHVuaXQpO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5Ub0V2ZW50RnJvbShlbGVtZW50LCB1bml0KSB7XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoZGVncmVlID09IFwiQ1wiKVxuXHRcdFx0bmV3RGVncmVlKFwiRlwiKSxcblx0XHRcdFx0c2V0RGVncmVlKCksXG5cdFx0XHRcdCh1bml0LnRleHRDb250ZW50ID0gXCIgQ1wiKSxcblx0XHRcdFx0ZGlzcGxheUZhaHJlbmhlaXQoKTtcblx0XHRlbHNlXG5cdFx0XHRuZXdEZWdyZWUoXCJDXCIpLCBzZXREZWdyZWUoKSwgKHVuaXQudGV4dENvbnRlbnQgPSBcIiBGXCIpLCBkaXNwbGF5Q2Vsc2l1cygpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZhaHJlbmhlaXQoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udmVydFwiKS5mb3JFYWNoKCh0ZW1wKSA9PiB7XG5cdFx0dGVtcC50ZXh0Q29udGVudCA9IGNvbnZlcnRDZWxzaXVzVG9GYWhyZW5oZWl0KHBhcnNlRmxvYXQodGVtcC50ZXh0Q29udGVudCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNlbHNpdXMoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udmVydFwiKS5mb3JFYWNoKCh0ZW1wKSA9PiB7XG5cdFx0dGVtcC50ZXh0Q29udGVudCA9IGNvbnZlcnRGYWhyZW5oZWl0VG9DZWxzaXVzKHBhcnNlRmxvYXQodGVtcC50ZXh0Q29udGVudCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydENlbHNpdXNUb0ZhaHJlbmhlaXQoY2Vsc2l1cykge1xuXHRjb25zdCBmYWhyZW5oZWl0ID0gKGNlbHNpdXMgKiA5KSAvIDUgKyAzMjtcblx0cmV0dXJuIE1hdGgucm91bmQoKGZhaHJlbmhlaXQgKiAxMDAwKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RmFocmVuaGVpdFRvQ2Vsc2l1cyhmYWhyZW5oZWl0KSB7XG5cdGNvbnN0IGNlbHNpdXMgPSAoKGZhaHJlbmhlaXQgLSAzMikgKiA1KSAvIDk7XG5cdHJldHVybiBNYXRoLnJvdW5kKChjZWxzaXVzICogMTAwMCkgLyAxMDAwKTtcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlTWFpbkNvbnRlbnRzLFxuXHRtaW5vckRhdGFSZXBvcnQsXG5cdHN1cGVyU2NyaXB0LFxuXHRkYXRhRGlzcGxheSxcblx0Y29udmVydEJldHdlZW5Vbml0cyxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQgeyBzdXBlclNjcmlwdCB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JlY2FzdENhcmQoZGFpbHkpIHtcblx0Y29uc3QgbmV4dDdEYXlzRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0sXG5cdFx0Y2FyZCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjYXJkXCIgfSksXG5cdFx0ZGF5QW5kRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0aWNvbkRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpY29uLWRpdlwiIH0pLFxuXHRcdHRlbXBEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIpLFxuXHRcdGRheSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdHdlYXRoZXJEZXNjID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0d2VhdGhlckRlc2NJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiKSxcblx0XHRsb3dUZW1wU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY29udmVydFwiIH0pLFxuXHRcdGxvd1RlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHRoaWdoVGVtcFNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHRoaWdoVGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpO1xuXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYWlseS5kdCAqIDEwMDApO1xuXHRjb25zdCB3ZWVrZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG5cblx0bG93VGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChkYWlseS50ZW1wLm1pbil9YDtcblx0aGlnaFRlbXBTcGFuLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQoZGFpbHkudGVtcC5tYXgpfWA7XG5cdGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXl9YDtcblx0d2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBgJHtkYWlseS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG5cdHdlYXRoZXJEZXNjSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtkYWlseS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG5cdGhpZ2hUZW1wLmFwcGVuZChoaWdoVGVtcFNwYW4sIHN1cGVyU2NyaXB0KCkpO1xuXHRsb3dUZW1wLmFwcGVuZChsb3dUZW1wU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdGRheUFuZERlc2MuYXBwZW5kKGRheSwgd2VhdGhlckRlc2MpO1xuXHR0ZW1wRGl2LmFwcGVuZChoaWdoVGVtcCwgbG93VGVtcCk7XG5cdGljb25EaXYuYXBwZW5kKHdlYXRoZXJEZXNjSWNvbiwgdGVtcERpdik7XG5cdGNhcmQuYXBwZW5kKGRheUFuZERlc2MsIGljb25EaXYpO1xuXHRuZXh0N0RheXNEaXYuYXBwZW5kKGNhcmQpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JlY2FzdENhcmQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL3BhZ2UtaGVhZGVyXCI7XG5pbXBvcnQge1xuXHRnZXRDb3VudHJ5TmFtZSxcblx0Z2V0RGF0YSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRnZXRXZWF0aGVyRGF0YSxcblx0c2NyZWVuTG9hZGVyLFxufSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgeyBjcmVhdGVmb290ZXIgfSBmcm9tIFwiLi9wYWdlLWZvb3RlclwiO1xuaW1wb3J0IHsgY29udmVydEJldHdlZW5Vbml0cywgY3JlYXRlTWFpbkNvbnRlbnRzIH0gZnJvbSBcIi4vcGFnZS1tYWluXCI7XG5pbXBvcnQge1xuXHRhZGRMaXN0ZW5lclRvQnV0dG9uLFxuXHRkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0LFxuXHR3YXRjaGxpc3QsXG59IGZyb20gXCIuL2NpdHktd2F0Y2hsaXN0XCI7XG5pbXBvcnQgeyBjaXR5TmFtZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jcmVhdGVNYWluQ29udGVudHMoKTtcbmNvbnZlcnRCZXR3ZWVuVW5pdHMoKTtcbmNyZWF0ZWZvb3RlcigpO1xud2F0Y2hsaXN0KCk7XG5zY3JlZW5Mb2FkZXIoKTtcbmFkZExpc3RlbmVyVG9CdXR0b24oKTtcbmRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QoKTtcbmdldFdlYXRoZXJEYXRhLmNhbGwoXG5cdGRvY3VtZW50LFxuXHRnZXREYXRhLmJpbmQoZG9jdW1lbnQpLFxuXHRnZXRMb25BbmRMYXQsXG5cdGNpdHlOYW1lLFxuXHRmYWxzZSxcblx0Z2V0Q291bnRyeU5hbWVcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9