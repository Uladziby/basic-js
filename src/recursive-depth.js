const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deep = 1;

    for (let i of arr) {
      let deep1=1;
      if (Array.isArray(i)) {
        deep=deep+this.calculateDepth(i)  
        if (deep1 > deep) {
          deep = deep1;
        }   
        }
      }
      return deep
    
  }}