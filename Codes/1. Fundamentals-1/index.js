// link javascript file
/*
// let((js = "Amazing"));
console.log(20 + 12 + 98 - 55);

//1. Define variable and values

let fistName = "sapna";
let LastName = "saini";
console.log(fistName, LastName);

// 2. Data types

// => String
let Name = "sapna";
console.log(Name);
console.log(typeof Name);

// => Number
let age = 23;
console.log(age);
console.log(typeof age);

// => Boolean
let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof jsIsFun);

// In undefined and in null we can define empty values
// => undefined
let year;
console.log(year);
console.log(typeof year);
// we can also define variables with same values
year = 1999;
console.log(year);

// => null
console.log(typeof null);
*/

/*
let age = 23;
age = 22;
// let age = 20;      error
// let x;               no error

const age1 = 23;
// age1 = 22;  (if i declares same values to variables in const it gave error but not in let case
// in let we can assign same values to variables)
// const ag        error
// const age1 = 20;   Error

var s = 23;
s = 22;
// var s = 20;      no error
// var y;               no error 
*/

/*
// Maths operators
const now = 2031;
const ageS = now - 1999;
const ageP = now - 2020;
console.log(ageS, ageP);

console.log(ageS * 2, ageS / 10, 2 ** 3);

const fisrtname = "Sapna";
const LastName = "saini";
console.log(fisrtname + " " + LastName);

// Assignment Operatos
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 99
x--;
console.log(x);

// comparsion Opeartors
console.log(ageS > ageP); // >,<,>=,<=
console.log(ageP >= 18);

console.log(now - 1999 > now - 2020);


const now = 2031;
const ageS = now - 1999;
const ageP = now - 2020;

console.log(now - 1999 > now - 2020);

let x, y;
x = y = 5 + 10 - 5;
console.log(x, y);

// Average
const Average = (ageS + ageP) / 2;
console.log(Average);
*/

// String
/*
const fistName = "Sapna";
const job = "Software Developer";
const birthYear = 1999;
const cunnentYear = 2022;
const sapna =
  "I'm " +
  fistName +
  ", a " +
  (cunnentYear - birthYear) +
  " Year old " +
  job +
  " !.";
const sapnaNew = `I'm ${fistName}, a ${
  cunnentYear - birthYear
} year old ${job} !`;
console.log(sapnaNew);
console.log(sapna);

console.log("string with \n\
multiple \n\
lines"); //for next line we use \n\

console.log(`string
multiples            
lines `); // for next line ``
*/

// If Else Statement
// const age = 16;

// if (age >= 18) {
//   console.log("sapna is ready to drive!.🚗");
// } else {
//   const yearLeft = 18 - age;
//   console.log(`sapna is too young, wait for ${yearLeft} year!.`);
// }

// const birthYear = 1999;
// let century;
// if (birthYear >= 2001) {
//   century = 20;
// } else {
//   century = 19;
// }
// console.log(century);

// conerter's
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("sapna"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am" + 22 + "Year old");
console.log("23" - "10" - "3");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
