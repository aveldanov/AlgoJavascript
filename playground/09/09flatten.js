const flatten = (arr) => {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (Array.isArray(arr[i])) {
      console.log("concat");

      newArr = newArr.concat(flatten(arr[i]));
      console.log(newArr);

    } else {
      console.log("push");

      newArr.push(arr[i]);
      console.log(newArr);

    }
    console.log();


  }
  console.log([6, 7, 8].concat([9, 3]));

  return newArr;


}



console.log(flatten([1, 2, 3, [4, 5]]));
