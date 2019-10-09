// const binary = (arr, num) => {

//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     console.log("START");
//     let mid = Math.floor((start + end) / 2);
//     console.log("mid= ", mid);
//     console.log("arr[mid] start ", arr[mid]);


//     if (arr[mid] === num) {
//       console.log("arr[mid]1", arr[mid]);

//       return mid;
//     } else if (arr[mid] < num) {
//       console.log("arr[mid]2", arr[mid]);

//       start = mid + 1; //4
//     } else {
//       console.log("arr[mid]3", arr[mid]);

//       end = mid - 1;
//     }


//   } return -1;

// }


const binary = (arr, num) => {

  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== num && (start <= end)) {
    if (num < arr[mid]) {
      end = mid - 1;

    }
    else if (num > arr[mid]) {
      start = mid + 1
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === num) {
    return mid;

  } else {
    return -1;
  }

}


console.log(binary([1, 2, 3, 4, 5, 6, 7, 8], 70));
