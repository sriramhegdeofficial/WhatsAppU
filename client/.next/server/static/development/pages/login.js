module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GInput.js":
/*!******************************!*\
  !*** ./components/GInput.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\web projects\\WhatsAppU\\client\\components\\GInput.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GInput = /*#__PURE__*/function (_React$Component) {
  _inherits(GInput, _React$Component);

  var _super = _createSuper(GInput);

  function GInput(props) {
    var _this;

    _classCallCheck(this, GInput);

    _this = _super.call(this, props);
    _this.myElement = null;
    return _this;
  }

  _createClass(GInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 12
        }
      }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["Transition"], {
        mountOnEnter: true,
        unmountOnExit: true,
        "in": !this.props.lIsSelected,
        timeout: 700,
        addEndListener: function addEndListener(node, done) {
          if (_this2.props.lIsSelected) {
            gsap__WEBPACK_IMPORTED_MODULE_2___default.a.to(node, 0.7, {
              scaleY: 0,
              opacity: 0,
              onComplete: done
            });
          } else {
            gsap__WEBPACK_IMPORTED_MODULE_2___default.a.from(node, 0.7, {
              scaleY: 0,
              opacity: 0,
              onComplete: done
            });
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 16
        }
      }, __jsx("input", {
        ref: function ref(input) {
          return _this2.myElement = input;
        },
        type: "text",
        placeholder: "Enter email address",
        className: "jsx-2390958154",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2390958154",
        __self: this
      }, "input.jsx-2390958154{width:80%;min-width:200px;height:40px;border:none;outline:0;border-radius:50px;font-size:0.8rem;padding:0px 25px;background-color:var(--neomorphic-white);box-shadow:var(--input-neomorphic-box-shadow);margin:17px 0;font-weight:900;}input.jsx-2390958154:focus{box-shadow:var(--input-focus-neomorphic-box-shadow);text-shadow:1px 1px 0 #FFF;}input.jsx-2390958154::-webkit-input-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}input.jsx-2390958154::-moz-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}input.jsx-2390958154:-ms-input-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}input.jsx-2390958154::placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWIgcHJvamVjdHNcXFdoYXRzQXBwVVxcY2xpZW50XFxjb21wb25lbnRzXFxHSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNxQixBQUdtQyxBQWdCMkMsQUFLcEMsVUFwQkQsT0FxQnNCLFNBcEIxQixZQUNBLFlBQ0YsRUFhaUIsRUFNWCxNQWxCRyxVQW1CdkIsU0FsQnFCLEFBWXJCLGlCQVhxQixpQkFDd0IseUNBQ00sOENBQ2pDLGNBQ0UsZ0JBRXBCIiwiZmlsZSI6IkQ6XFx3ZWIgcHJvamVjdHNcXFdoYXRzQXBwVVxcY2xpZW50XFxjb21wb25lbnRzXFxHSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5cclxuY2xhc3MgR0lucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5teUVsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgICAgICBcclxuICBcclxuICAgcmVuZGVyKCkge1xyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgPFRyYW5zaXRpb24gXHJcbiAgICAgICAgICAgICAgIG1vdW50T25FbnRlclxyXG4gICAgICAgICAgICAgICB1bm1vdW50T25FeGl0XHJcbiAgICAgICAgICAgICAgIGluPXshdGhpcy5wcm9wcy5sSXNTZWxlY3RlZH0gXHJcbiAgICAgICAgICAgICAgIHRpbWVvdXQ9ezcwMH1cclxuICAgICAgICAgICAgICAgYWRkRW5kTGlzdGVuZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAobm9kZSwgZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMubElzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3NhcC50byhub2RlLCAwLjcsIHtzY2FsZVk6IDAsIG9wYWNpdHk6IDAsIG9uQ29tcGxldGU6IGRvbmV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3NhcC5mcm9tKG5vZGUsIDAuNywge3NjYWxlWTogMCwgb3BhY2l0eTogMCwgb25Db21wbGV0ZTogZG9uZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXQgPT4gdGhpcy5teUVsZW1lbnQgPSBpbnB1dH0gICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWwgYWRkcmVzc1wiLz5cclxuICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZW9tb3JwaGljLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogIHZhcigtLWlucHV0LW5lb21vcnBoaWMtYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTdweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICB2YXIoLS1pbnB1dC1mb2N1cy1uZW9tb3JwaGljLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICNGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgKTtcclxuICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR0lucHV0OyJdfQ== */\n/*@ sourceURL=D:\\\\web projects\\\\WhatsAppU\\\\client\\\\components\\\\GInput.js */"));
    }
  }]);

  return GInput;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GInput);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\web projects\\WhatsAppU\\client\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Layout = function Layout(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1135387399",
    __self: _this
  }, "@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;900&display=swap');*{box-sizing:border-box;margin:0;padding:0;}html,body{width:100%;height:100%;}:root{--main-green-color:#25D366;--side-green-color:#5BD9AB;--neomorphic-white:#e8e8e8;--neomorphic-box-shadow:7px 7px 15px #bbcfda,-4px -4px 13px #ffffff, inset 4px 4px 8px rgba(209,217,230,0.35), inset -8px -8px 8px rgba(255,255,255,0.3);--hover-neomorphic-box-shadow:4px 2px 18px #bbcfda, -4px -4px 13px #ffffff, inset 6px 6px 16px rgba(209,217,230,0.8), inset -8px -8px 8px rgba(255,255,255,0.2);--input-neomorphic-box-shadow:inset 1px 1px 2px #BABECC, inset -1px -1px 2px white;--input-focus-neomorphic-box-shadow:inset 2px 2px 5px #BABECC, inset -5px -5px 10px var(--neomorphic-white);--neomorphic-text-shadow:1px 1px 0 #fff;}body{font-family:'Nunito Sans',sans-serif;}#__next{width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWIgcHJvamVjdHNcXFdoYXRzQXBwVVxcY2xpZW50XFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU29CLEFBRXVILEFBRzNFLEFBT1gsQUFLZ0IsQUFvQlUsQUFLMUIsV0E3QkMsQUE4QkEsV0FyQ0gsQ0FRYixBQThCQSxJQTFCK0IsSUFYakIsTUErQlosSUE3QkYsYUFVK0IsMkJBR2lCLHlKQUlBLGdLQUVuQixtRkFJbUIsNEdBQ0gsd0NBQzdDIiwiZmlsZSI6IkQ6XFx3ZWIgcHJvamVjdHNcXFdoYXRzQXBwVVxcY2xpZW50XFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDIwMDs0MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAtLW1haW4tZ3JlZW4tY29sb3I6ICMyNUQzNjY7XHJcbiAgICAgICAgICAgICAgICAgICAgIC0tc2lkZS1ncmVlbi1jb2xvcjogIzVCRDlBQjtcclxuICAgICAgICAgICAgICAgICAgICAgLS1uZW9tb3JwaGljLXdoaXRlOiAjZThlOGU4O1xyXG4gICAgICAgICAgICAgICAgICAgICAtLW5lb21vcnBoaWMtYm94LXNoYWRvdzogN3B4IDdweCAxNXB4ICNiYmNmZGEsIC00cHggLTRweCAxM3B4ICNmZmZmZmYsIFxyXG4gICAgICAgICAgICAgICAgICAgICBpbnNldCA0cHggNHB4IDhweCByZ2JhKDIwOSwgMjE3LCAyMzAsIDAuMzUpLCBcclxuICAgICAgICAgICAgICAgICAgICAgaW5zZXQgLThweCAtOHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIC0taG92ZXItbmVvbW9ycGhpYy1ib3gtc2hhZG93OiA0cHggMnB4IDE4cHggI2JiY2ZkYSwgXHJcbiAgICAgICAgICAgICAgICAgICAgIC00cHggLTRweCAxM3B4ICNmZmZmZmYsIFxyXG4gICAgICAgICAgICAgICAgICAgICBpbnNldCA2cHggNnB4IDE2cHggcmdiYSgyMDksIDIxNywgMjMwLCAwLjgpLCBcclxuICAgICAgICAgICAgICAgICAgICAgaW5zZXQgLThweCAtOHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgIC0taW5wdXQtbmVvbW9ycGhpYy1ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAjQkFCRUNDLCBcclxuICAgICAgICAgICAgICAgICAgICAgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIC0taW5wdXQtZm9jdXMtbmVvbW9ycGhpYy1ib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCAjQkFCRUNDLCBcclxuICAgICAgICAgICAgICAgICAgICAgaW5zZXQgLTVweCAtNXB4IDEwcHggdmFyKC0tbmVvbW9ycGhpYy13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIC0tbmVvbW9ycGhpYy10ZXh0LXNoYWRvdzogIDFweCAxcHggMCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=D:\\\\web projects\\\\WhatsAppU\\\\client\\\\components\\\\Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LoginBox.js":
