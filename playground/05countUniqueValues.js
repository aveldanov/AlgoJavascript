const countUniqueValue = (arr) => {
  var i = 0;

  if (arr.length === 0) {
    return 0
  }


  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
    console.log(i, j);

  }
  return arr[0, i];
}


// console.log(countUniqueValue([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));
console.log(countUniqueValue([]));
