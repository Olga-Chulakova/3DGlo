/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/style.css?../node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll_to_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll-to-service.js */ \"./modules/scroll-to-service.js\");\n/* harmony import */ var _modules_validation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validation.js */ \"./modules/validation.js\");\n/* harmony import */ var _modules_validation_blur_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validation-blur.js */ \"./modules/validation-blur.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('18 december 2025');\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_scroll_to_service_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_validation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_validation_blur_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth-scroll.js */ \"./modules/smooth-scroll.js\");\n\r\n\r\nconst btnMenu = document.querySelector('.menu');\r\nconst menuNav = document.querySelector('menu');\r\nconst btnClose = menuNav.querySelector('.close-btn');\r\nconst menuItems = menuNav.querySelectorAll('ul>li>a');\r\n\r\n\r\nconst menu = () => {\r\n\r\n    const handleMenu = () => {\r\n        menuNav.classList.toggle('active-menu');\r\n    }\r\n\r\n    btnMenu.addEventListener('click', handleMenu);\r\n    btnClose.addEventListener('click', handleMenu);\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\r\n\r\n    menuItems.forEach(anchor => {\r\n        anchor.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            (0,_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(anchor);\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\r\n// Второй вариант решения скролла - с requestAnimationFrame\r\n\r\n//     menuItems.forEach(anchor => {\r\n//         anchor.addEventListener('click', (e) => {\r\n//             e.preventDefault();\r\n//             const blockId = anchor.getAttribute('href').substring(1);\r\n//             const targetBlock = document.getElementById(blockId);\r\n//             if (targetBlock) {\r\n//                 const top = targetBlock.offsetTop;\r\n//                 const startPosition = window.scrollY;\r\n//                 const distance = top - startPosition;\r\n//                 const duration = 500;\r\n//                 const startTime = Date.now();\r\n\r\n//                 function animateScroll(startTime, startPosition, distance, duration) {\r\n//                     const currentTime = Date.now();\r\n//                     const elapsed = currentTime - startTime;\r\n//                     const progress = Math.min(elapsed / duration, 1);\r\n//                     const currentPosition = startPosition + distance * progress;\r\n//                     window.scrollTo(0, currentPosition);\r\n\r\n//                     if (progress < 1) {\r\n//                         requestAnimationFrame(() => animateScroll(startTime, startPosition, distance, duration))\r\n//                     }\r\n//                 }\r\n\r\n//                 animateScroll(startTime, startPosition, distance, duration);\r\n//             }\r\n//         })\r\n//     })\n\n//# sourceURL=webpack:///./modules/menu.js?\n}");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst btnPopap = document.querySelectorAll('.popup-btn');\r\nconst popup = document.querySelector('.popup');\r\nconst btnClose = popup.querySelector('.popup-close');\r\nconst popupContent = popup.querySelector('.popup-content')\r\n\r\nconst modal = () => {\r\n    btnPopap.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (window.innerWidth < 768) {\r\n                popup.style.display = 'block';\r\n                popupContent.style.opacity = '1';\r\n                popupContent.style.transform = 'scale(1)';\r\n            } else {\r\n                popup.style.display = 'block';\r\n                popupContent.style.opacity = '0';\r\n                popupContent.style.transform = 'scale(0)';\r\n\r\n                startAnimation();\r\n            }\r\n        });\r\n    });\r\n\r\n    function startAnimation() {\r\n        const startTime = Date.now();\r\n        \r\n        function updateAnimation() {\r\n            const progress = (Date.now()- startTime) / 250;\r\n            const clampedProgress = Math.min(progress, 1);\r\n            \r\n            popupContent.style.opacity = clampedProgress;\r\n            popupContent.style.transform = `scale(${clampedProgress})`;\r\n            \r\n            if (progress < 1) {\r\n                requestAnimationFrame(updateAnimation);\r\n            }\r\n        }\r\n        \r\n        requestAnimationFrame(updateAnimation);\r\n    }\r\n\r\n    btnClose.addEventListener('click', () => {\r\n        if (window.innerWidth < 768) {\r\n                popup.style.display = 'none';\r\n            } else {\r\n                closeAnimation();\r\n            }\r\n    });\r\n\r\n    function closeAnimation() {\r\n        const startTime = Date.now();\r\n    \r\n        function updateAnimation() {\r\n            const progress = (Date.now() - startTime) / 250;\r\n            const clampedProgress = Math.min(progress, 1);\r\n\r\n            const reverseProgress = 1 - clampedProgress;\r\n\r\n            popupContent.style.opacity = reverseProgress;\r\n            popupContent.style.transform = `scale(${reverseProgress})`;\r\n        \r\n            if (progress < 1) {\r\n                requestAnimationFrame(updateAnimation);\r\n            } else {\r\n                popup.style.display = 'none';\r\n            }\r\n        }\r\n    \r\n        requestAnimationFrame(updateAnimation);\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ }),

