

const swap = (arr, a, b) => {
  return [arr[a], arr[b]] = [arr[b], arr[a]];
}





const select = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    var min = i;
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    console.log(min);
    console.log("i=", i);

    // if (min !== i) {

    [arr[min], arr[i]] = [arr[i], arr[min]]


    // }


  }


  return arr;

}


console.log(select([5, 3, 4, 7, 2, 1, -1, 0, 8]));
