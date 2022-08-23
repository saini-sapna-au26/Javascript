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
// const country = "India";
// const population = 138;
// if (population >= 33) {
//   console.log(`${country}'s population is ${population} million above average`);
// } else {
//   console.log(`${country}'s population is ${population} million below average`);
// }
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
// console.log("9" - "5"); //"4"
// console.log("19" - "13" + "17"); //"617"
// console.log("19" - "13" + 17); // 23
// console.log("123" < 57); //false
// console.log(5 + 6 + "4" + 9 - 4 - 2); //1143;
/////////////////////////////////////////////////////////////////////////////////////////////
/*
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
*/
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your countryhave?")
// );
// if (numNeighbours == 1) {
//   console.log("only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// const Neighbours = Number(
//   prompt("How many neighbour countries does your countryhave?")
// );
// if (Neighbours === 1) {
//   console.log("only 1 border!");
// } else if (Neighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
////////////////////////////////////////////////////////////////////////////////////////////
/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
*/
// const country = "India";
// const language = "hindi";
// const population = 138;
// const island = false;
// if (language == "English" && population <= 50 && !island) {
//   console.log("This country is right for You");
// } else {
//   console.log("This country is not right for you!...");
// }
//////////////////////////////////////////////////////////////////////////////////////////////
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry("India", 138, "Delhi"));
const res = describeCountry("Landon", 6, "NewYork");
console.log(res);
//////////////////////////////////////////////////////////////////////////////////////////////////
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

// Functions
// function f1() {
//   console.log("Hii, This side sapna here...");
// }
// f1();

// // Functions with parameters
// function f2(n1, n2) {
//   console.log(n1, n2);
//   const add = `The sum of ${n1} + ${n2} is ${n1 + n2}`;
//   return add;
// }
// console.log(f2(2, 4));
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
// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

// const bmiMark = markMass / markHeight ** 2;
// const bmiJohn = johnMass / johnHeight ** 2;
// const bmi = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, bmi);

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})`);
// } else {
//   console.log(`John's BMI(${bmiJohn}) is higher than John's(${bmiMark})`);
// }
///////////////////////////////////////////////////////////////////////////////
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins have higher score..");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas have higher score..");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both have equal scores...");
// }
////////////////////////////////////////////////////////////////////////////////////
