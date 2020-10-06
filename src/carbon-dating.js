const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(+sampleActivity == Number){
    let MODERN_ACTIVITY = 15;
    let HALF_LIFE_PERIOD = 5700;
    let number = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/(0.693/HALF_LIFE_PERIOD));
    return number;
  }else{
    return false;
  }
};
