const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let {
    repeatTimes,
    separator = "+",
    addition = '',
    additionRepeatTimes,
    additionSeparator = "|"
    } = options;
  let addString = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  return new Array(repeatTimes).fill(String(str) + addString).join(separator);
};
  