webpackHotUpdate(0,{

/***/ 3623:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(696);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(1817);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _keysToListUq = __webpack_require__(1118);\n\nvar _keysToListUq2 = _interopRequireDefault(_keysToListUq);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n// Generate headings from head prop\nvar headFromProp = function headFromProp(head) {\n  return head.map(function (item, index) {\n    return _react2.default.createElement('th', { key: index }, item);\n  });\n};\n\n// Generate headings from collection keys\nvar headfromBodyKeys = function headfromBodyKeys(ary) {\n  return (0, _keysToListUq2.default)(ary).map(function (k, i) {\n    return _react2.default.createElement('th', { key: i }, k);\n  });\n};\n\nvar TableHead = function TableHead(props) {\n  return _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, props.numbered ? _react2.default.createElement('th', null, props.numbered) : null, _ufunc2.default.either(function () {\n    return headfromBodyKeys(props.body);\n  }, function () {\n    return headFromProp(props.head);\n  })(props.head === '*')));\n};\n\nTableHead.propTypes = {\n  body: _react2.default.PropTypes.array,\n  head: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.string]),\n  numbered: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.string])\n};\n\nexports.default = TableHead;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtaGVhZC5qcz9iZThmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsSUFBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLElBQWdCLENBQUMsQ0FBQzs7QUFFOUMsSUFBSSxjQUFjLEdBQUcsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRTNELFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRTs7O0FBRy9GLElBQUksWUFBWSxHQUFHLFNBQVMsWUFBWSxDQUFDLElBQUksRUFBRTtBQUM3QyxTQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3JDLFdBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2xDLElBQUksRUFDSixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFDZCxJQUFJLENBQ0wsQ0FBQztHQUNILENBQUMsQ0FBQztDQUNKOzs7QUFHRCxJQUFJLGdCQUFnQixHQUFHLFNBQVMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFO0FBQ3BELFNBQU8sQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzFELFdBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2xDLElBQUksRUFDSixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFDVixDQUFDLENBQ0YsQ0FBQztHQUNILENBQUMsQ0FBQztDQUNKLENBQUM7O0FBRUYsSUFBSSxTQUFTLEdBQUcsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQ3hDLFNBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2xDLE9BQU8sRUFDUCxJQUFJLEVBQ0osT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQzNCLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDNUMsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLENBQUMsUUFBUSxDQUNmLEdBQUcsSUFBSSxFQUNSLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDakMsV0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDckMsRUFBRSxZQUFZO0FBQ2IsV0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ2pDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUN2QixDQUNGLENBQUM7Q0FDSCxDQUFDOztBQUVGLFNBQVMsQ0FBQyxTQUFTLEdBQUc7QUFDcEIsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7QUFDckMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5RyxVQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2xILENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFTIiwiZmlsZSI6IjM2MjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG52YXIgX2tleXNUb0xpc3RVcSA9IHJlcXVpcmUoJy4va2V5c1RvTGlzdFVxJyk7XG5cbnZhciBfa2V5c1RvTGlzdFVxMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXNUb0xpc3RVcSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEdlbmVyYXRlIGhlYWRpbmdzIGZyb20gaGVhZCBwcm9wXG52YXIgaGVhZEZyb21Qcm9wID0gZnVuY3Rpb24gaGVhZEZyb21Qcm9wKGhlYWQpIHtcbiAgcmV0dXJuIGhlYWQubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICd0aCcsXG4gICAgICB7IGtleTogaW5kZXggfSxcbiAgICAgIGl0ZW1cbiAgICApO1xuICB9KTtcbn07XG5cbi8vIEdlbmVyYXRlIGhlYWRpbmdzIGZyb20gY29sbGVjdGlvbiBrZXlzXG52YXIgaGVhZGZyb21Cb2R5S2V5cyA9IGZ1bmN0aW9uIGhlYWRmcm9tQm9keUtleXMoYXJ5KSB7XG4gIHJldHVybiAoMCwgX2tleXNUb0xpc3RVcTIuZGVmYXVsdCkoYXJ5KS5tYXAoZnVuY3Rpb24gKGssIGkpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndGgnLFxuICAgICAgeyBrZXk6IGkgfSxcbiAgICAgIGtcbiAgICApO1xuICB9KTtcbn07XG5cbnZhciBUYWJsZUhlYWQgPSBmdW5jdGlvbiBUYWJsZUhlYWQocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICd0aGVhZCcsXG4gICAgbnVsbCxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICd0cicsXG4gICAgICBudWxsLFxuICAgICAgcHJvcHMubnVtYmVyZWQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3RoJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcHJvcHMubnVtYmVyZWRcbiAgICAgICkgOiBudWxsLFxuICAgICAgX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoZWFkZnJvbUJvZHlLZXlzKHByb3BzLmJvZHkpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGVhZEZyb21Qcm9wKHByb3BzLmhlYWQpO1xuICAgICAgfSkocHJvcHMuaGVhZCA9PT0gJyonKVxuICAgIClcbiAgKTtcbn07XG5cblRhYmxlSGVhZC5wcm9wVHlwZXMgPSB7XG4gIGJvZHk6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGhlYWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LCBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ10pLFxuICBudW1iZXJlZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCwgX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmddKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFibGVIZWFkO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUvbGliL3RhYmxlLWhlYWQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})