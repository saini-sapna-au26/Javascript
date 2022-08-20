// day 1
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// day02
// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console
// var country = "India";
// var continent = "Asia";
// var population = "138crors";
// var island = "Andaman and Nicobar";
// var island = false;
// var language;
// console.log(country, continent, population);
// console.log(typeof island);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
///////////////////////////////////////////////////////
// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens
// const language = "hindi";
// language = "english";
// console.log(language);
/////////////////////////////////////////////////////////////

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
/*
var country = "India";
var continent = "Asia";
const language = "hindi";
const population = 1380000;
console.log(population / 2);
// population++;
console.log(population);
console.log(population > 6000);
console.log(population < 3300000);
const description =
  country +
  " " +
  "is in " +
  continent +
  " and its population " +
  population +
  ", " +
  "people speak " +
  language;
console.log(description);
const des = `${country} is in ${continent} and its population ${population}, people speaks ${language} `;
console.log(des);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original
*/
const country = "India";
const population = 138;
if (population >= 33) {
  console.log(`${country}'s population is ${population} million above average`);
} else {
  console.log(`${country}'s population is ${population} million below average`);
}
////////////////////////////////////////////////////////////////////////////////////////////////
/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; = 
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
*/
// -, >,< convert into number
// + convert into string
console.log("9" - "5"); //"4"
console.log("19" - "13" + "17"); //"617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143;

//////////////////////////////////////////////////////////////////////////////////////////////
// alert("sapna saini");
// let
// let a = 30;
// let x = 32;
// a = "sapna";
// console.log(a);

// var
// var a = 32;
// a = 87;
// name = "sapna";
// b = 2;
// console.log(a, name, b);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// coding challenges
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

// const bmiMark = markMass / markHeight ** 2;
// const bmiJohn = johnMass / johnHeight ** 2;
// const bmi = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, bmi);
/////////////////////////////////////////////////////////////////////////////
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
*/
const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;
// const bmi = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, bmi);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})`);
} else {
  console.log(`John's BMI(${bmiJohn}) is higher than John's(${bmiMark})`);
}
