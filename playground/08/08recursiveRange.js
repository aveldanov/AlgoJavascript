const recursiveRange = (num) => {

  if (num === 1) return 1;

  return num + recursiveRange(num - 1);



}



console.log(recursiveRange(6));

// 1+2+3+4+5+6