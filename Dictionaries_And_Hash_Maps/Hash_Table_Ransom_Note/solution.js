// Link: https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function checkMagazine(magazine, note) {
	// make a object/dictionary of all words in magazine
	// The key: will be the word in the magazine
	// The value: will be number of occurrences
	let dict = {};

	// Loop through magazine and put the words into dict
	for (let i = 0, n = magazine.length; i < n; i++) {
		// if the word is already in our object then increase its count
		if (dict[magazine[i]]) {
			dict[magazine[i]] += 1;
		}
		// if it is not already in our object then take it our
		else {
			dict[magazine[i]] = 1;
		}
	}

	// now loop through the words we want in our note and see if they are available
	for (let i = 0, n = note.length; i < n; i++) {
		// if our object does not have the word in it
		if (!dict[note[i]]) {
			console.log('No');
			return 'No';
		}

		// if it does exist decrease our word count by 1
		if (dict[note[i]]) {
			dict[note[i]] -= 1;
		}
	}

	console.log('Yes');
	return 'Yes';
}
