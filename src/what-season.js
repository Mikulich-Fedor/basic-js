const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let month;
  if(typeof(date) == 'undefined'){
    return 'Unable to determine the time of year!'
  };
  if(typeof(date) !== 'object'){ 
    return Error;
  }else{
    month = date.getMonth()
  };
  
  
  if(typeof(month) === 'number'){
    
      if((month == 11) || (month == 0) || (month == 1)){
          return "winter";
      }
      if((month == 2) || (month == 3) || (month == 4)){
          return "spring";
      };
      if((month == 5) || (month == 6) || (month == 7)){
          return "summer";
      }
      if((month == 8) || (month == 9) || (month == 10)){
          return "autumn"; ;
      }

  }else{
    return Error 
  }
};
