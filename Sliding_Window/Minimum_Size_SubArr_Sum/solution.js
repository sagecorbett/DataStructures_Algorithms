// Link: https://leetcode.com/problems/minimum-size-subarray-sum/submissions/


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// Sliding Window o(n) solution
var minSubArrayLen = function(target, nums) {
    // left and right pointers
    let l = 0
    let r = 0
    // total keeps track of the accumulated value of the numbers in the window
    let total = 0
    // windowCount tracks how many different values are in the window
    let windowCount = 0
    let minLen = Infinity
    
    while(r <= nums.length){        
        // if the current window has nums that add up to >= nums
        if(total >= target){
            // check if current window is smaller than previous windows that added up
            // to total
            minLen = windowCount < minLen ? windowCount : minLen
            
            // now to shrink the window by removing 1 from the count:
            windowCount--
            // remove the first element value from the window and minus it from total
            total -= nums[l]
            // increase the right pointer by 1
            l++
            
        }
        // else the target has not been hit
        else {
            // increase the window size
            windowCount++
            // add a new value to the right side of the window and the increase the window
            total += nums[r]
            r++
        }
    }
    
    // if minLen is equal to infinity that means the target was never hit so return 0
    return minLen === Infinity ? 0 : minLen
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))