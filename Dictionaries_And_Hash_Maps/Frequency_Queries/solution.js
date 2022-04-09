// Link: https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// Solution with array to keep track of occurrences
function freqQuery(queries) {
	// array to store occurrences
	let occurrences = [];
	// map to keep track of the numbers we see and how many of them we see
	let numbers = {};
	let result = [];

	// loop through the array of queries
	for (let i of queries) {
		const [equation, number] = i;
		const currentOccurrence = numbers[number] || 0;

		if (equation == 1) {
			// if this is the first occurrence it will be 0 + 1 if there have been other
			// occurrences of this number then it will be the current count + 1
			numbers[number] = currentOccurrence + 1;

			// go into occurrences and reduce the count at the currentOccurrence
			// because this number is now going to occur one more time than it
			// already was
			occurrences[currentOccurrence] = (occurrences[currentOccurrence] || 0) - 1;

			// now we have a number that occurs one more time than it already did so we
			// need to add one to the current number or initialize it to 0 and add 1
			occurrences[currentOccurrence + 1] =
				(occurrences[currentOccurrence + 1] || 0) + 1;
		}

		// we only need to delete one from numbers if it already exist
		if (equation == 2 && currentOccurrence > 0) {
			// take one away from the current number count
			numbers[number] = currentOccurrence - 1;

			// go to the count of numbers that occur "currentOccurrence" times and minus 1
			occurrences[currentOccurrence] -= 1;

			// since we deleted 1 from the number of times "number" appears we now need
			// to go to the count index before and add 1
			// example: number = 4, numbers = {'4': 3} and now we are removing an                    // occurence of 4 so now numbers = {'4': 2} so now we have a NEW number that             // occurs 2 times so occurences[3] needs to be decreased and occurences[2]
			// should be increased
			occurrences[currentOccurrence - 1] = +1;
		}

		if (equation == 3) {
			occurrences[number] >= 1 ? result.push(1) : result.push(0);
		}
	}
	return result;
}




// Solution using objects 
function freqQuery(queries) {
    // map to count the number of numbers that occur n times
    let occurrences = {};
    // map to keep track of the numbers we see and how many of them we see
    let numbers = {};
    let result = [];
    // loop through the array of queries
    for (let i of queries) {
        let [equation, number] = i
        let currentOccurrence = numbers[number] || 0

        // if equation is equal to 1 then insert it into numbers
        // and update occurrences
        if (equation == 1) {
            numbers[number] = currentOccurrence + 1;

            // go into occurrences and reduce the count at the currentOccurrence
            // because this number is now going to occur one more time than it
            // already was
            occurrences[currentOccurrence] = (occurrences[currentOccurrence] || 0) - 1;

            // now we have a number that occurs one more time than it already did so we
            // need to add one to the current number or initialize it to 0 and add 1
            occurrences[currentOccurrence+1] = (occurrences[currentOccurrence +1] || 0) +1 
        } 
        
        else if (equation == 2 && currentOccurrence > 0) {
            // remove one from the numbers map
            numbers[number] = currentOccurrence - 1;

            // this number no longer occurs "currentOccurrence" times and now occurs 
            // currentOccurrence - 1 times so we need to update both
            occurrences[currentOccurrence] = occurrences[currentOccurrence] - 1;
            occurrences[currentOccurrence -1] = occurrences[currentOccurrence - 1] + 1;

        } else if (equation == 3) {
            // check if any numbers are in our numbers map "number" times
            occurrences[number] ? result.push(1) : result.push(0);
        }
    }
    return result;
}
