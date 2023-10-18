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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _getIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getIcon */ \"./pages/getIcon.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ipData, setIP] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const ip = ipData !== 0 ? ipData.data.ip : \" \";\n    // Fet the current region from the API\n    const currentRegion = data !== \"\" ? data.data.location.name : null;\n    //  Get the current temperature from the API\n    const currentTemp = data !== \"\" ? data.data.current.temp_c : null;\n    // Get the current weather condition from the API\n    const currentCondition = data !== \"\" ? data.data.current.condition.text : null;\n    // Get the icon that link that corresponds with the current weather condition\n    const currentConditionIcon = data !== \"\" ? data.data.current.condition.icon : \"\";\n    // Get the icon code for the current weather condition\n    const iconCode = currentConditionIcon !== \"\" ? parseInt(currentConditionIcon.substring(currentConditionIcon.length - 7, currentConditionIcon.length - 3)) : null;\n    // need to use useEffect when we want to make API calls. Use an empty dependancy array if we\n    // want to only have it execute once after render\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const success = (position)=>{\n            console.log(position);\n        };\n        const error = ()=>{\n            console.log(\"Position not found\");\n        };\n        navigator.geolocation(success, error);\n        // API call to the weatherAPI, using axios\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://api.ipify.org?format=json\").then((res)=>setIP(res)).catch((error)=>console.error(error));\n        if (ipData !== 0) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://api.weatherapi.com/v1/current.json?key=68e5adc58205464b8d783800231010&q=\".concat(ip, \"&aqi=no\")).then((res)=>{\n                setData(res);\n            }).catch((error)=>console.log(error));\n        }\n    }, [\n        ip,\n        ipData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main--container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info--container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"info--text--city\",\n                        children: currentRegion\n                    }, void 0, false, {\n                        fileName: \"/Users/henniescheepers/Documents/react-weather-app/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"info--text\",\n                        children: currentTemp && \"\".concat(currentTemp, \"\\xb0C\")\n                    }, void 0, false, {\n                        fileName: \"/Users/henniescheepers/Documents/react-weather-app/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"info--text\",\n                        children: currentCondition\n                    }, void 0, false, {\n                        fileName: \"/Users/henniescheepers/Documents/react-weather-app/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/henniescheepers/Documents/react-weather-app/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                priority: true,\n                className: \"weather--icon\",\n                src: (0,_getIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(iconCode),\n                alt: \"\".concat(currentCondition, \" icon\"),\n                width: 0,\n                height: 0\n            }, void 0, false, {\n                fileName: \"/Users/henniescheepers/Documents/react-weather-app/pages/index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/henniescheepers/Documents/react-weather-app/pages/index.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MJCy1uR7KRCgayz1APSy+ne4EUc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNMO0FBQ2tCO0FBQ1o7QUFFakIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNLLFFBQVFDLE1BQU0sR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTU8sS0FBS0YsV0FBVyxJQUFJQSxPQUFPRixJQUFJLENBQUNJLEVBQUUsR0FBRztJQUUzQyxzQ0FBc0M7SUFDdEMsTUFBTUMsZ0JBQWdCTCxTQUFTLEtBQUtBLEtBQUtBLElBQUksQ0FBQ00sUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFFOUQsNENBQTRDO0lBQzVDLE1BQU1DLGNBQWNSLFNBQVMsS0FBS0EsS0FBS0EsSUFBSSxDQUFDUyxPQUFPLENBQUNDLE1BQU0sR0FBRztJQUU3RCxpREFBaUQ7SUFDakQsTUFBTUMsbUJBQ0pYLFNBQVMsS0FBS0EsS0FBS0EsSUFBSSxDQUFDUyxPQUFPLENBQUNHLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHO0lBRW5ELDZFQUE2RTtJQUM3RSxNQUFNQyx1QkFDSmQsU0FBUyxLQUFLQSxLQUFLQSxJQUFJLENBQUNTLE9BQU8sQ0FBQ0csU0FBUyxDQUFDRyxJQUFJLEdBQUc7SUFFbkQsc0RBQXNEO0lBQ3RELE1BQU1DLFdBQ0pGLHlCQUF5QixLQUNyQkcsU0FDRUgscUJBQXFCSSxTQUFTLENBQzVCSixxQkFBcUJLLE1BQU0sR0FBRyxHQUM5QkwscUJBQXFCSyxNQUFNLEdBQUcsTUFHbEM7SUFFTiw0RkFBNEY7SUFDNUYsaURBQWlEO0lBQ2pEdkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNd0IsVUFBVSxDQUFDQztZQUNmQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7UUFFQSxNQUFNRyxRQUFRO1lBQ1pGLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBRUFFLFVBQVVDLFdBQVcsQ0FBQ04sU0FBU0k7UUFDL0IsMENBQTBDO1FBQzFDN0IsaURBQ00sQ0FBQyxxQ0FDSmlDLElBQUksQ0FBQyxDQUFDQyxNQUFRMUIsTUFBTTBCLE1BQ3BCQyxLQUFLLENBQUMsQ0FBQ04sUUFBVUYsUUFBUUUsS0FBSyxDQUFDQTtRQUVsQyxJQUFJdEIsV0FBVyxHQUFHO1lBQ2hCUCxpREFDTSxDQUNGLGtGQUFxRixPQUFIUyxJQUFHLFlBRXRGd0IsSUFBSSxDQUFDLENBQUNDO2dCQUNMNUIsUUFBUTRCO1lBQ1YsR0FDQ0MsS0FBSyxDQUFDLENBQUNOLFFBQVVGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDbEM7SUFDRixHQUFHO1FBQUNwQjtRQUFJRjtLQUFPO0lBRWYscUJBQ0UsOERBQUM2QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBb0IzQjs7Ozs7O2tDQUNqQyw4REFBQzRCO3dCQUFFRCxXQUFVO2tDQUFjeEIsZUFBZSxHQUFlLE9BQVpBLGFBQVk7Ozs7OztrQ0FDekQsOERBQUN5Qjt3QkFBRUQsV0FBVTtrQ0FBY3JCOzs7Ozs7Ozs7Ozs7MEJBRTdCLDhEQUFDakIsbURBQUtBO2dCQUNKd0MsVUFBVTtnQkFDVkYsV0FBVTtnQkFDVkcsS0FBS3JDLG9EQUFPQSxDQUFDa0I7Z0JBQ2JvQixLQUFLLEdBQW9CLE9BQWpCekIsa0JBQWlCO2dCQUN6QjBCLE9BQU87Z0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7OztBQUloQjtHQTdFd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldEljb24gZnJvbSBcIi4vZ2V0SWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lwRGF0YSwgc2V0SVBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGlwID0gaXBEYXRhICE9PSAwID8gaXBEYXRhLmRhdGEuaXAgOiBcIiBcIjtcblxuICAvLyBGZXQgdGhlIGN1cnJlbnQgcmVnaW9uIGZyb20gdGhlIEFQSVxuICBjb25zdCBjdXJyZW50UmVnaW9uID0gZGF0YSAhPT0gXCJcIiA/IGRhdGEuZGF0YS5sb2NhdGlvbi5uYW1lIDogbnVsbDtcblxuICAvLyAgR2V0IHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGZyb20gdGhlIEFQSVxuICBjb25zdCBjdXJyZW50VGVtcCA9IGRhdGEgIT09IFwiXCIgPyBkYXRhLmRhdGEuY3VycmVudC50ZW1wX2MgOiBudWxsO1xuXG4gIC8vIEdldCB0aGUgY3VycmVudCB3ZWF0aGVyIGNvbmRpdGlvbiBmcm9tIHRoZSBBUElcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9XG4gICAgZGF0YSAhPT0gXCJcIiA/IGRhdGEuZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0IDogbnVsbDtcblxuICAvLyBHZXQgdGhlIGljb24gdGhhdCBsaW5rIHRoYXQgY29ycmVzcG9uZHMgd2l0aCB0aGUgY3VycmVudCB3ZWF0aGVyIGNvbmRpdGlvblxuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uSWNvbiA9XG4gICAgZGF0YSAhPT0gXCJcIiA/IGRhdGEuZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uIDogXCJcIjtcblxuICAvLyBHZXQgdGhlIGljb24gY29kZSBmb3IgdGhlIGN1cnJlbnQgd2VhdGhlciBjb25kaXRpb25cbiAgY29uc3QgaWNvbkNvZGUgPVxuICAgIGN1cnJlbnRDb25kaXRpb25JY29uICE9PSBcIlwiXG4gICAgICA/IHBhcnNlSW50KFxuICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25JY29uLnN1YnN0cmluZyhcbiAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25JY29uLmxlbmd0aCAtIDcsXG4gICAgICAgICAgICBjdXJyZW50Q29uZGl0aW9uSWNvbi5sZW5ndGggLSAzXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICA6IG51bGw7XG5cbiAgLy8gbmVlZCB0byB1c2UgdXNlRWZmZWN0IHdoZW4gd2Ugd2FudCB0byBtYWtlIEFQSSBjYWxscy4gVXNlIGFuIGVtcHR5IGRlcGVuZGFuY3kgYXJyYXkgaWYgd2VcbiAgLy8gd2FudCB0byBvbmx5IGhhdmUgaXQgZXhlY3V0ZSBvbmNlIGFmdGVyIHJlbmRlclxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAocG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlBvc2l0aW9uIG5vdCBmb3VuZFwiKTtcbiAgICB9O1xuXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uKHN1Y2Nlc3MsIGVycm9yKTtcbiAgICAvLyBBUEkgY2FsbCB0byB0aGUgd2VhdGhlckFQSSwgdXNpbmcgYXhpb3NcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHBzOi8vYXBpLmlwaWZ5Lm9yZz9mb3JtYXQ9anNvblwiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gc2V0SVAocmVzKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcblxuICAgIGlmIChpcERhdGEgIT09IDApIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02OGU1YWRjNTgyMDU0NjRiOGQ3ODM4MDAyMzEwMTAmcT0ke2lwfSZhcWk9bm9gXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHNldERhdGEocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9XG4gIH0sIFtpcCwgaXBEYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLS1jb250YWluZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby0tdGV4dC0tY2l0eVwiPntjdXJyZW50UmVnaW9ufTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby0tdGV4dFwiPntjdXJyZW50VGVtcCAmJiBgJHtjdXJyZW50VGVtcH3CsENgfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby0tdGV4dFwiPntjdXJyZW50Q29uZGl0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPEltYWdlXG4gICAgICAgIHByaW9yaXR5PXt0cnVlfVxuICAgICAgICBjbGFzc05hbWU9XCJ3ZWF0aGVyLS1pY29uXCJcbiAgICAgICAgc3JjPXtnZXRJY29uKGljb25Db2RlKX1cbiAgICAgICAgYWx0PXtgJHtjdXJyZW50Q29uZGl0aW9ufSBpY29uYH1cbiAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgIGhlaWdodD17MH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0SWNvbiIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImlwRGF0YSIsInNldElQIiwiaXAiLCJjdXJyZW50UmVnaW9uIiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudFRlbXAiLCJjdXJyZW50IiwidGVtcF9jIiwiY3VycmVudENvbmRpdGlvbiIsImNvbmRpdGlvbiIsInRleHQiLCJjdXJyZW50Q29uZGl0aW9uSWNvbiIsImljb24iLCJpY29uQ29kZSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwibGVuZ3RoIiwic3VjY2VzcyIsInBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwicHJpb3JpdHkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});