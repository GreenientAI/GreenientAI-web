"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MainNavbar.tsx":
/*!***********************************!*\
  !*** ./components/MainNavbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar MainNavbar = function(param) {\n    var title = param.title;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n            bg: \"dark\",\n            __source: {\n                fileName: \"/Users/azamahmed/Desktop/trading-app/web/client/components/MainNavbar.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                __source: {\n                    fileName: \"/Users/azamahmed/Desktop/trading-app/web/client/components/MainNavbar.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {\n                        href: \"#home\",\n                        style: {\n                            color: 'lime',\n                            fontWeight: 'bold'\n                        },\n                        __source: {\n                            fileName: \"/Users/azamahmed/Desktop/trading-app/web/client/components/MainNavbar.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: title\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                        className: \"me-auto\",\n                        __source: {\n                            fileName: \"/Users/azamahmed/Desktop/trading-app/web/client/components/MainNavbar.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                            href: \"#home\",\n                            __source: {\n                                fileName: \"/Users/azamahmed/Desktop/trading-app/web/client/components/MainNavbar.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"View Stocks\"\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = MainNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNavbar);\nvar _c;\n$RefreshReg$(_c, \"MainNavbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQytCOztBQU14RCxHQUFLLENBQUNJLFVBQVUsR0FBOEIsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLO0lBQ3BELE1BQU07dUZBRURKLG1EQUFNO1lBQUNLLEVBQUUsRUFBQyxDQUFNOzs7Ozs7OzRGQUNkSCxzREFBUzs7Ozs7Ozs7eUZBQ1BGLHlEQUFZO3dCQUFDTyxJQUFJLEVBQUMsQ0FBTzt3QkFBQ0MsS0FBSyxFQUFFLENBQUM7NEJBQUNDLEtBQUssRUFBRSxDQUFNOzRCQUFFQyxVQUFVLEVBQUUsQ0FBTTt3QkFBQyxDQUFDOzs7Ozs7O2tDQUFHTixLQUFLOzt5RkFDOUVILGdEQUFHO3dCQUFDVSxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozt1R0FDdkJWLHFEQUFROzRCQUFDTSxJQUFJLEVBQUMsQ0FBTzs7Ozs7OztzQ0FBQyxDQUFXOzs7Ozs7O0FBTTVDLENBQUM7S0FiS0osVUFBVTtBQWVoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbk5hdmJhci50c3g/OWZhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW50ZXJmYWNlIE1haW5OYXZiYXJQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbn1cblxuY29uc3QgTWFpbk5hdmJhcjogUmVhY3QuRkM8TWFpbk5hdmJhclByb3BzPiA9ICh7IHRpdGxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciBiZz1cImRhcmtcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiIHN0eWxlPXt7IGNvbG9yOiAnbGltZScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57dGl0bGV9PC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiPlZpZXcgU3RvY2tzPC9OYXYuTGluaz5cbiAgICA8L05hdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L05hdmJhcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZiYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2YmFyIiwiTmF2IiwiQ29udGFpbmVyIiwiTWFpbk5hdmJhciIsInRpdGxlIiwiYmciLCJCcmFuZCIsImhyZWYiLCJzdHlsZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImNsYXNzTmFtZSIsIkxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainNavbar.tsx\n");

/***/ })

});