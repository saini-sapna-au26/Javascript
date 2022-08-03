// 1. reverse a string
// example:- input = welcome to home
//           output = emoh ot emoclew
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
  //   return newString;
}
reverseString("welcome to home ");
