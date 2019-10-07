const findLongestSubstring = (str) => {

  let longest = 0;
  let seen = {};

  let start = 0;


  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log("char", char);
    console.log("seen[char] ", seen[char]);

    if (seen[char]) {
      console.log("yes");

      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;

    console.log("char", char);
    console.log("seen[char] ", seen[char]);


    console.log();

  }
  return longest;

}
console.log(findLongestSubstring("thisisawesome"));
