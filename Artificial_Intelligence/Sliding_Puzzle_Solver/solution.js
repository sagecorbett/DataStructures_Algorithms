/*

    ATTENTION: 
    I wrote this probably 2 years ago when I was still pretty new to this. It is ineficient but will solve a board

*/

function slidePuzzle(arr){  
  let Q = new Queue();
  let start = new Node((parent = null), arr, (action = null));

  Q.add(start);

  while (true) {
    // if not having a deep copy causing an issue???
    // get a node from the queue
	  let currentNode = Q.shift();

    // check if this node is real
    if (currentNode === false){
        return 'No solutions';
    } 

    // check if it has an action
    if (currentNode.action) {
        // perform the action on this node
        currentNode.state = makeMove(
            currentNode.state,
            currentNode.action,
            currentNode.zeroIndex
        );
    }


    // check if we now have a solved board
    if (isSolved(currentNode.state)){
        // if it is solved loop backwards storing all the node.actions
        // made and return them
        let movesMade = []
        while(currentNode.parent !== null){
            movesMade.unshift(currentNode.action)
            currentNode = currentNode.parent
        }
        return movesMade;
    }
    // if we don't have solved state find all possible moves on this board
    let possibleMoves = availableMoves(currentNode.state);


    // add to the Q a node with an action of each possible move
	for (let action of possibleMoves[0]) {
		let newNode = new Node(currentNode, currentNode.state, action, possibleMoves[1]);
		Q.add(newNode);
    }
}
 
  
  
  
  
}


// UTILITY FUNCTIONS:

// Queue - This keeps track of all board states
function Queue() {
	this.frontier = [];
	this.add = (node) => this.frontier.push(node);
	this.listAll = () => this.frontier;
	this.removedStates = [];

	this.shift = () => {
		if (this.frontier.length === 0) return false;
		let node = this.frontier.shift();
		this.removedStates.push(node);
		return node;
	};
}


// Node contains:
// - the parent of the board state we are currently on
// - the state of the board currently
// - action which move to take next
function Node(parent, state, action, index) {
	this.parent = parent;
	this.state = state;
    this.action = action;
    this.zeroIndex = index
}

// This checks if our puzzle has been solved
function isSolved(puzzle) {
	// We know that each side of a square is equal so we can find
	// the length of each row by just checking the height of the puzzle
	let side = puzzle.length;

	// just a simple count variable that checks if the numbers are in the correct
	// position as we iterate through the puzzle
	let count = 1;

	// For now I am going to just use to for loops to go through the array in 2n time
	for (let i = 0, n = side; i < n; i++) {
		// if check that sees if the zero is in the right place and if it isn't than return
		// false
		if (puzzle[side - 1][side - 1] !== 0) return false;

		for (let j = 0; j < side; j++) {
			// special if statement that is needed at the end of the puzzle to check for 0
			if (j === side - 1 && i == side - 1 && puzzle[i][j] === 0) return true;

			if (puzzle[i][j] !== count) return false;
			count++;
		}
	}
}

// Returns an array of two elements array[0] is an all possible moves we can make
// array[1] is the index of 0
function availableMoves(puzzle) {
	let moves = [];
	let zeroIndex;
	// NOT HAPPY WITH THIS, but this is just four if statements
	// checking if the tile above, below, left, and right to 0 exist
	// if it does, it adds a it as a possible move

	// find the index of zero
	for (let i = 0, n = puzzle.length; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (puzzle[i][j] === 0) {
				zeroIndex = [i, j];

				// left
				if (puzzle[i][j + 1]) moves.push(puzzle[i][j + 1]);

				// right
				if (puzzle[i][j - 1]) moves.push(puzzle[i][j - 1]);

				// up
				if (puzzle[i + 1] && puzzle[i + 1][j]) moves.push(puzzle[i + 1][j]);

				// down
				if (puzzle[i - 1] && puzzle[i - 1][j]) moves.push(puzzle[i - 1][j]);

				return [moves, zeroIndex];
			}
		}
	}
}

// Takes a board state,
//  an action - the number we want to move,
//  index - where to move the number to
function makeMove(state, action, index) {
    let copyOfState = JSON.parse(JSON.stringify(state))
    
	if (action == false || index == false) return state;
	// a way to shorten this is if action could just be the index of the number
	// we want to move. We would have to fix this in the available moves function
	for (let i = 0, n = state.length; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (state[i][j] === action) {
				let actionNumber = copyOfState[i][j];
				copyOfState[index[0]][index[1]] = actionNumber;
				copyOfState[i][j] = 0;
				return copyOfState;
			}
		}
	}
}


let puzzle1 = [
	[4,1,3],
	[2,8,0],
	[7,6,5]
];
let puzzle2 = [
	[10, 3, 6, 4],
	[ 1, 5, 8, 0],
	[ 2,13, 7,15],
	[14, 9,12,11]
];
let puzzle3 = [
	[ 3, 7,14,15,10],
	[ 1, 0, 5, 9, 4],
	[16, 2,11,12, 8],
	[17, 6,13,18,20],
	[21,22,23,19,24]
];