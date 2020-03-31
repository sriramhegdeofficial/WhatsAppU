webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/LoginBox.js":
/*!********************************!*\
  !*** ./components/LoginBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GInput */ "./components/GInput.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=login.js.a3c39c8bee1d5d18cb74.hot-update.js.map