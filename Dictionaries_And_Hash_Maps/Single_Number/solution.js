// Link: https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
    let map = {}
    for (let i = 0, n = nums.length; i < n; i++) {
        if (map[nums[i]]) delete map[nums[i]];
        else map[nums[i]] = 1
    }
    return Object.keys(map)[0]
};