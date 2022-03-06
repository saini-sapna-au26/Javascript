// Hositing with variables
console.log(me);
// console.log(job); // error
// console.log(year); // error

var me = "sapna";
let job = "teacher";
const year = 1999;

// Hositing with funcction
// console.log(addArrow(2, 3)); // error
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // error

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;
// var addArrow = (a, b) => a + b;

// example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
