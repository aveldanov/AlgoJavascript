const areThereDuplicates = (...arr) => {



  let lookup = {}


  for (let item in arr) {
    console.log(arr[item]);

    lookup[arr[item]] ? lookup[arr[item]] += 1 : lookup[arr[item]] = 1;

  }
  console.log();

  for (let key in lookup) {

    console.log(lookup[key]);
    if (lookup[key] > 1) {
      return true;
    }
  }



  return false;


}




console.log(areThereDuplicates(1, 5, 7, 1));
