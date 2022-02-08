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
const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}!.`;
console.log(description2);
