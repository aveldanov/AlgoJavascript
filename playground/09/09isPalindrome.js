// const isPalindrome = (str) => {

//   let reversed = '';

//   for (char in str) {

//     reversed = str[char] + reversed;

//   }

//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }


// }




const isPalindrome = (str) => {

  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  console.log(str.slice(1, -1));



  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}










console.log(isPalindrome('tacocat'));
