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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n.search-div > input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\nh1 {\n\tfont-size: 2rem;\n\tfont-family: monospace;\n}\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n}\n.today-data-div > div:first-of-type,\n.today-data-div > h2:first-of-type,\n.temp-div > * {\n\tcolor: white;\n}\n.weather-desc {\n\tcolor: white;\n}\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n}\n.watchlist-div > h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\nul {\n\tmargin-top: 10px;\n}\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n.add-button > input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n.add-button > input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n.city > div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n.city > div:first-of-type > img {\n\tmargin-right: 5px;\n}\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n.show-delete {\n\tvisibility: visible;\n}\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n.temperature-div {\n\tdisplay: flex;\n}\n.temperature {\n\tfont-size: 4rem;\n}\n.temperature > .super-script {\n\tfont-size: 2rem;\n}\n.desc-icon {\n\twidth: 75px;\n}\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n.minor-data-div > * {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tborder: 1px solid #ffacac;\n\tanimation: blinkingBorder 2s infinite;\n}\n\n/* A subtle blinking border color */\n@keyframes blinkingBorder {\n\t0% {\n\t\tborder-color: #f56ce2;\n\t}\n\t25% {\n\t\tborder-color: #786cf5;\n\t}\n\t50% {\n\t\tborder-color: #acfcff;\n\t}\n\t70% {\n\t\tborder-color: #e4ffac;\n\t}\n\t100% {\n\t\tborder-color: #ffacac;\n\t}\n}\n.minor-data-div > * > img {\n\twidth: 25px;\n\theight: 25px;\n}\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n.card > div > p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\t.next-7days-div {\n\t\tpadding: 0px 20px 10px 20px;\n\t}\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n}\n\n.loader-container {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,sBAAsB;AACvB;AACA;CACC,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,2BAA2B;CAC3B,kBAAkB;AACnB;;AAEA,mBAAmB;AACnB;CACC,aAAa;CACb,YAAY;CACZ,QAAQ;CACR,eAAe;CACf,kBAAkB;CAClB,mBAAmB;CACnB,sBAAsB;CACtB,gCAAgC;CAChC,yBAAyB;AAC1B;AACA;CACC,OAAO;CACP,YAAY;CACZ,kBAAkB;CAClB,mBAAmB;CACnB,mBAAmB;CACnB,yBAAyB;CACzB,0BAA0B;CAC1B,6BAA6B;CAC7B,aAAa;CACb,YAAY;CACZ,cAAc;AACf;AACA;CACC,iBAAiB;CACjB,mBAAmB;CACnB,mBAAmB;CACnB,yBAAyB;CACzB,WAAW;CACX,aAAa;CACb,YAAY;AACb;AACA;CACC,eAAe;CACf,sBAAsB;AACvB;AACA;CACC,OAAO;CACP,aAAa;CACb,gBAAgB;AACjB;AACA;CACC,OAAO;AACR;;AAEA,iBAAiB;AACjB;CACC,OAAO;CACP,aAAa;CACb,oCAAoC;AACrC;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,yBAAyB;CACzB,OAAO;CACP,yBAAyB;CACzB,6BAA6B;AAC9B;AACA;;;CAGC,YAAY;AACb;AACA;CACC,YAAY;AACb;AACA;CACC,OAAO;CACP,kBAAkB;CAClB,aAAa;CACb,2BAA2B;CAC3B,8BAA8B;CAC9B,eAAe;CACf,yBAAyB;CACzB,SAAS;AACV;AACA;CACC,OAAO;CACP,2BAA2B;CAC3B,kBAAkB;CAClB,yBAAyB;AAC1B;AACA;CACC,kBAAkB;CAClB,0BAA0B;CAC1B,YAAY;AACb;AACA;CACC,gBAAgB;AACjB;AACA;CACC,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,mBAAmB;CACnB,4BAA4B;AAC7B;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,QAAQ;CACR,kBAAkB;CAClB,wCAAwC;AACzC;AACA;CACC,YAAY;CACZ,WAAW;CACX,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,yBAAyB;AAC1B;AACA;CACC,OAAO;CACP,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,kBAAkB;CAClB,cAAc;CACd,wCAAwC;AACzC;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,WAAW;CACX,QAAQ;CACR,kBAAkB;AACnB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,SAAS;AACV;AACA;CACC,aAAa;AACd;AACA;CACC,eAAe;AAChB;AACA;CACC,eAAe;AAChB;AACA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,2DAA2D;CAC3D,SAAS;AACV;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,oCAAoC;CACpC,kBAAkB;CAClB,mBAAmB;CACnB,cAAc;CACd,iBAAiB;CACjB,sBAAsB;CACtB,wCAAwC;CACxC,yBAAyB;CACzB,qCAAqC;AACtC;;AAEA,mCAAmC;AACnC;CACC;EACC,qBAAqB;CACtB;CACA;EACC,qBAAqB;CACtB;CACA;EACC,qBAAqB;CACtB;CACA;EACC,qBAAqB;CACtB;CACA;EACC,qBAAqB;CACtB;AACD;AACA;CACC,WAAW;CACX,YAAY;AACb;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,cAAc;CACd,yBAAyB;CACzB,iBAAiB;CACjB,yBAAyB;CACzB,OAAO;CACP,sBAAsB;AACvB;AACA;CACC,iBAAiB;CACjB,0BAA0B;CAC1B,kBAAkB;AACnB;AACA;CACC,aAAa;CACb,yBAAyB;CACzB,mBAAmB;AACpB;AACA;CACC,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA,mBAAmB;AACnB;CACC,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,6BAA6B;CAC7B,yBAAyB;AAC1B;;AAEA,4DAA4D;AAC5D;CACC;EACC,OAAO;EACP,aAAa;EACb,sBAAsB;CACvB;CACA;EACC,2BAA2B;CAC5B;CACA;EACC,2BAA2B;CAC5B;CACA;EACC,4BAA4B;CAC7B;AACD;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,gCAAgC;CAChC,mCAAmC;AACpC;;AAEA;CACC,0BAA0B;CAC1B,kBAAkB;CAClB,8BAA8B;CAC9B,WAAW;CACX,YAAY;CACZ,0CAA0C;CAC1C,kCAAkC;CAClC,kBAAkB;CAClB,QAAQ;CACR,SAAS;AACV;;AAEA,WAAW;AACX;EACE,KAAK,+BAA+B,EAAE;EACtC,OAAO,iCAAiC,EAAE;AAC5C;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n.search-div > input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\nh1 {\n\tfont-size: 2rem;\n\tfont-family: monospace;\n}\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n}\n.today-data-div > div:first-of-type,\n.today-data-div > h2:first-of-type,\n.temp-div > * {\n\tcolor: white;\n}\n.weather-desc {\n\tcolor: white;\n}\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n}\n.watchlist-div > h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\nul {\n\tmargin-top: 10px;\n}\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n.add-button > input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n.add-button > input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n.city > div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n.city > div:first-of-type > img {\n\tmargin-right: 5px;\n}\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n.show-delete {\n\tvisibility: visible;\n}\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n.temperature-div {\n\tdisplay: flex;\n}\n.temperature {\n\tfont-size: 4rem;\n}\n.temperature > .super-script {\n\tfont-size: 2rem;\n}\n.desc-icon {\n\twidth: 75px;\n}\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n.minor-data-div > * {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tborder: 1px solid #ffacac;\n\tanimation: blinkingBorder 2s infinite;\n}\n\n/* A subtle blinking border color */\n@keyframes blinkingBorder {\n\t0% {\n\t\tborder-color: #f56ce2;\n\t}\n\t25% {\n\t\tborder-color: #786cf5;\n\t}\n\t50% {\n\t\tborder-color: #acfcff;\n\t}\n\t70% {\n\t\tborder-color: #e4ffac;\n\t}\n\t100% {\n\t\tborder-color: #ffacac;\n\t}\n}\n.minor-data-div > * > img {\n\twidth: 25px;\n\theight: 25px;\n}\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n.card > div > p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\t.next-7days-div {\n\t\tpadding: 0px 20px 10px 20px;\n\t}\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n}\n\n.loader-container {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}"],"sourceRoot":""}]);
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
	if (document.body.lastChild.className === "loader-container")
		(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.clearScreenLoader)();
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
			(0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__.screenLoader)(),
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
	const looaderContainer = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("div", {
		class: "loader-container",
	});
	const loader = (0,_create_dom_element__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("div", { class: "loader" });
	looaderContainer.append(loader);
	document.body.append(looaderContainer);
}
function clearScreenLoader() {
	document.body.lastChild.parentNode.removeChild(document.body.lastChild);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBMEIsZUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3QjtBQU92QjtBQUN1QjtBQUNJO0FBS3ZCO0FBQ2lCOztBQUUzQywwREFBWTtBQUNaLDhEQUFrQjtBQUNsQiwwREFBWTtBQUNaLDBEQUFTO0FBQ1QseURBQVk7QUFDWixvRUFBbUI7QUFDbkIsMEVBQXlCO0FBQ3pCLDREQUFtQjtBQUNuQjtBQUNBLENBQUMscURBQVk7QUFDYixDQUFDLHFEQUFZO0FBQ2IsQ0FBQyxvREFBUTtBQUNUO0FBQ0EsQ0FBQyx1REFBYztBQUNmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jaXR5LXdhdGNobGlzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3JlYXRlLWRvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWZvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLW1haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2V2ZW4tZGF5cy1mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHBhZGRpbmc6IDIwcHggNTBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuLnNlYXJjaC1kaXYgPiBpbnB1dCB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiAjZWRhZWFlO1xcbn1cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xcblxcdGNvbG9yOiBzbm93O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5zZWFyY2gtZGl2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiA2MDBweDtcXG59XFxuLnRpdGxlLWRpdiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nICovXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjsgKi9cXG59XFxuLnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogNXB4IDVweCAwcHggMjBweDtcXG5cXHRmbGV4OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi50b2RheS1kYXRhLWRpdiA+IGRpdjpmaXJzdC1vZi10eXBlLFxcbi50b2RheS1kYXRhLWRpdiA+IGgyOmZpcnN0LW9mLXR5cGUsXFxuLnRlbXAtZGl2ID4gKiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG4ud2VhdGhlci1kZXNjIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbi5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDIwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGdhcDogMTBweDtcXG59XFxuLndhdGNobGlzdC1kaXYge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMTVweCAyMHB4IDVweCAxMHB4O1xcblxcdGdyaWQtYXJlYTogMS8yLzMvMztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcbn1cXG4ud2F0Y2hsaXN0LWRpdiA+IGgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG51bCB7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxubGkge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXHRwYWRkaW5nOiAyMHB4IDEwcHg7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCk7XFxufVxcbi5hZGQtYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1yaWdodDogMzBweDtcXG5cXHRnYXA6IDVweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDIzMyAxODQgMTg0IC8gNTAlKTtcXG59XFxuLmFkZC1idXR0b24gPiBpbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuLmFkZC1idXR0b24gPiBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG5cXHRmbGV4OiAxO1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcbi5jaXR5IHtcXG5cXHRwYWRkaW5nOiA3cHggMzBweCA3cHggN3B4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGNvbG9yOiAjZmZlYmNlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcbi5jaXR5ID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNpdHkgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IGltZyB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5kZWxldGUge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMTBweDtcXG5cXHR0b3A6IDVweDtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5zaG93LWRlbGV0ZSB7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnRlbXAtcmFuZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG4udGVtcGVyYXR1cmUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLnRlbXBlcmF0dXJlID4gLnN1cGVyLXNjcmlwdCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG4uZGVzYy1pY29uIHtcXG5cXHR3aWR0aDogNzVweDtcXG59XFxuLm1pbm9yLWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xcblxcdGdhcDogMjBweDtcXG59XFxuLm1pbm9yLWRhdGEtZGl2ID4gKiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6ICMxYTAwMmE7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bWluLXdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA1MCUpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZmFjYWM7XFxuXFx0YW5pbWF0aW9uOiBibGlua2luZ0JvcmRlciAycyBpbmZpbml0ZTtcXG59XFxuXFxuLyogQSBzdWJ0bGUgYmxpbmtpbmcgYm9yZGVyIGNvbG9yICovXFxuQGtleWZyYW1lcyBibGlua2luZ0JvcmRlciB7XFxuXFx0MCUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogI2Y1NmNlMjtcXG5cXHR9XFxuXFx0MjUlIHtcXG5cXHRcXHRib3JkZXItY29sb3I6ICM3ODZjZjU7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjYWNmY2ZmO1xcblxcdH1cXG5cXHQ3MCUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogI2U0ZmZhYztcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjZmZhY2FjO1xcblxcdH1cXG59XFxuLm1pbm9yLWRhdGEtZGl2ID4gKiA+IGltZyB7XFxuXFx0d2lkdGg6IDI1cHg7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcbn1cXG4uY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGNvbG9yOiAjZWJjYWNhO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2U5YjhiODtcXG5cXHRmbGV4OiAxO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5jYXJkID4gZGl2ID4gcDpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxufVxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mZWVscy1saWtlLXRlbXAge1xcblxcdG1hcmdpbi10b3A6IC0xNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuZm9vdGVyIHtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDUxYjFiO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi8qIFVzZXMgZmxleC1kaXJlY3Rpb24gY29sdW1uIGZvciBzY3JlZW4gc2l6ZXMgYmVsb3cgNjAwcHggKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXHQudG9kYXktZGF0YS1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFx0Lm5leHQtN2RheXMtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcdC53YXRjaGxpc3QtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG59XFxuXFxuLmxvYWRlci1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0LyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5sb2FkZXIge1xcblxcdGJvcmRlcjogMTBweCBzb2xpZCAjOTA2MjYyO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDYwcHg7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDM1JTtcXG5cXHRsZWZ0OiA0NSU7XFxufVxcblxcbi8qIFNhZmFyaSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLGtCQUFrQjtBQUNuQjs7QUFFQSxtQkFBbUI7QUFDbkI7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLFFBQVE7Q0FDUixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsZ0NBQWdDO0NBQ2hDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsT0FBTztDQUNQLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLDZCQUE2QjtDQUM3QixhQUFhO0NBQ2IsWUFBWTtDQUNaLGNBQWM7QUFDZjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsT0FBTztBQUNSOztBQUVBLGlCQUFpQjtBQUNqQjtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2Isb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixPQUFPO0NBQ1AseUJBQXlCO0NBQ3pCLDZCQUE2QjtBQUM5QjtBQUNBOzs7Q0FHQyxZQUFZO0FBQ2I7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Q0FDMUIsa0JBQWtCO0NBQ2xCLDhCQUE4QjtDQUM5QixXQUFXO0NBQ1gsWUFBWTtDQUNaLDBDQUEwQztDQUMxQyxrQ0FBa0M7Q0FDbEMsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0FBQ1Y7O0FBRUEsV0FBVztBQUNYO0VBQ0UsS0FBSywrQkFBK0IsRUFBRTtFQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzVDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGdhcDogNXB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiAyMHB4IDUwcHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmM5ODk4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcbi5zZWFyY2gtZGl2ID4gaW5wdXQge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjb2xvcjogI2VkYWVhZTtcXG59XFxuYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGltZ3JleTtcXG5cXHRjb2xvcjogc25vdztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG4uc2VhcmNoLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1heC13aWR0aDogNjAwcHg7XFxufVxcbi50aXRsZS1kaXYge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi8qIE1haW4gU3R5bGluZyAqL1xcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHQvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7ICovXFxufVxcbi50b2RheS1kYXRhLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDVweCA1cHggMHB4IDIwcHg7XFxuXFx0ZmxleDogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4udG9kYXktZGF0YS1kaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSxcXG4udG9kYXktZGF0YS1kaXYgPiBoMjpmaXJzdC1vZi10eXBlLFxcbi50ZW1wLWRpdiA+ICoge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLndlYXRoZXItZGVzYyB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG4ubmV4dC03ZGF5cy1kaXYge1xcblxcdGZsZXg6IDI7XFxuXFx0Z3JpZC1hcmVhOiAyLzEvMy8yO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogMTBweCA1cHggMTBweCAyMHB4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRnYXA6IDEwcHg7XFxufVxcbi53YXRjaGxpc3QtZGl2IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDE1cHggMjBweCA1cHggMTBweDtcXG5cXHRncmlkLWFyZWE6IDEvMi8zLzM7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG59XFxuLndhdGNobGlzdC1kaXYgPiBoMiB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxudWwge1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbmxpIHtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxuXFx0cGFkZGluZzogMjBweCAxMHB4O1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDApO1xcbn1cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcbi5hZGQtYnV0dG9uID4gaW5wdXQge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtaW4td2lkdGg6IDk1cHg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxufVxcbi5hZGQtYnV0dG9uID4gaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG4uY2l0eSB7XFxuXFx0cGFkZGluZzogN3B4IDMwcHggN3B4IDdweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjb2xvcjogI2ZmZWJjZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzIDE4NCAxODQgLyA1MCUpO1xcbn1cXG4uY2l0eSA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jaXR5ID4gZGl2OmZpcnN0LW9mLXR5cGUgPiBpbWcge1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uZGVsZXRlIHtcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0dG9wOiA1cHg7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc2hvdy1kZWxldGUge1xcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi50ZW1wLXJhbmdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuLnRlbXBlcmF0dXJlLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLnRlbXBlcmF0dXJlIHtcXG5cXHRmb250LXNpemU6IDRyZW07XFxufVxcbi50ZW1wZXJhdHVyZSA+IC5zdXBlci1zY3JpcHQge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmRlc2MtaWNvbiB7XFxuXFx0d2lkdGg6IDc1cHg7XFxufVxcbi5taW5vci1kYXRhLWRpdiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcXG5cXHRnYXA6IDIwcHg7XFxufVxcbi5taW5vci1kYXRhLWRpdiA+ICoge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGNvbG9yOiAjMWEwMDJhO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNTAlKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmZhY2FjO1xcblxcdGFuaW1hdGlvbjogYmxpbmtpbmdCb3JkZXIgMnMgaW5maW5pdGU7XFxufVxcblxcbi8qIEEgc3VidGxlIGJsaW5raW5nIGJvcmRlciBjb2xvciAqL1xcbkBrZXlmcmFtZXMgYmxpbmtpbmdCb3JkZXIge1xcblxcdDAlIHtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNmNTZjZTI7XFxuXFx0fVxcblxcdDI1JSB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjNzg2Y2Y1O1xcblxcdH1cXG5cXHQ1MCUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogI2FjZmNmZjtcXG5cXHR9XFxuXFx0NzAlIHtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNlNGZmYWM7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdGJvcmRlci1jb2xvcjogI2ZmYWNhYztcXG5cXHR9XFxufVxcbi5taW5vci1kYXRhLWRpdiA+ICogPiBpbWcge1xcblxcdHdpZHRoOiAyNXB4O1xcblxcdGhlaWdodDogMjVweDtcXG59XFxuLmNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRjb2xvcjogI2ViY2FjYTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcblxcdHBhZGRpbmc6IDJweCAxMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNlOWI4Yjg7XFxuXFx0ZmxleDogMTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uY2FyZCA+IGRpdiA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Zm9udC1zaXplOiAwLjk1cmVtO1xcbn1cXG4uaWNvbi1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmVlbHMtbGlrZS10ZW1wIHtcXG5cXHRtYXJnaW4tdG9wOiAtMTVweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcbmZvb3RlciB7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgIzQ1MWIxYjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4vKiBVc2VzIGZsZXgtZGlyZWN0aW9uIGNvbHVtbiBmb3Igc2NyZWVuIHNpemVzIGJlbG93IDYwMHB4ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjE1cHgpIHtcXG5cXHRtYWluIHtcXG5cXHRcXHRmbGV4OiAxO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFx0LnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiA1cHggMjBweCAxMHB4IDIwcHg7XFxuXFx0fVxcblxcdC5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXHQud2F0Y2hsaXN0LWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxufVxcblxcbi5sb2FkZXItY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpOyAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubG9hZGVyIHtcXG5cXHRib3JkZXI6IDEwcHggc29saWQgIzkwNjI2MjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyLXRvcDogMTBweCBzb2xpZCAjMWQ0ZDRmO1xcblxcdHdpZHRoOiA2MHB4O1xcblxcdGhlaWdodDogNjBweDtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAzNSU7XFxuXFx0bGVmdDogNDUlO1xcbn1cXG5cXG4vKiBTYWZhcmkgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IHtcblx0Y2xlYXJTY3JlZW5Mb2FkZXIsXG5cdGdldENvdW50cnlOYW1lLFxuXHRnZXREYXRhLFxuXHRnZXRMb25BbmRMYXQsXG5cdGdldFdlYXRoZXJEYXRhLFxuXHRzY3JlZW5Mb2FkZXIsXG59IGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCIuL2ljb25zL2FkZGNpdHkucG5nXCI7XG5pbXBvcnQgRGVsZXRlIGZyb20gXCIuL2ljb25zL2RlbGV0ZS5wbmdcIjtcbmltcG9ydCB7XG5cdG5ld05hbWUsXG5cdHNldENpdHlOYW1lLFxuXHRzZXR3YXRjaGxpc3RBcnJheSxcblx0d2F0Y2hsaXN0QXJyYXksXG59IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gd2F0Y2hsaXN0KCkge1xuXHRjb25zdCB3YXRjaGxpc3REaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXSxcblx0XHR3YXRjaGxpc3RIZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaDJcIiksXG5cdFx0Y2l0eUxpc3QgPSBjcmVhdGVEb21FbGVtZW50KFwidWxcIiksXG5cdFx0YWRkQ2l0eUJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcImFkZC1idXR0b25cIiB9KSxcblx0XHR3YXRjaGxpc3RJbnB1dCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbnB1dFwiLCB7XG5cdFx0XHRjbGFzczogXCJ3YXRjaGxpc3QtaW5wdXRcIixcblx0XHRcdHR5cGU6IFwic2VhcmNoXCIsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCJBZGQgQ2l0eVwiLFxuXHRcdH0pLFxuXHRcdE15QWRkSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJhZGQtaWNvblwiLCBzcmM6IEFkZEljb24gfSk7XG5cblx0YWRkQ2l0eUJ1dHRvbi5hcHBlbmQoTXlBZGRJY29uLCB3YXRjaGxpc3RJbnB1dCk7XG5cdHdhdGNobGlzdEhlYWRlci50ZXh0Q29udGVudCA9IFwiV2F0Y2hsaXN0XCI7XG5cdGNpdHlMaXN0LmFwcGVuZChhZGRDaXR5QnV0dG9uKTtcblx0d2F0Y2hsaXN0RGl2LmFwcGVuZCh3YXRjaGxpc3RIZWFkZXIsIGNpdHlMaXN0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2l0eVRvV2F0Y2hsaXN0KHJlc3BvbnNlKSB7XG5cdGNvbnN0IGFkZENpdHlCdXR0b24gPVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQsXG5cdFx0Y2l0eUxpc3QgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLFxuXHRcdHdhdGNobGlzdElucHV0ID0gYWRkQ2l0eUJ1dHRvbi5jaGlsZHJlblsxXSxcblx0XHRpY29uQW5kQ2l0eU5hbWUgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIpLFxuXHRcdGNpdHkgPSBjcmVhdGVEb21FbGVtZW50KFwibGlcIiwgeyBjbGFzczogXCJjaXR5XCIgfSksXG5cdFx0dGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdGNpdHlOYW1lID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0ZGVzY0ljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIpLFxuXHRcdG15RGVsZXRlID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImRlbGV0ZVwiLCBzcmM6IERlbGV0ZSB9KTtcblxuXHRjaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke3dhdGNobGlzdElucHV0LnZhbHVlfWA7XG5cdGlmICh0aGlzID09PSBkb2N1bWVudCkgaWNvbkFuZENpdHlOYW1lLmFwcGVuZChkZXNjSWNvbiwgY2l0eU5hbWUpO1xuXHRlbHNlIGljb25BbmRDaXR5TmFtZS5hcHBlbmQoZGVzY0ljb24sIHRoaXMpO1xuXG5cdHRlbXAuYXBwZW5kKGAgJHtyZXNwb25zZS5jdXJyZW50LnRlbXB9YCk7XG5cdGdldEljb25BbmRUZW1wKGNpdHksIGljb25BbmRDaXR5TmFtZSwgZGVzY0ljb24sIHJlc3BvbnNlLCB0ZW1wLCBteURlbGV0ZSk7XG5cdGNpdHlMaXN0Lmluc2VydEJlZm9yZShjaXR5LCBhZGRDaXR5QnV0dG9uKTtcblx0YWRkRXZlbnRMaXN0ZW5lclRvQ2l0eShteURlbGV0ZSwgY2l0eSk7XG5cdGlmIChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZC5jbGFzc05hbWUgPT09IFwibG9hZGVyLWNvbnRhaW5lclwiKVxuXHRcdGNsZWFyU2NyZWVuTG9hZGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb0NpdHkobXlEZWxldGUsIGNpdHkpIHtcblx0bXlEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRsZXQgbGlzdEFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIikpO1xuXHRcdGxldCBpbmRleE9mQ2l0eSA9IGxpc3RBcnJheS5pbmRleE9mKG15RGVsZXRlLnBhcmVudE5vZGUpO1xuXHRcdHdhdGNobGlzdEFycmF5LnNwbGljZShpbmRleE9mQ2l0eSwgMSk7XG5cdFx0c2V0d2F0Y2hsaXN0QXJyYXkoKTtcblx0XHRteURlbGV0ZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobXlEZWxldGUucGFyZW50Tm9kZSk7XG5cdH0pO1xuXHRjaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+XG5cdFx0bXlEZWxldGUuY2xhc3NMaXN0LmFkZChcInNob3ctZGVsZXRlXCIpXG5cdCk7XG5cdGNpdHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT5cblx0XHRteURlbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1kZWxldGVcIilcblx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0SWNvbkFuZFRlbXAoXG5cdGNpdHksXG5cdGljb25BbmRDaXR5TmFtZSxcblx0ZGVzY0ljb24sXG5cdHJlc3BvbnNlLFxuXHR0ZW1wLFxuXHRteURlbGV0ZVxuKSB7XG5cdGNvbnN0IHdhdGNobGlzdElucHV0ID1cblx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZFxuXHRcdFx0LmNoaWxkTm9kZXNbMV07XG5cdGNpdHkuYXBwZW5kKGljb25BbmRDaXR5TmFtZSwgdGVtcCwgbXlEZWxldGUpO1xuXHRkZXNjSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtyZXNwb25zZS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcblx0d2F0Y2hsaXN0SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclRvQnV0dG9uKCkge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRXZlbnRMaXN0ZW5lcnMpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhlKSB7XG5cdGNvbnN0IGFkZENpdHlCdXR0b24gPVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQsXG5cdFx0aGVhZGVySW5wdXQgPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLFxuXHRcdGhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0sXG5cdFx0d2F0Y2hsaXN0SW5wdXQgPSBhZGRDaXR5QnV0dG9uLmNoaWxkTm9kZXNbMV07XG5cblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC1pY29uXCIpXG5cdFx0d2F0Y2hsaXN0SW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiXG5cdFx0XHQ/IGZhbHNlXG5cdFx0XHQ6IHdhdGNobGlzdEFycmF5LnB1c2god2F0Y2hsaXN0SW5wdXQudmFsdWUpLFxuXHRcdFx0c2V0d2F0Y2hsaXN0QXJyYXkoKSxcblx0XHRcdHNjcmVlbkxvYWRlcigpLFxuXHRcdFx0Z2V0V2VhdGhlckRhdGEuYXBwbHkoZG9jdW1lbnQuYm9keSwgW1xuXHRcdFx0XHRhZGRDaXR5VG9XYXRjaGxpc3QuYmluZChkb2N1bWVudCksXG5cdFx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdFx0d2F0Y2hsaXN0SW5wdXQudmFsdWUsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRnZXRDb3VudHJ5TmFtZSxcblx0XHRcdF0pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKS5mb3JFYWNoKChjaXR5TGlzdCkgPT4ge1xuXHRcdGlmIChcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0IHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblswXSB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMV0gfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdIHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuXHRcdCkge1xuXHRcdFx0c2NyZWVuTG9hZGVyKCk7XG5cdFx0XHRjb25zdCBjaXR5ID0gY2l0eUxpc3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXHRcdFx0Z2V0V2VhdGhlckRhdGEoZ2V0RGF0YSwgZ2V0TG9uQW5kTGF0LCBjaXR5LCBmYWxzZSwgZ2V0Q291bnRyeU5hbWUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKGUudGFyZ2V0ID09PSBoZWFkZXJCdXR0b24pIHtcblx0XHRuZXdOYW1lKGhlYWRlcklucHV0LnZhbHVlKTtcblx0XHRzZXRDaXR5TmFtZSgpO1xuXHRcdHNjcmVlbkxvYWRlcigpO1xuXHRcdGdldFdlYXRoZXJEYXRhKFxuXHRcdFx0Z2V0RGF0YSxcblx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdGhlYWRlcklucHV0LnZhbHVlLFxuXHRcdFx0aGVhZGVySW5wdXQsXG5cdFx0XHRnZXRDb3VudHJ5TmFtZVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVsYXlFeGVjdXRpb24oY2l0eSkge1xuXHRjb25zdCBmZXRjaE5vdyA9IGdldFdlYXRoZXJEYXRhKFxuXHRcdGFkZENpdHlUb1dhdGNobGlzdC5iaW5kKGNpdHkpLFxuXHRcdGdldExvbkFuZExhdCxcblx0XHRjaXR5LFxuXHRcdGZhbHNlLFxuXHRcdGdldENvdW50cnlOYW1lXG5cdCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShmZXRjaE5vdyksIDEyMDApO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCgpIHtcblx0aWYgKHdhdGNobGlzdEFycmF5Lmxlbmd0aCA+IDApXG5cdFx0Zm9yIChjb25zdCBjaXR5IG9mIHdhdGNobGlzdEFycmF5KSB7XG5cdFx0XHRhd2FpdCBkZWxheUV4ZWN1dGlvbihjaXR5KTtcblx0XHR9XG59XG5cbmV4cG9ydCB7XG5cdHdhdGNobGlzdCxcblx0YWRkTGlzdGVuZXJUb0J1dHRvbixcblx0YWRkQ2l0eVRvV2F0Y2hsaXN0LFxuXHRkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0LFxufTsiLCJleHBvcnQgY29uc3QgQVBJX1RPS0VOID0ge1xuXHRLRVk6IFwiYzkzZmQxODE3ZjNmYmU0MmFlYWMwYTYzMDc2NjAzYjlcIixcblx0S0VZMjogXCIwYWQ3MTNmYWMxMjBiODNiZDkwNzI2MWZiNzc0MmZkN1wiLFxuXHRLRVkzOiBcIjIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0XCIsXG59OyIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBET00gRWxlbWVudHNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcblx0aWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG5cdHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG5cdHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcblx0T2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH07IiwiaW1wb3J0IHsgZGF0YURpc3BsYXksIG1pbm9yRGF0YVJlcG9ydCwgc3VwZXJTY3JpcHQgfSBmcm9tIFwiLi9wYWdlLW1haW5cIjtcbmltcG9ydCB7IGNyZWF0ZUZvcmVjYXN0Q2FyZCB9IGZyb20gXCIuL3NldmVuLWRheXMtZm9yZWNhc3RcIjtcbmltcG9ydCB7IEFQSV9UT0tFTiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuXG5sZXQgY291bnRyeUFuZENpdHlOYW1lO1xubGV0IGNvdW50cnlBbmRDaXR5TmFtZTI7XG5jb25zdCBleGNsdWRlID0gYCZ1bml0cz1tZXRyaWMmQVBQSUQ9JHtBUElfVE9LRU4uS0VZfWAsXG5cdGV4Y2x1ZGUyID0gYCZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSxhbGVydHMmdW5pdHM9bWV0cmljJmFwcGlkPSR7QVBJX1RPS0VOLktFWX1gO1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShmdW5jLCBjYiwgY2l0eU5hbWUsIGhlYWRlcklucHV0LCBnZXROYW1lKSB7XG5cdGZldGNoKFxuXHRcdGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JHtleGNsdWRlfWAsXG5cdFx0e1xuXHRcdFx0bW9kZTogXCJjb3JzXCIsXG5cdFx0fVxuXHQpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zdCB7IGxhdCB9ID0gcmVzcG9uc2UuY29vcmQ7XG5cdFx0XHRjb25zdCB7IGxvbiB9ID0gcmVzcG9uc2UuY29vcmQ7XG5cdFx0XHRnZXROYW1lLmNhbGwodGhpcywgcmVzcG9uc2UpO1xuXHRcdFx0Y2IobGF0LCBsb24sIGZ1bmMsIGhlYWRlcklucHV0KTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIGdldExvbkFuZExhdChsYXQsIGxvbiwgY2FsbGJhY2ssIGhlYWRlcklucHV0KSB7XG5cdG5leHQ3RGF5c0ZvcmVjYXN0KGxhdCwgbG9uLCBjYWxsYmFjaywgaGVhZGVySW5wdXQpO1xufVxuXG5mdW5jdGlvbiBuZXh0N0RheXNGb3JlY2FzdChsYXQsIGxvbiwgY2FsbGJhY2ssIGhlYWRlcklucHV0KSB7XG5cdGZldGNoKFxuXHRcdGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0ke2V4Y2x1ZGUyfWBcblx0KVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0Y2FsbGJhY2socmVzcG9uc2UsIGhlYWRlcklucHV0KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShyZXNwb25zZSwgaGVhZGVySW5wdXQpIHtcblx0Y29uc3QgdG9kYXlEYXRhRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0sXG5cdFx0bmV4dDdEYXlzRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV07XG5cdGNsZWFyRGF0YSh0b2RheURhdGFEaXYpO1xuXHRjbGVhckRhdGEobmV4dDdEYXlzRGl2KTtcblx0ZGlzcGxheVdlYXRoZXJSZXBvcnQuY2FsbCh0aGlzLCByZXNwb25zZSk7XG5cdGRpc3BsYXk3RGF5c0ZvcmVjYXN0KHJlc3BvbnNlKTtcblx0aWYgKGhlYWRlcklucHV0LnZhbHVlKSBoZWFkZXJJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGF0YShkaXYpIHtcblx0d2hpbGUgKGRpdi5maXJzdENoaWxkKSBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5N0RheXNGb3JlY2FzdChyZXNwb25zZSkge1xuXHRmb3IgKGxldCBpID0gMTsgaSA8IHJlc3BvbnNlLmRhaWx5Lmxlbmd0aDsgaSsrKVxuXHRcdGNyZWF0ZUZvcmVjYXN0Q2FyZChyZXNwb25zZS5kYWlseVtpXSk7XG5cdGNsZWFyU2NyZWVuTG9hZGVyKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyUmVwb3J0KHJlc3BvbnNlKSB7XG5cdGNvbnN0IFtcblx0XHR3ZWF0aGVyRGVzYyxcblx0XHRkZXNjSWNvbixcblx0XHRuYW1lT2ZDaXR5LFxuXHRcdHRlbXBlcmF0dXJlLFxuXHRcdGxvd1RlbXAsXG5cdFx0aGlnaFRlbXAsXG5cdFx0ZmVlbHNMaWtlVGVtcCxcblx0XSA9IGRhdGFEaXNwbGF5KCk7XG5cdGNvbnN0IFt3aW5kLCBkZXdQb2ludCwgdGltZVpvbmUsIHV2SW5kZXgsIHByZXNzdXJlLCBodW1pZGl0eV0gPVxuXHRcdG1pbm9yRGF0YVJlcG9ydCgpO1xuXG5cdGlmICh0aGlzID09PSBkb2N1bWVudCkgbmFtZU9mQ2l0eS50ZXh0Q29udGVudCA9IGNvdW50cnlBbmRDaXR5TmFtZTtcblx0ZWxzZSBuYW1lT2ZDaXR5LnRleHRDb250ZW50ID0gY291bnRyeUFuZENpdHlOYW1lMjtcblx0d2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcblx0bG93VGVtcC5hcHBlbmQoXCJMb3c6IFwiLCBwYXJzZUludChyZXNwb25zZS5kYWlseVswXS50ZW1wLm1pbiksIHN1cGVyU2NyaXB0KCkpO1xuXHRoaWdoVGVtcC5hcHBlbmQoXG5cdFx0XCJIaWdoOiBcIixcblx0XHRwYXJzZUludChyZXNwb25zZS5kYWlseVswXS50ZW1wLm1heCksXG5cdFx0c3VwZXJTY3JpcHQoKVxuXHQpO1xuXHR0ZW1wZXJhdHVyZS5hcHBlbmQocGFyc2VJbnQocmVzcG9uc2UuY3VycmVudC50ZW1wKSwgc3VwZXJTY3JpcHQoKSk7XG5cdGZlZWxzTGlrZVRlbXAuYXBwZW5kKFxuXHRcdFwiRmVlbHMgTGlrZSBcIixcblx0XHRwYXJzZUludChyZXNwb25zZS5jdXJyZW50LmZlZWxzX2xpa2UpLFxuXHRcdHN1cGVyU2NyaXB0KClcblx0KTtcblx0d2luZC5hcHBlbmQoYFdpbmQgU3BlZWQ6ICR7cmVzcG9uc2UuY3VycmVudC53aW5kX3NwZWVkfWApO1xuXHRkZXdQb2ludC5hcHBlbmQoYERldyBQb2ludDogJHtyZXNwb25zZS5jdXJyZW50LmRld19wb2ludH1gKTtcblx0dGltZVpvbmUuYXBwZW5kKGB0aW1lIFpvbmU6ICR7cmVzcG9uc2UudGltZXpvbmV9YCk7XG5cdHV2SW5kZXguYXBwZW5kKGBVViBJbmRleDogJHtyZXNwb25zZS5jdXJyZW50LnV2aX1gKTtcblx0cHJlc3N1cmUuYXBwZW5kKGBQcmVzc3VyZTogJHtyZXNwb25zZS5jdXJyZW50LnByZXNzdXJlfWApO1xuXHRodW1pZGl0eS5hcHBlbmQoYEh1bWlkaXR5OiAke3Jlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHl9YCk7XG5cdGRlc2NJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3Jlc3BvbnNlLmN1cnJlbnQud2VhdGhlclswXS5pY29ufS5wbmdgO1xufVxuXG5mdW5jdGlvbiBnZXRDb3VudHJ5TmFtZShyZXNwb25zZSkge1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQpIHtcblx0XHRjb25zdCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbXCJlblwiXSwgeyB0eXBlOiBcInJlZ2lvblwiIH0pO1xuXHRcdGNvbnN0IGNvdW50cnlOYW1lID0gcmVnaW9uTmFtZXMub2YocmVzcG9uc2Uuc3lzLmNvdW50cnkpO1xuXHRcdGlmIChjb3VudHJ5TmFtZSA9PSByZXNwb25zZS5uYW1lKSBjb3VudHJ5QW5kQ2l0eU5hbWUgPSBjb3VudHJ5TmFtZTtcblx0XHRlbHNlIGNvdW50cnlBbmRDaXR5TmFtZSA9IGAke3Jlc3BvbnNlLm5hbWV9LCAke2NvdW50cnlOYW1lfS5gO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFtcImVuXCJdLCB7IHR5cGU6IFwicmVnaW9uXCIgfSk7XG5cdFx0Y29uc3QgY291bnRyeU5hbWUgPSByZWdpb25OYW1lcy5vZihyZXNwb25zZS5zeXMuY291bnRyeSk7XG5cdFx0aWYgKGNvdW50cnlOYW1lID09IHJlc3BvbnNlLm5hbWUpIGNvdW50cnlBbmRDaXR5TmFtZTIgPSBjb3VudHJ5TmFtZTtcblx0XHRlbHNlIGNvdW50cnlBbmRDaXR5TmFtZTIgPSBgJHtyZXNwb25zZS5uYW1lfSwgJHtjb3VudHJ5TmFtZX0uYDtcblx0fVxufVxuXG5mdW5jdGlvbiBzY3JlZW5Mb2FkZXIoKSB7XG5cdGNvbnN0IGxvb2FkZXJDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHtcblx0XHRjbGFzczogXCJsb2FkZXItY29udGFpbmVyXCIsXG5cdH0pO1xuXHRjb25zdCBsb2FkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGVyXCIgfSk7XG5cdGxvb2FkZXJDb250YWluZXIuYXBwZW5kKGxvYWRlcik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKGxvb2FkZXJDb250YWluZXIpO1xufVxuZnVuY3Rpb24gY2xlYXJTY3JlZW5Mb2FkZXIoKSB7XG5cdGRvY3VtZW50LmJvZHkubGFzdENoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0TG9uQW5kTGF0LCBnZXREYXRhLCBnZXRDb3VudHJ5TmFtZSwgc2NyZWVuTG9hZGVyLCBjbGVhclNjcmVlbkxvYWRlciB9O1xuIiwiaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eU5hbWVcIikgPT09IG51bGwpXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0eU5hbWVcIiwgSlNPTi5zdHJpbmdpZnkoXCJQb3J0IEhhcmNvdXJ0XCIpKTtcblxubGV0IGNpdHlOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlOYW1lXCIpKTtcblxuZnVuY3Rpb24gbmV3TmFtZShzZXROYW1lKSB7XG5cdGNpdHlOYW1lID0gc2V0TmFtZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2l0eU5hbWUoKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0eU5hbWVcIiwgSlNPTi5zdHJpbmdpZnkoY2l0eU5hbWUpKTtcbn1cblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIikgPT0gbnVsbClcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3YXRjaGxpc3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuXG5sZXQgd2F0Y2hsaXN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIikpO1xuXG5mdW5jdGlvbiBzZXR3YXRjaGxpc3RBcnJheSgpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3YXRjaGxpc3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeSh3YXRjaGxpc3RBcnJheSkpO1xufVxuXG5leHBvcnQgeyBjaXR5TmFtZSwgc2V0Q2l0eU5hbWUsIG5ld05hbWUsIHdhdGNobGlzdEFycmF5LCBzZXR3YXRjaGxpc3RBcnJheSB9OyIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcblxuLyoqXG4gKiBGdW5jdGlvbiBmb3IgY3JlYXRpbmcgZm9vdGVyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZWZvb3RlcigpIHtcblx0Y29uc3QgZm9vdGVyID0gY3JlYXRlRG9tRWxlbWVudChcImZvb3RlclwiKTtcblx0Y29uc3QgYW5jaG9yTGluayA9IGNyZWF0ZURvbUVsZW1lbnQoXCJhXCIsIHtcblx0XHRocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9JQW1Zb3VuZ2Jvc3N5L3dlYXRoZXItYXBwXCIsXG5cdH0pO1xuXHRjb25zdCBnaXRIdWJJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImlcIiwgeyBmYTogXCJmYS1naXRodWJcIiB9KTtcblx0Y29uc3QgaWNvbnNDcmVkaXQgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKTtcblx0Y29uc3QgZmxhdEljb25BbmNob3IgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiLFxuXHR9KTtcblx0Y29uc3QgaWNvbnM4QW5jaG9yID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuXHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0XHRocmVmOiBcImh0dHBzOi8vaWNvbnM4LmNvbS9cIixcblx0fSk7XG5cblx0ZmxhdEljb25BbmNob3IudGV4dENvbnRlbnQgPSBcIiBGbGF0aWNvbiBcIjtcblx0aWNvbnM4QW5jaG9yLnRleHRDb250ZW50ID0gXCIgSWNvbnM4IFwiO1xuXHRpY29uc0NyZWRpdC5hcHBlbmQoXCJJY29ucyBieVwiLCBmbGF0SWNvbkFuY2hvciwgXCIgJiBcIiwgaWNvbnM4QW5jaG9yKTtcblx0YW5jaG9yTGluay5hcHBlbmRDaGlsZChnaXRIdWJJY29uKTtcblx0Zm9vdGVyLmFwcGVuZChcblx0XHRcIkNvcHlyaWdodCBcXHUwMEE5IDIwMjIgSUFtWW91bmdib3NzeVwiLFxuXHRcdFwiICBcIixcblx0XHRhbmNob3JMaW5rLFxuXHRcdGljb25zQ3JlZGl0XG5cdCk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlZm9vdGVyIH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG5cdGNvbnN0IGhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cdGNvbnN0IHNlYXJjaERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJzZWFyY2gtZGl2XCIgfSk7XG5cdGNvbnN0IHNlYXJjaEJhciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbnB1dFwiLCB7XG5cdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciBDaXR5IE5hbWVcIixcblx0fSk7XG5cdGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiIH0pO1xuXHRjb25zdCBoZWFkZXJUaXRsZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0aXRsZS1kaXZcIiB9KTtcblx0Y29uc3QgaGVhZGVyVGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaDFcIik7XG5cblx0c2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcblx0aGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkNpdHlXYXRjaFwiO1xuXG5cdHNlYXJjaERpdi5hcHBlbmQoc2VhcmNoQmFyLCBzZWFyY2hCdXR0b24pO1xuXHRoZWFkZXJUaXRsZURpdi5hcHBlbmQoaGVhZGVyVGl0bGUpO1xuXHRoZWFkZXIuYXBwZW5kKGhlYWRlclRpdGxlRGl2LCBzZWFyY2hEaXYpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIgfTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQgRGF0ZSBmcm9tIFwiLi9pY29ucy9kYXRlLnBuZ1wiO1xuaW1wb3J0IEh1bWlkaXR5IGZyb20gXCIuL2ljb25zL2h1bWlkaXR5LnBuZ1wiO1xuaW1wb3J0IFByZXNzdXJlIGZyb20gXCIuL2ljb25zL3ByZXNzdXJlLnBuZ1wiO1xuaW1wb3J0IFRpbWV6b25lIGZyb20gXCIuL2ljb25zL3RpbWV6b25lLnBuZ1wiO1xuaW1wb3J0IFdpbmQgZnJvbSBcIi4vaWNvbnMvd2luZC5wbmdcIjtcbmltcG9ydCBTZWFMZXZlbCBmcm9tIFwiLi9pY29ucy9zZWFsZXZlbC5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnRzKCkge1xuXHRjb25zdCBtYWluRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcIm1haW5cIiwgeyBjbGFzczogXCJtYWluXCIgfSk7XG5cdGNyZWF0ZVRvZGF5Rm9yZWNhc3RDb250YWluZXIobWFpbkRpdik7XG5cdGNyZWF0ZU5leHRkYXlzQ29udGFpbmVyRGl2KG1haW5EaXYpO1xuXHRnZXRXYXRjaGxpc3QobWFpbkRpdik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW5EaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RheUZvcmVjYXN0Q29udGFpbmVyKG1haW5EaXYpIHtcblx0Y29uc3QgdG9kYXlEYXRhRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRvZGF5LWRhdGEtZGl2XCIgfSk7XG5cdG1haW5EaXYuYXBwZW5kKHRvZGF5RGF0YURpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRkYXlzQ29udGFpbmVyRGl2KG1haW5EaXYpIHtcblx0Y29uc3QgbmV4dDdEYXlzRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm5leHQtN2RheXMtZGl2XCIgfSk7XG5cdG1haW5EaXYuYXBwZW5kKG5leHQ3RGF5c0Rpdik7XG59XG5cbmZ1bmN0aW9uIGdldFdhdGNobGlzdChtYWluRGl2KSB7XG5cdGNvbnN0IHdhdGNobGlzdERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ3YXRjaGxpc3QtZGl2XCIgfSk7XG5cdG1haW5EaXYuYXBwZW5kKHdhdGNobGlzdERpdik7XG59XG5cbmZ1bmN0aW9uIG1pbm9yRGF0YVJlcG9ydCgpIHtcblx0Y29uc3QgbWlub3JEYXRhRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1szXSxcblx0XHR3aW5kRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIndpbmQtZGl2XCIgfSksXG5cdFx0d2luZCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwid2luZFwiIH0pLFxuXHRcdGRld1BvaW50RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRldy1wb2ludC1kaXZcIiB9KSxcblx0XHRkZXdQb2ludCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiZGV3LXBvaW50XCIgfSksXG5cdFx0dGltZVpvbmVEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGltZS16b25lLWRpdlwiIH0pLFxuXHRcdHRpbWVab25lID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ0aW1lLXpvbmVcIiB9KSxcblx0XHR1dkluZGV4RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInV2LWluZGV4LWRpdlwiIH0pLFxuXHRcdHV2SW5kZXggPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcInV2LWluZGV4XCIgfSksXG5cdFx0cHJlc3N1cmVEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwicHJlc3N1cmUtZGl2XCIgfSksXG5cdFx0cHJlc3N1cmUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcInByZXNzdXJlXCIgfSksXG5cdFx0aHVtaWRpdHlEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaHVtaWRpdHktZGl2XCIgfSksXG5cdFx0aHVtaWRpdHkgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImh1bWlkaXR5XCIgfSksXG5cdFx0TXlEYXRlID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogRGF0ZSB9KSxcblx0XHRNeUh1bWlkaXR5ID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogSHVtaWRpdHkgfSksXG5cdFx0TXlQcmVzc3VyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFByZXNzdXJlIH0pLFxuXHRcdE15VGltZXpvbmUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBUaW1lem9uZSB9KSxcblx0XHRNeVNlYUxldmVsID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogU2VhTGV2ZWwgfSksXG5cdFx0TXlXaW5kID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogV2luZCB9KTtcblxuXHR3aW5kRGl2LmFwcGVuZChNeVdpbmQsIHdpbmQpO1xuXHRkZXdQb2ludERpdi5hcHBlbmQoTXlTZWFMZXZlbCwgZGV3UG9pbnQpO1xuXHR0aW1lWm9uZURpdi5hcHBlbmQoTXlUaW1lem9uZSwgdGltZVpvbmUpO1xuXHR1dkluZGV4RGl2LmFwcGVuZChNeURhdGUsIHV2SW5kZXgpO1xuXHRwcmVzc3VyZURpdi5hcHBlbmQoTXlQcmVzc3VyZSwgcHJlc3N1cmUpO1xuXHRodW1pZGl0eURpdi5hcHBlbmQoTXlIdW1pZGl0eSwgaHVtaWRpdHkpO1xuXHRtaW5vckRhdGFEaXYuYXBwZW5kKFxuXHRcdHdpbmREaXYsXG5cdFx0ZGV3UG9pbnREaXYsXG5cdFx0dGltZVpvbmVEaXYsXG5cdFx0dXZJbmRleERpdixcblx0XHRwcmVzc3VyZURpdixcblx0XHRodW1pZGl0eURpdlxuXHQpO1xuXHRyZXR1cm4gW3dpbmQsIGRld1BvaW50LCB0aW1lWm9uZSwgdXZJbmRleCwgcHJlc3N1cmUsIGh1bWlkaXR5XTtcbn1cblxuZnVuY3Rpb24gc3VwZXJTY3JpcHQoKSB7XG5cdGNvbnN0IHN1cFNjcmlwdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzdXBcIiwgeyBjbGFzczogXCJzdXBlci1zY3JpcHRcIiB9KTtcblx0Y29uc3Qgc3VwU2NyaXB0MiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzdXBcIiwgeyBjbGFzczogXCJzdXBlci1zY3JpcHRcIiB9KTtcblx0c3VwU2NyaXB0LnRleHRDb250ZW50ID0gXCJvXCI7XG5cdHN1cFNjcmlwdDIuYXBwZW5kKHN1cFNjcmlwdCwgXCJDXCIpO1xuXHRyZXR1cm4gc3VwU2NyaXB0Mjtcbn1cblxuZnVuY3Rpb24gZGF0YURpc3BsYXkoKSB7XG5cdGNvbnN0IHRvZGF5RGF0YURpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdO1xuXHRjb25zdCB3ZWF0aGVyRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwid2VhdGhlci1kZXNjXCIgfSksXG5cdFx0bmFtZU9mQ2l0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzOiBcIm5hbWUtb2YtY2l0eVwiIH0pLFxuXHRcdGRlc2NJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImRlc2MtaWNvblwiIH0pLFxuXHRcdHRlbXBEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGVtcC1kaXZcIiB9KSxcblx0XHR0ZW1wUmFuZ2UgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGVtcC1yYW5nZVwiIH0pLFxuXHRcdGhpZ2hUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJoaWdoLXRlbXBcIiB9KSxcblx0XHRsb3dUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJsb3ctdGVtcFwiIH0pLFxuXHRcdGZlZWxzTGlrZVRlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImZlZWxzLWxpa2UtdGVtcFwiIH0pLFxuXHRcdHRlbXBlcmF0dXJlRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRlbXBlcmF0dXJlLWRpdlwiIH0pLFxuXHRcdHRlbXBlcmF0dXJlID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ0ZW1wZXJhdHVyZVwiIH0pLFxuXHRcdG1pbm9yRGF0YURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtaW5vci1kYXRhLWRpdlwiIH0pO1xuXG5cdHRlbXBSYW5nZS5hcHBlbmQobG93VGVtcCwgaGlnaFRlbXApO1xuXHR0ZW1wZXJhdHVyZURpdi5hcHBlbmQodGVtcGVyYXR1cmUsIGRlc2NJY29uKTtcblx0dGVtcERpdi5hcHBlbmQodGVtcFJhbmdlLCB0ZW1wZXJhdHVyZURpdiwgZmVlbHNMaWtlVGVtcCk7XG5cdHRvZGF5RGF0YURpdi5hcHBlbmQod2VhdGhlckRlc2MsIG5hbWVPZkNpdHksIHRlbXBEaXYsIG1pbm9yRGF0YURpdik7XG5cblx0cmV0dXJuIFtcblx0XHR3ZWF0aGVyRGVzYyxcblx0XHRkZXNjSWNvbixcblx0XHRuYW1lT2ZDaXR5LFxuXHRcdHRlbXBlcmF0dXJlLFxuXHRcdGxvd1RlbXAsXG5cdFx0aGlnaFRlbXAsXG5cdFx0ZmVlbHNMaWtlVGVtcCxcblx0XTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWFpbkNvbnRlbnRzLCBtaW5vckRhdGFSZXBvcnQsIHN1cGVyU2NyaXB0LCBkYXRhRGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JlY2FzdENhcmQoZGFpbHkpIHtcblx0Y29uc3QgbmV4dDdEYXlzRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0sXG5cdFx0Y2FyZCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjYXJkXCIgfSksXG5cdFx0ZGF5QW5kRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0aWNvbkRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpY29uLWRpdlwiIH0pLFxuXHRcdHRlbXBEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIpLFxuXHRcdGRheSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdHdlYXRoZXJEZXNjID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0d2VhdGhlckRlc2NJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiKSxcblx0XHRsb3dUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0aGlnaFRlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKTtcblxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoZGFpbHkuZHQgKiAxMDAwKTtcblx0Y29uc3Qgd2Vla2RheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xuXG5cdGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXl9YDtcblx0d2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBgJHtkYWlseS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG5cdHdlYXRoZXJEZXNjSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtkYWlseS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG5cdGhpZ2hUZW1wLnRleHRDb250ZW50ID0gYCR7ZGFpbHkudGVtcC5tYXh9YDtcblx0bG93VGVtcC50ZXh0Q29udGVudCA9IGAke2RhaWx5LnRlbXAubWF4fWA7XG5cdGRheUFuZERlc2MuYXBwZW5kKGRheSwgd2VhdGhlckRlc2MpO1xuXHR0ZW1wRGl2LmFwcGVuZChoaWdoVGVtcCwgbG93VGVtcCk7XG5cdGljb25EaXYuYXBwZW5kKHdlYXRoZXJEZXNjSWNvbiwgdGVtcERpdik7XG5cdGNhcmQuYXBwZW5kKGRheUFuZERlc2MsIGljb25EaXYpO1xuXHRuZXh0N0RheXNEaXYuYXBwZW5kKGNhcmQpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JlY2FzdENhcmQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL3BhZ2UtaGVhZGVyXCI7XG5pbXBvcnQge1xuXHRnZXRDb3VudHJ5TmFtZSxcblx0Z2V0RGF0YSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRnZXRXZWF0aGVyRGF0YSxcblx0c2NyZWVuTG9hZGVyLFxufSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgeyBjcmVhdGVmb290ZXIgfSBmcm9tIFwiLi9wYWdlLWZvb3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkNvbnRlbnRzIH0gZnJvbSBcIi4vcGFnZS1tYWluXCI7XG5pbXBvcnQge1xuXHRhZGRMaXN0ZW5lclRvQnV0dG9uLFxuXHRkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0LFxuXHR3YXRjaGxpc3QsXG59IGZyb20gXCIuL2NpdHktd2F0Y2hsaXN0XCI7XG5pbXBvcnQgeyBjaXR5TmFtZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jcmVhdGVNYWluQ29udGVudHMoKTtcbmNyZWF0ZWZvb3RlcigpO1xud2F0Y2hsaXN0KCk7XG5zY3JlZW5Mb2FkZXIoKTtcbmFkZExpc3RlbmVyVG9CdXR0b24oKTtcbmRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QoKTtcbmdldFdlYXRoZXJEYXRhLmNhbGwoXG5cdGRvY3VtZW50LFxuXHRnZXREYXRhLmJpbmQoZG9jdW1lbnQpLFxuXHRnZXRMb25BbmRMYXQsXG5cdGNpdHlOYW1lLFxuXHRmYWxzZSxcblx0Z2V0Q291bnRyeU5hbWVcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9