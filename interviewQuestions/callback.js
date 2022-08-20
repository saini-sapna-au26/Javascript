function f1(arr, callback) {
  arr.push(126);
  callback();
}
var arr = [1, 2, 3, 4];
f1(arr, function () {
  console.log(arr);
});
