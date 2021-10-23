const arr = [3,7,2,3,2,9,22];

// extra copy array
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIdx = i;
    }
  }

  return smallestIdx;
}

function selectionSort(arr) {
  let res = [];
  let copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    let smallest = findSmallest(arr);
    res.push(arr[smallest]);
    arr.splice(smallest, 1);
  }

  return res;
}

console.log(selectionSort(arr));
