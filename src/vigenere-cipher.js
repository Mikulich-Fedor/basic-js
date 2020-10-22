const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct){
    this.direct = !direct;
  }


  encrypt(message, key) {
    if(!message || !key) return new Error();

  }    
  decrypt(message,key) {
    if(!message || !key){
      return new Error();
    }else{

    }
  }
}

module.exports = VigenereCipheringMachine;
