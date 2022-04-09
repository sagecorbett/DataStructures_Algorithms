// LINK: https://leetcode.com/problems/binary-search/

// RECURSION 
/*
Runtime: 72 ms, faster than 92.26% of JavaScript online submissions for Binary Search.
Memory Usage: 42.5 MB, less than 33.19% of JavaScript online submissions for Binary Search.
*/

var search = function(nums, target, start, end){

    // check if start exists
    start = start || 0;

    // check if end exists and is NOT equal to 0
    end = end !== 0 ? end || nums.length -1 : 0
    
    // get the middle of the array
    let middle = Math.ceil((start + end) / 2)
    
    // if our start is greater than the end index then an element wasn't found
    if(start > end)
        return -1

    
    // if our current index is on target then we found it and we are done
    if(nums[middle] === target)
        return middle
    
    // if the current middle is less than the target increase the start to no represent the middle of the array
    if(nums[middle] < target){
        start = middle+1
    }
    // else our middle was bigger than the target and we need to look at the left split of the array.
    else {
        end = middle-1
    }
    
    // call the search function recursively passing in the current start and end that we are looking at in the array
    return search(nums, target, start, end)
}

// console.log(search([2,5], 2))
console.log(search([-1,0,3,5,9,12], 9))


// NON RECURSIVE BINARY SEARCH
/*
Runtime: 76 ms, faster than 81.72% of JavaScript online submissions for Binary Search.
Memory Usage: 42.6 MB, less than 9.78% of JavaScript online submissions for Binary Search.

*/
var search = function(nums, target){
    var start = 0;
    var end = nums.length -1
    
    while(start <= end){
        var middle = Math.ceil((start + end) / 2)
        
        if(nums[middle] === target)
            return middle
        
        if(nums[middle] < target){
            start = middle+1
        }
        else {
            end = middle-1
        }
        
    }  
    return -1
}