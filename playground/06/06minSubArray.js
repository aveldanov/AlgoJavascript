
const minSubArrayLen = (arr, num) => {

  let total = 0;
  let start = 0;
  let end = 0;

  let minLen = Infinity;

  while (start < arr.length) {

    console.log("total= ", total);
    console.log("minLen= ", minLen);
    console.log("start = ", start);
    console.log("end= ", end);


    console.log("arr[start]= ", arr[start]);
    console.log("arr[end]= ", arr[end]);


    console.log();



    if (total < num && end < arr.length) {
      total = total + arr[end];
      end++;

    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total = total - arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
