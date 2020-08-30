function reverseNum (number){
  var string = number.toString();
  var split = string.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  var final = parseInt(join);
  
  if(number < 0){
  console.log(final -1)
  return final -1;
  }
  console.log(final)
  return final
  
  }
  
  reverseNum(-1234)