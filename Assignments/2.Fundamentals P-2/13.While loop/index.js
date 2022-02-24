// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

const population = [10, 23, 36, 87, 67];
const population2 = [];
const population3 = [];

function percentageOfWorld(populations) {
  return (populations / 7900) * 100;
}
for (let i = 0; i < population.length; i++) {
  const pop = percentageOfWorld(population[i]);
  population2.push(pop);
}
console.log(population2);

console.log(`...........while loop.........`);

let p = 0;
while (p < population.length) {
  const popu = percentageOfWorld(population[p]);
  population3.push(popu);
}
console.log(population3);
