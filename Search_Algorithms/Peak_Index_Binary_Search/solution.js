/**
 * @param {number[]} arr
 * @return {number}
 */
 // Link: https://leetcode.com/problems/peak-index-in-a-mountain-array/
 var peakIndexInMountainArray = function(arr) {
    let start = 0
    let end = arr.length -1
    
    while(start <= end){
        let middle = Math.ceil((start + end) /2)
        
        // check if the middle number is greater than the numbers left and right to it
        if(arr[middle] > arr[middle+1] && arr[middle-1] < arr[middle])
            return middle
        
        // check if the bigger number was on the left or right
        if(arr[middle] < arr[middle+1])
            start = middle +1
        else 
            end = middle -1
        
    }
    
    return start
};