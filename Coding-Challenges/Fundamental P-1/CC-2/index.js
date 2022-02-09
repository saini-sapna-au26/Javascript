const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 95;

const BmiMark = markWeight / markHeight ** 2;
const BmiJohn = johnWeight / johnHeight ** 2;
const hightMass = BmiMark > BmiJohn;

console.log(BmiMark, BmiJohn, hightMass);

if (BmiMark >= BmiJohn) {
  console.log(
    `Mark weight (${BmiMark}) is greater  than john weight (${BmiJohn})..  `
  );
} else {
  console.log(
    `John weight ${BmiJohn} is greater than Marks weight (${BmiMark}).. `
  );
}
