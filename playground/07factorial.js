const factorial = (num) => {

  if (num === 1) {
    console.log("all done");

    return 1;
  }




  return num * factorial(num - 1);


}


console.log(factorial(5));
