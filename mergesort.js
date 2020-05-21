console.log("merge sort v9");

function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    left[0] <= right[0]
      ? sorted.push(left.shift())
      : sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
}

function mergeSort(array) {
  if (array.length < 2) return array;

  const length = array.length;
  const middle = Math.floor(length / 2);

  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4, 3, 7, 1, 9, 10, 2, 20]));
