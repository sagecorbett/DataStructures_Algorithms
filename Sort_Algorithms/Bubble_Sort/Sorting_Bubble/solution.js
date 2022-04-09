// LINK: https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function countSwaps(a) {
	let swaps = 0;

	for (let i = 0, n = a.length; i < n; i++) {
		for (let k = i + 1; k < n; k++) {
			if (a[i] > a[k]) {
				let temp = a[k];
				a[k] = a[i];
				a[i] = temp;
				swaps++;
			}
		}
	}

	console.log(`Array is sorted in ${swaps} swaps.`);
	console.log('First Element:', a[0]);
	console.log('Last Element:', a[a.length - 1]);
	return;
}
