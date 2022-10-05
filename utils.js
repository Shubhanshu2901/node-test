//jshint esversion:6
const names = require('./names');
const saycheck = (name) => {
  console.log(`${name} check`);
};
saycheck(names.john);
saycheck(names.peter);
module.exports = saycheck;
