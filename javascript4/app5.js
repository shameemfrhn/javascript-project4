//sort array

function sortAscending(arr) {
    return arr.slice().sort(function(a, b) {
      return a - b;
    });
  }
  
  var unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]; 
  var sortedNumbers = sortAscending(unsortedNumbers);
  console.log("Array sorted in ascending order: " + sortedNumbers);
  