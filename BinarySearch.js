const arr = [1,3,5,7,14];
const target = 5;

function binarySearch(arr, target) {
  let first = arr[0];
  let last = arr.length - 1;

  while (first < last) {
    const mid = Math.floor((first + last) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return mid;
    }

    if (guess > target) {
      last = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return - 1;
}

console.log(binarySearch(arr, target));
