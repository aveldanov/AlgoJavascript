const sameFrequency = (num1, num2) => {
  let lookup = {};
  let numStr1 = num1.toString().split('');
  let numStr2 = num2.toString().split('');

  if (numStr1.length !== numStr2.length) {
    return false;
  }



  console.log(numStr1);

  for (let item in numStr1) {

    lookup[numStr1[item]] ? lookup[numStr1[item]] += 1 : lookup[numStr1[item]] = 1;

  }
  console.log(lookup);

  for (let item in numStr2) {

    if (!lookup[numStr2[item]]) {
      return false;
    } else {

      lookup[numStr2[item]] -= 1;
    }

  }

  return true;

}




console.log(sameFrequency(1823, 2812));
