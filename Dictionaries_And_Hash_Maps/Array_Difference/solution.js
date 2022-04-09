// Link: https://www.codewars.com/kata/523f5d21c841566fde000009/train

// without built in methods
function arrayDiff(a, b) {
	let map = {};
	let arr = [];
	for (let i of b) {
		map[i] = true;
	}
	for (let i of a) {
		if (map[i]) continue;
		else arr.push(i);
	}
	return arr;
}


// with built in methods
function arrayDiff(a, b) {
	return a.filter(item => {
		return !b.includes(item);
	});
}