// 1. reverse each word in the sentence
// reverse full line
// example:- input = welcome to home
//           output = emoh ot emoclew
// method:-1
// console.log("Method-1");

// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   console.log(newString);
// }
// reverseString("welcome to home ");

// method:-2
// console.log("Method-2");
// function Reverser(string) {
//   return string.split("").reverse().join("");
// }
// console.log(Reverser("New string, same results."));

// console.log("Method - 3");
// resverse the word only like- iutput:- sapna is here, output:- anpas si ereh
// function wordsReverser(string) {
//   return string.split("").reverse().join("").split(" ").reverse().join(" ");
// }
// console.log(wordsReverser("New string, same results."));

// Method = 4
// console.log("Mehthod-4");
// var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }
// console.log(reverseBySeparator());

/////////////////////////////////////////////////////////////////
/*


2.Explain what a callback function is and provide a simple example?
Ans- A callback function is a function that passes to another function as an argument and 
it is execute after some operation has been completed.
examples:-
*/

// function modifity(arr, callback) {
//   // do something to with arr
//   arr.push(100);
//   // then execute the callback function that was passed
//   callback();
// }
// var arr = [1, 2, 3, 4];
// modifity(arr, function () {
//   console.log("array has been modifity", arr);
// });
/////////////////////////////////////////////////////////////////////////////////
// Q3. How to check if an object is an array or not?
// Method - 1 (By checking is.Array Method)
// function checkObject(arr) {
// check if arr is array
//   const result = Array.isArray(arr);

//   if (result) {
//     console.log(`[${arr}] is an array.`);
//   } else {
//     console.log(`${arr} is not an array.`);
//   }
// }
// const array = [1, 2, 3];
// checkObject(array);
///////////////////////////////////////////////////////////
// var arrayList = [1, 2, 3];
// function greet(param) {
//   if (typeof param === "string") {
//   } else {
//     // If param is of type array then this block of code would execute
//   }
// }
// Method = 2 (Object.prototype.toString)
// var arrayList = [1, 2, 3];
// if (Object.prototype.toString.call(arrayList) === "[object Array]") {
//   console.log("Array!");
// }

// Method = 3 (By using jQuery then you can also used jQuery isArray method)
// if ($.isArray(arrayList)) {
//   console.log("Array");
// } else {
//   console.log("Not an array");
// }
//////////////////////////////////////////////////////////////////////////////
// Q4: How to empty an array in JavaScript?
var arrayList = ["a", "b", "c", "d", "e", "f"]; // Created array
var anotherArrayList = arrayList; // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arrayList); //Output []
////////////////////////////////////////////////////////////////////////////
var arrayList = ["a", "b", "c", "d", "e", "f"]; // Created array
var anotherArrayList = arrayList; // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
////////////////////////////////////////////////////////////////////////////
var arrayList = ["a", "b", "c", "d", "e", "f"]; // Created array
var anotherArrayList = arrayList; // Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
///////////////////////////////////////////////////////////////////////////////////
while (arrayList.length) {
  arrayList.pop();
}
///////////////////////////////////////////////////////////////////////////////////

// Q5: How would you check if a number is an integer?
// A very simply way to check if a number is a decimal or integer is to see if there is a remainder
// left when you divide by 1.
function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
