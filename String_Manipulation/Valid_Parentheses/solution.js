var isValid = function(s) {

    const open = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    // This is code is not needed but allows the function to run on 
    // things like: "((sage wrote this))" and still be valid
    const closed = {
        ')': true,
        ']': true,
        '}': true
    }
    
    let onOpening = true
    let closingOrder = []
    for(let i = 0, n = s.length; i < n; i++){
        if(open[s[i]]) onOpening = true
        else if(closed[s[i]]) onOpening = false

        if(onOpening && open[s[i]]){
            closingOrder.unshift(open[s[i]])
            continue
        }
        else if(!onOpening){
            let expected = closingOrder.shift()
            if(s[i] !== expected) return false
        } 
      
    }
    
    return !closingOrder.length && true
};



// RESULT:
// Runtime: 76 ms, faster than 85.81% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 38.4 MB, less than 96.35% of JavaScript online submissions for Valid Parentheses.