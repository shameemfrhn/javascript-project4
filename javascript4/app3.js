//check arrya 

function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  var emptyArray = [];
  var nonEmptyArray = [1, 2, 3];
  
  console.log("Is the emptyArray empty? " + isArrayEmpty(emptyArray));
  console.log("Is the nonEmptyArray empty? " + isArrayEmpty(nonEmptyArray));
  