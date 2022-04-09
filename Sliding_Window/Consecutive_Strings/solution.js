// Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

// Not entirely happy with this solution but needed to quickly solve this for a student
// The two top rated submissions from other users run 70% slower than this solution though.
// Benchmark pic included
function flattenArrToStr(arr){
    let str = ""
    for(let i = 0, n = arr.length; i < n; i++){
      str += arr[i]
    }
    return str
  }
  
  function longestConsec(strarr, k) {
    if(strarr.length === 0 || k > strarr.length || k <= 0)
      return ""
    
    // "r" represents the right side of the window of strings we are looking at
    let r = 0
    let windowArr = []
    let max = ""
    
    while(r <= strarr.length){
      
      // if r is greater than or equal to k then the right side of the window has been found
      if(r >= k){
        // get current window str
        let str = flattenArrToStr(windowArr)
        
        // if this string is greater than the current max size string we have then update it
        if(str.length > max.length){
          max = str
        }
        
        // now shrink the window by removing the first element in the windowArr
        windowArr.shift()
      }
      
      // add new string into the window
      windowArr.push(strarr[r])
      
      // move window to the right
      r++
    }
    
    return max
    
}