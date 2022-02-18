// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

function percentageOfWorld(population) {
  const percentage = (population / 7900) * 100;
  return percentage;
}

function describeCountry(country, population) {
  return `${country} has ${population} million people, Which is about ${percentage}% of the world.`;
}

console.log(percentageOfWorld(16));
console.log(describeCountry("India", 138));

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const percPortugal1 = percentageOfWorld1(10);
// console.log(percPortugal1);
