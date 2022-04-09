// Link: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

/**
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = function(s) {
    // The sliding window algorithm works by looks at a subset of elements
    // inside an array at once as we move forward through the loop


    // each time a distinct str enters the window increase count
    let count = 0

    // This refers to the left side of the window
    let leftPointer = 0

    // This tracks the characters in a window view
    let seen = {}

    for(let i = 0; i < s.length; i++){
       // once i is greater than 2 our right side window has been met
       if(i > 2){
           // remove element at the left side of the window
           seen[s[leftPointer]] -= 1
           // delete key if it is 0
           if(seen[s[leftPointer]] <= 0) 
               delete seen[s[leftPointer]]
           // increase where the window starts by 1
           leftPointer++
       } 
        
       // add new element at the right side of the window
       seen[s[i]] = seen[s[i]] + 1 || 1
       
       // check if the object contains three distinct letters
       if(Object.keys(seen).length === 3){
            count++
        }
    }
    
    return count
};
