// We're gonna use strict mode in all script now!
"use strict";

// max min values
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp > min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitude([3, 4, 5, 1, 6, 8]);
console.log(amplitudeNew);

// Array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);
