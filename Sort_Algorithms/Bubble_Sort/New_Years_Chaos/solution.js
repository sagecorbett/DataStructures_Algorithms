// Link: https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen


// Bubble sort answer
// Answer with console logs (needed to pass the problem)
function minimumBribes(q) {
    // a number is out of place when it is bigger than the one to the right of it
    // if the number is bigger than the one to the right move it and increase personal
    // bribes for that number and also increase bribes;
    // if the number is less than the one to the right then personal bribes can be reset 
    // to zero
    let bribes = 0;
    let personalBribes = 0;
    let len = q.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            // check the personal bribes for this person
            if (personalBribes >= 3) {
                console.log('Too chaotic');
                return;
            }

            // if the number is bigger than the one to 
            // the right move it and increase personal
            // bribes for that number and also increase bribes;
            if (q[j] > q[j + 1]) {
                // swap values
                let temp = q[j + 1];
                q[j + 1] = q[j];
                q[j] = temp;

                // a swap took place so a bribe had to have happened
                personalBribes++;
                bribes++
            }
            // if the number is less than the one to the right 
            // then personal bribes can be reset 
            else {
                personalBribes = 0;
            }
        }
    }

    console.log(bribes)
    return bribes;
}





// ANSWER with returns 
function minimumBribes(q) {
	// a number is out of place when it is bigger than the one to the right of it
	// if the number is bigger than the one to the right move it and increase personal
	// bribes for that number and also increase bribes;
	// if the number is less than the one to the right then personal bribes can be reset
	// to zero
	let bribes = 0;
	let personalBribes = 0;
	let len = q.length;

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			// check the personal bribes for this person
			if (personalBribes >= 3) return 'Too Chaotic';
            console.log("first is: ", q[j]);
            console.log("Second is: ", q[j+1]);
			// if the number is bigger than the one to
			// the right move it and increase personal
			// bribes for that number and also increase bribes;
			if (q[j] > q[j + 1]) {
				// swap values
				let temp = q[j + 1];
				q[j + 1] = q[j];
				q[j] = temp;
				// a swap took place so a bribe had to have happened
				personalBribes++;
				bribes++;
			}
			// if the number is less than the one to the right
			// then personal bribes can be reset
			else {
				personalBribes = 0;
			}
		}
	}

	return bribes;
}