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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nhtml {\n\tbackground-color: #100f0f;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000d6;\n}\n\nh1 {\n\tfont-size: 2.5rem;\n\tfont-family: monospace;\n\tcolor: antiquewhite;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tbackground-color: #3c3f4c;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n}\n\nbutton:hover {\n\tbackground-color: #532525;\n\ttransform: scale(1.01);\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tcolor: gray;\n}\n\n.not-found::placeholder {\n\tcolor: red;\n}\n\n.unit-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.degree {\n\ttransition: all 0.2s ease-in-out;\n\tcursor: pointer;\n}\n\n.unit {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.unit:hover,\n.degree:hover {\n\tcolor: #9e9e9e;\n\ttransform: scale(1.4);\n}\n\n.degree:hover {\n\tcolor: #9e9e9e;\n\ttransform: scale(1.1);\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n}\n\n/* today data div styling */\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(0 0 0 / 80%);\n\tborder: 1px solid #fc9898;\n\ttransition: all 0.2s ease-in-out;\n}\n\n/* next 7 days styling */\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #010000;\n\tgap: 10px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #0b030ab0;\n\tpadding: 2px 10px;\n\tborder: 1px solid #fc9898;\n\tflex: 1;\n\tbox-sizing: border-box;\n\ttransition: all 0.2s ease-in-out;\n}\n\n/* watchlist div styling */\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #262829;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid #fc9898;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tbackground-color: #0b030ab0;\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city:hover,\n.add-icon {\n\tbackground-color: #262829;\n\ttransform: scale(1.02);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.add-icon {\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.add-icon:hover {\n\ttransform: scale(1.2);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card:hover {\n\ttransform: scale(1.01);\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.weather-desc,\n.name-of-city,\n.low-temp,\n.high-temp,\n.temperature,\n.desc-icon,\n.feels-like-temp {\n\ttransition: all 0.2s ease-in-out;\n}\n\n.weather-desc:hover,\n.name-of-city:hover,\n.low-temp:hover,\n.high-temp:hover,\n.temperature:hover,\n.desc-icon:hover,\n.feels-like-temp:hover,\n.minor-data-div>*:hover\n{\n\ttransform: scale(1.01);\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #fc9898;\n\tbackground-color: #262829;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: #b3ee79;\n}\n\n.fa {\n\tcolor: white;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n\n\tfooter {\n\t\tbackground-color: #0b030ab0;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: monospace;\n\tbox-sizing: border-box;\n}\n\nhtml {\n\tbackground-color: #100f0f;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: aliceblue;\n\tposition: relative;\n}\n\n/* Header styling */\nheader {\n\tdisplay: flex;\n\tcolor: white;\n\tgap: 5px;\n\tflex-wrap: wrap;\n\tpadding: 20px 50px;\n\talign-items: center;\n\tmin-width: min-content;\n\tborder-bottom: 1px solid #fc9898;\n\tbackground-color: #000000d6;\n}\n\nh1 {\n\tfont-size: 2.5rem;\n\tfont-family: monospace;\n\tcolor: antiquewhite;\n}\n\n.title-div {\n\tflex: 1;\n}\n\n.search-div {\n\tflex: 2;\n\tdisplay: flex;\n\tmax-width: 600px;\n}\n\n.search-div>input {\n\tflex: 1;\n\tpadding: 5px;\n\tborder-right: none;\n\theight: min-content;\n\tborder-radius: 10px;\n\tbackground-color: #100f0f;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\toutline: none;\n\tborder: none;\n\tcolor: #edaeae;\n}\n\nbutton {\n\tpadding: 5px 20px;\n\theight: min-content;\n\tborder-radius: 10px;\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tbackground-color: #3c3f4c;\n\tcolor: snow;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n}\n\nbutton:hover {\n\tbackground-color: #532525;\n\ttransform: scale(1.01);\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tcolor: gray;\n}\n\n.not-found::placeholder {\n\tcolor: red;\n}\n\n.unit-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.degree {\n\ttransition: all 0.2s ease-in-out;\n\tcursor: pointer;\n}\n\n.unit {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.unit:hover,\n.degree:hover {\n\tcolor: #9e9e9e;\n\ttransform: scale(1.4);\n}\n\n.degree:hover {\n\tcolor: #9e9e9e;\n\ttransform: scale(1.1);\n}\n\n/* Main Styling */\nmain {\n\tflex: 1;\n\tdisplay: grid;\n}\n\n/* today data div styling */\n.today-data-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 5px 5px 0px 20px;\n\tflex: 1;\n\tbackground-color: #100f0f;\n\tjustify-content: space-evenly;\n\tbackground-size: cover !important;\n\tbackground-repeat: no-repeat !important;\n\tbackground-position: center !important;\n\tbox-shadow: inset 0px 0px 20px 20px black;\n}\n\n.weather-desc {\n\tcolor: white;\n}\n\n.today-data-div>div:first-of-type,\n.today-data-div>h2:first-of-type,\n.temp-div>* {\n\tcolor: white;\n}\n\n.temp-range {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.temperature-div {\n\tdisplay: flex;\n}\n\n.temperature {\n\tfont-size: 4rem;\n}\n\n.temperature>.super-script {\n\tfont-size: 2rem;\n}\n\n.desc-icon {\n\twidth: 75px;\n}\n\n.feels-like-temp {\n\tmargin-top: -15px;\n\tmargin-bottom: 10px;\n}\n\n.minor-data-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgap: 20px;\n}\n\n.minor-data-div>* {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 10px 15px;\n\tborder-radius: 10px;\n\tcolor: #1a002a;\n\tcolor: white;\n\tfont-weight: bold;\n\tmin-width: fit-content;\n\tbackground-color: rgb(0 0 0 / 80%);\n\tborder: 1px solid #fc9898;\n\ttransition: all 0.2s ease-in-out;\n}\n\n/* next 7 days styling */\n.next-7days-div {\n\tflex: 2;\n\tgrid-area: 2/1/3/2;\n\tdisplay: flex;\n\tpadding: 10px 5px 10px 20px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tbackground-color: #010000;\n\tgap: 10px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tcolor: #ebcaca;\n\tbackground-color: #0b030ab0;\n\tpadding: 2px 10px;\n\tborder: 1px solid #fc9898;\n\tflex: 1;\n\tbox-sizing: border-box;\n\ttransition: all 0.2s ease-in-out;\n}\n\n/* watchlist div styling */\n.watchlist-div {\n\tflex: 1;\n\tpadding: 15px 20px 5px 10px;\n\tgrid-area: 1/2/3/3;\n\tbackground-color: #262829;\n\tposition: relative;\n}\n\n.watchlist-div>h2 {\n\ttext-align: center;\n\ttext-decoration: underline;\n\tcolor: white;\n}\n\nul {\n\tmargin-top: 10px;\n}\n\n.city {\n\tpadding: 7px 30px 7px 7px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tcolor: #ffebce;\n\tborder: 1px solid #fc9898;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n}\n\nli {\n\tmargin-top: 5px;\n\tpadding: 20px 10px;\n\tlist-style: none;\n\tbackground-color: #0b030ab0;\n}\n\n.add-button {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-right: 30px;\n\tgap: 5px;\n\tpadding-left: 20px;\n\tborder: 1px solid rgb(233 184 184 / 50%);\n}\n\n.city:hover,\n.add-icon {\n\tbackground-color: #262829;\n\ttransform: scale(1.02);\n}\n\n.add-button>input {\n\tborder: none;\n\twidth: 100%;\n\tmin-width: 95px;\n\tcolor: white;\n\tmargin-left: 15px;\n\tbackground-color: initial;\n}\n\n.add-button>input:focus-visible {\n\tflex: 1;\n\toutline: none;\n}\n\n.add-icon {\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.add-icon:hover {\n\ttransform: scale(1.2);\n}\n\n.city>div:first-of-type {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.city>div:first-of-type>img {\n\tmargin-right: 5px;\n}\n\n.delete {\n\twidth: 20px;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 5px;\n\tvisibility: hidden;\n}\n\n.show-delete {\n\tvisibility: visible;\n}\n\n.minor-data-div>*>img {\n\twidth: 25px;\n\theight: 25px;\n}\n\n.card:hover {\n\ttransform: scale(1.01);\n}\n\n.card>div>p:first-of-type {\n\tfont-weight: bold;\n\ttext-decoration: underline;\n\tfont-size: 0.95rem;\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.weather-desc,\n.name-of-city,\n.low-temp,\n.high-temp,\n.temperature,\n.desc-icon,\n.feels-like-temp {\n\ttransition: all 0.2s ease-in-out;\n}\n\n.weather-desc:hover,\n.name-of-city:hover,\n.low-temp:hover,\n.high-temp:hover,\n.temperature:hover,\n.desc-icon:hover,\n.feels-like-temp:hover,\n.minor-data-div>*:hover\n{\n\ttransform: scale(1.01);\n}\n\n/* Footer Styling */\nfooter {\n\tpadding: 5px;\n\ttext-align: center;\n\tcolor: white;\n\tmargin-top: auto;\n\tborder-top: 1px solid #fc9898;\n\tbackground-color: #262829;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: #b3ee79;\n}\n\n.fa {\n\tcolor: white;\n}\n\n.loader-container,\n.loader-container-watchlist {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.loader-container-watchlist {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n}\n\n.loader,\n.loader-watchlist {\n\tborder: 10px solid #906262;\n\tborder-radius: 50%;\n\tborder-top: 10px solid #1d4d4f;\n\twidth: 60px;\n\theight: 60px;\n\t-webkit-animation: spin 2s linear infinite;\n\tanimation: spin 1s linear infinite;\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n}\n\n.loader-watchlist {\n\tborder: 5px solid #906262;\n\tborder-top: 5px solid #1d4d4f;\n\twidth: 40px;\n\theight: 40px;\n\ttop: 40%;\n\tleft: 40%;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 615px) {\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.today-data-div {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.next-7days-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.watchlist-div {\n\t\tpadding: 15px 20px 10px 20px;\n\t}\n\n\t.loader-watchlist {\n\t\ttop: 50%;\n\t\tleft: 43%;\n\t}\n\n\t.loader {\n\t\ttop: 40%;\n\t\tleft: 40%;\n\t}\n\n\tfooter {\n\t\tbackground-color: #0b030ab0;\n\t}\n}"],"sourceRoot":""}]);
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
	wind.append(`Wind Speed: ${response.current.wind_speed}m/s`);
	dewPoint.append(`Dew Point: ${response.current.dew_point}`);
	timeZone.append(`time Zone: ${response.timezone}`);
	uvIndex.append(`UV Index: ${response.current.uvi}`);
	pressure.append(`Pressure: ${response.current.pressure}hPa`);
	humidity.append(`Humidity: ${response.current.humidity}%`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsWUFBWSxPQUFPLGFBQWEsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSw0QkFBNEIsY0FBYyxlQUFlLDJCQUEyQiwyQkFBMkIsR0FBRyxVQUFVLDhCQUE4QixHQUFHLFVBQVUsa0JBQWtCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHVCQUF1QixHQUFHLGtDQUFrQyxrQkFBa0IsaUJBQWlCLGFBQWEsb0JBQW9CLHVCQUF1Qix3QkFBd0IsMkJBQTJCLHFDQUFxQyxnQ0FBZ0MsR0FBRyxRQUFRLHNCQUFzQiwyQkFBMkIsd0JBQXdCLEdBQUcsZ0JBQWdCLFlBQVksR0FBRyxpQkFBaUIsWUFBWSxrQkFBa0IscUJBQXFCLEdBQUcsdUJBQXVCLFlBQVksaUJBQWlCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLDhCQUE4QiwrQkFBK0Isa0NBQWtDLGtCQUFrQixpQkFBaUIsbUJBQW1CLEdBQUcsWUFBWSxzQkFBc0Isd0JBQXdCLHdCQUF3QixtQ0FBbUMsZ0NBQWdDLDhCQUE4QixnQkFBZ0Isa0JBQWtCLGlCQUFpQixvQkFBb0IscUNBQXFDLEdBQUcsa0JBQWtCLDhCQUE4QiwyQkFBMkIsbUNBQW1DLGdDQUFnQyxnQkFBZ0IsR0FBRyw2QkFBNkIsZUFBZSxHQUFHLGVBQWUsa0JBQWtCLHdCQUF3QixHQUFHLGFBQWEscUNBQXFDLG9CQUFvQixHQUFHLFdBQVcsc0JBQXNCLHNCQUFzQixvQkFBb0IscUNBQXFDLEdBQUcsaUNBQWlDLG1CQUFtQiwwQkFBMEIsR0FBRyxtQkFBbUIsbUJBQW1CLDBCQUEwQixHQUFHLDhCQUE4QixZQUFZLGtCQUFrQixHQUFHLG1EQUFtRCxrQkFBa0IsMkJBQTJCLDhCQUE4QixZQUFZLDhCQUE4QixrQ0FBa0Msc0NBQXNDLDRDQUE0QywyQ0FBMkMsOENBQThDLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLHdGQUF3RixpQkFBaUIsR0FBRyxpQkFBaUIsa0JBQWtCLGNBQWMsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLGdDQUFnQyxvQkFBb0IsR0FBRyxnQkFBZ0IsZ0JBQWdCLEdBQUcsc0JBQXNCLHNCQUFzQix3QkFBd0IsR0FBRyxxQkFBcUIsa0JBQWtCLGdFQUFnRSxjQUFjLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsY0FBYyx1QkFBdUIsd0JBQXdCLG1CQUFtQixpQkFBaUIsc0JBQXNCLDJCQUEyQix1Q0FBdUMsOEJBQThCLHFDQUFxQyxHQUFHLGdEQUFnRCxZQUFZLHVCQUF1QixrQkFBa0IsZ0NBQWdDLG1DQUFtQyxvQkFBb0IsOEJBQThCLGNBQWMsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsa0NBQWtDLG1CQUFtQixnQ0FBZ0Msc0JBQXNCLDhCQUE4QixZQUFZLDJCQUEyQixxQ0FBcUMsR0FBRyxpREFBaUQsWUFBWSxnQ0FBZ0MsdUJBQXVCLDhCQUE4Qix1QkFBdUIsR0FBRyx1QkFBdUIsdUJBQXVCLCtCQUErQixpQkFBaUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFdBQVcsOEJBQThCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHVCQUF1QixtQkFBbUIsOEJBQThCLG9CQUFvQixxQ0FBcUMsR0FBRyxRQUFRLG9CQUFvQix1QkFBdUIscUJBQXFCLGdDQUFnQyxHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLHdCQUF3QixhQUFhLHVCQUF1Qiw2Q0FBNkMsR0FBRyw2QkFBNkIsOEJBQThCLDJCQUEyQixHQUFHLHVCQUF1QixpQkFBaUIsZ0JBQWdCLG9CQUFvQixpQkFBaUIsc0JBQXNCLDhCQUE4QixHQUFHLHFDQUFxQyxZQUFZLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLHFDQUFxQyxHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyw2QkFBNkIsa0JBQWtCLHdCQUF3QixHQUFHLGlDQUFpQyxzQkFBc0IsR0FBRyxhQUFhLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGFBQWEsdUJBQXVCLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLEdBQUcsaUJBQWlCLDJCQUEyQixHQUFHLCtCQUErQixzQkFBc0IsK0JBQStCLHVCQUF1QixHQUFHLGVBQWUsa0JBQWtCLDhCQUE4Qix3QkFBd0IsR0FBRywyR0FBMkcscUNBQXFDLEdBQUcsZ0xBQWdMLDJCQUEyQixHQUFHLGtDQUFrQyxpQkFBaUIsdUJBQXVCLGlCQUFpQixxQkFBcUIsa0NBQWtDLDhCQUE4QixHQUFHLE9BQU8sMEJBQTBCLG1CQUFtQixHQUFHLFNBQVMsaUJBQWlCLEdBQUcscURBQXFELHVCQUF1QixnQkFBZ0IsaUJBQWlCLHdDQUF3QyxHQUFHLGlDQUFpQyxnQkFBZ0IsaUJBQWlCLFdBQVcsWUFBWSxHQUFHLGlDQUFpQywrQkFBK0IsdUJBQXVCLG1DQUFtQyxnQkFBZ0IsaUJBQWlCLCtDQUErQyx1Q0FBdUMsdUJBQXVCLGFBQWEsY0FBYyxHQUFHLHVCQUF1Qiw4QkFBOEIsa0NBQWtDLGdCQUFnQixpQkFBaUIsYUFBYSxjQUFjLEdBQUcsMkNBQTJDLFFBQVEsc0NBQXNDLEtBQUssWUFBWSx3Q0FBd0MsS0FBSyxHQUFHLHFCQUFxQixRQUFRLDhCQUE4QixLQUFLLFlBQVksZ0NBQWdDLEtBQUssR0FBRyx5R0FBeUcsVUFBVSxjQUFjLG9CQUFvQiw2QkFBNkIsS0FBSyx1QkFBdUIsa0NBQWtDLEtBQUssdUJBQXVCLG1DQUFtQyxLQUFLLHNCQUFzQixtQ0FBbUMsS0FBSyx5QkFBeUIsZUFBZSxnQkFBZ0IsS0FBSyxlQUFlLGVBQWUsZ0JBQWdCLEtBQUssY0FBYyxrQ0FBa0MsS0FBSyxHQUFHLG1CQUFtQjtBQUNqcGxCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzRDtBQU9oQztBQUN5RDtBQUNwQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsaUVBQXdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEdBQUcsaUVBQXdCO0FBQzNCO0FBQ0EsSUFBSTtBQUNKLEdBQUcsMERBQWlCO0FBQ3BCLEdBQUcsNkRBQW9CO0FBQ3ZCLElBQUksb0VBQXVCO0FBQzNCLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBLElBQUksdURBQWM7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcseURBQVk7QUFDZjtBQUNBLEdBQUcsMkRBQWMsQ0FBQyxvREFBTyxFQUFFLHFEQUFZLGVBQWUsdURBQWM7QUFDcEU7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFHLGlFQUF3QjtBQUMzQjtBQUNBO0FBQ0EsRUFBRSx5REFBWTtBQUNkLEVBQUUsNERBQW1CO0FBQ3JCO0FBQ0EsR0FBRyxvREFBTztBQUNWLEdBQUcscURBQVk7QUFDZjtBQUNBO0FBQ0EsR0FBRyx1REFBYztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sa0RBQU07QUFDWjtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxrREFBTTtBQUNaLEdBQUcseURBQVM7QUFDWixJQUFJLHlEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsR0FBRyx5REFBUyxPQUFPLHlEQUFTO0FBQzVCLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkRBQWM7QUFDaEMsRUFBRSxvRUFBdUI7QUFDekIsRUFBRSxxREFBWTtBQUNkO0FBQ0E7QUFDQSxFQUFFLHVEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssaUVBQXFCO0FBQzFCLHFCQUFxQiwwREFBYztBQUNuQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUl3RDtBQUNQO0FBQ1A7QUFDRjtBQUM0QjtBQUMxQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxRUFBZ0I7QUFDcEMsYUFBYSxxRUFBZ0I7QUFDN0Isa0JBQWtCLHFFQUFnQixTQUFTLHFCQUFxQjtBQUNoRSxtQkFBbUIscUVBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxjQUFjLHFFQUFnQixVQUFVLHdCQUF3QiwrQ0FBTyxFQUFFOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUVBQWdCO0FBQ3BDLFNBQVMscUVBQWdCLFNBQVMsZUFBZTtBQUNqRCxhQUFhLHFFQUFnQixXQUFXLGtCQUFrQjtBQUMxRCxTQUFTLHFFQUFnQjtBQUN6QixhQUFhLHFFQUFnQjtBQUM3QixhQUFhLHFFQUFnQjtBQUM3QixhQUFhLHFFQUFnQixVQUFVLHNCQUFzQiw4Q0FBTSxFQUFFOztBQUVyRSwyQkFBMkIsZ0NBQWdDO0FBQzNELDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTs7QUFFQSx1QkFBdUIsdURBQVc7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLCtEQUFzQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsaUNBQWlDOztBQUVyRjtBQUNBO0FBQ0EsRUFBRSwrREFBbUIsd0JBQXdCLGlFQUFpQjtBQUM5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxpRUFBcUI7QUFDdEIsQ0FBQyxpRUFBaUI7QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxLQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFDO0FBQ21CO0FBQ2Y7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSyxTQUFTLGtEQUFhLENBQUM7QUFDdkQ7QUFDQSx1REFBdUQsU0FBUyxFQUFFLFFBQVE7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVksTUFBTTtBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEtBQUssa0RBQU07QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRCxLQUFLLFNBQVMsa0RBQWEsQ0FBQztBQUN2RjtBQUNBLHlEQUF5RCxJQUFJLE9BQU8sSUFBSSxFQUFFLFNBQVM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjLElBQUksWUFBWTtBQUM3RCxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0MsY0FBYyxJQUFJLFlBQVk7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHFFQUFnQjtBQUN6QztBQUNBLEVBQUU7QUFDRixnQkFBZ0IscUVBQWdCLFVBQVUsb0JBQW9CO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELFlBQVksd0JBQXdCLG1FQUE4QixDQUFDO0FBQ3JILElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9JQUFvSSw2QkFBNkI7QUFDaks7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEN3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQWdCO0FBQ2hDLG9CQUFvQixxRUFBZ0I7QUFDcEM7QUFDQSxFQUFFO0FBQ0Ysb0JBQW9CLHFFQUFnQixRQUFRLHVCQUF1QjtBQUNuRSxxQkFBcUIscUVBQWdCO0FBQ3JDLG9CQUFvQixxRUFBZ0I7QUFDcEM7QUFDQTtBQUNBLEVBQUU7QUFDRixrQkFBa0IscUVBQWdCO0FBQ2xDO0FBQ0E7QUFDQSxFQUFFO0FBQ0Ysc0JBQXNCLHFFQUFnQjtBQUN0QztBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDd0Q7O0FBRXhEO0FBQ0EsZ0JBQWdCLHFFQUFnQjtBQUNoQyxtQkFBbUIscUVBQWdCLFVBQVUscUJBQXFCO0FBQ2xFLG1CQUFtQixxRUFBZ0I7QUFDbkM7QUFDQTtBQUNBLEVBQUU7QUFDRixzQkFBc0IscUVBQWdCLGFBQWEsZ0JBQWdCO0FBQ25FLHdCQUF3QixxRUFBZ0IsVUFBVSxvQkFBb0I7QUFDdEUscUJBQXFCLHFFQUFnQjs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQndEO0FBQ3BCO0FBQ1E7QUFDQTtBQUNBO0FBQ1I7QUFDUTtBQUNBO0FBQ0g7QUFDcUM7O0FBRTlFO0FBQ0EsaUJBQWlCLHFFQUFnQixXQUFXLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxRUFBZ0IsVUFBVSx5QkFBeUI7QUFDekU7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxRUFBZ0IsVUFBVSx5QkFBeUI7QUFDekU7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxRUFBZ0IsVUFBVSx3QkFBd0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxxRUFBZ0IsVUFBVSxtQkFBbUI7QUFDekQsU0FBUyxxRUFBZ0IsUUFBUSxlQUFlO0FBQ2hELGdCQUFnQixxRUFBZ0IsVUFBVSx3QkFBd0I7QUFDbEUsYUFBYSxxRUFBZ0IsUUFBUSxvQkFBb0I7QUFDekQsZ0JBQWdCLHFFQUFnQixVQUFVLHdCQUF3QjtBQUNsRSxhQUFhLHFFQUFnQixRQUFRLG9CQUFvQjtBQUN6RCxlQUFlLHFFQUFnQixVQUFVLHVCQUF1QjtBQUNoRSxZQUFZLHFFQUFnQixRQUFRLG1CQUFtQjtBQUN2RCxnQkFBZ0IscUVBQWdCLFVBQVUsdUJBQXVCO0FBQ2pFLGFBQWEscUVBQWdCLFFBQVEsbUJBQW1CO0FBQ3hELGdCQUFnQixxRUFBZ0IsVUFBVSx1QkFBdUI7QUFDakUsYUFBYSxxRUFBZ0IsUUFBUSxtQkFBbUI7QUFDeEQsV0FBVyxxRUFBZ0IsVUFBVSxLQUFLLDRDQUFJLEVBQUU7QUFDaEQsZUFBZSxxRUFBZ0IsVUFBVSxLQUFLLGdEQUFRLEVBQUU7QUFDeEQsZUFBZSxxRUFBZ0IsVUFBVSxLQUFLLGdEQUFRLEVBQUU7QUFDeEQsZUFBZSxxRUFBZ0IsVUFBVSxLQUFLLGdEQUFRLEVBQUU7QUFDeEQsZUFBZSxxRUFBZ0IsVUFBVSxLQUFLLGdEQUFRLEVBQUU7QUFDeEQsV0FBVyxxRUFBZ0IsVUFBVSxLQUFLLDRDQUFJLEVBQUU7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHFFQUFnQixVQUFVLHVCQUF1QjtBQUNwRSxlQUFlLHFFQUFnQixVQUFVLHVCQUF1QjtBQUNoRSxlQUFlLHFFQUFnQixXQUFXLHFCQUFxQjtBQUMvRCwwQkFBMEIsa0RBQU07QUFDaEM7QUFDQTtBQUNBLENBQUMsd0VBQXFCO0FBQ3RCLENBQUMsd0VBQXFCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxRUFBZ0IsUUFBUSx1QkFBdUI7QUFDcEUsZUFBZSxxRUFBZ0IsU0FBUyx1QkFBdUI7QUFDL0QsYUFBYSxxRUFBZ0IsVUFBVSxvQkFBb0I7QUFDM0QsWUFBWSxxRUFBZ0IsVUFBVSxtQkFBbUI7QUFDekQsY0FBYyxxRUFBZ0IsVUFBVSxxQkFBcUI7QUFDN0QsYUFBYSxxRUFBZ0IsUUFBUSxvQkFBb0I7QUFDekQsWUFBWSxxRUFBZ0IsUUFBUSxtQkFBbUI7QUFDdkQsa0JBQWtCLHFFQUFnQixRQUFRLDBCQUEwQjtBQUNwRSxtQkFBbUIscUVBQWdCLFVBQVUsMEJBQTBCO0FBQ3ZFLGdCQUFnQixxRUFBZ0IsUUFBUSxzQkFBc0I7QUFDOUQsaUJBQWlCLHFFQUFnQixVQUFVLHlCQUF5Qjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxxRUFBZ0IsUUFBUSxlQUFlO0FBQ2hELFlBQVkscUVBQWdCLFVBQVUsbUJBQW1CO0FBQ3pELGlCQUFpQixxRUFBZ0I7QUFDakM7QUFDQSxRQUFRLDhDQUFVO0FBQ2xCLEdBQUc7O0FBRUgsQ0FBQyxrREFBTTtBQUNQO0FBQ0E7QUFDQSxDQUFDLG9FQUFpQixjQUFjLG9FQUFpQjtBQUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SHdEO0FBQ1A7QUFDUDs7QUFFMUM7QUFDQTtBQUNBLFNBQVMscUVBQWdCLFVBQVUsZUFBZTtBQUNsRCxlQUFlLHFFQUFnQjtBQUMvQixZQUFZLHFFQUFnQixVQUFVLG1CQUFtQjtBQUN6RCxZQUFZLHFFQUFnQjtBQUM1QixRQUFRLHFFQUFnQjtBQUN4QixnQkFBZ0IscUVBQWdCO0FBQ2hDLG9CQUFvQixxRUFBZ0I7QUFDcEMsZ0JBQWdCLHFFQUFnQixXQUFXLGtCQUFrQjtBQUM3RCxZQUFZLHFFQUFnQjtBQUM1QixpQkFBaUIscUVBQWdCLFdBQVcsa0JBQWtCO0FBQzlELGFBQWEscUVBQWdCOztBQUU3QjtBQUNBLGdEQUFnRCxpQkFBaUI7O0FBRWpFLDhCQUE4Qix5QkFBeUI7QUFDdkQsK0JBQStCLHlCQUF5QjtBQUN4RCxzQkFBc0IsUUFBUTtBQUM5Qiw4QkFBOEIsNkJBQTZCO0FBQzNELDJEQUEyRCxzQkFBc0I7QUFDakYsK0JBQStCLHVEQUFXO0FBQzFDLDZCQUE2Qix1REFBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0EsQ0FBQyw4REFBaUI7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDd0Q7QUFLbEM7QUFDaUM7QUFDaUI7QUFDWDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBFQUFvQjtBQUN0QjtBQUNBO0FBQ0EsRUFBRSx1REFBTyxxQkFBcUIsMkRBQVc7QUFDekMsQ0FBQyw0REFBZTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIscUVBQWdCLFdBQVcsa0JBQWtCO0FBQ2xFLGlCQUFpQixxRUFBZ0IsV0FBVyxrQkFBa0I7QUFDOUQsa0JBQWtCLHFFQUFnQixXQUFXLGtCQUFrQjtBQUMvRCxvQkFBb0IscUVBQWdCLFdBQVcsa0JBQWtCOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVEQUFXOztBQUVoQjtBQUNBLEVBQUUsMkRBQWU7O0FBRWpCLGlEQUFpRCwyREFBa0I7QUFDbkUsK0JBQStCLDREQUFtQjtBQUNsRCw4QkFBOEIsd0NBQXdDO0FBQ3RFLDhCQUE4QixxQ0FBcUM7QUFDbkUsZ0NBQWdDLHNDQUFzQztBQUN0RSwrQkFBK0IscUNBQXFDO0FBQ3BFLGtDQUFrQyxnQ0FBZ0M7O0FBRWxFLHNDQUFzQyx1REFBVztBQUNqRCx5Q0FBeUMsdURBQVc7QUFDcEQscUNBQXFDLHVEQUFXO0FBQ2hELG9EQUFvRCx1REFBVztBQUMvRCw0QkFBNEIsNEJBQTRCO0FBQ3hELCtCQUErQiwyQkFBMkI7QUFDMUQsK0JBQStCLGtCQUFrQjtBQUNqRCw2QkFBNkIscUJBQXFCO0FBQ2xELDhCQUE4QiwwQkFBMEI7QUFDeEQsOEJBQThCLDBCQUEwQjtBQUN4RCxvREFBb0QsaUNBQWlDO0FBQ3JGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25FQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDd0I7QUFNdkI7QUFDdUI7QUFDeUI7QUFDekI7QUFDRjtBQUlmO0FBQ2U7O0FBRTNDLDBEQUFZO0FBQ1osOERBQWtCO0FBQ2xCLCtEQUFtQjtBQUNuQiwwREFBWTtBQUNaLDBEQUFTO0FBQ1QseURBQVk7QUFDWixzRUFBbUI7O0FBRW5CLDRFQUF5QjtBQUN6Qiw0REFBbUI7QUFDbkI7QUFDQSxDQUFDLHlEQUFZO0FBQ2IsQ0FBQyxxREFBWTtBQUNiLENBQUMsb0RBQVE7QUFDVDtBQUNBLENBQUMsdURBQWM7QUFDZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBwLWNsaWNrLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jaXR5LXdhdGNobGlzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3JlYXRlLWRvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWZvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLW1haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2V2ZW4tZGF5cy1mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90b2RheS1mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHBhZGRpbmc6IDIwcHggNTBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ2O1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRjb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4udGl0bGUtZGl2IHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi5zZWFyY2gtZGl2PmlucHV0IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0aGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6ICNlZGFlYWU7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxuXFx0aGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNjM2Y0YztcXG5cXHRjb2xvcjogc25vdztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUzMjUyNTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuXFx0Y29sb3I6IGdyYXk7XFxufVxcblxcbi5ub3QtZm91bmQ6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogcmVkO1xcbn1cXG5cXG4udW5pdC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlZ3JlZSB7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udW5pdCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udW5pdDpob3ZlcixcXG4uZGVncmVlOmhvdmVyIHtcXG5cXHRjb2xvcjogIzllOWU5ZTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxufVxcblxcbi5kZWdyZWU6aG92ZXIge1xcblxcdGNvbG9yOiAjOWU5ZTllO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nICovXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4vKiB0b2RheSBkYXRhIGRpdiBzdHlsaW5nICovXFxuLnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogNXB4IDVweCAwcHggMjBweDtcXG5cXHRmbGV4OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwcHggMjBweCBibGFjaztcXG59XFxuXFxuLndlYXRoZXItZGVzYyB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kYXktZGF0YS1kaXY+ZGl2OmZpcnN0LW9mLXR5cGUsXFxuLnRvZGF5LWRhdGEtZGl2PmgyOmZpcnN0LW9mLXR5cGUsXFxuLnRlbXAtZGl2Pioge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRlbXAtcmFuZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlPi5zdXBlci1zY3JpcHQge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRlc2MtaWNvbiB7XFxuXFx0d2lkdGg6IDc1cHg7XFxufVxcblxcbi5mZWVscy1saWtlLXRlbXAge1xcblxcdG1hcmdpbi10b3A6IC0xNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdj4qIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGNvbG9yOiAjMWEwMDJhO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDgwJSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogbmV4dCA3IGRheXMgc3R5bGluZyAqL1xcbi5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDIwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDAwO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLmNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRjb2xvcjogI2ViY2FjYTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwMzBhYjA7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRmbGV4OiAxO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIHdhdGNobGlzdCBkaXYgc3R5bGluZyAqL1xcbi53YXRjaGxpc3QtZGl2IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDE1cHggMjBweCA1cHggMTBweDtcXG5cXHRncmlkLWFyZWE6IDEvMi8zLzM7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjgyOTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi53YXRjaGxpc3QtZGl2PmgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG51bCB7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmNpdHkge1xcblxcdHBhZGRpbmc6IDdweCAzMHB4IDdweCA3cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29sb3I6ICNmZmViY2U7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmxpIHtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxuXFx0cGFkZGluZzogMjBweCAxMHB4O1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzBiMDMwYWIwO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcblxcbi5jaXR5OmhvdmVyLFxcbi5hZGQtaWNvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjgyOTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmFkZC1idXR0b24+aW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLWljb24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1pY29uOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5jaXR5PmRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5PmRpdjpmaXJzdC1vZi10eXBlPmltZyB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5kZWxldGUge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMTBweDtcXG5cXHR0b3A6IDVweDtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93LWRlbGV0ZSB7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2Pio+aW1nIHtcXG5cXHR3aWR0aDogMjVweDtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4uY2FyZD5kaXY+cDpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxufVxcblxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWRlc2MsXFxuLm5hbWUtb2YtY2l0eSxcXG4ubG93LXRlbXAsXFxuLmhpZ2gtdGVtcCxcXG4udGVtcGVyYXR1cmUsXFxuLmRlc2MtaWNvbixcXG4uZmVlbHMtbGlrZS10ZW1wIHtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLndlYXRoZXItZGVzYzpob3ZlcixcXG4ubmFtZS1vZi1jaXR5OmhvdmVyLFxcbi5sb3ctdGVtcDpob3ZlcixcXG4uaGlnaC10ZW1wOmhvdmVyLFxcbi50ZW1wZXJhdHVyZTpob3ZlcixcXG4uZGVzYy1pY29uOmhvdmVyLFxcbi5mZWVscy1saWtlLXRlbXA6aG92ZXIsXFxuLm1pbm9yLWRhdGEtZGl2Pio6aG92ZXJcXG57XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXG5mb290ZXIge1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjgyOTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiAjYjNlZTc5O1xcbn1cXG5cXG4uZmEge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXIsXFxuLmxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3Qge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLmxvYWRlcixcXG4ubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0Ym9yZGVyOiAxMHB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlci10b3A6IDEwcHggc29saWQgIzFkNGQ0ZjtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcblxcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMzUlO1xcblxcdGxlZnQ6IDQ1JTtcXG59XFxuXFxuLmxvYWRlci13YXRjaGxpc3Qge1xcblxcdGJvcmRlcjogNXB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHRvcDogNDAlO1xcblxcdGxlZnQ6IDQwJTtcXG59XFxuXFxuLyogU2FmYXJpICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIFVzZXMgZmxleC1kaXJlY3Rpb24gY29sdW1uIGZvciBzY3JlZW4gc2l6ZXMgYmVsb3cgNjAwcHggKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQudG9kYXktZGF0YS1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0Lm5leHQtN2RheXMtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQud2F0Y2hsaXN0LWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlci13YXRjaGxpc3Qge1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDQzJTtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlciB7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0XFx0bGVmdDogNDAlO1xcblxcdH1cXG5cXG5cXHRmb290ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwYjAzMGFiMDtcXG5cXHR9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtDQUN0QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0Isa0JBQWtCO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osUUFBUTtDQUNSLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixnQ0FBZ0M7Q0FDaEMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLDBCQUEwQjtDQUMxQiw2QkFBNkI7Q0FDN0IsYUFBYTtDQUNiLFlBQVk7Q0FDWixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsYUFBYTtDQUNiLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdDQUFnQztBQUNqQzs7QUFFQTs7Q0FFQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtBQUN0Qjs7QUFFQSxpQkFBaUI7QUFDakI7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtBQUNkOztBQUVBLDJCQUEyQjtBQUMzQjtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLE9BQU87Q0FDUCx5QkFBeUI7Q0FDekIsNkJBQTZCO0NBQzdCLGlDQUFpQztDQUNqQyx1Q0FBdUM7Q0FDdkMsc0NBQXNDO0NBQ3RDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTs7O0NBR0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyREFBMkQ7Q0FDM0QsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsa0NBQWtDO0NBQ2xDLHlCQUF5QjtDQUN6QixnQ0FBZ0M7QUFDakM7O0FBRUEsd0JBQXdCO0FBQ3hCO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLGNBQWM7Q0FDZCwyQkFBMkI7Q0FDM0IsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QixPQUFPO0NBQ1Asc0JBQXNCO0NBQ3RCLGdDQUFnQztBQUNqQzs7QUFFQSwwQkFBMEI7QUFDMUI7Q0FDQyxPQUFPO0NBQ1AsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDBCQUEwQjtDQUMxQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFFBQVE7Q0FDUixrQkFBa0I7Q0FDbEIsd0NBQXdDO0FBQ3pDOztBQUVBOztDQUVDLHlCQUF5QjtDQUN6QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGVBQWU7Q0FDZixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFFBQVE7Q0FDUixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLDBCQUEwQjtDQUMxQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjs7QUFFQTs7Ozs7OztDQU9DLGdDQUFnQztBQUNqQzs7QUFFQTs7Ozs7Ozs7O0NBU0Msc0JBQXNCO0FBQ3ZCOztBQUVBLG1CQUFtQjtBQUNuQjtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQiw2QkFBNkI7Q0FDN0IseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLE1BQU07Q0FDTixPQUFPO0FBQ1I7O0FBRUE7O0NBRUMsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsV0FBVztDQUNYLFlBQVk7Q0FDWiwwQ0FBMEM7Q0FDMUMsa0NBQWtDO0NBQ2xDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztBQUNWOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDZCQUE2QjtDQUM3QixXQUFXO0NBQ1gsWUFBWTtDQUNaLFFBQVE7Q0FDUixTQUFTO0FBQ1Y7O0FBRUEsV0FBVztBQUNYO0NBQ0M7RUFDQywrQkFBK0I7Q0FDaEM7O0NBRUE7RUFDQyxpQ0FBaUM7Q0FDbEM7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MseUJBQXlCO0NBQzFCO0FBQ0Q7O0FBRUEsNERBQTREO0FBQzVEO0NBQ0M7RUFDQyxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLDJCQUEyQjtDQUM1Qjs7Q0FFQTtFQUNDLDRCQUE0QjtDQUM3Qjs7Q0FFQTtFQUNDLDRCQUE0QjtDQUM3Qjs7Q0FFQTtFQUNDLFFBQVE7RUFDUixTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxRQUFRO0VBQ1IsU0FBUztDQUNWOztDQUVBO0VBQ0MsMkJBQTJCO0NBQzVCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZjBmO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHBhZGRpbmc6IDIwcHggNTBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ2O1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRjb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4udGl0bGUtZGl2IHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi5zZWFyY2gtZGl2PmlucHV0IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0aGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6ICNlZGFlYWU7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxuXFx0aGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNjM2Y0YztcXG5cXHRjb2xvcjogc25vdztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUzMjUyNTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuXFx0Y29sb3I6IGdyYXk7XFxufVxcblxcbi5ub3QtZm91bmQ6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogcmVkO1xcbn1cXG5cXG4udW5pdC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlZ3JlZSB7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udW5pdCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udW5pdDpob3ZlcixcXG4uZGVncmVlOmhvdmVyIHtcXG5cXHRjb2xvcjogIzllOWU5ZTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxufVxcblxcbi5kZWdyZWU6aG92ZXIge1xcblxcdGNvbG9yOiAjOWU5ZTllO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nICovXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4vKiB0b2RheSBkYXRhIGRpdiBzdHlsaW5nICovXFxuLnRvZGF5LWRhdGEtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogNXB4IDVweCAwcHggMjBweDtcXG5cXHRmbGV4OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMDBmMGY7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwcHggMjBweCBibGFjaztcXG59XFxuXFxuLndlYXRoZXItZGVzYyB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kYXktZGF0YS1kaXY+ZGl2OmZpcnN0LW9mLXR5cGUsXFxuLnRvZGF5LWRhdGEtZGl2PmgyOmZpcnN0LW9mLXR5cGUsXFxuLnRlbXAtZGl2Pioge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRlbXAtcmFuZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlPi5zdXBlci1zY3JpcHQge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRlc2MtaWNvbiB7XFxuXFx0d2lkdGg6IDc1cHg7XFxufVxcblxcbi5mZWVscy1saWtlLXRlbXAge1xcblxcdG1hcmdpbi10b3A6IC0xNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5taW5vci1kYXRhLWRpdj4qIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGNvbG9yOiAjMWEwMDJhO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDgwJSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogbmV4dCA3IGRheXMgc3R5bGluZyAqL1xcbi5uZXh0LTdkYXlzLWRpdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDIwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDAwO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLmNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRjb2xvcjogI2ViY2FjYTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwMzBhYjA7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRmbGV4OiAxO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIHdhdGNobGlzdCBkaXYgc3R5bGluZyAqL1xcbi53YXRjaGxpc3QtZGl2IHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDE1cHggMjBweCA1cHggMTBweDtcXG5cXHRncmlkLWFyZWE6IDEvMi8zLzM7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjgyOTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi53YXRjaGxpc3QtZGl2PmgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG51bCB7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmNpdHkge1xcblxcdHBhZGRpbmc6IDdweCAzMHB4IDdweCA3cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29sb3I6ICNmZmViY2U7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZjOTg5ODtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmxpIHtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxuXFx0cGFkZGluZzogMjBweCAxMHB4O1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzBiMDMwYWIwO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuXFx0Z2FwOiA1cHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMgMTg0IDE4NCAvIDUwJSk7XFxufVxcblxcbi5jaXR5OmhvdmVyLFxcbi5hZGQtaWNvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjgyOTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbj5pbnB1dCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi13aWR0aDogOTVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmFkZC1idXR0b24+aW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLWljb24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1pY29uOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5jaXR5PmRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5PmRpdjpmaXJzdC1vZi10eXBlPmltZyB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5kZWxldGUge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMTBweDtcXG5cXHR0b3A6IDVweDtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93LWRlbGV0ZSB7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLm1pbm9yLWRhdGEtZGl2Pio+aW1nIHtcXG5cXHR3aWR0aDogMjVweDtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4uY2FyZD5kaXY+cDpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxufVxcblxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWRlc2MsXFxuLm5hbWUtb2YtY2l0eSxcXG4ubG93LXRlbXAsXFxuLmhpZ2gtdGVtcCxcXG4udGVtcGVyYXR1cmUsXFxuLmRlc2MtaWNvbixcXG4uZmVlbHMtbGlrZS10ZW1wIHtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLndlYXRoZXItZGVzYzpob3ZlcixcXG4ubmFtZS1vZi1jaXR5OmhvdmVyLFxcbi5sb3ctdGVtcDpob3ZlcixcXG4uaGlnaC10ZW1wOmhvdmVyLFxcbi50ZW1wZXJhdHVyZTpob3ZlcixcXG4uZGVzYy1pY29uOmhvdmVyLFxcbi5mZWVscy1saWtlLXRlbXA6aG92ZXIsXFxuLm1pbm9yLWRhdGEtZGl2Pio6aG92ZXJcXG57XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXG5mb290ZXIge1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmYzk4OTg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjgyOTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiAjYjNlZTc5O1xcbn1cXG5cXG4uZmEge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXIsXFxuLmxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubG9hZGVyLWNvbnRhaW5lci13YXRjaGxpc3Qge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLmxvYWRlcixcXG4ubG9hZGVyLXdhdGNobGlzdCB7XFxuXFx0Ym9yZGVyOiAxMHB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlci10b3A6IDEwcHggc29saWQgIzFkNGQ0ZjtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcblxcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMzUlO1xcblxcdGxlZnQ6IDQ1JTtcXG59XFxuXFxuLmxvYWRlci13YXRjaGxpc3Qge1xcblxcdGJvcmRlcjogNXB4IHNvbGlkICM5MDYyNjI7XFxuXFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkICMxZDRkNGY7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHRvcDogNDAlO1xcblxcdGxlZnQ6IDQwJTtcXG59XFxuXFxuLyogU2FmYXJpICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIFVzZXMgZmxleC1kaXJlY3Rpb24gY29sdW1uIGZvciBzY3JlZW4gc2l6ZXMgYmVsb3cgNjAwcHggKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQudG9kYXktZGF0YS1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0Lm5leHQtN2RheXMtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQud2F0Y2hsaXN0LWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlci13YXRjaGxpc3Qge1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDQzJTtcXG5cXHR9XFxuXFxuXFx0LmxvYWRlciB7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0XFx0bGVmdDogNDAlO1xcblxcdH1cXG5cXG5cXHRmb290ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwYjAzMGFiMDtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkQ2l0eVRvV2F0Y2hsaXN0IH0gZnJvbSBcIi4vY2l0eS13YXRjaGxpc3RcIjtcbmltcG9ydCB7XG5cdGRpc3BsYXlFcnJvck1lc3NhZ2UsXG5cdGdldENvdW50cnlOYW1lLFxuXHRnZXRMb25BbmRMYXQsXG5cdGdldFdlYXRoZXJEYXRhLFxuXHRzY3JlZW5Mb2FkZXIsXG59IGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCB7IGRlZ3JlZSwgbmV3RGVncmVlLCBzZXREZWdyZWUsIHdhdGNobGlzdEFycmF5IH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL3RvZGF5LWZvcmVjYXN0XCI7XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9CdXR0b24oKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0V2ZW50VGFyZ2V0cyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRXZlbnRUYXJnZXRzKGUpIHtcblx0Y29uc3QgYWRkQ2l0eUJ1dHRvbiA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZCxcblx0XHRoZWFkZXJJbnB1dCA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0sXG5cdFx0aGVhZGVyQnV0dG9uID0gZG9jdW1lbnQuYm9keS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSxcblx0XHR3YXRjaGxpc3RJbnB1dCA9IGFkZENpdHlCdXR0b24uY2hpbGROb2Rlc1sxXSxcblx0XHRudW1iZXJPZkNpdGllcyA9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmNoaWxkRWxlbWVudENvdW50O1xuXG5cdGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJhZGQtaWNvblwiKSB7XG5cdFx0aWYgKHdhdGNobGlzdElucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuXHRcdFx0ZGlzcGxheUVycm9yTWVzc2FnZS5jYWxsKGRvY3VtZW50LmJvZHksIFwiRW1wdHkgSW5wdXRcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChudW1iZXJPZkNpdGllcyA9PSA3KSB7XG5cdFx0XHRkaXNwbGF5RXJyb3JNZXNzYWdlLmNhbGwoZG9jdW1lbnQuYm9keSwgXCJNYXguIENpdGllcyBSZWFjaGVkXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzY3JlZW5Mb2FkZXIuY2FsbChkb2N1bWVudCk7XG5cdFx0XHRnZXRXZWF0aGVyRGF0YS5hcHBseShkb2N1bWVudC5ib2R5LCBbXG5cdFx0XHRcdGFkZENpdHlUb1dhdGNobGlzdC5iaW5kKGRvY3VtZW50LmJvZHkpLFxuXHRcdFx0XHRnZXRMb25BbmRMYXQsXG5cdFx0XHRcdHdhdGNobGlzdElucHV0LnZhbHVlLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0Z2V0Q291bnRyeU5hbWUsXG5cdFx0XHRdKTtcblx0XHR9XG5cdH1cblxuXHQvLyBUYXJnZXRzIGFsbCBjaGlsZHJlbiBvZiBjaXR5IGVsZW1lbnRcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpLmZvckVhY2goKGNpdHlMaXN0KSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QgfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdIHx8XG5cdFx0XHRlLnRhcmdldCA9PSBjaXR5TGlzdC5jaGlsZHJlblsxXSB8fFxuXHRcdFx0ZS50YXJnZXQgPT0gY2l0eUxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0gfHxcblx0XHRcdGUudGFyZ2V0ID09IGNpdHlMaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0KSB7XG5cdFx0XHRzY3JlZW5Mb2FkZXIoKTtcblx0XHRcdGNvbnN0IGNpdHkgPSBjaXR5TGlzdC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0XHRnZXRXZWF0aGVyRGF0YShnZXREYXRhLCBnZXRMb25BbmRMYXQsIGNpdHksIGZhbHNlLCBnZXRDb3VudHJ5TmFtZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAoZS50YXJnZXQgPT09IGhlYWRlckJ1dHRvbikge1xuXHRcdGlmIChoZWFkZXJJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcblx0XHRcdGRpc3BsYXlFcnJvck1lc3NhZ2UuY2FsbChudWxsLCBcIkVtcHR5IElucHV0XCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzY3JlZW5Mb2FkZXIoKTtcblx0XHRnZXRXZWF0aGVyRGF0YS5jYWxsKFxuXHRcdFx0bnVsbCxcblx0XHRcdGdldERhdGEsXG5cdFx0XHRnZXRMb25BbmRMYXQsXG5cdFx0XHRoZWFkZXJJbnB1dC52YWx1ZSxcblx0XHRcdGhlYWRlcklucHV0LFxuXHRcdFx0Z2V0Q291bnRyeU5hbWVcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyRm9yRXZlbnRUbyhlbGVtZW50LCB1bml0KSB7XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoZGVncmVlID09IFwiQ1wiKSB1bml0LnRleHRDb250ZW50ID0gXCJDXCI7XG5cdFx0ZWxzZSB1bml0LnRleHRDb250ZW50ID0gXCJGXCI7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5Ub0V2ZW50RnJvbShlbGVtZW50LCB1bml0KSB7XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoZGVncmVlID09IFwiQ1wiKVxuXHRcdFx0bmV3RGVncmVlKFwiRlwiKSxcblx0XHRcdFx0c2V0RGVncmVlKCksXG5cdFx0XHRcdCh1bml0LnRleHRDb250ZW50ID0gXCIgQ1wiKSxcblx0XHRcdFx0ZGlzcGxheUZhaHJlbmhlaXQoKTtcblx0XHRlbHNlXG5cdFx0XHRuZXdEZWdyZWUoXCJDXCIpLCBzZXREZWdyZWUoKSwgKHVuaXQudGV4dENvbnRlbnQgPSBcIiBGXCIpLCBkaXNwbGF5Q2Vsc2l1cygpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZhaHJlbmhlaXQoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udmVydFwiKS5mb3JFYWNoKCh0ZW1wKSA9PiB7XG5cdFx0dGVtcC50ZXh0Q29udGVudCA9IGNvbnZlcnRDZWxzaXVzVG9GYWhyZW5oZWl0KHBhcnNlRmxvYXQodGVtcC50ZXh0Q29udGVudCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydENlbHNpdXNUb0ZhaHJlbmhlaXQoY2Vsc2l1cykge1xuXHRjb25zdCBmYWhyZW5oZWl0ID0gKGNlbHNpdXMgKiA5KSAvIDUgKyAzMjtcblx0cmV0dXJuIE1hdGgucm91bmQoKGZhaHJlbmhlaXQgKiAxMDAwKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q2Vsc2l1cygpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb252ZXJ0XCIpLmZvckVhY2goKHRlbXApID0+IHtcblx0XHR0ZW1wLnRleHRDb250ZW50ID0gY29udmVydEZhaHJlbmhlaXRUb0NlbHNpdXMocGFyc2VGbG9hdCh0ZW1wLnRleHRDb250ZW50KSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RmFocmVuaGVpdFRvQ2Vsc2l1cyhmYWhyZW5oZWl0KSB7XG5cdGNvbnN0IGNlbHNpdXMgPSAoKGZhaHJlbmhlaXQgLSAzMikgKiA1KSAvIDk7XG5cdHJldHVybiBNYXRoLnJvdW5kKChjZWxzaXVzICogMTAwMCkgLyAxMDAwKTtcbn1cblxuLyoqXG4gKiBVc2UgZGVsYXlFeGVjdXRpb24gYW5kIGRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QgZnVuY3Rpb25zIHRvIG1ha2VcbiAqIHdhdGNobGlzdCBjaXRpZXMgaW4gbG9jYWxTdG9yYWdlIGZldGNoIHRoZWlyIGRhdGEgb25lIGFmdGVyIHRoZSBvdGhlclxuICogc28gdGhleSBhcmUgYmVpbmcgcmVuZGVyZWQgYWNjb3JkaW5nbHkgYXMgaXQgaXMgaW4gTFMgdG8gbWFrZSBkZWxldGluZ1xuICogdGhlbSB3aXRoIHVsIGluZGV4IGNvcnJlc3BvbmQgdG8gaW5kZXggaW4gTFMuIFN0aWxsIG5vdCAxMDAlIGNlcnRhaW4gdG9cbiAqIGZldGNoIHN5bmNocm9ub3VzbHkgYnV0IGhlbHBzLlxuICovXG5mdW5jdGlvbiBkZWxheUV4ZWN1dGlvbihjaXR5KSB7XG5cdGNvbnN0IGZldGNoTm93ID0gZ2V0V2VhdGhlckRhdGEoXG5cdFx0YWRkQ2l0eVRvV2F0Y2hsaXN0LmJpbmQoY2l0eSksXG5cdFx0Z2V0TG9uQW5kTGF0LFxuXHRcdGNpdHksXG5cdFx0ZmFsc2UsXG5cdFx0Z2V0Q291bnRyeU5hbWVcblx0KTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGZldGNoTm93KSwgMTIwMCk7XG5cdH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0KCkge1xuXHRpZiAod2F0Y2hsaXN0QXJyYXkubGVuZ3RoID4gMClcblx0XHRmb3IgKGNvbnN0IGNpdHkgb2Ygd2F0Y2hsaXN0QXJyYXkpIHtcblx0XHRcdGF3YWl0IGRlbGF5RXhlY3V0aW9uKGNpdHkpO1xuXHRcdH1cbn1cblxuZXhwb3J0IHtcblx0YWRkTGlzdGVuZXJUb0J1dHRvbixcblx0ZGlzcGxheUF2YWlsYWJsZVdhdGNobGlzdCxcblx0YWRkTGlzdGVuZXJGb3JFdmVudFRvLFxuXHRsaXN0ZW5Ub0V2ZW50RnJvbSxcbn07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xlYXJTY3JlZW5Mb2FkZXIgfSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiLi9pY29ucy9hZGRjaXR5LnBuZ1wiO1xuaW1wb3J0IERlbGV0ZSBmcm9tIFwiLi9pY29ucy9kZWxldGUucG5nXCI7XG5pbXBvcnQgeyBzZXR3YXRjaGxpc3RBcnJheSwgd2F0Y2hsaXN0QXJyYXkgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBzdXBlclNjcmlwdCB9IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuXG4vKipcbiAqIFdhdGNobGlzdCBzdGF0aWMgZWxlbWVudHMsIHRoZXkgZG8gbm90IHJlcXVpcmUgQVBJIHJlcXVlc3QgdG8gZGlzcGxheS5cbiAqL1xuZnVuY3Rpb24gd2F0Y2hsaXN0KCkge1xuXHRjb25zdCB3YXRjaGxpc3REaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXSxcblx0XHR3YXRjaGxpc3RIZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaDJcIiksXG5cdFx0Y2l0eUxpc3QgPSBjcmVhdGVEb21FbGVtZW50KFwidWxcIiksXG5cdFx0YWRkQ2l0eUJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcImFkZC1idXR0b25cIiB9KSxcblx0XHR3YXRjaGxpc3RJbnB1dCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbnB1dFwiLCB7XG5cdFx0XHRjbGFzczogXCJ3YXRjaGxpc3QtaW5wdXRcIixcblx0XHRcdHR5cGU6IFwic2VhcmNoXCIsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCJBZGQgQ2l0eVwiLFxuXHRcdH0pLFxuXHRcdE15QWRkSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJhZGQtaWNvblwiLCBzcmM6IEFkZEljb24gfSk7XG5cblx0YWRkQ2l0eUJ1dHRvbi5hcHBlbmQoTXlBZGRJY29uLCB3YXRjaGxpc3RJbnB1dCk7XG5cdHdhdGNobGlzdEhlYWRlci50ZXh0Q29udGVudCA9IFwiV2F0Y2hsaXN0XCI7XG5cdGNpdHlMaXN0LmFwcGVuZChhZGRDaXR5QnV0dG9uKTtcblx0d2F0Y2hsaXN0RGl2LmFwcGVuZCh3YXRjaGxpc3RIZWFkZXIsIGNpdHlMaXN0KTtcbn1cblxuLyoqXG4gKiBUaGVzZSBhcmUgcmVuZGVyZWQgd2hlbiB0aGVyZSdzIGEgcmVxdWVzdCB0byBhZGQgYW5kIGRpc3BsYXkgY2l0eVxuICogb24gdGhlIHdhdGNobGlzdC5cbiAqL1xuZnVuY3Rpb24gYWRkQ2l0eVRvV2F0Y2hsaXN0KHJlc3BvbnNlKSB7XG5cdGNvbnN0IGFkZENpdHlCdXR0b24gPVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQsXG5cdFx0Y2l0eUxpc3QgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLFxuXHRcdHdhdGNobGlzdElucHV0ID0gYWRkQ2l0eUJ1dHRvbi5jaGlsZHJlblsxXSxcblx0XHR3YXRjaGxpc3RTY3JlZW5Mb2FkZXJEaXYgPVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0ubGFzdENoaWxkLFxuXHRcdGljb25BbmRDaXR5TmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0Y2l0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcImNpdHlcIiB9KSxcblx0XHR0ZW1wU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY29udmVydFwiIH0pLFxuXHRcdHRlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHRjaXR5TmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdGRlc2NJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiKSxcblx0XHRteURlbGV0ZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJkZWxldGVcIiwgc3JjOiBEZWxldGUgfSk7XG5cblx0dGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChyZXNwb25zZS5jdXJyZW50LnRlbXApfWA7XG5cdGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7d2F0Y2hsaXN0SW5wdXQudmFsdWV9YDtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50LmJvZHkpIGljb25BbmRDaXR5TmFtZS5hcHBlbmQoZGVzY0ljb24sIGNpdHlOYW1lKTtcblx0ZWxzZSBpY29uQW5kQ2l0eU5hbWUuYXBwZW5kKGRlc2NJY29uLCB0aGlzKTtcblxuXHR0ZW1wLmFwcGVuZCh0ZW1wU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdGdldEljb25BbmRUZW1wKGNpdHksIGljb25BbmRDaXR5TmFtZSwgZGVzY0ljb24sIHJlc3BvbnNlLCB0ZW1wLCBteURlbGV0ZSk7XG5cdGNpdHlMaXN0Lmluc2VydEJlZm9yZShjaXR5LCBhZGRDaXR5QnV0dG9uKTtcblx0YWRkTGlzdGVuZXJUb0RlbGV0ZUJ1dHRvbihteURlbGV0ZSwgY2l0eSk7XG5cblx0Ly8gUmVtb3ZlcyBzY3JlZW5sb2FkZXIgb25jZSBmZXRjaCByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWwuXG5cdGlmICh3YXRjaGxpc3RTY3JlZW5Mb2FkZXJEaXYuY2xhc3NOYW1lID09PSBcImxvYWRlci1jb250YWluZXItd2F0Y2hsaXN0XCIpXG5cdFx0Y2xlYXJTY3JlZW5Mb2FkZXIuY2FsbChkb2N1bWVudC5ib2R5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRlbXBlcmF0dXJlIGFuZCB3ZWF0aGVyIGljb24gZm9yIGVhY2ggaW5zdGFuY2VzIG9mIGNpdHlcbiAqL1xuZnVuY3Rpb24gZ2V0SWNvbkFuZFRlbXAoXG5cdGNpdHksXG5cdGljb25BbmRDaXR5TmFtZSxcblx0ZGVzY0ljb24sXG5cdHJlc3BvbnNlLFxuXHR0ZW1wLFxuXHRteURlbGV0ZVxuKSB7XG5cdGNvbnN0IHdhdGNobGlzdElucHV0ID1cblx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZFxuXHRcdFx0LmNoaWxkTm9kZXNbMV07XG5cdGNpdHkuYXBwZW5kKGljb25BbmRDaXR5TmFtZSwgdGVtcCwgbXlEZWxldGUpO1xuXHRkZXNjSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtyZXNwb25zZS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcblxuXHQvLyBPbmx5IHB1c2hlcyBjaXR5IHRvIGxvY2FsU3RvcmFnZSBpZiBub3QgYW4gZW1wdHkgc3RyaW5nXG5cdGlmICh3YXRjaGxpc3RJbnB1dC52YWx1ZS50cmltKCkgIT09IFwiXCIpXG5cdFx0d2F0Y2hsaXN0QXJyYXkucHVzaCh3YXRjaGxpc3RJbnB1dC52YWx1ZSksIHNldHdhdGNobGlzdEFycmF5KCk7XG5cdGlmICh3YXRjaGxpc3RJbnB1dC52YWx1ZSkgd2F0Y2hsaXN0SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG4vKipcbiAqIEFkZCBldmVudExpc3RlbmVyIGFuZCBkaXNwbGF5IGRlbGV0ZSBidXR0b24gb24gbW91c2VlbnRlciwgaGlkZSBkZWxldGVcbiAqIGJ1dHRvbiBvbiBtb3VzZWxlYXZlLlxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclRvRGVsZXRlQnV0dG9uKG15RGVsZXRlLCBjaXR5KSB7XG5cdG15RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XCJjbGlja1wiLFxuXHRcdERlbGV0ZUNpdHlGcm9tV2F0Y2hsaXN0LmJpbmQobnVsbCwgbXlEZWxldGUpXG5cdCk7XG5cdGNpdHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT5cblx0XHRteURlbGV0ZS5jbGFzc0xpc3QuYWRkKFwic2hvdy1kZWxldGVcIilcblx0KTtcblx0Y2l0eS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PlxuXHRcdG15RGVsZXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWRlbGV0ZVwiKVxuXHQpO1xufVxuXG4vKipcbiAqIERlbGV0ZXMgY2l0eSBmcm9tIERPTSBhbmQgdXNlcyBpbmRleCBvZiBjaXR5IG9uIHdhdGNobGlzdCB1bCB0byBkZWxldGVcbiAqIGNpdHkgbmFtZSBmcm9tIGxvY2FsU3RvcmFnZS5cbiAqL1xuZnVuY3Rpb24gRGVsZXRlQ2l0eUZyb21XYXRjaGxpc3QobXlEZWxldGUpIHtcblx0bGV0IGxpc3RBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpKTtcblx0bGV0IGluZGV4T2ZDaXR5ID0gbGlzdEFycmF5LmluZGV4T2YobXlEZWxldGUucGFyZW50Tm9kZSk7XG5cdHdhdGNobGlzdEFycmF5LnNwbGljZShpbmRleE9mQ2l0eSwgMSk7XG5cdHNldHdhdGNobGlzdEFycmF5KCk7XG5cdG15RGVsZXRlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChteURlbGV0ZS5wYXJlbnROb2RlKTtcbn1cblxuZXhwb3J0IHsgd2F0Y2hsaXN0LCBhZGRDaXR5VG9XYXRjaGxpc3QgfTsiLCJleHBvcnQgY29uc3QgQVBJX1RPS0VOID0ge1xuXHRLRVk6IFwiYzkzZmQxODE3ZjNmYmU0MmFlYWMwYTYzMDc2NjAzYjlcIixcblx0S0VZMjogXCIwYWQ3MTNmYWMxMjBiODNiZDkwNzI2MWZiNzc0MmZkN1wiLFxuXHRLRVkzOiBcIjIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0XCIsXG5cdFVOU1BMQVNIX0FDQ0VTU19LRVk6IFwia2RGcWpiaGNpSUZJYjBsRGVmSTJJNHpxUmJBalBhMTNaR3UwZGpudW5zNFwiLFxuXHRVTlNQTEFTSF9TRUNSRVRfS0VZOiBcImVwa3lDWG9nSHFkOGsydVg3b0FyYWRsMXA0NDJEY2YtREk4SXY3VkVUdzhcIixcblx0VU5TUExBU0hfQUNDRVNTX0tFWTI6IFwiZ0s1MkRlMlRtX2RMNW8xSVhLYTlGUk9CQUotTElZcVI0MXhCZGxnM1gya1wiLFxufTsiLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgRE9NIEVsZW1lbnRzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG5cdGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG5cdGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuXHRzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuXHRyZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG5cdE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuXHR9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9OyIsImltcG9ydCB7IEFQSV9UT0tFTiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IHsgZGVncmVlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5sZXQgdW5pdCwgY291bnRyeUFuZENpdHlOYW1lLCBjb3VudHJ5QW5kQ2l0eU5hbWUyO1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShcblx0Y2FsbGJhY2sxLFxuXHRjYWxsYmFjazIsXG5cdGNpdHlOYW1lLFxuXHRoZWFkZXJJbnB1dCxcblx0Y2FsbGJhY2szXG4pIHtcblx0Y2hlY2tQcmVmZXJyZWRVbml0LmJpbmQodGhpcyk7XG5cdGNvbnN0IGV4Y2x1ZGUgPSBgJnVuaXRzPSR7dW5pdH0mQVBQSUQ9JHtBUElfVE9LRU4uS0VZfWA7XG5cdGZldGNoKFxuXHRcdGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JHtleGNsdWRlfWAsXG5cdFx0e1xuXHRcdFx0bW9kZTogXCJjb3JzXCIsXG5cdFx0fVxuXHQpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRpZiAocmVzcG9uc2UuY29kID09IDQwNCkge1xuXHRcdFx0XHRkaXNwbGF5RXJyb3JNZXNzYWdlLmNhbGwodGhpcywgXCJDaXR5IE5vdCBGb3VuZFwiKTtcblx0XHRcdFx0Y2xlYXJTY3JlZW5Mb2FkZXIuY2FsbCh0aGlzKTtcblx0XHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuY29kID09IDIwMCkge1xuXHRcdFx0XHRjb25zdCB7IGxhdCB9ID0gcmVzcG9uc2UuY29vcmQ7XG5cdFx0XHRcdGNvbnN0IHsgbG9uIH0gPSByZXNwb25zZS5jb29yZDtcblx0XHRcdFx0Y2FsbGJhY2szLmNhbGwodGhpcywgcmVzcG9uc2UpO1xuXHRcdFx0XHRjYWxsYmFjazIobGF0LCBsb24sIGNhbGxiYWNrMSwgaGVhZGVySW5wdXQpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmNhdGNoKCgpID0+IHtcblx0XHRcdGNsZWFyU2NyZWVuTG9hZGVyLmNhbGwodGhpcyk7XG5cdFx0XHRkaXNwbGF5RXJyb3JNZXNzYWdlLmNhbGwodGhpcywgXCJTbG93IE5ldHdvcmsgUmVzcG9uc2UsIFJlbG9hZCBQYWdlLlwiKTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQcmVmZXJyZWRVbml0KCkge1xuXHRpZiAoZGVncmVlID09IFwiQ1wiKSB1bml0ID0gXCJtZXRyaWNcIjtcblx0ZWxzZSB1bml0ID0gXCJpbXBlcmlhbFwiO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3JNZXNzYWdlKGVycm9yUGxhY2Vob2xkZXIpIHtcblx0Y29uc3Qgd2F0Y2hsaXN0SW5wdXQgPVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS5sYXN0Q2hpbGQuY2hpbGRyZW5bMV0sXG5cdFx0aGVhZGVySW5wdXQgPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdO1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQuYm9keSlcblx0XHR3YXRjaGxpc3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwibm90LWZvdW5kXCIpLFxuXHRcdFx0c2V0UGxhY2Vob2xkZXIuY2FsbCh0aGlzLCB3YXRjaGxpc3RJbnB1dCwgXCJBZGQgQ2l0eVwiLCBlcnJvclBsYWNlaG9sZGVyKTtcblx0ZWxzZVxuXHRcdGhlYWRlcklucHV0LmNsYXNzTGlzdC5hZGQoXCJub3QtZm91bmRcIiksXG5cdFx0XHRzZXRQbGFjZWhvbGRlci5jYWxsKFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRoZWFkZXJJbnB1dCxcblx0XHRcdFx0XCJFbnRlciBDaXR5IE5hbWVcIixcblx0XHRcdFx0ZXJyb3JQbGFjZWhvbGRlclxuXHRcdFx0KTtcbn1cblxuZnVuY3Rpb24gc2V0UGxhY2Vob2xkZXIoaW5wdXQsIHBsYWNlaG9sZGVyLCBlcnJvclBsYWNlaG9sZGVyKSB7XG5cdGlucHV0LnZhbHVlID0gXCJcIjtcblx0aW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgZXJyb3JQbGFjZWhvbGRlcik7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtZm91bmRcIik7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xuXHR9LCA0MDAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9uQW5kTGF0KGxhdCwgbG9uLCBjYWxsYmFjaywgaGVhZGVySW5wdXQpIHtcblx0bmV4dDdEYXlzRm9yZWNhc3QobGF0LCBsb24sIGNhbGxiYWNrLCBoZWFkZXJJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIG5leHQ3RGF5c0ZvcmVjYXN0KGxhdCwgbG9uLCBjYWxsYmFjaywgaGVhZGVySW5wdXQpIHtcblx0Y2hlY2tQcmVmZXJyZWRVbml0KCk7XG5cdGNvbnN0IGV4Y2x1ZGUyID0gYCZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSxhbGVydHMmdW5pdHM9JHt1bml0fSZhcHBpZD0ke0FQSV9UT0tFTi5LRVl9YDtcblx0ZmV0Y2goXG5cdFx0YGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSR7ZXhjbHVkZTJ9YFxuXHQpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSwgaGVhZGVySW5wdXQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q291bnRyeU5hbWUocmVzcG9uc2UpIHtcblx0Y29uc3QgcmVnaW9uTmFtZXMgPSBuZXcgSW50bC5EaXNwbGF5TmFtZXMoW1wiZW5cIl0sIHsgdHlwZTogXCJyZWdpb25cIiB9KTtcblx0Y29uc3QgY291bnRyeU5hbWUgPSByZWdpb25OYW1lcy5vZihyZXNwb25zZS5zeXMuY291bnRyeSk7XG5cdGlmICh0aGlzID09PSBkb2N1bWVudCkge1xuXHRcdGlmIChjb3VudHJ5TmFtZSA9PSByZXNwb25zZS5uYW1lKSBjb3VudHJ5QW5kQ2l0eU5hbWUgPSBjb3VudHJ5TmFtZTtcblx0XHRlbHNlIGNvdW50cnlBbmRDaXR5TmFtZSA9IGAke3Jlc3BvbnNlLm5hbWV9LCAke2NvdW50cnlOYW1lfS5gO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChjb3VudHJ5TmFtZSA9PSByZXNwb25zZS5uYW1lKSBjb3VudHJ5QW5kQ2l0eU5hbWUyID0gY291bnRyeU5hbWU7XG5cdFx0ZWxzZSBjb3VudHJ5QW5kQ2l0eU5hbWUyID0gYCR7cmVzcG9uc2UubmFtZX0sICR7Y291bnRyeU5hbWV9LmA7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2NyZWVuTG9hZGVyKCkge1xuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQpIHtcblx0XHRjb25zdCBbbG9hZGVyQ29udGFpbmVyXSA9IGNyZWF0ZVNjcmVlbkxvYWRlcihcblx0XHRcdFwibG9hZGVyLXdhdGNobGlzdFwiLFxuXHRcdFx0XCJsb2FkZXItY29udGFpbmVyLXdhdGNobGlzdFwiXG5cdFx0KTtcblx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5hcHBlbmQobG9hZGVyQ29udGFpbmVyKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBbbG9hZGVyQ29udGFpbmVyXSA9IGNyZWF0ZVNjcmVlbkxvYWRlcihcImxvYWRlclwiLCBcImxvYWRlci1jb250YWluZXJcIik7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQobG9hZGVyQ29udGFpbmVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjbGVhclNjcmVlbkxvYWRlcigpIHtcblx0aWYgKHRoaXMgPT09IGRvY3VtZW50LmJvZHkpXG5cdFx0ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0ucmVtb3ZlQ2hpbGQoXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS5sYXN0Q2hpbGRcblx0XHQpO1xuXHRlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlci1jb250YWluZXJcIikpXG5cdFx0ZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjcmVlbkxvYWRlcihsb2FkZXJDbGFzcywgbG9hZGVyRGl2Q2xhc3MpIHtcblx0Y29uc3QgbG9hZGVyQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7XG5cdFx0Y2xhc3M6IGxvYWRlckRpdkNsYXNzLFxuXHR9KTtcblx0Y29uc3QgbG9hZGVyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBsb2FkZXJDbGFzcyB9KTtcblx0bG9hZGVyQ29udGFpbmVyLmFwcGVuZChsb2FkZXIpO1xuXHRyZXR1cm4gW2xvYWRlckNvbnRhaW5lcl07XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJJbWFnZSh3ZWF0aGVyRGVzYykge1xuXHRmZXRjaChcblx0XHRgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3M/cXVlcnk9JHt3ZWF0aGVyRGVzY30mcGVyX3BhZ2U9MiZjbGllbnRfaWQ9JHtBUElfVE9LRU4uVU5TUExBU0hfQUNDRVNTX0tFWTJ9YCxcblx0XHR7IG1vZGU6IFwiY29yc1wiIH1cblx0KVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdC50aGVuKFxuXHRcdFx0KHJlc3BvbnNlKSA9PlxuXHRcdFx0XHQoZG9jdW1lbnQuYm9keS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41MjcpLHJnYmEoMCwgMCwgMCwgMC41KSkgLHVybCgke3Jlc3BvbnNlLnJlc3VsdHNbMV0udXJscy5yYXd9KWApXG5cdFx0KTtcbn1cblxuZXhwb3J0IHtcblx0Y291bnRyeUFuZENpdHlOYW1lLFxuXHRjb3VudHJ5QW5kQ2l0eU5hbWUyLFxuXHRnZXRXZWF0aGVyRGF0YSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRnZXRDb3VudHJ5TmFtZSxcblx0c2NyZWVuTG9hZGVyLFxuXHRjbGVhclNjcmVlbkxvYWRlcixcblx0ZGlzcGxheUVycm9yTWVzc2FnZSxcblx0Z2V0V2VhdGhlckltYWdlLFxufTsiLCIvKipcbiAqIFN0b3JhZ2UgRm9yIENpdHkgTmFtZVxuICovXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5TmFtZVwiKSA9PT0gbnVsbClcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXR5TmFtZVwiLCBKU09OLnN0cmluZ2lmeShcIlBvcnQgSGFyY291cnRcIikpO1xubGV0IGNpdHlOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlOYW1lXCIpKTtcbmZ1bmN0aW9uIG5ld05hbWUoc2V0TmFtZSkge1xuXHRjaXR5TmFtZSA9IHNldE5hbWU7XG59XG5mdW5jdGlvbiBzZXRDaXR5TmFtZSgpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXR5TmFtZVwiLCBKU09OLnN0cmluZ2lmeShjaXR5TmFtZSkpO1xufVxuXG4vKipcbiAqIEFycmF5IEZvciBOYW1lcyBPZiBDaXRpZXMgT24gV2F0Y2hsaXN0XG4gKi9cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIpID09IG51bGwpXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2F0Y2hsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoW1wiSm9oYW5uZXNidXJnXCIsIFwiQm9yaVwiLCBcIkxhcyBWZWdhc1wiXSkpO1xubGV0IHdhdGNobGlzdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIpKTtcbmZ1bmN0aW9uIHNldHdhdGNobGlzdEFycmF5KCkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndhdGNobGlzdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KHdhdGNobGlzdEFycmF5KSk7XG59XG5cbi8qKlxuICogU3RvcmFnZSBGb3IgVW5pdCBQcmVmZXJyZW5jZVxuICovXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkZWdyZWVcIikgPT0gbnVsbClcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWdyZWVcIiwgSlNPTi5zdHJpbmdpZnkoXCJDXCIpKTtcbmxldCBkZWdyZWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGVncmVlXCIpKTtcbmZ1bmN0aW9uIG5ld0RlZ3JlZShzZXROYW1lKSB7XG5cdGRlZ3JlZSA9IHNldE5hbWU7XG59XG5mdW5jdGlvbiBzZXREZWdyZWUoKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGVncmVlXCIsIEpTT04uc3RyaW5naWZ5KGRlZ3JlZSkpO1xufVxuXG5leHBvcnQge1xuXHRjaXR5TmFtZSxcblx0c2V0Q2l0eU5hbWUsXG5cdG5ld05hbWUsXG5cdHdhdGNobGlzdEFycmF5LFxuXHRzZXR3YXRjaGxpc3RBcnJheSxcblx0ZGVncmVlLFxuXHRzZXREZWdyZWUsXG5cdG5ld0RlZ3JlZSxcbn07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuXG4vKipcbiAqIEZ1bmN0aW9uIGZvciBjcmVhdGluZyBmb290ZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlZm9vdGVyKCkge1xuXHRjb25zdCBmb290ZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZm9vdGVyXCIpO1xuXHRjb25zdCBhbmNob3JMaW5rID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuXHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0lBbVlvdW5nYm9zc3kvd2VhdGhlci1hcHBcIixcblx0fSk7XG5cdGNvbnN0IGdpdEh1Ykljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaVwiLCB7IGNsYXNzOiBcImZhIGZhLWdpdGh1YlwiIH0pO1xuXHRjb25zdCBpY29uc0NyZWRpdCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCB3ZWF0aGVyQVBJID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuXHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0XHRocmVmOiBcImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL1wiLFxuXHR9KTtcblx0Y29uc3QgaW1hZ2VBUEkgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vXCIsXG5cdH0pO1xuXHRjb25zdCBpY29uczhBbmNob3IgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly9pY29uczguY29tL1wiLFxuXHR9KTtcblxuXHR3ZWF0aGVyQVBJLnRleHRDb250ZW50ID0gXCIgT3BlbldlYXRoZXJNYXAgXCI7XG5cdGltYWdlQVBJLnRleHRDb250ZW50ID0gXCIgVW5zcGxhc2ggXCI7XG5cdGljb25zOEFuY2hvci50ZXh0Q29udGVudCA9IFwiIEljb25zOFwiO1xuXHRpY29uc0NyZWRpdC5hcHBlbmQoXG5cdFx0XCJJY29ucyBieVwiLFxuXHRcdGljb25zOEFuY2hvcixcblx0XHRcIiwgV2VhdGhlciAmIEltYWdlIEFQSSBieVwiLFxuXHRcdHdlYXRoZXJBUEksXG5cdFx0XCIgJlwiLFxuXHRcdGltYWdlQVBJXG5cdCk7XG5cdGFuY2hvckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViSWNvbik7XG5cdGZvb3Rlci5hcHBlbmQoXG5cdFx0XCJDb3B5cmlnaHQgXFx1MDBBOSAyMDIyIElBbVlvdW5nYm9zc3lcIixcblx0XHRcIiAgXCIsXG5cdFx0YW5jaG9yTGluayxcblx0XHRpY29uc0NyZWRpdFxuXHQpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZWZvb3RlciB9OyIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXHRjb25zdCBoZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaGVhZGVyXCIpO1xuXHRjb25zdCBzZWFyY2hEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwic2VhcmNoLWRpdlwiIH0pO1xuXHRjb25zdCBzZWFyY2hCYXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaW5wdXRcIiwge1xuXHRcdHR5cGU6IFwic2VhcmNoXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgQ2l0eSBOYW1lXCIsXG5cdH0pO1xuXHRjb25zdCBzZWFyY2hCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiB9KTtcblx0Y29uc3QgaGVhZGVyVGl0bGVEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGl0bGUtZGl2XCIgfSk7XG5cdGNvbnN0IGhlYWRlclRpdGxlID0gY3JlYXRlRG9tRWxlbWVudChcImgxXCIpO1xuXG5cdHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG5cdGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJDaXR5V2F0Y2hcIjtcblxuXHRzZWFyY2hEaXYuYXBwZW5kKHNlYXJjaEJhciwgc2VhcmNoQnV0dG9uKTtcblx0aGVhZGVyVGl0bGVEaXYuYXBwZW5kKGhlYWRlclRpdGxlKTtcblx0aGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZURpdiwgc2VhcmNoRGl2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIi4vaWNvbnMvZGF0ZS5wbmdcIjtcbmltcG9ydCBIdW1pZGl0eSBmcm9tIFwiLi9pY29ucy9odW1pZGl0eS5wbmdcIjtcbmltcG9ydCBQcmVzc3VyZSBmcm9tIFwiLi9pY29ucy9wcmVzc3VyZS5wbmdcIjtcbmltcG9ydCBUaW1lem9uZSBmcm9tIFwiLi9pY29ucy90aW1lem9uZS5wbmdcIjtcbmltcG9ydCBXaW5kIGZyb20gXCIuL2ljb25zL3dpbmQucG5nXCI7XG5pbXBvcnQgU2VhTGV2ZWwgZnJvbSBcIi4vaWNvbnMvc2VhbGV2ZWwucG5nXCI7XG5pbXBvcnQgRGVncmVlSWNvbiBmcm9tIFwiLi9pY29ucy9kZWdyZWUucG5nXCI7XG5pbXBvcnQgeyBkZWdyZWUgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBhZGRMaXN0ZW5lckZvckV2ZW50VG8sIGxpc3RlblRvRXZlbnRGcm9tIH0gZnJvbSBcIi4vYXBwLWNsaWNrLWV2ZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudHMoKSB7XG5cdGNvbnN0IG1haW5EaXYgPSBjcmVhdGVEb21FbGVtZW50KFwibWFpblwiLCB7IGNsYXNzOiBcIm1haW5cIiB9KTtcblx0Y3JlYXRlVG9kYXlGb3JlY2FzdENvbnRhaW5lcihtYWluRGl2KTtcblx0Y3JlYXRlTmV4dGRheXNDb250YWluZXJEaXYobWFpbkRpdik7XG5cdGdldFdhdGNobGlzdChtYWluRGl2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbkRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZGF5Rm9yZWNhc3RDb250YWluZXIobWFpbkRpdikge1xuXHRjb25zdCB0b2RheURhdGFEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidG9kYXktZGF0YS1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQodG9kYXlEYXRhRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dGRheXNDb250YWluZXJEaXYobWFpbkRpdikge1xuXHRjb25zdCBuZXh0N0RheXNEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibmV4dC03ZGF5cy1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQobmV4dDdEYXlzRGl2KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2F0Y2hsaXN0KG1haW5EaXYpIHtcblx0Y29uc3Qgd2F0Y2hsaXN0RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIndhdGNobGlzdC1kaXZcIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQod2F0Y2hsaXN0RGl2KTtcbn1cblxuZnVuY3Rpb24gbWlub3JEYXRhUmVwb3J0KCkge1xuXHRjb25zdCBtaW5vckRhdGFEaXYgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzNdLFxuXHRcdHdpbmREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2luZC1kaXZcIiB9KSxcblx0XHR3aW5kID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ3aW5kXCIgfSksXG5cdFx0ZGV3UG9pbnREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV3LXBvaW50LWRpdlwiIH0pLFxuXHRcdGRld1BvaW50ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJkZXctcG9pbnRcIiB9KSxcblx0XHR0aW1lWm9uZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0aW1lLXpvbmUtZGl2XCIgfSksXG5cdFx0dGltZVpvbmUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcInRpbWUtem9uZVwiIH0pLFxuXHRcdHV2SW5kZXhEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidXYtaW5kZXgtZGl2XCIgfSksXG5cdFx0dXZJbmRleCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwidXYtaW5kZXhcIiB9KSxcblx0XHRwcmVzc3VyZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwcmVzc3VyZS1kaXZcIiB9KSxcblx0XHRwcmVzc3VyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwicHJlc3N1cmVcIiB9KSxcblx0XHRodW1pZGl0eURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJodW1pZGl0eS1kaXZcIiB9KSxcblx0XHRodW1pZGl0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiaHVtaWRpdHlcIiB9KSxcblx0XHRNeURhdGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBEYXRlIH0pLFxuXHRcdE15SHVtaWRpdHkgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBIdW1pZGl0eSB9KSxcblx0XHRNeVByZXNzdXJlID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCB7IHNyYzogUHJlc3N1cmUgfSksXG5cdFx0TXlUaW1lem9uZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFRpbWV6b25lIH0pLFxuXHRcdE15U2VhTGV2ZWwgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBTZWFMZXZlbCB9KSxcblx0XHRNeVdpbmQgPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBXaW5kIH0pO1xuXG5cdHdpbmREaXYuYXBwZW5kKE15V2luZCwgd2luZCk7XG5cdGRld1BvaW50RGl2LmFwcGVuZChNeVNlYUxldmVsLCBkZXdQb2ludCk7XG5cdHRpbWVab25lRGl2LmFwcGVuZChNeVRpbWV6b25lLCB0aW1lWm9uZSk7XG5cdHV2SW5kZXhEaXYuYXBwZW5kKE15RGF0ZSwgdXZJbmRleCk7XG5cdHByZXNzdXJlRGl2LmFwcGVuZChNeVByZXNzdXJlLCBwcmVzc3VyZSk7XG5cdGh1bWlkaXR5RGl2LmFwcGVuZChNeUh1bWlkaXR5LCBodW1pZGl0eSk7XG5cdG1pbm9yRGF0YURpdi5hcHBlbmQoXG5cdFx0d2luZERpdixcblx0XHRkZXdQb2ludERpdixcblx0XHR0aW1lWm9uZURpdixcblx0XHR1dkluZGV4RGl2LFxuXHRcdHByZXNzdXJlRGl2LFxuXHRcdGh1bWlkaXR5RGl2XG5cdCk7XG5cdHJldHVybiBbd2luZCwgZGV3UG9pbnQsIHRpbWVab25lLCB1dkluZGV4LCBwcmVzc3VyZSwgaHVtaWRpdHldO1xufVxuXG5mdW5jdGlvbiBzdXBlclNjcmlwdCgpIHtcblx0Y29uc3Qgc3VwU2NyaXB0ID0gY3JlYXRlRG9tRWxlbWVudChcInN1cFwiLCB7IGNsYXNzOiBcInN1cGVyLXNjcmlwdFwiIH0pLFxuXHRcdHN1cFNjcmlwdDIgPSBjcmVhdGVEb21FbGVtZW50KFwic3VwXCIsIHsgY2xhc3M6IFwic3VwZXItc2NyaXB0XCIgfSksXG5cdFx0ZGVncmVlU3BhbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwic3VwZXItc3BhblwiIH0pO1xuXHRkZWdyZWVTcGFuLnRleHRDb250ZW50ID0gZGVncmVlO1xuXHRzdXBTY3JpcHQudGV4dENvbnRlbnQgPSBcIm9cIjtcblx0c3VwU2NyaXB0Mi5hcHBlbmQoc3VwU2NyaXB0LCBkZWdyZWVTcGFuKTtcblx0YWRkTGlzdGVuZXJGb3JFdmVudFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlXCIpLCBkZWdyZWVTcGFuKTtcblx0YWRkTGlzdGVuZXJGb3JFdmVudFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdFwiKSwgZGVncmVlU3Bhbik7XG5cdHJldHVybiBzdXBTY3JpcHQyO1xufVxuXG5mdW5jdGlvbiBkYXRhRGlzcGxheSgpIHtcblx0Y29uc3QgdG9kYXlEYXRhRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IHdlYXRoZXJEZXNjID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ3ZWF0aGVyLWRlc2NcIiB9KSxcblx0XHRuYW1lT2ZDaXR5ID0gY3JlYXRlRG9tRWxlbWVudChcImgyXCIsIHsgY2xhc3M6IFwibmFtZS1vZi1jaXR5XCIgfSksXG5cdFx0ZGVzY0ljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaW1nXCIsIHsgY2xhc3M6IFwiZGVzYy1pY29uXCIgfSksXG5cdFx0dGVtcERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZW1wLWRpdlwiIH0pLFxuXHRcdHRlbXBSYW5nZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZW1wLXJhbmdlXCIgfSksXG5cdFx0aGlnaFRlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImhpZ2gtdGVtcFwiIH0pLFxuXHRcdGxvd1RlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImxvdy10ZW1wXCIgfSksXG5cdFx0ZmVlbHNMaWtlVGVtcCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiZmVlbHMtbGlrZS10ZW1wXCIgfSksXG5cdFx0dGVtcGVyYXR1cmVEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGVtcGVyYXR1cmUtZGl2XCIgfSksXG5cdFx0dGVtcGVyYXR1cmUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcInRlbXBlcmF0dXJlXCIgfSksXG5cdFx0bWlub3JEYXRhRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1pbm9yLWRhdGEtZGl2XCIgfSk7XG5cblx0dGVtcFJhbmdlLmFwcGVuZChsb3dUZW1wLCBoaWdoVGVtcCk7XG5cdHRlbXBlcmF0dXJlRGl2LmFwcGVuZCh0ZW1wZXJhdHVyZSwgZGVzY0ljb24pO1xuXHR0ZW1wRGl2LmFwcGVuZCh0ZW1wUmFuZ2UsIHRlbXBlcmF0dXJlRGl2LCBmZWVsc0xpa2VUZW1wKTtcblx0dG9kYXlEYXRhRGl2LmFwcGVuZCh3ZWF0aGVyRGVzYywgbmFtZU9mQ2l0eSwgdGVtcERpdiwgbWlub3JEYXRhRGl2KTtcblx0cmV0dXJuIFtcblx0XHR3ZWF0aGVyRGVzYyxcblx0XHRkZXNjSWNvbixcblx0XHRuYW1lT2ZDaXR5LFxuXHRcdHRlbXBlcmF0dXJlLFxuXHRcdGxvd1RlbXAsXG5cdFx0aGlnaFRlbXAsXG5cdFx0ZmVlbHNMaWtlVGVtcCxcblx0XTtcbn1cblxuZnVuY3Rpb24gY29udmVydEJldHdlZW5Vbml0cygpIHtcblx0Y29uc3QgdG9kYXlEYXRhRGl2ID0gZG9jdW1lbnQuYm9keS5jaGlsZHJlblswXSxcblx0XHR1bml0ID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ1bml0XCIgfSksXG5cdFx0dW5pdERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ1bml0LWRpdlwiIH0pLFxuXHRcdE15RGVncmVlSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwge1xuXHRcdFx0Y2xhc3M6IFwiZGVncmVlXCIsXG5cdFx0XHRzcmM6IERlZ3JlZUljb24sXG5cdFx0fSk7XG5cblx0ZGVncmVlID09IFwiQ1wiID8gKHVuaXQudGV4dENvbnRlbnQgPSBcIkZcIikgOiAodW5pdC50ZXh0Q29udGVudCA9IFwiQ1wiKTtcblx0dW5pdERpdi5hcHBlbmQoTXlEZWdyZWVJY29uLCB1bml0KTtcblx0dG9kYXlEYXRhRGl2LmFwcGVuZCh1bml0RGl2KTtcblx0bGlzdGVuVG9FdmVudEZyb20odW5pdCwgdW5pdCksIGxpc3RlblRvRXZlbnRGcm9tKE15RGVncmVlSWNvbiwgdW5pdCk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZU1haW5Db250ZW50cyxcblx0bWlub3JEYXRhUmVwb3J0LFxuXHRzdXBlclNjcmlwdCxcblx0ZGF0YURpc3BsYXksXG5cdGNvbnZlcnRCZXR3ZWVuVW5pdHMsXG59OyIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsZWFyU2NyZWVuTG9hZGVyIH0gZnJvbSBcIi4vZmV0Y2gtZGF0YVwiO1xuaW1wb3J0IHsgc3VwZXJTY3JpcHQgfSBmcm9tIFwiLi9wYWdlLW1haW5cIjtcblxuZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3RDYXJkKGRhaWx5KSB7XG5cdGNvbnN0IG5leHQ3RGF5c0RpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLFxuXHRcdGNhcmQgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY2FyZFwiIH0pLFxuXHRcdGRheUFuZERlc2MgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIpLFxuXHRcdGljb25EaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaWNvbi1kaXZcIiB9KSxcblx0XHR0ZW1wRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiKSxcblx0XHRkYXkgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKSxcblx0XHR3ZWF0aGVyRGVzYyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpLFxuXHRcdHdlYXRoZXJEZXNjSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0bG93VGVtcFNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHRsb3dUZW1wID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiksXG5cdFx0aGlnaFRlbXBTcGFuID0gY3JlYXRlRG9tRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJjb252ZXJ0XCIgfSksXG5cdFx0aGlnaFRlbXAgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKTtcblxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoZGFpbHkuZHQgKiAxMDAwKTtcblx0Y29uc3Qgd2Vla2RheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xuXG5cdGxvd1RlbXBTcGFuLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQoZGFpbHkudGVtcC5taW4pfWA7XG5cdGhpZ2hUZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KGRhaWx5LnRlbXAubWF4KX1gO1xuXHRkYXkudGV4dENvbnRlbnQgPSBgJHt3ZWVrZGF5fWA7XG5cdHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gYCR7ZGFpbHkud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuXHR3ZWF0aGVyRGVzY0ljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7ZGFpbHkud2VhdGhlclswXS5pY29ufS5wbmdgO1xuXHRoaWdoVGVtcC5hcHBlbmQoaGlnaFRlbXBTcGFuLCBzdXBlclNjcmlwdCgpKTtcblx0bG93VGVtcC5hcHBlbmQobG93VGVtcFNwYW4sIHN1cGVyU2NyaXB0KCkpO1xuXHRkYXlBbmREZXNjLmFwcGVuZChkYXksIHdlYXRoZXJEZXNjKTtcblx0dGVtcERpdi5hcHBlbmQoaGlnaFRlbXAsIGxvd1RlbXApO1xuXHRpY29uRGl2LmFwcGVuZCh3ZWF0aGVyRGVzY0ljb24sIHRlbXBEaXYpO1xuXHRjYXJkLmFwcGVuZChkYXlBbmREZXNjLCBpY29uRGl2KTtcblx0bmV4dDdEYXlzRGl2LmFwcGVuZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheTdEYXlzRm9yZWNhc3QocmVzcG9uc2UpIHtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCByZXNwb25zZS5kYWlseS5sZW5ndGg7IGkrKylcblx0XHRjcmVhdGVGb3JlY2FzdENhcmQocmVzcG9uc2UuZGFpbHlbaV0pO1xuXHRjbGVhclNjcmVlbkxvYWRlcigpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JlY2FzdENhcmQsIGRpc3BsYXk3RGF5c0ZvcmVjYXN0IH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudFwiO1xuaW1wb3J0IHtcblx0Y291bnRyeUFuZENpdHlOYW1lLFxuXHRjb3VudHJ5QW5kQ2l0eU5hbWUyLFxuXHRnZXRXZWF0aGVySW1hZ2UsXG59IGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCB7IG5ld05hbWUsIHNldENpdHlOYW1lIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgZGF0YURpc3BsYXksIG1pbm9yRGF0YVJlcG9ydCwgc3VwZXJTY3JpcHQgfSBmcm9tIFwiLi9wYWdlLW1haW5cIjtcbmltcG9ydCB7IGRpc3BsYXk3RGF5c0ZvcmVjYXN0IH0gZnJvbSBcIi4vc2V2ZW4tZGF5cy1mb3JlY2FzdFwiO1xuXG5mdW5jdGlvbiBnZXREYXRhKHJlc3BvbnNlLCBoZWFkZXJJbnB1dCkge1xuXHRsZXQgd2VhdGhlckRlc2MgPSByZXNwb25zZS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cdGNvbnN0IHRvZGF5RGF0YURpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLFxuXHRcdG5leHQ3RGF5c0RpdiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdO1xuXHRjbGVhckRhdGEodG9kYXlEYXRhRGl2KSxcblx0XHRjbGVhckRhdGEobmV4dDdEYXlzRGl2KSxcblx0XHRkaXNwbGF5VG9kYXlGb2VjYXN0LmNhbGwodGhpcywgcmVzcG9uc2UpLFxuXHRcdGRpc3BsYXk3RGF5c0ZvcmVjYXN0KHJlc3BvbnNlKTtcblx0XHRcblx0aWYgKGhlYWRlcklucHV0LnZhbHVlKVxuXHRcdG5ld05hbWUoaGVhZGVySW5wdXQudmFsdWUpLCBzZXRDaXR5TmFtZSgpLCAoaGVhZGVySW5wdXQudmFsdWUgPSBcIlwiKTtcblx0Z2V0V2VhdGhlckltYWdlKHdlYXRoZXJEZXNjKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEYXRhKGRpdikge1xuXHR3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RheUZvZWNhc3QocmVzcG9uc2UpIHtcblx0Y29uc3QgbG93VGVtcFNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHRoaWdoVGVtcFNwYW4gPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImNvbnZlcnRcIiB9KSxcblx0XHRmZWVsc0xpa2VTcGFuID0gY3JlYXRlRG9tRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJjb252ZXJ0XCIgfSksXG5cdFx0dGVtcGVyYXR1cmVTcGFuID0gY3JlYXRlRG9tRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJjb252ZXJ0XCIgfSk7XG5cblx0Ly8gRGVzdHJ1Y3R1cmluZyB2YWx1ZXMgZnJvbSByZXR1cm5lZCBhcnJheXMgZnJvbSBmdW5jdGlvbnNcblx0Y29uc3QgW1xuXHRcdHdlYXRoZXJEZXNjLFxuXHRcdGRlc2NJY29uLFxuXHRcdG5hbWVPZkNpdHksXG5cdFx0dGVtcGVyYXR1cmUsXG5cdFx0bG93VGVtcCxcblx0XHRoaWdoVGVtcCxcblx0XHRmZWVsc0xpa2VUZW1wLFxuXHRdID0gZGF0YURpc3BsYXkoKTtcblxuXHRjb25zdCBbd2luZCwgZGV3UG9pbnQsIHRpbWVab25lLCB1dkluZGV4LCBwcmVzc3VyZSwgaHVtaWRpdHldID1cblx0XHRtaW5vckRhdGFSZXBvcnQoKTtcblxuXHRpZiAodGhpcyA9PT0gZG9jdW1lbnQpIG5hbWVPZkNpdHkudGV4dENvbnRlbnQgPSBjb3VudHJ5QW5kQ2l0eU5hbWU7XG5cdGVsc2UgbmFtZU9mQ2l0eS50ZXh0Q29udGVudCA9IGNvdW50cnlBbmRDaXR5TmFtZTI7XG5cdHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG5cdGxvd1RlbXBTcGFuLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQocmVzcG9uc2UuZGFpbHlbMF0udGVtcC5taW4pfWA7XG5cdGZlZWxzTGlrZVNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChyZXNwb25zZS5jdXJyZW50LmZlZWxzX2xpa2UpfWA7XG5cdGhpZ2hUZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHJlc3BvbnNlLmRhaWx5WzBdLnRlbXAubWF4KX1gO1xuXHR0ZW1wZXJhdHVyZVNwYW4udGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChyZXNwb25zZS5jdXJyZW50LnRlbXApfWA7XG5cblx0bG93VGVtcC5hcHBlbmQoXCJMb3c6IFwiLCBsb3dUZW1wU3Bhbiwgc3VwZXJTY3JpcHQoKSk7XG5cdGhpZ2hUZW1wLmFwcGVuZChcIkhpZ2g6IFwiLCBoaWdoVGVtcFNwYW4sIHN1cGVyU2NyaXB0KCkpO1xuXHR0ZW1wZXJhdHVyZS5hcHBlbmQodGVtcGVyYXR1cmVTcGFuLCBzdXBlclNjcmlwdCgpKTtcblx0ZmVlbHNMaWtlVGVtcC5hcHBlbmQoXCJGZWVscyBMaWtlIFwiLCBmZWVsc0xpa2VTcGFuLCBzdXBlclNjcmlwdCgpKTtcblx0d2luZC5hcHBlbmQoYFdpbmQgU3BlZWQ6ICR7cmVzcG9uc2UuY3VycmVudC53aW5kX3NwZWVkfW0vc2ApO1xuXHRkZXdQb2ludC5hcHBlbmQoYERldyBQb2ludDogJHtyZXNwb25zZS5jdXJyZW50LmRld19wb2ludH1gKTtcblx0dGltZVpvbmUuYXBwZW5kKGB0aW1lIFpvbmU6ICR7cmVzcG9uc2UudGltZXpvbmV9YCk7XG5cdHV2SW5kZXguYXBwZW5kKGBVViBJbmRleDogJHtyZXNwb25zZS5jdXJyZW50LnV2aX1gKTtcblx0cHJlc3N1cmUuYXBwZW5kKGBQcmVzc3VyZTogJHtyZXNwb25zZS5jdXJyZW50LnByZXNzdXJlfWhQYWApO1xuXHRodW1pZGl0eS5hcHBlbmQoYEh1bWlkaXR5OiAke3Jlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHl9JWApO1xuXHRkZXNjSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtyZXNwb25zZS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcbn1cblxuZXhwb3J0IHsgZ2V0RGF0YSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vcGFnZS1oZWFkZXJcIjtcbmltcG9ydCB7XG5cdGdldENvdW50cnlOYW1lLFxuXHRnZXRMb25BbmRMYXQsXG5cdGdldFdlYXRoZXJEYXRhLFxuXHRzY3JlZW5Mb2FkZXIsXG59IGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCB7IGNyZWF0ZWZvb3RlciB9IGZyb20gXCIuL3BhZ2UtZm9vdGVyXCI7XG5pbXBvcnQgeyBjb252ZXJ0QmV0d2VlblVuaXRzLCBjcmVhdGVNYWluQ29udGVudHMgfSBmcm9tIFwiLi9wYWdlLW1haW5cIjtcbmltcG9ydCB7IHdhdGNobGlzdCB9IGZyb20gXCIuL2NpdHktd2F0Y2hsaXN0XCI7XG5pbXBvcnQgeyBjaXR5TmFtZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7XG5cdGFkZExpc3RlbmVyVG9CdXR0b24sXG5cdGRpc3BsYXlBdmFpbGFibGVXYXRjaGxpc3QsXG59IGZyb20gXCIuL2FwcC1jbGljay1ldmVudHNcIjtcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi90b2RheS1mb3JlY2FzdFwiO1xuXG5jcmVhdGVIZWFkZXIoKTtcbmNyZWF0ZU1haW5Db250ZW50cygpO1xuY29udmVydEJldHdlZW5Vbml0cygpO1xuY3JlYXRlZm9vdGVyKCk7XG53YXRjaGxpc3QoKTtcbnNjcmVlbkxvYWRlcigpO1xuYWRkTGlzdGVuZXJUb0J1dHRvbigpO1xuXG5kaXNwbGF5QXZhaWxhYmxlV2F0Y2hsaXN0KCk7XG5nZXRXZWF0aGVyRGF0YS5jYWxsKFxuXHRkb2N1bWVudCxcblx0Z2V0RGF0YS5iaW5kKGRvY3VtZW50KSxcblx0Z2V0TG9uQW5kTGF0LFxuXHRjaXR5TmFtZSxcblx0ZmFsc2UsXG5cdGdldENvdW50cnlOYW1lXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==