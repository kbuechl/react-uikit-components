webpackHotUpdate(0,{

/***/ 3464:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3007);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(202);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(3008);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitImg = __webpack_require__(1770);\n\nvar _reactUikitImg2 = _interopRequireDefault(_reactUikitImg);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar ImgGroup = function ImgGroup(props) {\n  // CSS classes\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([props.classes, props.className]);\n\n  // Elements\n  //\n  // component = props.component\n  var mapItems = function mapItems() {\n    return props.items.map(function (item, index) {\n      return _react2.default.createElement(_reactUikitImg2.default, _extends({ key: index\n      }, item.props, item));\n    });\n  };\n\n  var items = _ufunc2.default.maybeIf(mapItems())(props.items);\n\n  // Return Component\n  return _react2.default.createElement('div', _extends({}, props, {\n\n    className: cssClassNames,\n    'data-kitid': props.kitid\n  }), items, props.children);\n};\n\nImgGroup.propTypes = {\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  items: _react2.default.PropTypes.array,\n  kitid: _react2.default.PropTypes.string\n};\n\nexports.default = _reactUikitBase2.default.base(ImgGroup);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1pbWctZ2FsbGVyeS9saWIvaW1nLWdhbGxlcnkuanM/NmI1OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRTtBQUFFLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsUUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQUUsVUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQUUsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUFFO0tBQUU7R0FBRyxPQUFPLE1BQU0sQ0FBQztDQUFFLENBQUM7O0FBRWpRLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLElBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsSUFBSSxlQUFlLEdBQUcsbUJBQU8sQ0FBQyxHQUF3QixDQUFDLENBQUM7O0FBRXhELElBQUksZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRS9ELElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsSUFBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxJQUFJLGNBQWMsR0FBRyxtQkFBTyxDQUFDLElBQXVCLENBQUMsQ0FBQzs7QUFFdEQsSUFBSSxlQUFlLEdBQUcsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRTdELFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRTs7QUFFL0YsSUFBSSxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFOztBQUV0QyxNQUFJLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OztBQUtuRyxNQUFJLFFBQVEsR0FBRyxTQUFTLFFBQVEsR0FBRztBQUNqQyxXQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUM1QyxhQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUs7T0FDbEYsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDdkIsQ0FBQyxDQUFDO0dBQ0osQ0FBQzs7QUFFRixNQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7OztBQUc1RCxTQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUNsQyxLQUFLLEVBQ0wsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7O0FBRWxCLGFBQVMsRUFBRSxhQUFhO0FBQ3hCLGdCQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUs7R0FDMUIsQ0FBQyxFQUNGLEtBQUssRUFDTCxLQUFLLENBQUMsUUFBUSxDQUNmLENBQUM7Q0FDSCxDQUFDOztBQUVGLFFBQVEsQ0FBQyxTQUFTLEdBQUc7QUFDbkIsVUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc7QUFDdkMsV0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDM0MsU0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7QUFDeEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7QUFDdEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07Q0FDeEMsQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IjM0NjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9yZWFjdFVpa2l0SW1nID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtaW1nJyk7XG5cbnZhciBfcmVhY3RVaWtpdEltZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0SW1nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEltZ0dyb3VwID0gZnVuY3Rpb24gSW1nR3JvdXAocHJvcHMpIHtcbiAgLy8gQ1NTIGNsYXNzZXNcbiAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoW3Byb3BzLmNsYXNzZXMsIHByb3BzLmNsYXNzTmFtZV0pO1xuXG4gIC8vIEVsZW1lbnRzXG4gIC8vXG4gIC8vIGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudFxuICB2YXIgbWFwSXRlbXMgPSBmdW5jdGlvbiBtYXBJdGVtcygpIHtcbiAgICByZXR1cm4gcHJvcHMuaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFVpa2l0SW1nMi5kZWZhdWx0LCBfZXh0ZW5kcyh7IGtleTogaW5kZXhcbiAgICAgIH0sIGl0ZW0ucHJvcHMsIGl0ZW0pKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaXRlbXMgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihtYXBJdGVtcygpKShwcm9wcy5pdGVtcyk7XG5cbiAgLy8gUmV0dXJuIENvbXBvbmVudFxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgX2V4dGVuZHMoe30sIHByb3BzLCB7XG5cbiAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAgICdkYXRhLWtpdGlkJzogcHJvcHMua2l0aWRcbiAgICB9KSxcbiAgICBpdGVtcyxcbiAgICBwcm9wcy5jaGlsZHJlblxuICApO1xufTtcblxuSW1nR3JvdXAucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzZXM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGl0ZW1zOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBraXRpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKEltZ0dyb3VwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWltZy1nYWxsZXJ5L2xpYi9pbWctZ2FsbGVyeS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})