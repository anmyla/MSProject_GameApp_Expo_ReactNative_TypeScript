import { BoardProps } from "./types";
import { isTerminal, getAvailableMoves, printFormattedBoard } from "./board";

export const getBestMove = (state: BoardProps['squares'], maximizing : boolean, depth = 0): number => {
    const terminalObject = isTerminal(state);
    if(terminalObject) {
        if(terminalObject.winner === 'X') {
            return 100 -depth;
        } else if(terminalObject.winner=== 'O') {
            return - 100 + depth;
        }
    };

    if(maximizing) {
        let best = -100;
        getAvailableMoves(state).forEach(index => {
            const child: BoardProps['squares'] = [...state];
            child[index] = 'X';
            const childValue = getBestMove(child, false, depth + 1);
            best = Math.max(best, childValue);
        }) 
        return best;
    };
    if(!maximizing) {
        let best = 100;
        getAvailableMoves(state).forEach(index => {
            const child: BoardProps['squares'] = [...state];
            child[index] = 'O';
            const childValue = getBestMove(child, true, depth + 1);
            best = Math.min(best, childValue);
        }) 
        return best;
    };
};
