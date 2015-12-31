webpackHotUpdate(0,{

/***/ 3943:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(126);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(230);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitImg = __webpack_require__(766);\n\nvar _reactUikitImg2 = _interopRequireDefault(_reactUikitImg);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Thumbnail = function Thumbnail(props) {\n  // CSS classes\n  var size = {\n    large: 'uk-thumbnail-large',\n    medium: 'uk-thumbnail-medium',\n    small: 'uk-thumbnail-small',\n    mini: 'uk-thumbnail-mini',\n    expand: 'uk-thumbnail-expand'\n  };\n\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-thumbnail', props.classes, props.className, size[props.size] || null]);\n\n  // Elements\n  var img = _react2.default.createElement(_reactUikitImg2.default, _extends({}, props.img, {\n    kitid: 'thumbimg-' + props.kitid,\n    src: props.src,\n    width: props.width,\n    heigh: props.heigh,\n    small: props.small,\n    medium: props.medium,\n    large: props.large,\n    xlarge: props.xlarge\n  }));\n\n  var figcaption = _react2.default.createElement('figcaption', {\n    className: 'uk-thumbnail-caption'\n  }, props.children);\n\n  var caption = _react2.default.createElement('div', { className: 'uk-thumbnail-caption' }, props.children);\n\n  var children = _ufunc2.default.maybeIf(_ufunc2.default.either(figcaption, caption)(props.type === 'figure'))(props.children);\n\n  var ignoreProps = ['height', 'src', 'width'];\n  var cleanProps = _reactUikitBase2.default.helpers.cleanProps(ignoreProps)(props);\n\n  var attr = _extends({}, cleanProps, _reactUikitBase2.default.events(props), {\n    className: cssClassNames,\n    'data-kitid': props.kitid\n  });\n\n  var type = {\n    block: _react2.default.createElement('div', attr, img, children),\n\n    figure: _react2.default.createElement('figure', attr, img, children),\n\n    link: _react2.default.createElement('a', _extends({}, attr, { href: props.href }), img, children)\n  };\n\n  // Return Component\n  return type[props.type] || type['block'];\n};\n\nThumbnail.propTypes = {\n  img: _react2.default.PropTypes.object,\n  size: _react2.default.PropTypes.oneOf(['large', 'medium', 'small', 'mini', 'expand']),\n  type: _react2.default.PropTypes.oneOf(['block', 'figure', 'link'])\n};\n\nexports.default = _reactUikitBase2.default.base(Thumbnail);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10aHVtYm5haWwvbGliL3RodW1ibmFpbC5qcz9mYmRiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDLE9BQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDOztBQUVILElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsQ0FBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxJQUFJLGVBQWUsR0FBRyxtQkFBTyxDQUFDLEdBQXdCLENBQUMsQ0FBQzs7QUFFeEQsSUFBSSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFL0QsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElB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VDs7QUFFRCxVQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ25DLFFBQVEsRUFDUixJQUFJLEVBQ0osR0FBRyxFQUNILFFBQVEsQ0FDVDs7QUFFRCxRQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2pDLEdBQUcsRUFDSCxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFDeEMsR0FBRyxFQUNILFFBQVEsQ0FDVDtHQUNGOzs7QUFHRCxTQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzFDLENBQUM7O0FBRUYsU0FBUyxDQUFDLFNBQVMsR0FBRztBQUNwQixLQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNyQyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3JGLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ25FLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyIsImZpbGUiOiIzOTQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCcuLi8uLi9yZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbnZhciBfcmVhY3RVaWtpdEltZyA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LWltZycpO1xuXG52YXIgX3JlYWN0VWlraXRJbWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEltZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUaHVtYm5haWwgPSBmdW5jdGlvbiBUaHVtYm5haWwocHJvcHMpIHtcbiAgLy8gQ1NTIGNsYXNzZXNcbiAgdmFyIHNpemUgPSB7XG4gICAgbGFyZ2U6ICd1ay10aHVtYm5haWwtbGFyZ2UnLFxuICAgIG1lZGl1bTogJ3VrLXRodW1ibmFpbC1tZWRpdW0nLFxuICAgIHNtYWxsOiAndWstdGh1bWJuYWlsLXNtYWxsJyxcbiAgICBtaW5pOiAndWstdGh1bWJuYWlsLW1pbmknLFxuICAgIGV4cGFuZDogJ3VrLXRodW1ibmFpbC1leHBhbmQnXG4gIH07XG5cbiAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoWyd1ay10aHVtYm5haWwnLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5jbGFzc05hbWUsIHNpemVbcHJvcHMuc2l6ZV0gfHwgbnVsbF0pO1xuXG4gIC8vIEVsZW1lbnRzXG4gIHZhciBpbWcgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RVaWtpdEltZzIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLmltZywge1xuICAgIGtpdGlkOiAndGh1bWJpbWctJyArIHByb3BzLmtpdGlkLFxuICAgIHNyYzogcHJvcHMuc3JjLFxuICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICBoZWlnaDogcHJvcHMuaGVpZ2gsXG4gICAgc21hbGw6IHByb3BzLnNtYWxsLFxuICAgIG1lZGl1bTogcHJvcHMubWVkaXVtLFxuICAgIGxhcmdlOiBwcm9wcy5sYXJnZSxcbiAgICB4bGFyZ2U6IHByb3BzLnhsYXJnZVxuICB9KSk7XG5cbiAgdmFyIGZpZ2NhcHRpb24gPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZmlnY2FwdGlvbicsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAndWstdGh1bWJuYWlsLWNhcHRpb24nXG4gICAgfSxcbiAgICBwcm9wcy5jaGlsZHJlblxuICApO1xuXG4gIHZhciBjYXB0aW9uID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBjbGFzc05hbWU6ICd1ay10aHVtYm5haWwtY2FwdGlvbicgfSxcbiAgICBwcm9wcy5jaGlsZHJlblxuICApO1xuXG4gIHZhciBjaGlsZHJlbiA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF91ZnVuYzIuZGVmYXVsdC5laXRoZXIoZmlnY2FwdGlvbiwgY2FwdGlvbikocHJvcHMudHlwZSA9PT0gJ2ZpZ3VyZScpKShwcm9wcy5jaGlsZHJlbik7XG5cbiAgdmFyIGlnbm9yZVByb3BzID0gWydoZWlnaHQnLCAnc3JjJywgJ3dpZHRoJ107XG4gIHZhciBjbGVhblByb3BzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5Qcm9wcyhpZ25vcmVQcm9wcykocHJvcHMpO1xuXG4gIHZhciBhdHRyID0gX2V4dGVuZHMoe30sIGNsZWFuUHJvcHMsIF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5ldmVudHMocHJvcHMpLCB7XG4gICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzLFxuICAgICdkYXRhLWtpdGlkJzogcHJvcHMua2l0aWRcbiAgfSk7XG5cbiAgdmFyIHR5cGUgPSB7XG4gICAgYmxvY2s6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBhdHRyLFxuICAgICAgaW1nLFxuICAgICAgY2hpbGRyZW5cbiAgICApLFxuXG4gICAgZmlndXJlOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdmaWd1cmUnLFxuICAgICAgYXR0cixcbiAgICAgIGltZyxcbiAgICAgIGNoaWxkcmVuXG4gICAgKSxcblxuICAgIGxpbms6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAgX2V4dGVuZHMoe30sIGF0dHIsIHsgaHJlZjogcHJvcHMuaHJlZiB9KSxcbiAgICAgIGltZyxcbiAgICAgIGNoaWxkcmVuXG4gICAgKVxuICB9O1xuXG4gIC8vIFJldHVybiBDb21wb25lbnRcbiAgcmV0dXJuIHR5cGVbcHJvcHMudHlwZV0gfHwgdHlwZVsnYmxvY2snXTtcbn07XG5cblRodW1ibmFpbC5wcm9wVHlwZXMgPSB7XG4gIGltZzogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3QsXG4gIHNpemU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydsYXJnZScsICdtZWRpdW0nLCAnc21hbGwnLCAnbWluaScsICdleHBhbmQnXSksXG4gIHR5cGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydibG9jaycsICdmaWd1cmUnLCAnbGluayddKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoVGh1bWJuYWlsKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LXRodW1ibmFpbC9saWIvdGh1bWJuYWlsLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})