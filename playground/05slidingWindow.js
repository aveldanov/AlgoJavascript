// const maxSubarraySum = (arr, num) => {

//   if (num > arr.length) {
//     return null;
//   }


//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp = temp + arr[i + j];
//       console.log(i, j);

//       console.log("sum= ", temp);
//       console.log('');
//     }

//     if (temp > max) {
//       max = temp;
//     }

//   }
//   return max;
// }


const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i]
    // console.log(maxSum);

  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {

    console.log("tempSum1 ", tempSum);


    tempSum = tempSum - arr[i - num] + arr[i];
    console.log("temp Sum ", tempSum);
    console.log("arr[i-num] ", arr[i - num]);
    console.log("arr[i]", arr[i]);

    console.log("");



    maxSum = Math.max(maxSum, tempSum);

  }

  return maxSum;

}





console.log(maxSubarraySum([1, 4, 5, 2, 8, 1, 5], 2));
