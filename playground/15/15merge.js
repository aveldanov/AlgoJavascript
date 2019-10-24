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

  while (i < arr1.length && j < arr2.length) {

    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++

    }

  }
  console.log(i, j);

  while (i < arr1.length) {
    // console.log(i);

    results.push(arr1[i])
    i++;
  }
  while (j < arr2.length) {
    console.log(j);

    results.push(arr2[j]);
    j++;
  }


  return results;
}




console.log(merge([1, 10, 50, 59, 78, 110, 120], [2, 14, 130]));
