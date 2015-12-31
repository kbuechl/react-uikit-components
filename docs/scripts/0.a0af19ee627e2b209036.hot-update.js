webpackHotUpdate(0,{

/***/ 620:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar pos = function pos(element) {\n  return {\n    top: element.offsetTop,\n    left: element.offsetLeft\n  };\n};\n\nvar dim = function dim(element) {\n  return {\n    height: element.offsetHeight,\n    width: element.offsetWidth\n  };\n};\n\nvar offset = function offset(trigger, body) {\n  var triggerDetails = {\n    pos: pos(trigger),\n    dim: dim(trigger)\n  };\n\n  var bodyDetails = {\n    pos: pos(body),\n    dim: dim(body)\n  };\n\n  var top = triggerDetails.pos.top - bodyDetails.dim.height;\n  var left = triggerDetails.pos.left;\n  var bottom = triggerDetails.pos.top + triggerDetails.dim.height;\n  var right = left - (bodyDetails.dim.width - triggerDetails.dim.width);\n\n  var horCenter = left - (bodyDetails.dim.width - triggerDetails.dim.width) / 2;\n  var verCenter = bottom - (bodyDetails.dim.height + triggerDetails.dim.height) / 2;\n\n  var position = {\n    top: top,\n    bottom: bottom,\n    left: left,\n    right: right,\n\n    'bottom-left': { top: bottom, left: left },\n    'bottom-center': { top: bottom, left: horCenter },\n    'bottom-right': { top: bottom, left: right },\n\n    'top-left': { top: top, left: left },\n    'top-center': { top: top, left: horCenter },\n    'top-right': { top: top, left: right },\n\n    'left-top': { top: top, left: left - bodyDetails.dim.width },\n    'left-center': { top: verCenter, left: left - bodyDetails.dim.width },\n    'left-bottom': { top: bottom, left: left - bodyDetails.dim.width },\n\n    'right-top': { top: top, left: right + bodyDetails.dim.width },\n    'right-center': { top: verCenter, left: right + bodyDetails.dim.width },\n    'right-bottom': { top: bottom, left: right + bodyDetails.dim.width }\n  };\n\n  return function (prop) {\n    return position[prop] || position['bottom-left'];\n  };\n};\n\nvar flip = function flip(target, element, position) {\n  var elementOffset = offset(target, element)(position);\n  var tartgetPos = pos(target);\n  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);\n  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);\n\n  console.log(element.getBoundingClientRect());\n  console.log(tartgetPos);\n  console.log('w: ' + width, 'h: ' + height);\n};\n\nexports.default = {\n  dim: dim,\n  pos: pos,\n  offset: offset,\n  flip: flip\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvcG9zT2Zmc2V0LmpzP2NlMjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUNILElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRTtBQUM5QixTQUFPO0FBQ0wsT0FBRyxFQUFFLE9BQU8sQ0FBQyxTQUFTO0FBQ3RCLFFBQUksRUFBRSxPQUFPLENBQUMsVUFBVTtHQUN6QixDQUFDO0NBQ0gsQ0FBQzs7QUFFRixJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDOUIsU0FBTztBQUNMLFVBQU0sRUFBRSxPQUFPLENBQUMsWUFBWTtBQUM1QixTQUFLLEVBQUUsT0FBTyxDQUFDLFdBQVc7R0FDM0IsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMxQyxNQUFJLGNBQWMsR0FBRztBQUNuQixPQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUNqQixPQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQztHQUNsQixDQUFDOztBQUVGLE1BQUksV0FBVyxHQUFHO0FBQ2hCLE9BQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQ2QsT0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUM7R0FDZixDQUFDOztBQUVGLE1BQUksR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQzFELE1BQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQ25DLE1BQUksTUFBTSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ2hFLE1BQUksS0FBSyxHQUFHLElBQUksSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUV0RSxNQUFJLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7QUFDOUUsTUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDOztBQUVsRixNQUFJLFFBQVEsR0FBRztBQUNiLE9BQUcsRUFBRSxHQUFHO0FBQ1IsVUFBTSxFQUFFLE1BQU07QUFDZCxRQUFJLEVBQUUsSUFBSTtBQUNWLFNBQUssRUFBRSxLQUFLOztBQUVaLGlCQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDMUMsbUJBQWUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUNqRCxrQkFBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOztBQUU1QyxjQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDcEMsZ0JBQVksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUMzQyxlQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7O0FBRXRDLGNBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtBQUM1RCxpQkFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ3JFLGlCQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7O0FBRWxFLGVBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtBQUM5RCxrQkFBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ3ZFLGtCQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7R0FDckUsQ0FBQzs7QUFFRixTQUFPLFVBQVUsSUFBSSxFQUFFO0FBQ3JCLFdBQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUNsRCxDQUFDO0NBQ0gsQ0FBQzs7QUFFRixJQUFJLElBQUksR0FBRyxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQUNsRCxNQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELE1BQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkYsTUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUV0RixTQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7QUFDN0MsU0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixTQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0NBQzVDLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRztBQUNoQixLQUFHLEVBQUUsR0FBRztBQUNSLEtBQUcsRUFBRSxHQUFHO0FBQ1IsUUFBTSxFQUFFLE1BQU07QUFDZCxNQUFJLEVBQUUsSUFBSTtDQUNYIiwiZmlsZSI6IjYyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBwb3MgPSBmdW5jdGlvbiBwb3MoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gIH07XG59O1xuXG52YXIgZGltID0gZnVuY3Rpb24gZGltKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoXG4gIH07XG59O1xuXG52YXIgb2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KHRyaWdnZXIsIGJvZHkpIHtcbiAgdmFyIHRyaWdnZXJEZXRhaWxzID0ge1xuICAgIHBvczogcG9zKHRyaWdnZXIpLFxuICAgIGRpbTogZGltKHRyaWdnZXIpXG4gIH07XG5cbiAgdmFyIGJvZHlEZXRhaWxzID0ge1xuICAgIHBvczogcG9zKGJvZHkpLFxuICAgIGRpbTogZGltKGJvZHkpXG4gIH07XG5cbiAgdmFyIHRvcCA9IHRyaWdnZXJEZXRhaWxzLnBvcy50b3AgLSBib2R5RGV0YWlscy5kaW0uaGVpZ2h0O1xuICB2YXIgbGVmdCA9IHRyaWdnZXJEZXRhaWxzLnBvcy5sZWZ0O1xuICB2YXIgYm90dG9tID0gdHJpZ2dlckRldGFpbHMucG9zLnRvcCArIHRyaWdnZXJEZXRhaWxzLmRpbS5oZWlnaHQ7XG4gIHZhciByaWdodCA9IGxlZnQgLSAoYm9keURldGFpbHMuZGltLndpZHRoIC0gdHJpZ2dlckRldGFpbHMuZGltLndpZHRoKTtcblxuICB2YXIgaG9yQ2VudGVyID0gbGVmdCAtIChib2R5RGV0YWlscy5kaW0ud2lkdGggLSB0cmlnZ2VyRGV0YWlscy5kaW0ud2lkdGgpIC8gMjtcbiAgdmFyIHZlckNlbnRlciA9IGJvdHRvbSAtIChib2R5RGV0YWlscy5kaW0uaGVpZ2h0ICsgdHJpZ2dlckRldGFpbHMuZGltLmhlaWdodCkgLyAyO1xuXG4gIHZhciBwb3NpdGlvbiA9IHtcbiAgICB0b3A6IHRvcCxcbiAgICBib3R0b206IGJvdHRvbSxcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIHJpZ2h0OiByaWdodCxcblxuICAgICdib3R0b20tbGVmdCc6IHsgdG9wOiBib3R0b20sIGxlZnQ6IGxlZnQgfSxcbiAgICAnYm90dG9tLWNlbnRlcic6IHsgdG9wOiBib3R0b20sIGxlZnQ6IGhvckNlbnRlciB9LFxuICAgICdib3R0b20tcmlnaHQnOiB7IHRvcDogYm90dG9tLCBsZWZ0OiByaWdodCB9LFxuXG4gICAgJ3RvcC1sZWZ0JzogeyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9LFxuICAgICd0b3AtY2VudGVyJzogeyB0b3A6IHRvcCwgbGVmdDogaG9yQ2VudGVyIH0sXG4gICAgJ3RvcC1yaWdodCc6IHsgdG9wOiB0b3AsIGxlZnQ6IHJpZ2h0IH0sXG5cbiAgICAnbGVmdC10b3AnOiB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IC0gYm9keURldGFpbHMuZGltLndpZHRoIH0sXG4gICAgJ2xlZnQtY2VudGVyJzogeyB0b3A6IHZlckNlbnRlciwgbGVmdDogbGVmdCAtIGJvZHlEZXRhaWxzLmRpbS53aWR0aCB9LFxuICAgICdsZWZ0LWJvdHRvbSc6IHsgdG9wOiBib3R0b20sIGxlZnQ6IGxlZnQgLSBib2R5RGV0YWlscy5kaW0ud2lkdGggfSxcblxuICAgICdyaWdodC10b3AnOiB7IHRvcDogdG9wLCBsZWZ0OiByaWdodCArIGJvZHlEZXRhaWxzLmRpbS53aWR0aCB9LFxuICAgICdyaWdodC1jZW50ZXInOiB7IHRvcDogdmVyQ2VudGVyLCBsZWZ0OiByaWdodCArIGJvZHlEZXRhaWxzLmRpbS53aWR0aCB9LFxuICAgICdyaWdodC1ib3R0b20nOiB7IHRvcDogYm90dG9tLCBsZWZ0OiByaWdodCArIGJvZHlEZXRhaWxzLmRpbS53aWR0aCB9XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uW3Byb3BdIHx8IHBvc2l0aW9uWydib3R0b20tbGVmdCddO1xuICB9O1xufTtcblxudmFyIGZsaXAgPSBmdW5jdGlvbiBmbGlwKHRhcmdldCwgZWxlbWVudCwgcG9zaXRpb24pIHtcbiAgdmFyIGVsZW1lbnRPZmZzZXQgPSBvZmZzZXQodGFyZ2V0LCBlbGVtZW50KShwb3NpdGlvbik7XG4gIHZhciB0YXJ0Z2V0UG9zID0gcG9zKHRhcmdldCk7XG4gIHZhciB3aWR0aCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIHZhciBoZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG5cbiAgY29uc29sZS5sb2coZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gIGNvbnNvbGUubG9nKHRhcnRnZXRQb3MpO1xuICBjb25zb2xlLmxvZygndzogJyArIHdpZHRoLCAnaDogJyArIGhlaWdodCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGRpbTogZGltLFxuICBwb3M6IHBvcyxcbiAgb2Zmc2V0OiBvZmZzZXQsXG4gIGZsaXA6IGZsaXBcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvcG9zT2Zmc2V0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})