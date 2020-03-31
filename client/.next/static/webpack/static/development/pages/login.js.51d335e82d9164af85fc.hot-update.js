webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_LoginBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/LoginBox */ "./components/LoginBox.js");







var _jsxFileName = "D:\\web projects\\WhatsAppU\\client\\pages\\login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Login = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  var _super = _createSuper(Login);

  function Login() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleLoginSignupButtonClick", function (value) {
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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      }, __jsx(_components_LoginBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        loginButton: this.state.loginButton,
        handleLoginSignupButtonClick: this.handleLoginSignupButtonClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1106836911",
        __self: this
      }, ".container.jsx-1106836911{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--neomorphic-white);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWIgcHJvamVjdHNcXFdoYXRzQXBwVVxcY2xpZW50XFxwYWdlc1xcbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRxQixBQUl3QyxXQUNDLFlBQ0MsMEVBQ1UsbUdBQ0osNkZBQ2dCLG1DQUN2QyIsImZpbGUiOiJEOlxcd2ViIHByb2plY3RzXFxXaGF0c0FwcFVcXGNsaWVudFxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBMb2dpbkJveCBmcm9tICcuLy4uL2NvbXBvbmVudHMvTG9naW5Cb3gnO1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvZ2luQnV0dG9uOiB7XHJcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxvZ2luU2lnbnVwQnV0dG9uQ2xpY2sgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gJ2xvZ2luJykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmxvZ2luQnV0dG9uLmlzU2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dpbkJ1dHRvbjogeyAgICAgICAgICAgICAgICAgICAvLyBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUubG9naW5CdXR0b24sICAgIC8vIGtlZXAgYWxsIG90aGVyIGtleS12YWx1ZSBwYWlyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiB0cnVlICAgICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgb2Ygc3BlY2lmaWMga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlIGlmKHZhbHVlPT09ICdzaWdudXAnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmxvZ2luQnV0dG9uLmlzU2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpbkJ1dHRvbjogeyAgICAgICAgICAgICAgICAgICAvLyBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLmxvZ2luQnV0dG9uLCAgICAvLyBrZWVwIGFsbCBvdGhlciBrZXktdmFsdWUgcGFpcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlICAgICAgLy8gdXBkYXRlIHRoZSB2YWx1ZSBvZiBzcGVjaWZpYyBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPExvZ2luQm94IFxyXG4gICAgICAgICAgICAgICAgbG9naW5CdXR0b24gPSB7dGhpcy5zdGF0ZS5sb2dpbkJ1dHRvbn0gXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVMb2dpblNpZ251cEJ1dHRvbkNsaWNrID0ge3RoaXMuaGFuZGxlTG9naW5TaWdudXBCdXR0b25DbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbW9ycGhpYy13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgXHJcbiAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il19 */\n/*@ sourceURL=D:\\\\web projects\\\\WhatsAppU\\\\client\\\\pages\\\\login.js */")));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.51d335e82d9164af85fc.hot-update.js.map