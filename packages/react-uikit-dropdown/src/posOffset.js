'use strict';
import ufunc from 'ufunc';


const pos = (element) => {
  return {
    top: element.offsetTop,
    left: element.offsetLeft
  };
};


const dim = (element) => {
  return {
    height: element.offsetHeight,
    width : element.offsetWidth
  };
};


const offset = (opts) => {
  const target = opts.target;
  const element = opts.element;
  const flip = opts.flip;
  const boundary = opts.boundary;

  let boundaryDim;

  if (boundary) {
    boundaryDim = dim(boundary);
  } else {
    boundaryDim = {
      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };
  }

  const targetDetails = {
    pos     : pos(target),
    dim     : dim(target),
    boundary: target.getBoundingClientRect()
  };

  const elementDetails = {
    pos: pos(element),
    dim: dim(element),
    boundary: element.getBoundingClientRect()
  };


  const horFlip = ufunc.either(
    () => targetDetails.pos.top + targetDetails.dim.height,
    () => targetDetails.pos.top - elementDetails.dim.height
  );


  const lrVerFlip = ufunc.either(
    () => targetDetails.pos.left + targetDetails.dim.width,
    () => targetDetails.pos.left - elementDetails.dim.width
  );


  const tbVerLeft = targetDetails.pos.left;
  const tbVerRight = targetDetails.pos.left - (elementDetails.dim.width - targetDetails.dim.width);


  let top;
  let bottom;
  let lrHorLeft;
  let lrHorRight;


  if (flip) {
    top = horFlip((targetDetails.boundary.top - elementDetails.dim.height) < 0);
    bottom = horFlip((targetDetails.boundary.top + elementDetails.dim.height + targetDetails.dim.height) < boundaryDim.height);
    lrHorLeft = lrVerFlip((targetDetails.boundary.left - elementDetails.dim.width) < 0);
    lrHorRight = lrVerFlip((targetDetails.boundary.left + elementDetails.dim.width + targetDetails.dim.width) < boundaryDim.width);

  } else {
    top = horFlip(false);
    bottom = horFlip(true);
    lrHorLeft = lrVerFlip(false);
    lrHorRight = lrVerFlip(true);
  }

  const horCenter = targetDetails.pos.left - ((elementDetails.dim.width - targetDetails.dim.width) / 2);
  const verCenter = bottom - ((elementDetails.dim.height + targetDetails.dim.height) / 2);


  const position = {
    'bottom-left'  : {top: bottom, left : tbVerLeft},
    'bottom-center': {top: bottom, left : horCenter},
    'bottom-right' : {top: bottom, left : tbVerRight},

    'top-left'   : {top: top, left : tbVerLeft},
    'top-center' : {top: top, left : horCenter},
    'top-right'  : {top: top, left : tbVerRight},

    'left-top'    : {top: top, left      : lrHorLeft},
    'left-center' : {top: verCenter, left: lrHorLeft},
    'left-bottom' : {top: bottom, left   : lrHorLeft},

    'right-top'    : {top: top, left      : lrHorRight},
    'right-center' : {top: verCenter, left: lrHorRight},
    'right-bottom' : {top: bottom, left   : lrHorRight}
  };


  return function (prop) {
    return position[prop] || position['bottom-left'];
  };
};


export default {
  dim,
  pos,
  offset
};
