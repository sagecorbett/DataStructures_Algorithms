// Link: https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n) runtime and constant space
var findDuplicates = function(nums){
    let duplicates = []
    for(let i = 0, n = nums.length; i < n; i++){
        // make the number at arr[i] positive. It could be negative
        // because another number at its index repeated
        let absoluteVal = Math.abs(nums[i])
        // check if the value at the index spot of arr[i] is negative.
        // if it is then that means we have a repeating number and we need to add 
        // it to the duplicates array
        if(nums[absoluteVal] < 0)
            duplicates.push(absoluteVal)
        // Else it does not exist and we need to make it negative that way if 
        // we see the same number in the future the negative value at its index will
        // tell us its been seen.
        else 
            nums[absoluteVal] = -nums[absoluteVal] || -absoluteVal
    }

    return duplicates
}


// hash map
// let findDuplicates = function(nums) {
//  let seen = {}
//  let duplicates = []
//  for(let i = 0, n = nums.length; i<n; i++){
//      if(seen[nums[i]])
//          duplicates.push(nums[i])
//      else
//          seen[nums[i]] = true
//  }
    
//  return duplicates
// };