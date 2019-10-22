// const selectSort = (arr) => {
//   for (let i = 0; i <= arr.length; i++) {
//     var min = i;
//     for (let j = i + 1; j <= arr.length; j++) {

//       console.log(i, j);
//       console.log(i, min);

//       if (arr[j] < arr[min]) {
//         min = j;
//       }

//       console.log(arr);
//       console.log();

//       // console.log(arr);
//     }
//     if (i !== min) {

//       [arr[i], arr[min]] = [arr[min], arr[i]]


//     }


//   }
//   return arr;

// }


const swap = (arr, a, b) => {
  return [arr[a], arr[b]] = [arr[b], arr[a]];
}


const selectSort = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    var min = i;
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }


    if (i !== min) {
      swap(arr, i, min);


    }


  }
  return arr;

}




console.log(selectSort([5, 3, 4, 7, 2, 1, -1, 0, 8]));
