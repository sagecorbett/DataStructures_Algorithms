// LINK: https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// Hash Map solution
function twoStrings(s1, s2) {
	// make an object/dict out of one string and just
	// loop through the second string to see if any letters match
	let letterObj = {};
	for (let i of s1) {
		letterObj[i] = i;
	}

	// loop through second string and see if there are matches
	for (let i of s2) {
		// if it exist return yes there was a match
		if (letterObj[i]) {
			console.log('YES');
			return 'YES';
		}
	}

	console.log('NO');
	return 'NO';
}


// Discrete Math Solution
function twoStrings(s1, s2) {
    // Check if s1 n s2 (if s1 intersects s2)
    
    // make a set of both s1 and s2
	let a = new Set(s1);
	let b = new Set(s2);

	let intersect = new Set([...a].filter(a => b.has(a)));
	return intersect.size ? 'YES' : 'NO';
}