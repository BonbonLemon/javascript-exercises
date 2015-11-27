// my each, my map, my inject
var NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function(block) {
  for (var i = 0; i < this.length; i++) {
    block(this[i]);
  }
  return this;
}

// NUMS.myEach(function (num) {
//   console.log("square of " + num + " is " + (num * num));
// });


Array.prototype.myMap = function(block){
  var resultArray = []
  this.myEach( function(element) {
    resultArray.push(block(element));
  });
  return resultArray;
}

// console.log(NUMS.myMap(function (num) {
//   return num * num;
// }));

Array.prototype.myInject = function(block){
  var accumulator = 0;
  this.myEach(function(currentValue){
    accumulator =  block(accumulator, currentValue);
  });
  return accumulator;
}
// fix to accomodate this[0]  starting value passed in or default
console.log(NUMS.myInject(function (total, item) {
  return total + item;
}));
