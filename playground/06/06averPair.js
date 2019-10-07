// const averagePair = (arr, target) => {


//   let i = 0;
//   for (let j = 0; j < arr.length; j++) {
//     console.log("j= ", j);
//     console.log("i= ", i);
//     console.log("arr[j]= ", arr[j]);


//     if (arr[j] > target) {
//       i++;
//       if ((arr[i] + arr[j]) / 2 == target) {
//         return true;
//       } else {
//         j = j - 1;
//         console.log("arr[i] ", arr[i]);

//         console.log("false skipped");

//       }
//     } else {
//       console.log("skipped j");
//     }
//     console.log('');

//   }


//   return false;

// }

const averagePair = (arr, target) => {

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    console.log();

    console.log("arr[start] ", arr[start]);
    console.log("arr[end] ", arr[end]);
    console.log("avg ", avg);


    if (avg === target) {
      return true;
    } else if (avg < target) {
      start++;
      console.log("new start ", start);

    } else {
      end--
    }
  }
  return false;

}






// i
// 1, 2, 3
// j


console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));


// console.log(averagePair([1, 2, 3], 2.5));


// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));