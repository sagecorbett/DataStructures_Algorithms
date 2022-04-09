// Link: https://leetcode.com/problems/find-peak-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    Optimized solution:
    Runtime: 68 ms, faster than 91.46% of JavaScript online submissions for Find Peak Element.
    Memory Usage: 39 MB, less than 48.29% of JavaScript online submissions for Find Peak Element.
*/
let findPeakElement = function(nums) {
    let start = 0
    let end = nums.length -1
    
    while(start <= end){
        let middle = Math.ceil((start + end) /2)
        
        // check for larger number left or right of the middle
        if(nums[middle]<nums[middle+1])
            start = middle+1
        else 
            end = middle-1
            
    }
    return start
};


/*
    first solution. not that great can be optimized
*/
 let findPeakElement = function(nums) {
    let start = 0
    let end = nums.length -1
    
    while(start <= end){
        let middle = Math.ceil((start + end) /2)
        
        let middleNum = nums[middle]
        let rightNum = nums[middle+1] || -Infinity
        let leftNum = nums[middle-1] || -Infinity
        
        // check for a peak
        if(middleNum > rightNum && middleNum > leftNum)
            return middle
            
        
        // check if the larger number is on the left or right and update start or end
        if(nums[middle] < nums[middle+1])
            start = middle + 1
        else 
            end = middle - 1
    }
};

