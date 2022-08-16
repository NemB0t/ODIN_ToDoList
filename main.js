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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --clr-primary: rgb(54,112,199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99,36,36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after{\r\n    font-family: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    font-family: \"Work Sans\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-light);\r\n    display: grid;\r\n    grid:\r\n        \"header header header header\" auto\r\n        \"...... lists  active ......\" auto/\r\n        1fr minmax(100px,300px) minmax(250px,500px) 1fr;\r\n}\r\n\r\n.title{\r\n    grid-area: header;\r\n    text-align: center;\r\n    font-size: calc(7vh + 2rem);\r\n    font-weight: 900;\r\n    color: rgb(0, 0,0,.2);\r\n    margin: -0.3rem 0 0 0;\r\n}\r\n\r\n.all-tasks{\r\n    grid-area: lists;\r\n}\r\n\r\nform{\r\n    display: flex;\r\n}\r\n\r\n.btn{\r\n    cursor: pointer;\r\n    background: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    color: inherit;\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn.create{\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    margin-right: 0.25rem;\r\n    transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover{\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn.delete{\r\n    opacity: 0.7;\r\n    font-size: 1rem;\r\n    transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover{\r\n    color: var(--clr-warning);\r\n}\r\n\r\n.task-list{\r\n    line-height: 1.7;\r\n    font-size: 1.2rem;\r\n    list-style: circle;\r\n    padding-left: 1.1rem;\r\n}\r\n\r\n.list-name{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.list-name:hover{\r\n    opacity: 0.7;\r\n}\r\n.new{\r\n    background: transparent;\r\n    border: 0;\r\n    color: inherit;\r\n    border-bottom: 1px solid currentColor;\r\n    font-size: inherit;\r\n    outline: none;\r\n    transition: border-bottom 150ms ease-in;\r\n    order: 2;\r\n    padding: 0.25em;\r\n}\r\n\r\n.new::placeholder{\r\n    opacity: 0.5;\r\n}\r\n\r\n.new.list{\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.new:focus{\r\n    border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::placeholder{\r\n    opacity: 0.2;\r\n}\r\n\r\n.new::placeholder{\r\n    color: inherit;\r\n    font-weight: 300;\r\n}\r\n\r\n.active-list{\r\n    font-weight: 700;\r\n}\r\n\r\n.todo-list{\r\n    --spacer: 2rem;\r\n\r\n    grid-area: active;\r\n    background: var(--clr-light);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n.todo-header{\r\n    padding: var(--spacer);\r\n    background: #e4e4e4;\r\n    margin-right: 1em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.list-title{\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n.task-count{\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.new-task-creator .create{\r\n    color: var(--clr-primary);\r\n}\r\n\r\n.todo-body{\r\n    padding: var(--spacer);\r\n    position: relative;\r\n}\r\n\r\n[type=\"checkbox\"]{\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.tasks label{\r\n    display: inline-flex;\r\n    align-items: center;\r\n    position: relative;\r\n    margin-bottom: 0.75em;\r\n}\r\n\r\n.tasks{\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.tasks::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    height: 2px;\r\n    background: currentColor;\r\n    opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox{\r\n    --size:0.75em;\r\n    display: inline-block;\r\n    width: var(--size);\r\n    height: var(--size);\r\n    margin-right: var(--size);\r\n    cursor: pointer;\r\n    border: 2px solid currentColor;\r\n    border-radius: 50%;\r\n    transform: scale(1);\r\n    transition: transform 300ms ease-in-out;\r\n}\r\n\r\n.tasks:hover .custom-checkbox,\r\n[type=\"checkbox\"]:focus + label .custom-checkbox{\r\n    transform: scale(1.2);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label .custom-checkbox{\r\n    background: var(--clr-primary);\r\n    border-color: var(--clr-primary);\r\n    box-shadow: inset 0 0 0 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label{\r\n    opacity: 0.5;\r\n}\r\n\r\n.tasks label::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 1.5em;\r\n    right: 0;\r\n    top:50%;\r\n    height: 3px;\r\n    background: var(--clr-dark);\r\n    transform: scaleX(0);\r\n    transform-origin: right;\r\n    transition: transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label::after{\r\n    transform: scaleX(1);\r\n    transform-origin: left;\r\n}\r\n\r\n.delete-btns{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    position: absolute;\r\n    width: 100%;\r\n    left:0;\r\n    bottom: -65px;\r\n    color: var(--clr-light);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oBAAoB;IACpB,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;;;IAGI,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,oCAAoC;IACpC,gBAAgB;IAChB,iBAAiB;IACjB,oCAAoC;IACpC,uBAAuB;IACvB,aAAa;IACb;;;uDAGmD;AACvD;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;IAC3B,gBAAgB;IAChB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,SAAS;IACT,UAAU;IACV,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,SAAS;IACT,cAAc;IACd,qCAAqC;IACrC,kBAAkB;IAClB,aAAa;IACb,uCAAuC;IACvC,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;;IAEd,iBAAiB;IACjB,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,SAAS;IACT,WAAW;IACX,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;;IAEI,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,8BAA8B;IAC9B,gCAAgC;IAChC,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,OAAO;IACP,WAAW;IACX,2BAA2B;IAC3B,oBAAoB;IACpB,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":[":root{\r\n    --clr-primary: rgb(54,112,199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99,36,36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after{\r\n    font-family: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    font-family: \"Work Sans\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-light);\r\n    display: grid;\r\n    grid:\r\n        \"header header header header\" auto\r\n        \"...... lists  active ......\" auto/\r\n        1fr minmax(100px,300px) minmax(250px,500px) 1fr;\r\n}\r\n\r\n.title{\r\n    grid-area: header;\r\n    text-align: center;\r\n    font-size: calc(7vh + 2rem);\r\n    font-weight: 900;\r\n    color: rgb(0, 0,0,.2);\r\n    margin: -0.3rem 0 0 0;\r\n}\r\n\r\n.all-tasks{\r\n    grid-area: lists;\r\n}\r\n\r\nform{\r\n    display: flex;\r\n}\r\n\r\n.btn{\r\n    cursor: pointer;\r\n    background: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    color: inherit;\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn.create{\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    margin-right: 0.25rem;\r\n    transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover{\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn.delete{\r\n    opacity: 0.7;\r\n    font-size: 1rem;\r\n    transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover{\r\n    color: var(--clr-warning);\r\n}\r\n\r\n.task-list{\r\n    line-height: 1.7;\r\n    font-size: 1.2rem;\r\n    list-style: circle;\r\n    padding-left: 1.1rem;\r\n}\r\n\r\n.list-name{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.list-name:hover{\r\n    opacity: 0.7;\r\n}\r\n.new{\r\n    background: transparent;\r\n    border: 0;\r\n    color: inherit;\r\n    border-bottom: 1px solid currentColor;\r\n    font-size: inherit;\r\n    outline: none;\r\n    transition: border-bottom 150ms ease-in;\r\n    order: 2;\r\n    padding: 0.25em;\r\n}\r\n\r\n.new::placeholder{\r\n    opacity: 0.5;\r\n}\r\n\r\n.new.list{\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.new:focus{\r\n    border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::placeholder{\r\n    opacity: 0.2;\r\n}\r\n\r\n.new::placeholder{\r\n    color: inherit;\r\n    font-weight: 300;\r\n}\r\n\r\n.active-list{\r\n    font-weight: 700;\r\n}\r\n\r\n.todo-list{\r\n    --spacer: 2rem;\r\n\r\n    grid-area: active;\r\n    background: var(--clr-light);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n.todo-header{\r\n    padding: var(--spacer);\r\n    background: #e4e4e4;\r\n    margin-right: 1em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.list-title{\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n.task-count{\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.new-task-creator .create{\r\n    color: var(--clr-primary);\r\n}\r\n\r\n.todo-body{\r\n    padding: var(--spacer);\r\n    position: relative;\r\n}\r\n\r\n[type=\"checkbox\"]{\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.tasks label{\r\n    display: inline-flex;\r\n    align-items: center;\r\n    position: relative;\r\n    margin-bottom: 0.75em;\r\n}\r\n\r\n.tasks{\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.tasks::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    height: 2px;\r\n    background: currentColor;\r\n    opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox{\r\n    --size:0.75em;\r\n    display: inline-block;\r\n    width: var(--size);\r\n    height: var(--size);\r\n    margin-right: var(--size);\r\n    cursor: pointer;\r\n    border: 2px solid currentColor;\r\n    border-radius: 50%;\r\n    transform: scale(1);\r\n    transition: transform 300ms ease-in-out;\r\n}\r\n\r\n.tasks:hover .custom-checkbox,\r\n[type=\"checkbox\"]:focus + label .custom-checkbox{\r\n    transform: scale(1.2);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label .custom-checkbox{\r\n    background: var(--clr-primary);\r\n    border-color: var(--clr-primary);\r\n    box-shadow: inset 0 0 0 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label{\r\n    opacity: 0.5;\r\n}\r\n\r\n.tasks label::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 1.5em;\r\n    right: 0;\r\n    top:50%;\r\n    height: 3px;\r\n    background: var(--clr-dark);\r\n    transform: scaleX(0);\r\n    transform-origin: right;\r\n    transition: transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label::after{\r\n    transform: scaleX(1);\r\n    transform-origin: left;\r\n}\r\n\r\n.delete-btns{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    position: absolute;\r\n    width: 100%;\r\n    left:0;\r\n    bottom: -65px;\r\n    color: var(--clr-light);\r\n}"],"sourceRoot":""}]);
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

