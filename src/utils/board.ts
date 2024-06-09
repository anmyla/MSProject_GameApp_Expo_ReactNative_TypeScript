import { BoardProps, BoardResult, BoardState, Moves } from './types';


export function isBoardFull(squares: BoardState) {
    return squares.every((square) => square);
  }
  
  export function isBoardEmpty(squares: BoardState) {
    return squares.every((square) => square === null);
  }

export const printFormattedBoard = (state: BoardState): void => {
    let formattedString = "";
  
    state.forEach((square, index) => {
      formattedString += square ? ` ${square} |` : '   |';
  
      if ((index + 1) % 3 === 0) {
        formattedString = formattedString.slice(0, -1); // Remove the last pipe character
        if (index < 8) {
          formattedString += '\n\n\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\n'; // Print the separator line
        }
      }
    });
  
    console.log('\n\n' + formattedString);
  }
  
export const getAvailableMoves = (squares: (string | null)[]) => {
    const moves: Moves[] = [];
    squares.forEach((square, index) => {
      if(square === null){
        moves.push(index as Moves);
      }
    })
    return moves;
  }  

export const isTerminal = (state: BoardState): BoardResult | false => {
    if(isBoardEmpty(state)) return false;

    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let index = 0; index < winningLines.length; index++) {
        const line = winningLines[index];
        const [square1, square2, square3] = line;
        if(state[square1]&& state[square1] === state[square2] && state[square1] === state[square3]) {
            const result: BoardResult = {
                winner: state[square1]
            }
            if (index < 3) {
                result.direction = 'H';
                result.row = index === 0 ? 1 : index === 1 ? 2 : 3;
            }
            if(index >= 3 && index >= 5) {
                result.direction = 'V';
                result.column = index === 3 ? 1 : index === 4 ? 2 : 3;
            }
            if (index > 5) {
                result.direction = 'D';
                result.diagonal = index === 6 ? 'Main' : 'Counter';
            }
            return result;
        }
    }
    if(isBoardFull(state)) {
        return {
            winner: null
        };
    }
    return false;
};

export function calculateWinner(state: BoardState) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  }
  
  



/*
export const printFormattedBoard = (state: BoardProps): void => {
let formattedString = "";
state.forEach((square, index) => {
formattedString += square ? ` ${square} |` : '   |';
if((index + 1 ) % 3 === 0) {
    formattedString = formattedString.slice(0, -1);
    if(index < 8) {
        formattedString += '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n';
    }
}

});
console.log(formattedString);
}
*/