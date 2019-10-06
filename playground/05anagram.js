// const validAnagram = (first, second) => {
//   let freqCount1 = {};
//   let freqCount2 = {};
//   let result = null;
//   if (first.length !== second.length) {
//     return false;
//   }


//   for (let item of first.split('').sort().join('')) {

//     freqCount1[item] = freqCount1[item] ? freqCount1[item] + 1 : 1;


//   }
//   // console.log(freqCount1);


//   for (let item of second.split('').sort().join('')) {

//     freqCount2[item] = freqCount2[item] ? freqCount2[item] + 1 : 1;
//   }
//   // console.log(freqCount2);

//   for (let item in freqCount1) {
//     // console.log(item);
//     // console.log(freqCount1[item]);
//     if (freqCount1[item] === freqCount2[item]) {
//       result = true;
//     } else {
//       result = false;
//     }

//   }

//   return result;


// }


const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};


  for (let item in str1) {
    let letter = str1[item];
    console.log(str1[item]);
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;


  }
  for (let item in str2) {
    let letter = str2[item];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }

  }
  return true;
}






console.log(validAnagram('qqwertyyz', 'ytqrewqyy'));
