// const stringSearch = (str, check) => {
//   let j = 0;
//   let match = 0
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < check.length; j++) {
//       if (str[i] !== check[j]) {
//         break;
//       } else {
//         match++;
//         continue;
//       }

//     }


//   }

//   return match;

// }

const stringSearch = (str, check) => {
  var count = 0;
  for (var i = 0; i < str.length; i++) {

    for (var j = 0; j < check.length; j++) {
      console.log(check[j], str[[i + j]]);
      if (check[j] !== str[i + j]) {
        console.log("BREAK");

        break;

      }
      if (j === check.length - 1) {
        count++;
      }

    }

  }
  return count;
}





console.log(stringSearch("abcde", "cd"));
