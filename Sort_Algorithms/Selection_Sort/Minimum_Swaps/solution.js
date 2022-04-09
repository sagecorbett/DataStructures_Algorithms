// This problem will have 2 solutions. 
// My first solution is a selection sort. But since the range of
// numbers will always start with 1 we can solve this problem faster
function minimumSwaps(arr) {
	let swaps = 0;
	// write a selection sort and count each time values are swapped
	for (let i = 0; i < arr.length - 1; i++) {
		// keep the index of smallest int
		let smallest;
		for (let j = i + 1; j < arr.length; j++) {
			// give smallest a value on the first iteration
			if (!smallest) {
				smallest = j;
				continue;
			}

			// if arr[j] is less than the index of smallest
			// then update smallest index to j becaue j is the index of the
			// new smallest number
			if (arr[j] < arr[smallest]) {
				smallest = j;
			}
		}

		// if arr[smallest] is less than arr[i]
		// then swap them and increase the swap counter
		if (arr[smallest] < arr[i]) {
			let temp = arr[i];
			arr[i] = arr[smallest];
			arr[smallest] = temp;
			swaps++;
		}
	}
	return swaps;
}

// Solution 2 (Faster)