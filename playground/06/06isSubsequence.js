const isSubsequent = (str1, str2) => {

  // console.log(str1[1]);

  let i = 0;

  for (let j = 0; j < str2.length; j++) {

    if (str1[i] == str2[j]) {
      i++;
    }
    console.log(i);


  }

  if (i === str1.length) {
    return true;
  } else {
    return false;
  }
}



// console.log(isSubsequent("hello", "hello world"));
// console.log(isSubsequent("sing", "sting"));
console.log(isSubsequent("abc", "acb"));
