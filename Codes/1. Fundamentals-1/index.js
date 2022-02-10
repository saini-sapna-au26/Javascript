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
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("sapna"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log("I am" + 22 + "Year old");
// console.log("23" - "10" - "3");
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// Truthy and falsy values
// Falsy values = 0, undefined, '', NaN, null
// Truthy values = All values are truthy except falsy values.
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("sapna"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0; // js automatically convert falsy values into boolean.
// const money = 100;
if (money) {
  console.log("Don't Spend too much money.");
} else {
  console.log("get some job!!");
}

let height; // in this case we didn't defined height so it is falsy values
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is undefined!");
}
*/

// Equality Operators == vs ===
// === : comparison it is good because it teams as math
// == : it firstly converted into number then perform like '15' == 15 :- ans is true
// const age = 18;
// const age = "18";
// if (age === 18) console.log("you just became an audult :D (Strict)");

// if (age == 18) console.log("you just became an adult :D (loose)");

//prompt it gave values in browser
// const favourite = prompt("what's your favourite number ?"); //in firstly numbers convert into string and they result also gave result in string
// const favourite = Number(prompt("what's your favourite number ?")); // it conerted string into numbers
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   //22 === 23 -> False
//   console.log("cool! 23 is an amzaning number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool numbers");
// } else {
//   console.log("number is not 23 or 7");
// }
// if (favourite !== 23) console.log("why not 23");

// Basic Boolean logic :- add, or, not
// AND
// A         B         RESULT
// T         T           T
// T         F           F
// F         T           F
// F         F           F

// OR
// A          B          RESULT
// T          T           T
// T          F           T
// F          T           T
// F          F           F
// NOT, !     Inverts true/false values
// !A       RESULT
//  T          F
//  F          F

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("sapna is able to drive!");
// } else {
//   console.log("someone else should drive...");
// }

// const isTired = false; //c
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("sapna is able to drive!");
// } else {
//   console.log("someone else should drive...");
// }

// switch Statements

// const day = "Monday";
// switch (day) {
//   case "Monday":
//     console.log("1st day of week");
//     console.log("working day-1");
//     break;
//   case "Tuesday":
//     console.log("2nd day of week");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("3rd and 4th day of week");
//     break;
//   case "Friday":
//     console.log("5th and last day of working");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("This is a last and weekend days");
//     break;
//   default:
//     console.log("Not a valid day!..");
// }

// if (day === "Monday") {
//   console.log("1st day of week");
//   console.log("working day-1");
// } else if (day === "Tuesday") {
//   console.log("2nd day of week");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("3rd and 4th day of week");
// } else if (day === "Friday") {
//   console.log("5th and last day of working");
// } else if (day === "Saturday" || day === "Sunday") {
//   console.log("This is a last and weekend days");
// } else {
//   console.log("Not a valid day");
// }

// Conditional or Ternary Opeartaors

const age = 15;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💦 ");

const drink = age >= 18 ? "wine 🍷" : "water 💦";
console.log(drink); // This is easy way to ringh code in coditioanl opeartors

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💦";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💦"}`);
