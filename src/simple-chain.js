const CustomError = require("../extensions/custom-error");

const chainMaker = {
  makeChain: [],

  getLength() {
    return this.makeChain.length;
  },

  addLink(value) {
    this.makeChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position < 0){
      this.makeChain = [];
      throw new Error();
    }else {
      this.makeChain = this.makeChain.filter((elem,index) => index !== (position-1));
      return this ;
    }
  },
  reverseChain() {
    this.makeChain = this.makeChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.makeChain.join("~~")
    this.makeChain = [];
    return result;
  }
};

module.exports = chainMaker;
