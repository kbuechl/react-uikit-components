webpackHotUpdate(0,{

/***/ 1856:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1682);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(164);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(1683);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBadge = __webpack_require__(1119);\n\nvar _reactUikitBadge2 = _interopRequireDefault(_reactUikitBadge);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar ListItem = (function (_React$Component) {\n  _inherits(ListItem, _React$Component);\n\n  function ListItem() {\n    _classCallCheck(this, ListItem);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));\n  }\n\n  _createClass(ListItem, [{\n    key: 'handleClick',\n    value: function handleClick(e, index) {\n      e.preventDefault();\n      e.stopPropagation();\n\n      var idx = undefined;\n      if (index.charAt && index.charAt(0) === '.') {\n        idx = index.match(/\\$(.+)$/)[1];\n      } else {\n        idx = index;\n      }\n\n      if (this.props.onClick) {\n        this.props.onClick(Object.assign({\n          item: {\n            index: idx,\n            kitid: this.props.kitid\n          }\n        }, e));\n      }\n    }\n  }, {\n    key: 'handleSelect',\n    value: function handleSelect(e, index) {\n      e.preventDefault();\n      e.stopPropagation();\n      this.props.onSelect(Object.assign({ kitid: this.getItemId(index) }, e));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var props = this.props;\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([props.active ? 'uk-active' : null, props.classes, props.className]);\n\n      // Elements\n      var badge = _ufunc2.default.maybeIf(_react2.default.createElement(_reactUikitBadge2.default, {\n        kitid: 'badge-' + props.kitid,\n        floats: 'right',\n        body: props.badge ? props.badge.body : null,\n        context: props.badge ? props.badge.context : null,\n        notification: props.badge ? props.badge.notification : null\n      }))(props.badge);\n\n      var selectable = function selectable(checked, index) {\n        return _ufunc2.default.maybeIf(_react2.default.createElement('input', {\n          type: 'checkbox',\n          className: 'close',\n          checked: checked,\n          'data-kitid': 'input-' + props.kitid,\n          onSelect: function onSelect(e, index) {\n            return _this2.handleSelect(e, index);\n          }\n        }))(props.selectable);\n      };\n      console.log(selectable);\n      var attr = _extends({}, props, _reactUikitBase2.default.events(props), {\n        'data-kitid': props.kitid,\n        className: cssClassNames,\n        onClick: function onClick(e, index) {\n          return _this2.handleClick(e, index);\n        }\n      });\n\n      var link = _react2.default.createElement('li', _extends({}, attr, {\n        className: cssClassNames }), _react2.default.createElement('a', { style: { display: 'block' },\n        href: props.href,\n        className: props.active ? 'uk-active' : null\n      }, selectable, ' ', props.body, ' ', badge));\n\n      var text = _react2.default.createElement('li', attr, props.selectable, ' ', props.body, ' ', props.children);\n\n      // Return Component\n      var component = _ufunc2.default.either(link, text);\n      return component(props.href);\n    }\n  }]);\n\n  return ListItem;\n})(_react2.default.Component);\n\n;\n\nListItem.propTypes = {\n  active: _react2.default.PropTypes.bool,\n  badge: _react2.default.PropTypes.object,\n  body: _react2.default.PropTypes.string,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  description: _react2.default.PropTypes.string,\n  href: _react2.default.PropTypes.string,\n  kitid: _react2.default.PropTypes.string,\n  onClick: _react2.default.PropTypes.func,\n  onSelect: _react2.default.PropTypes.func,\n  selectable: _react2.default.PropTypes.bool\n};\n\nexports.default = _reactUikitBase2.default.base(ListItem);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1saXN0L2xpYi9saXN0LWl0ZW0uanM/MDA5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFV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QUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsU0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDdkMsVUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDeEMsWUFBVSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7Q0FDM0MsQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IjE4NTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtYmFzZScpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYXNlKTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG52YXIgX3JlYWN0VWlraXRCYWRnZSA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LWJhZGdlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhZGdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYWRnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIExpc3RJdGVtID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMaXN0SXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlzdEl0ZW0oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3RJdGVtKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGlzdEl0ZW0pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpc3RJdGVtLCBbe1xuICAgIGtleTogJ2hhbmRsZUNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSwgaW5kZXgpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHZhciBpZHggPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoaW5kZXguY2hhckF0ICYmIGluZGV4LmNoYXJBdCgwKSA9PT0gJy4nKSB7XG4gICAgICAgIGlkeCA9IGluZGV4Lm1hdGNoKC9cXCQoLispJC8pWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWR4ID0gaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIGluZGV4OiBpZHgsXG4gICAgICAgICAgICBraXRpZDogdGhpcy5wcm9wcy5raXRpZFxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVNlbGVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChlLCBpbmRleCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoT2JqZWN0LmFzc2lnbih7IGtpdGlkOiB0aGlzLmdldEl0ZW1JZChpbmRleCkgfSwgZSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICAvLyBDU1MgY2xhc3Nlc1xuICAgICAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoW3Byb3BzLmFjdGl2ZSA/ICd1ay1hY3RpdmUnIDogbnVsbCwgcHJvcHMuY2xhc3NlcywgcHJvcHMuY2xhc3NOYW1lXSk7XG5cbiAgICAgIC8vIEVsZW1lbnRzXG4gICAgICB2YXIgYmFkZ2UgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RVaWtpdEJhZGdlMi5kZWZhdWx0LCB7XG4gICAgICAgIGtpdGlkOiAnYmFkZ2UtJyArIHByb3BzLmtpdGlkLFxuICAgICAgICBmbG9hdHM6ICdyaWdodCcsXG4gICAgICAgIGJvZHk6IHByb3BzLmJhZGdlID8gcHJvcHMuYmFkZ2UuYm9keSA6IG51bGwsXG4gICAgICAgIGNvbnRleHQ6IHByb3BzLmJhZGdlID8gcHJvcHMuYmFkZ2UuY29udGV4dCA6IG51bGwsXG4gICAgICAgIG5vdGlmaWNhdGlvbjogcHJvcHMuYmFkZ2UgPyBwcm9wcy5iYWRnZS5ub3RpZmljYXRpb24gOiBudWxsXG4gICAgICB9KSkocHJvcHMuYmFkZ2UpO1xuXG4gICAgICB2YXIgc2VsZWN0YWJsZSA9IGZ1bmN0aW9uIHNlbGVjdGFibGUoY2hlY2tlZCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgICAgICdkYXRhLWtpdGlkJzogJ2lucHV0LScgKyBwcm9wcy5raXRpZCxcbiAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuaGFuZGxlU2VsZWN0KGUsIGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKShwcm9wcy5zZWxlY3RhYmxlKTtcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RhYmxlKTtcbiAgICAgIHZhciBhdHRyID0gX2V4dGVuZHMoe30sIHByb3BzLCBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuZXZlbnRzKHByb3BzKSwge1xuICAgICAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkLFxuICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUNsaWNrKGUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBsaW5rID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsaScsXG4gICAgICAgIF9leHRlbmRzKHt9LCBhdHRyLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnYScsXG4gICAgICAgICAgeyBzdHlsZTogeyBkaXNwbGF5OiAnYmxvY2snIH0sXG4gICAgICAgICAgICBocmVmOiBwcm9wcy5ocmVmLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5hY3RpdmUgPyAndWstYWN0aXZlJyA6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGFibGUsXG4gICAgICAgICAgJyAnLFxuICAgICAgICAgIHByb3BzLmJvZHksXG4gICAgICAgICAgJyAnLFxuICAgICAgICAgIGJhZGdlXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHZhciB0ZXh0ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsaScsXG4gICAgICAgIGF0dHIsXG4gICAgICAgIHByb3BzLnNlbGVjdGFibGUsXG4gICAgICAgICcgJyxcbiAgICAgICAgcHJvcHMuYm9keSxcbiAgICAgICAgJyAnLFxuICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgKTtcblxuICAgICAgLy8gUmV0dXJuIENvbXBvbmVudFxuICAgICAgdmFyIGNvbXBvbmVudCA9IF91ZnVuYzIuZGVmYXVsdC5laXRoZXIobGluaywgdGV4dCk7XG4gICAgICByZXR1cm4gY29tcG9uZW50KHByb3BzLmhyZWYpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaXN0SXRlbTtcbn0pKF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG47XG5cbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGJhZGdlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdCxcbiAgYm9keTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NlczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAgZGVzY3JpcHRpb246IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBocmVmOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGFibGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoTGlzdEl0ZW0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtbGlzdC9saWIvbGlzdC1pdGVtLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})