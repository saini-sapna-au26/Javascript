//1. "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive :D");

// const interface = "Audio";
// const private = 534;

// 2. FUNCTION

// function logger() {
//   console.log("My name is Sapna");
// }
// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// fruitProcessor(3, 2);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangesJuice = fruitProcessor(2, 3);
// console.log(orangesJuice);

// 3.Function Declaration vs Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(1999);

// Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1997);

console.log(age1, age2);
