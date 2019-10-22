
const binary = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2)

  while (arr[mid] !== num && (start <= end)) {
    if (arr[mid] > num) {
      end = mid - 1;
    }
    else if (arr[mid] < num) {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2)

  }

  if (arr[mid] === num) {

    return mid;
  } else {
    return - 1;
  }



}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8], 7));