//return an array everytime

var range = function(start, finish){
  var result = []

  if (start === finish){
    return start;
  }
  else if (finish < start){
    return result;
  }
  else{
    result.push(start, range(start+1, finish));
  }
return result
}
//
// console.log("range(3, 10) = " + range(3, 10));

// write rec
var sumRec = function(array){
  var sum = 0;
    for (var i=0; i < array.length; i++){
      sum += array[i];
    }
  return sum;
}

// console.log("sumRec([1, 3, 5]) = " + sumRec([1, 3, 5]));


var expRec2 = function(base, exponent){
  if (exponent === 0){
    return 1;
  }
  else if (exponent === 1){
    return base;
  }
  else if (exponent % 2 === 0){
    return expRec2(base, exponent / 2) * expRec2(base, exponent / 2) ;
  }
  else{
    return base *(expRec2(base, (exponent-1) / 2) * expRec2(base, (exponent-1) / 2));
  }
}

// console.log("expRec2(2, 4) = " + expRec2(2, 4));
// console.log("expRec2(2, 5) = " + expRec2(2, 5));

var fibsRec = function(num) {
  if (num === 1) {
    return [1];
  }
  else if (num === 2) {
    return [1, 1];
  }
  else {
    var lastFib = fibsRec(num - 1);
    var lastNum = lastFib[lastFib.length - 1];
    var secondLastNum = lastFib[lastFib.length - 2];
    var currentNum = lastNum + secondLastNum;
    lastFib.push(currentNum);
    return lastFib;
  }
}

// console.log("fibsRec(5) = " + fibsRec(5));

var bsearch = function(array, target) {
  var pivotIndex = Math.floor(array.length / 2);
  var pivot = array[pivotIndex];

  if (array.length === 0) {
    return undefined;
  }
  else if (target === pivot) {
    return pivotIndex
  }
  else if (target < pivot) {
    var leftSide = array.slice(0, pivotIndex);
    return bsearch(leftSide, target);
  }
  else {
    var rightSide = array.slice(pivotIndex + 1, array.length);
    if (bsearch(rightSide, target) === undefined) {
      return undefined;
    }
    return pivotIndex + 1 + bsearch(rightSide, target);
  }
}

// console.log("bsearch([1, 2, 3], 2) = " + bsearch([1, 2, 3, 4, 5], 2));
// console.log("bsearch([1, 2, 3], 4) = " + bsearch([1, 2, 3, 4, 5], 2.5));


var mergeSort = function(array) {

}

var mergeHelper = function()

console.log("mergeSort([4, 5, 2, 3, 1]) = " + mergeSort([4, 5, 2, 3, 1]));
