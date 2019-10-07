const capitalizeWords = (arr, newArr = []) => {

  let word = '';
  if (arr.length === 0) return newArr;

  for (let char in arr[0]) {

    word = word.concat(arr[0][char].toUpperCase());

  }
  // newArr = newArr.push(capitalizeWords(arr.slice(1)))
  newArr.push(word);
  console.log(newArr);

  // console.log(word);
  newArr = newArr.concat(capitalizeWords(arr.slice(1)));

  return newArr;
}


let words = ['iz', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));
const stringifyNumbers = (object) => {


  console.log(object);



}


let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(stringifyNumbers(obj));
