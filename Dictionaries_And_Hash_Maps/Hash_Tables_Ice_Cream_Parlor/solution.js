// LINK: https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

function whatFlavors(cost, money) {
	// have an obj that when you come across a num in cost stores that num as
	// the key and the index+1 as the value
	let nums = {};

	// as we loop through the array of cost check if money - cost[i] exists in the
	// hash. if it does that means we have already seen a number plus cost[i] that will      // equal to the exact money we need to spend.
	// return both i+1 and money - cost[i] index
	for (let i = 0, n = cost.length; i < n; i++) {
		if (nums[money - cost[i]]) {
			console.log(nums[money - cost[i]], i + 1);
			break;
		} else nums[cost[i]] = i + 1;
	}
	return;
}
