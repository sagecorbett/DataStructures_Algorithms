let unsorted = [5, 1, 3, 2, 4, 6];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let k = i;
    while (arr[k] < arr[k - 1]) {
      let temp = arr[k];
      arr[k] = arr[k - 1];
      arr[k - 1] = temp;
      k--;
    }
  }

  return arr;
}



console.log(insertionSort(unsorted))