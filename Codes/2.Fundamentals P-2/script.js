//1. "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive :D");

// const interface = "Audio";
// const private = 534;

////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////

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
// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// };

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

// const yearOfRetirement = function (birthYear, name) {
//   const age = calAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${name} retires in ${retirement} year`);
//     return retirement;
//   } else {
//     console.log(`${name} has already retired 🎉`);
//     return -1;
//   }
// }; //In this case both return and console statements show their result

// console.log(yearOfRetirement(1999, "sapna"));
// console.log(yearOfRetirement(1950, "mike"));

/////////////////////////////////////////////////////////////////////////////////
//6. ARROWS
/*
// How to create arrows
const friends = ["Karan", "Sukh", "Irfan"];
console.log(friends);

const years = new Array(1999, 2000, 2022);
console.log(years);

console.log(friends[0]); //it will show 1st elements eg = karan
console.log(friends[2]); // irfan

// find the lenght of Arrows
console.log(friends.length); // lenght of array = 3
console.log(friends[friends.length - 1]); // irfan last element of array
console.log(friends[friends.length - 2]); // sukh secondlast element

// Replace from array
friends[1] = "Rohit";
console.log(friends);

// We can add strings, digits and values in array as following
const firstName = "sapna";
const myArray = [firstName, "saini", 10 - 5, "teacher", 23, friends];
console.log(myArray);
console.log(myArray.length);

// Exercise
const calAge = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1999, 1997, 1996, 2021];

const y1 = calAge(year[0]);
const y2 = calAge(year[1]);
const y3 = calAge(year[year.length - 1]);
console.log(y1, y2, y3);

const y = [calAge(year[0]), calAge(year[1]), calAge(year[year.length - 1])];
console.log(y);
/////

const friends = ["sapna", "rohit", "nanu"];

// Add elements
friends.push("lucky"); // add at end

friends.unshift("kanu"); // add at begining
console.log(friends);

// Remove elements
friends.pop(); // remove from end

friends.shift(); // remove from starting/first
console.log(friends);

// check index of elements
console.log(friends.indexOf("rohit")); // 1
console.log(friends.indexOf("menu")); // not present then get -1

// True and False values
console.log(friends.includes("sapna"));
console.log(friends.includes("Bob"));

// Example
if (friends.includes("sapna")) {
    console.log("You have a friend called sapna");
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////

//7. OBJECT
/* 
// const myArray = [
//   "Sapna",
//   "saini", // this is not a boject
//   10 - 5,
//   "teacher",
//   ["karan", "Rohit", "Nanu"],
// ];

const myArray = {
  // object
  firstName: "Sapna",
  LastName: "Saini",
  age: 1999 - 2022,
  job: "Developer",
  friends: ["karan", "Rohit", "Nanu"],
}; // here myArray is a objet where firstname, lastname,age etc is property and sapna,saini-- is values
console.log(myArray);

console.log(
  `${myArray.firstName} has ${myArray.friends.length} friends, and his best friend is called ${myArray.friends[1]}`
);

// with Dot(.)
console.log(myArray.LastName); //lastname

// with Brackets []
console.log(myArray["LastName"]);

// exercise
const interestedIn = prompt(
  "What do you want to know about sapna? Choose between firstname, lastname, age, job and friends"
);
// console.log(interestedIn); // it just gave property name not a values
// console.log(myArray.interestedIn); //it doesn't work becoz myarray doesn't have property interestedin..

console.log(myArray[interestedIn]); //it gave values

if (myArray[interestedIn]) {
  console.log(myArray[interestedIn]);
} else {
  console.log(
    "wrong request!,What do you want to know about sapna? Choose between firstname, lastname, age, job and friends"
  );
}
// add new property to object
myArray.location = "Pathankot";
myArray["Email-ID"] = "sapna98saini@gmail.com";
console.log(myArray);

// Object Method
const myArray = {
  firstName: "Sapna",
  LastName: "Saini",
  birthYear: 1999,
  job: "Developer",
  friends: ["karan", "Rohit", "Nanu"],
  hasDriversLicense: true,

  // calcAge: function(birthYear){
  //   return 2023 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this); // this function here used for calcage directly
  //   return 2022 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      myArray.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
// console.log(myArray.birthYear(1999));
// console.log(myArray["calcAge"](1999));

console.log(myArray.calcAge());

console.log(myArray.age);
console.log(myArray.age);
console.log(myArray.age);

console.log(myArray.getSummary());
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//8. For loop

// console.log(`lifting weights repetition 1 '🏋️‍♀️`)
// console.log(`lifting weights repetition 1 '🏋️‍♀️`)
// console.log(`lifting weights repetition 1 '🏋️‍♀️`)
// console.log(`lifting weights repetition 1 '🏋️‍♀️`)
// console.log(`lifting weights repetition 1 '🏋️‍♀️`)
// console.log(`lifting weights repetition 1 '🏋️‍♀️`)
// console.log(`lifting weights repetition 1 '🏋️‍♀️`)
// console.log(`lifting weights repetition 1 '🏋️‍♀️`)
// console.log(`lifting weights repetition 1 '🏋️‍♀️`)
// console.log(`lifting weights repetition 1 '🏋️‍♀️`)

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`lifting weights repetition ${rep} '🏋️‍♀️`);
// }

// Looping Arrays, Breaking and Continuing
/*
const jonas = [
  "Sapna",
  "saini",
  2022 - 1999,
  "develper",
  ["Rohit", "sapna", "nanu"],
  true,
];
const types = [];
// for (let i = 0; i < 5; i++) {
//   console.log(jonas[i]);
// } // it run upto 4times, becz i<5

for (let i = 0; i < jonas.length; i++) {
  // Reaading from joans array
  console.log(jonas[i], typeof jonas[i]); // it run till end means 5 times

  //Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const year = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < year.length; i++) {
  ages.push(2037 - year[i]);
}
console.log(ages);

// Continue and Break
console.log("----ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("----BREAK WITH NUMBERS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
*/
const jonas = [
  "Sapna",
  "saini",
  2022 - 1999,
  "develper",
  ["Rohit", "sapna", "nanu"],
];
// 4,3,2...,0
// upgreade the loops
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// loop inside loops
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifting weight repetition ${rep}`);
  }
}
