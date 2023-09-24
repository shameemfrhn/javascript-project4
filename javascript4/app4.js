//find index specific array ele

function findElementIndex(arr, element) {
    return arr.indexOf(element);
  }
  
  var fruits = ["apple", "banana", "cherry", "date"]; 
  var index = findElementIndex(fruits, "cherry"); 
  console.log("Index of 'cherry' in the array is: " + index);
  