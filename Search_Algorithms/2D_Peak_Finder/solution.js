let matrix = [
	[ 4,  5,  6,  7,  8,  7,  6,  5,  4,  3,  2],
	[ 5,  6,  7,  8,  9,  8,  7,  6,  5,  4,  3],
	[ 6,  7,  8,  9, 10,  9,  8,  7,  6,  5,  4],
	[ 7,  8,  9, 10, 11, 10,  9,  8,  7,  6,  5],
	[ 8,  9, 10, 11, 12, 11, 10,  9,  8,  7,  6],
	[ 7,  8,  9, 10, 11, 10/*mid */,  9,  8,  7,  6,  5],
	[ 6,  7,  8,  9, 10,  9,  8,  7,  6,  5,  4],
	[ 5,  6,  7,  8,  9,  8,  7,  6,  5,  4,  3],
	[ 4,  5,  6,  7,  8,  7,  6,  5,  4,  3,  2],
	[ 3,  4,  5,  6,  7,  6,  5,  4,  3,  2,  1],
	[ 2,  3,  4,  5,  6,  5,  4,  3,  2,  1,  0]
]





const findPeak = matrix => {
    let start = 0
    let end = matrix[0].length - 1

    while(start < end){
        let middleCol = Math.ceil((start+ end) / 2)
        let colLen = matrix.length

        let largestNumIndex = findHighest(matrix, middleCol, colLen)

        console.log("largest Num Index is: ", largestNumIndex)
        console.log("middle col is: ", middleCol);

        let largestNum = matrix[largestNumIndex][middleCol]

        // Look to the left and right columns to see if a larger number exists
        if(matrix[largestNumIndex -1][middleCol] > largestNum)
            end = middleCol - 1
        else if(matrix[largestNumIndex +1][middleCol] > largestNum)
            start = middleCol + 1
        else // we found the peak
            return largestNum

        console.log('\n')
    }

}

// binary search column in matrix and returns the index of the greatest number
// found. 
const findHighest = (matrix, colNumber, colLen) => {
    let start = 0
    let end = colLen

    while(start < end){
        let middle = Math.ceil((start + end) / 2)
        // console.log(middle)
        // console.log("middle is: ", middle)
        let middleNum = matrix[middle][colNumber] //10
        // console.log(middleNum)
        // look above and below our middle num for a larger num
        if(matrix[middle - 1][colNumber] > middleNum){
            // console.log("found larger number:", matrix[middle - 1][colNumber])
            end = middle - 1
        }
        else if(matrix[middle + 1][colNumber] > middleNum)
            start = middle + 1
        // else we found highest number in the col
        else 
            return middle
    }
}

// console.log(findHighest(matrix, 5, 10))
console.log("findPeak is returning: ",findPeak(matrix))