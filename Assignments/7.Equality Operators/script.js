const numNeighbours = prompt(
  "How many neighbours countries does your country have?" // ==
); // In this code numbers 1,2,3 is taking as string and gave result in string
if (numNeighbours == 1) {
  console.log("Only 1 border!.");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!.");
} else {
  console.log("No borders!.");
}

const numNeighbour = Number(
  prompt("How many neighbour countries does your country have?") //===
); // in it string number first converted to numbers the gave result
if (numNeighbour === 1) {
  console.log("Only 1 border!.");
} else if (numNeighbour > 1) {
  console.log("More than 1 border!.");
} else {
  console.log("No borders!.");
}