/***/ "./modules/scroll-to-service.js":
/*!**************************************!*\
  !*** ./modules/scroll-to-service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth-scroll.js */ \"./modules/smooth-scroll.js\");\n\r\n\r\nconst main = document.querySelector('main');\r\nconst btnScroll = main.querySelector('a[href=\"#service-block\"]');\r\n\r\nconst scrollToService = () => { \r\n    btnScroll.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        (0,_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(btnScroll);\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToService);\r\n\n\n//# sourceURL=webpack:///./modules/scroll-to-service.js?\n}");

/***/ }),

/***/ "./modules/smooth-scroll.js":
/*!**********************************!*\
  !*** ./modules/smooth-scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = (linkElement) => {\r\n    const blockId = linkElement.getAttribute('href').substring(1);\r\n    const targetBlock = document.getElementById(blockId);\r\n    if (targetBlock) {\r\n        targetBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/smooth-scroll.js?\n}");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timerHours = document.querySelector('#timer-hours');\r\nconst timerMinutes = document.querySelector('#timer-minutes');\r\nconst timerSeconds = document.querySelector('#timer-seconds');\r\n\r\nconst timer = (deadline) => {\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {timeRemaining, hours, minutes, seconds}\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(idInterval);\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n            return;\r\n        }\r\n\r\n        timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\r\n    }\r\n\r\n    let idInterval = setInterval(updateClock, 1000)\r\n\r\n    updateClock();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?\n}");

/***/ }),

/***/ "./modules/validation-blur.js":
/*!************************************!*\
  !*** ./modules/validation-blur.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validation_rules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-rules.js */ \"./modules/validation-rules.js\");\n\r\n\r\nconst inputsText = document.querySelectorAll('input[type=\"text\"][placeholder=\"Ваше имя\"]');\r\nconst inputsMail = document.querySelectorAll('input[type=\"email\"]');\r\nconst inputsTel = document.querySelectorAll('input[type=\"tel\"]');\r\n\r\nconst formatText = (value) => {\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.RULES.text, '');\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.collapseSpaces, ' ');\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.collapseDashes, '-');\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.trimEdges, '');\r\n    return value;\r\n}\r\n\r\nconst formatEmail = (value) => {\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.RULES.email, '');\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.collapseDashes, '-');\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.trimEdges, '');\r\n    return value;\r\n}\r\n\r\nconst formatTel = (value) => {\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.RULES.tel, '');\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.collapseDashes, '-');\r\n    value = value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.trimEdges, '');\r\n    return value;\r\n}\r\n\r\nconst initValidationBlur = () => {\r\n    inputsText.forEach(input => {\r\n        input.addEventListener('blur', (e) => {\r\n            e.target.value = formatText(e.target.value);\r\n        });\r\n    });\r\n    inputsMail.forEach(input => {\r\n        input.addEventListener('blur', (e) => {\r\n            e.target.value = formatEmail(e.target.value);\r\n        });\r\n    });\r\n    inputsTel.forEach(input => {\r\n        input.addEventListener('blur', (e) => {\r\n            e.target.value = formatTel(e.target.value);\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initValidationBlur);\r\n\r\n\r\n// Начальный подробный вариант кода\r\n\r\n// const initValidationBlur = () => {\r\n//     inputsText.forEach((inputText) => {\r\n//         inputText.addEventListener('blur', (e) => {\r\n//             let value = e.target.value;\r\n//             value = value.replace(/[^а-яА-Я\\s-]/gi, '');\r\n//             value = value.replace(/\\s+/g, ' ');\r\n//             value = value.replace(/-+/g, '-');\r\n//             value = value.replace(/^[\\s-]+|[\\s-]+$/g, '');\r\n//             value = value.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');\r\n\r\n//             e.target.value = value;\r\n//         })\r\n//     })\r\n\r\n//     inputsMail.forEach(inputMail => {\r\n//         inputMail.addEventListener('blur', (e) => {\r\n//             let valueMail = e.target.value;\r\n//             valueMail = valueMail.replace(/[^\\w@\\-.!~*']/gi, '');\r\n//             valueMail = valueMail.replace(/-+/g, '-');\r\n//             valueMail = valueMail.replace(/^[\\s-]+|[\\s-]+$/g, '');\r\n\r\n//             e.target.value = valueMail;\r\n//         })\r\n//     })\r\n\r\n//     inputsTel.forEach(inputTel => {\r\n//         inputTel.addEventListener('blur', (e) => {\r\n//             let valueTel = e.target.value;\r\n//             valueTel = valueTel.replace(/[^\\d\\-()]/g, '');\r\n//             valueTel = valueTel.replace(/-+/g, '-');\r\n//             valueTel = valueTel.replace(/^[\\s-]+|[\\s-]+$/g, '');\r\n\r\n//             e.target.value = valueTel;\r\n//         })\r\n//     })\r\n\r\n// }\r\n\r\n// export default initValidationBlur;\n\n//# sourceURL=webpack:///./modules/validation-blur.js?\n}");