/*!********************************!*\
  !*** ./components/LoginBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GInput */ "./components/GInput.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\web projects\\WhatsAppU\\client\\components\\LoginBox.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var LoginBox = function LoginBox(props) {
  var authButtonText = function authButtonText() {
    if (props.loginButton.isSelected === true) {
      return "login";
    } else {
      return "signup";
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]) + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]) + " " + "heading-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return props.handleLoginSignupButtonClick('login');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]) + " " + "login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "Login")), __jsx("div", {
    onClick: function onClick() {
      return props.handleLoginSignupButtonClick('signup');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]) + " " + "signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "signup"))), __jsx("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 18
    }
  }, __jsx(_GInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    lIsSelected: props.loginButton.isSelected,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("input", {
    type: "text",
    placeholder: props.loginButton.isSelected ? "Enter email or username" : "Enter username",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 22
    }
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 22
    }
  })), __jsx("a", {
    href: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]) + " " + "forgot-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 18
    }
  }, "forgot password?"), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, authButtonText()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3857176787",
    dynamic: [!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)"],
    __self: _this
  }, ".container.__jsx-style-dynamic-selector{background:var(--neomorphic-white);width:350px;height:550px;box-shadow:0px 0px 25px 5px rgba(0,0,0,0.2);padding:30px 10px;border-radius:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:var(--neomorphic-box-shadow);position:relative;}.heading-wrapper.__jsx-style-dynamic-selector{width:70%;border-radius:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;overflow:hidden;height:45px;margin-bottom:20%;box-shadow:var(--neomorphic-box-shadow);background:var(--neomorphic-white);}.heading-wrapper.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{width:50%;box-shadow:var(--neomorphic-box-shadow);background:var(--neomorphic-white);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;height:100%;cursor:pointer;}.container.__jsx-style-dynamic-selector .heading-wrapper.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{font-weight:900;text-transform:uppercase;font-size:1rem;text-align:center;text-shadow:var(--neomorphic-text-shadow);}.signup.__jsx-style-dynamic-selector{color:".concat(!props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", ";-webkit-transition:color 0.7s linear;transition:color 0.7s linear;}.login.__jsx-style-dynamic-selector{color:").concat(props.loginButton.isSelected ? "black" : "rgba(0,0,0,0.3)", ";-webkit-transition:color 0.5s linear;transition:color 0.5s linear;}.container.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:70%;height:40px;text-transform:uppercase;border:none;outline:none;cursor:pointer;font-size:0.7rem;font-weight:900;box-shadow:var(--neomorphic-box-shadow);background:var(--neomorphic-white);color:black;border-radius:50px;-webkit-transition:all 0.27s linear;transition:all 0.27s linear;position:absolute;bottom:15%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.container.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{box-shadow:var(--hover-neomorphic-box-shadow);}form.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{width:80%;min-width:200px;height:40px;border:none;outline:0;border-radius:50px;font-size:0.8rem;padding:0px 25px;background-color:var(--neomorphic-white);box-shadow:var(--input-neomorphic-box-shadow);margin:17px 0;font-weight:900;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:focus{box-shadow:var(--input-focus-neomorphic-box-shadow);text-shadow:1px 1px 0 #FFF;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-webkit-input-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-moz-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:-ms-input-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}a.forgot-password.__jsx-style-dynamic-selector{font-size:0.9rem;position:absolute;right:15%;top:67%;color:rgba(0,0,0,0.3);-webkit-text-decoration:none;text-decoration:none;font-style:italic;text-shadow:1px 1px 0 #FFF;font-weight:900;-webkit-transition:all 0.27s linear;transition:all 0.27s linear;}a.forgot-password.__jsx-style-dynamic-selector:hover{color:black;}@media only screen and (max-width:500px){.container.__jsx-style-dynamic-selector{width:96%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWIgcHJvamVjdHNcXFdoYXRzQXBwVVxcY2xpZW50XFxjb21wb25lbnRzXFxMb2dpbkJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRG9CLEFBSTRELEFBZXpCLEFBY0EsQUFhTSxBQVVpQixBQU1HLEFBUTFCLEFBb0JvQyxBQUluQyxBQU9ELEFBaUIyQyxBQUtwQyxBQVFELEFBYUwsQUFNRyxVQWxJSyxBQWNxQixBQXFDNUIsQUErQkksQUFrRGhCLENBekRhLENBa0RsQixJQWxHOEIsQ0E2RWEsQUFRckIsS0E1RFEsSUErQmIsR0FqRkMsTUFqQkQsQUFvRGUsQUFNRSxBQXNFcEIsR0E3QkcsR0F4REcsSUFzRlIsQ0EzQ1gsQ0FyRmlCLEFBbUVELEdBdEN1QixBQXNFekIsRUFjaUIsQ0FnQk4sQ0FWTCxFQTVFRSxHQXlCTCxDQW5FK0IsQUFtR3pCLFVBb0J2QixFQW5EbUIsRUF6QjJCLENBc0Z0QixJQTdCSCxBQWFyQixNQXBGaUIsQUE0RE8sRUFwQkgsU0FnQ0EsS0FqRHJCLEFBTUEsRUExQzJCLENBZkwsQUFxRUYsU0FnQ3lCLEdBekQ3QyxJQTBCNEMsRUFyRXJCLEdBZ0lGLGdCQS9ISixFQWdJYSxXQTVCcUIsS0F6RXhCLENBMENZLFVBNERwQixZQTFDTyxJQTJDSyxTQTVEZixLQStCRSxFQXZGTSxLQXlERCxPQStCSCxDQXJHTSxXQXVFTSxJQWdDaEMsb0JBMkJELFFBdkd5QixFQTREeEIsOEJBZnNCLEdBdkVDLE1BYUgsU0EyREwsT0ExREMsSUEyREgsUUExRFMsQ0EyRFMsaUJBMURhLFVBVzVCLFlBQ0csZUFDbkIsR0FadUMsQ0FoQkssa0NBaUI1QyxDQXlEQSxLQXpFc0Isa0JBRXRCIiwiZmlsZSI6IkQ6XFx3ZWIgcHJvamVjdHNcXFdoYXRzQXBwVVxcY2xpZW50XFxjb21wb25lbnRzXFxMb2dpbkJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IEdJbnB1dCBmcm9tICcuL0dJbnB1dCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgTG9naW5Cb3ggPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGF1dGhCdXR0b25UZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLmxvZ2luQnV0dG9uLmlzU2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBsb2dpbmA7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYHNpZ251cGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlTG9naW5TaWdudXBCdXR0b25DbGljaygnbG9naW4nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dpblwiPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUxvZ2luU2lnbnVwQnV0dG9uQ2xpY2soJ3NpZ251cCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZ251cFwiPnNpZ251cDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHSW5wdXQgbElzU2VsZWN0ZWQ9e3Byb3BzLmxvZ2luQnV0dG9uLmlzU2VsZWN0ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0ge3Byb3BzLmxvZ2luQnV0dG9uLmlzU2VsZWN0ZWQgPyBcIkVudGVyIGVtYWlsIG9yIHVzZXJuYW1lXCIgOiBcIkVudGVyIHVzZXJuYW1lXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9yZ290LXBhc3N3b3JkXCI+Zm9yZ290IHBhc3N3b3JkPzwvYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge2F1dGhCdXR0b25UZXh0KCl9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbW9ycGhpYy13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDVweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tbmVvbW9ycGhpYy1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tbmVvbW9ycGhpYy1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbW9ycGhpYy13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGluZy13cmFwcGVyIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW5lb21vcnBoaWMtYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW5lb21vcnBoaWMtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciAuaGVhZGluZy13cmFwcGVyIGRpdiBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogdmFyKC0tbmVvbW9ycGhpYy10ZXh0LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZ251cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHshcHJvcHMubG9naW5CdXR0b24uaXNTZWxlY3RlZCA/IGBibGFja2AgOiBgcmdiYSgwLDAsMCwwLjMpYH07XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjdzIGxpbmVhcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogICR7cHJvcHMubG9naW5CdXR0b24uaXNTZWxlY3RlZCA/IGBibGFja2AgOiBgcmdiYSgwLDAsMCwwLjMpYH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgbGluZWFyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW5lb21vcnBoaWMtYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW5lb21vcnBoaWMtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI3cyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWhvdmVyLW5lb21vcnBoaWMtYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lb21vcnBoaWMtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAgdmFyKC0taW5wdXQtbmVvbW9ycGhpYy1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxN3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3JtIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogIHZhcigtLWlucHV0LWZvY3VzLW5lb21vcnBoaWMtYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICBhLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA2NyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI3cyBsaW5lYXI7IFxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIGEuZm9yZ290LXBhc3N3b3JkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgICAgICAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Cb3g7Il19 */\n/*@ sourceURL=D:\\\\web projects\\\\WhatsAppU\\\\client\\\\components\\\\LoginBox.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginBox);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_LoginBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/LoginBox */ "./components/LoginBox.js");
var _jsxFileName = "D:\\web projects\\WhatsAppU\\client\\pages\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Login = /*#__PURE__*/function (_Component) {
  _inherits(Login, _Component);

  var _super = _createSuper(Login);

  function Login() {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleLoginSignupButtonClick", function (value) {
      if (value === 'login') {
        if (_this.state.loginButton.isSelected === true) {
          return;
        } else {
          _this.setState(function (prevState) {
            return {
              loginButton: _objectSpread({}, prevState.loginButton, {
                // keep all other key-value pairs
                isSelected: true // update the value of specific key

              })
            };
          });
        }
      } else if (value === 'signup') {
        if (_this.state.loginButton.isSelected === true) {
          _this.setState(function (prevState) {
            return {
              loginButton: _objectSpread({}, prevState.loginButton, {
                // keep all other key-value pairs
                isSelected: false // update the value of specific key

              })
            };
          });
        } else {
          return;
        }
      }
    });

    _this.state = {
      loginButton: {
        isSelected: false
      }
    };
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-1106836911" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx(_components_LoginBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
        loginButton: this.state.loginButton,
        handleLoginSignupButtonClick: this.handleLoginSignupButtonClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "1106836911",
        __self: this
      }, ".container.jsx-1106836911{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--neomorphic-white);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWIgcHJvamVjdHNcXFdoYXRzQXBwVVxcY2xpZW50XFxwYWdlc1xcbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRxQixBQUl3QyxXQUNDLFlBQ0MsMEVBQ1UsbUdBQ0osNkZBQ2dCLG1DQUN2QyIsImZpbGUiOiJEOlxcd2ViIHByb2plY3RzXFxXaGF0c0FwcFVcXGNsaWVudFxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IExvZ2luQm94IGZyb20gJy4vLi4vY29tcG9uZW50cy9Mb2dpbkJveCc7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9naW5CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTG9naW5TaWdudXBCdXR0b25DbGljayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmKHZhbHVlID09PSAnbG9naW4nKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUubG9naW5CdXR0b24uaXNTZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luQnV0dG9uOiB7ICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gdXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5sb2dpbkJ1dHRvbiwgICAgLy8ga2VlcCBhbGwgb3RoZXIga2V5LXZhbHVlIHBhaXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHRydWUgICAgICAgLy8gdXBkYXRlIHRoZSB2YWx1ZSBvZiBzcGVjaWZpYyBrZXlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2UgaWYodmFsdWU9PT0gJ3NpZ251cCcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUubG9naW5CdXR0b24uaXNTZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luQnV0dG9uOiB7ICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gdXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUubG9naW5CdXR0b24sICAgIC8vIGtlZXAgYWxsIG90aGVyIGtleS12YWx1ZSBwYWlyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UgICAgICAvLyB1cGRhdGUgdGhlIHZhbHVlIG9mIHNwZWNpZmljIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5Cb3ggXHJcbiAgICAgICAgICAgICAgICBsb2dpbkJ1dHRvbiA9IHt0aGlzLnN0YXRlLmxvZ2luQnV0dG9ufSBcclxuICAgICAgICAgICAgICAgIGhhbmRsZUxvZ2luU2lnbnVwQnV0dG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVMb2dpblNpZ251cEJ1dHRvbkNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uZW9tb3JwaGljLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICBcclxuICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXX0= */\n/*@ sourceURL=D:\\\\web projects\\\\WhatsAppU\\\\client\\\\pages\\\\login.js */")));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\web projects\WhatsAppU\client\pages\login.js */"./pages/login.js");


/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map