// Link: https://leetcode.com/problems/max-consecutive-ones/
/** 
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let maxCount = 0
    for(let i = 0, n = nums.length; i < n; i++){
        if(nums[i] === 0){
            maxCount > count ? maxCount : maxCount = count
            count = 0
        } else {
            count++
        }
    }
    return maxCount > count ? maxCount : count
};