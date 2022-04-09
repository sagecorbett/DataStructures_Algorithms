// Link: https://leetcode.com/problems/single-number/

// Solution: 
var singleNumber = function(nums) {
    // Using the XOR operator we can find the single occuring element using this logic:
    // 2 XOR 2 is false and 2 appears twice
    // Repeat this logic for all numbers:
    // 2 XOR 2 XOR 1 returns 1
    let missingNum = 0
    for(let i = 0, n = nums.length; i<n; i++){
        missingNum = missingNum ^ nums[i]
    }
    
    return missingNum
};