webpackHotUpdate(0,{

/***/ 3158:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2699);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(2626);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Flex = function Flex(props) {\n  // CSS classes\n  var direction = {\n    rowReverse: 'uk-flex-row-reverse',\n    column: 'uk-flex-column',\n    columnReverse: 'uk-flex-column uk-flex-column-reverse'\n  };\n\n  var row = {\n    wrap: 'uk-flex-wrap',\n    bottom: 'uk-flex-wrap-bottom',\n    middle: 'uk-flex-wrap-middle',\n    top: 'uk-flex-wrap-top',\n    between: 'uk-flex-wrap-space-between',\n    around: 'uk-flex-wrap-space-around',\n    reverse: 'uk-flex-wrap-reverse',\n    nowrap: 'uk-flex-nowrap'\n  };\n\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-flex', props.classes, props.around ? 'uk-flex-space-around' : null, props.center ? 'uk-flex-center' : null, props.direction ? direction[props.direction] : null, props.bottom ? 'uk-flex-bottom' : null, props.between ? 'uk-flex-space-between' : null, props.middle ? 'uk-flex-middle' : null, props.grid ? 'uk-grid' : null, props.right ? 'uk-flex-right' : null, props.top ? 'uk-flex-top' : null, props.row ? _reactUikitBase2.default.helpers.stringToClasses(props.row, row) : null, props.className]);\n\n  if (props.between) {\n    console.log(cssClassNames);\n  }\n  // Return Component\n  return _react2.default.createElement('div', _extends({}, props, {\n    className: cssClassNames,\n    'data-kitid': props.kitid\n  }), props.children);\n};\n\nFlex.propTypes = {\n  around: _react2.default.PropTypes.bool,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  center: _react2.default.PropTypes.bool,\n  bottom: _react2.default.PropTypes.bool,\n  between: _react2.default.PropTypes.bool,\n  direction: _react2.default.PropTypes.oneOf(['rowReverse', 'column', 'columnReverse']),\n  grid: _react2.default.PropTypes.bool,\n  kitid: _react2.default.PropTypes.string,\n  middle: _react2.default.PropTypes.bool,\n  right: _react2.default.PropTypes.bool,\n  row: _react2.default.PropTypes.string,\n  top: _react2.default.PropTypes.bool\n};\n\nexports.default = _reactUikitBase2.default.base(Flex);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1mbGV4L2xpYi9mbGV4LmpzP2YxN2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUU7QUFBRSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUFFLFFBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtBQUFFLFVBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRTtBQUFFLGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7T0FBRTtLQUFFO0dBQUcsT0FBTyxNQUFNLENBQUM7Q0FBRSxDQUFDOztBQUVqUSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxJQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElBQUksZUFBZSxHQUFHLG1CQUFPLENBQUMsSUFBd0IsQ0FBQyxDQUFDOztBQUV4RCxJQUFJLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUUvRCxTQUFTLHNCQUFzQixDQUFDLEdBQUcsRUFBRTtBQUFFLFNBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO0NB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LEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxLQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNyQyxLQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtDQUNwQyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMiLCJmaWxlIjoiMzE1OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtYmFzZScpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZsZXggPSBmdW5jdGlvbiBGbGV4KHByb3BzKSB7XG4gIC8vIENTUyBjbGFzc2VzXG4gIHZhciBkaXJlY3Rpb24gPSB7XG4gICAgcm93UmV2ZXJzZTogJ3VrLWZsZXgtcm93LXJldmVyc2UnLFxuICAgIGNvbHVtbjogJ3VrLWZsZXgtY29sdW1uJyxcbiAgICBjb2x1bW5SZXZlcnNlOiAndWstZmxleC1jb2x1bW4gdWstZmxleC1jb2x1bW4tcmV2ZXJzZSdcbiAgfTtcblxuICB2YXIgcm93ID0ge1xuICAgIHdyYXA6ICd1ay1mbGV4LXdyYXAnLFxuICAgIGJvdHRvbTogJ3VrLWZsZXgtd3JhcC1ib3R0b20nLFxuICAgIG1pZGRsZTogJ3VrLWZsZXgtd3JhcC1taWRkbGUnLFxuICAgIHRvcDogJ3VrLWZsZXgtd3JhcC10b3AnLFxuICAgIGJldHdlZW46ICd1ay1mbGV4LXdyYXAtc3BhY2UtYmV0d2VlbicsXG4gICAgYXJvdW5kOiAndWstZmxleC13cmFwLXNwYWNlLWFyb3VuZCcsXG4gICAgcmV2ZXJzZTogJ3VrLWZsZXgtd3JhcC1yZXZlcnNlJyxcbiAgICBub3dyYXA6ICd1ay1mbGV4LW5vd3JhcCdcbiAgfTtcblxuICB2YXIgY3NzQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbJ3VrLWZsZXgnLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5hcm91bmQgPyAndWstZmxleC1zcGFjZS1hcm91bmQnIDogbnVsbCwgcHJvcHMuY2VudGVyID8gJ3VrLWZsZXgtY2VudGVyJyA6IG51bGwsIHByb3BzLmRpcmVjdGlvbiA/IGRpcmVjdGlvbltwcm9wcy5kaXJlY3Rpb25dIDogbnVsbCwgcHJvcHMuYm90dG9tID8gJ3VrLWZsZXgtYm90dG9tJyA6IG51bGwsIHByb3BzLmJldHdlZW4gPyAndWstZmxleC1zcGFjZS1iZXR3ZWVuJyA6IG51bGwsIHByb3BzLm1pZGRsZSA/ICd1ay1mbGV4LW1pZGRsZScgOiBudWxsLCBwcm9wcy5ncmlkID8gJ3VrLWdyaWQnIDogbnVsbCwgcHJvcHMucmlnaHQgPyAndWstZmxleC1yaWdodCcgOiBudWxsLCBwcm9wcy50b3AgPyAndWstZmxleC10b3AnIDogbnVsbCwgcHJvcHMucm93ID8gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuc3RyaW5nVG9DbGFzc2VzKHByb3BzLnJvdywgcm93KSA6IG51bGwsIHByb3BzLmNsYXNzTmFtZV0pO1xuXG4gIGlmIChwcm9wcy5iZXR3ZWVuKSB7XG4gICAgY29uc29sZS5sb2coY3NzQ2xhc3NOYW1lcyk7XG4gIH1cbiAgLy8gUmV0dXJuIENvbXBvbmVudFxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkXG4gICAgfSksXG4gICAgcHJvcHMuY2hpbGRyZW5cbiAgKTtcbn07XG5cbkZsZXgucHJvcFR5cGVzID0ge1xuICBhcm91bmQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBjZW50ZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgYm90dG9tOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGJldHdlZW46IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZGlyZWN0aW9uOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsncm93UmV2ZXJzZScsICdjb2x1bW4nLCAnY29sdW1uUmV2ZXJzZSddKSxcbiAgZ3JpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBraXRpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG1pZGRsZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICByaWdodDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICByb3c6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB0b3A6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoRmxleCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1mbGV4L2xpYi9mbGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})