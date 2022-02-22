// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 38,
  neighbour: ["pakistan", "china", "nepal"],

  describe: function () {
    // console.log(
    //   `${this.country}, has ${this.population} million ${this.language}-speaking people, ${this.neighbour.length} neighbour countries and a capital called ${this.capital}. `
    // );

    return `${this.country}, has ${this.population} million ${this.language}-speaking people, ${this.neighbour.length} neighbour countries and a capital called ${this.capital}. `;
  },

  checkIsland: function () {
    // console.log((this.isIsland = this.neighbour.length === 0 ? true : false));
    return (this.isIsland = this.neighbour.length === 0 ? true : false);
  },
};
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// myCountry.checkIsland();
