const same = (arr1, arr2) => {

  let sqArr1 = [];



  arr1.forEach((item) => {
    sqArr1.push(item * item);

    // console.log(sqArr1);

  })
  // for (x in arr1) {
  //   // console.log(arr1[x] * arr1[x]);
  //   sqArr1.push(arr1[x] * arr1[x]);
  //   sqArr1.sort()
  // }
  // console.log(sqArr1);
  // console.log(arr2.sort());

  if (sqArr1.sort() === arr2.sort()) {
    console.log(sqArr1.sort());
    console.log(arr2.sort());
    return true;
  } else {
    console.log(sqArr1.sort());
    console.log(arr2.sort());
    return false;

  }


}


console.log(same([1, 2, 3], [4, 1, 9]));
