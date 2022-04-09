// LINK: https://leetcode.com/problems/missing-number/
var missingNumber = function (nums) {
    // the missing number could be at the end of the array 
    let exOr = 0 ^ nums.length

    for (let i = 0, n = nums.length; i < n; i++) {
        exOr = exOr ^ nums[i] ^ i
    }

    return exOr
};

// Here is just a simple math solution too:
var missingNumber = function(nums) {
    // the missing number could be at the end of the array 
    let shouldBeTotal = nums.length
    let total = 0
    
    for(let i = 0, n = nums.length; i<n;i++){
        shouldBeTotal += i
        total += nums[i]
    }
    
    return shouldBeTotal - total
};

