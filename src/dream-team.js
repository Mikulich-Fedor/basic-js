const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
      let name = [];
        for (let i of members ){
            if(typeof(i)===typeof("")){
            name.push(i);
        }else{
          false
        }
    } 
    let leter = name.reduce((mem,item) => mem += item.substring(0,1).toUpperCase() ,"");
    let leterName = leter.split("").sort().join("")
    return leterName;
  }else{
    return false;
  } 
  }
