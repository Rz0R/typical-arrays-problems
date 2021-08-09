
exports.min = function min(array = []) {
    if (array.length) {
      return Math.min(...array);
    }
    return 0;
  }
  
  exports.max = function max(array = []) {
    if (array.length) {
      return Math.max(...array, 0);
    }
    return 0;
  }
  
  exports.avg = function avg(array = []) {
    if (array.length) {
      return array.reduce((sum, val) => sum + val, 0) / array.length;
    }
    return 0;
  }
