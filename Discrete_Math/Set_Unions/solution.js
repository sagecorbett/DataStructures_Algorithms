// A set union (A u B) is the combination of of two sets
function union(s1, s2){
  let union = new Set();

  
  // loop through values and check if the set has them
  for( i of s1 ){union.add(i)}
  for( i of s2 ){union.add(i)}

  return union;
}


// better solution
function union(s1, s2) {
    // return a new Set using spread operators on s1 and s2
    return new Set([...s1, ...s2]);
}