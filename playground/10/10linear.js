// const linear = (arr, num) => {
//   for (let item of arr) {

//     // console.log(arr.includes(num));


//     // console.log(item);
//     if (item == num) {
//       console.log(arr.indexOf(item));
//     } else if (!arr.includes(num)) {
//       return console.log(-1);

//     }



//   }


// }



const linear = (arr, num) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;

  }

  return -1;
}




console.log(linear([10, 15, 20, 25, 30], 145));
