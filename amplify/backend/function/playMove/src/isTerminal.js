const isBoardFull = (state) => {
    return state.every((square) => square);
}

const isBoardEmpty = (state) => {
    return state.every((square) => square === null);
}

const isTerminal = (state) => {
    if (isBoardEmpty(state)) return false;

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

    for (let index = 0; index < winningLines.length; index++) {
        const line = winningLines[index];
        const [square1, square2, square3] = line;
        if (state[square1] && state[square1] === state[square2] && state[square1] === state[square3]) {
            const result = {
                winner: state[square1],
                line // Return the winning line
            }
            if (index < 3) {
                result.direction = 'H';
                result.row = index === 0 ? 1 : index === 1 ? 2 : 3;
            }
            if (index >= 3 && index < 6) {
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
    if (isBoardFull(state)) {
        return {
            winner: null
        };
    }
    return false;
};

module.exports = isTerminal;