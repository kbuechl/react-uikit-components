webpackHotUpdate(0,{

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar pos = function pos(element) {\n  return {\n    top: element.offsetTop,\n    left: element.offsetLeft\n  };\n};\n\nvar dim = function dim(element) {\n  return {\n    height: element.offsetHeight,\n    width: element.offsetWidth\n  };\n};\n\nvar offset = function offset(opts) {\n  var target = opts.target;\n  var element = opts.element;\n  var flip = opts.flip;\n  var boundary = opts.boundary;\n\n  var boundaryDim = undefined;\n\n  if (boundary) {\n    boundaryDim = dim(boundary);\n  } else {\n    boundaryDim = {\n      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),\n      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)\n    };\n  }\n\n  var targetDetails = {\n    pos: pos(target),\n    dim: dim(target),\n    boundary: target.getBoundingClientRect()\n  };\n\n  var elementDetails = {\n    pos: pos(element),\n    dim: dim(element),\n    boundary: element.getBoundingClientRect()\n  };\n\n  var horFlip = _ufunc2.default.either(function () {\n    return targetDetails.pos.top + targetDetails.dim.height;\n  }, function () {\n    return targetDetails.pos.top - elementDetails.dim.height;\n  });\n\n  var lrVerFlip = _ufunc2.default.either(function () {\n    return targetDetails.pos.left + targetDetails.dim.width;\n  }, function () {\n    return targetDetails.pos.left - elementDetails.dim.width;\n  });\n\n  var top = horFlip(flip && targetDetails.boundary.top - elementDetails.dim.height < 0);\n  var bottom = horFlip(flip && targetDetails.boundary.top + elementDetails.dim.height + targetDetails.dim.height < boundaryDim.height);\n\n  var tbVerLeft = targetDetails.pos.left;\n  var tbVerRight = targetDetails.pos.left - (elementDetails.dim.width - targetDetails.dim.width);\n\n  var horCenter = targetDetails.pos.left - (elementDetails.dim.width - targetDetails.dim.width) / 2;\n  var verCenter = bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2;\n\n  var lrHorLeft = undefined;\n  var lrHorRight = undefined;\n\n  lrHorLeft = lrVerFlip(flip && targetDetails.boundary.left - elementDetails.dim.width < 0);\n  lrHorRight = lrVerFlip(flip && targetDetails.boundary.left + elementDetails.dim.width + targetDetails.dim.width < boundaryDim.width);\n\n  console.log(targetDetails.boundary.left);\n  console.log(elementDetails.dim.width);\n  console.log(targetDetails.dim.width);\n  console.log(boundaryDim.width);\n  console.log('eq: ', targetDetails.boundary.left + elementDetails.dim.width + targetDetails.dim.width);\n  console.log(filp, targetDetails.boundary.left + elementDetails.dim.width + targetDetails.dim.width < boundaryDim.width);\n  console.log(lrHorRight);\n\n  var position = {\n\n    'bottom-left': { top: bottom, left: tbVerLeft },\n    'bottom-center': { top: bottom, left: horCenter },\n    'bottom-right': { top: bottom, left: tbVerRight },\n\n    'top-left': { top: top, left: tbVerLeft },\n    'top-center': { top: top, left: horCenter },\n    'top-right': { top: top, left: tbVerRight },\n\n    'left-top': { top: top, left: lrHorLeft },\n    'left-center': { top: verCenter, left: lrHorLeft },\n    'left-bottom': { top: bottom, left: lrHorLeft },\n\n    'right-top': { top: top, left: lrHorRight },\n    'right-center': { top: verCenter, left: lrHorRight },\n    'right-bottom': { top: bottom, left: lrHorRight }\n  };\n\n  return function (prop) {\n    return position[prop] || position['bottom-left'];\n  };\n};\n\nexports.default = {\n  dim: dim,\n  pos: pos,\n  offset: offset\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvcG9zT2Zmc2V0LmpzP2NlMjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDOUIsU0FBTztBQUNMLE9BQUcsRUFBRSxPQUFPLENBQUMsU0FBUztBQUN0QixRQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVU7R0FDekIsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzlCLFNBQU87QUFDTCxVQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVk7QUFDNUIsU0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0dBQzNCLENBQUM7Q0FDSCxDQUFDOztBQUVGLElBQUksTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNqQyxNQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0IsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixNQUFJLFFBQVEsR0FBRyxJ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LFFBQU0sRUFBRSxNQUFNO0NBQ2YiLCJmaWxlIjoiNjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwb3MgPSBmdW5jdGlvbiBwb3MoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gIH07XG59O1xuXG52YXIgZGltID0gZnVuY3Rpb24gZGltKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoXG4gIH07XG59O1xuXG52YXIgb2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KG9wdHMpIHtcbiAgdmFyIHRhcmdldCA9IG9wdHMudGFyZ2V0O1xuICB2YXIgZWxlbWVudCA9IG9wdHMuZWxlbWVudDtcbiAgdmFyIGZsaXAgPSBvcHRzLmZsaXA7XG4gIHZhciBib3VuZGFyeSA9IG9wdHMuYm91bmRhcnk7XG5cbiAgdmFyIGJvdW5kYXJ5RGltID0gdW5kZWZpbmVkO1xuXG4gIGlmIChib3VuZGFyeSkge1xuICAgIGJvdW5kYXJ5RGltID0gZGltKGJvdW5kYXJ5KTtcbiAgfSBlbHNlIHtcbiAgICBib3VuZGFyeURpbSA9IHtcbiAgICAgIHdpZHRoOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIHRhcmdldERldGFpbHMgPSB7XG4gICAgcG9zOiBwb3ModGFyZ2V0KSxcbiAgICBkaW06IGRpbSh0YXJnZXQpLFxuICAgIGJvdW5kYXJ5OiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgfTtcblxuICB2YXIgZWxlbWVudERldGFpbHMgPSB7XG4gICAgcG9zOiBwb3MoZWxlbWVudCksXG4gICAgZGltOiBkaW0oZWxlbWVudCksXG4gICAgYm91bmRhcnk6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgfTtcblxuICB2YXIgaG9yRmxpcCA9IF91ZnVuYzIuZGVmYXVsdC5laXRoZXIoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YXJnZXREZXRhaWxzLnBvcy50b3AgKyB0YXJnZXREZXRhaWxzLmRpbS5oZWlnaHQ7XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFyZ2V0RGV0YWlscy5wb3MudG9wIC0gZWxlbWVudERldGFpbHMuZGltLmhlaWdodDtcbiAgfSk7XG5cbiAgdmFyIGxyVmVyRmxpcCA9IF91ZnVuYzIuZGVmYXVsdC5laXRoZXIoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YXJnZXREZXRhaWxzLnBvcy5sZWZ0ICsgdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGg7XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFyZ2V0RGV0YWlscy5wb3MubGVmdCAtIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aDtcbiAgfSk7XG5cbiAgdmFyIHRvcCA9IGhvckZsaXAoZmxpcCAmJiB0YXJnZXREZXRhaWxzLmJvdW5kYXJ5LnRvcCAtIGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQgPCAwKTtcbiAgdmFyIGJvdHRvbSA9IGhvckZsaXAoZmxpcCAmJiB0YXJnZXREZXRhaWxzLmJvdW5kYXJ5LnRvcCArIGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQgKyB0YXJnZXREZXRhaWxzLmRpbS5oZWlnaHQgPCBib3VuZGFyeURpbS5oZWlnaHQpO1xuXG4gIHZhciB0YlZlckxlZnQgPSB0YXJnZXREZXRhaWxzLnBvcy5sZWZ0O1xuICB2YXIgdGJWZXJSaWdodCA9IHRhcmdldERldGFpbHMucG9zLmxlZnQgLSAoZWxlbWVudERldGFpbHMuZGltLndpZHRoIC0gdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGgpO1xuXG4gIHZhciBob3JDZW50ZXIgPSB0YXJnZXREZXRhaWxzLnBvcy5sZWZ0IC0gKGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCAtIHRhcmdldERldGFpbHMuZGltLndpZHRoKSAvIDI7XG4gIHZhciB2ZXJDZW50ZXIgPSBib3R0b20gLSAoZWxlbWVudERldGFpbHMuZGltLmhlaWdodCArIHRhcmdldERldGFpbHMuZGltLmhlaWdodCkgLyAyO1xuXG4gIHZhciBsckhvckxlZnQgPSB1bmRlZmluZWQ7XG4gIHZhciBsckhvclJpZ2h0ID0gdW5kZWZpbmVkO1xuXG4gIGxySG9yTGVmdCA9IGxyVmVyRmxpcChmbGlwICYmIHRhcmdldERldGFpbHMuYm91bmRhcnkubGVmdCAtIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCA8IDApO1xuICBsckhvclJpZ2h0ID0gbHJWZXJGbGlwKGZsaXAgJiYgdGFyZ2V0RGV0YWlscy5ib3VuZGFyeS5sZWZ0ICsgZWxlbWVudERldGFpbHMuZGltLndpZHRoICsgdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGggPCBib3VuZGFyeURpbS53aWR0aCk7XG5cbiAgY29uc29sZS5sb2codGFyZ2V0RGV0YWlscy5ib3VuZGFyeS5sZWZ0KTtcbiAgY29uc29sZS5sb2coZWxlbWVudERldGFpbHMuZGltLndpZHRoKTtcbiAgY29uc29sZS5sb2codGFyZ2V0RGV0YWlscy5kaW0ud2lkdGgpO1xuICBjb25zb2xlLmxvZyhib3VuZGFyeURpbS53aWR0aCk7XG4gIGNvbnNvbGUubG9nKCdlcTogJywgdGFyZ2V0RGV0YWlscy5ib3VuZGFyeS5sZWZ0ICsgZWxlbWVudERldGFpbHMuZGltLndpZHRoICsgdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGgpO1xuICBjb25zb2xlLmxvZyhmaWxwLCB0YXJnZXREZXRhaWxzLmJvdW5kYXJ5LmxlZnQgKyBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggKyB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCA8IGJvdW5kYXJ5RGltLndpZHRoKTtcbiAgY29uc29sZS5sb2cobHJIb3JSaWdodCk7XG5cbiAgdmFyIHBvc2l0aW9uID0ge1xuXG4gICAgJ2JvdHRvbS1sZWZ0JzogeyB0b3A6IGJvdHRvbSwgbGVmdDogdGJWZXJMZWZ0IH0sXG4gICAgJ2JvdHRvbS1jZW50ZXInOiB7IHRvcDogYm90dG9tLCBsZWZ0OiBob3JDZW50ZXIgfSxcbiAgICAnYm90dG9tLXJpZ2h0JzogeyB0b3A6IGJvdHRvbSwgbGVmdDogdGJWZXJSaWdodCB9LFxuXG4gICAgJ3RvcC1sZWZ0JzogeyB0b3A6IHRvcCwgbGVmdDogdGJWZXJMZWZ0IH0sXG4gICAgJ3RvcC1jZW50ZXInOiB7IHRvcDogdG9wLCBsZWZ0OiBob3JDZW50ZXIgfSxcbiAgICAndG9wLXJpZ2h0JzogeyB0b3A6IHRvcCwgbGVmdDogdGJWZXJSaWdodCB9LFxuXG4gICAgJ2xlZnQtdG9wJzogeyB0b3A6IHRvcCwgbGVmdDogbHJIb3JMZWZ0IH0sXG4gICAgJ2xlZnQtY2VudGVyJzogeyB0b3A6IHZlckNlbnRlciwgbGVmdDogbHJIb3JMZWZ0IH0sXG4gICAgJ2xlZnQtYm90dG9tJzogeyB0b3A6IGJvdHRvbSwgbGVmdDogbHJIb3JMZWZ0IH0sXG5cbiAgICAncmlnaHQtdG9wJzogeyB0b3A6IHRvcCwgbGVmdDogbHJIb3JSaWdodCB9LFxuICAgICdyaWdodC1jZW50ZXInOiB7IHRvcDogdmVyQ2VudGVyLCBsZWZ0OiBsckhvclJpZ2h0IH0sXG4gICAgJ3JpZ2h0LWJvdHRvbSc6IHsgdG9wOiBib3R0b20sIGxlZnQ6IGxySG9yUmlnaHQgfVxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiBwb3NpdGlvbltwcm9wXSB8fCBwb3NpdGlvblsnYm90dG9tLWxlZnQnXTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGltOiBkaW0sXG4gIHBvczogcG9zLFxuICBvZmZzZXQ6IG9mZnNldFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWRyb3Bkb3duL2xpYi9wb3NPZmZzZXQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})