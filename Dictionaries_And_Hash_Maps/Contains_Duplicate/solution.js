// link https://leetcode.com/problems/contains-duplicate/

// Simple hash map solution:
var containsDuplicate = function(nums) {
    let map = {}
    for(let i = 0, n = nums.length; i < n; i++){
        if(map[nums[i]])
            return true
        else 
            map[nums[i]] = true
    }
    return false
};


// Set solution:
var containsDuplicate = function(nums) {
    let set = new Set(nums)
    return set.size < nums.length ? true : false
};