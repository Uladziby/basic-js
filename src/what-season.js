const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if (!date) return "Unable to determine the time of year!";
if (!date.getTime()) return "Error";
const str = date.getMonth()
if (str === 11 || str === 0 || str === 1) {
  return "winter";
  } else if ((str >= 2 && str <= 4)) {
    return "spring";
  } else if ((str >= 5 && str <= 7)) {
    return "summer";
  } else if ((str >= 8 && str <= 10)) {
    return "autumn";
} else throw "Error";

}
