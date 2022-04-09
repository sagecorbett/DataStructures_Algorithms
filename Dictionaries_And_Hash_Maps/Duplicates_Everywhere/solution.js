
// Takes an array to remove duplicates from and a memory object to
// store already seen values/check for values
const deleteDuplicates = (arr, mem) => {
  let newArr = []
  for(let i = 0, n = arr.length; i<n; i++){
    // if the value exist in memory already then do not add it to the newArr
    if(mem.has(arr[i]))
      continue
    else {
      // add previously non existent value to the array
      newArr.push(arr[i])
      // add the value to memory now that we've seen it for the first time
      mem.add(arr[i])
    }
      
  }
  return newArr
}

const removeDuplicateIds = (obj) => {
  // loop backwards through the object keeping memory of each value seen
  // as the loop progresses delete already seen values

  // get the keys and sort them in reverse
  let keys = Object.keys(obj).sort((a,b) => +b - +a)
  let memory = new Set()
  
  for(const key of keys){
    obj[key] = deleteDuplicates(obj[key], memory)
  }
  return obj
};
