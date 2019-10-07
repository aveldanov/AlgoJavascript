const fib = (num) => {

  if (num <= 2) return 1;


  return fib(num - 1) + fib(num - 2)

  // 13 = 8 + 5 = 

  // fib(6)=fib(5)+fib(4)



  // 0 1
  // 1 1
  // 2 2
  // 3 3
  // 4 5
  // 5 8
  // 6 13



}


console.log(fib(10));
