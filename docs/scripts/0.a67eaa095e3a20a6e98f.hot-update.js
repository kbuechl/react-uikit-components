webpackHotUpdate(0,{

/***/ 3027:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3025);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(2951);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(3026);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Comment = function Comment(props) {\n  // CSS classes\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-comment', props.primary ? 'uk-comment-primary' : null, props.classes, props.className]);\n\n  // Elements\n  var avatar = _ufunc2.default.maybeIf(_react2.default.createElement('img', {\n    className: 'uk-comment-avatar',\n    src: props.avatar ? props.avatar.src : null,\n    alt: props.avatar ? props.avatar.alt : null\n  }))(props.avatar);\n\n  var title = _ufunc2.default.maybeIf(_react2.default.createElement('h4', { className: 'uk-comment-title' }, props.title))(props.title);\n\n  var meta = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-comment-meta' }, props.meta))(props.meta);\n\n  var header = _react2.default.createElement('header', {\n    className: 'uk-comment-header'\n  }, avatar, title, meta);\n\n  var body = _react2.default.createElement('div', {\n    className: 'uk-comment-body' }, props.body, props.children);\n\n  // Return Component\n  return _react2.default.createElement('article', _extends({}, _extends({}, props, _reactUikitBase2.default.events(props)), {\n    className: cssClassNames,\n    'data-kitid': props.kitid\n  }), header, body);\n};\n\nComment.propTypes = {\n  avatar: _react2.default.PropTypes.object,\n  body: _react2.default.PropTypes.string,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  items: _react2.default.PropTypes.object,\n  kitid: _react2.default.PropTypes.string,\n  meta: _react2.default.PropTypes.any,\n  primary: _react2.default.PropTypes.bool,\n  title: _react2.default.PropTypes.string\n};\n\nexports.default = _reactUikitBase2.default.base(Comment);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1jb21tZW50L2xpYi9jb21tZW50LmpzPzJjMDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUU7QUFBRSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUFFLFFBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtBQUFFLFVBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRTtBQUFFLGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7T0FBRTtLQUFFO0dBQUcsT0FBTyxNQUFNLENBQUM7Q0FBRSxDQUFDOztBQUVqUSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxJQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElBQUksZUFBZSxHQUFHLG1CQUFPLENBQUMsSUFBd0IsQ0FBQyxDQUFDOztBQUV4RCxJQUFJLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUUvRCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLElBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxz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LEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRztBQUNuQyxTQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN2QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtDQUN4QyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMiLCJmaWxlIjoiMzAyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtYmFzZScpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYXNlKTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQ29tbWVudCA9IGZ1bmN0aW9uIENvbW1lbnQocHJvcHMpIHtcbiAgLy8gQ1NTIGNsYXNzZXNcbiAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoWyd1ay1jb21tZW50JywgcHJvcHMucHJpbWFyeSA/ICd1ay1jb21tZW50LXByaW1hcnknIDogbnVsbCwgcHJvcHMuY2xhc3NlcywgcHJvcHMuY2xhc3NOYW1lXSk7XG5cbiAgLy8gRWxlbWVudHNcbiAgdmFyIGF2YXRhciA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgY2xhc3NOYW1lOiAndWstY29tbWVudC1hdmF0YXInLFxuICAgIHNyYzogcHJvcHMuYXZhdGFyID8gcHJvcHMuYXZhdGFyLnNyYyA6IG51bGwsXG4gICAgYWx0OiBwcm9wcy5hdmF0YXIgPyBwcm9wcy5hdmF0YXIuYWx0IDogbnVsbFxuICB9KSkocHJvcHMuYXZhdGFyKTtcblxuICB2YXIgdGl0bGUgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnaDQnLFxuICAgIHsgY2xhc3NOYW1lOiAndWstY29tbWVudC10aXRsZScgfSxcbiAgICBwcm9wcy50aXRsZVxuICApKShwcm9wcy50aXRsZSk7XG5cbiAgdmFyIG1ldGEgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IGNsYXNzTmFtZTogJ3VrLWNvbW1lbnQtbWV0YScgfSxcbiAgICBwcm9wcy5tZXRhXG4gICkpKHByb3BzLm1ldGEpO1xuXG4gIHZhciBoZWFkZXIgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnaGVhZGVyJyxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICd1ay1jb21tZW50LWhlYWRlcidcbiAgICB9LFxuICAgIGF2YXRhcixcbiAgICB0aXRsZSxcbiAgICBtZXRhXG4gICk7XG5cbiAgdmFyIGJvZHkgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICd1ay1jb21tZW50LWJvZHknIH0sXG4gICAgcHJvcHMuYm9keSxcbiAgICBwcm9wcy5jaGlsZHJlblxuICApO1xuXG4gIC8vIFJldHVybiBDb21wb25lbnRcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdhcnRpY2xlJyxcbiAgICBfZXh0ZW5kcyh7fSwgX2V4dGVuZHMoe30sIHByb3BzLCBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuZXZlbnRzKHByb3BzKSksIHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAgICdkYXRhLWtpdGlkJzogcHJvcHMua2l0aWRcbiAgICB9KSxcbiAgICBoZWFkZXIsXG4gICAgYm9keVxuICApO1xufTtcblxuQ29tbWVudC5wcm9wVHlwZXMgPSB7XG4gIGF2YXRhcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3QsXG4gIGJvZHk6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzZXM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGl0ZW1zOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdCxcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBtZXRhOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgcHJpbWFyeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKENvbW1lbnQpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtY29tbWVudC9saWIvY29tbWVudC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})