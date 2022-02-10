// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

let population = 13000;
let country = "India";
let continent = "Asia";
let language = "Hindi";
console.log(population / 2);

population++;
console.log(population);
console.log(population > 600);
console.log(population < 33);

const description1 =
  country +
  " " +
  "is in " +
  " " +
  continent +
  " " +
  "and its " +
  " " +
  population +
  " " +
  "million people speak" +
  " " +
  language;
console.log(description1);

// String Assignment
// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}!.`;
console.log(description2);