//import del_btn_png from './bin.png';

const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListBtn = document.querySelector('[data-delete-list-btn]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const clearCompleteTasksBtn = document.querySelector('[data-clear-complete-task-btn]')

//keys for local storage
const LOCAL_STORAGE_LIST_KEY = "task.lists"
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId"

// Get empty list if not thing is there in local storage
let lists =JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

// Get the selected list
let selectedListID = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY))

clearCompleteTasksBtn.addEventListener('click',e =>{
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
})

deleteListBtn.addEventListener('click', e =>{
    lists= lists.filter(list => list.id !== selectedListID)
    selectedListID = null
    saveAndRender()
})

listContainer.addEventListener('click',e=>{
    if(e.target.tagName.toLowerCase()==='li'){
        selectedListID=e.target.dataset.listId
        saveAndRender()
    }
})

tasksContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase()==='input'){
        const selectedList = lists.find(list => list.id === selectedListID)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete=e.target.checked
        save()
        renderTaskCount(selectedList)
    }
})

newListForm.addEventListener('submit',e=>{
    e.preventDefault()
    const listName = newListInput.value
    if(listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
})

newTaskForm.addEventListener('submit',e=>{
    e.preventDefault()
    const taskName = newTaskInput.value
    if(taskName == null || taskName === '') return
    const task = createtask(taskName)
    newTaskInput.value = null
    
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks.push(task)
    saveAndRender()
})

function createtask(name){
    return {id: Date.now().toString() , name: name, complete : false}
}

function createList(name){
    return {id: Date.now().toString() , name: name, tasks: []}
}

function saveAndRender(){
    save()
    render()
}

function save(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, JSON.stringify(selectedListID))
}

