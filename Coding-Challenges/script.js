// part - 1
// ==> Test Data-1
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 95;

const BmiMark = markWeight / markHeight ** 2;
const BmiJohn = johnWeight / johnHeight ** 2;
const hightMass = BmiMark > BmiJohn;

console.log(BmiMark, BmiJohn, hightMass);

// ==> Test Data-2
const mHeight = 1.88;
const markMass = 95;
const jHeight = 1.76;
const johnMass = 85;

const BmiM = markMass / mHeight ** 2;
const BmiJ = johnMass / jHeight ** 2;
const higherMass = BmiM > BmiJ;

console.log(BmiM, BmiJ, higherMass);
