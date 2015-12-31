webpackHotUpdate(0,{

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(68);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(65);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(66);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _reactUikitCodeblock = __webpack_require__(18);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitDropdown = __webpack_require__(458);\n\nvar _reactUikitDropdown2 = _interopRequireDefault(_reactUikitDropdown);\n\nvar _reactUikitTable = __webpack_require__(19);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _velocityAnimate = __webpack_require__(626);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  dropdownDoc: {\n    displayName: 'dropdownDoc'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/home/ninja/work/projects/react-uikit-components/src/dropdown-doc.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/home/ninja/work/projects/react-uikit-components/src/dropdown-doc.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar animateIn = function animateIn(element) {\n  console.log(element);\n  (0, _velocityAnimate2.default)(element, { opacity: 1 }, { display: 'block' }, 200);\n};\n\nvar animateOut = function animateOut(element) {\n  (0, _velocityAnimate2.default)(element, { opacity: 0 }, { display: 'none' }, 200);\n};\n\nvar dropdownDoc = _wrapComponent('dropdownDoc')((function (_React$Component) {\n  _inherits(dropdownDoc, _React$Component);\n\n  function dropdownDoc() {\n    _classCallCheck(this, dropdownDoc);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(dropdownDoc).apply(this, arguments));\n  }\n\n  _createClass(dropdownDoc, [{\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.3/css/uikit.almost-flat.min.css' }),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h1',\n            null,\n            'dropdown'\n          ),\n          _react3.default.createElement(\n            'p',\n            { className: 'uk-dropdown-lead' },\n            'Defines different styles for list dropdownigations.'\n          )\n        ),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h2',\n            null,\n            'Usage'\n          ),\n          _react3.default.createElement(\n            _reactUikitCodeblock2.default,\n            null,\n            'npm install react-uikit-dropdown --save;\\n\\n// ES6\\nimport uikit from \\'react-uikit-dropdown\\';\\n\\n// ES5\\nvar Dropdown = require(\\'react-uikit-dropdown\\');\\n'\n          ),\n          _react3.default.createElement('hr', { className: 'uk-article-divider' })\n        ),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            _reactUikitDropdown2.default,\n            {\n              kitid: 'drop1',\n              trigger: {\n                body: 'dropdown',\n                animate: {\n                  in: function _in(element) {\n                    return animateIn(element);\n                  },\n                  out: function out(element) {\n                    return animateOut(element);\n                  }\n                }\n              }\n            },\n            'this is a drop down'\n          )\n        )\n      );\n    }\n  }]);\n\n  return dropdownDoc;\n})(_react3.default.Component));\n\nexports.default = dropdownDoc;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)(module)))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kcm9wZG93bi1kb2MuanN4PzA3OWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVYixJQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVMsQ0FBSSxPQUFPLEVBQUs7QUFDN0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixpQ0FBUyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDMUQsQ0FBQzs7QUFHRixJQUFNLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBSSxPQUFPLEVBQUs7QUFDOUIsaUNBQVMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzNELENBQUM7OztZQUdtQixXQUFXOztXQUFYLFdBQVc7MEJBQVgsV0FBVzs7a0VBQVgsV0FBVzs7O2VBQVgsV0FBVzs7NkJBQ3BCO0FBQ1IsYUFBTzs7O1FBQ0wsd0NBQU0sR0FBRyxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsbUZBQW1GLEdBQUc7UUFDbEg7OztVQUNFOzs7O1dBQWlCO1VBQ2pCOztjQUFHLFNBQVMsRUFBQyxrQkFBa0I7O1dBRTNCO1NBQ0k7UUFFVjs7O1VBQ0U7Ozs7V0FBYztVQUVkOzs7O1dBU1k7VUFFWixzQ0FBSSxTQUFTLEVBQUMsb0JBQW9CLEdBQUc7U0FFN0I7UUFHVjs7O1VBQ0U7OztBQUNFLG1CQUFLLEVBQUMsT0FBTztBQUNiLHFCQUFPLEVBQUU7QUFDUCxvQkFBSSxFQUFDLFVBQVU7QUFDZix1QkFBTyxFQUFFO0FBQ1Asb0JBQUUsRUFBRSxhQUFDLE9BQU87MkJBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQzttQkFBQTtBQUNuQyxxQkFBRyxFQUFFLGFBQUMsT0FBTzsyQkFBSyxVQUFVLENBQUMsT0FBTyxDQUFDO21CQUFBO2lCQUN0QztlQUNEOzs7V0FHTztTQUNIO09BR04sQ0FBQztLQUNSOzs7U0EvQ2tCLFdBQVc7R0FBUyxnQkFBTSxTQUFTIiwiZmlsZSI6IjQ2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICdyZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtZHJvcGRvd24nO1xuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LXVpa2l0LXRhYmxlJztcbmltcG9ydCB2ZWxvY2l0eSBmcm9tICd2ZWxvY2l0eS1hbmltYXRlJztcblxuXG5jb25zdCBhbmltYXRlSW4gPSAoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgdmVsb2NpdHkoZWxlbWVudCwge29wYWNpdHk6IDF9LCB7ZGlzcGxheTogJ2Jsb2NrJ30sIDIwMCk7XG59O1xuXG5cbmNvbnN0IGFuaW1hdGVPdXQgPSAoZWxlbWVudCkgPT4ge1xuICB2ZWxvY2l0eShlbGVtZW50LCB7b3BhY2l0eTogMH0sIHsgZGlzcGxheTogJ25vbmUnIH0sIDIwMCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRyb3Bkb3duRG9jIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdWlraXQvMi4yNC4zL2Nzcy91aWtpdC5hbG1vc3QtZmxhdC5taW4uY3NzXCIgLz5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+ZHJvcGRvd248L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3VrLWRyb3Bkb3duLWxlYWQnPlxuICAgICAgICAgIERlZmluZXMgZGlmZmVyZW50IHN0eWxlcyBmb3IgbGlzdCBkcm9wZG93bmlnYXRpb25zLlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDI+VXNhZ2U8L2gyPlxuXG4gICAgICAgIDxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWRyb3Bkb3duIC0tc2F2ZTtcblxuLy8gRVM2XG5pbXBvcnQgdWlraXQgZnJvbSAncmVhY3QtdWlraXQtZHJvcGRvd24nO1xuXG4vLyBFUzVcbnZhciBEcm9wZG93biA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWRyb3Bkb3duJyk7XG5gfVxuICAgICAgICA8L0NvZGVibG9jaz5cblxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstYXJ0aWNsZS1kaXZpZGVyXCIgLz5cblxuICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBraXRpZD0nZHJvcDEnXG4gICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgYm9keTonZHJvcGRvd24nLFxuICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICBpbjogKGVsZW1lbnQpID0+IGFuaW1hdGVJbihlbGVtZW50KSxcbiAgICAgICAgICAgICAgb3V0OiAoZWxlbWVudCkgPT4gYW5pbWF0ZU91dChlbGVtZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB0aGlzIGlzIGEgZHJvcCBkb3duXG4gICAgICAgIDwvRHJvcGRvd24+XG4gICAgICA8L3NlY3Rpb24+XG5cblxuICAgIDwvZGl2PjtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9kcm9wZG93bi1kb2MuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})