'use strict';
import R from 'ramda';

export default (ary) => R.uniq(R.flatten(ary.map((item, index) => Object.keys(item).map(k => k.toLocaleLowerCase()))));
