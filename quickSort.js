//quick sort 
// O(n) * O(log n) = O(n log n) -> best and average case
// O(n) * O(n) = O(n^2) -> worse case


function quicksort(array) {
  if (array.length < 2) return array;

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  console.log(pivotIndex);

  let left = [],
    right = [];

  array.forEach((element, index) => {
    if (index != pivotIndex) {
      element > pivot ? right.push(element) : left.push(element);
    }
  });

  return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort([4, 3, 7, 1, 9, 10, 2, 20]));
