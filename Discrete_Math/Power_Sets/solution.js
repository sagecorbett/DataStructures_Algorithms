// A power set denoted p(<SET NAME>) is the set of all possible subsets
// of a set

// The number of subsets the you have for a particular set is: 2^n (2 to the power of n)
// n being the number of elements in your set

function powers(list) {
	return Math.pow(2, list.length);
}

// or 

function powers(list) {
	return 2 ** list.length;
}