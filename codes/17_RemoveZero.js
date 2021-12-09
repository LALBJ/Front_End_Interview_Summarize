const removeZero = (array) => {
  for (let i = 0, j = 0; i < array.length - j; i++) {
    if (array[i] == 0) {
      array.push(0);
      array.splice(i, 1);
      j++;
      i--;
    }
  }
  return array;
};

removeZero([0, 1, 0, 3, 12]);
console.log(removeZero([0, 1, 0, 3, 12]));
