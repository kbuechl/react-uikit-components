webpackHotUpdate(0,{

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(85);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(82);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(83);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _reactUikitCodeblock = __webpack_require__(23);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitDropdown = __webpack_require__(618);\n\nvar _reactUikitDropdown2 = _interopRequireDefault(_reactUikitDropdown);\n\nvar _reactUikitTable = __webpack_require__(24);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _velocityAnimate = __webpack_require__(787);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  dropdownDoc: {\n    displayName: 'dropdownDoc'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/home/ninja/work/projects/react-uikit-components/src/dropdown-doc.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/home/ninja/work/projects/react-uikit-components/src/dropdown-doc.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar dropdownDoc = _wrapComponent('dropdownDoc')((function (_React$Component) {\n  _inherits(dropdownDoc, _React$Component);\n\n  function dropdownDoc(props) {\n    _classCallCheck(this, dropdownDoc);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(dropdownDoc).call(this, props));\n\n    _this.state = {\n      drop1Opened: false\n    };\n    return _this;\n  }\n\n  _createClass(dropdownDoc, [{\n    key: 'getPosition',\n    value: function getPosition(element) {\n\n      var height = element.offsetHeight;\n      var width = element.offsetWidth;\n      var center = width * 0.5;\n      var top = element.offsetTop;\n      var left = element.offsetLeft;\n      var bottom = element.offsetTop + height;\n      var right = element.offsetLeft + width;\n      console.dir(element);\n      return {\n        top: top,\n        left: left,\n        bottom: bottom,\n        right: right,\n        'bottom-left': { top: bottom, left: left },\n        'bottom-center': { top: bottom, left: left + center },\n        'bottom-right': { top: bottom, left: right },\n        'top-left': { top: top, left: left },\n        'top-center': { top: top, left: center },\n        'top-right': { top: top, left: right },\n        'left-top': { top: top, left: left },\n        'left-center': { top: center, left: left },\n        'left-bottom': { top: bottom, left: left },\n        'right-top': { top: top, left: right },\n        'right-center': { top: center, left: right },\n        'right-bottom': { top: bottom, left: right }\n      };\n    }\n  }, {\n    key: 'animateIn',\n    value: function animateIn(element, pos) {\n      this.setState({ drop1Opened: true });\n      var position = this.getPosition(element);\n      var height = element.offsetHeight;\n      var width = element.offsetWidth;\n      var center = width * 0.5;\n      var top = element.offsetTop;\n      var left = element.offsetLeft;\n      var bottom = element.offsetTop + height;\n      var right = element.offsetLeft + width;\n      console.log(height);\n\n      (0, _velocityAnimate2.default)(element, { opacity: 1 }, { display: 'block' }, 200);\n    }\n  }, {\n    key: 'animateOut',\n    value: function animateOut(element) {\n      this.setState({ drop1Opened: false });\n      (0, _velocityAnimate2.default)(element, { opacity: 0 }, { display: 'none' }, 200);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h1',\n            null,\n            'dropdown'\n          ),\n          _react3.default.createElement(\n            'p',\n            { className: 'uk-dropdown-lead' },\n            'Defines different styles for list dropdownigations.'\n          )\n        ),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h2',\n            null,\n            'Usage'\n          ),\n          _react3.default.createElement(\n            _reactUikitCodeblock2.default,\n            null,\n            'npm install react-uikit-dropdown --save;\\n\\n// ES6\\nimport uikit from \\'react-uikit-dropdown\\';\\n\\n// ES5\\nvar Dropdown = require(\\'react-uikit-dropdown\\');\\n'\n          ),\n          _react3.default.createElement('hr', { className: 'uk-article-divider' })\n        ),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            _reactUikitDropdown2.default,\n            {\n              pos: 'bootom-right',\n              opened: this.state.drop1Opened,\n              kitid: 'drop1',\n              trigger: {\n                body: 'dropdown',\n                animate: {\n                  in: function _in(element) {\n                    return _this2.animateIn(element);\n                  },\n                  out: function out(element) {\n                    return _this2.animateOut(element);\n                  }\n                }\n              }\n            },\n            'this is a drop down'\n          )\n        )\n      );\n    }\n  }]);\n\n  return dropdownDoc;\n})(_react3.default.Component));\n\nexports.default = dropdownDoc;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kcm9wZG93bi1kb2MuanN4PzA3OWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVVEsV0FBVzs7QUFDOUIsV0FEbUIsV0FBVyxDQUNqQixLQUFLLEVBQUU7MEJBREQsV0FBVzs7dUVBQVgsV0FBVyxhQUV0QixLQUFLOztBQUNYLFVBQUssS0FBSyxHQUFHO0FBQ1gsaUJBQVcsRUFBRSxLQUFLO0tBQ25CLENBQUM7O0dBQ0g7O2VBTmtCLFdBQVc7O2dDQVFqQixPQUFPLEVBQUU7O0FBRXBCLFVBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDcEMsVUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNsQyxVQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQzNCLFVBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDOUIsVUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNoQyxVQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUMxQyxVQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUM3QyxhQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pCLGFBQU87QUFDTCxXQUFHLEVBQWMsR0FBRztBQUNwQixZQUFJLEVBQWEsSUFBSTtBQUNyQixjQUFNLEVBQVcsTUFBTTtBQUN2QixhQUFLLEVBQVksS0FBSztBQUN0QixxQkFBYSxFQUFJLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDO0FBQzFDLHVCQUFlLEVBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJ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QkFBQTtBQUN4QyxxQkFBRyxFQUFFLGFBQUMsT0FBTzsyQkFBSyxPQUFLLFVBQVUsQ0FBQyxPQUFPLENBQUM7bUJBQUE7aUJBQzNDO2VBQ0Q7OztXQUdPO1NBQ0g7T0FHTixDQUFDO0tBQ1I7OztTQTVHa0IsV0FBVztHQUFTLGdCQUFNLFNBQVMiLCJmaWxlIjoiNjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29kZWJsb2NrIGZyb20gJ3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bic7XG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtdWlraXQtdGFibGUnO1xuaW1wb3J0IHZlbG9jaXR5IGZyb20gJ3ZlbG9jaXR5LWFuaW1hdGUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRyb3Bkb3duRG9jIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkcm9wMU9wZW5lZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24gKGVsZW1lbnQpIHtcblxuICAgIGNvbnN0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBjZW50ZXIgPSB3aWR0aCAqIDAuNTtcbiAgICBjb25zdCB0b3AgPSBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICBjb25zdCBsZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IGJvdHRvbSA9IGVsZW1lbnQub2Zmc2V0VG9wICsgaGVpZ2h0O1xuICAgIGNvbnN0IHJpZ2h0ID0gZWxlbWVudC5vZmZzZXRMZWZ0ICsgd2lkdGg7XG5jb25zb2xlLmRpcihlbGVtZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wICAgICAgICAgICAgOiB0b3AsXG4gICAgICBsZWZ0ICAgICAgICAgICA6IGxlZnQsXG4gICAgICBib3R0b20gICAgICAgICA6IGJvdHRvbSxcbiAgICAgIHJpZ2h0ICAgICAgICAgIDogcmlnaHQsXG4gICAgICAnYm90dG9tLWxlZnQnICA6IHt0b3A6IGJvdHRvbSwgbGVmdDogbGVmdH0sXG4gICAgICAnYm90dG9tLWNlbnRlcic6IHt0b3A6IGJvdHRvbSwgbGVmdDogbGVmdCArIGNlbnRlcn0sXG4gICAgICAnYm90dG9tLXJpZ2h0JyA6IHt0b3A6IGJvdHRvbSwgbGVmdDogcmlnaHR9LFxuICAgICAgJ3RvcC1sZWZ0JyAgICAgOiB7dG9wOiB0b3AsIGxlZnQgICA6IGxlZnR9LFxuICAgICAgJ3RvcC1jZW50ZXInICAgOiB7dG9wOiB0b3AsIGxlZnQgICA6IGNlbnRlcn0sXG4gICAgICAndG9wLXJpZ2h0JyAgICA6IHt0b3A6IHRvcCwgbGVmdCAgIDogcmlnaHR9LFxuICAgICAgJ2xlZnQtdG9wJyAgICAgOiB7dG9wOiB0b3AsIGxlZnQgICA6IGxlZnR9LFxuICAgICAgJ2xlZnQtY2VudGVyJyAgOiB7dG9wOiBjZW50ZXIsIGxlZnQ6IGxlZnR9LFxuICAgICAgJ2xlZnQtYm90dG9tJyAgOiB7dG9wOiBib3R0b20sIGxlZnQ6IGxlZnR9LFxuICAgICAgJ3JpZ2h0LXRvcCcgICAgOiB7dG9wOiB0b3AsIGxlZnQgICA6IHJpZ2h0fSxcbiAgICAgICdyaWdodC1jZW50ZXInIDoge3RvcDogY2VudGVyLCBsZWZ0OiByaWdodH0sXG4gICAgICAncmlnaHQtYm90dG9tJyA6IHt0b3A6IGJvdHRvbSwgbGVmdDogcmlnaHR9XG4gICAgfTtcbiAgfVxuXG5cbiAgYW5pbWF0ZUluIChlbGVtZW50LCBwb3MpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkcm9wMU9wZW5lZDogdHJ1ZX0pO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihlbGVtZW50KTtcbiAgICBjb25zdCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgY2VudGVyID0gd2lkdGggKiAwLjU7XG4gICAgY29uc3QgdG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgY29uc3QgbGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICBjb25zdCBib3R0b20gPSBlbGVtZW50Lm9mZnNldFRvcCArIGhlaWdodDtcbiAgICBjb25zdCByaWdodCA9IGVsZW1lbnQub2Zmc2V0TGVmdCArIHdpZHRoO1xuICAgIGNvbnNvbGUubG9nKGhlaWdodCk7XG5cbiAgICB2ZWxvY2l0eShlbGVtZW50LCB7b3BhY2l0eTogMX0sIHtkaXNwbGF5OiAnYmxvY2snfSwgMjAwKTtcbiAgfVxuXG5cbiAgYW5pbWF0ZU91dCAoZWxlbWVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Ryb3AxT3BlbmVkOiBmYWxzZX0pO1xuICAgIHZlbG9jaXR5KGVsZW1lbnQsIHtvcGFjaXR5OiAwfSwgeyBkaXNwbGF5OiAnbm9uZScgfSwgMjAwKTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+ZHJvcGRvd248L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3VrLWRyb3Bkb3duLWxlYWQnPlxuICAgICAgICAgIERlZmluZXMgZGlmZmVyZW50IHN0eWxlcyBmb3IgbGlzdCBkcm9wZG93bmlnYXRpb25zLlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDI+VXNhZ2U8L2gyPlxuXG4gICAgICAgIDxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWRyb3Bkb3duIC0tc2F2ZTtcblxuLy8gRVM2XG5pbXBvcnQgdWlraXQgZnJvbSAncmVhY3QtdWlraXQtZHJvcGRvd24nO1xuXG4vLyBFUzVcbnZhciBEcm9wZG93biA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWRyb3Bkb3duJyk7XG5gfVxuICAgICAgICA8L0NvZGVibG9jaz5cblxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstYXJ0aWNsZS1kaXZpZGVyXCIgLz5cblxuICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBwb3M9J2Jvb3RvbS1yaWdodCdcbiAgICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUuZHJvcDFPcGVuZWR9XG4gICAgICAgICAga2l0aWQ9J2Ryb3AxJ1xuICAgICAgICAgIHRyaWdnZXI9e3tcbiAgICAgICAgICAgIGJvZHk6J2Ryb3Bkb3duJyxcbiAgICAgICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICAgICAgaW46IChlbGVtZW50KSA9PiB0aGlzLmFuaW1hdGVJbihlbGVtZW50KSxcbiAgICAgICAgICAgICAgb3V0OiAoZWxlbWVudCkgPT4gdGhpcy5hbmltYXRlT3V0KGVsZW1lbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHRoaXMgaXMgYSBkcm9wIGRvd25cbiAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPC9kaXY+O1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Ryb3Bkb3duLWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})