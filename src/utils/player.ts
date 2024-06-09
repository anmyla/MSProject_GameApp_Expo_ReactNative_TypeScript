import { BoardProps } from "./types";
import { isTerminal, getAvailableMoves, printFormattedBoard } from "./board";



export const getBestMove = (state: BoardProps['squares'], maximizing : boolean, depth = 0): number => {
const childValues: {[key: string] : string} = {};

const getBestMoveRecursive = (state: BoardProps['squares'], maximizing : boolean, depth = 0): number => {    
    const terminalObject = isTerminal(state);
    if(terminalObject) {
        if(terminalObject.winner === 'X') {
            return 100 -depth;
        } else if(terminalObject.winner=== 'O') {
            return - 100 + depth;
        } else {
            return 0;
        } 
    };

    if(maximizing) {
        let best = -100;
        getAvailableMoves(state).forEach(index => {
            const child: BoardProps['squares'] = [...state];
            child[index] = 'X';
            const childValue = getBestMoveRecursive(child, false, depth + 1);
            best = Math.max(best, childValue);
            if(depth === 0) {
                childValues[childValue] = childValues[childValue] ? `${childValues[childValue]}, ${index}`: `${index}`;
            }
        });
        if(depth === 0) {
            const arr = childValues[best].split(',');
            const rand  = Math.floor(Math.random() * arr.length);
            return parseInt(arr[rand]);
        } 
        return best;
    };
    if(!maximizing) {
        let best = 100;
        getAvailableMoves(state).forEach(index => {
            const child: BoardProps['squares'] = [...state];
            child[index] = 'O';
            const childValue = getBestMove(child, true, depth + 1);
            best = Math.min(best, childValue);
            if(depth === 0) {
                childValues[childValue] = childValues[childValue] ? `${childValues[childValue]}, ${index}`: `${index}`;
            }
        }); 
        if(depth === 0) {
            const arr = childValues[best].split(',');
            const rand  = Math.floor(Math.random() * arr.length);
            return parseInt(arr[rand]);
        }
        return best;
    };

    return 0;
};
return getBestMoveRecursive(state, maximizing, depth);
};