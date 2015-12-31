webpackHotUpdate(0,{

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar pos = function pos(element) {\n  return {\n    top: element.offsetTop,\n    left: element.offsetLeft\n  };\n};\n\nvar dim = function dim(element) {\n  return {\n    height: element.offsetHeight,\n    width: element.offsetWidth\n  };\n};\n\nvar offset = function offset(opts) {\n  var target = opts.target;\n  var element = opts.element;\n  var flip = opts.flip;\n\n  var targetDetails = {\n    pos: pos(target),\n    dim: dim(target),\n    boundary: target.getBoundingClientRect()\n  };\n\n  var elementDetails = {\n    pos: pos(element),\n    dim: dim(element),\n    boundary: element.getBoundingClientRect()\n  };\n\n  var calc = {\n    top: targetDetails.pos.top - elementDetails.dim.height,\n    bottom: targetDetails.pos.top + targetDetails.dim.height,\n    left: targetDetails.pos.left,\n    right: left - (elementDetails.dim.width - targetDetails.dim.width),\n    horCenter: left - (elementDetails.dim.width - targetDetails.dim.width) / 2,\n    verCenter: bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2\n  };\n\n  var topFlip = _ufunc2.default.either(calc.bottom, calc.top);\n\n  var top = topFlip(flip && elementDetails.boundary.top < 0);\n  var left = targetDetails.pos.left;\n  var bottom = targetDetails.pos.top + targetDetails.dim.height;\n  var right = left - (elementDetails.dim.width - targetDetails.dim.width);\n\n  var horCenter = left - (elementDetails.dim.width - targetDetails.dim.width) / 2;\n  var verCenter = bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2;\n  console.log(top);\n  console.log(elementDetails.boundary);\n\n  var position = {\n    top: top,\n    bottom: bottom,\n    left: left,\n    right: right,\n\n    'bottom-left': { top: bottom, left: left },\n    'bottom-center': { top: bottom, left: horCenter },\n    'bottom-right': { top: bottom, left: right },\n\n    'top-left': { top: top, left: left },\n    'top-center': { top: top, left: horCenter },\n    'top-right': { top: top, left: right },\n\n    'left-top': { top: top, left: left - elementDetails.dim.width },\n    'left-center': { top: verCenter, left: left - elementDetails.dim.width },\n    'left-bottom': { top: bottom, left: left - elementDetails.dim.width },\n\n    'right-top': { top: top, left: right + elementDetails.dim.width },\n    'right-center': { top: verCenter, left: right + elementDetails.dim.width },\n    'right-bottom': { top: bottom, left: right + elementDetails.dim.width }\n  };\n\n  return function (prop) {\n    return position[prop] || position['bottom-left'];\n  };\n};\n\nexports.default = {\n  dim: dim,\n  pos: pos,\n  offset: offset\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvcG9zT2Zmc2V0LmpzP2NlMjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDOUIsU0FBTztBQUNMLE9BQUcsRUFBRSxPQUFPLENBQUMsU0FBUztBQUN0QixRQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVU7R0FDekIsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzlCLFNBQU87QUFDTCxVQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVk7QUFDNUIsU0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0dBQzNCLENBQUM7Q0FDSCxDQUFDOztBQUVGLElBQUksTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNqQyxNQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0IsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFckIsTUFBSSxhQUFhLEdBQUc7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TTtDQUNmIiwiZmlsZSI6IjYyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcG9zID0gZnVuY3Rpb24gcG9zKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdFxuICB9O1xufTtcblxudmFyIGRpbSA9IGZ1bmN0aW9uIGRpbShlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICB9O1xufTtcblxudmFyIG9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldChvcHRzKSB7XG4gIHZhciB0YXJnZXQgPSBvcHRzLnRhcmdldDtcbiAgdmFyIGVsZW1lbnQgPSBvcHRzLmVsZW1lbnQ7XG4gIHZhciBmbGlwID0gb3B0cy5mbGlwO1xuXG4gIHZhciB0YXJnZXREZXRhaWxzID0ge1xuICAgIHBvczogcG9zKHRhcmdldCksXG4gICAgZGltOiBkaW0odGFyZ2V0KSxcbiAgICBib3VuZGFyeTogdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH07XG5cbiAgdmFyIGVsZW1lbnREZXRhaWxzID0ge1xuICAgIHBvczogcG9zKGVsZW1lbnQpLFxuICAgIGRpbTogZGltKGVsZW1lbnQpLFxuICAgIGJvdW5kYXJ5OiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH07XG5cbiAgdmFyIGNhbGMgPSB7XG4gICAgdG9wOiB0YXJnZXREZXRhaWxzLnBvcy50b3AgLSBlbGVtZW50RGV0YWlscy5kaW0uaGVpZ2h0LFxuICAgIGJvdHRvbTogdGFyZ2V0RGV0YWlscy5wb3MudG9wICsgdGFyZ2V0RGV0YWlscy5kaW0uaGVpZ2h0LFxuICAgIGxlZnQ6IHRhcmdldERldGFpbHMucG9zLmxlZnQsXG4gICAgcmlnaHQ6IGxlZnQgLSAoZWxlbWVudERldGFpbHMuZGltLndpZHRoIC0gdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGgpLFxuICAgIGhvckNlbnRlcjogbGVmdCAtIChlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggLSB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCkgLyAyLFxuICAgIHZlckNlbnRlcjogYm90dG9tIC0gKGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQgKyB0YXJnZXREZXRhaWxzLmRpbS5oZWlnaHQpIC8gMlxuICB9O1xuXG4gIHZhciB0b3BGbGlwID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihjYWxjLmJvdHRvbSwgY2FsYy50b3ApO1xuXG4gIHZhciB0b3AgPSB0b3BGbGlwKGZsaXAgJiYgZWxlbWVudERldGFpbHMuYm91bmRhcnkudG9wIDwgMCk7XG4gIHZhciBsZWZ0ID0gdGFyZ2V0RGV0YWlscy5wb3MubGVmdDtcbiAgdmFyIGJvdHRvbSA9IHRhcmdldERldGFpbHMucG9zLnRvcCArIHRhcmdldERldGFpbHMuZGltLmhlaWdodDtcbiAgdmFyIHJpZ2h0ID0gbGVmdCAtIChlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggLSB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCk7XG5cbiAgdmFyIGhvckNlbnRlciA9IGxlZnQgLSAoZWxlbWVudERldGFpbHMuZGltLndpZHRoIC0gdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGgpIC8gMjtcbiAgdmFyIHZlckNlbnRlciA9IGJvdHRvbSAtIChlbGVtZW50RGV0YWlscy5kaW0uaGVpZ2h0ICsgdGFyZ2V0RGV0YWlscy5kaW0uaGVpZ2h0KSAvIDI7XG4gIGNvbnNvbGUubG9nKHRvcCk7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnREZXRhaWxzLmJvdW5kYXJ5KTtcblxuICB2YXIgcG9zaXRpb24gPSB7XG4gICAgdG9wOiB0b3AsXG4gICAgYm90dG9tOiBib3R0b20sXG4gICAgbGVmdDogbGVmdCxcbiAgICByaWdodDogcmlnaHQsXG5cbiAgICAnYm90dG9tLWxlZnQnOiB7IHRvcDogYm90dG9tLCBsZWZ0OiBsZWZ0IH0sXG4gICAgJ2JvdHRvbS1jZW50ZXInOiB7IHRvcDogYm90dG9tLCBsZWZ0OiBob3JDZW50ZXIgfSxcbiAgICAnYm90dG9tLXJpZ2h0JzogeyB0b3A6IGJvdHRvbSwgbGVmdDogcmlnaHQgfSxcblxuICAgICd0b3AtbGVmdCc6IHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfSxcbiAgICAndG9wLWNlbnRlcic6IHsgdG9wOiB0b3AsIGxlZnQ6IGhvckNlbnRlciB9LFxuICAgICd0b3AtcmlnaHQnOiB7IHRvcDogdG9wLCBsZWZ0OiByaWdodCB9LFxuXG4gICAgJ2xlZnQtdG9wJzogeyB0b3A6IHRvcCwgbGVmdDogbGVmdCAtIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCB9LFxuICAgICdsZWZ0LWNlbnRlcic6IHsgdG9wOiB2ZXJDZW50ZXIsIGxlZnQ6IGxlZnQgLSBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfSxcbiAgICAnbGVmdC1ib3R0b20nOiB7IHRvcDogYm90dG9tLCBsZWZ0OiBsZWZ0IC0gZWxlbWVudERldGFpbHMuZGltLndpZHRoIH0sXG5cbiAgICAncmlnaHQtdG9wJzogeyB0b3A6IHRvcCwgbGVmdDogcmlnaHQgKyBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfSxcbiAgICAncmlnaHQtY2VudGVyJzogeyB0b3A6IHZlckNlbnRlciwgbGVmdDogcmlnaHQgKyBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfSxcbiAgICAncmlnaHQtYm90dG9tJzogeyB0b3A6IGJvdHRvbSwgbGVmdDogcmlnaHQgKyBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfVxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiBwb3NpdGlvbltwcm9wXSB8fCBwb3NpdGlvblsnYm90dG9tLWxlZnQnXTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGltOiBkaW0sXG4gIHBvczogcG9zLFxuICBvZmZzZXQ6IG9mZnNldFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWRyb3Bkb3duL2xpYi9wb3NPZmZzZXQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})