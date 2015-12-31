webpackHotUpdate(0,{

/***/ 1613:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1541);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(439);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(935);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBadge = __webpack_require__(1610);\n\nvar _reactUikitBadge2 = _interopRequireDefault(_reactUikitBadge);\n\nvar _ramda = __webpack_require__(2939);\n\nvar _ramda2 = _interopRequireDefault(_ramda);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Panel = (function (_React$Component) {\n  _inherits(Panel, _React$Component);\n\n  function Panel() {\n    _classCallCheck(this, Panel);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).apply(this, arguments));\n  }\n\n  _createClass(Panel, [{\n    key: 'render',\n    value: function render() {\n      var props = this.props;\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-panel', props.classes, props.box ? 'uk-panel-box' : null, props.context ? 'uk-panel-box-' + props.context : null, props.divider ? 'uk-panel-divider' : null, props.header ? 'uk-panel-header' : null, props.hover ? 'uk-panel-hover' : null, props.space ? 'uk-panel-space' : null, props.className]);\n\n      // Elements\n      var ignoreProps = ['type', 'title', 'col'];\n\n      var badge = _ufunc2.default.maybeIf(_ufunc2.default.either(_react2.default.createElement(_reactUikitBadge2.default, null, props.badge), _react2.default.createElement(_reactUikitBadge2.default, { context: props.badge ? props.badge.context : null }, props.badge ? props.badge.body : 'Note'))(typeof props.badge === 'string'))(props.badge);\n\n      var icon = _ufunc2.default.maybeIf(_react2.default.createElement('i', { className: 'uk-icon-' + props.icon }))(props.icon);\n\n      var teaser = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-panel-teaser' }, _react2.default.createElement('img', { src: props.teaser ? props.teaser.src : null, alt: props.teaser ? props.teaser.alt : null })))(props.teaser);\n\n      var title = _ufunc2.default.maybeIf(_react2.default.createElement('h3', { className: 'uk-panel-title' }, icon, ' ', props.title))(props.title);\n\n      var cleanProps = function cleanProps(obj, ignoreKeys) {\n        var newObj = _extends({}, obj);\n\n        for (var i; i < ignoreKeys.length; i++) {\n          if (newObj[ignoreKeys[i]]) {\n            newObj[ignoreKeys[i]] = null;\n          }\n        }\n\n        return newObj;\n      };\n\n      console.dir(cleanProps(props, ignoreProps));\n      var block = _react2.default.createElement('div', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, !ignoreProps), {\n        className: cssClassNames,\n        'data-kitid': props.kitid\n      }), teaser, badge, title, props.children);\n\n      var type = {\n        block: block,\n\n        list: _react2.default.createElement('li', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n          className: cssClassNames,\n          'data-kitid': props.kitid\n        }), teaser, badge, title, props.children),\n\n        link: _react2.default.createElement('a', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n          href: props.link,\n          'data-kitid': props.kitid\n        }), block)\n      };\n\n      // Return Component\n      return type[props.type] || type['block'];\n    }\n  }]);\n\n  return Panel;\n})(_react2.default.Component);\n\nPanel.propTypes = {\n  badge: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),\n  box: _react2.default.PropTypes.bool,\n  context: _react2.default.PropTypes.oneOf(['primary', 'secondary']),\n  divider: _react2.default.PropTypes.bool,\n  header: _react2.default.PropTypes.bool,\n  hover: _react2.default.PropTypes.bool,\n  icon: _react2.default.PropTypes.string,\n  link: _react2.default.PropTypes.string,\n  space: _react2.default.PropTypes.bool,\n  teaser: _react2.default.PropTypes.object,\n  title: _react2.default.PropTypes.string,\n  type: _react2.default.PropTypes.oneOf(['link', 'list', 'block'])\n};\n\nexports.default = _reactUikitBase2.default.base(Panel);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1wYW5lbC9saWIvcGFuZWwuanM/ZTFkNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENB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QUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNsRSxTQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN2QyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN0QyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN0QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN4QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztDQUNqRSxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMiLCJmaWxlIjoiMTYxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCcuLi8uLi9yZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhZGdlID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtYmFkZ2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFkZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhZGdlKTtcblxudmFyIF9yYW1kYSA9IHJlcXVpcmUoJ3JhbWRhJyk7XG5cbnZhciBfcmFtZGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFtZGEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYW5lbCA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUGFuZWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBhbmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBhbmVsKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYW5lbCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICAvLyBDU1MgY2xhc3Nlc1xuICAgICAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoWyd1ay1wYW5lbCcsIHByb3BzLmNsYXNzZXMsIHByb3BzLmJveCA/ICd1ay1wYW5lbC1ib3gnIDogbnVsbCwgcHJvcHMuY29udGV4dCA/ICd1ay1wYW5lbC1ib3gtJyArIHByb3BzLmNvbnRleHQgOiBudWxsLCBwcm9wcy5kaXZpZGVyID8gJ3VrLXBhbmVsLWRpdmlkZXInIDogbnVsbCwgcHJvcHMuaGVhZGVyID8gJ3VrLXBhbmVsLWhlYWRlcicgOiBudWxsLCBwcm9wcy5ob3ZlciA/ICd1ay1wYW5lbC1ob3ZlcicgOiBudWxsLCBwcm9wcy5zcGFjZSA/ICd1ay1wYW5lbC1zcGFjZScgOiBudWxsLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgLy8gRWxlbWVudHNcbiAgICAgIHZhciBpZ25vcmVQcm9wcyA9IFsndHlwZScsICd0aXRsZScsICdjb2wnXTtcblxuICAgICAgdmFyIGJhZGdlID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0VWlraXRCYWRnZTIuZGVmYXVsdCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcHJvcHMuYmFkZ2VcbiAgICAgICksIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RVaWtpdEJhZGdlMi5kZWZhdWx0LFxuICAgICAgICB7IGNvbnRleHQ6IHByb3BzLmJhZGdlID8gcHJvcHMuYmFkZ2UuY29udGV4dCA6IG51bGwgfSxcbiAgICAgICAgcHJvcHMuYmFkZ2UgPyBwcm9wcy5iYWRnZS5ib2R5IDogJ05vdGUnXG4gICAgICApKSh0eXBlb2YgcHJvcHMuYmFkZ2UgPT09ICdzdHJpbmcnKSkocHJvcHMuYmFkZ2UpO1xuXG4gICAgICB2YXIgaWNvbiA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpJywgeyBjbGFzc05hbWU6ICd1ay1pY29uLScgKyBwcm9wcy5pY29uIH0pKShwcm9wcy5pY29uKTtcblxuICAgICAgdmFyIHRlYXNlciA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICd1ay1wYW5lbC10ZWFzZXInIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogcHJvcHMudGVhc2VyID8gcHJvcHMudGVhc2VyLnNyYyA6IG51bGwsIGFsdDogcHJvcHMudGVhc2VyID8gcHJvcHMudGVhc2VyLmFsdCA6IG51bGwgfSlcbiAgICAgICkpKHByb3BzLnRlYXNlcik7XG5cbiAgICAgIHZhciB0aXRsZSA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDMnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3VrLXBhbmVsLXRpdGxlJyB9LFxuICAgICAgICBpY29uLFxuICAgICAgICAnICcsXG4gICAgICAgIHByb3BzLnRpdGxlXG4gICAgICApKShwcm9wcy50aXRsZSk7XG5cbiAgICAgIHZhciBjbGVhblByb3BzID0gZnVuY3Rpb24gY2xlYW5Qcm9wcyhvYmosIGlnbm9yZUtleXMpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IF9leHRlbmRzKHt9LCBvYmopO1xuXG4gICAgICAgIGZvciAodmFyIGk7IGkgPCBpZ25vcmVLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG5ld09ialtpZ25vcmVLZXlzW2ldXSkge1xuICAgICAgICAgICAgbmV3T2JqW2lnbm9yZUtleXNbaV1dID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgICAgfTtcblxuICAgICAgY29uc29sZS5kaXIoY2xlYW5Qcm9wcyhwcm9wcywgaWdub3JlUHJvcHMpKTtcbiAgICAgIHZhciBibG9jayA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuUHJvcHMocHJvcHMsICFpZ25vcmVQcm9wcyksIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICB9KSxcbiAgICAgICAgdGVhc2VyLFxuICAgICAgICBiYWRnZSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuXG4gICAgICB2YXIgdHlwZSA9IHtcbiAgICAgICAgYmxvY2s6IGJsb2NrLFxuXG4gICAgICAgIGxpc3Q6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdsaScsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuUHJvcHMocHJvcHMsIGlnbm9yZVByb3BzKSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzLFxuICAgICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlYXNlcixcbiAgICAgICAgICBiYWRnZSxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICApLFxuXG4gICAgICAgIGxpbms6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5Qcm9wcyhwcm9wcywgaWdub3JlUHJvcHMpLCB7XG4gICAgICAgICAgICBocmVmOiBwcm9wcy5saW5rLFxuICAgICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGJsb2NrXG4gICAgICAgIClcbiAgICAgIH07XG5cbiAgICAgIC8vIFJldHVybiBDb21wb25lbnRcbiAgICAgIHJldHVybiB0eXBlW3Byb3BzLnR5cGVdIHx8IHR5cGVbJ2Jsb2NrJ107XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhbmVsO1xufSkoX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblBhbmVsLnByb3BUeXBlcyA9IHtcbiAgYmFkZ2U6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3RdKSxcbiAgYm94OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbnRleHQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcbiAgZGl2aWRlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBoZWFkZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaG92ZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGxpbms6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzcGFjZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICB0ZWFzZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0LFxuICB0aXRsZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydsaW5rJywgJ2xpc3QnLCAnYmxvY2snXSlcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKFBhbmVsKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LXBhbmVsL2xpYi9wYW5lbC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})