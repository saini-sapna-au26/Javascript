function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("Welcome to javaScript Guide")); // return left part into right and right into left
//output = ediuG tpircSavaj ot emocleW
/////////////////////////////////////////////////////////////////
console.log("------------------------------------------");
function revString(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(revString("Welcome to javaScript Guide"));
//////////////////////////////////////////////////////////////////////////////////////
