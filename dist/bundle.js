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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n.search-div > input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\nh1 {\n\tfont-size: 2rem;\n\tfont-family: monospace;\n}\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n}\n.today-data-div > div:first-of-type,\n.today-data-div > h2:first-of-type,\n.temp-div > * {\n\tcolor: white;\n}\n.weather-desc {\n\tcolor: white;\n}\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n}\n.watchlist-div > h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\nul {\n\tmargin-top: 10px;\n}\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n.add-button > input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n.add-button > input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n.city > div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n.city > div:first-of-type > img {\n\tmargin-right: 5px;\n}\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n.show-delete {\n\tvisibility: visible;\n}\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n.temperature-div {\n\tdisplay: flex;\n}\n.temperature {\n\tfont-size: 4rem;\n}\n.temperature > .super-script {\n\tfont-size: 2rem;\n}\n.desc-icon {\n\twidth: 75px;\n}\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n.minor-data-div > * {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tborder: 1px solid #ffacac;\n\tanimation: blinkingBorder 2s infinite;\n}\n\n/* A subtle blinking border color */\n@keyframes blinkingBorder {\n\t0% {\n\t\tborder-color: #422b19;\n\t}\n\t25% {\n\t\tborder-color: #553533;\n\t}\n\t50% {\n\t\tborder-color: #57032e;\n\t}\n\t70% {\n\t\tborder-color: #6c3154;\n\t}\n\t100% {\n\t\tborder-color: #37253d;\n\t}\n}\n.minor-data-div > * > img {\n\twidth: 25px;\n\theight: 25px;\n}\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n.card > div > p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\t.next-7days-div {\n\t\tpadding: 0px 20px 10px 20px;\n\t}\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,sBAAsB;AACvB;AACA;CACC,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,2BAA2B;AAC5B;;AAEA,mBAAmB;AACnB;CACC,aAAa;CACb,YAAY;CACZ,QAAQ;CACR,eAAe;CACf,kBAAkB;CAClB,mBAAmB;CACnB,sBAAsB;CACtB,gCAAgC;CAChC,yBAAyB;AAC1B;AACA;CACC,OAAO;CACP,YAAY;CACZ,kBAAkB;CAClB,mBAAmB;CACnB,mBAAmB;CACnB,yBAAyB;CACzB,0BAA0B;CAC1B,6BAA6B;CAC7B,aAAa;CACb,YAAY;CACZ,cAAc;AACf;AACA;CACC,iBAAiB;CACjB,mBAAmB;CACnB,mBAAmB;CACnB,yBAAyB;CACzB,WAAW;CACX,aAAa;CACb,YAAY;AACb;AACA;CACC,eAAe;CACf,sBAAsB;AACvB;AACA;CACC,OAAO;CACP,aAAa;CACb,gBAAgB;AACjB;AACA;CACC,OAAO;AACR;;AAEA,iBAAiB;AACjB;CACC,OAAO;CACP,aAAa;CACb,oCAAoC;AACrC;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,yBAAyB;CACzB,OAAO;CACP,yBAAyB;CACzB,6BAA6B;AAC9B;AACA;;;CAGC,YAAY;AACb;AACA;CACC,YAAY;AACb;AACA;CACC,OAAO;CACP,kBAAkB;CAClB,aAAa;CACb,2BAA2B;CAC3B,8BAA8B;CAC9B,eAAe;CACf,yBAAyB;CACzB,SAAS;AACV;AACA;CACC,OAAO;CACP,2BAA2B;CAC3B,kBAAkB;CAClB,yBAAyB;AAC1B;AACA;CACC,kBAAkB;CAClB,0BAA0B;CAC1B,YAAY;AACb;AACA;CACC,gBAAgB;AACjB;AACA;CACC,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,mBAAmB;CACnB,4BAA4B;AAC7B;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,QAAQ;CACR,kBAAkB;CAClB,wCAAwC;AACzC;AACA;CACC,YAAY;CACZ,WAAW;CACX,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,yBAAyB;AAC1B;AACA;CACC,OAAO;CACP,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,kBAAkB;CAClB,cAAc;CACd,wCAAwC;AACzC;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,WAAW;CACX,QAAQ;CACR,kBAAkB;AACnB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,SAAS;AACV;AACA;CACC,aAAa;AACd;AACA;CACC,eAAe;AAChB;AACA;CACC,eAAe;AAChB;AACA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,2DAA2D;CAC3D,SAAS;AACV;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,oCAAoC;CACpC,kBAAkB;CAClB,mBAAmB;CACnB,cAAc;CACd,iBAAiB;CACjB,sBAAsB;CACtB,wCAAwC;CACxC,yBAAyB;CACzB,qCAAqC;AACtC;;AAEA,mCAAmC;AACnC;CACC;EACC,qBAAqB;CACtB;CACA;EACC,qBAAqB;CACtB;CACA;EACC,qBAAqB;CACtB;CACA;EACC,qBAAqB;CACtB;CACA;EACC,qBAAqB;CACtB;AACD;AACA;CACC,WAAW;CACX,YAAY;AACb;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,cAAc;CACd,yBAAyB;CACzB,iBAAiB;CACjB,yBAAyB;CACzB,OAAO;CACP,sBAAsB;AACvB;AACA;CACC,iBAAiB;CACjB,0BAA0B;CAC1B,kBAAkB;AACnB;AACA;CACC,aAAa;CACb,yBAAyB;CACzB,mBAAmB;AACpB;AACA;CACC,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA,mBAAmB;AACnB;CACC,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,6BAA6B;CAC7B,yBAAyB;AAC1B;;AAEA,4DAA4D;AAC5D;CACC;EACC,OAAO;EACP,aAAa;EACb,sBAAsB;CACvB;CACA;EACC,2BAA2B;CAC5B;CACA;EACC,2BAA2B;CAC5B;CACA;EACC,4BAA4B;CAC7B;AACD","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n.search-div > input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\nh1 {\n\tfont-size: 2rem;\n\tfont-family: monospace;\n}\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n}\n.today-data-div > div:first-of-type,\n.today-data-div > h2:first-of-type,\n.temp-div > * {\n\tcolor: white;\n}\n.weather-desc {\n\tcolor: white;\n}\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n}\n.watchlist-div > h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\nul {\n\tmargin-top: 10px;\n}\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n.add-button > input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n.add-button > input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n.city > div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n.city > div:first-of-type > img {\n\tmargin-right: 5px;\n}\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n.show-delete {\n\tvisibility: visible;\n}\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n.temperature-div {\n\tdisplay: flex;\n}\n.temperature {\n\tfont-size: 4rem;\n}\n.temperature > .super-script {\n\tfont-size: 2rem;\n}\n.desc-icon {\n\twidth: 75px;\n}\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n.minor-data-div > * {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tborder: 1px solid #ffacac;\n\tanimation: blinkingBorder 2s infinite;\n}\n\n/* A subtle blinking border color */\n@keyframes blinkingBorder {\n\t0% {\n\t\tborder-color: #422b19;\n\t}\n\t25% {\n\t\tborder-color: #553533;\n\t}\n\t50% {\n\t\tborder-color: #57032e;\n\t}\n\t70% {\n\t\tborder-color: #6c3154;\n\t}\n\t100% {\n\t\tborder-color: #37253d;\n\t}\n}\n.minor-data-div > * > img {\n\twidth: 25px;\n\theight: 25px;\n}\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n.card > div > p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\t.next-7days-div {\n\t\tpadding: 0px 20px 10px 20px;\n\t}\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n}"],"sourceRoot":""}]);
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
			_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData.apply(document.body, [
				addCityToWatchlist.bind(document),
				_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat,
				watchlistInput.value,
				false,
				_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName
			]);

	document.querySelectorAll(".city").forEach((cityList) => {
		if (
			e.target == cityList ||
			e.target == cityList.children[0] ||
			e.target == cityList.children[1] ||
			e.target == cityList.children[0].children[1] ||
			e.target == cityList.children[0].children[0]
		) {
			const city = cityList.childNodes[0].childNodes[1].textContent;
			(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(_fetch_data__WEBPACK_IMPORTED_MODULE_1__.getData, _fetch_data__WEBPACK_IMPORTED_MODULE_1__.getLonAndLat, city, false, _fetch_data__WEBPACK_IMPORTED_MODULE_1__.getCountryName);
		}
	});

	if (e.target === headerButton) {
		(0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.newName)(headerInput.value);
		(0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.setCityName)();
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
/* harmony export */   "getCountryName": () => (/* binding */ getCountryName),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getLonAndLat": () => (/* binding */ getLonAndLat),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-main */ "./src/page-main.js");
/* harmony import */ var _seven_days_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seven-days-forecast */ "./src/seven-days-forecast.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");




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
		.then((response) => callback(response, headerInput));
}

function getData(response, headerInput) {
	const todayDataDiv = document.body.childNodes[2].childNodes[0],
		next7DaysDiv = document.body.childNodes[2].childNodes[1];
	clearData(todayDataDiv);
	clearData(next7DaysDiv);
	displayWeatherReport.call(this, response);
	display7DaysForecast(response);
	if (headerInput.value) headerInput.value = "";
}

function clearData(div) {
	while (div.firstChild) div.removeChild(div.firstChild);
}

function display7DaysForecast(response) {
	for (let i = 1; i < response.daily.length; i++)
		(0,_seven_days_forecast__WEBPACK_IMPORTED_MODULE_1__.createForecastCard)(response.daily[i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxh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QUMsb0RBQVE7QUFDVDtBQUNBLENBQUMsdURBQWM7QUFDZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2l0eS13YXRjaGxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NyZWF0ZS1kb20tZWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcGFnZS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcGFnZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcGFnZS1tYWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NldmVuLWRheXMtZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHBhZGRpbmc6IDIwcHggNTBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuLnNlYXJjaC1kaXYgPiBpbnB1dCB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiAjZWRhZWFlO1xcbn1cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xcblxcdGNvbG9yOiBzbm93O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5zZWFyY2gtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiA2MDBweDtcXG59XFxuLnRpdGxlLWRpdiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nICovXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjsgKi9cXG59XFxuLnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogNXB4IDVweCAwcHggMjBweDtcXG5cXHRmbGV4OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi50b2RheS1kYXRhLWRpdiA+IGRpdjpmaXJzdC1vZi10eXBlLFxcbi50b2RheS1kYXRhLWRpdiA+IGgyOmZpcnN0LW9mLXR5cGUsXFxuLnRlbXAtZGl2ID4gKiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG4ud2VhdGhlci1kZXNjIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbi5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDIwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGdhcDogMTBweDtcXG59XFxuLndhdGNobGlzdC1kaXYge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMTVweCAyMHB4IDVweCAxMHB4O1xcblxcdGdyaWQtYXJlYTogMS8yLzMvMztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcbn1cXG4ud2F0Y2hsaXN0LWRpdiA+IGgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG51bCB7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxubGkge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXHRwYWRkaW5nOiAyMHB4IDEwcHg7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCk7XFxufVxcbi5hZGQtYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1yaWdodDogMzBweDtcXG5cXHRnYXA6IDVweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDIzMyAxODQgMTg0IC8gNTAlKTtcXG59XFxuLmFkZC1idXR0b24gPiBpbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuLmFkZC1idXR0b24gPiBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG5cXHRmbGV4OiAxO1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcbi5jaXR5IHtcXG5cXHRwYWRkaW5nOiA3cHggMzBweCA3cHggN3B4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGNvbG9yOiAjZmZlYmNlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcbi5jaXR5ID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNpdHkgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IGltZyB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5kZWxldGUge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMTBweDtcXG5cXHR0b3A6IDVweDtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5zaG93LWRlbGV0ZSB7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnRlbXAtcmFuZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG4udGVtcGVyYXR1cmUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLnRlbXBlcmF0dXJlID4gLnN1cGVyLXNjcmlwdCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG4uZGVzYy1pY29uIHtcXG5cXHR3aWR0aDogNzVweDtcXG59XFxuLm1pbm9yLWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xcblxcdGdhcDogMjBweDtcXG59XFxuLm1pbm9yLWRhdGEtZGl2ID4gKiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6ICMxYTAwMmE7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bWluLXdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA1MCUpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZmFjYWM7XFxuXFx0YW5pbWF0aW9uOiBibGlua2luZ0JvcmRlciAycyBpbmZpbml0ZTtcXG59XFxuXFxuLyogQSBzdWJ0bGUgYmxpbmtpbmcgYm9yZGVyIGNvbG9yICovXFxuQGtleWZyYW1lcyBibGlua2luZ0JvcmRlciB7XFxuXFx0MCUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogIzQyMmIxOTtcXG5cXHR9XFxuXFx0MjUlIHtcXG5cXHRcXHRib3JkZXItY29sb3I6ICM1NTM1MzM7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjNTcwMzJlO1xcblxcdH1cXG5cXHQ3MCUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogIzZjMzE1NDtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjMzcyNTNkO1xcblxcdH1cXG59XFxuLm1pbm9yLWRhdGEtZGl2ID4gKiA+IGltZyB7XFxuXFx0d2lkdGg6IDI1cHg7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcbn1cXG4uY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGNvbG9yOiAjZWJjYWNhO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2U5YjhiODtcXG5cXHRmbGV4OiAxO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5jYXJkID4gZGl2ID4gcDpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxufVxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mZWVscy1saWtlLXRlbXAge1xcblxcdG1hcmdpbi10b3A6IC0xNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuZm9vdGVyIHtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDUxYjFiO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi8qIFVzZXMgZmxleC1kaXJlY3Rpb24gY29sdW1uIGZvciBzY3JlZW4gc2l6ZXMgYmVsb3cgNjAwcHggKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXHQudG9kYXktZGF0YS1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFx0Lm5leHQtN2RheXMtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcdC53YXRjaGxpc3QtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCOztBQUVBLG1CQUFtQjtBQUNuQjtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osUUFBUTtDQUNSLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixnQ0FBZ0M7Q0FDaEMseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxPQUFPO0NBQ1AsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0NBQzdCLGFBQWE7Q0FDYixZQUFZO0NBQ1osY0FBYztBQUNmO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGFB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QixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLDZCQUE2QjtDQUM3Qix5QkFBeUI7QUFDMUI7O0FBRUEsNERBQTREO0FBQzVEO0NBQ0M7RUFDQyxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtDQUN2QjtDQUNBO0VBQ0MsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHBhZGRpbmc6IDIwcHggNTBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuLnNlYXJjaC1kaXYgPiBpbnB1dCB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiAjZWRhZWFlO1xcbn1cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xcblxcdGNvbG9yOiBzbm93O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5zZWFyY2gtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiA2MDBweDtcXG59XFxuLnRpdGxlLWRpdiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nICovXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjsgKi9cXG59XFxuLnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogNXB4IDVweCAwcHggMjBweDtcXG5cXHRmbGV4OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi50b2RheS1kYXRhLWRpdiA+IGRpdjpmaXJzdC1vZi10eXBlLFxcbi50b2RheS1kYXRhLWRpdiA+IGgyOmZpcnN0LW9mLXR5cGUsXFxuLnRlbXAtZGl2ID4gKiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG4ud2VhdGhlci1kZXNjIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbi5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDIwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGdhcDogMTBweDtcXG59XFxuLndhdGNobGlzdC1kaXYge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMTVweCAyMHB4IDVweCAxMHB4O1xcblxcdGdyaWQtYXJlYTogMS8yLzMvMztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcbn1cXG4ud2F0Y2hsaXN0LWRpdiA+IGgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG51bCB7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxubGkge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXHRwYWRkaW5nOiAyMHB4IDEwcHg7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCk7XFxufVxcbi5hZGQtYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1yaWdodDogMzBweDtcXG5cXHRnYXA6IDVweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDIzMyAxODQgMTg0IC8gNTAlKTtcXG59XFxuLmFkZC1idXR0b24gPiBpbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuLmFkZC1idXR0b24gPiBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG5cXHRmbGV4OiAxO1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcbi5jaXR5IHtcXG5cXHRwYWRkaW5nOiA3cHggMzBweCA3cHggN3B4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGNvbG9yOiAjZmZlYmNlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcbi5jaXR5ID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNpdHkgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IGltZyB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5kZWxldGUge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMTBweDtcXG5cXHR0b3A6IDVweDtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5zaG93LWRlbGV0ZSB7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnRlbXAtcmFuZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG4udGVtcGVyYXR1cmUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLnRlbXBlcmF0dXJlID4gLnN1cGVyLXNjcmlwdCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG4uZGVzYy1pY29uIHtcXG5cXHR3aWR0aDogNzVweDtcXG59XFxuLm1pbm9yLWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xcblxcdGdhcDogMjBweDtcXG59XFxuLm1pbm9yLWRhdGEtZGl2ID4gKiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6ICMxYTAwMmE7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bWluLXdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA1MCUpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZmFjYWM7XFxuXFx0YW5pbWF0aW9uOiBibGlua2luZ0JvcmRlciAycyBpbmZpbml0ZTtcXG59XFxuXFxuLyogQSBzdWJ0bGUgYmxpbmtpbmcgYm9yZGVyIGNvbG9yICovXFxuQGtleWZyYW1lcyBibGlua2luZ0JvcmRlciB7XFxuXFx0MCUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogIzQyMmIxOTtcXG5cXHR9XFxuXFx0MjUlIHtcXG5cXHRcXHRib3JkZXItY29sb3I6ICM1NTM1MzM7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjNTcwMzJlO1xcblxcdH1cXG5cXHQ3MCUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogIzZjMzE1NDtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjMzcyNTNkO1xcblxcdH1cXG59XFxuLm1pbm9yLWRhdGEtZGl2ID4gKiA+IGltZyB7XFxuXFx0d2lkdGg6IDI1cHg7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcbn1cXG4uY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGNvbG9yOiAjZWJjYWNhO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2U5YjhiODtcXG5cXHRmbGV4OiAxO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5jYXJkID4gZGl2ID4gcDpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxufVxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mZWVscy1saWtlLXRlbXAge1xcblxcdG1hcmdpbi10b3A6IC0xNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuZm9vdGVyIHtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDUxYjFiO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi8qIFVzZXMgZmxleC1kaXJlY3Rpb24gY29sdW1uIGZvciBzY3JlZW4gc2l6ZXMgYmVsb3cgNjAwcHggKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXHQudG9kYXktZGF0YS1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFx0Lm5leHQtN2RheXMtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcdC53YXRjaGxpc3QtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQge1xuXHRnZXRDb3VudHJ5TmFtZSxcblx0Z2V0RGF0YSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRnZXRXZWF0aGVyRGF0YSxcbn0gZnJvbSBcIi4vZmV0Y2gtZGF0YVwiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIi4vaWNvbnMvYWRkY2l0eS5wbmdcIjtcbmltcG9ydCBEZWxldGUgZnJvbSBcIi4vaWNvbnMvZGVsZXRlLnBuZ1wiO1xuaW1wb3J0IHtcblx0bmV3TmFtZSxcblx0c2V0Q2l0eU5hbWUsXG5cdHNldHdhdGNobGlzdEFycmF5LFxuXHR3YXRjaGxpc3RBcnJheSxcbn0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiB3YXRjaGxpc3QoKSB7XG5cdGNvbnN0IHdhdGNobGlzdERpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLFxuXHRcdHdhdGNobGlzdEhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiKSxcblx0XHRjaXR5TGlzdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRhZGRDaXR5QnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudChcImxpXCIsIHsgY2xhc3M6IFwiYWRkLWJ1dHRvblwiIH0pLFxuXHRcdHdhdGNobGlzdElucHV0ID0gY3JlYXRlRG9tRWxlbWVudChcImlucHV0XCIsIHtcblx0XHRcdGNsYXNzOiBcIndhdGNobGlzdC1pbnB1dFwiLFxuXHRcdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkFkZCBDaXR5XCIsXG5cdFx0fSksXG5cdFx0TXlBZGRJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImFkZC1pY29uXCIsIHNyYzogQWRkSWNvbiB9KTtcblxuXHRhZGRDaXR5QnV0dG9uLmFwcGVuZChNeUFkZEljb24sIHdhdGNobGlzdElucHV0KTtcblx0d2F0Y2hsaXN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJXYXRjaGxpc3RcIjtcblx0Y2l0eUxpc3QuYXBwZW5kKGFkZENpdHlCdXR0b24pO1xuXHR3YXRjaGxpc3REaXYuYXBwZW5kKHdhdGNobGlzdEhlYWRlciwgY2l0eUxpc3QpO1xufVxuXG5mdW5jdGlvbiBhZGRDaXR5VG9XYXRjaGxpc3QocmVzcG9uc2UpIHtcblx0Y29uc3QgYWRkQ2l0eUJ1dHRvbiA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZCxcblx0XHRjaXR5TGlzdCA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0sXG5cdFx0d2F0Y2hsaXN0SW5wdXQgPSBhZGRDaXR5QnV0dG9uLmNoaWxkcmVuWzFdLFxuXHRcdGljb25BbmRDaXR5TmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0Y2l0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcImNpdHlcIiB9KSxcblx0XHR0ZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0Y2l0eU5hbWUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHRkZXNjSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0bXlEZWxldGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgY2xhc3M6IFwiZGVsZXRlXCIsIHNyYzogRGVsZXRlIH0pO1xuXG5cdGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7d2F0Y2hsaXN0SW5wdXQudmFsdWV9YDtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KSBpY29uQW5kQ2l0eU5hbWUuYXBwZW5kKGRlc2NJY29uLCBjaXR5TmFtZSk7XG5cdGVsc2UgaWNvbkFuZENpdHlOYW1lLmFwcGVuZChkZXNjSWNvbiwgdGhpcyk7XG5cblx0dGVtcC5hcHBlbmQoYCAke3Jlc3BvbnNlLmN1cnJlbnQudGVtcH1gKTtcblx0Z2V0SWNvbkFuZFRlbXAoY2l0eSwgaWNvbkFuZENpdHlOYW1lLCBkZXNjSWNvbiwgcmVzcG9uc2UsIHRlbXAsIG15RGVsZXRlKTtcblx0Y2l0eUxpc3QuaW5zZXJ0QmVmb3JlKGNpdHksIGFkZENpdHlCdXR0b24pO1xuXHRhZGRFdmVudExpc3RlbmVyVG9DaXR5KG15RGVsZXRlLCBjaXR5KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvQ2l0eShteURlbGV0ZSwgY2l0eSkge1xuXHRteURlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGxldCBsaXN0QXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKSk7XG5cdFx0bGV0IGluZGV4T2ZDaXR5ID0gbGlzdEFycmF5LmluZGV4T2YobXlEZWxldGUucGFyZW50Tm9kZSk7XG5cdFx0d2F0Y2hsaXN0QXJyYXkuc3BsaWNlKGluZGV4T2ZDaXR5LCAxKTtcblx0XHRzZXR3YXRjaGxpc3RBcnJheSgpO1xuXHRcdG15RGVsZXRlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChteURlbGV0ZS5wYXJlbnROb2RlKTtcblx0fSk7XG5cdGNpdHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT5cblx0XHRteURlbGV0ZS5jbGFzc0xpc3QuYWRkKFwic2hvdy1kZWxldGVcIilcblx0KTtcblx0Y2l0eS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PlxuXHRcdG15RGVsZXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWRlbGV0ZVwiKVxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uQW5kVGVtcChcblx0Y2l0eSxcblx0aWNvbkFuZENpdHlOYW1lLFxuXHRkZXNjSWNvbixcblx0cmVzcG9uc2UsXG5cdHRlbXAsXG5cdG15RGVsZXRlXG4pIHtcblx0Y29uc3Qgd2F0Y2hsaXN0SW5wdXQgPVxuXHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkXG5cdFx0XHQuY2hpbGROb2Rlc1sxXTtcblx0Y2l0eS5hcHBlbmQoaWNvbkFuZENpdHlOYW1lLCB0ZW1wLCBteURlbGV0ZSk7XG5cdGRlc2NJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3Jlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5pY29ufS5wbmdgO1xuXHR3YXRjaGxpc3RJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9CdXR0b24oKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRFdmVudExpc3RlbmVycyk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGUpIHtcblx0Y29uc3QgYWRkQ2l0eUJ1dHRvbiA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZCxcblx0XHRoZWFkZXJJbnB1dCA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0sXG5cdFx0aGVhZGVyQnV0dG9uID0gZG9jdW1lbnQuYm9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSxcblx0XHR3YXRjaGxpc3RJbnB1dCA9IGFkZENpdHlCdXR0b24uY2hpbGROb2Rlc1sxXTtcblxuXHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiYWRkLWljb25cIilcblx0XHR3YXRjaGxpc3RJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCJcblx0XHRcdD8gZmFsc2Vcblx0XHRcdDogd2F0Y2hsaXN0QXJyYXkucHVzaCh3YXRjaGxpc3RJbnB1dC52YWx1ZSksXG5cdFx0XHRzZXR3YXRjaGxpc3RBcnJheSgpLFxuXHRcdFx0Z2V0V2VhdGhlckRhdGEuYXBwbHkoZG9jdW1lbnQuYm9keSwgW1xuXHRcdFx0XHRhZGRDaXR5VG9XYXRjaGxpc3QuYmluZChkb2N1bWVudCksXG5cdFx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdFx0d2F0Y2hsaXN0SW5wdXQudmFsdWUsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRnZXRDb3VudHJ5TmFtZVxuXHRcdFx0XSk7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpLmZvckVhY2goKGNpdHlMaXN0KSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QgfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdIHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblsxXSB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0gfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0KSB7XG5cdFx0XHRjb25zdCBjaXR5ID0gY2l0eUxpc3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXHRcdFx0Z2V0V2VhdGhlckRhdGEoZ2V0RGF0YSwgZ2V0TG9uQW5kTGF0LCBjaXR5LCBmYWxzZSwgZ2V0Q291bnRyeU5hbWUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKGUudGFyZ2V0ID09PSBoZWFkZXJCdXR0b24pIHtcblx0XHRuZXdOYW1lKGhlYWRlcklucHV0LnZhbHVlKTtcblx0XHRzZXRDaXR5TmFtZSgpO1xuXHRcdGdldFdlYXRoZXJEYXRhKFxuXHRcdFx0Z2V0RGF0YSxcblx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdGhlYWRlcklucHV0LnZhbHVlLFxuXHRcdFx0aGVhZGVySW5wdXQsXG5cdFx0XHRnZXRDb3VudHJ5TmFtZVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVsYXlFeGVjdXRpb24oY2l0eSkge1xuXHRjb25zdCBmZXRjaE5vdyA9IGdldFdlYXRoZXJEYXRhKFxuXHRcdGFkZENpdHlUb1dhdGNobGlzdC5iaW5kKGNpdHkpLFxuXHRcdGdldExvbkFuZExhdCxcblx0XHRjaXR5LFxuXHRcdGZhbHNlLFxuXHRcdGdldENvdW50cnlOYW1lXG5cdCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShmZXRjaE5vdyksIDEyMDApO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCgpIHtcblx0aWYgKHdhdGNobGlzdEFycmF5Lmxlbmd0aCA+IDApXG5cdFx0Zm9yIChjb25zdCBjaXR5IG9mIHdhdGNobGlzdEFycmF5KSB7XG5cdFx0XHRhd2FpdCBkZWxheUV4ZWN1dGlvbihjaXR5KTtcblx0XHR9XG59XG5cbmV4cG9ydCB7XG5cdHdhdGNobGlzdCxcblx0YWRkTGlzdGVuZXJUb0J1dHRvbixcblx0YWRkQ2l0eVRvV2F0Y2hsaXN0LFxuXHRkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0LFxufTtcbiIsImV4cG9ydCBjb25zdCBBUElfVE9LRU4gPSB7XG5cdEtFWTogXCJjOTNmZDE4MTdmM2ZiZTQyYWVhYzBhNjMwNzY2MDNiOVwiLFxuXHRLRVkyOiBcIjBhZDcxM2ZhYzEyMGI4M2JkOTA3MjYxZmI3NzQyZmQ3XCIsXG5cdEtFWTM6IFwiMjBmNzYzMmZmYzJjMDIyNjU0ZTQwOTNjNjk0N2I0ZjRcIixcbn07IiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIERPTSBFbGVtZW50c1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQodHlwZSwgYXR0cmlidXRlcykge1xuXHRjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuXHRpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcblx0c2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHRPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblx0fSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfTsiLCJpbXBvcnQgeyBkYXRhRGlzcGxheSwgbWlub3JEYXRhUmVwb3J0LCBzdXBlclNjcmlwdCB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuaW1wb3J0IHsgY3JlYXRlRm9yZWNhc3RDYXJkIH0gZnJvbSBcIi4vc2V2ZW4tZGF5cy1mb3JlY2FzdFwiO1xuaW1wb3J0IHsgQVBJX1RPS0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbmxldCBjb3VudHJ5QW5kQ2l0eU5hbWU7XG5sZXQgY291bnRyeUFuZENpdHlOYW1lMjtcbmNvbnN0IGV4Y2x1ZGUgPSBgJnVuaXRzPW1ldHJpYyZBUFBJRD0ke0FQSV9UT0tFTi5LRVl9YCxcblx0ZXhjbHVkZTIgPSBgJmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtBUElfVE9LRU4uS0VZfWA7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGZ1bmMsIGNiLCBjaXR5TmFtZSwgaGVhZGVySW5wdXQsIGdldE5hbWUpIHtcblx0ZmV0Y2goXG5cdFx0YGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0ke2V4Y2x1ZGV9YCxcblx0XHR7XG5cdFx0XHRtb2RlOiBcImNvcnNcIixcblx0XHR9XG5cdClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGNvbnN0IHsgbGF0IH0gPSByZXNwb25zZS5jb29yZDtcblx0XHRcdGNvbnN0IHsgbG9uIH0gPSByZXNwb25zZS5jb29yZDtcblx0XHRcdGdldE5hbWUuY2FsbCh0aGlzLCByZXNwb25zZSk7XG5cdFx0XHRjYihsYXQsIGxvbiwgZnVuYywgaGVhZGVySW5wdXQpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9uQW5kTGF0KGxhdCwgbG9uLCBjYWxsYmFjaywgaGVhZGVySW5wdXQpIHtcblx0bmV4dDdEYXlzRm9yZWNhc3QobGF0LCBsb24sIGNhbGxiYWNrLCBoZWFkZXJJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIG5leHQ3RGF5c0ZvcmVjYXN0KGxhdCwgbG9uLCBjYWxsYmFjaywgaGVhZGVySW5wdXQpIHtcblx0ZmV0Y2goXG5cdFx0YGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSR7ZXhjbHVkZTJ9YFxuXHQpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSwgaGVhZGVySW5wdXQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShyZXNwb25zZSwgaGVhZGVySW5wdXQpIHtcblx0Y29uc3QgdG9kYXlEYXRhRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0sXG5cdFx0bmV4dDdEYXlzRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV07XG5cdGNsZWFyRGF0YSh0b2RheURhdGFEaXYpO1xuXHRjbGVhckRhdGEobmV4dDdEYXlzRGl2KTtcblx0ZGlzcGxheVdlYXRoZXJSZXBvcnQuY2FsbCh0aGlzLCByZXNwb25zZSk7XG5cdGRpc3BsYXk3RGF5c0ZvcmVjYXN0KHJlc3BvbnNlKTtcblx0aWYgKGhlYWRlcklucHV0LnZhbHVlKSBoZWFkZXJJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGF0YShkaXYpIHtcblx0d2hpbGUgKGRpdi5maXJzdENoaWxkKSBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5N0RheXNGb3JlY2FzdChyZXNwb25zZSkge1xuXHRmb3IgKGxldCBpID0gMTsgaSA8IHJlc3BvbnNlLmRhaWx5Lmxlbmd0aDsgaSsrKVxuXHRcdGNyZWF0ZUZvcmVjYXN0Q2FyZChyZXNwb25zZS5kYWlseVtpXSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyUmVwb3J0KHJlc3BvbnNlKSB7XG5cdGNvbnN0IFtcblx0XHR3ZWF0aGVyRGVzYyxcblx0XHRkZXNjSWNvbixcblx0XHRuYW1lT2ZDaXR5LFxuXHRcdHRlbXBlcmF0dXJlLFxuXHRcdGxvd1RlbXAsXG5cdFx0aGlnaFRlbXAsXG5cdFx0ZmVlbHNMaWtlVGVtcCxcblx0XSA9IGRhdGFEaXNwbGF5KCk7XG5cdGNvbnN0IFt3aW5kLCBkZXdQb2ludCwgdGltZVpvbmUsIHV2SW5kZXgsIHByZXNzdXJlLCBodW1pZGl0eV0gPVxuXHRcdG1pbm9yRGF0YVJlcG9ydCgpO1xuXG5cdGlmICh0aGlzID09PSBkb2N1bWVudCkgbmFtZU9mQ2l0eS50ZXh0Q29udGVudCA9IGNvdW50cnlBbmRDaXR5TmFtZTtcblx0ZWxzZSBuYW1lT2ZDaXR5LnRleHRDb250ZW50ID0gY291bnRyeUFuZENpdHlOYW1lMjtcblx0d2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcblx0bG93VGVtcC5hcHBlbmQoXCJMb3c6IFwiLCBwYXJzZUludChyZXNwb25zZS5kYWlseVswXS50ZW1wLm1pbiksIHN1cGVyU2NyaXB0KCkpO1xuXHRoaWdoVGVtcC5hcHBlbmQoXG5cdFx0XCJIaWdoOiBcIixcblx0XHRwYXJzZUludChyZXNwb25zZS5kYWlseVswXS50ZW1wLm1heCksXG5cdFx0c3VwZXJTY3JpcHQoKVxuXHQpO1xuXHR0ZW1wZXJhdHVyZS5hcHBlbmQocGFyc2VJbnQocmVzcG9uc2UuY3VycmVudC50ZW1wKSwgc3VwZXJTY3JpcHQoKSk7XG5cdGZlZWxzTGlrZVRlbXAuYXBwZW5kKFxuXHRcdFwiRmVlbHMgTGlrZSBcIixcblx0XHRwYXJzZUludChyZXNwb25zZS5jdXJyZW50LmZlZWxzX2xpa2UpLFxuXHRcdHN1cGVyU2NyaXB0KClcblx0KTtcblx0d2luZC5hcHBlbmQoYFdpbmQgU3BlZWQ6ICR7cmVzcG9uc2UuY3VycmVudC53aW5kX3NwZWVkfWApO1xuXHRkZXdQb2ludC5hcHBlbmQoYERldyBQb2ludDogJHtyZXNwb25zZS5jdXJyZW50LmRld19wb2ludH1gKTtcblx0dGltZVpvbmUuYXBwZW5kKGB0aW1lIFpvbmU6ICR7cmVzcG9uc2UudGltZXpvbmV9YCk7XG5cdHV2SW5kZXguYXBwZW5kKGBVViBJbmRleDogJHtyZXNwb25zZS5jdXJyZW50LnV2aX1gKTtcblx0cHJlc3N1cmUuYXBwZW5kKGBQcmVzc3VyZTogJHtyZXNwb25zZS5jdXJyZW50LnByZXNzdXJlfWApO1xuXHRodW1pZGl0eS5hcHBlbmQoYEh1bWlkaXR5OiAke3Jlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHl9YCk7XG5cdGRlc2NJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3Jlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5pY29ufS5wbmdgO1xufVxuXG5mdW5jdGlvbiBnZXRDb3VudHJ5TmFtZShyZXNwb25zZSkge1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQpIHtcblx0XHRjb25zdCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbXCJlblwiXSwgeyB0eXBlOiBcInJlZ2lvblwiIH0pO1xuXHRcdGNvbnN0IGNvdW50cnlOYW1lID0gcmVnaW9uTmFtZXMub2YocmVzcG9uc2Uuc3lzLmNvdW50cnkpO1xuXHRcdGlmIChjb3VudHJ5TmFtZSA9PSByZXNwb25zZS5uYW1lKSBjb3VudHJ5QW5kQ2l0eU5hbWUgPSBjb3VudHJ5TmFtZTtcblx0XHRlbHNlIGNvdW50cnlBbmRDaXR5TmFtZSA9IGAke3Jlc3BvbnNlLm5hbWV9LCAke2NvdW50cnlOYW1lfS5gO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFtcImVuXCJdLCB7IHR5cGU6IFwicmVnaW9uXCIgfSk7XG5cdFx0Y29uc3QgY291bnRyeU5hbWUgPSByZWdpb25OYW1lcy5vZihyZXNwb25zZS5zeXMuY291bnRyeSk7XG5cdFx0aWYgKGNvdW50cnlOYW1lID09IHJlc3BvbnNlLm5hbWUpIGNvdW50cnlBbmRDaXR5TmFtZTIgPSBjb3VudHJ5TmFtZTtcblx0XHRlbHNlIGNvdW50cnlBbmRDaXR5TmFtZTIgPSBgJHtyZXNwb25zZS5uYW1lfSwgJHtjb3VudHJ5TmFtZX0uYDtcblx0fVxufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0TG9uQW5kTGF0LCBnZXREYXRhLCBnZXRDb3VudHJ5TmFtZSB9OyIsImlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlOYW1lXCIpID09PSBudWxsKVxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlOYW1lXCIsIEpTT04uc3RyaW5naWZ5KFwiUG9ydCBIYXJjb3VydFwiKSk7XG5cbmxldCBjaXR5TmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5TmFtZVwiKSk7XG5cbmZ1bmN0aW9uIG5ld05hbWUoc2V0TmFtZSkge1xuXHRjaXR5TmFtZSA9IHNldE5hbWU7XG59XG5cbmZ1bmN0aW9uIHNldENpdHlOYW1lKCkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlOYW1lXCIsIEpTT04uc3RyaW5naWZ5KGNpdHlOYW1lKSk7XG59XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIpID09IG51bGwpXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxubGV0IHdhdGNobGlzdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIpKTtcblxuZnVuY3Rpb24gc2V0d2F0Y2hsaXN0QXJyYXkoKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkod2F0Y2hsaXN0QXJyYXkpKTtcbn1cblxuZXhwb3J0IHsgY2l0eU5hbWUsIHNldENpdHlOYW1lLCBuZXdOYW1lLCB3YXRjaGxpc3RBcnJheSwgc2V0d2F0Y2hsaXN0QXJyYXkgfTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5cbi8qKlxuICogRnVuY3Rpb24gZm9yIGNyZWF0aW5nIGZvb3RlclxuICovXG5mdW5jdGlvbiBjcmVhdGVmb290ZXIoKSB7XG5cdGNvbnN0IGZvb3RlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJmb290ZXJcIik7XG5cdGNvbnN0IGFuY2hvckxpbmsgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vSUFtWW91bmdib3NzeS93ZWF0aGVyLWFwcFwiLFxuXHR9KTtcblx0Y29uc3QgZ2l0SHViSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpXCIsIHsgZmE6IFwiZmEtZ2l0aHViXCIgfSk7XG5cdGNvbnN0IGljb25zQ3JlZGl0ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGZsYXRJY29uQW5jaG9yID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuXHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0XHRocmVmOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIixcblx0fSk7XG5cdGNvbnN0IGljb25zOEFuY2hvciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJhXCIsIHtcblx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0aHJlZjogXCJodHRwczovL2ljb25zOC5jb20vXCIsXG5cdH0pO1xuXG5cdGZsYXRJY29uQW5jaG9yLnRleHRDb250ZW50ID0gXCIgRmxhdGljb24gXCI7XG5cdGljb25zOEFuY2hvci50ZXh0Q29udGVudCA9IFwiIEljb25zOCBcIjtcblx0aWNvbnNDcmVkaXQuYXBwZW5kKFwiSWNvbnMgYnlcIiwgZmxhdEljb25BbmNob3IsIFwiICYgXCIsIGljb25zOEFuY2hvcik7XG5cdGFuY2hvckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViSWNvbik7XG5cdGZvb3Rlci5hcHBlbmQoXG5cdFx0XCJDb3B5cmlnaHQgXFx1MDBBOSAyMDIyIElBbVlvdW5nYm9zc3lcIixcblx0XHRcIiAgXCIsXG5cdFx0YW5jaG9yTGluayxcblx0XHRpY29uc0NyZWRpdFxuXHQpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZWZvb3RlciB9OyIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXHRjb25zdCBoZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaGVhZGVyXCIpO1xuXHRjb25zdCBzZWFyY2hEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwic2VhcmNoLWRpdlwiIH0pO1xuXHRjb25zdCBzZWFyY2hCYXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaW5wdXRcIiwge1xuXHRcdHR5cGU6IFwic2VhcmNoXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgQ2l0eSBOYW1lXCIsXG5cdH0pO1xuXHRjb25zdCBzZWFyY2hCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiB9KTtcblx0Y29uc3QgaGVhZGVyVGl0bGVEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGl0bGUtZGl2XCIgfSk7XG5cdGNvbnN0IGhlYWRlclRpdGxlID0gY3JlYXRlRG9tRWxlbWVudChcImgxXCIpO1xuXG5cdHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG5cdGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJDaXR5V2F0Y2hcIjtcblxuXHRzZWFyY2hEaXYuYXBwZW5kKHNlYXJjaEJhciwgc2VhcmNoQnV0dG9uKTtcblx0aGVhZGVyVGl0bGVEaXYuYXBwZW5kKGhlYWRlclRpdGxlKTtcblx0aGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZURpdiwgc2VhcmNoRGl2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIi4vaWNvbnMvZGF0ZS5wbmdcIjtcbmltcG9ydCBIdW1pZGl0eSBmcm9tIFwiLi9pY29ucy9odW1pZGl0eS5wbmdcIjtcbmltcG9ydCBQcmVzc3VyZSBmcm9tIFwiLi9pY29ucy9wcmVzc3VyZS5wbmdcIjtcbmltcG9ydCBUaW1lem9uZSBmcm9tIFwiLi9pY29ucy90aW1lem9uZS5wbmdcIjtcbmltcG9ydCBXaW5kIGZyb20gXCIuL2ljb25zL3dpbmQucG5nXCI7XG5pbXBvcnQgU2VhTGV2ZWwgZnJvbSBcIi4vaWNvbnMvc2VhbGV2ZWwucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50cygpIHtcblx0Y29uc3QgbWFpbkRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJtYWluXCIsIHsgY2xhc3M6IFwibWFpblwiIH0pO1xuXHRjcmVhdGVUb2RheUZvcmVjYXN0Q29udGFpbmVyKG1haW5EaXYpO1xuXHRjcmVhdGVOZXh0ZGF5c0NvbnRhaW5lckRpdihtYWluRGl2KTtcblx0Z2V0V2F0Y2hsaXN0KG1haW5EaXYpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kYXlGb3JlY2FzdENvbnRhaW5lcihtYWluRGl2KSB7XG5cdGNvbnN0IHRvZGF5RGF0YURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2RheS1kYXRhLWRpdlwiIH0pO1xuXHRtYWluRGl2LmFwcGVuZCh0b2RheURhdGFEaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0ZGF5c0NvbnRhaW5lckRpdihtYWluRGl2KSB7XG5cdGNvbnN0IG5leHQ3RGF5c0RpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJuZXh0LTdkYXlzLWRpdlwiIH0pO1xuXHRtYWluRGl2LmFwcGVuZChuZXh0N0RheXNEaXYpO1xufVxuXG5mdW5jdGlvbiBnZXRXYXRjaGxpc3QobWFpbkRpdikge1xuXHRjb25zdCB3YXRjaGxpc3REaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2F0Y2hsaXN0LWRpdlwiIH0pO1xuXHRtYWluRGl2LmFwcGVuZCh3YXRjaGxpc3REaXYpO1xufVxuXG5mdW5jdGlvbiBtaW5vckRhdGFSZXBvcnQoKSB7XG5cdGNvbnN0IG1pbm9yRGF0YURpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbM10sXG5cdFx0d2luZERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ3aW5kLWRpdlwiIH0pLFxuXHRcdHdpbmQgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIndpbmRcIiB9KSxcblx0XHRkZXdQb2ludERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXctcG9pbnQtZGl2XCIgfSksXG5cdFx0ZGV3UG9pbnQgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImRldy1wb2ludFwiIH0pLFxuXHRcdHRpbWVab25lRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRpbWUtem9uZS1kaXZcIiB9KSxcblx0XHR0aW1lWm9uZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidGltZS16b25lXCIgfSksXG5cdFx0dXZJbmRleERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ1di1pbmRleC1kaXZcIiB9KSxcblx0XHR1dkluZGV4ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ1di1pbmRleFwiIH0pLFxuXHRcdHByZXNzdXJlRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInByZXNzdXJlLWRpdlwiIH0pLFxuXHRcdHByZXNzdXJlID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJwcmVzc3VyZVwiIH0pLFxuXHRcdGh1bWlkaXR5RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImh1bWlkaXR5LWRpdlwiIH0pLFxuXHRcdGh1bWlkaXR5ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJodW1pZGl0eVwiIH0pLFxuXHRcdE15RGF0ZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IERhdGUgfSksXG5cdFx0TXlIdW1pZGl0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IEh1bWlkaXR5IH0pLFxuXHRcdE15UHJlc3N1cmUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBQcmVzc3VyZSB9KSxcblx0XHRNeVRpbWV6b25lID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogVGltZXpvbmUgfSksXG5cdFx0TXlTZWFMZXZlbCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFNlYUxldmVsIH0pLFxuXHRcdE15V2luZCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFdpbmQgfSk7XG5cblx0d2luZERpdi5hcHBlbmQoTXlXaW5kLCB3aW5kKTtcblx0ZGV3UG9pbnREaXYuYXBwZW5kKE15U2VhTGV2ZWwsIGRld1BvaW50KTtcblx0dGltZVpvbmVEaXYuYXBwZW5kKE15VGltZXpvbmUsIHRpbWVab25lKTtcblx0dXZJbmRleERpdi5hcHBlbmQoTXlEYXRlLCB1dkluZGV4KTtcblx0cHJlc3N1cmVEaXYuYXBwZW5kKE15UHJlc3N1cmUsIHByZXNzdXJlKTtcblx0aHVtaWRpdHlEaXYuYXBwZW5kKE15SHVtaWRpdHksIGh1bWlkaXR5KTtcblx0bWlub3JEYXRhRGl2LmFwcGVuZChcblx0XHR3aW5kRGl2LFxuXHRcdGRld1BvaW50RGl2LFxuXHRcdHRpbWVab25lRGl2LFxuXHRcdHV2SW5kZXhEaXYsXG5cdFx0cHJlc3N1cmVEaXYsXG5cdFx0aHVtaWRpdHlEaXZcblx0KTtcblx0cmV0dXJuIFt3aW5kLCBkZXdQb2ludCwgdGltZVpvbmUsIHV2SW5kZXgsIHByZXNzdXJlLCBodW1pZGl0eV07XG59XG5cbmZ1bmN0aW9uIHN1cGVyU2NyaXB0KCkge1xuXHRjb25zdCBzdXBTY3JpcHQgPSBjcmVhdGVEb21FbGVtZW50KFwic3VwXCIsIHsgY2xhc3M6IFwic3VwZXItc2NyaXB0XCIgfSk7XG5cdGNvbnN0IHN1cFNjcmlwdDIgPSBjcmVhdGVEb21FbGVtZW50KFwic3VwXCIsIHsgY2xhc3M6IFwic3VwZXItc2NyaXB0XCIgfSk7XG5cdHN1cFNjcmlwdC50ZXh0Q29udGVudCA9IFwib1wiO1xuXHRzdXBTY3JpcHQyLmFwcGVuZChzdXBTY3JpcHQsIFwiQ1wiKTtcblx0cmV0dXJuIHN1cFNjcmlwdDI7XG59XG5cbmZ1bmN0aW9uIGRhdGFEaXNwbGF5KCkge1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgd2VhdGhlckRlc2MgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIndlYXRoZXItZGVzY1wiIH0pLFxuXHRcdG5hbWVPZkNpdHkgPSBjcmVhdGVEb21FbGVtZW50KFwiaDJcIiwgeyBjbGFzczogXCJuYW1lLW9mLWNpdHlcIiB9KSxcblx0XHRkZXNjSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJkZXNjLWljb25cIiB9KSxcblx0XHR0ZW1wRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRlbXAtZGl2XCIgfSksXG5cdFx0dGVtcFJhbmdlID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRlbXAtcmFuZ2VcIiB9KSxcblx0XHRoaWdoVGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiaGlnaC10ZW1wXCIgfSksXG5cdFx0bG93VGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwibG93LXRlbXBcIiB9KSxcblx0XHRmZWVsc0xpa2VUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJmZWVscy1saWtlLXRlbXBcIiB9KSxcblx0XHR0ZW1wZXJhdHVyZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZW1wZXJhdHVyZS1kaXZcIiB9KSxcblx0XHR0ZW1wZXJhdHVyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidGVtcGVyYXR1cmVcIiB9KSxcblx0XHRtaW5vckRhdGFEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWlub3ItZGF0YS1kaXZcIiB9KTtcblxuXHR0ZW1wUmFuZ2UuYXBwZW5kKGxvd1RlbXAsIGhpZ2hUZW1wKTtcblx0dGVtcGVyYXR1cmVEaXYuYXBwZW5kKHRlbXBlcmF0dXJlLCBkZXNjSWNvbik7XG5cdHRlbXBEaXYuYXBwZW5kKHRlbXBSYW5nZSwgdGVtcGVyYXR1cmVEaXYsIGZlZWxzTGlrZVRlbXApO1xuXHR0b2RheURhdGFEaXYuYXBwZW5kKHdlYXRoZXJEZXNjLCBuYW1lT2ZDaXR5LCB0ZW1wRGl2LCBtaW5vckRhdGFEaXYpO1xuXG5cdHJldHVybiBbXG5cdFx0d2VhdGhlckRlc2MsXG5cdFx0ZGVzY0ljb24sXG5cdFx0bmFtZU9mQ2l0eSxcblx0XHR0ZW1wZXJhdHVyZSxcblx0XHRsb3dUZW1wLFxuXHRcdGhpZ2hUZW1wLFxuXHRcdGZlZWxzTGlrZVRlbXAsXG5cdF07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1haW5Db250ZW50cywgbWlub3JEYXRhUmVwb3J0LCBzdXBlclNjcmlwdCwgZGF0YURpc3BsYXkgfTtcbiIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3RDYXJkKGRhaWx5KSB7XG5cdGNvbnN0IG5leHQ3RGF5c0RpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLFxuXHRcdGNhcmQgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY2FyZFwiIH0pLFxuXHRcdGRheUFuZERlc2MgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIpLFxuXHRcdGljb25EaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaWNvbi1kaXZcIiB9KSxcblx0XHR0ZW1wRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiKSxcblx0XHRkYXkgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHR3ZWF0aGVyRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdHdlYXRoZXJEZXNjSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0bG93VGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdGhpZ2hUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIik7XG5cblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhaWx5LmR0ICogMTAwMCk7XG5cdGNvbnN0IHdlZWtkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcblxuXHRkYXkudGV4dENvbnRlbnQgPSBgJHt3ZWVrZGF5fWA7XG5cdHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gYCR7ZGFpbHkud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuXHR3ZWF0aGVyRGVzY0ljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7ZGFpbHkud2VhdGhlclswXS5pY29ufS5wbmdgO1xuXHRoaWdoVGVtcC50ZXh0Q29udGVudCA9IGAke2RhaWx5LnRlbXAubWF4fWA7XG5cdGxvd1RlbXAudGV4dENvbnRlbnQgPSBgJHtkYWlseS50ZW1wLm1heH1gO1xuXHRkYXlBbmREZXNjLmFwcGVuZChkYXksIHdlYXRoZXJEZXNjKTtcblx0dGVtcERpdi5hcHBlbmQoaGlnaFRlbXAsIGxvd1RlbXApO1xuXHRpY29uRGl2LmFwcGVuZCh3ZWF0aGVyRGVzY0ljb24sIHRlbXBEaXYpO1xuXHRjYXJkLmFwcGVuZChkYXlBbmREZXNjLCBpY29uRGl2KTtcblx0bmV4dDdEYXlzRGl2LmFwcGVuZChjYXJkKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9yZWNhc3RDYXJkIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi9wYWdlLWhlYWRlclwiO1xuaW1wb3J0IHtcblx0Z2V0Q291bnRyeU5hbWUsXG5cdGdldERhdGEsXG5cdGdldExvbkFuZExhdCxcblx0Z2V0V2VhdGhlckRhdGEsXG59IGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCB7IGNyZWF0ZWZvb3RlciB9IGZyb20gXCIuL3BhZ2UtZm9vdGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluQ29udGVudHMgfSBmcm9tIFwiLi9wYWdlLW1haW5cIjtcbmltcG9ydCB7XG5cdGFkZExpc3RlbmVyVG9CdXR0b24sXG5cdGRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QsXG5cdHdhdGNobGlzdCxcbn0gZnJvbSBcIi4vY2l0eS13YXRjaGxpc3RcIjtcbmltcG9ydCB7IGNpdHlOYW1lIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5jcmVhdGVIZWFkZXIoKTtcbmNyZWF0ZU1haW5Db250ZW50cygpO1xuY3JlYXRlZm9vdGVyKCk7XG53YXRjaGxpc3QoKTtcbmFkZExpc3RlbmVyVG9CdXR0b24oKTtcbmRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QoKTtcbmdldFdlYXRoZXJEYXRhLmNhbGwoXG5cdGRvY3VtZW50LFxuXHRnZXREYXRhLmJpbmQoZG9jdW1lbnQpLFxuXHRnZXRMb25BbmRMYXQsXG5cdGNpdHlOYW1lLFxuXHRmYWxzZSxcblx0Z2V0Q291bnRyeU5hbWVcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9