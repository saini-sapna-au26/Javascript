"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2000) {
      var millenial = true;
      // creating new varibale with same name as outer scope's varibale
      const firstName = "pulkit";

      // reassigning outer scope's variable
      const output = "NEW OUTPUT";

      const str = `oh, and ypu're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3)); // it gave reult if we are not using strict
    console.log(output);
  }
  //   console.log(firstName);

  printAge();

  return age;
}

const firstName = "Sapna";
calcAge(1999);
// console.log(age);
