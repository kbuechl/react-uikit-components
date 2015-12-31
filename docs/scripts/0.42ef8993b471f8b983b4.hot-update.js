webpackHotUpdate(0,{

/***/ 3805:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3729);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(202);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(3730);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _listItem = __webpack_require__(3731);\n\nvar _listItem2 = _interopRequireDefault(_listItem);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar List = (function (_React$Component) {\n  _inherits(List, _React$Component);\n\n  function List() {\n    _classCallCheck(this, List);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));\n  }\n\n  _createClass(List, [{\n    key: 'handleClick',\n    value: function handleClick(e) {\n      this.props.onClick(Object.assign({ kitid: this.props.kitid }, e));\n    }\n  }, {\n    key: 'handleSelect',\n    value: function handleSelect(e) {\n      // this,props.onSelect(Object.assign({kitid: this.props.kitid}, e));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var props = this.props;\n      var ignoreProps = ['type'];\n      var cleanProps = _reactUikitBase2.default.helpers.cleanProps(ignoreProps)(props);\n\n      // CSS classes\n      var isLine = _ufunc2.default.either('uk-list-line', 'uk-description-list-line');\n      var isHor = _ufunc2.default.maybeIf('uk-description-list-horizontal')(props.type === 'description');\n\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([props.type !== 'description' ? 'uk-list' : null, props.horizontal ? isHor : null, !props.line ? null : isLine(props.type !== 'description'), props.striped ? 'uk-list-striped' : null, props.space ? 'uk-list-space' : null, props.classes, props.className]);\n\n      // Elements\n      var selectable = function selectable(index) {\n        return _ufunc2.default.maybeIf(_react2.default.createElement('input', {\n          type: 'checkbox',\n          className: 'close',\n          checked: props.checked,\n          onClick: function onClick(e, props) {\n            return _this2.handleSelect(e, props);\n          }\n        }))(props.onSelect);\n      };\n\n      var link = function link(item, index) {\n        return _react2.default.createElement(_listItem2.default, _extends({\n          key: index\n        }, item, {\n          kitid: '$item-' + index + '-' + props.kitid,\n          selectable: selectable(index),\n          onClick: function onClick(e, props) {\n            return _this2.handleClick(e, props);\n          }\n        }));\n      };\n\n      var text = function text(item, index) {\n        return _react2.default.createElement(_listItem2.default, {\n          key: index,\n          body: item,\n          selectable: selectable(index),\n          onClick: function onClick(e, props) {\n            return _this2.handleClick(e, props);\n          }\n        });\n      };\n\n      var items = undefined;\n      if (props.items) {\n        items = props.items.map(function (item, index) {\n          return _ufunc2.default.either(link(item, index), text(item, index))(item.href);\n        });\n      }\n\n      var attr = _extends({}, cleanProps, _reactUikitBase2.default.events(props), {\n        'data-kitid': props.kitid,\n        className: cssClassNames\n      });\n\n      var type = {\n        unorderd: _react2.default.createElement('ul', attr, items, props.children),\n\n        ordered: _react2.default.createElement('ol', attr, items, props.children),\n\n        description: _react2.default.createElement('dl', attr, props.children)\n      };\n\n      // Return Component\n      return type[props.type] || type['unorderd'];\n    }\n  }]);\n\n  return List;\n})(_react2.default.Component);\n\n;\n\nList.propTypes = {\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  description: _react2.default.PropTypes.string,\n  items: _react2.default.PropTypes.array,\n  horizontal: _react2.default.PropTypes.bool,\n  kitid: _react2.default.PropTypes.string,\n  line: _react2.default.PropTypes.bool,\n  striped: _react2.default.PropTypes.bool,\n  onSelect: _react2.default.PropTypes.func,\n  space: _react2.default.PropTypes.bool,\n  type: _react2.default.PropTypes.oneOf(['description', 'ordered', 'unorderd'])\n};\n\nexports.default = _reactUikitBase2.default.base(List);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1saXN0L2xpYi9saXN0LmpzPzdhYjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7O0FBRWIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRTtBQUFFLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsUUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQUUsVUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQUUsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUFFO0tBQUU7R0FBRyxPQUFPLE1BQU0sQ0FBQztDQUFFLENBQUM7O0FBRWpRLElBQUksWUFBWSxHQUFHLENBQUMsWUFBWTtBQUFFLFdBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFFLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsVUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUUsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUUsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFD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SUFBSTtBQUMxQyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNwQyxTQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN2QyxVQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN4QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM5RSxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMiLCJmaWxlIjoiMzgwNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCcuLi8uLi9yZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbnZhciBfbGlzdEl0ZW0gPSByZXF1aXJlKCcuL2xpc3QtaXRlbScpO1xuXG52YXIgX2xpc3RJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3RJdGVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTGlzdCA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGlzdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlzdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlzdCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKExpc3QpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpc3QsIFt7XG4gICAga2V5OiAnaGFuZGxlQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soT2JqZWN0LmFzc2lnbih7IGtpdGlkOiB0aGlzLnByb3BzLmtpdGlkIH0sIGUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVTZWxlY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZSkge1xuICAgICAgLy8gdGhpcyxwcm9wcy5vblNlbGVjdChPYmplY3QuYXNzaWduKHtraXRpZDogdGhpcy5wcm9wcy5raXRpZH0sIGUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBpZ25vcmVQcm9wcyA9IFsndHlwZSddO1xuICAgICAgdmFyIGNsZWFuUHJvcHMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhblByb3BzKGlnbm9yZVByb3BzKShwcm9wcyk7XG5cbiAgICAgIC8vIENTUyBjbGFzc2VzXG4gICAgICB2YXIgaXNMaW5lID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcigndWstbGlzdC1saW5lJywgJ3VrLWRlc2NyaXB0aW9uLWxpc3QtbGluZScpO1xuICAgICAgdmFyIGlzSG9yID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoJ3VrLWRlc2NyaXB0aW9uLWxpc3QtaG9yaXpvbnRhbCcpKHByb3BzLnR5cGUgPT09ICdkZXNjcmlwdGlvbicpO1xuXG4gICAgICB2YXIgY3NzQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbcHJvcHMudHlwZSAhPT0gJ2Rlc2NyaXB0aW9uJyA/ICd1ay1saXN0JyA6IG51bGwsIHByb3BzLmhvcml6b250YWwgPyBpc0hvciA6IG51bGwsICFwcm9wcy5saW5lID8gbnVsbCA6IGlzTGluZShwcm9wcy50eXBlICE9PSAnZGVzY3JpcHRpb24nKSwgcHJvcHMuc3RyaXBlZCA/ICd1ay1saXN0LXN0cmlwZWQnIDogbnVsbCwgcHJvcHMuc3BhY2UgPyAndWstbGlzdC1zcGFjZScgOiBudWxsLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgLy8gRWxlbWVudHNcbiAgICAgIHZhciBzZWxlY3RhYmxlID0gZnVuY3Rpb24gc2VsZWN0YWJsZShpbmRleCkge1xuICAgICAgICByZXR1cm4gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnY2xvc2UnLFxuICAgICAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWQsXG4gICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlLCBwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5oYW5kbGVTZWxlY3QoZSwgcHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpKHByb3BzLm9uU2VsZWN0KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBsaW5rID0gZnVuY3Rpb24gbGluayhpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2xpc3RJdGVtMi5kZWZhdWx0LCBfZXh0ZW5kcyh7XG4gICAgICAgICAga2V5OiBpbmRleFxuICAgICAgICB9LCBpdGVtLCB7XG4gICAgICAgICAga2l0aWQ6ICckaXRlbS0nICsgaW5kZXggKyAnLScgKyBwcm9wcy5raXRpZCxcbiAgICAgICAgICBzZWxlY3RhYmxlOiBzZWxlY3RhYmxlKGluZGV4KSxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUsIHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUNsaWNrKGUsIHByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciB0ZXh0ID0gZnVuY3Rpb24gdGV4dChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2xpc3RJdGVtMi5kZWZhdWx0LCB7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICBib2R5OiBpdGVtLFxuICAgICAgICAgIHNlbGVjdGFibGU6IHNlbGVjdGFibGUoaW5kZXgpLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSwgcHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuaGFuZGxlQ2xpY2soZSwgcHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgaXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAocHJvcHMuaXRlbXMpIHtcbiAgICAgICAgaXRlbXMgPSBwcm9wcy5pdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF91ZnVuYzIuZGVmYXVsdC5laXRoZXIobGluayhpdGVtLCBpbmRleCksIHRleHQoaXRlbSwgaW5kZXgpKShpdGVtLmhyZWYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0dHIgPSBfZXh0ZW5kcyh7fSwgY2xlYW5Qcm9wcywgX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmV2ZW50cyhwcm9wcyksIHtcbiAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZCxcbiAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzXG4gICAgICB9KTtcblxuICAgICAgdmFyIHR5cGUgPSB7XG4gICAgICAgIHVub3JkZXJkOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndWwnLFxuICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKSxcblxuICAgICAgICBvcmRlcmVkOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnb2wnLFxuICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKSxcblxuICAgICAgICBkZXNjcmlwdGlvbjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RsJyxcbiAgICAgICAgICBhdHRyLFxuICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgIH07XG5cbiAgICAgIC8vIFJldHVybiBDb21wb25lbnRcbiAgICAgIHJldHVybiB0eXBlW3Byb3BzLnR5cGVdIHx8IHR5cGVbJ3Vub3JkZXJkJ107XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpc3Q7XG59KShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuO1xuXG5MaXN0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBkZXNjcmlwdGlvbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGl0ZW1zOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBob3Jpem9udGFsOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgbGluZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBzdHJpcGVkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIG9uU2VsZWN0OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIHNwYWNlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHR5cGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydkZXNjcmlwdGlvbicsICdvcmRlcmVkJywgJ3Vub3JkZXJkJ10pXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuYmFzZShMaXN0KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWxpc3QvbGliL2xpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})