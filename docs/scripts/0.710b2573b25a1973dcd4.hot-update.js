webpackHotUpdate(0,{

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar pos = function pos(element) {\n  return {\n    top: element.offsetTop,\n    left: element.offsetLeft\n  };\n};\n\nvar dim = function dim(element) {\n  return {\n    height: element.offsetHeight,\n    width: element.offsetWidth\n  };\n};\n\nvar offset = function offset(opts) {\n  var target = opts.target;\n  var element = opts.element;\n  var flip = opts.flip;\n  var boundary = opts.boundary;\n\n  var boundaryDim = undefined;\n\n  if (boundary) {\n    boundaryDim = dim(boundary);\n  } else {\n    boundaryDim = {\n      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),\n      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)\n    };\n  }\n\n  var targetDetails = {\n    pos: pos(target),\n    dim: dim(target),\n    boundary: target.getBoundingClientRect()\n  };\n\n  var elementDetails = {\n    pos: pos(element),\n    dim: dim(element),\n    boundary: element.getBoundingClientRect()\n  };\n\n  var horFlip = _ufunc2.default.either(function () {\n    return targetDetails.pos.top + targetDetails.dim.height;\n  }, function () {\n    return targetDetails.pos.top - elementDetails.dim.height;\n  });\n\n  var lrVerFlip = _ufunc2.default.either(function () {\n    return targetDetails.pos.left + targetDetails.dim.width;\n  }, function () {\n    return targetDetails.pos.left - elementDetails.dim.width;\n  });\n\n  var tbVerLeft = targetDetails.pos.left;\n  var tbVerRight = targetDetails.pos.left - (elementDetails.dim.width - targetDetails.dim.width);\n\n  var horCenter = targetDetails.pos.left - (elementDetails.dim.width - targetDetails.dim.width) / 2;\n  var verCenter = bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2;\n\n  var top = undefined;\n  var bottom = undefined;\n  var lrHorLeft = undefined;\n  var lrHorRight = undefined;\n\n  if (flip) {\n    top = horFlip(flip && targetDetails.boundary.top - elementDetails.dim.height < 0);\n    bottom = horFlip(flip && targetDetails.boundary.top + elementDetails.dim.height + targetDetails.dim.height < boundaryDim.height);\n    lrHorLeft = lrVerFlip(targetDetails.boundary.left - elementDetails.dim.width < 0);\n    lrHorRight = lrVerFlip(targetDetails.boundary.left + elementDetails.dim.width + targetDetails.dim.width < boundaryDim.width);\n  } else {\n    top = horFlip(false);\n    bottom = horFlip(true);\n    lrHorLeft = lrVerFlip(false);\n    lrHorRight = lrVerFlip(true);\n  }\n\n  console.log(targetDetails.boundary.left);\n  console.log(elementDetails.dim.width);\n  console.log(targetDetails.dim.width);\n  console.log(boundaryDim.width);\n  console.log('eq: ', targetDetails.boundary.left + elementDetails.dim.width + targetDetails.dim.width);\n  console.log(flip && targetDetails.boundary.left + elementDetails.dim.width + targetDetails.dim.width < boundaryDim.width);\n  console.log(lrHorRight);\n\n  var position = {\n\n    'bottom-left': { top: bottom, left: tbVerLeft },\n    'bottom-center': { top: bottom, left: horCenter },\n    'bottom-right': { top: bottom, left: tbVerRight },\n\n    'top-left': { top: top, left: tbVerLeft },\n    'top-center': { top: top, left: horCenter },\n    'top-right': { top: top, left: tbVerRight },\n\n    'left-top': { top: top, left: lrHorLeft },\n    'left-center': { top: verCenter, left: lrHorLeft },\n    'left-bottom': { top: bottom, left: lrHorLeft },\n\n    'right-top': { top: top, left: lrHorRight },\n    'right-center': { top: verCenter, left: lrHorRight },\n    'right-bottom': { top: bottom, left: lrHorRight }\n  };\n\n  return function (prop) {\n    return position[prop] || position['bottom-left'];\n  };\n};\n\nexports.default = {\n  dim: dim,\n  pos: pos,\n  offset: offset\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvcG9zT2Zmc2V0LmpzP2NlMjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDOUIsU0FBTztBQUNMLE9BQUcsRUFBRSxPQUFPLENBQUMsU0FBUztBQUN0QixRQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVU7R0FDekIsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzlCLFNBQU87QUFDTCxVQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVk7QUFDNUIsU0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0dBQzNCLENBQUM7Q0FDSCxDQUFDOztBQUVGLElBQUksTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNqQyxNQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0IsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixNQUFJLFFBQVEsR0FBRyxJ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R0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0dBQ2xELENBQUM7O0FBRUYsU0FBTyxVQUFVLElBQUksRUFBRTtBQUNyQixXQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDbEQsQ0FBQztDQUNILENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRztBQUNoQixLQUFHLEVBQUUsR0FBRztBQUNSLEtBQUcsRUFBRSxHQUFHO0FBQ1IsUUFBTSxFQUFFLE1BQU07Q0FDZiIsImZpbGUiOiI2MjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHBvcyA9IGZ1bmN0aW9uIHBvcyhlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICBsZWZ0OiBlbGVtZW50Lm9mZnNldExlZnRcbiAgfTtcbn07XG5cbnZhciBkaW0gPSBmdW5jdGlvbiBkaW0oZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgfTtcbn07XG5cbnZhciBvZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQob3B0cykge1xuICB2YXIgdGFyZ2V0ID0gb3B0cy50YXJnZXQ7XG4gIHZhciBlbGVtZW50ID0gb3B0cy5lbGVtZW50O1xuICB2YXIgZmxpcCA9IG9wdHMuZmxpcDtcbiAgdmFyIGJvdW5kYXJ5ID0gb3B0cy5ib3VuZGFyeTtcblxuICB2YXIgYm91bmRhcnlEaW0gPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGJvdW5kYXJ5KSB7XG4gICAgYm91bmRhcnlEaW0gPSBkaW0oYm91bmRhcnkpO1xuICB9IGVsc2Uge1xuICAgIGJvdW5kYXJ5RGltID0ge1xuICAgICAgd2lkdGg6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCksXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKVxuICAgIH07XG4gIH1cblxuICB2YXIgdGFyZ2V0RGV0YWlscyA9IHtcbiAgICBwb3M6IHBvcyh0YXJnZXQpLFxuICAgIGRpbTogZGltKHRhcmdldCksXG4gICAgYm91bmRhcnk6IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9O1xuXG4gIHZhciBlbGVtZW50RGV0YWlscyA9IHtcbiAgICBwb3M6IHBvcyhlbGVtZW50KSxcbiAgICBkaW06IGRpbShlbGVtZW50KSxcbiAgICBib3VuZGFyeTogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9O1xuXG4gIHZhciBob3JGbGlwID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRhcmdldERldGFpbHMucG9zLnRvcCArIHRhcmdldERldGFpbHMuZGltLmhlaWdodDtcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YXJnZXREZXRhaWxzLnBvcy50b3AgLSBlbGVtZW50RGV0YWlscy5kaW0uaGVpZ2h0O1xuICB9KTtcblxuICB2YXIgbHJWZXJGbGlwID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRhcmdldERldGFpbHMucG9zLmxlZnQgKyB0YXJnZXREZXRhaWxzLmRpbS53aWR0aDtcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YXJnZXREZXRhaWxzLnBvcy5sZWZ0IC0gZWxlbWVudERldGFpbHMuZGltLndpZHRoO1xuICB9KTtcblxuICB2YXIgdGJWZXJMZWZ0ID0gdGFyZ2V0RGV0YWlscy5wb3MubGVmdDtcbiAgdmFyIHRiVmVyUmlnaHQgPSB0YXJnZXREZXRhaWxzLnBvcy5sZWZ0IC0gKGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCAtIHRhcmdldERldGFpbHMuZGltLndpZHRoKTtcblxuICB2YXIgaG9yQ2VudGVyID0gdGFyZ2V0RGV0YWlscy5wb3MubGVmdCAtIChlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggLSB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCkgLyAyO1xuICB2YXIgdmVyQ2VudGVyID0gYm90dG9tIC0gKGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQgKyB0YXJnZXREZXRhaWxzLmRpbS5oZWlnaHQpIC8gMjtcblxuICB2YXIgdG9wID0gdW5kZWZpbmVkO1xuICB2YXIgYm90dG9tID0gdW5kZWZpbmVkO1xuICB2YXIgbHJIb3JMZWZ0ID0gdW5kZWZpbmVkO1xuICB2YXIgbHJIb3JSaWdodCA9IHVuZGVmaW5lZDtcblxuICBpZiAoZmxpcCkge1xuICAgIHRvcCA9IGhvckZsaXAoZmxpcCAmJiB0YXJnZXREZXRhaWxzLmJvdW5kYXJ5LnRvcCAtIGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQgPCAwKTtcbiAgICBib3R0b20gPSBob3JGbGlwKGZsaXAgJiYgdGFyZ2V0RGV0YWlscy5ib3VuZGFyeS50b3AgKyBlbGVtZW50RGV0YWlscy5kaW0uaGVpZ2h0ICsgdGFyZ2V0RGV0YWlscy5kaW0uaGVpZ2h0IDwgYm91bmRhcnlEaW0uaGVpZ2h0KTtcbiAgICBsckhvckxlZnQgPSBsclZlckZsaXAodGFyZ2V0RGV0YWlscy5ib3VuZGFyeS5sZWZ0IC0gZWxlbWVudERldGFpbHMuZGltLndpZHRoIDwgMCk7XG4gICAgbHJIb3JSaWdodCA9IGxyVmVyRmxpcCh0YXJnZXREZXRhaWxzLmJvdW5kYXJ5LmxlZnQgKyBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggKyB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCA8IGJvdW5kYXJ5RGltLndpZHRoKTtcbiAgfSBlbHNlIHtcbiAgICB0b3AgPSBob3JGbGlwKGZhbHNlKTtcbiAgICBib3R0b20gPSBob3JGbGlwKHRydWUpO1xuICAgIGxySG9yTGVmdCA9IGxyVmVyRmxpcChmYWxzZSk7XG4gICAgbHJIb3JSaWdodCA9IGxyVmVyRmxpcCh0cnVlKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHRhcmdldERldGFpbHMuYm91bmRhcnkubGVmdCk7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCk7XG4gIGNvbnNvbGUubG9nKHRhcmdldERldGFpbHMuZGltLndpZHRoKTtcbiAgY29uc29sZS5sb2coYm91bmRhcnlEaW0ud2lkdGgpO1xuICBjb25zb2xlLmxvZygnZXE6ICcsIHRhcmdldERldGFpbHMuYm91bmRhcnkubGVmdCArIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCArIHRhcmdldERldGFpbHMuZGltLndpZHRoKTtcbiAgY29uc29sZS5sb2coZmxpcCAmJiB0YXJnZXREZXRhaWxzLmJvdW5kYXJ5LmxlZnQgKyBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggKyB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCA8IGJvdW5kYXJ5RGltLndpZHRoKTtcbiAgY29uc29sZS5sb2cobHJIb3JSaWdodCk7XG5cbiAgdmFyIHBvc2l0aW9uID0ge1xuXG4gICAgJ2JvdHRvbS1sZWZ0JzogeyB0b3A6IGJvdHRvbSwgbGVmdDogdGJWZXJMZWZ0IH0sXG4gICAgJ2JvdHRvbS1jZW50ZXInOiB7IHRvcDogYm90dG9tLCBsZWZ0OiBob3JDZW50ZXIgfSxcbiAgICAnYm90dG9tLXJpZ2h0JzogeyB0b3A6IGJvdHRvbSwgbGVmdDogdGJWZXJSaWdodCB9LFxuXG4gICAgJ3RvcC1sZWZ0JzogeyB0b3A6IHRvcCwgbGVmdDogdGJWZXJMZWZ0IH0sXG4gICAgJ3RvcC1jZW50ZXInOiB7IHRvcDogdG9wLCBsZWZ0OiBob3JDZW50ZXIgfSxcbiAgICAndG9wLXJpZ2h0JzogeyB0b3A6IHRvcCwgbGVmdDogdGJWZXJSaWdodCB9LFxuXG4gICAgJ2xlZnQtdG9wJzogeyB0b3A6IHRvcCwgbGVmdDogbHJIb3JMZWZ0IH0sXG4gICAgJ2xlZnQtY2VudGVyJzogeyB0b3A6IHZlckNlbnRlciwgbGVmdDogbHJIb3JMZWZ0IH0sXG4gICAgJ2xlZnQtYm90dG9tJzogeyB0b3A6IGJvdHRvbSwgbGVmdDogbHJIb3JMZWZ0IH0sXG5cbiAgICAncmlnaHQtdG9wJzogeyB0b3A6IHRvcCwgbGVmdDogbHJIb3JSaWdodCB9LFxuICAgICdyaWdodC1jZW50ZXInOiB7IHRvcDogdmVyQ2VudGVyLCBsZWZ0OiBsckhvclJpZ2h0IH0sXG4gICAgJ3JpZ2h0LWJvdHRvbSc6IHsgdG9wOiBib3R0b20sIGxlZnQ6IGxySG9yUmlnaHQgfVxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiBwb3NpdGlvbltwcm9wXSB8fCBwb3NpdGlvblsnYm90dG9tLWxlZnQnXTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGltOiBkaW0sXG4gIHBvczogcG9zLFxuICBvZmZzZXQ6IG9mZnNldFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWRyb3Bkb3duL2xpYi9wb3NPZmZzZXQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})