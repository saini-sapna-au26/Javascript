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
