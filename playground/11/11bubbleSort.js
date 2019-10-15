// const sortArr = (arr) => {

//   return arr.sort((a, b) => {
//     return a - b
//   })


// }


// const sortArr = (arr) => {
//   let temp = null;

//   let newArr = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       temp = arr[i]; //5
//       arr[i] = arr[i + 1] //3
//       arr[i + 1] = temp;
//     } else if (i === arr.length - 1) {
//       newArr.push(arr[i]);
//       // arr.pop();
//       i = 0;
//     }
//   }
//   return newArr;

// }






// const sortArr = (arr) => {
//   let temp = [];

//   for (let i = arr.length; i > 0; i--) {

//     console.log("i= ", i);
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);

//       console.log("j= ", j);

//       if (arr[j] > arr[j + 1]) {
//         // temp = arr[j + 1];
//         // arr[j + 1] = arr[j];
//         // arr[j] = temp;
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

//       }
//     }
//   }
//   return arr;
// }


const sortArr = (arr) => {
  let temp = [];
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;

    // console.log("i= ", i);
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);

      // console.log("j= ", j);

      if (arr[j] > arr[j + 1]) {
        // temp = arr[j + 1];
        // arr[j + 1] = arr[j];
        // arr[j] = temp;
        noSwap = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

      }
    }
    if (noSwap) break;
  }
  return arr;
}





console.log(sortArr([8, 1, 2, 3, 4, 5, 6, 7]));
