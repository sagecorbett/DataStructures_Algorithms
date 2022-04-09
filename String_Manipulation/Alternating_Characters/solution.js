// LINK: https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
	// * Original thought before coding *
	// have a results array and only pushing to it if the last letter
	// in the results array is not equal to the letter we are on in the
	// iteration and all we need to return is the original length of the string
	// minus the length of the results array
	let results = [];
	for (let i of s) {
		// this if statement checks the element at the last index
		if (results[results.length - 1] != i) {
			// if they are not equal then we know that "i" is not a consecutive
			// character so we can go ahead and add it to the results array
			results.push(i);
		}
	}
	return s.length - results.length;
}