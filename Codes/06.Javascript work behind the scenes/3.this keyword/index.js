"use strict";
/*

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge;

const f = jonas.calcAge;
f();
*/

//regular function and arrow function
const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    //   console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);

      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();
