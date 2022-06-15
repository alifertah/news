"use strict";
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

/***/ "./pages/eom.js":
/*!**********************!*\
  !*** ./pages/eom.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EOM\": () => (/* binding */ EOM),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst EOM = ({ employee  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Employee of the month\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"employeeOfTheMonth\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: employee.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                            lineNumber: 9,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            children: employee.position\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                            lineNumber: 10,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"{employee.image}\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: employee.discription\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Scofio\\\\Desktop\\\\my-nextjs\\\\pages\\\\eom.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async (pageContext)=>{\n    const apiResponse = await fetch(\"https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth\");\n    const employee = await apiResponse.json();\n    return {\n        props: {\n            employee\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EOM);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lb20uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUE4QztBQUN2QyxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxFQUFDQyxRQUFRLEdBQUMsR0FBSztJQUNuQyxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsZ0JBQWdCO2tCQUMzQiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsTUFBTTs7OEJBQ2pCLDhEQUFDQyxJQUFFOzhCQUFDLHVCQUFxQjs7Ozs7NkJBQUs7OEJBQzlCLDhEQUFDRixLQUFHO29CQUFDQyxTQUFTLEVBQUMsb0JBQW9COztzQ0FDL0IsOERBQUNFLElBQUU7c0NBQUVKLFFBQVEsQ0FBQ0ssSUFBSTs7Ozs7cUNBQU07c0NBQ3hCLDhEQUFDQyxJQUFFO3NDQUFFTixRQUFRLENBQUNPLFFBQVE7Ozs7O3FDQUFNO3NDQUM1Qiw4REFBQ0MsS0FBRzs0QkFBQ0MsR0FBRyxFQUFDLGtCQUFrQjs7Ozs7cUNBQUU7c0NBQzdCLDhEQUFDQyxHQUFDO3NDQUFFVixRQUFRLENBQUNXLFdBQVc7Ozs7O3FDQUFLOzs7Ozs7NkJBQzNCOzs7Ozs7cUJBQ0o7Ozs7O2lCQUNKLENBQ1Q7Q0FDQSxDQUFDO0FBR0ssTUFBTUMsa0JBQWtCLEdBQUcsT0FBTUMsV0FBVyxHQUFJO0lBQ25ELE1BQU1DLFdBQVcsR0FBRyxNQUFNQyxLQUFLLENBQzdCLDBFQUEwRSxDQUMzRTtJQUNELE1BQU1mLFFBQVEsR0FBRyxNQUFNYyxXQUFXLENBQUNFLElBQUksRUFBRTtJQUV6QyxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMakIsUUFBUTtTQUNUO0tBQ0YsQ0FBQztDQUNILENBQUM7QUFFSixpRUFBZUQsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1uZXdzLy4vcGFnZXMvZW9tLmpzPzBjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0VPTS5tb2R1bGUuY3NzJztcclxuZXhwb3J0IGNvbnN0IEVPTSA9ICh7ZW1wbG95ZWV9KSA9PiB7XHJcbnJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgPGgxPkVtcGxveWVlIG9mIHRoZSBtb250aDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wbG95ZWVPZlRoZU1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2VtcGxveWVlLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoNj57ZW1wbG95ZWUucG9zaXRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie2VtcGxveWVlLmltYWdlfVwiLz5cclxuICAgICAgICAgICAgICAgIDxwPntlbXBsb3llZS5kaXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbilcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgcGFnZUNvbnRleHQgPT4ge1xyXG4gICAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgJ2h0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL3BvcnRleGUvbmV4dC1uZXdzL2VtcGxveWVlT2ZUaGVNb250aCcsXHJcbiAgICApO1xyXG4gICAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGVtcGxveWVlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRU9NOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJFT00iLCJlbXBsb3llZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJuYW1lIiwiaDYiLCJwb3NpdGlvbiIsImltZyIsInNyYyIsInAiLCJkaXNjcmlwdGlvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhZ2VDb250ZXh0IiwiYXBpUmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/eom.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

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