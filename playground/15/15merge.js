// const merge = (arr1, arr2) => {


//   var arr = [];

//   var minimal = Math.min(arr1.length, arr2.length);
//   i = 0;
//   j = 0;
//   while (i < minimal || j < minimal) {

//     if (arr1[i] < arr2[j]) {

//       arr.push(arr1[i])
//       i++;
//     } else {
//       arr.push(arr2[j]);
//       j++;
//     }


//   }

//   arr.push()



//   return arr;

// }
const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr.arr2.length) {
    if (arr2[j] > arr[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++

    }

  }

  return results;
}




console.log(merge([1, 10, 50, 59, 78, 110, 120], [2, 14, 99, 100, 103]));
