import { View, Text, TouchableOpacity } from "react-native";
import { ReactElement } from "react";
import styles from "./board.styles";
import Square from "../squares/square";
import { BoardProps, Moves, calculateWinner } from "../../utils";

export default function Board({
  state,
  onPlay,
}: BoardProps): ReactElement {
  const winner = calculateWinner(state);
  const status = winner ? "Winner: " + winner : "Next player: " + "isNext"; //fix later

  function handleClick(i: number) {
    if (calculateWinner(state) || state[i]) {
      return;
    }
    onPlay(i);
  }

  return (
    <View>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.boardRow}>
        <Square value={state[0]} onSquareClick={() => handleClick(0)} />
        <Square value={state[1]} onSquareClick={() => handleClick(1)} />
        <Square value={state[2]} onSquareClick={() => handleClick(2)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={state[3]} onSquareClick={() => handleClick(3)} />
        <Square value={state[4]} onSquareClick={() => handleClick(4)} />
        <Square value={state[5]} onSquareClick={() => handleClick(5)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={state[6]} onSquareClick={() => handleClick(6)} />
        <Square value={state[7]} onSquareClick={() => handleClick(7)} />
        <Square value={state[8]} onSquareClick={() => handleClick(8)} />
      </View>
    </View>
  );
}

/*
export default function Board({ isNext, squares, onPlay }: BoardProps): ReactElement {

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    onPlay(i);
  }


  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (isNext ? "X" : "O");


  return (
    <View>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </View>
    </View>
  );

};
*/
