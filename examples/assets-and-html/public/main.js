(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************!*\
  !*** ../_shared/src/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _styles = __webpack_require__(/*! ./styles.css */ 1);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var root = '#content';
	var state = { count: 0 };
	
	function renderUI(props) {
	  return '\n    <div class=\'' + _styles2.default.component + '\'>\n      <header role=\'banner\'>\n        <h1 class=\'' + _styles2.default.title + '\'>Assets and HTML</h1>\n      </header>\n      <p>This is a <em>simple</em> example that uses <a href=\'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings\'>Template Strings</a>.</p>\n      <div class=\'' + _styles2.default.counter + '\'>\n        <h2>Clicked ' + props.count + ' times.</h2>\n        <button class=\'' + _styles2.default.button + '\'>Click me!</button>\n      </div>\n    </div>\n  ';
	}
	
	function updateUI(ui, selector) {
	  document.querySelector(selector).innerHTML = ui;
	}
	
	function isMatch(element, selector) {
	  var match = element.matches || element.matchesSelector || element.webkitMatchesSelector || element.msMatchesSelector;
	  return match.call(element, selector);
	}
	
	function delegate(selector, handler) {
	  return function (event) {
	    if (isMatch(event.target, selector)) {
	      handler(event);
	    }
	  };
	}
	
	var handleButtonClick = delegate(root + ' button', function (event) {
	  event.preventDefault();
	  state.count++;
	  updateUI(renderUI(state), root);
	});
	
	if (typeof document !== 'undefined') {
	  document.addEventListener('click', handleButtonClick, false);
	  updateUI(renderUI(state), root);
	}
	
	exports.default = renderUI(state);

/***/ },
/* 1 */
/*!*********************************!*\
  !*** ../_shared/src/styles.css ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./styles.css */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1!./../../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1!./../../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/urban.faubion/GitHub/urban/webpack-config/~/css-loader?modules&importLoaders=1!/Users/urban.faubion/GitHub/urban/webpack-config/~/postcss-loader!../_shared/src/styles.css ***!
  \*****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	exports.i(__webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./colors.css */ 4), undefined);
	exports.i(__webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./media.css */ 5), undefined);
	exports.i(__webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6), undefined);
	exports.i(__webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./layout.css */ 7), undefined);
	
	// module
	exports.push([module.id, "._2tXz6geNRMhMZ0wqjgHWze {\n  padding: 1.5rem;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\n.S61on9lUuR1pY4Wg0XGX {\n}\n\n.tM_xKzw_Is9QT490NFFaY {\n  color: " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./colors.css */ 4).locals["primary"] + ";\n  margin-top: 0;\n}\n\n@media " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./media.css */ 5).locals["small"] + " {\n  .tM_xKzw_Is9QT490NFFaY {\n    color: " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./colors.css */ 4).locals["alt"] + ";\n  }\n}\n\n._200w5VFxyZTZXdU3T2NPdA {\n}\n\n.BbSnll6XGrPGsxaxJYxlh {\n  background: " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./colors.css */ 4).locals["normal"] + ";\n  padding: 20px;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"colors": "'./colors.css'",
		"normal": "" + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./colors.css */ 4).locals["normal"] + "",
		"primary": "" + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./colors.css */ 4).locals["primary"] + "",
		"alt": "" + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./colors.css */ 4).locals["alt"] + "",
		"bp-small": "" + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./media.css */ 5).locals["small"] + "",
		"box": "_2tXz6geNRMhMZ0wqjgHWze " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6).locals["thin"] + " " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6).locals["solid"] + " " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6).locals["rounded"] + "",
		"component": "S61on9lUuR1pY4Wg0XGX " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./layout.css */ 7).locals["vertical"] + " _2tXz6geNRMhMZ0wqjgHWze " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6).locals["thin"] + " " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6).locals["solid"] + " " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6).locals["rounded"] + "",
		"title": "tM_xKzw_Is9QT490NFFaY",
		"button": "_200w5VFxyZTZXdU3T2NPdA " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./layout.css */ 7).locals["flexnone"] + "",
		"counter": "BbSnll6XGrPGsxaxJYxlh _2tXz6geNRMhMZ0wqjgHWze " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6).locals["thin"] + " " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6).locals["solid"] + " " + __webpack_require__(/*! -!./../../../~/css-loader?modules&importLoaders=1!./../../../~/postcss-loader!./borders.css */ 6).locals["rounded"] + ""
	};

/***/ },
/* 3 */
/*!*************************************************************************************!*\
  !*** /Users/urban.faubion/GitHub/urban/webpack-config/~/css-loader/lib/css-base.js ***!
  \*************************************************************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/urban.faubion/GitHub/urban/webpack-config/~/css-loader?modules&importLoaders=1!/Users/urban.faubion/GitHub/urban/webpack-config/~/postcss-loader!../_shared/src/colors.css ***!
  \*****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n", ""]);
	
	// exports
	exports.locals = {
		"normal": "gray",
		"primary": "blue",
		"alt": "red"
	};

/***/ },
/* 5 */
/*!****************************************************************************************************************************************************************************************!*\
  !*** /Users/urban.faubion/GitHub/urban/webpack-config/~/css-loader?modules&importLoaders=1!/Users/urban.faubion/GitHub/urban/webpack-config/~/postcss-loader!../_shared/src/media.css ***!
  \****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n", ""]);
	
	// exports
	exports.locals = {
		"small": "(max-width: 599px)"
	};

/***/ },
/* 6 */
/*!******************************************************************************************************************************************************************************************!*\
  !*** /Users/urban.faubion/GitHub/urban/webpack-config/~/css-loader?modules&importLoaders=1!/Users/urban.faubion/GitHub/urban/webpack-config/~/postcss-loader!../_shared/src/borders.css ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, ".qrSTXbpYJj3YGwGU8UDGF {\n  border-width: 1px;\n}\n\n._1p6IkFNQTocX5v0nwVA93A { \n  border-style: solid;\n}\n._1VN32kPAEC5kdfOPMXjYlg { \n  border-radius: 3px;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"thin": "qrSTXbpYJj3YGwGU8UDGF",
		"solid": "_1p6IkFNQTocX5v0nwVA93A",
		"rounded": "_1VN32kPAEC5kdfOPMXjYlg"
	};

/***/ },
/* 7 */
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/urban.faubion/GitHub/urban/webpack-config/~/css-loader?modules&importLoaders=1!/Users/urban.faubion/GitHub/urban/webpack-config/~/postcss-loader!../_shared/src/layout.css ***!
  \*****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "._10oYNchQQmTwHfY68ehKk_ { \n  display: -webkit-box; \n  display: -webkit-flex; \n  display: -ms-flexbox; \n  display: flex;\n}\n\n._1Rn8h7XiQnqAkKnptIxbLP {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n._12nhxFFTx59ZMEujQIQPLp {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0;\n      -ms-flex: 0;\n          flex: 0;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"layout": "_10oYNchQQmTwHfY68ehKk_",
		"vertical": "_1Rn8h7XiQnqAkKnptIxbLP _10oYNchQQmTwHfY68ehKk_",
		"flexnone": "_12nhxFFTx59ZMEujQIQPLp"
	};

/***/ },
/* 8 */
/*!************************************************************************************!*\
  !*** /Users/urban.faubion/GitHub/urban/webpack-config/~/style-loader/addStyles.js ***!
  \************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=main.js.map