
Array.prototype.myUniq = function(){
  var result = [];
  this.forEach(function(thisValue){
    var unique = true;
    result.forEach(function(resultValue){

      if (thisValue === resultValue) {
        unique = null
      }
    })

    if (unique === true) {
      result.push(thisValue);
    }
  })
  return result;
};

// console.log([1,2,3,4, 1,5,2].myUniq());

Array.prototype.twoSum = function() {
  var result = [];

  for (var i1 = 0; i1 < this.length; i1++) {
    for ((var i2 = i1 + 1); i2 < this.length; i2++) {
      if (this[i1] === -this[i2]) {
        result.push([i1, i2]);
      }
    }
  }

  return result;
}

// console.log([-1, 0, 2, -2, 1].twoSum())

Array.prototype.myTranspose = function() {
  var result = [];

  var y_length = this.length;
  var x_length = this[0].length;

  for (var i1 = 0; i1 < y_length; i1++) {
    var result_sub_array = [];
    for (var i2 = 0; i2 < x_length; i2++) {
      result_sub_array.push(this[i2][i1]);
    }
    result.push(result_sub_array);
  }

  return result;
}

console.log([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ].myTranspose())
