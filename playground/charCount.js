
const charCount = (str) => {

  var result = {}

  for (i = 0; i < str.length; i++) {
    console.log(str[i]);

    (result[str[i]]) ?
      result[str[i]]++
      :
      result[str[i]] = 1;


    console.log(result);


  }




}


console.log(charCount("Hellohhh"));
