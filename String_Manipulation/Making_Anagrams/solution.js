// LINK: https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

function makeAnagram(a, b) {
    // * Original thoughts before starting to code *
	// the deletions would be the inverse of the matches
	// so if I have abc & cde there would be one match on each side and 2 unmatched          // characters on each side.
	// so the solution is to start the deletions needed assuming there is no matches
    // if we see a match just remove 2 from deletions

	a = a.split('');
	b = b.split('');

	let deletions = a.length + b.length;

	// double loop through a and b
	for (let i of a) {
		// have to loop the traditional way to make splicing characters faster
		for (let j = 0; j < b.length; j++) {
			// if they are equal then we have two matched characters
			if (b[j] == i) {
				deletions -= 2;
				// remove this character so it can't be matched again.
				// console.log('a match happened')
				b.splice(j, 1);
				// console.log(b)
				// break the loop here because a character can only match another once.
				break;
			}
		}
	}
	return deletions;
}
