const reverseStr = (str) => {

  if (str.length <= 1) return str;
  console.log("str = ", str);

  console.log("slice = ", str.slice(1));
  console.log("first char = ", str[0]);
  console.log("here: ", str.slice(1) + str[0]);




  console.log("LINE ", reverseStr(str.slice(1)) + str[0]);
  console.log();

  return reverseStr(str.slice(1)) + str[0];

}
// 1 we a   2 e w   3 


console.log(reverseStr('abcd'));
