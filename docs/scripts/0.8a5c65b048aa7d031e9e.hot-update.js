webpackHotUpdate(0,{

/***/ 1613:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1541);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(439);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(935);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBadge = __webpack_require__(1610);\n\nvar _reactUikitBadge2 = _interopRequireDefault(_reactUikitBadge);\n\nvar _ramda = __webpack_require__(2939);\n\nvar _ramda2 = _interopRequireDefault(_ramda);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Panel = (function (_React$Component) {\n  _inherits(Panel, _React$Component);\n\n  function Panel() {\n    _classCallCheck(this, Panel);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).apply(this, arguments));\n  }\n\n  _createClass(Panel, [{\n    key: 'render',\n    value: function render() {\n      var props = this.props;\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-panel', props.classes, props.box ? 'uk-panel-box' : null, props.context ? 'uk-panel-box-' + props.context : null, props.divider ? 'uk-panel-divider' : null, props.header ? 'uk-panel-header' : null, props.hover ? 'uk-panel-hover' : null, props.space ? 'uk-panel-space' : null, props.className]);\n\n      // Elements\n      var ignoreProps = ['type', 'title', 'col'];\n      var cleanProps = _reactUikitBase2.default.helpers.cleanProps(ignoreProps)(props);\n\n      var badge = _ufunc2.default.maybeIf(_ufunc2.default.either(_react2.default.createElement(_reactUikitBadge2.default, null, props.badge), _react2.default.createElement(_reactUikitBadge2.default, { context: props.badge ? props.badge.context : null }, props.badge ? props.badge.body : 'Note'))(typeof props.badge === 'string'))(props.badge);\n\n      var icon = _ufunc2.default.maybeIf(_react2.default.createElement('i', { className: 'uk-icon-' + props.icon }))(props.icon);\n\n      var teaser = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-panel-teaser' }, _react2.default.createElement('img', { src: props.teaser ? props.teaser.src : null, alt: props.teaser ? props.teaser.alt : null })))(props.teaser);\n\n      var title = _ufunc2.default.maybeIf(_react2.default.createElement('h3', { className: 'uk-panel-title' }, icon, ' ', props.title))(props.title);\n\n      var block = _react2.default.createElement('div', _extends({}, cleanProps, {\n        className: cssClassNames,\n        'data-kitid': props.kitid\n      }), teaser, badge, title, props.children);\n\n      var type = {\n        block: block,\n\n        list: _react2.default.createElement('li', _extends({}, cleanProps, {\n          className: cssClassNames,\n          'data-kitid': props.kitid\n        }), teaser, badge, title, props.children),\n\n        link: _react2.default.createElement('a', _extends({}, cleanProps, {\n          href: props.link,\n          'data-kitid': props.kitid\n        }), block)\n      };\n\n      // Return Component\n      return type[props.type] || type['block'];\n    }\n  }]);\n\n  return Panel;\n})(_react2.default.Component);\n\nPanel.propTypes = {\n  badge: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),\n  box: _react2.default.PropTypes.bool,\n  context: _react2.default.PropTypes.oneOf(['primary', 'secondary']),\n  divider: _react2.default.PropTypes.bool,\n  header: _react2.default.PropTypes.bool,\n  hover: _react2.default.PropTypes.bool,\n  icon: _react2.default.PropTypes.string,\n  link: _react2.default.PropTypes.string,\n  space: _react2.default.PropTypes.bool,\n  teaser: _react2.default.PropTypes.object,\n  title: _react2.default.PropTypes.string,\n  type: _react2.default.PropTypes.oneOf(['link', 'list', 'block'])\n};\n\nexports.default = _reactUikitBase2.default.base(Panel);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1wYW5lbC9saWIvcGFuZWwuanM/ZTFkNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENB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QUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztDQUNqRSxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMiLCJmaWxlIjoiMTYxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCcuLi8uLi9yZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhZGdlID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtYmFkZ2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFkZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhZGdlKTtcblxudmFyIF9yYW1kYSA9IHJlcXVpcmUoJ3JhbWRhJyk7XG5cbnZhciBfcmFtZGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFtZGEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYW5lbCA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUGFuZWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBhbmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBhbmVsKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYW5lbCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICAvLyBDU1MgY2xhc3Nlc1xuICAgICAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoWyd1ay1wYW5lbCcsIHByb3BzLmNsYXNzZXMsIHByb3BzLmJveCA/ICd1ay1wYW5lbC1ib3gnIDogbnVsbCwgcHJvcHMuY29udGV4dCA/ICd1ay1wYW5lbC1ib3gtJyArIHByb3BzLmNvbnRleHQgOiBudWxsLCBwcm9wcy5kaXZpZGVyID8gJ3VrLXBhbmVsLWRpdmlkZXInIDogbnVsbCwgcHJvcHMuaGVhZGVyID8gJ3VrLXBhbmVsLWhlYWRlcicgOiBudWxsLCBwcm9wcy5ob3ZlciA/ICd1ay1wYW5lbC1ob3ZlcicgOiBudWxsLCBwcm9wcy5zcGFjZSA/ICd1ay1wYW5lbC1zcGFjZScgOiBudWxsLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgLy8gRWxlbWVudHNcbiAgICAgIHZhciBpZ25vcmVQcm9wcyA9IFsndHlwZScsICd0aXRsZScsICdjb2wnXTtcbiAgICAgIHZhciBjbGVhblByb3BzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5Qcm9wcyhpZ25vcmVQcm9wcykocHJvcHMpO1xuXG4gICAgICB2YXIgYmFkZ2UgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RVaWtpdEJhZGdlMi5kZWZhdWx0LFxuICAgICAgICBudWxsLFxuICAgICAgICBwcm9wcy5iYWRnZVxuICAgICAgKSwgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdFVpa2l0QmFkZ2UyLmRlZmF1bHQsXG4gICAgICAgIHsgY29udGV4dDogcHJvcHMuYmFkZ2UgPyBwcm9wcy5iYWRnZS5jb250ZXh0IDogbnVsbCB9LFxuICAgICAgICBwcm9wcy5iYWRnZSA/IHByb3BzLmJhZGdlLmJvZHkgOiAnTm90ZSdcbiAgICAgICkpKHR5cGVvZiBwcm9wcy5iYWRnZSA9PT0gJ3N0cmluZycpKShwcm9wcy5iYWRnZSk7XG5cbiAgICAgIHZhciBpY29uID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ3VrLWljb24tJyArIHByb3BzLmljb24gfSkpKHByb3BzLmljb24pO1xuXG4gICAgICB2YXIgdGVhc2VyID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3VrLXBhbmVsLXRlYXNlcicgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBwcm9wcy50ZWFzZXIgPyBwcm9wcy50ZWFzZXIuc3JjIDogbnVsbCwgYWx0OiBwcm9wcy50ZWFzZXIgPyBwcm9wcy50ZWFzZXIuYWx0IDogbnVsbCB9KVxuICAgICAgKSkocHJvcHMudGVhc2VyKTtcblxuICAgICAgdmFyIHRpdGxlID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoMycsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAndWstcGFuZWwtdGl0bGUnIH0sXG4gICAgICAgIGljb24sXG4gICAgICAgICcgJyxcbiAgICAgICAgcHJvcHMudGl0bGVcbiAgICAgICkpKHByb3BzLnRpdGxlKTtcblxuICAgICAgdmFyIGJsb2NrID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgY2xlYW5Qcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAgICAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkXG4gICAgICAgIH0pLFxuICAgICAgICB0ZWFzZXIsXG4gICAgICAgIGJhZGdlLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG5cbiAgICAgIHZhciB0eXBlID0ge1xuICAgICAgICBibG9jazogYmxvY2ssXG5cbiAgICAgICAgbGlzdDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2xpJyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgY2xlYW5Qcm9wcywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzLFxuICAgICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlYXNlcixcbiAgICAgICAgICBiYWRnZSxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICApLFxuXG4gICAgICAgIGxpbms6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgY2xlYW5Qcm9wcywge1xuICAgICAgICAgICAgaHJlZjogcHJvcHMubGluayxcbiAgICAgICAgICAgICdkYXRhLWtpdGlkJzogcHJvcHMua2l0aWRcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBibG9ja1xuICAgICAgICApXG4gICAgICB9O1xuXG4gICAgICAvLyBSZXR1cm4gQ29tcG9uZW50XG4gICAgICByZXR1cm4gdHlwZVtwcm9wcy50eXBlXSB8fCB0eXBlWydibG9jayddO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYW5lbDtcbn0pKF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5QYW5lbC5wcm9wVHlwZXMgPSB7XG4gIGJhZGdlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0XSksXG4gIGJveDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBjb250ZXh0OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG4gIGRpdmlkZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaGVhZGVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGhvdmVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGljb246IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsaW5rOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgc3BhY2U6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdGVhc2VyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdCxcbiAgdGl0bGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsnbGluaycsICdsaXN0JywgJ2Jsb2NrJ10pXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuYmFzZShQYW5lbCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1wYW5lbC9saWIvcGFuZWwuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})