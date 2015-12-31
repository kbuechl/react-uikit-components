webpackHotUpdate(0,{

/***/ 2682:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1789);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(1715);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(1790);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _cuid = __webpack_require__(290);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Block = function Block(props) {\n  // CSS classes\n  var contailerCSS = props.container ? 'uk-container' : null;\n\n  var dataId = props.kitid || (0, _cuid2.default)();\n\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-block', props.classes, props.context ? 'uk-block-' + props.context : null, props.contrast ? 'uk-contrast' : null, props.large ? 'uk-block-large' : null, props.className]);\n\n  // Elements\n  var attr = _extends({}, props, _reactUikitBase2.default.events(props), {\n    className: cssClassNames,\n    'data-kitid': dataId\n  });\n\n  var block = _react2.default.createElement('div', attr, props.children);\n\n  var container = _react2.default.createElement('div', attr, _react2.default.createElement('div', { className: contailerCSS }, props.children));\n\n  // Return Component\n  var isContainer = _ufunc2.default.either(container, block);\n  return isContainer(props.container);\n};\n\nBlock.propTypes = {\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  context: _react2.default.PropTypes.oneOf(['default', 'muted', 'primary', 'secondary']),\n  container: _react2.default.PropTypes.bool,\n  kitid: _react2.default.PropTypes.string,\n  large: _react2.default.PropTypes.bool\n};\n\nexports.default = _reactUikitBase2.default.base(Block);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1ibG9jay9saWIvYmxvY2suanM/N2MwZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRTtBQUFFLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsUUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQUUsVUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQUUsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUFFO0tBQUU7R0FBRyxPQUFPLE1BQU0sQ0FBQztDQUFFLENBQUM7O0FBRWpRLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLElBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsSUFBSSxlQUFlLEdBQUcsbUJBQU8sQ0FBQyxJQUF3QixDQUFDLENBQUM7O0FBRXhELElBQUksZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRS9ELElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsSUFBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxJQUFJLEtBQUss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IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9jdWlkID0gcmVxdWlyZSgnY3VpZCcpO1xuXG52YXIgX2N1aWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3VpZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBCbG9jayA9IGZ1bmN0aW9uIEJsb2NrKHByb3BzKSB7XG4gIC8vIENTUyBjbGFzc2VzXG4gIHZhciBjb250YWlsZXJDU1MgPSBwcm9wcy5jb250YWluZXIgPyAndWstY29udGFpbmVyJyA6IG51bGw7XG5cbiAgdmFyIGRhdGFJZCA9IHByb3BzLmtpdGlkIHx8ICgwLCBfY3VpZDIuZGVmYXVsdCkoKTtcblxuICB2YXIgY3NzQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbJ3VrLWJsb2NrJywgcHJvcHMuY2xhc3NlcywgcHJvcHMuY29udGV4dCA/ICd1ay1ibG9jay0nICsgcHJvcHMuY29udGV4dCA6IG51bGwsIHByb3BzLmNvbnRyYXN0ID8gJ3VrLWNvbnRyYXN0JyA6IG51bGwsIHByb3BzLmxhcmdlID8gJ3VrLWJsb2NrLWxhcmdlJyA6IG51bGwsIHByb3BzLmNsYXNzTmFtZV0pO1xuXG4gIC8vIEVsZW1lbnRzXG4gIHZhciBhdHRyID0gX2V4dGVuZHMoe30sIHByb3BzLCBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuZXZlbnRzKHByb3BzKSwge1xuICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAnZGF0YS1raXRpZCc6IGRhdGFJZFxuICB9KTtcblxuICB2YXIgYmxvY2sgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBhdHRyLFxuICAgIHByb3BzLmNoaWxkcmVuXG4gICk7XG5cbiAgdmFyIGNvbnRhaW5lciA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIGF0dHIsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBjb250YWlsZXJDU1MgfSxcbiAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKVxuICApO1xuXG4gIC8vIFJldHVybiBDb21wb25lbnRcbiAgdmFyIGlzQ29udGFpbmVyID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihjb250YWluZXIsIGJsb2NrKTtcbiAgcmV0dXJuIGlzQ29udGFpbmVyKHByb3BzLmNvbnRhaW5lcik7XG59O1xuXG5CbG9jay5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NlczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAgY29udGV4dDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbXV0ZWQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG4gIGNvbnRhaW5lcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBraXRpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGxhcmdlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKEJsb2NrKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWJsb2NrL2xpYi9ibG9jay5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})