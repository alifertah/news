/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/eom";
exports.ids = ["pages/eom"];
exports.modules = {

/***/ "./styles/EOM.module.css":
/*!*******************************!*\
  !*** ./styles/EOM.module.css ***!
  \*******************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"EOM_main__NeAQj\",\n\t\"employeeOfTheMonth\": \"EOM_employeeOfTheMonth__Pi2jB\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvRU9NLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbmV3cy8uL3N0eWxlcy9FT00ubW9kdWxlLmNzcz84ZmFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJFT01fbWFpbl9fTmVBUWpcIixcblx0XCJlbXBsb3llZU9mVGhlTW9udGhcIjogXCJFT01fZW1wbG95ZWVPZlRoZU1vbnRoX19QaTJqQlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/EOM.module.css\n");

/***/ }),

/***/ "./pages/eom.js":
/*!**********************!*\
  !*** ./pages/eom.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EOM\": () => (/* binding */ EOM),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_EOM_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/EOM.module.css */ \"./styles/EOM.module.css\");\n/* harmony import */ var _styles_EOM_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_EOM_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst EOM = ({ employee  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_EOM_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Employee of the month\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_EOM_module_css__WEBPACK_IMPORTED_MODULE_1___default().employeeOfTheMonth),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: employee.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                            lineNumber: 9,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            children: employee.position\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                            lineNumber: 10,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: employee.image\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: employee.discription\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async (pageContext)=>{\n    const apiResponse = await fetch(\"https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth\");\n    const employee = await apiResponse.json();\n    return {\n        props: {\n            employee\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EOM);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lb20uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQTZDO0FBQ3RDLE1BQU1DLEdBQUcsR0FBRyxDQUFDLEVBQUNDLFFBQVEsR0FBQyxHQUFLO0lBQ25DLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7a0JBQzNCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBRUosb0VBQVc7OzhCQUN2Qiw4REFBQ00sSUFBRTs4QkFBQyx1QkFBcUI7Ozs7OzZCQUFLOzhCQUM5Qiw4REFBQ0gsS0FBRztvQkFBQ0MsU0FBUyxFQUFFSixrRkFBeUI7O3NDQUNyQyw4REFBQ1EsSUFBRTtzQ0FBRU4sUUFBUSxDQUFDTyxJQUFJOzs7OztxQ0FBTTtzQ0FDeEIsOERBQUNDLElBQUU7c0NBQUVSLFFBQVEsQ0FBQ1MsUUFBUTs7Ozs7cUNBQU07c0NBQzVCLDhEQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVYLFFBQVEsQ0FBQ1ksS0FBSzs7Ozs7cUNBQUc7c0NBQzNCLDhEQUFDQyxHQUFDO3NDQUFFYixRQUFRLENBQUNjLFdBQVc7Ozs7O3FDQUFLOzs7Ozs7NkJBQzNCOzs7Ozs7cUJBQ0o7Ozs7O2lCQUNKLENBQ1Q7Q0FDQSxDQUFDO0FBR0ssTUFBTUMsa0JBQWtCLEdBQUcsT0FBTUMsV0FBVyxHQUFJO0lBQ25ELE1BQU1DLFdBQVcsR0FBRyxNQUFNQyxLQUFLLENBQzdCLDBFQUEwRSxDQUMzRTtJQUNELE1BQU1sQixRQUFRLEdBQUcsTUFBTWlCLFdBQVcsQ0FBQ0UsSUFBSSxFQUFFO0lBRXpDLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xwQixRQUFRO1NBQ1Q7S0FDRixDQUFDO0NBQ0gsQ0FBQztBQUVKLGlFQUFlRCxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW5ld3MvLi9wYWdlcy9lb20uanM/MGMwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvRU9NLm1vZHVsZS5jc3MnXHJcbmV4cG9ydCBjb25zdCBFT00gPSAoe2VtcGxveWVlfSkgPT4ge1xyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgPGgxPkVtcGxveWVlIG9mIHRoZSBtb250aDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wbG95ZWVPZlRoZU1vbnRofT5cclxuICAgICAgICAgICAgICAgIDxoMj57ZW1wbG95ZWUubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGg2PntlbXBsb3llZS5wb3NpdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2VtcGxveWVlLmltYWdlfS8+XHJcbiAgICAgICAgICAgICAgICA8cD57ZW1wbG95ZWUuZGlzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIHBhZ2VDb250ZXh0ID0+IHtcclxuICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICdodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9wb3J0ZXhlL25leHQtbmV3cy9lbXBsb3llZU9mVGhlTW9udGgnLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgYXBpUmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBlbXBsb3llZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVPTTsiXSwibmFtZXMiOlsic3R5bGVzIiwiRU9NIiwiZW1wbG95ZWUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJlbXBsb3llZU9mVGhlTW9udGgiLCJoMiIsIm5hbWUiLCJoNiIsInBvc2l0aW9uIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJwIiwiZGlzY3JpcHRpb24iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYWdlQ29udGV4dCIsImFwaVJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/eom.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/eom.js"));
module.exports = __webpack_exports__;

})();