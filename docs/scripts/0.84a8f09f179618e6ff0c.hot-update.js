webpackHotUpdate(0,{

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(274);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(170);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBase = __webpack_require__(410);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _cuid = __webpack_require__(393);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nvar _reactUikitTrigger = __webpack_require__(620);\n\nvar _reactUikitTrigger2 = _interopRequireDefault(_reactUikitTrigger);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar getPos = function getPos(element) {\n  return {\n    top: element.offsetTop,\n    left: element.offsetLeft\n  };\n};\n\nvar getDim = function getDim(element) {\n  console.log(element);\n  return {\n    height: element.offsetHeight,\n    width: element.offsetWidth\n  };\n};\n\nvar offest = function offest(trigger, body, prop) {\n  var triggerDetails = {\n    pos: getPos(trigger),\n    dim: getDim(trigger)\n  };\n\n  var bodyDetails = {\n    pos: getPos(body),\n    dim: getDim(body)\n  };\n\n  // const top = triggerDetails.pos.top - bodyDetails.dim.height;\n  var left = triggerDetails.pos.left;\n  var bottom = triggerDetails.pos.bottom;\n  var horCenter = left - (bodyDetails.dim.width - triggerDetails.dim.width) / 2;\n  var width = bodyDetails.dim.width;\n  // const height =  bodyDetails.dim.height;\n  console.log(width);\n  console.log('left: ' + left, 'bodyDetails: ' + bodyDetails.dim.width, 'triggerDetails:' + triggerDetails.dim.width);\n\n  var position = {\n    'bottom-left': { top: bottom, left: left },\n    'bottom-center': { top: bottom, left: left + horCenter },\n    'bottom-right': { top: bottom, left: left - width }\n    //\n    //   'top-left'     : {top: top - height, left         : left},\n    //   'top-center'   : {top: top - height, left         : left - widthCenter},\n    //   'top-right'    : {top: top - height, left         : left - width},\n    //\n    //   'left-top'     : {top: top, left         : left},\n    //   'left-center'  : {top: heightCenter, left: left},\n    //   'left-bottom'  : {top: bottom, left      : left},\n    //\n    //   'right-top'    : {top: top, left         : right},\n    //   'right-center' : {top: heightCenter, left: right},\n    //   'right-bottom' : {top: bottom, left      : right}\n  };\n\n  var pos = position[prop] || position['bottom-left'];\n\n  return pos;\n};\n\nvar Dropdown = (function (_React$Component) {\n  _inherits(Dropdown, _React$Component);\n\n  function Dropdown(props) {\n    _classCallCheck(this, Dropdown);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));\n\n    _this.dataId = (0, _cuid2.default)();\n    return _this;\n  }\n\n  _createClass(Dropdown, [{\n    key: 'handleTriggerClick',\n    value: function handleTriggerClick(e) {\n      e.preventDefault();\n      var props = this.props;\n      var trigger = e.currentTarget;\n      var dropbody = _reactUikitBase2.default.helpers.queryData('dropbody-' + this.dataId);\n      var offset = offest(trigger, dropbody, props.pos);\n\n      dropbody.style.top = offset.top + 'px';\n      dropbody.style.left = offset.left + 'px';\n\n      if (!props.opened) {\n        props.trigger.animate.in(dropbody);\n      } else {\n        props.trigger.animate.out(dropbody);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var props = this.props;\n      var kitid = _ufunc2.default.either(props.kitid, this.dataId)(props.kitid);\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([props.classes, props.className]);\n\n      // Elements\n\n      // Return Component\n      return _react2.default.createElement('div', {\n        className: cssClassNames,\n        'data-kitid': 'dropdown-' + kitid\n      }, _react2.default.createElement(_reactUikitTrigger2.default, _extends({}, props.trigger, {\n\n        kitid: kitid,\n        onClick: function onClick(e) {\n          return _this2.handleTriggerClick(e);\n        }\n      })), _react2.default.createElement('div', {\n        'data-kitid': 'dropbody-' + kitid,\n        className: 'uk-dropdown'\n      }, props.children));\n    }\n  }]);\n\n  return Dropdown;\n})(_react2.default.Component);\n\nDropdown.propTypes = {\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  context: _react2.default.PropTypes.oneOf(['dropdown', 'offcanvas', 'side', 'sub']),\n  items: _react2.default.PropTypes.array,\n  kitid: _react2.default.PropTypes.string,\n  parent: _react2.default.PropTypes.bool,\n  pos: _react2.default.PropTypes.string,\n  type: _react2.default.PropTypes.oneOf(['bar', 'dropdown', 'offcanvas', 'side', 'sub', 'thumbnail'])\n};\n;\n\nexports.default = _reactUikitBase2.default.base(Dropdown);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanM/ZWE1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxV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QUssQ0FBQyxDQUFDO0FBQ2xGLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3RDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLFFBQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQ3RDLEtBQUcsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3JDLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0NBQ3BHLENBQUM7QUFDRixDQUFDOztBQUVELE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiNjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlID0gcmVxdWlyZSgncmVhY3QtdWlraXQtYmFzZScpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYXNlKTtcblxudmFyIF9jdWlkID0gcmVxdWlyZSgnY3VpZCcpO1xuXG52YXIgX2N1aWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3VpZCk7XG5cbnZhciBfcmVhY3RVaWtpdFRyaWdnZXIgPSByZXF1aXJlKCcuLi8uLi9yZWFjdC11aWtpdC10cmlnZ2VyJyk7XG5cbnZhciBfcmVhY3RVaWtpdFRyaWdnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdFRyaWdnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBnZXRQb3MgPSBmdW5jdGlvbiBnZXRQb3MoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gIH07XG59O1xuXG52YXIgZ2V0RGltID0gZnVuY3Rpb24gZ2V0RGltKGVsZW1lbnQpIHtcbiAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICB9O1xufTtcblxudmFyIG9mZmVzdCA9IGZ1bmN0aW9uIG9mZmVzdCh0cmlnZ2VyLCBib2R5LCBwcm9wKSB7XG4gIHZhciB0cmlnZ2VyRGV0YWlscyA9IHtcbiAgICBwb3M6IGdldFBvcyh0cmlnZ2VyKSxcbiAgICBkaW06IGdldERpbSh0cmlnZ2VyKVxuICB9O1xuXG4gIHZhciBib2R5RGV0YWlscyA9IHtcbiAgICBwb3M6IGdldFBvcyhib2R5KSxcbiAgICBkaW06IGdldERpbShib2R5KVxuICB9O1xuXG4gIC8vIGNvbnN0IHRvcCA9IHRyaWdnZXJEZXRhaWxzLnBvcy50b3AgLSBib2R5RGV0YWlscy5kaW0uaGVpZ2h0O1xuICB2YXIgbGVmdCA9IHRyaWdnZXJEZXRhaWxzLnBvcy5sZWZ0O1xuICB2YXIgYm90dG9tID0gdHJpZ2dlckRldGFpbHMucG9zLmJvdHRvbTtcbiAgdmFyIGhvckNlbnRlciA9IGxlZnQgLSAoYm9keURldGFpbHMuZGltLndpZHRoIC0gdHJpZ2dlckRldGFpbHMuZGltLndpZHRoKSAvIDI7XG4gIHZhciB3aWR0aCA9IGJvZHlEZXRhaWxzLmRpbS53aWR0aDtcbiAgLy8gY29uc3QgaGVpZ2h0ID0gIGJvZHlEZXRhaWxzLmRpbS5oZWlnaHQ7XG4gIGNvbnNvbGUubG9nKHdpZHRoKTtcbiAgY29uc29sZS5sb2coJ2xlZnQ6ICcgKyBsZWZ0LCAnYm9keURldGFpbHM6ICcgKyBib2R5RGV0YWlscy5kaW0ud2lkdGgsICd0cmlnZ2VyRGV0YWlsczonICsgdHJpZ2dlckRldGFpbHMuZGltLndpZHRoKTtcblxuICB2YXIgcG9zaXRpb24gPSB7XG4gICAgJ2JvdHRvbS1sZWZ0JzogeyB0b3A6IGJvdHRvbSwgbGVmdDogbGVmdCB9LFxuICAgICdib3R0b20tY2VudGVyJzogeyB0b3A6IGJvdHRvbSwgbGVmdDogbGVmdCArIGhvckNlbnRlciB9LFxuICAgICdib3R0b20tcmlnaHQnOiB7IHRvcDogYm90dG9tLCBsZWZ0OiBsZWZ0IC0gd2lkdGggfVxuICAgIC8vXG4gICAgLy8gICAndG9wLWxlZnQnICAgICA6IHt0b3A6IHRvcCAtIGhlaWdodCwgbGVmdCAgICAgICAgIDogbGVmdH0sXG4gICAgLy8gICAndG9wLWNlbnRlcicgICA6IHt0b3A6IHRvcCAtIGhlaWdodCwgbGVmdCAgICAgICAgIDogbGVmdCAtIHdpZHRoQ2VudGVyfSxcbiAgICAvLyAgICd0b3AtcmlnaHQnICAgIDoge3RvcDogdG9wIC0gaGVpZ2h0LCBsZWZ0ICAgICAgICAgOiBsZWZ0IC0gd2lkdGh9LFxuICAgIC8vXG4gICAgLy8gICAnbGVmdC10b3AnICAgICA6IHt0b3A6IHRvcCwgbGVmdCAgICAgICAgIDogbGVmdH0sXG4gICAgLy8gICAnbGVmdC1jZW50ZXInICA6IHt0b3A6IGhlaWdodENlbnRlciwgbGVmdDogbGVmdH0sXG4gICAgLy8gICAnbGVmdC1ib3R0b20nICA6IHt0b3A6IGJvdHRvbSwgbGVmdCAgICAgIDogbGVmdH0sXG4gICAgLy9cbiAgICAvLyAgICdyaWdodC10b3AnICAgIDoge3RvcDogdG9wLCBsZWZ0ICAgICAgICAgOiByaWdodH0sXG4gICAgLy8gICAncmlnaHQtY2VudGVyJyA6IHt0b3A6IGhlaWdodENlbnRlciwgbGVmdDogcmlnaHR9LFxuICAgIC8vICAgJ3JpZ2h0LWJvdHRvbScgOiB7dG9wOiBib3R0b20sIGxlZnQgICAgICA6IHJpZ2h0fVxuICB9O1xuXG4gIHZhciBwb3MgPSBwb3NpdGlvbltwcm9wXSB8fCBwb3NpdGlvblsnYm90dG9tLWxlZnQnXTtcblxuICByZXR1cm4gcG9zO1xufTtcblxudmFyIERyb3Bkb3duID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcm9wZG93biwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcGRvd24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3Bkb3duKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5kYXRhSWQgPSAoMCwgX2N1aWQyLmRlZmF1bHQpKCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyb3Bkb3duLCBbe1xuICAgIGtleTogJ2hhbmRsZVRyaWdnZXJDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRyaWdnZXJDbGljayhlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyaWdnZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICB2YXIgZHJvcGJvZHkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEoJ2Ryb3Bib2R5LScgKyB0aGlzLmRhdGFJZCk7XG4gICAgICB2YXIgb2Zmc2V0ID0gb2ZmZXN0KHRyaWdnZXIsIGRyb3Bib2R5LCBwcm9wcy5wb3MpO1xuXG4gICAgICBkcm9wYm9keS5zdHlsZS50b3AgPSBvZmZzZXQudG9wICsgJ3B4JztcbiAgICAgIGRyb3Bib2R5LnN0eWxlLmxlZnQgPSBvZmZzZXQubGVmdCArICdweCc7XG5cbiAgICAgIGlmICghcHJvcHMub3BlbmVkKSB7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5pbihkcm9wYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy50cmlnZ2VyLmFuaW1hdGUub3V0KGRyb3Bib2R5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBraXRpZCA9IF91ZnVuYzIuZGVmYXVsdC5laXRoZXIocHJvcHMua2l0aWQsIHRoaXMuZGF0YUlkKShwcm9wcy5raXRpZCk7XG5cbiAgICAgIC8vIENTUyBjbGFzc2VzXG4gICAgICB2YXIgY3NzQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbcHJvcHMuY2xhc3NlcywgcHJvcHMuY2xhc3NOYW1lXSk7XG5cbiAgICAgIC8vIEVsZW1lbnRzXG5cbiAgICAgIC8vIFJldHVybiBDb21wb25lbnRcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiAnZHJvcGRvd24tJyArIGtpdGlkXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFVpa2l0VHJpZ2dlcjIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLnRyaWdnZXIsIHtcblxuICAgICAgICAgIGtpdGlkOiBraXRpZCxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuaGFuZGxlVHJpZ2dlckNsaWNrKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnZGF0YS1raXRpZCc6ICdkcm9wYm9keS0nICsga2l0aWQsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd1ay1kcm9wZG93bidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufSkoX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBjb250ZXh0OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsnZHJvcGRvd24nLCAnb2ZmY2FudmFzJywgJ3NpZGUnLCAnc3ViJ10pLFxuICBpdGVtczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBwYXJlbnQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgcG9zOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2JhcicsICdkcm9wZG93bicsICdvZmZjYW52YXMnLCAnc2lkZScsICdzdWInLCAndGh1bWJuYWlsJ10pXG59O1xuO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuYmFzZShEcm9wZG93bik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})