/*2. Tic-Tac-Toe Checker
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.*/


function emptySpot (arr){
 
  for (let i = 0; i <= 2; i++){
   let res = arr[i].find (item => item == 0);
   if ( res == 0 ) return true;

  }
  return false;
}


function Checker(arr, symb = 0){
 
 if (arr [0][0] === arr [1][1] && arr [1][1] == arr [2][2] && arr [0][0] == symb ) return true;  
  if (arr [2][0] === arr [1][1] && arr [1][1] == arr [0][2] && arr [2][0] == symb ) return true;  
    
  for (let i = 0; i <= 2; i++) {
     
   if (arr [i][0] == arr [i][1] && arr [i][1] == arr [i][2] && arr [i][0] == symb ) return true;
   
   if (arr [0][i] == arr [1][i] && arr [1][i] == arr [2][i] && (arr [0][i] == symb) ) return true;  
    
  }

return false;
}


function answChecker (arr){
  
  if (Checker(arr, 1)) return 1;
  if (Checker(arr, 2)) return 2;
  return emptySpot(arr) ? -1 :  0;
}


const arr1 = [[1, 2, 2],
             [0, 2, 1],
             [2, 2, 1]];

const arr2 = [[1, 2, 2],
             [0, 0, 1],
             [2, 2, 1]];

const arr3 = [[1, 2, 2],
             [0, 2, 1],
             [1, 1, 1]];

const arr4 = [[1, 2, 2],
             [2, 1, 1],
             [2, 1, 2]];

const arr5 = [[1, 2, 1],
             [0, 0, 1],
             [2, 2, 1]];


console.log(answChecker(arr1) + " = 2 ");
console.log(answChecker(arr2) + " = -1 ");
console.log(answChecker(arr3) + " = 1 ");
console.log(answChecker(arr4) + " = 0 ");
console.log(answChecker(arr5) + " = 1 ");
