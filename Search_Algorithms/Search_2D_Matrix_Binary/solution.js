/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// LINK: https://leetcode.com/problems/search-a-2d-matrix/

// This can be optimized if I treated the whole matrix like one array but here is my first
// solution with a (log m + log n) runtime
let searchMatrix = function(matrix, target) {
   
    // binary search for a row with possible target in it
    let rowStart = 0
    let rowEnd = matrix.length -1
    while(rowStart < rowEnd){
        let middle = Math.ceil((rowStart + rowEnd) / 2)
        
        if(matrix[middle][0] > target)
            rowEnd = middle - 1
        else
            rowStart = middle
    }
    

    // Our possible row
    let row = matrix[rowStart]
    
    // Binary search possible row for target
    let start = 0
    let end = row.length -1
    while(start <= end){
        let middle = Math.ceil((start + end) / 2)
        
        // check if we found the target
        if(row[middle] === target)
            return true
        
        if(row[middle] > target)
            end = middle - 1
        else 
            start = middle + 1
    }
    
    // if target was not found return false
    return false
};


let matrix = [[1],[3]], target = 3

console.log(searchMatrix(matrix, target))