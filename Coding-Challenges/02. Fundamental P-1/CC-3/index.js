// Data-1
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;
// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore) {
//   console.log("Dolphins team wins the trophy 🏆");
// } else if (dolphinsAverageScore < koalasAverageScore) {
//   console.log("koalas team wins the trophy 🏆");
// } else if (dolphinsAverageScore === koalasAverageScore) {
//   console.log("match Draw..");
// }

// Bouns-1
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;
// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//   console.log("Dolphins team wins the trophy 🏆");
// } else if (
//   dolphinsAverageScore < koalasAverageScore &&
//   koalasAverageScore >= 100
// ) {
//   console.log("koalas team wins the trophy 🏆");
// } else if (dolphinsAverageScore === koalasAverageScore) {
//   console.log("match Draw..");
// }

// Bonus-2
const dolphinsAverageScore = (97 + 112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 106) / 3;
console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log("Dolphins team wins the trophy 🏆");
} else if (
  dolphinsAverageScore < koalasAverageScore &&
  koalasAverageScore >= 100
) {
  console.log("koalas team wins the trophy 🏆");
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= 100 &&
  koalasAverageScore >= 100
) {
  console.log("Both win the match..");
} else {
  console.log("No one win the match...");
}
