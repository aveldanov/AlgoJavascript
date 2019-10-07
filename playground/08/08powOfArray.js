const productOfArray = (arr) => {

  let result = 1;

  const helper = (arr) => {
    if (arr.length === 0) return;
    result = result * arr[0];
    // console.log(arr[0]);

    //  console.log(arr.slice(1));
    // console.log("result", result);
    return result * helper(arr.slice(1))

  }
  helper(arr)

  return result;


}


console.log(productOfArray([1, 2, 3, 10]));
