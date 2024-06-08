import { BoardProps, BoardResult, Moves } from './types';


export function isBoardFull(squares: (string | null)[]) {
    return squares.every((square) => square);
  }
  
  export function isBoardEmpty(squares: (string | null)[]) {
    return squares.every((square) => square === null);
  }

export const printFormattedBoard = (state: BoardProps["squares"]): void => {
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
  
    console.log(formattedString);
  }
  

export const isTerminal = (state: BoardProps["squares"]): BoardResult | false => {
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