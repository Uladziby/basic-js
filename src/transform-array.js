const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr ) {
if (!Array.isArray(arr)) throw new Error ('Error');
if (arr.length == 0) return [];
let transformArr = [];

for (i=0; i<arr.length;i++){
  if (typeof arr[i] == 'string'){
  switch (arr[i]) {
    
    case undefined:
      break;
    case `--discard-next`:
      i++;
      break;
    case `--discard-prev`:
      if (i == 0) break;
      transformArr.pop()
      break;
    case `--double-next`:
      transformArr.push(arr[i+1])
      
      break;
    case `--double-prev`:
      if (i == 0) break;
      transformArr.push(arr[i-1])
      break;
}}else transformArr.push(arr[i])

}
  return transformArr;
}
