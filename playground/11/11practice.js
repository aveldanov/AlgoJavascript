
const bubble = (arr) => {


  for (var i = arr.length; i > 0; i--) {
    var noSwap = true;

    console.log(i);
    for (var j = 0; j < arr.length - 1; j++) {

      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        [[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]]
      }


    }
    if (noSwap) break;

  }
  return arr;


}

console.log(bubble([8, 1, 2, 3, 4, 5, 6, 7]));
