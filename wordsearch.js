const transpose = function(matrix) {
  let result = [];
  let newRows = matrix[0].length;

  for (let i = 0; i < newRows; i++) {
    result.push([]);
  }
  for (let array of matrix) {
    for (let i = 0; i < array.length; i++) {
      result[i].push(array[i]);
    }
  }
  return result;
};

const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (l of horizontalJoin) {
      if (l.includes(word)) {
          return true
     }
  }
  for (r of verticalJoin) {
     if (r.includes(word)) {
      return true;
     }   
  }
  return false;
};

module.exports = wordSearch

//@DASitby
//@CodeDog25