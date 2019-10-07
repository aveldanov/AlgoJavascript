const nestedEvenSum = (obj, sum = 0) => {


  // console.log(Object.keys(obj).length);
  // console.log(Object.keys(obj));

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum = sum + nestedEvenSum(obj[key])
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum = sum + obj[key]
    }

  }


  return sum;

}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}


console.log(nestedEvenSum(obj1));
