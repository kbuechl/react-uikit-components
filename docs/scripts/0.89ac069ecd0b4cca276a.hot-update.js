webpackHotUpdate(0,{

/***/ 1613:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1541);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(439);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(935);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBadge = __webpack_require__(1610);\n\nvar _reactUikitBadge2 = _interopRequireDefault(_reactUikitBadge);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Panel = (function (_React$Component) {\n  _inherits(Panel, _React$Component);\n\n  function Panel() {\n    _classCallCheck(this, Panel);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).apply(this, arguments));\n  }\n\n  _createClass(Panel, [{\n    key: 'render',\n    value: function render() {\n      var props = this.props;\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-panel', props.classes, props.box ? 'uk-panel-box' : null, props.context ? 'uk-panel-box-' + props.context : null, props.divider ? 'uk-panel-divider' : null, props.header ? 'uk-panel-header' : null, props.hover ? 'uk-panel-hover' : null, props.space ? 'uk-panel-space' : null, props.className]);\n\n      // Elements\n      var ignoreProps = ['type', 'title'];\n\n      var badge = _ufunc2.default.maybeIf(_ufunc2.default.either(_react2.default.createElement(_reactUikitBadge2.default, null, props.badge), _react2.default.createElement(_reactUikitBadge2.default, { context: props.badge ? props.badge.context : null }, props.badge ? props.badge.body : 'Note'))(typeof props.badge === 'string'))(props.badge);\n\n      var icon = _ufunc2.default.maybeIf(_react2.default.createElement('i', { className: 'uk-icon-' + props.icon }))(props.icon);\n\n      var teaser = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-panel-teaser' }, _react2.default.createElement('img', { src: props.teaser ? props.teaser.src : null, alt: props.teaser ? props.teaser.alt : null })))(props.teaser);\n\n      var title = _ufunc2.default.maybeIf(_react2.default.createElement('h3', { className: 'uk-panel-title' }, icon, ' ', props.title))(props.title);\n\n      var cleanProps = function cleanProps(obj, ignoreKeys) {\n        return obj['box'];\n      };\n\n      console.dir(cleanProps(props, ignoreProps));\n      var block = _react2.default.createElement('div', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n        className: cssClassNames,\n        'data-kitid': props.kitid\n      }), teaser, badge, title, props.children);\n\n      var type = {\n        block: block,\n\n        list: _react2.default.createElement('li', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n          className: cssClassNames,\n          'data-kitid': props.kitid\n        }), teaser, badge, title, props.children),\n\n        link: _react2.default.createElement('a', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n          href: props.link,\n          'data-kitid': props.kitid\n        }), block)\n      };\n\n      // Return Component\n      return type[props.type] || type['block'];\n    }\n  }]);\n\n  return Panel;\n})(_react2.default.Component);\n\nPanel.propTypes = {\n  badge: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),\n  box: _react2.default.PropTypes.bool,\n  context: _react2.default.PropTypes.oneOf(['primary', 'secondary']),\n  divider: _react2.default.PropTypes.bool,\n  header: _react2.default.PropTypes.bool,\n  hover: _react2.default.PropTypes.bool,\n  icon: _react2.default.PropTypes.string,\n  link: _react2.default.PropTypes.string,\n  space: _react2.default.PropTypes.bool,\n  teaser: _react2.default.PropTypes.object,\n  title: _react2.default.PropTypes.string,\n  type: _react2.default.PropTypes.oneOf(['link', 'list', 'block'])\n};\n\nexports.default = _reactUikitBase2.default.base(Panel);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1wYW5lbC9saWIvcGFuZWwuanM/ZTFkNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENB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LFNBQVMsQ0FBQyxJQUFJO0FBQ3JDLFFBQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3hDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ2pFLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyIsImZpbGUiOiIxNjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9yZWFjdFVpa2l0QmFkZ2UgPSByZXF1aXJlKCcuLi8uLi9yZWFjdC11aWtpdC1iYWRnZScpO1xuXG52YXIgX3JlYWN0VWlraXRCYWRnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFkZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYW5lbCA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUGFuZWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBhbmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBhbmVsKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYW5lbCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICAvLyBDU1MgY2xhc3Nlc1xuICAgICAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoWyd1ay1wYW5lbCcsIHByb3BzLmNsYXNzZXMsIHByb3BzLmJveCA/ICd1ay1wYW5lbC1ib3gnIDogbnVsbCwgcHJvcHMuY29udGV4dCA/ICd1ay1wYW5lbC1ib3gtJyArIHByb3BzLmNvbnRleHQgOiBudWxsLCBwcm9wcy5kaXZpZGVyID8gJ3VrLXBhbmVsLWRpdmlkZXInIDogbnVsbCwgcHJvcHMuaGVhZGVyID8gJ3VrLXBhbmVsLWhlYWRlcicgOiBudWxsLCBwcm9wcy5ob3ZlciA/ICd1ay1wYW5lbC1ob3ZlcicgOiBudWxsLCBwcm9wcy5zcGFjZSA/ICd1ay1wYW5lbC1zcGFjZScgOiBudWxsLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgLy8gRWxlbWVudHNcbiAgICAgIHZhciBpZ25vcmVQcm9wcyA9IFsndHlwZScsICd0aXRsZSddO1xuXG4gICAgICB2YXIgYmFkZ2UgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RVaWtpdEJhZGdlMi5kZWZhdWx0LFxuICAgICAgICBudWxsLFxuICAgICAgICBwcm9wcy5iYWRnZVxuICAgICAgKSwgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdFVpa2l0QmFkZ2UyLmRlZmF1bHQsXG4gICAgICAgIHsgY29udGV4dDogcHJvcHMuYmFkZ2UgPyBwcm9wcy5iYWRnZS5jb250ZXh0IDogbnVsbCB9LFxuICAgICAgICBwcm9wcy5iYWRnZSA/IHByb3BzLmJhZGdlLmJvZHkgOiAnTm90ZSdcbiAgICAgICkpKHR5cGVvZiBwcm9wcy5iYWRnZSA9PT0gJ3N0cmluZycpKShwcm9wcy5iYWRnZSk7XG5cbiAgICAgIHZhciBpY29uID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ3VrLWljb24tJyArIHByb3BzLmljb24gfSkpKHByb3BzLmljb24pO1xuXG4gICAgICB2YXIgdGVhc2VyID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3VrLXBhbmVsLXRlYXNlcicgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBwcm9wcy50ZWFzZXIgPyBwcm9wcy50ZWFzZXIuc3JjIDogbnVsbCwgYWx0OiBwcm9wcy50ZWFzZXIgPyBwcm9wcy50ZWFzZXIuYWx0IDogbnVsbCB9KVxuICAgICAgKSkocHJvcHMudGVhc2VyKTtcblxuICAgICAgdmFyIHRpdGxlID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoMycsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAndWstcGFuZWwtdGl0bGUnIH0sXG4gICAgICAgIGljb24sXG4gICAgICAgICcgJyxcbiAgICAgICAgcHJvcHMudGl0bGVcbiAgICAgICkpKHByb3BzLnRpdGxlKTtcblxuICAgICAgdmFyIGNsZWFuUHJvcHMgPSBmdW5jdGlvbiBjbGVhblByb3BzKG9iaiwgaWdub3JlS2V5cykge1xuICAgICAgICByZXR1cm4gb2JqWydib3gnXTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUuZGlyKGNsZWFuUHJvcHMocHJvcHMsIGlnbm9yZVByb3BzKSk7XG4gICAgICB2YXIgYmxvY2sgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHt9LCBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhblByb3BzKHByb3BzLCBpZ25vcmVQcm9wcyksIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICB9KSxcbiAgICAgICAgdGVhc2VyLFxuICAgICAgICBiYWRnZSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuXG4gICAgICB2YXIgdHlwZSA9IHtcbiAgICAgICAgYmxvY2s6IGJsb2NrLFxuXG4gICAgICAgIGxpc3Q6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdsaScsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuUHJvcHMocHJvcHMsIGlnbm9yZVByb3BzKSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzLFxuICAgICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlYXNlcixcbiAgICAgICAgICBiYWRnZSxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICApLFxuXG4gICAgICAgIGxpbms6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5Qcm9wcyhwcm9wcywgaWdub3JlUHJvcHMpLCB7XG4gICAgICAgICAgICBocmVmOiBwcm9wcy5saW5rLFxuICAgICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGJsb2NrXG4gICAgICAgIClcbiAgICAgIH07XG5cbiAgICAgIC8vIFJldHVybiBDb21wb25lbnRcbiAgICAgIHJldHVybiB0eXBlW3Byb3BzLnR5cGVdIHx8IHR5cGVbJ2Jsb2NrJ107XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhbmVsO1xufSkoX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblBhbmVsLnByb3BUeXBlcyA9IHtcbiAgYmFkZ2U6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3RdKSxcbiAgYm94OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbnRleHQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcbiAgZGl2aWRlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBoZWFkZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaG92ZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGxpbms6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzcGFjZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICB0ZWFzZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0LFxuICB0aXRsZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydsaW5rJywgJ2xpc3QnLCAnYmxvY2snXSlcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKFBhbmVsKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LXBhbmVsL2xpYi9wYW5lbC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})