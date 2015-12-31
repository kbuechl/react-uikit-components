webpackHotUpdate(0,{

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar pos = function pos(element) {\n  return {\n    top: element.offsetTop,\n    left: element.offsetLeft\n  };\n};\n\nvar dim = function dim(element) {\n  return {\n    height: element.offsetHeight,\n    width: element.offsetWidth\n  };\n};\n\nvar offset = function offset(opts) {\n  var target = opts.target;\n  var element = opts.element;\n  var flip = opts.flip;\n  var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);\n  var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);\n\n  var targetDetails = {\n    pos: pos(target),\n    dim: dim(target),\n    boundary: target.getBoundingClientRect()\n  };\n\n  var elementDetails = {\n    pos: pos(element),\n    dim: dim(element),\n    boundary: element.getBoundingClientRect()\n  };\n\n  var calc = {\n    top: targetDetails.pos.top - elementDetails.dim.height,\n    bottom: targetDetails.pos.top + targetDetails.dim.height,\n    left: targetDetails.pos.left,\n    right: left - (elementDetails.dim.width - targetDetails.dim.width),\n    horCenter: left - (elementDetails.dim.width - targetDetails.dim.width) / 2,\n    verCenter: bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2\n  };\n\n  var topFlip = _ufunc2.default.either(calc.bottom, calc.top);\n  var bottomFlip = _ufunc2.default.either(calc.top, calc.bottom);\n\n  var top = topFlip(flip && elementDetails.boundary.top < 0);\n  var bottom = bottomFlip(flip && elementDetails.boundary.bottom > viewPortHeight);\n  var left = targetDetails.pos.left;\n\n  var right = left - (elementDetails.dim.width - targetDetails.dim.width);\n\n  var horCenter = left - (elementDetails.dim.width - targetDetails.dim.width) / 2;\n  var verCenter = bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2;\n  console.log(top);\n  console.log(elementDetails.boundary);\n\n  var position = {\n    top: top,\n    bottom: bottom,\n    left: left,\n    right: right,\n\n    'bottom-left': { top: bottom, left: left },\n    'bottom-center': { top: bottom, left: horCenter },\n    'bottom-right': { top: bottom, left: right },\n\n    'top-left': { top: top, left: left },\n    'top-center': { top: top, left: horCenter },\n    'top-right': { top: top, left: right },\n\n    'left-top': { top: top, left: left - elementDetails.dim.width },\n    'left-center': { top: verCenter, left: left - elementDetails.dim.width },\n    'left-bottom': { top: bottom, left: left - elementDetails.dim.width },\n\n    'right-top': { top: top, left: right + elementDetails.dim.width },\n    'right-center': { top: verCenter, left: right + elementDetails.dim.width },\n    'right-bottom': { top: bottom, left: right + elementDetails.dim.width }\n  };\n\n  return function (prop) {\n    return position[prop] || position['bottom-left'];\n  };\n};\n\nexports.default = {\n  dim: dim,\n  pos: pos,\n  offset: offset\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvcG9zT2Zmc2V0LmpzP2NlMjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDOUIsU0FBTztBQUNMLE9BQUcsRUFBRSxPQUFPLENBQUMsU0FBUztBQUN0QixRQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVU7R0FDekIsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzlCLFNBQU87QUFDTCxVQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVk7QUFDNUIsU0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0dBQzNCLENBQUM7Q0FDSCxDQUFDOztBQUVGLElBQUksTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNqQyxNQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0IsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixNQUFJLGFBQWEsR0FBRyxJ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QUcsQ0FBQyxLQUFLLEVBQUU7QUFDMUUsa0JBQWMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtHQUN4RSxDQUFDOztBQUVGLFNBQU8sVUFBVSxJQUFJLEVBQUU7QUFDckIsV0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0dBQ2xELENBQUM7Q0FDSCxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUc7QUFDaEIsS0FBRyxFQUFFLEdBQUc7QUFDUixLQUFHLEVBQUUsR0FBRztBQUNSLFFBQU0sRUFBRSxNQUFNO0NBQ2YiLCJmaWxlIjoiNjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwb3MgPSBmdW5jdGlvbiBwb3MoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gIH07XG59O1xuXG52YXIgZGltID0gZnVuY3Rpb24gZGltKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoXG4gIH07XG59O1xuXG52YXIgb2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KG9wdHMpIHtcbiAgdmFyIHRhcmdldCA9IG9wdHMudGFyZ2V0O1xuICB2YXIgZWxlbWVudCA9IG9wdHMuZWxlbWVudDtcbiAgdmFyIGZsaXAgPSBvcHRzLmZsaXA7XG4gIHZhciB2aWV3UG9ydFdpZHRoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgdmFyIHZpZXdQb3J0SGVpZ2h0ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIHZhciB0YXJnZXREZXRhaWxzID0ge1xuICAgIHBvczogcG9zKHRhcmdldCksXG4gICAgZGltOiBkaW0odGFyZ2V0KSxcbiAgICBib3VuZGFyeTogdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH07XG5cbiAgdmFyIGVsZW1lbnREZXRhaWxzID0ge1xuICAgIHBvczogcG9zKGVsZW1lbnQpLFxuICAgIGRpbTogZGltKGVsZW1lbnQpLFxuICAgIGJvdW5kYXJ5OiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH07XG5cbiAgdmFyIGNhbGMgPSB7XG4gICAgdG9wOiB0YXJnZXREZXRhaWxzLnBvcy50b3AgLSBlbGVtZW50RGV0YWlscy5kaW0uaGVpZ2h0LFxuICAgIGJvdHRvbTogdGFyZ2V0RGV0YWlscy5wb3MudG9wICsgdGFyZ2V0RGV0YWlscy5kaW0uaGVpZ2h0LFxuICAgIGxlZnQ6IHRhcmdldERldGFpbHMucG9zLmxlZnQsXG4gICAgcmlnaHQ6IGxlZnQgLSAoZWxlbWVudERldGFpbHMuZGltLndpZHRoIC0gdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGgpLFxuICAgIGhvckNlbnRlcjogbGVmdCAtIChlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggLSB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCkgLyAyLFxuICAgIHZlckNlbnRlcjogYm90dG9tIC0gKGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQgKyB0YXJnZXREZXRhaWxzLmRpbS5oZWlnaHQpIC8gMlxuICB9O1xuXG4gIHZhciB0b3BGbGlwID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihjYWxjLmJvdHRvbSwgY2FsYy50b3ApO1xuICB2YXIgYm90dG9tRmxpcCA9IF91ZnVuYzIuZGVmYXVsdC5laXRoZXIoY2FsYy50b3AsIGNhbGMuYm90dG9tKTtcblxuICB2YXIgdG9wID0gdG9wRmxpcChmbGlwICYmIGVsZW1lbnREZXRhaWxzLmJvdW5kYXJ5LnRvcCA8IDApO1xuICB2YXIgYm90dG9tID0gYm90dG9tRmxpcChmbGlwICYmIGVsZW1lbnREZXRhaWxzLmJvdW5kYXJ5LmJvdHRvbSA+IHZpZXdQb3J0SGVpZ2h0KTtcbiAgdmFyIGxlZnQgPSB0YXJnZXREZXRhaWxzLnBvcy5sZWZ0O1xuXG4gIHZhciByaWdodCA9IGxlZnQgLSAoZWxlbWVudERldGFpbHMuZGltLndpZHRoIC0gdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGgpO1xuXG4gIHZhciBob3JDZW50ZXIgPSBsZWZ0IC0gKGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCAtIHRhcmdldERldGFpbHMuZGltLndpZHRoKSAvIDI7XG4gIHZhciB2ZXJDZW50ZXIgPSBib3R0b20gLSAoZWxlbWVudERldGFpbHMuZGltLmhlaWdodCArIHRhcmdldERldGFpbHMuZGltLmhlaWdodCkgLyAyO1xuICBjb25zb2xlLmxvZyh0b3ApO1xuICBjb25zb2xlLmxvZyhlbGVtZW50RGV0YWlscy5ib3VuZGFyeSk7XG5cbiAgdmFyIHBvc2l0aW9uID0ge1xuICAgIHRvcDogdG9wLFxuICAgIGJvdHRvbTogYm90dG9tLFxuICAgIGxlZnQ6IGxlZnQsXG4gICAgcmlnaHQ6IHJpZ2h0LFxuXG4gICAgJ2JvdHRvbS1sZWZ0JzogeyB0b3A6IGJvdHRvbSwgbGVmdDogbGVmdCB9LFxuICAgICdib3R0b20tY2VudGVyJzogeyB0b3A6IGJvdHRvbSwgbGVmdDogaG9yQ2VudGVyIH0sXG4gICAgJ2JvdHRvbS1yaWdodCc6IHsgdG9wOiBib3R0b20sIGxlZnQ6IHJpZ2h0IH0sXG5cbiAgICAndG9wLWxlZnQnOiB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0sXG4gICAgJ3RvcC1jZW50ZXInOiB7IHRvcDogdG9wLCBsZWZ0OiBob3JDZW50ZXIgfSxcbiAgICAndG9wLXJpZ2h0JzogeyB0b3A6IHRvcCwgbGVmdDogcmlnaHQgfSxcblxuICAgICdsZWZ0LXRvcCc6IHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgLSBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfSxcbiAgICAnbGVmdC1jZW50ZXInOiB7IHRvcDogdmVyQ2VudGVyLCBsZWZ0OiBsZWZ0IC0gZWxlbWVudERldGFpbHMuZGltLndpZHRoIH0sXG4gICAgJ2xlZnQtYm90dG9tJzogeyB0b3A6IGJvdHRvbSwgbGVmdDogbGVmdCAtIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCB9LFxuXG4gICAgJ3JpZ2h0LXRvcCc6IHsgdG9wOiB0b3AsIGxlZnQ6IHJpZ2h0ICsgZWxlbWVudERldGFpbHMuZGltLndpZHRoIH0sXG4gICAgJ3JpZ2h0LWNlbnRlcic6IHsgdG9wOiB2ZXJDZW50ZXIsIGxlZnQ6IHJpZ2h0ICsgZWxlbWVudERldGFpbHMuZGltLndpZHRoIH0sXG4gICAgJ3JpZ2h0LWJvdHRvbSc6IHsgdG9wOiBib3R0b20sIGxlZnQ6IHJpZ2h0ICsgZWxlbWVudERldGFpbHMuZGltLndpZHRoIH1cbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHByb3ApIHtcbiAgICByZXR1cm4gcG9zaXRpb25bcHJvcF0gfHwgcG9zaXRpb25bJ2JvdHRvbS1sZWZ0J107XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGRpbTogZGltLFxuICBwb3M6IHBvcyxcbiAgb2Zmc2V0OiBvZmZzZXRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvcG9zT2Zmc2V0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})