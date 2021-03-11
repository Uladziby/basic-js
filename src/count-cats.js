const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  this.matrix = matrix;
  let countCat = 0;
  let i;
  let j;
  for(i=0; i< matrix.length; i++){
    for(j=0; j<matrix[i].length;j++){
      if (matrix[i][j]==='^^'){
        countCat++;
      }
    }
  }
  return countCat;
  // remove line with error and write your code here
};
