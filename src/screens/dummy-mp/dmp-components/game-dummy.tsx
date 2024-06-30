import React, { useState, useEffect } from "react";
import { Image, Text, View, Alert } from "react-native";
import Board from "../../../components/game-board/board";
import styles from "../../../components/game/game.styles";
import { isTerminal, useSounds } from "../../../utils";
import MyButton from "../../../components/buttons/buttons";
import { calculateWinner, isBoardFull } from "../../../utils";
import { AntDesign } from '@expo/vector-icons';


type GameProps = {};

export const DummyGame: React.FC<GameProps> = () => {
  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [firstPlayerX, setFirstPlayerX] = useState(Math.random() < 0.5); 
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [draws, setDraws] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [betweenGame, setBetweenGame] = useState(false);
  const playSound = useSounds();


  const xIsNext = currentMove % 2 === 0 ? firstPlayerX : !firstPlayerX;
  const currentSquares = history[currentMove];

  useEffect(() => {
    if (!gameStarted) {
      const alertMessage = firstPlayerX
        ? "Player 1 (X) goes first."
        : "Player 2 (O) goes first.";
      Alert.alert("NEW GAME", alertMessage, [
        { text: "OK", onPress: () => {}, style: 'destructive'},
      ]);
      setGameStarted(true);
      setBetweenGame(false);
    }
  }, [gameStarted, firstPlayerX]);

  const handlePlay = (square: number) => {
    if (currentSquares[square] || calculateWinner(currentSquares)) {
      return;
    }

    const nextSquares = currentSquares.slice();
    nextSquares[square] = xIsNext ? "X" : "O";
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    playSound(xIsNext ? "player1" : "player2");
  };

  const handleStepBack = () => {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
    }
  };

  const handleStepForward = () => {
    if (currentMove < history.length - 1) {
      setCurrentMove(currentMove + 1);
    }
  };

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setFirstPlayerX(Math.random() < 0.5);
    setGameStarted(false);
  };

  const winner = !betweenGame && calculateWinner(currentSquares);
  const isDraw = !winner && isBoardFull(currentSquares);

  useEffect(() => {
    if(!betweenGame)
    if (winner) {
      setBetweenGame(true);
      if (winner === "X") {
        setPlayer1Score(player1Score + 1);
      } else if (winner === "O") {
        setPlayer2Score(player2Score + 1);
      }
    } else if (isDraw) {
      setBetweenGame(true);
      setDraws(draws + 1);
    }
  }, [winner, isDraw]);

  return (
    <View style={styles.game}>
       <Image
        style={styles.logo}
        source={require("../../../../assets/images/logo2.png")}
      />
      <View style={styles.results}>
        <View style={styles.resultsBox}>
          <Text style={styles.resultsBoxText}>-  X  -</Text>
          <Text style={styles.resultsBoxCount}>{player1Score}</Text>
        </View>
        <View style={styles.resultsBox}>
          <Text style={styles.resultsBoxText}>Draw</Text>
          <Text style={styles.resultsBoxCount}>{draws}</Text>
        </View>
        <View style={styles.resultsBox}>
          <Text style={styles.resultsBoxText}>-  O  -</Text>
          <Text style={styles.resultsBoxCount}>{player2Score}</Text>
        </View>
      </View>
      <View style={styles.gameBoard}>
        <Board state={currentSquares} onPlay={handlePlay} disabled={betweenGame} />
      </View>
      {betweenGame && (
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            {winner ? `Winner: ${winner}` : "It's a draw!"}
          </Text>
          <View style={styles.buttonContainer}>
          <AntDesign name="caretleft" size={24} color="#f2f2f2" onPress={handleStepBack} style={styles.stepButton}/>
           <MyButton title="Start" onPress={resetGame}/>
           <AntDesign name="caretright" size={24} color="#f2f2f2" onPress={handleStepForward} style={styles.stepButton}/>
          </View>
        </View>
      )}
    </View>
  );
};
