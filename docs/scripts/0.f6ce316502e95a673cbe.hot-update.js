webpackHotUpdate(0,{

/***/ 1613:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1541);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(439);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(935);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBadge = __webpack_require__(1610);\n\nvar _reactUikitBadge2 = _interopRequireDefault(_reactUikitBadge);\n\nvar _ramda = __webpack_require__(2939);\n\nvar _ramda2 = _interopRequireDefault(_ramda);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Panel = (function (_React$Component) {\n  _inherits(Panel, _React$Component);\n\n  function Panel() {\n    _classCallCheck(this, Panel);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).apply(this, arguments));\n  }\n\n  _createClass(Panel, [{\n    key: 'render',\n    value: function render() {\n      var props = this.props;\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-panel', props.classes, props.box ? 'uk-panel-box' : null, props.context ? 'uk-panel-box-' + props.context : null, props.divider ? 'uk-panel-divider' : null, props.header ? 'uk-panel-header' : null, props.hover ? 'uk-panel-hover' : null, props.space ? 'uk-panel-space' : null, props.className]);\n\n      // Elements\n      var ignoreProps = ['type', 'title', 'col'];\n\n      var badge = _ufunc2.default.maybeIf(_ufunc2.default.either(_react2.default.createElement(_reactUikitBadge2.default, null, props.badge), _react2.default.createElement(_reactUikitBadge2.default, { context: props.badge ? props.badge.context : null }, props.badge ? props.badge.body : 'Note'))(typeof props.badge === 'string'))(props.badge);\n\n      var icon = _ufunc2.default.maybeIf(_react2.default.createElement('i', { className: 'uk-icon-' + props.icon }))(props.icon);\n\n      var teaser = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-panel-teaser' }, _react2.default.createElement('img', { src: props.teaser ? props.teaser.src : null, alt: props.teaser ? props.teaser.alt : null })))(props.teaser);\n\n      var title = _ufunc2.default.maybeIf(_react2.default.createElement('h3', { className: 'uk-panel-title' }, icon, ' ', props.title))(props.title);\n\n      var cleanProps = function cleanProps(obj, ignoreKeys) {\n        console.log(ignoreKeys);\n        return Object.keys(obj).map(function (k) {\n          return [k, _ufunc2.default.either(null, obj[k])(ignoreKeys)];\n        });\n      };\n\n      console.dir(cleanProps(props, ignoreProps));\n      var block = _react2.default.createElement('div', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, !ignoreProps), {\n        className: cssClassNames,\n        'data-kitid': props.kitid\n      }), teaser, badge, title, props.children);\n\n      var type = {\n        block: block,\n\n        list: _react2.default.createElement('li', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n          className: cssClassNames,\n          'data-kitid': props.kitid\n        }), teaser, badge, title, props.children),\n\n        link: _react2.default.createElement('a', _extends({}, _reactUikitBase2.default.helpers.cleanProps(props, ignoreProps), {\n          href: props.link,\n          'data-kitid': props.kitid\n        }), block)\n      };\n\n      // Return Component\n      return type[props.type] || type['block'];\n    }\n  }]);\n\n  return Panel;\n})(_react2.default.Component);\n\nPanel.propTypes = {\n  badge: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),\n  box: _react2.default.PropTypes.bool,\n  context: _react2.default.PropTypes.oneOf(['primary', 'secondary']),\n  divider: _react2.default.PropTypes.bool,\n  header: _react2.default.PropTypes.bool,\n  hover: _react2.default.PropTypes.bool,\n  icon: _react2.default.PropTypes.string,\n  link: _react2.default.PropTypes.string,\n  space: _react2.default.PropTypes.bool,\n  teaser: _react2.default.PropTypes.object,\n  title: _react2.default.PropTypes.string,\n  type: _react2.default.PropTypes.oneOf(['link', 'list', 'block'])\n};\n\nexports.default = _reactUikitBase2.default.base(Panel);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1wYW5lbC9saWIvcGFuZWwuanM/ZTFkNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENB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Q0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbEUsU0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDdkMsUUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDdEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDckMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdEMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDckMsUUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDeEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDakUsQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDIiwiZmlsZSI6IjE2MTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtYmFzZScpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYXNlKTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG52YXIgX3JlYWN0VWlraXRCYWRnZSA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LWJhZGdlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhZGdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYWRnZSk7XG5cbnZhciBfcmFtZGEgPSByZXF1aXJlKCdyYW1kYScpO1xuXG52YXIgX3JhbWRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbWRhKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGFuZWwgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBhbmVsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYW5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFuZWwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihQYW5lbCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFuZWwsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgLy8gQ1NTIGNsYXNzZXNcbiAgICAgIHZhciBjc3NDbGFzc05hbWVzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFsndWstcGFuZWwnLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5ib3ggPyAndWstcGFuZWwtYm94JyA6IG51bGwsIHByb3BzLmNvbnRleHQgPyAndWstcGFuZWwtYm94LScgKyBwcm9wcy5jb250ZXh0IDogbnVsbCwgcHJvcHMuZGl2aWRlciA/ICd1ay1wYW5lbC1kaXZpZGVyJyA6IG51bGwsIHByb3BzLmhlYWRlciA/ICd1ay1wYW5lbC1oZWFkZXInIDogbnVsbCwgcHJvcHMuaG92ZXIgPyAndWstcGFuZWwtaG92ZXInIDogbnVsbCwgcHJvcHMuc3BhY2UgPyAndWstcGFuZWwtc3BhY2UnIDogbnVsbCwgcHJvcHMuY2xhc3NOYW1lXSk7XG5cbiAgICAgIC8vIEVsZW1lbnRzXG4gICAgICB2YXIgaWdub3JlUHJvcHMgPSBbJ3R5cGUnLCAndGl0bGUnLCAnY29sJ107XG5cbiAgICAgIHZhciBiYWRnZSA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF91ZnVuYzIuZGVmYXVsdC5laXRoZXIoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdFVpa2l0QmFkZ2UyLmRlZmF1bHQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHByb3BzLmJhZGdlXG4gICAgICApLCBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0VWlraXRCYWRnZTIuZGVmYXVsdCxcbiAgICAgICAgeyBjb250ZXh0OiBwcm9wcy5iYWRnZSA/IHByb3BzLmJhZGdlLmNvbnRleHQgOiBudWxsIH0sXG4gICAgICAgIHByb3BzLmJhZGdlID8gcHJvcHMuYmFkZ2UuYm9keSA6ICdOb3RlJ1xuICAgICAgKSkodHlwZW9mIHByb3BzLmJhZGdlID09PSAnc3RyaW5nJykpKHByb3BzLmJhZGdlKTtcblxuICAgICAgdmFyIGljb24gPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiAndWstaWNvbi0nICsgcHJvcHMuaWNvbiB9KSkocHJvcHMuaWNvbik7XG5cbiAgICAgIHZhciB0ZWFzZXIgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAndWstcGFuZWwtdGVhc2VyJyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHByb3BzLnRlYXNlciA/IHByb3BzLnRlYXNlci5zcmMgOiBudWxsLCBhbHQ6IHByb3BzLnRlYXNlciA/IHByb3BzLnRlYXNlci5hbHQgOiBudWxsIH0pXG4gICAgICApKShwcm9wcy50ZWFzZXIpO1xuXG4gICAgICB2YXIgdGl0bGUgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2gzJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICd1ay1wYW5lbC10aXRsZScgfSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgJyAnLFxuICAgICAgICBwcm9wcy50aXRsZVxuICAgICAgKSkocHJvcHMudGl0bGUpO1xuXG4gICAgICB2YXIgY2xlYW5Qcm9wcyA9IGZ1bmN0aW9uIGNsZWFuUHJvcHMob2JqLCBpZ25vcmVLZXlzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlnbm9yZUtleXMpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gW2ssIF91ZnVuYzIuZGVmYXVsdC5laXRoZXIobnVsbCwgb2JqW2tdKShpZ25vcmVLZXlzKV07XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc29sZS5kaXIoY2xlYW5Qcm9wcyhwcm9wcywgaWdub3JlUHJvcHMpKTtcbiAgICAgIHZhciBibG9jayA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuUHJvcHMocHJvcHMsICFpZ25vcmVQcm9wcyksIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICB9KSxcbiAgICAgICAgdGVhc2VyLFxuICAgICAgICBiYWRnZSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuXG4gICAgICB2YXIgdHlwZSA9IHtcbiAgICAgICAgYmxvY2s6IGJsb2NrLFxuXG4gICAgICAgIGxpc3Q6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdsaScsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuUHJvcHMocHJvcHMsIGlnbm9yZVByb3BzKSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzLFxuICAgICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlYXNlcixcbiAgICAgICAgICBiYWRnZSxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICApLFxuXG4gICAgICAgIGxpbms6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5Qcm9wcyhwcm9wcywgaWdub3JlUHJvcHMpLCB7XG4gICAgICAgICAgICBocmVmOiBwcm9wcy5saW5rLFxuICAgICAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGJsb2NrXG4gICAgICAgIClcbiAgICAgIH07XG5cbiAgICAgIC8vIFJldHVybiBDb21wb25lbnRcbiAgICAgIHJldHVybiB0eXBlW3Byb3BzLnR5cGVdIHx8IHR5cGVbJ2Jsb2NrJ107XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhbmVsO1xufSkoX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblBhbmVsLnByb3BUeXBlcyA9IHtcbiAgYmFkZ2U6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3RdKSxcbiAgYm94OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbnRleHQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcbiAgZGl2aWRlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBoZWFkZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaG92ZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGxpbms6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzcGFjZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICB0ZWFzZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0LFxuICB0aXRsZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydsaW5rJywgJ2xpc3QnLCAnYmxvY2snXSlcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKFBhbmVsKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LXBhbmVsL2xpYi9wYW5lbC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})