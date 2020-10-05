const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = backyard.reduce( (result,item) => result.concat(item),[]);
  let count = 0;
  cats.forEach((item => {if(item == "^^"){count += 1}}))
  return count;
};
