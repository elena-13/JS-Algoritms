const arr = [3,7,2,3,2,9,22];

// swap inside arr
function findSmallest1(arr, iterator) {
  let smallest = arr[iterator];
  let smallestIdx = iterator;

  for (let i = iterator; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIdx = i;
    }
  }

  return smallestIdx;
}

function selectionSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = findSmallest(arr, i);
    let copy = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = copy;
    console.log('arr', arr);
  }

  return arr;
}

// extra copy array
function findSmallest2(arr) {
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

function selectionSort2(arr) {
  let res = [];
  let copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    let smallest = findSmallest(arr);
    res.push(arr[smallest]);
    arr.splice(smallest, 1);
  }

  return res;
}
