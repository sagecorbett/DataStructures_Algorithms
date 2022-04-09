// Link: https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
// Looking at the other submitted solutions I have not seen a more optimized solution.
// Still I am not that happy with this one but here it is:

const checkForValidArr = arr => {
  let set = new Set([...arr])
  return set.size < 9 ? false : true
}


function validSolution(board){
  let map = {}

  // loop over rows
  for(let i = 0, n = board.length; i < n; i++){
    // for vertical columns in the sudoku board
    let vertical = []
    for(let j = 0; j < n; j++){
      vertical.push(board[j][i])

      /* 
        There are 9 possible subset boxes in a sudoku board. This turns index values into base 3.
        Example: 

        Column:      0  1  2    3  4  5    6  7  8
        Row:          
                0    5, 3, 4, | 6, 7, 8, | 9, 1, 2
                1    6, 7, 2, | 1, 9, 5, | 3, 4, 8
                2    1, 9, 8, | 3, 4, 2, | 5, 6, 7
                     -----------------------------
                3    8, 5, 9, | 7, 6, 1, | 4, 2, 3
                4    4, 2, 6, | 8, 5, 3, | 7, 9, 1
                5    7, 1, 3, | 9, 2, 4, | 8, 5, 6
                    -----------------------------
                6    9, 6, 1, | 5, 3, 7, | 2, 8, 4
                7    2, 8, 7, | 4, 1, 9, | 6, 3, 5   <--- board[7][8]
                8    3, 4, 5, | 2, 8, 6, | 1, 7, 9

        By turning values into base 3 we can keep a hash map for where a given value belongs
        as looping through this. Example take the 3 that exist in the board[7][9] spot. It also 
        exists in our ninth subset. If we looked at these subsets ALSO as indexs in an array, the
        ninth subset could be considered to be at the coordinates of [2][2] the first at [0][0] 
        and so on. 
        This is what the map will check for. Subset values given at a coordinate. So back to our
        board[7][9] we need to break 7 and 9 into base 3 so the math would be:
        7/3 and 8/3 ---> 2.33 and 2.66
        Round these down to get 2, 2 which is the coordinates of where this subset exists. 
        Following this logic that is how the keys will be made and will look like this:
        
        Map: {
          '[2,2]': [2, 8, 4, 6, 3, 5, 1, 7, 9]
        }
      */
      let key = `[${Math.floor(i/3)},${Math.floor(j/3)}]`
      // if the key already exists then just add the new value
      if(map[key])
        map[key].push(board[i][j])
      // if the key does not exist then just create a new array with the value as the
      // first element
      else
        map[key] = [board[i][j]]
    }

    // Check the column and row we currently on to see if they are valid
    if(!checkForValidArr(board[i]) || !checkForValidArr(vertical))
      return false
  }


  // Check each key in the map of the subset 9 elements for invalid values
  for(const key in map){
    if(!checkForValidArr(map[key]))
      return false
  }

  // if all checks are true then return true this is a valid board
  return true
}


let validBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
] // false 

let invalidBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
] // false 


let edgeCase = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9], 
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5]
] // false


console.log(validSolution(validBoard)) 