function render(){
    clearElements(listContainer)
    renderLists()
    
    const selectedList = lists.find(list => list.id === selectedListID)
    
    if(selectedListID===null){
        listDisplayContainer.style.display = 'none'
    }
    else{
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElements(tasksContainer)
        renderTasks(selectedList)
    }
}

function renderTasks(selectedList){
    selectedList.tasks.forEach(task =>{
        const taskElement = document.importNode(taskTemplate.content,true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        tasksContainer.appendChild(taskElement)
    })
}

function renderTaskCount(selectedList){
    const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
    const taskString = incompleteTaskCount===1 ? 'task':'tasks'
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}
function renderLists(){
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.classList.add("list-name")
        listElement.dataset.listId = list.id
        listElement.innerText = list.name
        if (list.id === selectedListID){
            listElement.classList.add("active-list")
        }
        listContainer.appendChild(listElement)
    })
}

function clearElements(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5fdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW5fdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5fdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW5fdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXHJcXG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDU0LDExMiwxOTkpO1xcclxcbiAgICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG4gICAgLS1jbHItZGFyazogIzMzMztcXHJcXG4gICAgLS1jbHItd2FybmluZzogcmdiKDk5LDM2LDM2KTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXJ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6XFxyXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBhdXRvXFxyXFxuICAgICAgICBcXFwiLi4uLi4uIGxpc3RzICBhY3RpdmUgLi4uLi4uXFxcIiBhdXRvL1xcclxcbiAgICAgICAgMWZyIG1pbm1heCgxMDBweCwzMDBweCkgbWlubWF4KDI1MHB4LDUwMHB4KSAxZnI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZXtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDd2aCArIDJyZW0pO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDAsMCwuMik7XFxyXFxuICAgIG1hcmdpbjogLTAuM3JlbSAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC10YXNrc3tcXHJcXG4gICAgZ3JpZC1hcmVhOiBsaXN0cztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRle1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlOmhvdmVye1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi5idG4uZGVsZXRle1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxyXFxufVxcclxcblxcclxcbi5idG4uZGVsZXRlOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0e1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbGlzdC1zdHlsZTogY2lyY2xlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubGlzdC1uYW1lOmhvdmVye1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcbi5uZXd7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMTUwbXMgZWFzZS1pbjtcXHJcXG4gICAgb3JkZXI6IDI7XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy5saXN0e1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1c3tcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlcntcXHJcXG4gICAgb3BhY2l0eTogMC4yO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OjpwbGFjZWhvbGRlcntcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtbGlzdHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdHtcXHJcXG4gICAgLS1zcGFjZXI6IDJyZW07XFxyXFxuXFxyXFxuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXJ7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5saXN0LXRpdGxle1xcclxcbiAgICBtYXJnaW46IDAgMWVtIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY291bnR7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stY3JlYXRvciAuY3JlYXRle1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5e1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi50YXNrcyBsYWJlbHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3N7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3M6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcclxcbiAgICBvcGFjaXR5OiAwLjE7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tY2hlY2tib3h7XFxyXFxuICAgIC0tc2l6ZTowLjc1ZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrczpob3ZlciAuY3VzdG9tLWNoZWNrYm94LFxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWx7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzIGxhYmVsOjphZnRlcntcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMS41ZW07XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6NTAlO1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWRhcmspO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlcntcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgYm90dG9tOiAtNjVweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7OztJQUdJLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsb0NBQW9DO0lB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QzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgICAtLWNsci1wcmltYXJ5OiByZ2IoNTQsMTEyLDE5OSk7XFxyXFxuICAgIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcclxcbiAgICAtLWNsci1kYXJrOiAjMzMzO1xcclxcbiAgICAtLWNsci13YXJuaW5nOiByZ2IoOTksMzYsMzYpO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlcntcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJXb3JrIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZDpcXHJcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIGF1dG9cXHJcXG4gICAgICAgIFxcXCIuLi4uLi4gbGlzdHMgIGFjdGl2ZSAuLi4uLi5cXFwiIGF1dG8vXFxyXFxuICAgICAgICAxZnIgbWlubWF4KDEwMHB4LDMwMHB4KSBtaW5tYXgoMjUwcHgsNTAwcHgpIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxle1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoN3ZoICsgMnJlbSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMCwwLC4yKTtcXHJcXG4gICAgbWFyZ2luOiAtMC4zcmVtIDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXRhc2tze1xcclxcbiAgICBncmlkLWFyZWE6IGxpc3RzO1xcclxcbn1cXHJcXG5cXHJcXG5mb3Jte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5jcmVhdGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5jcmVhdGU6aG92ZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGV7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGU6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZyk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3R7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1uYW1le1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5saXN0LW5hbWU6aG92ZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLm5ld3tcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xcclxcbiAgICBvcmRlcjogMjtcXHJcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OjpwbGFjZWhvbGRlcntcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Lmxpc3R7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmZvY3Vze1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVye1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxufVxcclxcblxcclxcbi5uZXc6OnBsYWNlaG9sZGVye1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1saXN0e1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0e1xcclxcbiAgICAtLXNwYWNlcjogMnJlbTtcXHJcXG5cXHJcXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdGl0bGV7XFxyXFxuICAgIG1hcmdpbjogMCAxZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb3VudHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzay1jcmVhdG9yIC5jcmVhdGV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJvZHl7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzIGxhYmVse1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrc3tcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrczo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1jaGVja2JveHtcXHJcXG4gICAgLS1zaXplOjAuNzVlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94e1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94e1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MgbGFiZWw6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxLjVlbTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDo1MCU7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVye1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG5ze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGVmdDowO1xcclxcbiAgICBib3R0b206IC02NXB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy9pbXBvcnQgZGVsX2J0bl9wbmcgZnJvbSAnLi9iaW4ucG5nJztcclxuXHJcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0c10nKVxyXG5jb25zdCBuZXdMaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1saXN0LWZvcm1dJylcclxuY29uc3QgbmV3TGlzdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LWxpc3QtaW5wdXRdJylcclxuY29uc3QgZGVsZXRlTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRlbGV0ZS1saXN0LWJ0bl0nKVxyXG5jb25zdCBsaXN0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpc3QtZGlzcGxheS1jb250YWluZXJdJylcclxuY29uc3QgbGlzdFRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpc3QtdGl0bGVdJylcclxuY29uc3QgbGlzdENvdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpc3QtY291bnRdJylcclxuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrc10nKVxyXG5jb25zdCB0YXNrVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10ZW1wbGF0ZScpXHJcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRhc2stZm9ybV0nKVxyXG5jb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctdGFzay1pbnB1dF0nKVxyXG5jb25zdCBjbGVhckNvbXBsZXRlVGFza3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbGVhci1jb21wbGV0ZS10YXNrLWJ0bl0nKVxyXG5cclxuLy9rZXlzIGZvciBsb2NhbCBzdG9yYWdlXHJcbmNvbnN0IExPQ0FMX1NUT1JBR0VfTElTVF9LRVkgPSBcInRhc2subGlzdHNcIlxyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZID0gXCJ0YXNrLnNlbGVjdGVkTGlzdElkXCJcclxuXHJcbi8vIEdldCBlbXB0eSBsaXN0IGlmIG5vdCB0aGluZyBpcyB0aGVyZSBpbiBsb2NhbCBzdG9yYWdlXHJcbmxldCBsaXN0cyA9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZKSkgfHwgW11cclxuXHJcbi8vIEdldCB0aGUgc2VsZWN0ZWQgbGlzdFxyXG5sZXQgc2VsZWN0ZWRMaXN0SUQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfTElTVF9JRF9LRVkpKVxyXG5cclxuY2xlYXJDb21wbGV0ZVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlID0+e1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElEKVxyXG4gICAgc2VsZWN0ZWRMaXN0LnRhc2tzID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmNvbXBsZXRlKVxyXG4gICAgc2F2ZUFuZFJlbmRlcigpXHJcbn0pXHJcblxyXG5kZWxldGVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGxpc3RzPSBsaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0LmlkICE9PSBzZWxlY3RlZExpc3RJRClcclxuICAgIHNlbGVjdGVkTGlzdElEID0gbnVsbFxyXG4gICAgc2F2ZUFuZFJlbmRlcigpXHJcbn0pXHJcblxyXG5saXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlPT57XHJcbiAgICBpZihlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCk9PT0nbGknKXtcclxuICAgICAgICBzZWxlY3RlZExpc3RJRD1lLnRhcmdldC5kYXRhc2V0Lmxpc3RJZFxyXG4gICAgICAgIHNhdmVBbmRSZW5kZXIoKVxyXG4gICAgfVxyXG59KVxyXG5cclxudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGlmKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKT09PSdpbnB1dCcpe1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJRClcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZExpc3QudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkKVxyXG4gICAgICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZT1lLnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgc2F2ZSgpXHJcbiAgICAgICAgcmVuZGVyVGFza0NvdW50KHNlbGVjdGVkTGlzdClcclxuICAgIH1cclxufSlcclxuXHJcbm5ld0xpc3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBsaXN0TmFtZSA9IG5ld0xpc3RJbnB1dC52YWx1ZVxyXG4gICAgaWYobGlzdE5hbWUgPT0gbnVsbCB8fCBsaXN0TmFtZSA9PT0gJycpIHJldHVyblxyXG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QobGlzdE5hbWUpXHJcbiAgICBuZXdMaXN0SW5wdXQudmFsdWUgPSBudWxsXHJcbiAgICBsaXN0cy5wdXNoKGxpc3QpXHJcbiAgICBzYXZlQW5kUmVuZGVyKClcclxufSlcclxuXHJcbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZVxyXG4gICAgaWYodGFza05hbWUgPT0gbnVsbCB8fCB0YXNrTmFtZSA9PT0gJycpIHJldHVyblxyXG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZXRhc2sodGFza05hbWUpXHJcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSBudWxsXHJcbiAgICBcclxuICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJRClcclxuICAgIHNlbGVjdGVkTGlzdC50YXNrcy5wdXNoKHRhc2spXHJcbiAgICBzYXZlQW5kUmVuZGVyKClcclxufSlcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZXRhc2sobmFtZSl7XHJcbiAgICByZXR1cm4ge2lkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCkgLCBuYW1lOiBuYW1lLCBjb21wbGV0ZSA6IGZhbHNlfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaXN0KG5hbWUpe1xyXG4gICAgcmV0dXJuIHtpZDogRGF0ZS5ub3coKS50b1N0cmluZygpICwgbmFtZTogbmFtZSwgdGFza3M6IFtdfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyKCl7XHJcbiAgICBzYXZlKClcclxuICAgIHJlbmRlcigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmUoKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVksSlNPTi5zdHJpbmdpZnkobGlzdHMpKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSwgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRMaXN0SUQpKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKXtcclxuICAgIGNsZWFyRWxlbWVudHMobGlzdENvbnRhaW5lcilcclxuICAgIHJlbmRlckxpc3RzKClcclxuICAgIFxyXG4gICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElEKVxyXG4gICAgXHJcbiAgICBpZihzZWxlY3RlZExpc3RJRD09PW51bGwpe1xyXG4gICAgICAgIGxpc3REaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgbGlzdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnXHJcbiAgICAgICAgbGlzdFRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBzZWxlY3RlZExpc3QubmFtZVxyXG4gICAgICAgIHJlbmRlclRhc2tDb3VudChzZWxlY3RlZExpc3QpXHJcbiAgICAgICAgY2xlYXJFbGVtZW50cyh0YXNrc0NvbnRhaW5lcilcclxuICAgICAgICByZW5kZXJUYXNrcyhzZWxlY3RlZExpc3QpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHNlbGVjdGVkTGlzdCl7XHJcbiAgICBzZWxlY3RlZExpc3QudGFza3MuZm9yRWFjaCh0YXNrID0+e1xyXG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0YXNrVGVtcGxhdGUuY29udGVudCx0cnVlKVxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxyXG4gICAgICAgIGNoZWNrYm94LmlkID0gdGFzay5pZFxyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpXHJcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IHRhc2suaWRcclxuICAgICAgICBsYWJlbC5hcHBlbmQodGFzay5uYW1lKVxyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFza0NvdW50KHNlbGVjdGVkTGlzdCl7XHJcbiAgICBjb25zdCBpbmNvbXBsZXRlVGFza0NvdW50ID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmNvbXBsZXRlKS5sZW5ndGhcclxuICAgIGNvbnN0IHRhc2tTdHJpbmcgPSBpbmNvbXBsZXRlVGFza0NvdW50PT09MSA/ICd0YXNrJzondGFza3MnXHJcbiAgICBsaXN0Q291bnRFbGVtZW50LmlubmVyVGV4dCA9IGAke2luY29tcGxldGVUYXNrQ291bnR9ICR7dGFza1N0cmluZ30gcmVtYWluaW5nYFxyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckxpc3RzKCl7XHJcbiAgICBsaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaXN0LW5hbWVcIilcclxuICAgICAgICBsaXN0RWxlbWVudC5kYXRhc2V0Lmxpc3RJZCA9IGxpc3QuaWRcclxuICAgICAgICBsaXN0RWxlbWVudC5pbm5lclRleHQgPSBsaXN0Lm5hbWVcclxuICAgICAgICBpZiAobGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SUQpe1xyXG4gICAgICAgICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpc3RcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudClcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRWxlbWVudHMoZWxlbWVudCl7XHJcbiAgICB3aGlsZShlbGVtZW50LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKVxyXG4gICAgfVxyXG59XHJcblxyXG5yZW5kZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==