//rem dupli
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  var numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5]; 
  var uniqueNumbers = removeDuplicates(numbersWithDuplicates);
  console.log("Array after removing duplicates: " + uniqueNumbers);
  