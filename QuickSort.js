const arr = [3,7,2,3,2,9,22];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];

    const less = [];
    const greater = []

    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        continue;
      }

      if (arr[i] <= pivot) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }

    const res1 = quickSort(less);
    const res2 = quickSort(greater);

    return [...res1, pivot, ...res2];
  }
}

console.log(quickSort(arr));
