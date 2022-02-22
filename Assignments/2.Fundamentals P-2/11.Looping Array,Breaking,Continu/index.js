// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

const population = [10, 23, 36, 87, 67];
const population2 = [];

function percentageOfWorld(populations) {
  return (populations / 7900) * 100;
}

for (let i = 0; i < population.length; i++) {
  const pop = percentageOfWorld(population[i]);
  population2.push(pop);
}
console.log(population2);
