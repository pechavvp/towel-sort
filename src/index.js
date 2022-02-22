
// You should implement your task here.

module.exports = function towelSort (matrix) {
    arr = [];
    if (matrix == undefined) {
        return arr;
    }
    for (let i=0; i<matrix.length; i++) {
        if (i != 0 && i % 2 != 0) {
          matrix[i].reverse();
        }
      }
    matrix.forEach(function(item) {
      item.forEach(function(i) {
        arr.push(i);
      })
    })
    return arr;
}
