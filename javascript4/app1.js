//array sum
function sumArrayElements(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  var numbers = [5, 10, 15, 20]; 
  var totalSum = sumArrayElements(numbers);
  console.log("The sum of all elements in the array is: " + totalSum);
  