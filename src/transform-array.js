const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if ( !Array.isArray(arr) ){throw new CustomError('Not implemented');}
  
  let resultArray = [];

  for(let i = 0; i < arr.length; i++){
    switch (arr[i]){
      case "--discard-next":  /*исключает следующий элемент массива из преобразованного массива.*/
        i++;
      break;
      case "--discard-prev":  /*исключает предыдущий элемент массива из преобразованного массива.*/
        if (resultArray.length !== 0 && arr[i - 2] !== '--discard-next') resultArray.pop()
      break;
      case "--double-next":   /*удваивает следующий элемент массива в преобразованном массиве.*/
      if (i < arr.length - 1) resultArray.push(arr[i + 1]);
      break;
      case "--double-prev":   /*удваивает предыдущий элемент массива в преобразованном массиве.*/
      if (i !== 0 && arr[i - 2] !== '--discard-next') resultArray.push(arr[i - 1]);
      break;
      default:
        resultArray.push(arr[i])
      break;
    }
  }
  return resultArray;
};
