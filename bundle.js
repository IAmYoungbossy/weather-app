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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\n\nh1 {\n\tfont-size: 2rem;\n\tfont-family: monospace;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tbackground-color: #000000;\n\tborder: 1px solid #e9b8b8;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,2BAA2B;CAC3B,kBAAkB;AACnB;;AAEA,mBAAmB;AACnB;CACC,aAAa;CACb,YAAY;CACZ,QAAQ;CACR,eAAe;CACf,kBAAkB;CAClB,mBAAmB;CACnB,sBAAsB;CACtB,gCAAgC;CAChC,yBAAyB;AAC1B;;AAEA;CACC,OAAO;CACP,YAAY;CACZ,kBAAkB;CAClB,mBAAmB;CACnB,mBAAmB;CACnB,yBAAyB;CACzB,0BAA0B;CAC1B,6BAA6B;CAC7B,aAAa;CACb,YAAY;CACZ,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,mBAAmB;CACnB,mBAAmB;CACnB,yBAAyB;CACzB,WAAW;CACX,aAAa;CACb,YAAY;AACb;;AAEA;CACC,eAAe;CACf,sBAAsB;AACvB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,OAAO;AACR;;AAEA,iBAAiB;AACjB;CACC,OAAO;CACP,aAAa;CACb,oCAAoC;AACrC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,yBAAyB;CACzB,OAAO;CACP,yBAAyB;CACzB,6BAA6B;CAC7B,iCAAiC;CACjC,uCAAuC;CACvC,sCAAsC;CACtC,yCAAyC;AAC1C;;AAEA;;;CAGC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,OAAO;CACP,kBAAkB;CAClB,aAAa;CACb,2BAA2B;CAC3B,8BAA8B;CAC9B,eAAe;CACf,yBAAyB;CACzB,SAAS;AACV;;AAEA;CACC,OAAO;CACP,2BAA2B;CAC3B,kBAAkB;CAClB,yBAAyB;CACzB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,0BAA0B;CAC1B,YAAY;AACb;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,mBAAmB;CACnB,4BAA4B;AAC7B;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,QAAQ;CACR,kBAAkB;CAClB,wCAAwC;AACzC;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,yBAAyB;AAC1B;;AAEA;CACC,OAAO;CACP,aAAa;AACd;;AAEA;CACC,yBAAyB;CACzB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,kBAAkB;CAClB,cAAc;CACd,wCAAwC;AACzC;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,WAAW;CACX,QAAQ;CACR,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,SAAS;AACV;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,2DAA2D;CAC3D,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,oCAAoC;CACpC,kBAAkB;CAClB,mBAAmB;CACnB,cAAc;CACd,YAAY;CACZ,iBAAiB;CACjB,sBAAsB;CACtB,wCAAwC;CACxC,yBAAyB;CACzB,yBAAyB;AAC1B;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,cAAc;CACd,yBAAyB;CACzB,iBAAiB;CACjB,yBAAyB;CACzB,OAAO;CACP,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;CACjB,0BAA0B;CAC1B,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,yBAAyB;CACzB,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA,mBAAmB;AACnB;CACC,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,6BAA6B;CAC7B,yBAAyB;AAC1B;;AAEA;;CAEC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,gCAAgC;CAChC,mCAAmC;AACpC;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,MAAM;CACN,OAAO;AACR;;AAEA;;CAEC,0BAA0B;CAC1B,kBAAkB;CAClB,8BAA8B;CAC9B,WAAW;CACX,YAAY;CACZ,0CAA0C;CAC1C,kCAAkC;CAClC,kBAAkB;CAClB,QAAQ;CACR,SAAS;AACV;;AAEA;CACC,yBAAyB;CACzB,6BAA6B;CAC7B,WAAW;CACX,YAAY;CACZ,QAAQ;CACR,SAAS;AACV;;AAEA,WAAW;AACX;CACC;EACC,+BAA+B;CAChC;;CAEA;EACC,iCAAiC;CAClC;AACD;;AAEA;CACC;EACC,uBAAuB;CACxB;;CAEA;EACC,yBAAyB;CAC1B;AACD;;AAEA,4DAA4D;AAC5D;CACC;EACC,OAAO;EACP,aAAa;EACb,sBAAsB;CACvB;;CAEA;EACC,2BAA2B;CAC5B;;CAEA;EACC,4BAA4B;CAC7B;;CAEA;EACC,4BAA4B;CAC7B;;CAEA;EACC,QAAQ;EACR,SAAS;CACV;;CAEA;EACC,QAAQ;EACR,SAAS;CACV;AACD","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: dimgrey;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n}\n\nh1 {\n\tfont-size: 2rem;\n\tfont-family: monospace;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n\t/* grid-template-columns: 3fr 1fr; */\n}\n\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #100f0f;\n\tgap: 10px;\n}\n\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #100f0f;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tborder-radius: 10px;\n\tbackground-color: rgb(0 0 0);\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(255 255 255 / 50%);\n\tbackground-color: #000000;\n\tborder: 1px solid #e9b8b8;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #000000;\n\tpadding: 2px 10px;\n\tborder: 1px solid #e9b8b8;\n\tflex: 1;\n\tbox-sizing: border-box;\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #451b1b;\n\tbackground-color: #000000;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\t/* backdrop-filter: blur(1px); */\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n}"],"sourceRoot":""}]);
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

	temp.append(`${response.current.temp}`);
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
				addCityToWatchlist.bind(document),
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");






let countryAndCityName;
let countryAndCityName2;
const exclude = `&units=metric&APPID=${_config__WEBPACK_IMPORTED_MODULE_2__.API_TOKEN.KEY2}`,
	exclude2 = `&exclude=minutely,hourly,alerts&units=metric&appid=${_config__WEBPACK_IMPORTED_MODULE_2__.API_TOKEN.KEY2}`;

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
			document.body.children[1].children[0].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${response.results[0].urls.raw})`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQiwyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQixrQkFBa0IsMkJBQTJCLGdDQUFnQyx1QkFBdUIsR0FBRyxrQ0FBa0Msa0JBQWtCLGlCQUFpQixhQUFhLG9CQUFvQix1QkFBdUIsd0JBQXdCLDJCQUEyQixxQ0FBcUMsOEJBQThCLEdBQUcsdUJBQXVCLFlBQVksaUJBQWlCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLDhCQUE4QiwrQkFBK0Isa0NBQWtDLGtCQUFrQixpQkFBaUIsbUJBQW1CLEdBQUcsWUFBWSxzQkFBc0Isd0JBQXdCLHdCQUF3Qiw4QkFBOEIsZ0JBQWdCLGtCQUFrQixpQkFBaUIsR0FBRyxRQUFRLG9CQUFvQiwyQkFBMkIsR0FBRyxpQkFBaUIsWUFBWSxrQkFBa0IscUJBQXFCLEdBQUcsZ0JBQWdCLFlBQVksR0FBRyw4QkFBOEIsWUFBWSxrQkFBa0IsdUNBQXVDLEtBQUsscUJBQXFCLGtCQUFrQiwyQkFBMkIsOEJBQThCLFlBQVksOEJBQThCLGtDQUFrQyxzQ0FBc0MsNENBQTRDLDJDQUEyQyw4Q0FBOEMsR0FBRyx3RkFBd0YsaUJBQWlCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLHFCQUFxQixZQUFZLHVCQUF1QixrQkFBa0IsZ0NBQWdDLG1DQUFtQyxvQkFBb0IsOEJBQThCLGNBQWMsR0FBRyxvQkFBb0IsWUFBWSxnQ0FBZ0MsdUJBQXVCLDhCQUE4Qix1QkFBdUIsR0FBRyx1QkFBdUIsdUJBQXVCLCtCQUErQixpQkFBaUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFFBQVEsb0JBQW9CLHVCQUF1QixxQkFBcUIsd0JBQXdCLGlDQUFpQyxHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLHdCQUF3QixhQUFhLHVCQUF1Qiw2Q0FBNkMsR0FBRyx1QkFBdUIsaUJBQWlCLGdCQUFnQixvQkFBb0IsaUJBQWlCLHNCQUFzQiw4QkFBOEIsR0FBRyxxQ0FBcUMsWUFBWSxrQkFBa0IsR0FBRyxXQUFXLDhCQUE4QixrQkFBa0Isd0JBQXdCLG1DQUFtQyx1QkFBdUIsbUJBQW1CLDZDQUE2QyxHQUFHLDZCQUE2QixrQkFBa0Isd0JBQXdCLEdBQUcsaUNBQWlDLHNCQUFzQixHQUFHLGFBQWEsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsYUFBYSx1QkFBdUIsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsaUJBQWlCLGtCQUFrQixjQUFjLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLGtCQUFrQixvQkFBb0IsR0FBRyxnQ0FBZ0Msb0JBQW9CLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLHFCQUFxQixrQkFBa0IsZ0VBQWdFLGNBQWMsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3QixjQUFjLHlDQUF5Qyx1QkFBdUIsd0JBQXdCLG1CQUFtQixpQkFBaUIsc0JBQXNCLDJCQUEyQiw2Q0FBNkMsOEJBQThCLDhCQUE4QixHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLGtDQUFrQyxtQkFBbUIsOEJBQThCLHNCQUFzQiw4QkFBOEIsWUFBWSwyQkFBMkIsR0FBRywrQkFBK0Isc0JBQXNCLCtCQUErQix1QkFBdUIsR0FBRyxlQUFlLGtCQUFrQiw4QkFBOEIsd0JBQXdCLEdBQUcsc0JBQXNCLHNCQUFzQix3QkFBd0IsR0FBRyxrQ0FBa0MsaUJBQWlCLHVCQUF1QixpQkFBaUIscUJBQXFCLGtDQUFrQyw4QkFBOEIsR0FBRyxxREFBcUQsdUJBQXVCLGdCQUFnQixpQkFBaUIsbUNBQW1DLDBDQUEwQyxHQUFHLGlDQUFpQyxnQkFBZ0IsaUJBQWlCLFdBQVcsWUFBWSxHQUFHLGlDQUFpQywrQkFBK0IsdUJBQXVCLG1DQUFtQyxnQkFBZ0IsaUJBQWlCLCtDQUErQyx1Q0FBdUMsdUJBQXVCLGFBQWEsY0FBYyxHQUFHLHVCQUF1Qiw4QkFBOEIsa0NBQWtDLGdCQUFnQixpQkFBaUIsYUFBYSxjQUFjLEdBQUcsMkNBQTJDLFFBQVEsc0NBQXNDLEtBQUssWUFBWSx3Q0FBd0MsS0FBSyxHQUFHLHFCQUFxQixRQUFRLDhCQUE4QixLQUFLLFlBQVksZ0NBQWdDLEtBQUssR0FBRyx5R0FBeUcsVUFBVSxjQUFjLG9CQUFvQiw2QkFBNkIsS0FBSyx1QkFBdUIsa0NBQWtDLEtBQUssdUJBQXVCLG1DQUFtQyxLQUFLLHNCQUFzQixtQ0FBbUMsS0FBSyx5QkFBeUIsZUFBZSxnQkFBZ0IsS0FBSyxlQUFlLGVBQWUsZ0JBQWdCLEtBQUssR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUss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O1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3QjtBQU92QjtBQUN1QjtBQUNJO0FBS3ZCO0FBQ2lCOztBQUUzQywwREFBWTtBQUNaLDhEQUFrQjtBQUNsQiwwREFBWTtBQUNaLDBEQUFTO0FBQ1QseURBQVk7QUFDWixvRUFBbUI7QUFDbkIsMEVBQXlCO0FBQ3pCLDREQUFtQjtBQUNuQjtBQUNBLENBQUMscURBQVk7QUFDYixDQUFDLHFEQUFZO0FBQ2IsQ0FBQyxvREFBUTtBQUNUO0FBQ0EsQ0FBQyx1REFBYztBQUNmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jaXR5LXdhdGNobGlzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3JlYXRlLWRvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWZvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLW1haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2V2ZW4tZGF5cy1mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHBhZGRpbmc6IDIwcHggNTBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnNlYXJjaC1kaXY+aW5wdXQge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjb2xvcjogI2VkYWVhZTtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGltZ3JleTtcXG5cXHRjb2xvcjogc25vdztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi50aXRsZS1kaXYge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi8qIE1haW4gU3R5bGluZyAqL1xcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHQvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7ICovXFxufVxcblxcbi50b2RheS1kYXRhLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDVweCA1cHggMHB4IDIwcHg7XFxuXFx0ZmxleDogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMHB4IDIwcHggYmxhY2s7XFxufVxcblxcbi50b2RheS1kYXRhLWRpdj5kaXY6Zmlyc3Qtb2YtdHlwZSxcXG4udG9kYXktZGF0YS1kaXY+aDI6Zmlyc3Qtb2YtdHlwZSxcXG4udGVtcC1kaXY+KiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VhdGhlci1kZXNjIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDIwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLndhdGNobGlzdC1kaXYge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMTVweCAyMHB4IDVweCAxMHB4O1xcblxcdGdyaWQtYXJlYTogMS8yLzMvMztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndhdGNobGlzdC1kaXY+aDIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbnVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5saSB7XFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcblxcdHBhZGRpbmc6IDIwcHggMTBweDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwKTtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcblxcdGdhcDogNXB4O1xcblxcdHBhZGRpbmctbGVmdDogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzIDE4NCAxODQgLyA1MCUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmFkZC1idXR0b24+aW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY2l0eSB7XFxuXFx0cGFkZGluZzogN3B4IDMwcHggN3B4IDdweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjb2xvcjogI2ZmZWJjZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzIDE4NCAxODQgLyA1MCUpO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZT5pbWcge1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uZGVsZXRlIHtcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0dG9wOiA1cHg7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdy1kZWxldGUge1xcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50ZW1wLXJhbmdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG5cXHRmb250LXNpemU6IDRyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZT4uc3VwZXItc2NyaXB0IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kZXNjLWljb24ge1xcblxcdHdpZHRoOiA3NXB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+KiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6ICMxYTAwMmE7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNlOWI4Yjg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdj4qPmltZyB7XFxuXFx0d2lkdGg6IDI1cHg7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGNvbG9yOiAjZWJjYWNhO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2U5YjhiODtcXG5cXHRmbGV4OiAxO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jYXJkPmRpdj5wOmZpcnN0LW9mLXR5cGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGZvbnQtc2l6ZTogMC45NXJlbTtcXG59XFxuXFxuLmljb24tZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZlZWxzLWxpa2UtdGVtcCB7XFxuXFx0bWFyZ2luLXRvcDogLTE1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXG5mb290ZXIge1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM0NTFiMWI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXIsXFxuLmxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpOyAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3Qge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLmxvYWRlcixcXG4ubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0Ym9yZGVyOiAxMHB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlci10b3A6IDEwcHggc29saWQgIzFkNGQ0ZjtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcblxcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMzUlO1xcblxcdGxlZnQ6IDQ1JTtcXG59XFxuXFxuLmxvYWRlci13YXRjaGxpc3Qge1xcblxcdGJvcmRlcjogNXB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHRvcDogNDAlO1xcblxcdGxlZnQ6IDQwJTtcXG59XFxuXFxuLyogU2FmYXJpICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIFVzZXMgZmxleC1kaXJlY3Rpb24gY29sdW1uIGZvciBzY3JlZW4gc2l6ZXMgYmVsb3cgNjAwcHggKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQudG9kYXktZGF0YS1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0Lm5leHQtN2RheXMtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQud2F0Y2hsaXN0LWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlci13YXRjaGxpc3Qge1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDQzJTtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlciB7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0XFx0bGVmdDogNDAlO1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQixrQkFBa0I7QUFDbkI7O0FBRUEsbUJBQW1CO0FBQ25CO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixRQUFRO0NBQ1IsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0NBQzdCLGFBQWE7Q0FDYixZQUFZO0NBQ1osY0FBYztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBLGlCQUFpQjtBQUNqQjtDQUNDLE9BQU87Q0FD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RUMsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsV0FBVztDQUNYLFlBQVk7Q0FDWiwwQ0FBMEM7Q0FDMUMsa0NBQWtDO0NBQ2xDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztBQUNWOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDZCQUE2QjtDQUM3QixXQUFXO0NBQ1gsWUFBWTtDQUNaLFFBQVE7Q0FDUixTQUFTO0FBQ1Y7O0FBRUEsV0FBVztBQUNYO0NBQ0M7RUFDQywrQkFBK0I7Q0FDaEM7O0NBRUE7RUFDQyxpQ0FBaUM7Q0FDbEM7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MseUJBQXlCO0NBQzFCO0FBQ0Q7O0FBRUEsNERBQTREO0FBQzVEO0NBQ0M7RUFDQyxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLDJCQUEyQjtDQUM1Qjs7Q0FFQTtFQUNDLDRCQUE0QjtDQUM3Qjs7Q0FFQTtFQUNDLDRCQUE0QjtDQUM3Qjs7Q0FFQTtFQUNDLFFBQVE7RUFDUixTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxRQUFRO0VBQ1IsU0FBUztDQUNWO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHBhZGRpbmc6IDIwcHggNTBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnNlYXJjaC1kaXY+aW5wdXQge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzEwMGYwZjtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjb2xvcjogI2VkYWVhZTtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXG5cXHRoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGltZ3JleTtcXG5cXHRjb2xvcjogc25vdztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi50aXRsZS1kaXYge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi8qIE1haW4gU3R5bGluZyAqL1xcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHQvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7ICovXFxufVxcblxcbi50b2RheS1kYXRhLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDVweCA1cHggMHB4IDIwcHg7XFxuXFx0ZmxleDogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMHB4IDIwcHggYmxhY2s7XFxufVxcblxcbi50b2RheS1kYXRhLWRpdj5kaXY6Zmlyc3Qtb2YtdHlwZSxcXG4udG9kYXktZGF0YS1kaXY+aDI6Zmlyc3Qtb2YtdHlwZSxcXG4udGVtcC1kaXY+KiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VhdGhlci1kZXNjIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDIwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLndhdGNobGlzdC1kaXYge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMTVweCAyMHB4IDVweCAxMHB4O1xcblxcdGdyaWQtYXJlYTogMS8yLzMvMztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndhdGNobGlzdC1kaXY+aDIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbnVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5saSB7XFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcblxcdHBhZGRpbmc6IDIwcHggMTBweDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwKTtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcblxcdGdhcDogNXB4O1xcblxcdHBhZGRpbmctbGVmdDogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzIDE4NCAxODQgLyA1MCUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmFkZC1idXR0b24+aW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY2l0eSB7XFxuXFx0cGFkZGluZzogN3B4IDMwcHggN3B4IDdweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjb2xvcjogI2ZmZWJjZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzIDE4NCAxODQgLyA1MCUpO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2l0eT5kaXY6Zmlyc3Qtb2YtdHlwZT5pbWcge1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uZGVsZXRlIHtcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0dG9wOiA1cHg7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdy1kZWxldGUge1xcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50ZW1wLXJhbmdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG5cXHRmb250LXNpemU6IDRyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZT4uc3VwZXItc2NyaXB0IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kZXNjLWljb24ge1xcblxcdHdpZHRoOiA3NXB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4ubWlub3ItZGF0YS1kaXY+KiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6ICMxYTAwMmE7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNlOWI4Yjg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdj4qPmltZyB7XFxuXFx0d2lkdGg6IDI1cHg7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGNvbG9yOiAjZWJjYWNhO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2U5YjhiODtcXG5cXHRmbGV4OiAxO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jYXJkPmRpdj5wOmZpcnN0LW9mLXR5cGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGZvbnQtc2l6ZTogMC45NXJlbTtcXG59XFxuXFxuLmljb24tZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZlZWxzLWxpa2UtdGVtcCB7XFxuXFx0bWFyZ2luLXRvcDogLTE1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXG5mb290ZXIge1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM0NTFiMWI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXIsXFxuLmxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpOyAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3Qge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLmxvYWRlcixcXG4ubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0Ym9yZGVyOiAxMHB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlci10b3A6IDEwcHggc29saWQgIzFkNGQ0ZjtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcblxcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMzUlO1xcblxcdGxlZnQ6IDQ1JTtcXG59XFxuXFxuLmxvYWRlci13YXRjaGxpc3Qge1xcblxcdGJvcmRlcjogNXB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHRvcDogNDAlO1xcblxcdGxlZnQ6IDQwJTtcXG59XFxuXFxuLyogU2FmYXJpICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIFVzZXMgZmxleC1kaXJlY3Rpb24gY29sdW1uIGZvciBzY3JlZW4gc2l6ZXMgYmVsb3cgNjAwcHggKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQudG9kYXktZGF0YS1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0Lm5leHQtN2RheXMtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQud2F0Y2hsaXN0LWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlci13YXRjaGxpc3Qge1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDQzJTtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlciB7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0XFx0bGVmdDogNDAlO1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQge1xuXHRjbGVhclNjcmVlbkxvYWRlcixcblx0Z2V0Q291bnRyeU5hbWUsXG5cdGdldERhdGEsXG5cdGdldExvbkFuZExhdCxcblx0Z2V0V2VhdGhlckRhdGEsXG5cdHNjcmVlbkxvYWRlcixcbn0gZnJvbSBcIi4vZmV0Y2gtZGF0YVwiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIi4vaWNvbnMvYWRkY2l0eS5wbmdcIjtcbmltcG9ydCBEZWxldGUgZnJvbSBcIi4vaWNvbnMvZGVsZXRlLnBuZ1wiO1xuaW1wb3J0IHsgc2V0d2F0Y2hsaXN0QXJyYXksIHdhdGNobGlzdEFycmF5IH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiB3YXRjaGxpc3QoKSB7XG5cdGNvbnN0IHdhdGNobGlzdERpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLFxuXHRcdHdhdGNobGlzdEhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiKSxcblx0XHRjaXR5TGlzdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRhZGRDaXR5QnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudChcImxpXCIsIHsgY2xhc3M6IFwiYWRkLWJ1dHRvblwiIH0pLFxuXHRcdHdhdGNobGlzdElucHV0ID0gY3JlYXRlRG9tRWxlbWVudChcImlucHV0XCIsIHtcblx0XHRcdGNsYXNzOiBcIndhdGNobGlzdC1pbnB1dFwiLFxuXHRcdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkFkZCBDaXR5XCIsXG5cdFx0fSksXG5cdFx0TXlBZGRJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImFkZC1pY29uXCIsIHNyYzogQWRkSWNvbiB9KTtcblxuXHRhZGRDaXR5QnV0dG9uLmFwcGVuZChNeUFkZEljb24sIHdhdGNobGlzdElucHV0KTtcblx0d2F0Y2hsaXN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJXYXRjaGxpc3RcIjtcblx0Y2l0eUxpc3QuYXBwZW5kKGFkZENpdHlCdXR0b24pO1xuXHR3YXRjaGxpc3REaXYuYXBwZW5kKHdhdGNobGlzdEhlYWRlciwgY2l0eUxpc3QpO1xufVxuXG5mdW5jdGlvbiBhZGRDaXR5VG9XYXRjaGxpc3QocmVzcG9uc2UpIHtcblx0Y29uc3QgYWRkQ2l0eUJ1dHRvbiA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZCxcblx0XHRjaXR5TGlzdCA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0sXG5cdFx0d2F0Y2hsaXN0SW5wdXQgPSBhZGRDaXR5QnV0dG9uLmNoaWxkcmVuWzFdLFxuXHRcdGljb25BbmRDaXR5TmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0Y2l0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcImNpdHlcIiB9KSxcblx0XHR0ZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0Y2l0eU5hbWUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHRkZXNjSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0bXlEZWxldGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgY2xhc3M6IFwiZGVsZXRlXCIsIHNyYzogRGVsZXRlIH0pO1xuXG5cdGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7d2F0Y2hsaXN0SW5wdXQudmFsdWV9YDtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KSBpY29uQW5kQ2l0eU5hbWUuYXBwZW5kKGRlc2NJY29uLCBjaXR5TmFtZSk7XG5cdGVsc2UgaWNvbkFuZENpdHlOYW1lLmFwcGVuZChkZXNjSWNvbiwgdGhpcyk7XG5cblx0dGVtcC5hcHBlbmQoYCR7cmVzcG9uc2UuY3VycmVudC50ZW1wfWApO1xuXHRnZXRJY29uQW5kVGVtcChjaXR5LCBpY29uQW5kQ2l0eU5hbWUsIGRlc2NJY29uLCByZXNwb25zZSwgdGVtcCwgbXlEZWxldGUpO1xuXHRjaXR5TGlzdC5pbnNlcnRCZWZvcmUoY2l0eSwgYWRkQ2l0eUJ1dHRvbik7XG5cdGFkZEV2ZW50TGlzdGVuZXJUb0NpdHkobXlEZWxldGUsIGNpdHkpO1xuXHRpZiAoXG5cdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0ubGFzdENoaWxkLmNsYXNzTmFtZSA9PT1cblx0XHRcImxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0XCJcblx0KVxuXHRcdGNsZWFyU2NyZWVuTG9hZGVyLmNhbGwoZG9jdW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9DaXR5KG15RGVsZXRlLCBjaXR5KSB7XG5cdG15RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0bGV0IGxpc3RBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpKTtcblx0XHRsZXQgaW5kZXhPZkNpdHkgPSBsaXN0QXJyYXkuaW5kZXhPZihteURlbGV0ZS5wYXJlbnROb2RlKTtcblx0XHR3YXRjaGxpc3RBcnJheS5zcGxpY2UoaW5kZXhPZkNpdHksIDEpO1xuXHRcdHNldHdhdGNobGlzdEFycmF5KCk7XG5cdFx0bXlEZWxldGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG15RGVsZXRlLnBhcmVudE5vZGUpO1xuXHR9KTtcblx0Y2l0eS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PlxuXHRcdG15RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJzaG93LWRlbGV0ZVwiKVxuXHQpO1xuXHRjaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+XG5cdFx0bXlEZWxldGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZGVsZXRlXCIpXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGdldEljb25BbmRUZW1wKFxuXHRjaXR5LFxuXHRpY29uQW5kQ2l0eU5hbWUsXG5cdGRlc2NJY29uLFxuXHRyZXNwb25zZSxcblx0dGVtcCxcblx0bXlEZWxldGVcbikge1xuXHRjb25zdCB3YXRjaGxpc3RJbnB1dCA9XG5cdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGRcblx0XHRcdC5jaGlsZE5vZGVzWzFdO1xuXHRjaXR5LmFwcGVuZChpY29uQW5kQ2l0eU5hbWUsIHRlbXAsIG15RGVsZXRlKTtcblx0ZGVzY0ljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7cmVzcG9uc2UuY3VycmVudC53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG5cdGlmICh3YXRjaGxpc3RJbnB1dC52YWx1ZS50cmltKCkgIT09IFwiXCIpXG5cdFx0d2F0Y2hsaXN0QXJyYXkucHVzaCh3YXRjaGxpc3RJbnB1dC52YWx1ZSksIHNldHdhdGNobGlzdEFycmF5KCk7XG5cdGlmICh3YXRjaGxpc3RJbnB1dC52YWx1ZSkgd2F0Y2hsaXN0SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclRvQnV0dG9uKCkge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRXZlbnRMaXN0ZW5lcnMpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhlKSB7XG5cdGNvbnN0IGFkZENpdHlCdXR0b24gPVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQsXG5cdFx0aGVhZGVySW5wdXQgPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLFxuXHRcdGhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0sXG5cdFx0d2F0Y2hsaXN0SW5wdXQgPSBhZGRDaXR5QnV0dG9uLmNoaWxkTm9kZXNbMV07XG5cblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC1pY29uXCIpIHtcblx0XHRpZiAod2F0Y2hsaXN0SW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XG5cdFx0c2NyZWVuTG9hZGVyLmNhbGwoZG9jdW1lbnQpLFxuXHRcdFx0Z2V0V2VhdGhlckRhdGEuYXBwbHkoZG9jdW1lbnQuYm9keSwgW1xuXHRcdFx0XHRhZGRDaXR5VG9XYXRjaGxpc3QuYmluZChkb2N1bWVudCksXG5cdFx0XHRcdGdldExvbkFuZExhdCxcblx0XHRcdFx0d2F0Y2hsaXN0SW5wdXQudmFsdWUsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRnZXRDb3VudHJ5TmFtZSxcblx0XHRcdF0pO1xuXHR9XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpLmZvckVhY2goKGNpdHlMaXN0KSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QgfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdIHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblsxXSB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0gfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0KSB7XG5cdFx0XHRzY3JlZW5Mb2FkZXIoKTtcblx0XHRcdGNvbnN0IGNpdHkgPSBjaXR5TGlzdC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0XHRnZXRXZWF0aGVyRGF0YShnZXREYXRhLCBnZXRMb25BbmRMYXQsIGNpdHksIGZhbHNlLCBnZXRDb3VudHJ5TmFtZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAoZS50YXJnZXQgPT09IGhlYWRlckJ1dHRvbikge1xuXHRcdGlmIChoZWFkZXJJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcblx0XHRzY3JlZW5Mb2FkZXIoKTtcblx0XHRnZXRXZWF0aGVyRGF0YShcblx0XHRcdGdldERhdGEsXG5cdFx0XHRnZXRMb25BbmRMYXQsXG5cdFx0XHRoZWFkZXJJbnB1dC52YWx1ZSxcblx0XHRcdGhlYWRlcklucHV0LFxuXHRcdFx0Z2V0Q291bnRyeU5hbWVcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlbGF5RXhlY3V0aW9uKGNpdHkpIHtcblx0Y29uc3QgZmV0Y2hOb3cgPSBnZXRXZWF0aGVyRGF0YShcblx0XHRhZGRDaXR5VG9XYXRjaGxpc3QuYmluZChjaXR5KSxcblx0XHRnZXRMb25BbmRMYXQsXG5cdFx0Y2l0eSxcblx0XHRmYWxzZSxcblx0XHRnZXRDb3VudHJ5TmFtZVxuXHQpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoZmV0Y2hOb3cpLCAxMjAwKTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QoKSB7XG5cdGlmICh3YXRjaGxpc3RBcnJheS5sZW5ndGggPiAwKVxuXHRcdGZvciAoY29uc3QgY2l0eSBvZiB3YXRjaGxpc3RBcnJheSkge1xuXHRcdFx0YXdhaXQgZGVsYXlFeGVjdXRpb24oY2l0eSk7XG5cdFx0fVxufVxuXG5leHBvcnQge1xuXHR3YXRjaGxpc3QsXG5cdGFkZExpc3RlbmVyVG9CdXR0b24sXG5cdGFkZENpdHlUb1dhdGNobGlzdCxcblx0ZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCxcbn07XG4iLCJleHBvcnQgY29uc3QgQVBJX1RPS0VOID0ge1xuXHRLRVk6IFwiYzkzZmQxODE3ZjNmYmU0MmFlYWMwYTYzMDc2NjAzYjlcIixcblx0S0VZMjogXCIwYWQ3MTNmYWMxMjBiODNiZDkwNzI2MWZiNzc0MmZkN1wiLFxuXHRLRVkzOiBcIjIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0XCIsXG5cdFVOU1BMQVNIX0FDQ0VTU19LRVk6IFwia2RGcWpiaGNpSUZJYjBsRGVmSTJJNHpxUmJBalBhMTNaR3UwZGpudW5zNFwiLFxuXHRVTlNQTEFTSF9TRUNSRVRfS0VZOiBcImVwa3lDWG9nSHFkOGsydVg3b0FyYWRsMXA0NDJEY2YtREk4SXY3VkVUdzhcIixcbn07IiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIERPTSBFbGVtZW50c1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQodHlwZSwgYXR0cmlidXRlcykge1xuXHRjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuXHRpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcblx0c2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHRPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblx0fSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfTsiLCJpbXBvcnQgeyBkYXRhRGlzcGxheSwgbWlub3JEYXRhUmVwb3J0LCBzdXBlclNjcmlwdCB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuaW1wb3J0IHsgY3JlYXRlRm9yZWNhc3RDYXJkIH0gZnJvbSBcIi4vc2V2ZW4tZGF5cy1mb3JlY2FzdFwiO1xuaW1wb3J0IHsgQVBJX1RPS0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5pbXBvcnQgeyBuZXdOYW1lLCBzZXRDaXR5TmFtZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxubGV0IGNvdW50cnlBbmRDaXR5TmFtZTtcbmxldCBjb3VudHJ5QW5kQ2l0eU5hbWUyO1xuY29uc3QgZXhjbHVkZSA9IGAmdW5pdHM9bWV0cmljJkFQUElEPSR7QVBJX1RPS0VOLktFWTJ9YCxcblx0ZXhjbHVkZTIgPSBgJmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtBUElfVE9LRU4uS0VZMn1gO1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShmdW5jLCBjYiwgY2l0eU5hbWUsIGhlYWRlcklucHV0LCBnZXROYW1lKSB7XG5cdGZldGNoKFxuXHRcdGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JHtleGNsdWRlfWAsXG5cdFx0e1xuXHRcdFx0bW9kZTogXCJjb3JzXCIsXG5cdFx0fVxuXHQpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zdCB7IGxhdCB9ID0gcmVzcG9uc2UuY29vcmQ7XG5cdFx0XHRjb25zdCB7IGxvbiB9ID0gcmVzcG9uc2UuY29vcmQ7XG5cdFx0XHRnZXROYW1lLmNhbGwodGhpcywgcmVzcG9uc2UpO1xuXHRcdFx0Y2IobGF0LCBsb24sIGZ1bmMsIGhlYWRlcklucHV0KTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIGdldExvbkFuZExhdChsYXQsIGxvbiwgY2FsbGJhY2ssIGhlYWRlcklucHV0KSB7XG5cdG5leHQ3RGF5c0ZvcmVjYXN0KGxhdCwgbG9uLCBjYWxsYmFjaywgaGVhZGVySW5wdXQpO1xufVxuXG5mdW5jdGlvbiBuZXh0N0RheXNGb3JlY2FzdChsYXQsIGxvbiwgY2FsbGJhY2ssIGhlYWRlcklucHV0KSB7XG5cdGZldGNoKFxuXHRcdGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0ke2V4Y2x1ZGUyfWBcblx0KVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0Y2FsbGJhY2socmVzcG9uc2UsIGhlYWRlcklucHV0KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShyZXNwb25zZSwgaGVhZGVySW5wdXQpIHtcblx0bGV0IHdlYXRoZXJEZXNjID0gcmVzcG9uc2UuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXSxcblx0XHRuZXh0N0RheXNEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXTtcblx0Y2xlYXJEYXRhKHRvZGF5RGF0YURpdiksXG5cdFx0Y2xlYXJEYXRhKG5leHQ3RGF5c0RpdiksXG5cdFx0ZGlzcGxheVdlYXRoZXJSZXBvcnQuY2FsbCh0aGlzLCByZXNwb25zZSksXG5cdFx0ZGlzcGxheTdEYXlzRm9yZWNhc3QocmVzcG9uc2UpO1xuXHRpZiAoaGVhZGVySW5wdXQudmFsdWUpXG5cdFx0bmV3TmFtZShoZWFkZXJJbnB1dC52YWx1ZSksIHNldENpdHlOYW1lKCksIChoZWFkZXJJbnB1dC52YWx1ZSA9IFwiXCIpO1xuXHRnZXRXZWF0aGVySW1hZ2Uod2VhdGhlckRlc2MpO1xufVxuXG5mdW5jdGlvbiBjbGVhckRhdGEoZGl2KSB7XG5cdHdoaWxlIChkaXYuZmlyc3RDaGlsZCkgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheTdEYXlzRm9yZWNhc3QocmVzcG9uc2UpIHtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCByZXNwb25zZS5kYWlseS5sZW5ndGg7IGkrKylcblx0XHRjcmVhdGVGb3JlY2FzdENhcmQocmVzcG9uc2UuZGFpbHlbaV0pO1xuXHRjbGVhclNjcmVlbkxvYWRlcigpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlclJlcG9ydChyZXNwb25zZSkge1xuXHRjb25zdCBbXG5cdFx0d2VhdGhlckRlc2MsXG5cdFx0ZGVzY0ljb24sXG5cdFx0bmFtZU9mQ2l0eSxcblx0XHR0ZW1wZXJhdHVyZSxcblx0XHRsb3dUZW1wLFxuXHRcdGhpZ2hUZW1wLFxuXHRcdGZlZWxzTGlrZVRlbXAsXG5cdF0gPSBkYXRhRGlzcGxheSgpO1xuXHRjb25zdCBbd2luZCwgZGV3UG9pbnQsIHRpbWVab25lLCB1dkluZGV4LCBwcmVzc3VyZSwgaHVtaWRpdHldID1cblx0XHRtaW5vckRhdGFSZXBvcnQoKTtcblxuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQpIG5hbWVPZkNpdHkudGV4dENvbnRlbnQgPSBjb3VudHJ5QW5kQ2l0eU5hbWU7XG5cdGVsc2UgbmFtZU9mQ2l0eS50ZXh0Q29udGVudCA9IGNvdW50cnlBbmRDaXR5TmFtZTI7XG5cdHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG5cdGxvd1RlbXAuYXBwZW5kKFwiTG93OiBcIiwgcGFyc2VJbnQocmVzcG9uc2UuZGFpbHlbMF0udGVtcC5taW4pLCBzdXBlclNjcmlwdCgpKTtcblx0aGlnaFRlbXAuYXBwZW5kKFxuXHRcdFwiSGlnaDogXCIsXG5cdFx0cGFyc2VJbnQocmVzcG9uc2UuZGFpbHlbMF0udGVtcC5tYXgpLFxuXHRcdHN1cGVyU2NyaXB0KClcblx0KTtcblx0dGVtcGVyYXR1cmUuYXBwZW5kKHBhcnNlSW50KHJlc3BvbnNlLmN1cnJlbnQudGVtcCksIHN1cGVyU2NyaXB0KCkpO1xuXHRmZWVsc0xpa2VUZW1wLmFwcGVuZChcblx0XHRcIkZlZWxzIExpa2UgXCIsXG5cdFx0cGFyc2VJbnQocmVzcG9uc2UuY3VycmVudC5mZWVsc19saWtlKSxcblx0XHRzdXBlclNjcmlwdCgpXG5cdCk7XG5cdHdpbmQuYXBwZW5kKGBXaW5kIFNwZWVkOiAke3Jlc3BvbnNlLmN1cnJlbnQud2luZF9zcGVlZH1gKTtcblx0ZGV3UG9pbnQuYXBwZW5kKGBEZXcgUG9pbnQ6ICR7cmVzcG9uc2UuY3VycmVudC5kZXdfcG9pbnR9YCk7XG5cdHRpbWVab25lLmFwcGVuZChgdGltZSBab25lOiAke3Jlc3BvbnNlLnRpbWV6b25lfWApO1xuXHR1dkluZGV4LmFwcGVuZChgVVYgSW5kZXg6ICR7cmVzcG9uc2UuY3VycmVudC51dml9YCk7XG5cdHByZXNzdXJlLmFwcGVuZChgUHJlc3N1cmU6ICR7cmVzcG9uc2UuY3VycmVudC5wcmVzc3VyZX1gKTtcblx0aHVtaWRpdHkuYXBwZW5kKGBIdW1pZGl0eTogJHtyZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5fWApO1xuXHRkZXNjSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtyZXNwb25zZS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcbn1cblxuZnVuY3Rpb24gZ2V0Q291bnRyeU5hbWUocmVzcG9uc2UpIHtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KSB7XG5cdFx0Y29uc3QgcmVnaW9uTmFtZXMgPSBuZXcgSW50bC5EaXNwbGF5TmFtZXMoW1wiZW5cIl0sIHsgdHlwZTogXCJyZWdpb25cIiB9KTtcblx0XHRjb25zdCBjb3VudHJ5TmFtZSA9IHJlZ2lvbk5hbWVzLm9mKHJlc3BvbnNlLnN5cy5jb3VudHJ5KTtcblx0XHRpZiAoY291bnRyeU5hbWUgPT0gcmVzcG9uc2UubmFtZSkgY291bnRyeUFuZENpdHlOYW1lID0gY291bnRyeU5hbWU7XG5cdFx0ZWxzZSBjb3VudHJ5QW5kQ2l0eU5hbWUgPSBgJHtyZXNwb25zZS5uYW1lfSwgJHtjb3VudHJ5TmFtZX0uYDtcblx0fSBlbHNlIHtcblx0XHRjb25zdCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbXCJlblwiXSwgeyB0eXBlOiBcInJlZ2lvblwiIH0pO1xuXHRcdGNvbnN0IGNvdW50cnlOYW1lID0gcmVnaW9uTmFtZXMub2YocmVzcG9uc2Uuc3lzLmNvdW50cnkpO1xuXHRcdGlmIChjb3VudHJ5TmFtZSA9PSByZXNwb25zZS5uYW1lKSBjb3VudHJ5QW5kQ2l0eU5hbWUyID0gY291bnRyeU5hbWU7XG5cdFx0ZWxzZSBjb3VudHJ5QW5kQ2l0eU5hbWUyID0gYCR7cmVzcG9uc2UubmFtZX0sICR7Y291bnRyeU5hbWV9LmA7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2NyZWVuTG9hZGVyKCkge1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQpIHtcblx0XHRjb25zdCBbbG9hZGVyQ29udGFpbmVyXSA9IGNyZWF0ZUxvYWRlcihcblx0XHRcdFwibG9hZGVyLXdhdGNobGlzdFwiLFxuXHRcdFx0XCJsb2FkZXItY29udGFpbmVyLXdhdGNobGlzdFwiXG5cdFx0KTtcblx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5hcHBlbmQobG9hZGVyQ29udGFpbmVyKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBbbG9hZGVyQ29udGFpbmVyXSA9IGNyZWF0ZUxvYWRlcihcImxvYWRlclwiLCBcImxvYWRlci1jb250YWluZXJcIik7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQobG9hZGVyQ29udGFpbmVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjbGVhclNjcmVlbkxvYWRlcigpIHtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50KVxuXHRcdGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLnJlbW92ZUNoaWxkKFxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0ubGFzdENoaWxkXG5cdFx0KTtcblx0ZWxzZSBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9hZGVyKGxvYWRlckNsYXNzLCBsb2FkZXJEaXZDbGFzcykge1xuXHRjb25zdCBsb2FkZXJDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHtcblx0XHRjbGFzczogbG9hZGVyRGl2Q2xhc3MsXG5cdH0pO1xuXHRjb25zdCBsb2FkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IGxvYWRlckNsYXNzIH0pO1xuXHRsb2FkZXJDb250YWluZXIuYXBwZW5kKGxvYWRlcik7XG5cdHJldHVybiBbbG9hZGVyQ29udGFpbmVyXTtcbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckltYWdlKHdlYXRoZXJEZXNjKSB7XG5cdGZldGNoKFxuXHRcdGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvcz9xdWVyeT0ke3dlYXRoZXJEZXNjfSZwZXJfcGFnZT0xJmNsaWVudF9pZD1nSzUyRGUyVG1fZEw1bzFJWEthOUZST0JBSi1MSVlxUjQxeEJkbGczWDJrYCxcblx0XHR7IG1vZGU6IFwiY29yc1wiIH1cblx0KVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41MjcpLHJnYmEoMCwgMCwgMCwgMC41KSkgLHVybCgke3Jlc3BvbnNlLnJlc3VsdHNbMF0udXJscy5yYXd9KWA7XG5cdFx0fSk7XG59XG5cbmV4cG9ydCB7XG5cdGdldFdlYXRoZXJEYXRhLFxuXHRnZXRMb25BbmRMYXQsXG5cdGdldERhdGEsXG5cdGdldENvdW50cnlOYW1lLFxuXHRzY3JlZW5Mb2FkZXIsXG5cdGNsZWFyU2NyZWVuTG9hZGVyLFxufTsiLCJpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5TmFtZVwiKSA9PT0gbnVsbClcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXR5TmFtZVwiLCBKU09OLnN0cmluZ2lmeShcIlBvcnQgSGFyY291cnRcIikpO1xuXG5sZXQgY2l0eU5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eU5hbWVcIikpO1xuXG5mdW5jdGlvbiBuZXdOYW1lKHNldE5hbWUpIHtcblx0Y2l0eU5hbWUgPSBzZXROYW1lO1xufVxuXG5mdW5jdGlvbiBzZXRDaXR5TmFtZSgpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXR5TmFtZVwiLCBKU09OLnN0cmluZ2lmeShjaXR5TmFtZSkpO1xufVxuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YXRjaGxpc3RBcnJheVwiKSA9PSBudWxsKVxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5cbmxldCB3YXRjaGxpc3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YXRjaGxpc3RBcnJheVwiKSk7XG5cbmZ1bmN0aW9uIHNldHdhdGNobGlzdEFycmF5KCkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KHdhdGNobGlzdEFycmF5KSk7XG59XG5cbmV4cG9ydCB7IGNpdHlOYW1lLCBzZXRDaXR5TmFtZSwgbmV3TmFtZSwgd2F0Y2hsaXN0QXJyYXksIHNldHdhdGNobGlzdEFycmF5IH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuXG4vKipcbiAqIEZ1bmN0aW9uIGZvciBjcmVhdGluZyBmb290ZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlZm9vdGVyKCkge1xuXHRjb25zdCBmb290ZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZm9vdGVyXCIpO1xuXHRjb25zdCBhbmNob3JMaW5rID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuXHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0lBbVlvdW5nYm9zc3kvd2VhdGhlci1hcHBcIixcblx0fSk7XG5cdGNvbnN0IGdpdEh1Ykljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaVwiLCB7IGZhOiBcImZhLWdpdGh1YlwiIH0pO1xuXHRjb25zdCBpY29uc0NyZWRpdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBmbGF0SWNvbkFuY2hvciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJhXCIsIHtcblx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0aHJlZjogXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vXCIsXG5cdH0pO1xuXHRjb25zdCBpY29uczhBbmNob3IgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly9pY29uczguY29tL1wiLFxuXHR9KTtcblxuXHRmbGF0SWNvbkFuY2hvci50ZXh0Q29udGVudCA9IFwiIEZsYXRpY29uIFwiO1xuXHRpY29uczhBbmNob3IudGV4dENvbnRlbnQgPSBcIiBJY29uczggXCI7XG5cdGljb25zQ3JlZGl0LmFwcGVuZChcIkljb25zIGJ5XCIsIGZsYXRJY29uQW5jaG9yLCBcIiAmIFwiLCBpY29uczhBbmNob3IpO1xuXHRhbmNob3JMaW5rLmFwcGVuZENoaWxkKGdpdEh1Ykljb24pO1xuXHRmb290ZXIuYXBwZW5kKFxuXHRcdFwiQ29weXJpZ2h0IFxcdTAwQTkgMjAyMiBJQW1Zb3VuZ2Jvc3N5XCIsXG5cdFx0XCIgIFwiLFxuXHRcdGFuY2hvckxpbmssXG5cdFx0aWNvbnNDcmVkaXRcblx0KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVmb290ZXIgfTsiLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcblx0Y29uc3QgaGVhZGVyID0gY3JlYXRlRG9tRWxlbWVudChcImhlYWRlclwiKTtcblx0Y29uc3Qgc2VhcmNoRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInNlYXJjaC1kaXZcIiB9KTtcblx0Y29uc3Qgc2VhcmNoQmFyID0gY3JlYXRlRG9tRWxlbWVudChcImlucHV0XCIsIHtcblx0XHR0eXBlOiBcInNlYXJjaFwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIkVudGVyIENpdHkgTmFtZVwiLFxuXHR9KTtcblx0Y29uc3Qgc2VhcmNoQnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIgfSk7XG5cdGNvbnN0IGhlYWRlclRpdGxlRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRpdGxlLWRpdlwiIH0pO1xuXHRjb25zdCBoZWFkZXJUaXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMVwiKTtcblxuXHRzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuXHRoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2l0eVdhdGNoXCI7XG5cblx0c2VhcmNoRGl2LmFwcGVuZChzZWFyY2hCYXIsIHNlYXJjaEJ1dHRvbik7XG5cdGhlYWRlclRpdGxlRGl2LmFwcGVuZChoZWFkZXJUaXRsZSk7XG5cdGhlYWRlci5hcHBlbmQoaGVhZGVyVGl0bGVEaXYsIHNlYXJjaERpdik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9OyIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcbmltcG9ydCBEYXRlIGZyb20gXCIuL2ljb25zL2RhdGUucG5nXCI7XG5pbXBvcnQgSHVtaWRpdHkgZnJvbSBcIi4vaWNvbnMvaHVtaWRpdHkucG5nXCI7XG5pbXBvcnQgUHJlc3N1cmUgZnJvbSBcIi4vaWNvbnMvcHJlc3N1cmUucG5nXCI7XG5pbXBvcnQgVGltZXpvbmUgZnJvbSBcIi4vaWNvbnMvdGltZXpvbmUucG5nXCI7XG5pbXBvcnQgV2luZCBmcm9tIFwiLi9pY29ucy93aW5kLnBuZ1wiO1xuaW1wb3J0IFNlYUxldmVsIGZyb20gXCIuL2ljb25zL3NlYWxldmVsLnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudHMoKSB7XG5cdGNvbnN0IG1haW5EaXYgPSBjcmVhdGVEb21FbGVtZW50KFwibWFpblwiLCB7IGNsYXNzOiBcIm1haW5cIiB9KTtcblx0Y3JlYXRlVG9kYXlGb3JlY2FzdENvbnRhaW5lcihtYWluRGl2KTtcblx0Y3JlYXRlTmV4dGRheXNDb250YWluZXJEaXYobWFpbkRpdik7XG5cdGdldFdhdGNobGlzdChtYWluRGl2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbkRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZGF5Rm9yZWNhc3RDb250YWluZXIobWFpbkRpdikge1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidG9kYXktZGF0YS1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQodG9kYXlEYXRhRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dGRheXNDb250YWluZXJEaXYobWFpbkRpdikge1xuXHRjb25zdCBuZXh0N0RheXNEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibmV4dC03ZGF5cy1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQobmV4dDdEYXlzRGl2KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2F0Y2hsaXN0KG1haW5EaXYpIHtcblx0Y29uc3Qgd2F0Y2hsaXN0RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIndhdGNobGlzdC1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQod2F0Y2hsaXN0RGl2KTtcbn1cblxuZnVuY3Rpb24gbWlub3JEYXRhUmVwb3J0KCkge1xuXHRjb25zdCBtaW5vckRhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzNdLFxuXHRcdHdpbmREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2luZC1kaXZcIiB9KSxcblx0XHR3aW5kID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ3aW5kXCIgfSksXG5cdFx0ZGV3UG9pbnREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV3LXBvaW50LWRpdlwiIH0pLFxuXHRcdGRld1BvaW50ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJkZXctcG9pbnRcIiB9KSxcblx0XHR0aW1lWm9uZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0aW1lLXpvbmUtZGl2XCIgfSksXG5cdFx0dGltZVpvbmUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcInRpbWUtem9uZVwiIH0pLFxuXHRcdHV2SW5kZXhEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidXYtaW5kZXgtZGl2XCIgfSksXG5cdFx0dXZJbmRleCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidXYtaW5kZXhcIiB9KSxcblx0XHRwcmVzc3VyZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwcmVzc3VyZS1kaXZcIiB9KSxcblx0XHRwcmVzc3VyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwicHJlc3N1cmVcIiB9KSxcblx0XHRodW1pZGl0eURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJodW1pZGl0eS1kaXZcIiB9KSxcblx0XHRodW1pZGl0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiaHVtaWRpdHlcIiB9KSxcblx0XHRNeURhdGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBEYXRlIH0pLFxuXHRcdE15SHVtaWRpdHkgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBIdW1pZGl0eSB9KSxcblx0XHRNeVByZXNzdXJlID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogUHJlc3N1cmUgfSksXG5cdFx0TXlUaW1lem9uZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFRpbWV6b25lIH0pLFxuXHRcdE15U2VhTGV2ZWwgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBTZWFMZXZlbCB9KSxcblx0XHRNeVdpbmQgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBXaW5kIH0pO1xuXG5cdHdpbmREaXYuYXBwZW5kKE15V2luZCwgd2luZCk7XG5cdGRld1BvaW50RGl2LmFwcGVuZChNeVNlYUxldmVsLCBkZXdQb2ludCk7XG5cdHRpbWVab25lRGl2LmFwcGVuZChNeVRpbWV6b25lLCB0aW1lWm9uZSk7XG5cdHV2SW5kZXhEaXYuYXBwZW5kKE15RGF0ZSwgdXZJbmRleCk7XG5cdHByZXNzdXJlRGl2LmFwcGVuZChNeVByZXNzdXJlLCBwcmVzc3VyZSk7XG5cdGh1bWlkaXR5RGl2LmFwcGVuZChNeUh1bWlkaXR5LCBodW1pZGl0eSk7XG5cdG1pbm9yRGF0YURpdi5hcHBlbmQoXG5cdFx0d2luZERpdixcblx0XHRkZXdQb2ludERpdixcblx0XHR0aW1lWm9uZURpdixcblx0XHR1dkluZGV4RGl2LFxuXHRcdHByZXNzdXJlRGl2LFxuXHRcdGh1bWlkaXR5RGl2XG5cdCk7XG5cdHJldHVybiBbd2luZCwgZGV3UG9pbnQsIHRpbWVab25lLCB1dkluZGV4LCBwcmVzc3VyZSwgaHVtaWRpdHldO1xufVxuXG5mdW5jdGlvbiBzdXBlclNjcmlwdCgpIHtcblx0Y29uc3Qgc3VwU2NyaXB0ID0gY3JlYXRlRG9tRWxlbWVudChcInN1cFwiLCB7IGNsYXNzOiBcInN1cGVyLXNjcmlwdFwiIH0pO1xuXHRjb25zdCBzdXBTY3JpcHQyID0gY3JlYXRlRG9tRWxlbWVudChcInN1cFwiLCB7IGNsYXNzOiBcInN1cGVyLXNjcmlwdFwiIH0pO1xuXHRzdXBTY3JpcHQudGV4dENvbnRlbnQgPSBcIm9cIjtcblx0c3VwU2NyaXB0Mi5hcHBlbmQoc3VwU2NyaXB0LCBcIkNcIik7XG5cdHJldHVybiBzdXBTY3JpcHQyO1xufVxuXG5mdW5jdGlvbiBkYXRhRGlzcGxheSgpIHtcblx0Y29uc3QgdG9kYXlEYXRhRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IHdlYXRoZXJEZXNjID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ3ZWF0aGVyLWRlc2NcIiB9KSxcblx0XHRuYW1lT2ZDaXR5ID0gY3JlYXRlRG9tRWxlbWVudChcImgyXCIsIHsgY2xhc3M6IFwibmFtZS1vZi1jaXR5XCIgfSksXG5cdFx0ZGVzY0ljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgY2xhc3M6IFwiZGVzYy1pY29uXCIgfSksXG5cdFx0dGVtcERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZW1wLWRpdlwiIH0pLFxuXHRcdHRlbXBSYW5nZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZW1wLXJhbmdlXCIgfSksXG5cdFx0aGlnaFRlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImhpZ2gtdGVtcFwiIH0pLFxuXHRcdGxvd1RlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImxvdy10ZW1wXCIgfSksXG5cdFx0ZmVlbHNMaWtlVGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiZmVlbHMtbGlrZS10ZW1wXCIgfSksXG5cdFx0dGVtcGVyYXR1cmVEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGVtcGVyYXR1cmUtZGl2XCIgfSksXG5cdFx0dGVtcGVyYXR1cmUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcInRlbXBlcmF0dXJlXCIgfSksXG5cdFx0bWlub3JEYXRhRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1pbm9yLWRhdGEtZGl2XCIgfSk7XG5cblx0dGVtcFJhbmdlLmFwcGVuZChsb3dUZW1wLCBoaWdoVGVtcCk7XG5cdHRlbXBlcmF0dXJlRGl2LmFwcGVuZCh0ZW1wZXJhdHVyZSwgZGVzY0ljb24pO1xuXHR0ZW1wRGl2LmFwcGVuZCh0ZW1wUmFuZ2UsIHRlbXBlcmF0dXJlRGl2LCBmZWVsc0xpa2VUZW1wKTtcblx0dG9kYXlEYXRhRGl2LmFwcGVuZCh3ZWF0aGVyRGVzYywgbmFtZU9mQ2l0eSwgdGVtcERpdiwgbWlub3JEYXRhRGl2KTtcblxuXHRyZXR1cm4gW1xuXHRcdHdlYXRoZXJEZXNjLFxuXHRcdGRlc2NJY29uLFxuXHRcdG5hbWVPZkNpdHksXG5cdFx0dGVtcGVyYXR1cmUsXG5cdFx0bG93VGVtcCxcblx0XHRoaWdoVGVtcCxcblx0XHRmZWVsc0xpa2VUZW1wLFxuXHRdO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNYWluQ29udGVudHMsIG1pbm9yRGF0YVJlcG9ydCwgc3VwZXJTY3JpcHQsIGRhdGFEaXNwbGF5IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcmVjYXN0Q2FyZChkYWlseSkge1xuXHRjb25zdCBuZXh0N0RheXNEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXSxcblx0XHRjYXJkID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImNhcmRcIiB9KSxcblx0XHRkYXlBbmREZXNjID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiKSxcblx0XHRpY29uRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImljb24tZGl2XCIgfSksXG5cdFx0dGVtcERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0ZGF5ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0d2VhdGhlckRlc2MgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHR3ZWF0aGVyRGVzY0ljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIpLFxuXHRcdGxvd1RlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHRoaWdoVGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpO1xuXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYWlseS5kdCAqIDEwMDApO1xuXHRjb25zdCB3ZWVrZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG5cblx0ZGF5LnRleHRDb250ZW50ID0gYCR7d2Vla2RheX1gO1xuXHR3ZWF0aGVyRGVzYy50ZXh0Q29udGVudCA9IGAke2RhaWx5LndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcblx0d2VhdGhlckRlc2NJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke2RhaWx5LndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcblx0aGlnaFRlbXAudGV4dENvbnRlbnQgPSBgJHtkYWlseS50ZW1wLm1heH1gO1xuXHRsb3dUZW1wLnRleHRDb250ZW50ID0gYCR7ZGFpbHkudGVtcC5tYXh9YDtcblx0ZGF5QW5kRGVzYy5hcHBlbmQoZGF5LCB3ZWF0aGVyRGVzYyk7XG5cdHRlbXBEaXYuYXBwZW5kKGhpZ2hUZW1wLCBsb3dUZW1wKTtcblx0aWNvbkRpdi5hcHBlbmQod2VhdGhlckRlc2NJY29uLCB0ZW1wRGl2KTtcblx0Y2FyZC5hcHBlbmQoZGF5QW5kRGVzYywgaWNvbkRpdik7XG5cdG5leHQ3RGF5c0Rpdi5hcHBlbmQoY2FyZCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvcmVjYXN0Q2FyZCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vcGFnZS1oZWFkZXJcIjtcbmltcG9ydCB7XG5cdGdldENvdW50cnlOYW1lLFxuXHRnZXREYXRhLFxuXHRnZXRMb25BbmRMYXQsXG5cdGdldFdlYXRoZXJEYXRhLFxuXHRzY3JlZW5Mb2FkZXIsXG59IGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCB7IGNyZWF0ZWZvb3RlciB9IGZyb20gXCIuL3BhZ2UtZm9vdGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluQ29udGVudHMgfSBmcm9tIFwiLi9wYWdlLW1haW5cIjtcbmltcG9ydCB7XG5cdGFkZExpc3RlbmVyVG9CdXR0b24sXG5cdGRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QsXG5cdHdhdGNobGlzdCxcbn0gZnJvbSBcIi4vY2l0eS13YXRjaGxpc3RcIjtcbmltcG9ydCB7IGNpdHlOYW1lIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5jcmVhdGVIZWFkZXIoKTtcbmNyZWF0ZU1haW5Db250ZW50cygpO1xuY3JlYXRlZm9vdGVyKCk7XG53YXRjaGxpc3QoKTtcbnNjcmVlbkxvYWRlcigpO1xuYWRkTGlzdGVuZXJUb0J1dHRvbigpO1xuZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCgpO1xuZ2V0V2VhdGhlckRhdGEuY2FsbChcblx0ZG9jdW1lbnQsXG5cdGdldERhdGEuYmluZChkb2N1bWVudCksXG5cdGdldExvbkFuZExhdCxcblx0Y2l0eU5hbWUsXG5cdGZhbHNlLFxuXHRnZXRDb3VudHJ5TmFtZVxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=