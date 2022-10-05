//jshint esversion:6
const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const arr = _.flattenDeep(items);
console.log(items);
console.log(arr);
