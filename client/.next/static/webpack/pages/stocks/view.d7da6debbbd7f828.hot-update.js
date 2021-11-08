"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stocks/view",{

/***/ "./pages/stocks/view.tsx":
/*!*******************************!*\
  !*** ./pages/stocks/view.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _throw(e) {\n    throw e;\n}\nvar _s = $RefreshSig$();\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function() {\n    return __webpack_require__.e(/*! import() */ \"components_Chart_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Chart */ \"./components/Chart.tsx\"));\n}, {\n    loadableGenerated: {\n        webpack: function() {\n            return [\n                /*require.resolve*/(/*! ../../components/Chart */ \"./components/Chart.tsx\")\n            ];\n        },\n        modules: [\n            \"stocks/view.tsx -> \" + \"../../components/Chart\"\n        ]\n    },\n    ssr: false\n});\n_c1 = Chart;\nvar View = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Get historical data from yahoo finance api using axios\n        axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://query1.finance.yahoo.com/v8/finance/chart/AAPL?region=US&lang=en-US&interval=1wk&useYfid=true&range=max&.tsrc=finance').then(function(res) {\n            setData(res.data.chart.result[0].timestamp[0]);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: JSON.stringify(data)\n    }));\n};\n_s(View, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c2 = View;\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c1, \"Chart\");\n$RefreshReg$(_c2, \"View\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdG9ja3Mvdmlldy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDaEI7QUFDVDs7Ozs7QUFDekIsR0FBSyxDQUFDSyxLQUFLLEdBQUdGLG1EQUFPLE1BQUMsUUFBUTtJQUFGRyxNQUFNLENBQU5BLHlLQUErQjs7Ozs7Ozs7Ozs7O0lBQ3pEQyxHQUFHLEVBQUUsS0FBSzs7O0FBR1osR0FBSyxDQUFDQyxJQUFJLEdBQWEsUUFBUSxRQUFDLENBQUM7OztJQUMvQixHQUFLLENBQW1CUCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTVCUSxJQUFJLEdBQWFSLEdBQVksS0FBdkJTLE9BQU8sR0FBSVQsR0FBWTtJQUNwQ0MsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUF5RDtRQUN6REUsZ0RBQVMsQ0FBQyxDQUErSCxnSUFDdElRLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQztZQUNaSCxPQUFPLENBQUNHLEdBQUcsQ0FBQ0osSUFBSSxDQUFDSyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUVDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFFTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTTtrQkFFREMsSUFBSSxDQUFDQyxTQUFTLENBQUNULElBQUk7O0FBRzFCLENBQUM7R0FoQktELElBQUk7TUFBSkEsSUFBSTtBQWtCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0b2Nrcy92aWV3LnRzeD9mMTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL0NoYXJ0JyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBWaWV3OiBSZWFjdC5GQyA9ICh7IH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEdldCBoaXN0b3JpY2FsIGRhdGEgZnJvbSB5YWhvbyBmaW5hbmNlIGFwaSB1c2luZyBheGlvc1xuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9xdWVyeTEuZmluYW5jZS55YWhvby5jb20vdjgvZmluYW5jZS9jaGFydC9BQVBMP3JlZ2lvbj1VUyZsYW5nPWVuLVVTJmludGVydmFsPTF3ayZ1c2VZZmlkPXRydWUmcmFuZ2U9bWF4Ji50c3JjPWZpbmFuY2UnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgc2V0RGF0YShyZXMuZGF0YS5jaGFydC5yZXN1bHRbMF0udGltZXN0YW1wWzBdKTtcbiAgICAgIH0pXG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtKU09OLnN0cmluZ2lmeShkYXRhKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImR5bmFtaWMiLCJheGlvcyIsIkNoYXJ0IiwiaW1wb3J0Iiwic3NyIiwiVmlldyIsImRhdGEiLCJzZXREYXRhIiwiZ2V0IiwidGhlbiIsInJlcyIsImNoYXJ0IiwicmVzdWx0IiwidGltZXN0YW1wIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/stocks/view.tsx\n");

/***/ })

});