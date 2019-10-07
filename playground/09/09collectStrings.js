const collectStrings = (obj) => {

  let newArr = [];


  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      newArr = newArr.concat(collectStrings(obj[key]));

    } else if (typeof obj[key] === 'string' && !Array.isArray(obj[key])) {

      newArr.push(obj[key]);
    } else {

      newArr.push(obj[key]);
    }


  }
  return newArr;

}
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}


console.log(collectStrings(obj));
