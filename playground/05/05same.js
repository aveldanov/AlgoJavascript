const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {



    let freqCount1 = {}
    let freqCount2 = {}
    for (let item of arr1) {
      // console.log(item);
      // console.log(arr1[item]);
      console.log(freqCount1[item]);

      (freqCount1[item]) = (freqCount1[item]) ? freqCount1[item] + 1 : 1;

    }
    console.log(freqCount1);



  }






}


console.log(same([4, 5, 6, 6], [4, 1, 9, 9]));
