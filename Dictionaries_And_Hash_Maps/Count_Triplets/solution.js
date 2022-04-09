// my original solution:
// This solution will not work on test cases that have numbers 
// that are 15 digits in length
function countTriplets(arr, r) {
    // to store available numbers as we see them
    let available = {}

    let count = 0
    // iterate through the array 
    // 1 2 2 4. r = 2
    for (let i = 0, n = arr.length; i < n; i++) {
        // put current number into available obj and store the amount 
        // of that number available to us
        if (available[arr[i]]) available[arr[i]] += 1;
        else available[arr[i]] = 1;

        // for each index as we go through the loop check if we have:
        // (i / r) and ((i / r) / r) available to us if we do then we have a match
        // example: i = 16 and r = 4. So we would check if 16 / 4 exist in available
        // and if 4 / 4 exists as well. if it does then increase count
        if (available[arr[i] / r] && available[(arr[i] / r) / r]) {
            // check if we have multiple (i / r's)
            let multicheck1 = 0;
            if (available[arr[i] / r] > 1) {
                multicheck1 += available[arr[i] / r]
            }
            // check for multiple ((i / r) / r's)
            let multicheck2 = 0;
            if (available[(arr[i] / r) / r] > 1) {
                multicheck2 += available[(arr[i] / r) / r]
            }

            // check if either of our multi checks are true
            if (multicheck1 || multicheck2) {
                count += multicheck1 + multicheck2
            }
            // if none are true then we one have one match
            else count++;
        }
    }
    return count
}