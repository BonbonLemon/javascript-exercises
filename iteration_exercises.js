Array.prototype.bubbleSort = function() {
  var sorted = false;

  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        sorted = false;
        var tempNum = this[i];
        this[i] = this[i + 1];
        this[i + 1] = tempNum;
      }
    }
  }

  return this
}

// console.log([5, 3, 4, 2, 1].bubbleSort());

String.prototype.substrings = function() {
  var substrings = []

  for (var i1 = 0; i1 < this.length; i1++) {
    for (var i2 = i1; i2 < this.length; i2++) {
      substrings.push(this.substr(i1, i2 + 1));
    }
  }

  return substrings;
}
// fix 

console.log("abc".substrings());
