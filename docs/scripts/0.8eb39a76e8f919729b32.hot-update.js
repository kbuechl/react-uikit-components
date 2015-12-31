webpackHotUpdate(0,{

/***/ 1613:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1541);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(439);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(935);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBadge = __webpack_require__(1610);\n\nvar _reactUikitBadge2 = _interopRequireDefault(_reactUikitBadge);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Panel = (function (_React$Component) {\n  _inherits(Panel, _React$Component);\n\n  function Panel() {\n    _classCallCheck(this, Panel);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).apply(this, arguments));\n  }\n\n  _createClass(Panel, [{\n    key: 'render',\n    value: function render() {\n      var props = this.props;\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-panel', props.classes, props.box ? 'uk-panel-box' : null, props.context ? 'uk-panel-box-' + props.context : null, props.divider ? 'uk-panel-divider' : null, props.header ? 'uk-panel-header' : null, props.hover ? 'uk-panel-hover' : null, props.space ? 'uk-panel-space' : null, props.className]);\n\n      // Elements\n      var ignoreProps = ['type', 'title'];\n\n      var badge = _ufunc2.default.maybeIf(_ufunc2.default.either(_react2.default.createElement(_reactUikitBadge2.default, null, props.badge), _react2.default.createElement(_reactUikitBadge2.default, { context: props.badge ? props.badge.context : null }, props.badge ? props.badge.body : 'Note'))(typeof props.badge === 'string'))(props.badge);\n\n      var icon = _ufunc2.default.maybeIf(_react2.default.createElement('i', { className: 'uk-icon-' + props.icon }))(props.icon);\n\n      var teaser = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-panel-teaser' }, _react2.default.createElement('img', { src: props.teaser ? props.teaser.src : null, alt: props.teaser ? props.teaser.alt : null })))(props.teaser);\n\n      var title = _ufunc2.default.maybeIf(_react2.default.createElement('h3', { className: 'uk-panel-title' }, icon, ' ', props.title))(props.title);\n\n      var cleanProps = function cleanProps(obj, ignoreKeys) {\n        return Object.keys(obj).map(function (k) {\n          k;\n        });\n      };\n\n      console.dir(cleanProps(props, ignoreProps));\n      var block = _react2.default.createElement('div', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n        className: cssClassNames,\n        'data-kitid': props.kitid\n      }), teaser, badge, title, props.children);\n\n      var type = {\n        block: block,\n\n        list: _react2.default.createElement('li', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n          className: cssClassNames,\n          'data-kitid': props.kitid\n        }), teaser, badge, title, props.children),\n\n        link: _react2.default.createElement('a', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n          href: props.link,\n          'data-kitid': props.kitid\n        }), block)\n      };\n\n      // Return Component\n      return type[props.type] || type['block'];\n    }\n  }]);\n\n  return Panel;\n})(_react2.default.Component);\n\nPanel.propTypes = {\n  badge: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),\n  box: _react2.default.PropTypes.bool,\n  context: _react2.default.PropTypes.oneOf(['primary', 'secondary']),\n  divider: _react2.default.PropTypes.bool,\n  header: _react2.default.PropTypes.bool,\n  hover: _react2.default.PropTypes.bool,\n  icon: _react2.default.PropTypes.string,\n  link: _react2.default.PropTypes.string,\n  space: _react2.default.PropTypes.bool,\n  teaser: _react2.default.PropTypes.object,\n  title: _react2.default.PropTypes.string,\n  type: _react2.default.PropTypes.oneOf(['link', 'list', 'block'])\n};\n\nexports.default = _reactUikitBase2.default.base(Panel);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1wYW5lbC9saWIvcGFuZWwuanM/ZTFkNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENB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Q0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDckMsUUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDeEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDakUsQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDIiwiZmlsZSI6IjE2MTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtYmFzZScpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYXNlKTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG52YXIgX3JlYWN0VWlraXRCYWRnZSA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LWJhZGdlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhZGdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYWRnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBhbmVsID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYW5lbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGFuZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhbmVsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUGFuZWwpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhbmVsLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgIC8vIENTUyBjbGFzc2VzXG4gICAgICB2YXIgY3NzQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbJ3VrLXBhbmVsJywgcHJvcHMuY2xhc3NlcywgcHJvcHMuYm94ID8gJ3VrLXBhbmVsLWJveCcgOiBudWxsLCBwcm9wcy5jb250ZXh0ID8gJ3VrLXBhbmVsLWJveC0nICsgcHJvcHMuY29udGV4dCA6IG51bGwsIHByb3BzLmRpdmlkZXIgPyAndWstcGFuZWwtZGl2aWRlcicgOiBudWxsLCBwcm9wcy5oZWFkZXIgPyAndWstcGFuZWwtaGVhZGVyJyA6IG51bGwsIHByb3BzLmhvdmVyID8gJ3VrLXBhbmVsLWhvdmVyJyA6IG51bGwsIHByb3BzLnNwYWNlID8gJ3VrLXBhbmVsLXNwYWNlJyA6IG51bGwsIHByb3BzLmNsYXNzTmFtZV0pO1xuXG4gICAgICAvLyBFbGVtZW50c1xuICAgICAgdmFyIGlnbm9yZVByb3BzID0gWyd0eXBlJywgJ3RpdGxlJ107XG5cbiAgICAgIHZhciBiYWRnZSA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF91ZnVuYzIuZGVmYXVsdC5laXRoZXIoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdFVpa2l0QmFkZ2UyLmRlZmF1bHQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHByb3BzLmJhZGdlXG4gICAgICApLCBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0VWlraXRCYWRnZTIuZGVmYXVsdCxcbiAgICAgICAgeyBjb250ZXh0OiBwcm9wcy5iYWRnZSA/IHByb3BzLmJhZGdlLmNvbnRleHQgOiBudWxsIH0sXG4gICAgICAgIHByb3BzLmJhZGdlID8gcHJvcHMuYmFkZ2UuYm9keSA6ICdOb3RlJ1xuICAgICAgKSkodHlwZW9mIHByb3BzLmJhZGdlID09PSAnc3RyaW5nJykpKHByb3BzLmJhZGdlKTtcblxuICAgICAgdmFyIGljb24gPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiAndWstaWNvbi0nICsgcHJvcHMuaWNvbiB9KSkocHJvcHMuaWNvbik7XG5cbiAgICAgIHZhciB0ZWFzZXIgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAndWstcGFuZWwtdGVhc2VyJyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHByb3BzLnRlYXNlciA/IHByb3BzLnRlYXNlci5zcmMgOiBudWxsLCBhbHQ6IHByb3BzLnRlYXNlciA/IHByb3BzLnRlYXNlci5hbHQgOiBudWxsIH0pXG4gICAgICApKShwcm9wcy50ZWFzZXIpO1xuXG4gICAgICB2YXIgdGl0bGUgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2gzJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICd1ay1wYW5lbC10aXRsZScgfSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgJyAnLFxuICAgICAgICBwcm9wcy50aXRsZVxuICAgICAgKSkocHJvcHMudGl0bGUpO1xuXG4gICAgICB2YXIgY2xlYW5Qcm9wcyA9IGZ1bmN0aW9uIGNsZWFuUHJvcHMob2JqLCBpZ25vcmVLZXlzKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgIGs7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc29sZS5kaXIoY2xlYW5Qcm9wcyhwcm9wcywgaWdub3JlUHJvcHMpKTtcbiAgICAgIHZhciBibG9jayA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuUHJvcHMocHJvcHMsIGlnbm9yZVByb3BzKSwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAgICAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkXG4gICAgICAgIH0pLFxuICAgICAgICB0ZWFzZXIsXG4gICAgICAgIGJhZGdlLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG5cbiAgICAgIHZhciB0eXBlID0ge1xuICAgICAgICBibG9jazogYmxvY2ssXG5cbiAgICAgICAgbGlzdDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2xpJyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5Qcm9wcyhwcm9wcywgaWdub3JlUHJvcHMpLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgICAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVhc2VyLFxuICAgICAgICAgIGJhZGdlLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICksXG5cbiAgICAgICAgbGluazogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2EnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhblByb3BzKHByb3BzLCBpZ25vcmVQcm9wcyksIHtcbiAgICAgICAgICAgIGhyZWY6IHByb3BzLmxpbmssXG4gICAgICAgICAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYmxvY2tcbiAgICAgICAgKVxuICAgICAgfTtcblxuICAgICAgLy8gUmV0dXJuIENvbXBvbmVudFxuICAgICAgcmV0dXJuIHR5cGVbcHJvcHMudHlwZV0gfHwgdHlwZVsnYmxvY2snXTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGFuZWw7XG59KShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuUGFuZWwucHJvcFR5cGVzID0ge1xuICBiYWRnZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdF0pLFxuICBib3g6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY29udGV4dDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuICBkaXZpZGVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGhlYWRlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBpY29uOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgbGluazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNwYWNlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHRlYXNlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3QsXG4gIHRpdGxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2xpbmsnLCAnbGlzdCcsICdibG9jayddKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoUGFuZWwpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtcGFuZWwvbGliL3BhbmVsLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})