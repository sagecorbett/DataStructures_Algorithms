// LINK: https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = s => {
  
   let leftPointer = 0
   let rightPointer = 0
   let count = 0
   let seen = {}
   
   while(rightPointer < s.length){
        // if a character already exist in seen then shrink the window
        if(seen[s[rightPointer]] || seen[s[rightPointer]] === 0){
           // update count if the current count is larger. The count is just 
           // the size of the current window. 
           let currentCount = rightPointer - leftPointer 
           count = currentCount > count ? currentCount : count
            
           // shrink the window by moving the leftPointer right 
           // until we are at the previous existence of the element
           while(leftPointer <= seen[s[rightPointer]]){
             delete seen[s[leftPointer]]
             leftPointer++
           }
       }
       
       // add character to right side of window
       seen[s[rightPointer]] = rightPointer
       rightPointer++
    }
    
    let lastLength = rightPointer - leftPointer
    return lastLength > count ? lastLength : count
};