/***/ }),

/***/ "./modules/validation-rules.js":
/*!*************************************!*\
  !*** ./modules/validation-rules.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RULES: () => (/* binding */ RULES),\n/* harmony export */   collapseDashes: () => (/* binding */ collapseDashes),\n/* harmony export */   collapseSpaces: () => (/* binding */ collapseSpaces),\n/* harmony export */   trimEdges: () => (/* binding */ trimEdges)\n/* harmony export */ });\nconst RULES = {\r\n    number: /[^\\d]/g,\r\n    text: /[^а-яА-Я\\s-]/gi,\r\n    email: /[^\\w@\\-.!~*']/gi,\r\n    tel: /[^\\d\\-()]/g,\r\n};\r\n\r\nconst collapseSpaces = /\\s+/g;\r\nconst collapseDashes = /-+/g;\r\nconst trimEdges = /^[\\s-]+|[\\s-]+$/g;\r\n\r\n\n\n//# sourceURL=webpack:///./modules/validation-rules.js?\n}");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validation_rules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-rules.js */ \"./modules/validation-rules.js\");\n\r\n\r\nconst inputs = document.querySelectorAll('input.calc-item');\r\nconst inputsText = document.querySelectorAll('input[type=\"text\"][placeholder=\"Ваше имя\"], input[placeholder=\"Ваше сообщение\"]');\r\nconst inputsMail = document.querySelectorAll('input[type=\"email\"]');\r\nconst inputsTel = document.querySelectorAll('input[type=\"tel\"]');\r\n\r\nconst validation = () => {\r\n    inputs.forEach((input) => {\r\n        input.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.RULES.number, '');\r\n        })\r\n    })\r\n\r\n    inputsText.forEach(inputText => {\r\n        inputText.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.RULES.text, '');\r\n        })\r\n    })\r\n\r\n    inputsMail.forEach(inputMail => {\r\n        inputMail.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.RULES.email, '');\r\n        })\r\n    })\r\n\r\n    inputsTel.forEach(inputTel => {\r\n        inputTel.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(_validation_rules_js__WEBPACK_IMPORTED_MODULE_0__.RULES.tel, '');\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\r\n\r\n// Начальный подробный вариант кода\r\n\r\n// const validation = () => {\r\n//     inputs.forEach((input) => {\r\n//         input.addEventListener('input', (e) => {\r\n//             e.target.value = e.target.value.replace(/[^\\d]/g, '');\r\n//         })\r\n//     })\r\n\r\n//     inputsText.forEach(inputText => {\r\n//         inputText.addEventListener('input', (e) => {\r\n//             e.target.value = e.target.value.replace(/[^а-яА-Я\\s-]/gi, '');\r\n//         })\r\n//     })\r\n\r\n//     inputsMail.forEach(inputMail => {\r\n//         inputMail.addEventListener('input', (e) => {\r\n//             e.target.value = e.target.value.replace(/[^\\w@\\-.!~*']/gi, '');\r\n//         })\r\n//     })\r\n\r\n//     inputsTel.forEach(inputTel => {\r\n//         inputTel.addEventListener('input', (e) => {\r\n//             e.target.value = e.target.value.replace(/[^\\d\\-()]/g, '');\r\n//         })\r\n//     })\r\n// }\r\n\r\n// export default validation;\n\n//# sourceURL=webpack:///./modules/validation.js?\n}");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/style.css?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;