// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

const percentageOfWorld = (population) => {
  const percentage = (population / 7900) * 100;
  return percentage;
};
console.log(percentageOfWorld(10));
