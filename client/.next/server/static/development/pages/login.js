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
var _jsxFileName = "D:\\web projects\\Chat App\\client\\components\\GInput.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class GInput extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.myElement = null;
  }

  render() {
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
      in: !this.props.lIsSelected,
      timeout: 700,
      addEndListener: (node, done) => {
        if (this.props.lIsSelected) {
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
      ref: input => this.myElement = input,
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
    }, "input.jsx-2390958154{width:80%;min-width:200px;height:40px;border:none;outline:0;border-radius:50px;font-size:0.8rem;padding:0px 25px;background-color:var(--neomorphic-white);box-shadow:var(--input-neomorphic-box-shadow);margin:17px 0;font-weight:900;}input.jsx-2390958154:focus{box-shadow:var(--input-focus-neomorphic-box-shadow);text-shadow:1px 1px 0 #FFF;}input.jsx-2390958154::-webkit-input-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}input.jsx-2390958154::-moz-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}input.jsx-2390958154:-ms-input-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}input.jsx-2390958154::placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWIgcHJvamVjdHNcXENoYXQgQXBwXFxjbGllbnRcXGNvbXBvbmVudHNcXEdJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3FCLEFBR21DLEFBZ0IyQyxBQUtwQyxVQXBCRCxPQXFCc0IsU0FwQjFCLFlBQ0EsWUFDRixFQWFpQixFQU1YLE1BbEJHLFVBbUJ2QixTQWxCcUIsQUFZckIsaUJBWHFCLGlCQUN3Qix5Q0FDTSw4Q0FDakMsY0FDRSxnQkFFcEIiLCJmaWxlIjoiRDpcXHdlYiBwcm9qZWN0c1xcQ2hhdCBBcHBcXGNsaWVudFxcY29tcG9uZW50c1xcR0lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcblxyXG5jbGFzcyBHSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm15RWxlbWVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gIFxyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICA8VHJhbnNpdGlvbiBcclxuICAgICAgICAgICAgICAgbW91bnRPbkVudGVyXHJcbiAgICAgICAgICAgICAgIHVubW91bnRPbkV4aXRcclxuICAgICAgICAgICAgICAgaW49eyF0aGlzLnByb3BzLmxJc1NlbGVjdGVkfSBcclxuICAgICAgICAgICAgICAgdGltZW91dD17NzAwfVxyXG4gICAgICAgICAgICAgICBhZGRFbmRMaXN0ZW5lciA9IHtcclxuICAgICAgICAgICAgICAgICAgIChub2RlLCBkb25lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5sSXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnc2FwLnRvKG5vZGUsIDAuNywge3NjYWxlWTogMCwgb3BhY2l0eTogMCwgb25Db21wbGV0ZTogZG9uZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnc2FwLmZyb20obm9kZSwgMC43LCB7c2NhbGVZOiAwLCBvcGFjaXR5OiAwLCBvbkNvbXBsZXRlOiBkb25lfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dCA9PiB0aGlzLm15RWxlbWVudCA9IGlucHV0fSAgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbCBhZGRyZXNzXCIvPlxyXG4gICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lb21vcnBoaWMtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAgdmFyKC0taW5wdXQtbmVvbW9ycGhpYy1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxN3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogIHZhcigtLWlucHV0LWZvY3VzLW5lb21vcnBoaWMtYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICApO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHSW5wdXQ7Il19 */\n/*@ sourceURL=D:\\\\web projects\\\\Chat App\\\\client\\\\components\\\\GInput.js */"));
  }

}

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
var _jsxFileName = "D:\\web projects\\Chat App\\client\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Layout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1135387399",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;900&display=swap');*{box-sizing:border-box;margin:0;padding:0;}html,body{width:100%;height:100%;}:root{--main-green-color:#25D366;--side-green-color:#5BD9AB;--neomorphic-white:#e8e8e8;--neomorphic-box-shadow:7px 7px 15px #bbcfda,-4px -4px 13px #ffffff, inset 4px 4px 8px rgba(209,217,230,0.35), inset -8px -8px 8px rgba(255,255,255,0.3);--hover-neomorphic-box-shadow:4px 2px 18px #bbcfda, -4px -4px 13px #ffffff, inset 6px 6px 16px rgba(209,217,230,0.8), inset -8px -8px 8px rgba(255,255,255,0.2);--input-neomorphic-box-shadow:inset 1px 1px 2px #BABECC, inset -1px -1px 2px white;--input-focus-neomorphic-box-shadow:inset 2px 2px 5px #BABECC, inset -5px -5px 10px var(--neomorphic-white);--neomorphic-text-shadow:1px 1px 0 #fff;}body{font-family:'Nunito Sans',sans-serif;}#__next{width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWIgcHJvamVjdHNcXENoYXQgQXBwXFxjbGllbnRcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTb0IsQUFFdUgsQUFHM0UsQUFPWCxBQUtnQixBQW9CVSxBQUsxQixXQTdCQyxBQThCQSxXQXJDSCxDQVFiLEFBOEJBLElBMUIrQixJQVhqQixNQStCWixJQTdCRixhQVUrQiwyQkFHaUIseUpBSUEsZ0tBRW5CLG1GQUltQiw0R0FDSCx3Q0FDN0MiLCJmaWxlIjoiRDpcXHdlYiBwcm9qZWN0c1xcQ2hhdCBBcHBcXGNsaWVudFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOndnaHRAMjAwOzQwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgaHRtbCwgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC0tbWFpbi1ncmVlbi1jb2xvcjogIzI1RDM2NjtcclxuICAgICAgICAgICAgICAgICAgICAgLS1zaWRlLWdyZWVuLWNvbG9yOiAjNUJEOUFCO1xyXG4gICAgICAgICAgICAgICAgICAgICAtLW5lb21vcnBoaWMtd2hpdGU6ICNlOGU4ZTg7XHJcbiAgICAgICAgICAgICAgICAgICAgIC0tbmVvbW9ycGhpYy1ib3gtc2hhZG93OiA3cHggN3B4IDE1cHggI2JiY2ZkYSwgLTRweCAtNHB4IDEzcHggI2ZmZmZmZiwgXHJcbiAgICAgICAgICAgICAgICAgICAgIGluc2V0IDRweCA0cHggOHB4IHJnYmEoMjA5LCAyMTcsIDIzMCwgMC4zNSksIFxyXG4gICAgICAgICAgICAgICAgICAgICBpbnNldCAtOHB4IC04cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgLS1ob3Zlci1uZW9tb3JwaGljLWJveC1zaGFkb3c6IDRweCAycHggMThweCAjYmJjZmRhLCBcclxuICAgICAgICAgICAgICAgICAgICAgLTRweCAtNHB4IDEzcHggI2ZmZmZmZiwgXHJcbiAgICAgICAgICAgICAgICAgICAgIGluc2V0IDZweCA2cHggMTZweCByZ2JhKDIwOSwgMjE3LCAyMzAsIDAuOCksIFxyXG4gICAgICAgICAgICAgICAgICAgICBpbnNldCAtOHB4IC04cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgLS1pbnB1dC1uZW9tb3JwaGljLWJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICNCQUJFQ0MsIFxyXG4gICAgICAgICAgICAgICAgICAgICBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgLS1pbnB1dC1mb2N1cy1uZW9tb3JwaGljLWJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNXB4ICNCQUJFQ0MsIFxyXG4gICAgICAgICAgICAgICAgICAgICBpbnNldCAtNXB4IC01cHggMTBweCB2YXIoLS1uZW9tb3JwaGljLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgLS1uZW9tb3JwaGljLXRleHQtc2hhZG93OiAgMXB4IDFweCAwICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICNfX25leHQge1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=D:\\\\web projects\\\\Chat App\\\\client\\\\components\\\\Layout.js */"));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GInput */ "./components/GInput.js");
var _jsxFileName = "D:\\web projects\\Chat App\\client\\components\\LoginBox.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const LoginBox = props => {
  const authButtonText = () => {
    if (props.loginButton.isSelected === true) {
      return `login`;
    } else {
      return `signup`;
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]) + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]) + " " + "heading-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    onClick: () => props.handleLoginSignupButtonClick('login'),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]) + " " + "login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "Login")), __jsx("div", {
    onClick: () => props.handleLoginSignupButtonClick('signup'),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]) + " " + "signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "signup"))), __jsx("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 18
    }
  }, __jsx(_GInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lIsSelected: props.loginButton.isSelected,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("input", {
    type: "text",
    placeholder: props.loginButton.isSelected ? "Enter email or username" : "Enter username",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 22
    }
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 22
    }
  })), __jsx("a", {
    href: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]) + " " + "forgot-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 18
    }
  }, "forgot password?"), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3857176787", [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, authButtonText()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3857176787",
    dynamic: [!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`, props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`],
    __self: undefined
  }, `.container.__jsx-style-dynamic-selector{background:var(--neomorphic-white);width:350px;height:550px;box-shadow:0px 0px 25px 5px rgba(0,0,0,0.2);padding:30px 10px;border-radius:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:var(--neomorphic-box-shadow);position:relative;}.heading-wrapper.__jsx-style-dynamic-selector{width:70%;border-radius:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;overflow:hidden;height:45px;margin-bottom:20%;box-shadow:var(--neomorphic-box-shadow);background:var(--neomorphic-white);}.heading-wrapper.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{width:50%;box-shadow:var(--neomorphic-box-shadow);background:var(--neomorphic-white);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;height:100%;cursor:pointer;}.container.__jsx-style-dynamic-selector .heading-wrapper.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{font-weight:900;text-transform:uppercase;font-size:1rem;text-align:center;text-shadow:var(--neomorphic-text-shadow);}.signup.__jsx-style-dynamic-selector{color:${!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`};-webkit-transition:color 0.7s linear;transition:color 0.7s linear;}.login.__jsx-style-dynamic-selector{color:${props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`};-webkit-transition:color 0.5s linear;transition:color 0.5s linear;}.container.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:70%;height:40px;text-transform:uppercase;border:none;outline:none;cursor:pointer;font-size:0.7rem;font-weight:900;box-shadow:var(--neomorphic-box-shadow);background:var(--neomorphic-white);color:black;border-radius:50px;-webkit-transition:all 0.27s linear;transition:all 0.27s linear;position:absolute;bottom:15%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.container.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{box-shadow:var(--hover-neomorphic-box-shadow);}form.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{width:80%;min-width:200px;height:40px;border:none;outline:0;border-radius:50px;font-size:0.8rem;padding:0px 25px;background-color:var(--neomorphic-white);box-shadow:var(--input-neomorphic-box-shadow);margin:17px 0;font-weight:900;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:focus{box-shadow:var(--input-focus-neomorphic-box-shadow);text-shadow:1px 1px 0 #FFF;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-webkit-input-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-moz-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:-ms-input-placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::placeholder{font-size:0.8rem;font-family:'Nunito Sans',sans-serif;font-weight:400;}a.forgot-password.__jsx-style-dynamic-selector{font-size:0.9rem;position:absolute;right:15%;top:67%;color:rgba(0,0,0,0.3);-webkit-text-decoration:none;text-decoration:none;font-style:italic;text-shadow:1px 1px 0 #FFF;font-weight:900;-webkit-transition:all 0.27s linear;transition:all 0.27s linear;}a.forgot-password.__jsx-style-dynamic-selector:hover{color:black;}@media only screen and (max-width:500px){.container.__jsx-style-dynamic-selector{width:96%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWIgcHJvamVjdHNcXENoYXQgQXBwXFxjbGllbnRcXGNvbXBvbmVudHNcXExvZ2luQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Eb0IsQUFJNEQsQUFlekIsQUFjQSxBQWFNLEFBVWlCLEFBTUcsQUFRMUIsQUFvQm9DLEFBSW5DLEFBT0QsQUFpQjJDLEFBS3BDLEFBUUQsQUFhTCxBQU1HLFVBbElLLEFBY3FCLEFBcUM1QixBQStCSSxBQWtEaEIsQ0F6RGEsQ0FrRGxCLElBbEc4QixDQTZFYSxBQVFyQixLQTVEUSxJQStCYixHQWpGQyxNQWpCRCxBQW9EZSxBQU1FLEFBc0VwQixHQTdCRyxHQXhERyxJQXNGUixDQTNDWCxDQXJGaUIsQUFtRUQsR0F0Q3VCLEFBc0V6QixFQWNpQixDQWdCTixDQVZMLEVBNUVFLEdBeUJMLENBbkUrQixBQW1HekIsVUFvQnZCLEVBbkRtQixFQXpCMkIsQ0FzRnRCLElBN0JILEFBYXJCLE1BcEZpQixBQTRETyxFQXBCSCxTQWdDQSxLQWpEckIsQUFNQSxFQTFDMkIsQ0FmTCxBQXFFRixTQWdDeUIsR0F6RDdDLElBMEI0QyxFQXJFckIsR0FnSUYsZ0JBL0hKLEVBZ0lhLFdBNUJxQixLQXpFeEIsQ0EwQ1ksVUE0RHBCLFlBMUNPLElBMkNLLFNBNURmLEtBK0JFLEVBdkZNLEtBeURELE9BK0JILENBckdNLFdBdUVNLElBZ0NoQyxvQkEyQkQsUUF2R3lCLEVBNER4Qiw4QkFmc0IsR0F2RUMsTUFhSCxTQTJETCxPQTFEQyxJQTJESCxRQTFEUyxDQTJEUyxpQkExRGEsVUFXNUIsWUFDRyxlQUNuQixHQVp1QyxDQWhCSyxrQ0FpQjVDLENBeURBLEtBekVzQixrQkFFdEIiLCJmaWxlIjoiRDpcXHdlYiBwcm9qZWN0c1xcQ2hhdCBBcHBcXGNsaWVudFxcY29tcG9uZW50c1xcTG9naW5Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBHSW5wdXQgZnJvbSAnLi9HSW5wdXQnO1xyXG5cclxuXHJcblxyXG5jb25zdCBMb2dpbkJveCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgYXV0aEJ1dHRvblRleHQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYocHJvcHMubG9naW5CdXR0b24uaXNTZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYGxvZ2luYDtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgc2lnbnVwYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVMb2dpblNpZ251cEJ1dHRvbkNsaWNrKCdsb2dpbicpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlTG9naW5TaWdudXBCdXR0b25DbGljaygnc2lnbnVwJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2lnbnVwXCI+c2lnbnVwPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdJbnB1dCBsSXNTZWxlY3RlZD17cHJvcHMubG9naW5CdXR0b24uaXNTZWxlY3RlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSB7cHJvcHMubG9naW5CdXR0b24uaXNTZWxlY3RlZCA/IFwiRW50ZXIgZW1haWwgb3IgdXNlcm5hbWVcIiA6IFwiRW50ZXIgdXNlcm5hbWVcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb3Jnb3QtcGFzc3dvcmRcIj5mb3Jnb3QgcGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7YXV0aEJ1dHRvblRleHQoKX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uZW9tb3JwaGljLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggNXB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1uZW9tb3JwaGljLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmctd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1uZW9tb3JwaGljLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uZW9tb3JwaGljLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nLXdyYXBwZXIgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tbmVvbW9ycGhpYy1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbW9ycGhpYy13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIC5oZWFkaW5nLXdyYXBwZXIgZGl2IGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiB2YXIoLS1uZW9tb3JwaGljLXRleHQtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lnbnVwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkeyFwcm9wcy5sb2dpbkJ1dHRvbi5pc1NlbGVjdGVkID8gYGJsYWNrYCA6IGByZ2JhKDAsMCwwLDAuMylgfTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuN3MgbGluZWFyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgJHtwcm9wcy5sb2dpbkJ1dHRvbi5pc1NlbGVjdGVkID8gYGJsYWNrYCA6IGByZ2JhKDAsMCwwLDAuMylgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBsaW5lYXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tbmVvbW9ycGhpYy1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbW9ycGhpYy13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjdzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taG92ZXItbmVvbW9ycGhpYy1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3JtIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmVvbW9ycGhpYy13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICB2YXIoLS1pbnB1dC1uZW9tb3JwaGljLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE3cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0gaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAgdmFyKC0taW5wdXQtZm9jdXMtbmVvbW9ycGhpYy1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgIGEuZm9yZ290LXBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDY3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjdzIGxpbmVhcjsgXHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgYS5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICAgICAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkJveDsiXX0= */
/*@ sourceURL=D:\\web projects\\Chat App\\client\\components\\LoginBox.js */`));
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
var _jsxFileName = "D:\\web projects\\Chat App\\client\\pages\\login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Login extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "handleLoginSignupButtonClick", value => {
      if (value === 'login') {
        if (this.state.loginButton.isSelected === true) {
          return;
        } else {
          this.setState(prevState => ({
            loginButton: _objectSpread({}, prevState.loginButton, {
              // keep all other key-value pairs
              isSelected: true // update the value of specific key

            })
          }));
        }
      } else if (value === 'signup') {
        if (this.state.loginButton.isSelected === true) {
          this.setState(prevState => ({
            loginButton: _objectSpread({}, prevState.loginButton, {
              // keep all other key-value pairs
              isSelected: false // update the value of specific key

            })
          }));
        } else {
          return;
        }
      }
    });

    this.state = {
      loginButton: {
        isSelected: false
      }
    };
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1106836911" + " " + "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx(_components_LoginBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      loginButton: this.state.loginButton,
      handleLoginSignupButtonClick: this.handleLoginSignupButtonClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1106836911",
      __self: this
    }, ".container.jsx-1106836911{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--neomorphic-white);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWIgcHJvamVjdHNcXENoYXQgQXBwXFxjbGllbnRcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRHFCLEFBSXdDLFdBQ0MsWUFDQywwRUFDVSxtR0FDSiw2RkFDZ0IsbUNBQ3ZDIiwiZmlsZSI6IkQ6XFx3ZWIgcHJvamVjdHNcXENoYXQgQXBwXFxjbGllbnRcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBMb2dpbkJveCBmcm9tICcuLy4uL2NvbXBvbmVudHMvTG9naW5Cb3gnO1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvZ2luQnV0dG9uOiB7XHJcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxvZ2luU2lnbnVwQnV0dG9uQ2xpY2sgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gJ2xvZ2luJykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmxvZ2luQnV0dG9uLmlzU2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dpbkJ1dHRvbjogeyAgICAgICAgICAgICAgICAgICAvLyBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUubG9naW5CdXR0b24sICAgIC8vIGtlZXAgYWxsIG90aGVyIGtleS12YWx1ZSBwYWlyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiB0cnVlICAgICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgb2Ygc3BlY2lmaWMga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlIGlmKHZhbHVlPT09ICdzaWdudXAnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmxvZ2luQnV0dG9uLmlzU2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpbkJ1dHRvbjogeyAgICAgICAgICAgICAgICAgICAvLyBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLmxvZ2luQnV0dG9uLCAgICAvLyBrZWVwIGFsbCBvdGhlciBrZXktdmFsdWUgcGFpcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlICAgICAgLy8gdXBkYXRlIHRoZSB2YWx1ZSBvZiBzcGVjaWZpYyBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPExvZ2luQm94IFxyXG4gICAgICAgICAgICAgICAgbG9naW5CdXR0b24gPSB7dGhpcy5zdGF0ZS5sb2dpbkJ1dHRvbn0gXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVMb2dpblNpZ251cEJ1dHRvbkNsaWNrID0ge3RoaXMuaGFuZGxlTG9naW5TaWdudXBCdXR0b25DbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbW9ycGhpYy13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgXHJcbiAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il19 */\n/*@ sourceURL=D:\\\\web projects\\\\Chat App\\\\client\\\\pages\\\\login.js */")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\web projects\Chat App\client\pages\login.js */"./pages/login.js");


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