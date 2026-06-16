function dashEvenNumbers(input) {
  let str = input.toString();
  let result = '';

  for(let i = 0; i < str.length; i++){
    if( str[i] % 2 === 0){
        result += '-' + str[i];
    } else {
        result += str[i];
    }
  }
  return result;
}

console.log(dashEvenNumbers(23456));
