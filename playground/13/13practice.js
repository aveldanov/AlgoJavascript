const insert = (arr) => {
  console.log(arr);
  console.log();


  for (let i = 1; i < arr.length; i++) {
    var currentValue = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {

      console.log(i, j, currentValue);
      // console.log("arr[j]= ", arr[j]);
      // console.log("> CurVal= ", currentValue);


      arr[j + 1] = arr[j];
      console.log(arr);


    }

    arr[j + 1] = currentValue;
    console.log(arr);
    console.log();

  }

  return arr;

}



console.log(insert([5, 3, 4, 1, 7, 2, -1, 0, 8]));
