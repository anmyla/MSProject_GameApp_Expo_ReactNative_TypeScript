import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from "./board.styles";
import Square from "../squares/square";
import { BoardProps, calculateWinner, isTerminal } from "../../utils";

export default function Board({
  state,
  onPlay,
}: BoardProps) {
  const gameResult = isTerminal(state);
  const winner = gameResult ? gameResult.winner : null;
  const winningSquares = gameResult && gameResult.line ? gameResult.line : [];

  function handleClick(i: number) {
    if (calculateWinner(state) || state[i]) {
      return;
    }
    onPlay(i);
  }

  const renderSquare = (i: number) => {
    const isWinningSquare = winningSquares.includes(i);
    const scale = useState(new Animated.Value(1))[0];

    useEffect(() => {
      if (winner && isWinningSquare) {
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(scale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }).start();
        });
      }
    }, [winner, isWinningSquare]);

    return (
      <Animated.View style={{ transform: [{ scale }] }} key={i}>
        <Square
          value={state[i]}
          onSquareClick={() => handleClick(i)}
          highlight={isWinningSquare}
        />
      </Animated.View>
    );
  };

  return (
    <View>
      <Text style={styles.status}>{winner ? `Winner: ${winner}` : "Next player"}</Text>
      <View style={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  );
}
