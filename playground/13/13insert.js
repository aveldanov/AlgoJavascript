const insert = (arr) => {

  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];


    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(i, j);
      console.log("currentVal", currentVal);
      console.log("arr[j]", arr[j]);

      arr[j + 1] = arr[j]
      console.log(arr);

    }
    arr[j + 1] = currentVal;

  }
  return arr;

}
console.log(insert([2, 1, 9, 76, 4]));
