webpackHotUpdate(0,{

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(210);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(316);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n// import Button from 'react-uikit-button';\n\nvar Trigger = function Trigger(props) {\n\n  var type = {\n    // button: <Button\n    //   body={props.body}\n    //   kitid={props.kitid}\n    //   onClick={(e) => props.onTriggerClick(e)}\n    // >\n    //   {props.children}\n    // </Button>,\n    button: _react2.default.createElement('div', null),\n\n    link: _react2.default.createElement('a', {\n      'data-kitid': props.kitid,\n      href: '#',\n      onClick: function onClick(e) {\n        return props.onTriggerClick(e);\n      }\n    }, props.body, props.children),\n\n    span: _react2.default.createElement('span', {\n      'data-kitid': props.kitid,\n      onClick: function onClick(e) {\n        return props.onTriggerClick(e);\n      }\n    }, props.body, props.children),\n\n    div: _react2.default.createElement('div', {\n      'data-kitid': props.kitid,\n      onClick: function onClick(e) {\n        return props.onTriggerClick(e);\n      }\n    }, props.body, props.children)\n  };\n\n  return ufunc.either(type[props.type], type['button'])(props.type);\n};\n\n// Trigger.propTypes = {\n//   body      : React.PropTypes.any,\n//   children  : React.PropTypes.any,\n//   className : React.PropTypes.string,\n//   classes   : React.PropTypes.array,\n//   kitid     : React.PropTypes.string,\n//   opened    : React.PropTypes.bool,\n//   type      : React.PropTypes.oneOf(['button', 'link', 'span', 'div'])\n// };\n\nexports.default = _reactUikitBase2.default.base(Trigger);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10cmlnZ2VyL2xpYi90cmlnZ2VyLmpzP2FjZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsSUFBSSxlQUFlLEdBQUcsbUJBQU8sQ0FBQyxHQUFrQixDQUFDLENBQUM7O0FBRWxELElBQUksZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRS9ELFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRTs7OztBQUkvRixJQUFJLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7O0FBRXBDLE1BQUksSUFBSSxHQUFHOzs7Ozs7OztBQVFULFVBQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDOztBQUVsRCxRQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2pDLEdBQUcsRUFDSDtBQUNFLGtCQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDekIsVUFBSSxFQUFFLEdBQUc7QUFDVCxhQUFPLEVBQUUsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQzNCLGVBQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNoQztLQUNGLEVBQ0QsS0FBSyxDQUFDLElBQUksRUFDVixLQUFLLENBQUMsUUFBUSxDQUNmOztBQUVELFFBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDakMsTUFBTSxFQUNOO0FBQ0Usa0JBQVksRUFBRSxLQUFLLENBQUMsS0FBSztBQUN6QixhQUFPLEVBQUUsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQzNCLGVBQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNoQztLQUNGLEVBQ0QsS0FBSyxDQUFDLElBQUksRUFDVixLQUFLLENBQUMsUUFBUSxDQUNmOztBQUVELE9BQUcsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDaEMsS0FBSyxFQUNMO0FBQ0Usa0JBQVksRUFBRSxLQUFLLENBQUMsS0FBSztBQUN6QixhQUFPLEVBQUUsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQzNCLGVBQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNoQztLQUNGLEVBQ0QsS0FBSyxDQUFDLElBQUksRUFDVixLQUFLLENBQUMsUUFBUSxDQUNmO0dBQ0YsQ0FBQzs7QUFFRixTQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDbkU7Ozs7Ozs7Ozs7OztBQVlELE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMiLCJmaWxlIjoiNjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LXVpa2l0LWJ1dHRvbic7XG5cbnZhciBUcmlnZ2VyID0gZnVuY3Rpb24gVHJpZ2dlcihwcm9wcykge1xuXG4gIHZhciB0eXBlID0ge1xuICAgIC8vIGJ1dHRvbjogPEJ1dHRvblxuICAgIC8vICAgYm9keT17cHJvcHMuYm9keX1cbiAgICAvLyAgIGtpdGlkPXtwcm9wcy5raXRpZH1cbiAgICAvLyAgIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5vblRyaWdnZXJDbGljayhlKX1cbiAgICAvLyA+XG4gICAgLy8gICB7cHJvcHMuY2hpbGRyZW59XG4gICAgLy8gPC9CdXR0b24+LFxuICAgIGJ1dHRvbjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpLFxuXG4gICAgbGluazogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7XG4gICAgICAgICdkYXRhLWtpdGlkJzogcHJvcHMua2l0aWQsXG4gICAgICAgIGhyZWY6ICcjJyxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLm9uVHJpZ2dlckNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcHMuYm9keSxcbiAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKSxcblxuICAgIHNwYW46IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAge1xuICAgICAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMub25UcmlnZ2VyQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wcy5ib2R5LFxuICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApLFxuXG4gICAgZGl2OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMub25UcmlnZ2VyQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wcy5ib2R5LFxuICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApXG4gIH07XG5cbiAgcmV0dXJuIHVmdW5jLmVpdGhlcih0eXBlW3Byb3BzLnR5cGVdLCB0eXBlWydidXR0b24nXSkocHJvcHMudHlwZSk7XG59O1xuXG4vLyBUcmlnZ2VyLnByb3BUeXBlcyA9IHtcbi8vICAgYm9keSAgICAgIDogUmVhY3QuUHJvcFR5cGVzLmFueSxcbi8vICAgY2hpbGRyZW4gIDogUmVhY3QuUHJvcFR5cGVzLmFueSxcbi8vICAgY2xhc3NOYW1lIDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbi8vICAgY2xhc3NlcyAgIDogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuLy8gICBraXRpZCAgICAgOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuLy8gICBvcGVuZWQgICAgOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbi8vICAgdHlwZSAgICAgIDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ2xpbmsnLCAnc3BhbicsICdkaXYnXSlcbi8vIH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKFRyaWdnZXIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdHJpZ2dlci9saWIvdHJpZ2dlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})