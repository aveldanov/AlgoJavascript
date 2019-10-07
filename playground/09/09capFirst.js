// const capitalizeFirst = (arr) => {

//   let newArr = []

//   const helper = (arr) => {

//     console.log("init arr ", arr);
//     console.log("new arr ", newArr);

//     if (arr.length === 0) return newArr;

//     console.log(arr[0].slice(1, arr[0].length));

//     newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1, arr[0].length));

//     console.log(newArr);
//     console.log("sliced", arr.slice(1));

//     helper(arr.slice(1));

//   }

//   helper(arr);
//   return newArr;


// }


//PURE RECURSION

const capitalizeFirst = (arr) => {

  let newArr = []



  console.log("init arr ", arr);
  console.log("new arr ", newArr);

  if (arr.length === 0) return newArr;

  console.log(arr[0].slice(1, arr[0].length));

  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1, arr[0].length));

  console.log(newArr);
  console.log("sliced", arr.slice(1));

  // helper(arr.slice(1));
  newArr = newArr.concat(capitalizeFirst(arr.slice(1)))



  return newArr;


}







console.log(capitalizeFirst(['car', 'taco', 'banana', 'john']));
