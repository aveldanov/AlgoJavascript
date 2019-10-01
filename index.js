

const addUpTo = (n) => {
  let result = 0;
  for (i = 1; i <= n; i++) {
    result = result + 1;
  }
  return result;
}



// const addUpTo = (n) => {
//   return n * (n + 1) / 2;
// }

let t1 = performance.now();

addUpTo(100000000);
let t2 = performance.now();

// console.log(addUpTo(6));

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

