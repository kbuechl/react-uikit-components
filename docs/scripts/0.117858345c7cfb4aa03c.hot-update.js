webpackHotUpdate(0,{

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(274);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(170);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBase = __webpack_require__(410);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _cuid = __webpack_require__(393);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nvar _reactUikitTrigger = __webpack_require__(620);\n\nvar _reactUikitTrigger2 = _interopRequireDefault(_reactUikitTrigger);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar getPos = function getPos(element) {\n  return {\n    top: element.offsetTop,\n    left: element.offsetLeft\n  };\n};\n\nvar getDim = function getDim(element) {\n  return {\n    height: element.offsetHeight,\n    width: element.offsetWidth\n  };\n};\n\nvar offest = function offest(trigger, body, prop) {\n  var triggerDetails = {\n    pos: getPos(trigger),\n    dim: getDim(trigger)\n  };\n\n  var bodyDetails = {\n    pos: getPos(body),\n    dim: getDim(body)\n  };\n\n  var top = triggerDetails.pos.top - bodyDetails.dim.height;\n  var left = triggerDetails.pos.left;\n  var bottom = triggerDetails.pos.bottom;\n  var leftCenter = left - (bodyDetails.dim.width - triggerDetails.dim.width) / 2;\n  var right = left - (bodyDetails.dim.width - triggerDetails.dim.width);\n  // const height =  bodyDetails.dim.height;\n\n  var position = {\n    'bottom-left': { top: bottom, left: left },\n    'bottom-center': { top: bottom, left: leftCenter },\n    'bottom-right': { top: bottom, left: right },\n\n    'top-left': { top: top, left: left },\n    'top-center': { top: top, left: leftCenter },\n    'top-right': { top: top, left: right }\n  };\n\n  //\n  //   'left-top'     : {top: top, left         : left},\n  //   'left-center'  : {top: heightCenter, left: left},\n  //   'left-bottom'  : {top: bottom, left      : left},\n  //\n  //   'right-top'    : {top: top, left         : right},\n  //   'right-center' : {top: heightCenter, left: right},\n  //   'right-bottom' : {top: bottom, left      : right}\n  var pos = position[prop] || position['bottom-left'];\n\n  return pos;\n};\n\nvar Dropdown = (function (_React$Component) {\n  _inherits(Dropdown, _React$Component);\n\n  function Dropdown(props) {\n    _classCallCheck(this, Dropdown);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));\n\n    _this.dataId = (0, _cuid2.default)();\n    return _this;\n  }\n\n  _createClass(Dropdown, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // const dropbody = uikit.helpers.queryData(`dropbody-${this.dataId}`);\n      // dropbody.style.display = 'block';\n      // dropbody.style.visibility = 'hidden';\n    }\n  }, {\n    key: 'handleTriggerClick',\n    value: function handleTriggerClick(e) {\n      e.preventDefault();\n      var props = this.props;\n      var trigger = e.currentTarget;\n      var dropbody = _reactUikitBase2.default.helpers.queryData('dropbody-' + this.dataId);\n      dropbody.style.display = 'block';\n      dropbody.style.visibility = 'hidden';\n      var offset = offest(trigger, dropbody, props.pos);\n\n      dropbody.style.top = offset.top + 'px';\n      dropbody.style.left = offset.left + 'px';\n\n      if (!props.opened) {\n        props.trigger.animate.in(dropbody);\n      } else {\n        props.trigger.animate.out(dropbody);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var props = this.props;\n      var kitid = _ufunc2.default.either(props.kitid, this.dataId)(props.kitid);\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([props.classes, props.className]);\n\n      // Elements\n\n      // Return Component\n      return _react2.default.createElement('div', {\n        className: cssClassNames,\n        'data-kitid': 'dropdown-' + kitid\n      }, _react2.default.createElement(_reactUikitTrigger2.default, _extends({}, props.trigger, {\n\n        kitid: kitid,\n        onClick: function onClick(e) {\n          return _this2.handleTriggerClick(e);\n        }\n      })), _react2.default.createElement('div', {\n        'data-kitid': 'dropbody-' + kitid,\n        className: 'uk-dropdown'\n      }, props.children));\n    }\n  }]);\n\n  return Dropdown;\n})(_react2.default.Component);\n\nDropdown.propTypes = {\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  context: _react2.default.PropTypes.oneOf(['dropdown', 'offcanvas', 'side', 'sub']),\n  items: _react2.default.PropTypes.array,\n  kitid: _react2.default.PropTypes.string,\n  parent: _react2.default.PropTypes.bool,\n  pos: _react2.default.PropTypes.string,\n  type: _react2.default.PropTypes.oneOf(['bar', 'dropdown', 'offcanvas', 'side', 'sub', 'thumbnail'])\n};\n;\n\nexports.default = _reactUikitBase2.default.base(Dropdown);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanM/ZWE1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxV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RSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHO0FBQ3ZDLFdBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQzNDLFNBQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3hDLFNBQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsRixPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztBQUN0QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxLQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNyQyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztDQUNwRyxDQUFDO0FBQ0YsQ0FBQzs7QUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IjYxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfY3VpZCA9IHJlcXVpcmUoJ2N1aWQnKTtcblxudmFyIF9jdWlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1aWQpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtdHJpZ2dlcicpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRUcmlnZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgZ2V0UG9zID0gZnVuY3Rpb24gZ2V0UG9zKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdFxuICB9O1xufTtcblxudmFyIGdldERpbSA9IGZ1bmN0aW9uIGdldERpbShlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICB9O1xufTtcblxudmFyIG9mZmVzdCA9IGZ1bmN0aW9uIG9mZmVzdCh0cmlnZ2VyLCBib2R5LCBwcm9wKSB7XG4gIHZhciB0cmlnZ2VyRGV0YWlscyA9IHtcbiAgICBwb3M6IGdldFBvcyh0cmlnZ2VyKSxcbiAgICBkaW06IGdldERpbSh0cmlnZ2VyKVxuICB9O1xuXG4gIHZhciBib2R5RGV0YWlscyA9IHtcbiAgICBwb3M6IGdldFBvcyhib2R5KSxcbiAgICBkaW06IGdldERpbShib2R5KVxuICB9O1xuXG4gIHZhciB0b3AgPSB0cmlnZ2VyRGV0YWlscy5wb3MudG9wIC0gYm9keURldGFpbHMuZGltLmhlaWdodDtcbiAgdmFyIGxlZnQgPSB0cmlnZ2VyRGV0YWlscy5wb3MubGVmdDtcbiAgdmFyIGJvdHRvbSA9IHRyaWdnZXJEZXRhaWxzLnBvcy5ib3R0b207XG4gIHZhciBsZWZ0Q2VudGVyID0gbGVmdCAtIChib2R5RGV0YWlscy5kaW0ud2lkdGggLSB0cmlnZ2VyRGV0YWlscy5kaW0ud2lkdGgpIC8gMjtcbiAgdmFyIHJpZ2h0ID0gbGVmdCAtIChib2R5RGV0YWlscy5kaW0ud2lkdGggLSB0cmlnZ2VyRGV0YWlscy5kaW0ud2lkdGgpO1xuICAvLyBjb25zdCBoZWlnaHQgPSAgYm9keURldGFpbHMuZGltLmhlaWdodDtcblxuICB2YXIgcG9zaXRpb24gPSB7XG4gICAgJ2JvdHRvbS1sZWZ0JzogeyB0b3A6IGJvdHRvbSwgbGVmdDogbGVmdCB9LFxuICAgICdib3R0b20tY2VudGVyJzogeyB0b3A6IGJvdHRvbSwgbGVmdDogbGVmdENlbnRlciB9LFxuICAgICdib3R0b20tcmlnaHQnOiB7IHRvcDogYm90dG9tLCBsZWZ0OiByaWdodCB9LFxuXG4gICAgJ3RvcC1sZWZ0JzogeyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9LFxuICAgICd0b3AtY2VudGVyJzogeyB0b3A6IHRvcCwgbGVmdDogbGVmdENlbnRlciB9LFxuICAgICd0b3AtcmlnaHQnOiB7IHRvcDogdG9wLCBsZWZ0OiByaWdodCB9XG4gIH07XG5cbiAgLy9cbiAgLy8gICAnbGVmdC10b3AnICAgICA6IHt0b3A6IHRvcCwgbGVmdCAgICAgICAgIDogbGVmdH0sXG4gIC8vICAgJ2xlZnQtY2VudGVyJyAgOiB7dG9wOiBoZWlnaHRDZW50ZXIsIGxlZnQ6IGxlZnR9LFxuICAvLyAgICdsZWZ0LWJvdHRvbScgIDoge3RvcDogYm90dG9tLCBsZWZ0ICAgICAgOiBsZWZ0fSxcbiAgLy9cbiAgLy8gICAncmlnaHQtdG9wJyAgICA6IHt0b3A6IHRvcCwgbGVmdCAgICAgICAgIDogcmlnaHR9LFxuICAvLyAgICdyaWdodC1jZW50ZXInIDoge3RvcDogaGVpZ2h0Q2VudGVyLCBsZWZ0OiByaWdodH0sXG4gIC8vICAgJ3JpZ2h0LWJvdHRvbScgOiB7dG9wOiBib3R0b20sIGxlZnQgICAgICA6IHJpZ2h0fVxuICB2YXIgcG9zID0gcG9zaXRpb25bcHJvcF0gfHwgcG9zaXRpb25bJ2JvdHRvbS1sZWZ0J107XG5cbiAgcmV0dXJuIHBvcztcbn07XG5cbnZhciBEcm9wZG93biA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3Bkb3duKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuZGF0YUlkID0gKDAsIF9jdWlkMi5kZWZhdWx0KSgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcm9wZG93biwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgLy8gY29uc3QgZHJvcGJvZHkgPSB1aWtpdC5oZWxwZXJzLnF1ZXJ5RGF0YShgZHJvcGJvZHktJHt0aGlzLmRhdGFJZH1gKTtcbiAgICAgIC8vIGRyb3Bib2R5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgLy8gZHJvcGJvZHkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVRyaWdnZXJDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRyaWdnZXJDbGljayhlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyaWdnZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICB2YXIgZHJvcGJvZHkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEoJ2Ryb3Bib2R5LScgKyB0aGlzLmRhdGFJZCk7XG4gICAgICBkcm9wYm9keS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRyb3Bib2R5LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHZhciBvZmZzZXQgPSBvZmZlc3QodHJpZ2dlciwgZHJvcGJvZHksIHByb3BzLnBvcyk7XG5cbiAgICAgIGRyb3Bib2R5LnN0eWxlLnRvcCA9IG9mZnNldC50b3AgKyAncHgnO1xuICAgICAgZHJvcGJvZHkuc3R5bGUubGVmdCA9IG9mZnNldC5sZWZ0ICsgJ3B4JztcblxuICAgICAgaWYgKCFwcm9wcy5vcGVuZWQpIHtcbiAgICAgICAgcHJvcHMudHJpZ2dlci5hbmltYXRlLmluKGRyb3Bib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5vdXQoZHJvcGJvZHkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGtpdGlkID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihwcm9wcy5raXRpZCwgdGhpcy5kYXRhSWQpKHByb3BzLmtpdGlkKTtcblxuICAgICAgLy8gQ1NTIGNsYXNzZXNcbiAgICAgIHZhciBjc3NDbGFzc05hbWVzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFtwcm9wcy5jbGFzc2VzLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgLy8gRWxlbWVudHNcblxuICAgICAgLy8gUmV0dXJuIENvbXBvbmVudFxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAgICAgICAnZGF0YS1raXRpZCc6ICdkcm9wZG93bi0nICsga2l0aWRcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0VWlraXRUcmlnZ2VyMi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMudHJpZ2dlciwge1xuXG4gICAgICAgICAga2l0aWQ6IGtpdGlkLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5oYW5kbGVUcmlnZ2VyQ2xpY2soZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdkYXRhLWtpdGlkJzogJ2Ryb3Bib2R5LScgKyBraXRpZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3VrLWRyb3Bkb3duJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzZXM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGNvbnRleHQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydkcm9wZG93bicsICdvZmZjYW52YXMnLCAnc2lkZScsICdzdWInXSksXG4gIGl0ZW1zOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBraXRpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHBhcmVudDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBwb3M6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsnYmFyJywgJ2Ryb3Bkb3duJywgJ29mZmNhbnZhcycsICdzaWRlJywgJ3N1YicsICd0aHVtYm5haWwnXSlcbn07XG47XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKERyb3Bkb3duKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWRyb3Bkb3duL2xpYi9kcm9wZG93bi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})