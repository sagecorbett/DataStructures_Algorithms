function deleteNth(arr, n) {
    // a map to track numbers as we see them
    // key = a number in arr
    // value = the number of times we have seen it
	let map = {};
	// an array to keep all the allowed numbers
	let result = [];

	for (let i of arr) {
		// if the number we have exists in the map and it + 1 is less than or
		// equal to the number of times it is allowed to occur
		if (map[i] && map[i] + 1 <= n) {
			// increase it's value by one
			map[i] += 1;
			// this is a good number so push it.
			result.push(i);
		}
		// if the number does not exist in map yet then initialize its occurences to one
		else if (!map[i]) {
			map[i] = 1;
			// this is the first encounter with the number so it is good and can be pushed
			result.push(i);
		}
	}
	return result;
}
