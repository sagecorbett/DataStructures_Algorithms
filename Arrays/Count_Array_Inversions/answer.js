// Calculate the number of inversions in array
function countInversions(array) {
    // My idea is to write a buble sort that counts 
    // how many times a number had to be moved;
    let count = 0;
    let n = array.length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < (n - i - 1); j++) {
            let next = j + 1;
            // If i'th and i+1'th elements out of order
            if (array[j] > array[next]) {
                // Swap them
                let temp = array[next];
                array[next] = array[j];
                array[j] = temp;
                // increase the count because a number was moved
                count++;
            }
        }
    }
    return count;
}


// LINK: https://www.codewars.com/kata/537529f42993de0e0b00181f/train/javascript