webpackHotUpdate(0,{

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(210);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(316);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(211);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitButton = __webpack_require__(559);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Trigger = function Trigger(props) {\n\n  var type = {\n    button: _react2.default.createElement(_reactUikitButton2.default, {\n      body: props.body,\n      kitid: props.kitid,\n      onClick: function onClick(e) {\n        return props.onTriggerClick(e);\n      }\n    }, props.children),\n\n    link: _react2.default.createElement('a', {\n      'data-kitid': props.kitid,\n      href: '#',\n      onClick: function onClick(e) {\n        return props.onTriggerClick(e);\n      }\n    }, props.body, props.children),\n\n    span: _react2.default.createElement('span', {\n      'data-kitid': props.kitid,\n      onClick: function onClick(e) {\n        return props.onTriggerClick(e);\n      }\n    }, props.body, props.children),\n\n    div: _react2.default.createElement('div', {\n      'data-kitid': props.kitid,\n      onClick: function onClick(e) {\n        return props.onTriggerClick(e);\n      }\n    }, props.body, props.children)\n  };\n\n  // return ufunc.either(type[props.type], type['button'])(props.type);\n  return _react2.default.createElement('div', null);\n};\n\nTrigger.propTypes = {\n  body: _react2.default.PropTypes.any,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  kitid: _react2.default.PropTypes.string,\n  opened: _react2.default.PropTypes.bool,\n  type: _react2.default.PropTypes.oneOf(['button', 'link', 'span', 'div'])\n};\n\nexports.default = _reactUikitBase2.default.base(Trigger);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10cmlnZ2VyL2xpYi90cmlnZ2VyLmpzP2FjZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsSUFBSSxlQUFlLEdBQUcsbUJBQU8sQ0FBQyxHQUFrQixDQUFDLENBQUM7O0FBRWxELElBQUksZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRS9ELElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsR0FBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxJQUFJLGlCQUFpQixHQUFHLG1CQUFPLENBQUMsR0FBb0IsQ0FBQyxDQUFDOztBQUV0RCxJQUFJLGtCQUFrQixHQUFHLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRW5FLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRTs7QUFFL0YsSUFBSSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFOztBQUVwQyxNQUFJLElBQUksR0FBRztBQUNULFVBQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDbkMsa0JBQWtCLENBQUMsT0FBTyxFQUMxQjtBQUNFLFVBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtBQUNoQixXQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDbEIsYUFBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUMzQixlQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDaEM7S0FDRixFQUNELEtBQUssQ0FBQyxRQUFRLENBQ2Y7O0FBRUQsUUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUNqQyxHQUFHLEVBQ0g7QUFDRSxrQkFBWSxFQUFFLEtBQUssQ0FBQyxLQUFLO0FBQ3pCLFVBQUksRUFBRSxHQUFHO0FBQ1QsYUFBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUMzQixlQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDaEM7S0FDRixFQUNELEtBQUssQ0FBQyxJQUFJLEVBQ1YsS0FBSyxDQUFDLFFBQVEsQ0FDZjs7QUFFRCxRQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2pDLE1BQU0sRUFDTjtBQUNFLGtCQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDekIsYUFBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUMzQixlQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDaEM7S0FDRixFQUNELEtBQUssQ0FBQyxJQUFJLEVBQ1YsS0FBSyxDQUFDLFFBQVEsQ0FDZjs7QUFFRCxPQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2hDLEtBQUssRUFDTDtBQUNFLGtCQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDekIsYUFBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUMzQixlQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDaEM7S0FDRixFQUNELEtBQUssQ0FBQyxJQUFJLEVBQ1YsS0FBSyxDQUFDLFFBQVEsQ0FDZjtHQUNGOzs7QUFHRCxTQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNuRCxDQUFDOztBQUVGLE9BQU8sQ0FBQyxTQUFTLEdBQUc7QUFDbEIsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc7QUFDbkMsVUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc7QUFDdkMsV0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDM0MsU0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7QUFDeEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsUUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDdEMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ3pFLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyIsImZpbGUiOiI2MjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9yZWFjdFVpa2l0QnV0dG9uID0gcmVxdWlyZSgncmVhY3QtdWlraXQtYnV0dG9uJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRyaWdnZXIgPSBmdW5jdGlvbiBUcmlnZ2VyKHByb3BzKSB7XG5cbiAgdmFyIHR5cGUgPSB7XG4gICAgYnV0dG9uOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIF9yZWFjdFVpa2l0QnV0dG9uMi5kZWZhdWx0LFxuICAgICAge1xuICAgICAgICBib2R5OiBwcm9wcy5ib2R5LFxuICAgICAgICBraXRpZDogcHJvcHMua2l0aWQsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wcy5vblRyaWdnZXJDbGljayhlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKSxcblxuICAgIGxpbms6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAge1xuICAgICAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkLFxuICAgICAgICBocmVmOiAnIycsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wcy5vblRyaWdnZXJDbGljayhlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BzLmJvZHksXG4gICAgICBwcm9wcy5jaGlsZHJlblxuICAgICksXG5cbiAgICBzcGFuOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIHtcbiAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZCxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLm9uVHJpZ2dlckNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcHMuYm9keSxcbiAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKSxcblxuICAgIGRpdjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZCxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLm9uVHJpZ2dlckNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcHMuYm9keSxcbiAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKVxuICB9O1xuXG4gIC8vIHJldHVybiB1ZnVuYy5laXRoZXIodHlwZVtwcm9wcy50eXBlXSwgdHlwZVsnYnV0dG9uJ10pKHByb3BzLnR5cGUpO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpO1xufTtcblxuVHJpZ2dlci5wcm9wVHlwZXMgPSB7XG4gIGJvZHk6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYW55LFxuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzZXM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgb3BlbmVkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHR5cGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydidXR0b24nLCAnbGluaycsICdzcGFuJywgJ2RpdiddKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoVHJpZ2dlcik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10cmlnZ2VyL2xpYi90cmlnZ2VyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})