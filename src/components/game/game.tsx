import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { ReactElement, useState } from "react";
import Board, { calculateWinner } from "../game-board/board";
import styles from "./game.styles";
import { BoardProps } from "../../utils";
import { isBoardFull, printFormattedBoard, isTerminal, getBestMove } from "../../utils";

type GameProps = {} 

export default function Game({}:GameProps): ReactElement{
    //for debugging purposes
    const[state, setState] = useState<BoardProps['squares']>([
        null, 'X', null,
        'O', null, 'X',
        '0', '0', 'X'
    ])
      console.log("BEST MOVE : " + getBestMove(state, true))
      printFormattedBoard(state);
      console.log(`\n\nTerminal state: ${JSON.stringify(isTerminal(state))}`);

    //-----------------------  

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const winner = calculateWinner(currentSquares);
  const isDraw = !winner && isBoardFull(currentSquares);

  const moves = history.map((squares, move) => {
    const description =
      move > 0 ? move + ".  Go to move #" + move : "Game starts here";
    return (
      <TouchableOpacity
        style={styles.gameInfoButton}
        key={move}
        onPress={() => jumpTo(move)}
      >
        <Text style={styles.gameInfoButtonText}>{description}</Text>
      </TouchableOpacity>
    );
  });

  if (winner || isDraw) {
    moves.push(
      <TouchableOpacity style={styles.gameInfoButton} key="game-over">
        <Text style={styles.gameInfoButtonText}>Game Over!</Text>
      </TouchableOpacity>
    );
    moves.push(
      <TouchableOpacity
        style={styles.gameInfoButton}
        key="game-over"
        onPress={resetGame}
      >
        <Text style={styles.gameRestart}>Start Again!</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.game}>
      <View style={styles.gameBoard}>
        <Text style={styles.title}>TicTacToe</Text>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </View>
      <ScrollView style={styles.gameInfo}>
        {moves.map((move, index) => (
          <View key={index}>{move}</View>
        ))}
      </ScrollView>
    </View>
  );
};
