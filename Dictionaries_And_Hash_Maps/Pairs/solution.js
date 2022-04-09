// LINK: https://www.hackerrank.com/challenges/pairs/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

function pairs(k, arr) {
	// an object that tracks all numbers seen
	const numbers = {};

	// a count that increases everytime we find a pair where the difference is k
	let count = 0;

	// loop through the array checking if arr[i] - k exists in the numbers obj
	// we also need a second "if" to check if arr[i] + k exist because in some cases we      // might not have seen the number yet and also each number could be a pair multiple      // times. example arr: [ 1 5 3 4 2 ]  and k = 2
	// 3 has a pair with 5 because 5 - 3 = k but 3 also has a pair with 1 because
	// 3 - 1 = k as well
	for (let i = 0, n = arr.length; i < n; i++) {
		if (numbers[arr[i] - k]) count++;

		if (numbers[arr[i] + k]) count++;

		// set each key of the numbers to true because we only care if it exists
		numbers[arr[i]] = true;
	}

	return count;
}
