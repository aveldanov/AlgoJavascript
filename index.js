

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const newArr = arr.unshift(4);

let t1 = performance.now();

console.log(arr);

let t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1} seconds`);




