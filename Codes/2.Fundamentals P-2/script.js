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
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(1999);

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1997);

// console.log(age1, age2);

//4. ARROW FUNCTION
// const calAge3 = (birthyear) => 2022 - birthyear;
// const age3 = calAge3(1999);
// console.log(age3);

// const yearOfRetirement = (birthyear, name) => {
//   const age = 2022 - birthyear;
//   const retirement = 65 - age;
// return retirement;
//   return `${name} is retires in ${retirement} year`;
// };

// console.log(yearOfRetirement(1999, "sapna"));

//5. Function calling other functions

// function cutFruits(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruits(apples);
//   const orangesPieces = cutFruits(oranges);

//   const juice = `juice with ${applePieces} piece of apple and ${orangesPieces} piece of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// Functions ==>
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

// const yearOfRetirement = function (birthYear, name) {
//   const age = calAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//     console.log(`${name} retires in ${retirement} year`);
//   } else {
//     return -1;
//     console.log(`${name} has already retired 🎉`);
//   }
// };   //In this case only return statements showing their result because console.log is after the return statements

const yearOfRetirement = function (birthYear, name) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${name} retires in ${retirement} year`);
    return retirement;
  } else {
    console.log(`${name} has already retired 🎉`);
    return -1;
  }
}; //In this case both return and console statements show their result

console.log(yearOfRetirement(1999, "sapna"));
console.log(yearOfRetirement(1950, "mike"));
