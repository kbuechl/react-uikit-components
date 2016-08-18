'use strict';
import { unique } from 'ufunc'

export default (arr) => {
  const objKeysList = arr.map(obj => Object.keys(obj))[0];

  return  unique(objKeysList);
};
