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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-color: #f8edff;\n  --dark-grey: #3d3b40;\n  --filled: #525ceb;\n  --success: #597e52;\n  --fail: #d24545;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: var(--bg-color);\n  color: var(--dark-grey);\n}\n\nbody,\n#gameboards > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#gameboards {\n  display: flex;\n  gap: 4rem;\n}\n\n.row {\n  display: flex;\n}\n\n.row > div {\n  border: 2px solid var(--bg-color);\n  background-color: var(--dark-grey);\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n}\n\n#player-gameboard .row:first-child div:first-child,\n#computer-gameboard .row:first-child div:first-child {\n  border-radius: 16px 0 0 0;\n}\n\n#player-gameboard .row:first-child div:last-child,\n#computer-gameboard .row:first-child div:last-child {\n  border-radius: 0 16px 0 0;\n}\n\n#player-gameboard .row:last-child div:first-child,\n#computer-gameboard .row:last-child div:first-child {\n  border-radius: 0 0 0 16px;\n}\n\n#player-gameboard .row:last-child div:last-child,\n#computer-gameboard .row:last-child div:last-child {\n  border-radius: 0 0 16px 0;\n}\n\n#player-gameboard .filled {\n  background-color: var(--filled);\n}\n\n#player-gameboard .hit,\n#computer-gameboard .hit {\n  background-color: var(--fail);\n  color: var(--bg-color);\n}\n\n#computer-gameboard .filled.hit,\n#player-gameboard .filled.hit {\n  background-color: var(--success);\n  color: var(--bg-color);\n}\n\n#result {\n  background-color: var(--dark-grey);\n  padding: 8px 16px;\n  border-radius: 16px;\n  color: var(--bg-color);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n\n\n\n// Initialize player and computer.\nconst player = new _Player_js__WEBPACK_IMPORTED_MODULE_1__.Player();\nconst computer = new _Player_js__WEBPACK_IMPORTED_MODULE_1__.Computer();\n\n// Variables to determine what phase the game is in.\nlet shipPhase = true;\nconst shipLengths = [5, 4, 3, 3, 2];\nlet gameOver = false;\n\nconst result = document.querySelector(\"#result\");\n\nfunction displaySquares(container, user) {\n  for (let i = 0; i < user.gameboard.grid.length; i++) {\n    const row = document.createElement(\"div\");\n    row.classList = \"row\";\n    for (let j = 0; j < user.gameboard.grid[i].length; j++) {\n      const square = document.createElement(\"div\");\n      //   square.textContent = `${i}, ${j}, ${user.gameboard.grid[i][j].hasShip}, ${user.gameboard.grid[i][j].isHit}`;\n\n      styleSquare(square, user.gameboard.grid[i][j]);\n\n      if (shipPhase) {\n        // Place ships on player's board.\n        if (!(user instanceof _Player_js__WEBPACK_IMPORTED_MODULE_1__.Computer)) {\n          placePlayerShips(i, j, square);\n        }\n      } else if (user instanceof _Player_js__WEBPACK_IMPORTED_MODULE_1__.Computer) {\n        // Only lets Player click Computer's gameboard to make move.\n        square.addEventListener(\"click\", () => {\n          playerMove(i, j);\n        });\n      }\n\n      row.appendChild(square);\n    }\n    container.appendChild(row);\n  }\n}\n\n// Lets user place ships on their board.\n// @param verticalPos: Integer representing vertical positioning on a board.\n// @param horizontalPos: Integer representing horizontal positioning on a board.\n// @param square: Node that's a DOM reference for a gameboard space.\nfunction placePlayerShips(verticalPos, horizontalPos, square) {\n  if (horizontalPos + shipLengths[0] <= player.gameboard.grid.length) {\n    square.addEventListener(\"click\", () => {\n      let position = [];\n      for (let i = 0; i < shipLengths[0]; i++) {\n        position.push([verticalPos, horizontalPos + i]);\n      }\n      if (player.gameboard.placeShip(position)) {\n        shipLengths.shift();\n        clearSquares(playerGameboard);\n        displaySquares(playerGameboard, player);\n        result.textContent = `Place another battleship on the board! It is ${shipLengths[0]} units long.`;\n\n        // If no more ships to place, ship phase is over and attack phase begins.\n        if (shipLengths.length === 0) {\n          result.textContent = \"Click on the Computer's board to make a move.\";\n          shipPhase = false;\n          placeComputerShips();\n        }\n      }\n    });\n  }\n}\n\n// Places ships on the computer's board randomly without colliding.\nfunction placeComputerShips() {\n  let shipLengths = [5, 4, 3, 3, 2];\n  while (shipLengths.length > 0) {\n    let validSpaces = true;\n    let horizontalPos = Math.floor(\n      Math.random() * (computer.gameboard.grid.length - shipLengths[0])\n    );\n    let verticalPos = Math.floor(\n      Math.random() * computer.gameboard.grid.length\n    );\n\n    // Check if the ship can be placed without colliding with other ships.\n    for (let i = 0; i < shipLengths[0]; i++) {\n      if (computer.gameboard.grid[verticalPos][horizontalPos + i].hasShip) {\n        validSpaces = false;\n        break;\n      }\n    }\n\n    if (!validSpaces) {\n      continue;\n    } else {\n      let position = [];\n      for (let i = 0; i < shipLengths[0]; i++) {\n        position.push([verticalPos, horizontalPos + i]);\n      }\n      computer.gameboard.placeShip(position);\n      shipLengths.shift();\n    }\n  }\n  clearSquares(computerGameboard);\n  displaySquares(computerGameboard, computer);\n}\n\n// Lets player attack the opponent's board and allows the opponent to\n// follow-up with their own attack.\n// @param verticalPos: Integer representing vertical positioning on a board.\n// @param horizontalPos: Integer representing horizontal positioning on a board.\nfunction playerMove(verticalPos, horizontalPos) {\n  // Ensures the user is not clicking the same space twice.\n  let validMove;\n\n  if (!gameOver) {\n    validMove = player.makeMove(computer, [verticalPos, horizontalPos]);\n    console.log(validMove);\n    clearSquares(computerGameboard);\n    displaySquares(computerGameboard, computer);\n  }\n  checkShips();\n\n  // Computer makes move unless all their ships are sunk.\n  if (!gameOver && validMove) {\n    computer.makeMove(player);\n    clearSquares(playerGameboard);\n    displaySquares(playerGameboard, player);\n    checkShips();\n  }\n}\n\n// Styles a square on the gameboard.\n// @param square: Node that's a DOM reference for a gameboard space.\n// @param position: Object representing a gameboard space.\nfunction styleSquare(square, position) {\n  if (position.isHit) {\n    square.classList = \"hit\";\n    square.textContent = \"✕\";\n  }\n  if (position.hasShip) {\n    square.classList += \" filled\";\n  }\n  if (position.isHit && position.hasShip) {\n    square.textContent = \"○\";\n  }\n}\n\n// Clears squares from a gameboard.\n// @param gameboard: Node that's a DOM reference to either the player or computer's gameboard.\nfunction clearSquares(container) {\n  while (container.hasChildNodes()) {\n    container.removeChild(container.firstChild);\n  }\n}\n\n// Checks whether the all the player's or computer's ships sunk and\n// updates the result message for the player accordingly.\nfunction checkShips() {\n  if (computer.gameboard.shipsSunk()) {\n    gameOver = true;\n    result.textContent = \"Enemy ships are all sunk! You won!\";\n  } else if (player.gameboard.shipsSunk()) {\n    gameOver = true;\n    result.textContent = \"Player ships are all sunk! You lost.\";\n  }\n}\n\n// Display the player and computer gameboards.\nconst playerGameboard = document.querySelector(\"#player-gameboard\");\ndisplaySquares(playerGameboard, player);\nconst computerGameboard = document.querySelector(\"#computer-gameboard\");\ndisplaySquares(computerGameboard, computer);\n\n\n//# sourceURL=webpack://battleship/./src/Game.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\n\nclass Gameboard {\n  constructor() {\n    this.grid = this.createGrid();\n    this.ships = [];\n  }\n\n  // Creates grid that players use to play the game.\n  createGrid() {\n    let grid = [];\n    for (let i = 0; i < 10; i++) {\n      let row = [];\n      for (let j = 0; j < 10; j++) {\n        row.push({ hasShip: false, isHit: false });\n      }\n      grid.push(row);\n    }\n    return grid;\n  }\n\n  // Checks if there's a ship on a specified number of spaces.\n  // @param arr: Array of arrays representing the x-y coordinates to check.\n  // @returns false if any space has a ship, otherwise returns false.\n  isSpaceEmpty(arr) {\n    for (let i = 0; i < arr.length; i++) {\n      const verticalPos = arr[i][0];\n      const horizontaPos = arr[i][1];\n      if (this.grid[verticalPos][horizontaPos].hasShip) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  // Fills a specified number of empty spaces with a ship.\n  // @param arr: Array of arrays representing the x-y coordinates to fill.\n  fillSpaces(arr) {\n    for (let i = 0; i < arr.length; i++) {\n      const verticalPos = arr[i][0];\n      const horizontalPos = arr[i][1];\n      this.grid[verticalPos][horizontalPos].hasShip = true;\n    }\n  }\n\n  // Places a ship on the gameboard.\n  // @param position: Array of arrays representing the x-y coordinates to place a ship.\n  // @throws an error if the ship being placed is too short or too long.\n  // @returns true if the ships are placed successfully, otherwise returns false.\n  placeShip(position) {\n    if (position.length < 2 || position.length > 5) {\n      throw new Error(\"Illegal ship length.\");\n    }\n    if (this.isSpaceEmpty(position)) {\n      const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](position);\n      this.fillSpaces(position);\n      this.ships.push(ship);\n      return true;\n    } else {\n      alert(\"Those spaces are filled.\");\n      return false;\n    }\n  }\n\n  // Receive an attack on the gameboard unless it's already been attacked.\n  // @param verticalPos: Integer representing vertical positioning on a board.\n  // @param horizontalPos: Integer representing horizontal positioning on a board.\n  receiveAttack(verticalPos, horizontaPos) {\n    if (!this.grid[verticalPos][horizontaPos].isHit) {\n      this.grid[verticalPos][horizontaPos].isHit = true;\n\n      // Check if there's a ship on the space\n      if (this.grid[verticalPos][horizontaPos].hasShip) {\n        // Find specific ship that was hit\n        this.findShip(verticalPos, horizontaPos);\n      }\n      return true;\n    } else {\n      alert(\"That spot has already been attacked.\");\n      return false;\n    }\n  }\n\n  // Finds a specific ship that was attacked and adds a hit to it.\n  // @param verticalPos: Integer representing vertical positioning on a board.\n  // @param horizontalPos: Integer representing horizontal positioning on a board.\n  findShip(verticalPos, horizontaPos) {\n    let ship_found = false;\n\n    for (let i = 0; i < this.ships.length; i++) {\n      if (ship_found) {\n        break;\n      }\n      for (let j = 0; j < this.ships[i].position.length; j++) {\n        if (\n          this.ships[i].position[j][0] === verticalPos &&\n          this.ships[i].position[j][1] === horizontaPos\n        ) {\n          this.ships[i].hit();\n          ship_found = true;\n          break;\n        }\n      }\n    }\n  }\n\n  // Checks if ships are all ships are sunk.\n  // @returns false if any ship isn't sunk, otherwise returns true.\n  shipsSunk() {\n    for (let i = 0; i < this.ships.length; i++) {\n      if (!this.ships[i].isSunk()) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Computer: () => (/* binding */ Computer),\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n\n\nclass Player {\n  constructor() {\n    this.gameboard = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  // Lets player attack computer's gameboard.\n  // @param opponent: Instance of the Computer class.\n  // @param position: Array containing the coordinates to attack, [x, y].\n  makeMove(opponent, position) {\n    return opponent.gameboard.receiveAttack(position[0], position[1]);\n  }\n}\n\nclass Computer extends Player {\n  constructor() {\n    super();\n  }\n\n  // Modifies class function to hit a random space on the player's gameboard.\n  // @param opponent: Instance of the Player class.\n  makeMove(opponent) {\n    const max = 10;\n    let randomX = Math.floor(Math.random() * max);\n    let randomY = Math.floor(Math.random() * max);\n\n    // Check if spaces are empty before attacking.\n    while (opponent.gameboard.grid[randomX][randomY].isHit) {\n      randomX = Math.floor(Math.random() * max);\n      randomY = Math.floor(Math.random() * max);\n    }\n\n    return opponent.gameboard.receiveAttack(randomX, randomY);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(position) {\n    this.length = position.length;\n    this.hits = 0;\n    this.sunk = false;\n    this.position = position;\n  }\n\n  hit = () => {\n    if (!this.sunk) {\n      this.hits++;\n      this.isSunk();\n    }\n  };\n\n  isSunk = () => {\n    if (!this.sunk) {\n      if (this.hits === this.length) {\n        this.sunk = true;\n      }\n    }\n    return this.sunk;\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Game.js");
/******/ 	
/******/ })()
;