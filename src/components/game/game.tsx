import { Text, View } from "react-native";
import { ReactElement, useEffect, useState } from "react";
import Board from "../game-board/board";
import styles from "./game.styles";
import { BoardState, Square, isBoardEmpty } from "../../utils";
import { isTerminal, getBestMove, useSounds } from "../../utils";
import MyButton from "../buttons/buttons";

type GameProps = {};

export default function Game({}: GameProps): ReactElement {
  const [state, setState] = useState<BoardState>(Array(9).fill(null));

  const [turn, setTurn] = useState<"HUMAN" | "BOT">(
    Math.random() < 0.5 ? "HUMAN" : "BOT"
  );
  const [isHumanMaximizing, setIsHumanMaximizing] = useState<boolean>(true);
  const gameResult = isTerminal(state);
  const [winsCount, setWinsCount] = useState({
    wins: 0,
    losses: 0,
    draws: 0,
  });

  const playSound = useSounds();

  /*
  //for debugging purposes
  console.log("BEST MOVE : " + getBestMove(state, true));
  printFormattedBoard(state);
  console.log(`\n\nTerminal state: ${JSON.stringify(isTerminal(state))}`);
  */

  const move = (square: number, symbol: "X" | "O"): void => {
    const stateCopy: BoardState = [...state];
    if (stateCopy[square] || isTerminal(stateCopy)) {
      return;
    }
    stateCopy[square] = symbol;
    setState(stateCopy);
    try {
      if (symbol === "X") {
        playSound("player1");
      } else {
        playSound("player2");
      }
    } catch (error) {
      console.log("SOUND ERROR: " + error);
    }
  };

  const handlePlay = (square: number): void => {
    if (turn !== "HUMAN") {
      return;
    }
    move(square, isHumanMaximizing ? "X" : "O");
    setTurn("BOT");
  };

  const getWinner = (winnerSymbol: Square): "HUMAN" | "BOT" | "DRAW" => {
    if (winnerSymbol === "X") {
      return isHumanMaximizing ? "HUMAN" : "BOT";
    } else if (winnerSymbol === "O") {
      return isHumanMaximizing ? "BOT" : "HUMAN";
    } else {
      return "DRAW";
    }
  };

  const newGame = () => {
    setState(Array(9).fill(null));
    setTurn(Math.random() < 0.5 ? "HUMAN" : "BOT");
  };
  useEffect(() => {
    if (gameResult) {
      const winner = getWinner(gameResult.winner);
      if (winner === "HUMAN") {
        playSound("win");
        setWinsCount({ ...winsCount, wins: winsCount.wins + 1 });
      }
      if (winner === "BOT") {
        playSound("loss");
        setWinsCount({ ...winsCount, losses: winsCount.losses + 1 });
      }
      if (winner === "DRAW") {
        playSound("draw");
        setWinsCount({ ...winsCount, draws: winsCount.draws + 1 });
      }
    } else if (turn === "BOT") {
      if (isBoardEmpty(state)) {
        const posMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        const firstMove = posMoves[Math.floor(Math.random() * posMoves.length)];
        move(firstMove, "X");
        setIsHumanMaximizing(false);
        setTurn("HUMAN");
      } else {
        const best = getBestMove(state, !isHumanMaximizing, 0, 1);
        move(best, isHumanMaximizing ? "O" : "X");
        setTurn("HUMAN");
      }
    }
  }, [state, turn]);

  return (
    <View style={styles.game}>
      <View>
        <Text style={styles.title}>TICTACTOE</Text>
      </View>
      <View style={styles.difficulty}>
        <Text style={styles.difficultyText}>Difficulty: Hard</Text>
      </View>
      <View style={styles.results}>
        <View style={styles.resultsBox}>
          <Text style={styles.resultsBoxText}>Wins</Text>
          <Text style={styles.resultsBoxCount}>{winsCount.wins}</Text>
        </View>
        <View style={styles.resultsBox}>
          <Text style={styles.resultsBoxText}>Draws</Text>
          <Text style={styles.resultsBoxCount}>{winsCount.draws}</Text>
        </View>
        <View style={styles.resultsBox}>
          <Text style={styles.resultsBoxText}>Losses</Text>
          <Text style={styles.resultsBoxCount}>{winsCount.losses}</Text>
        </View>
      </View>
      <View style={styles.gameBoard}>
        <Board
          disabled={Boolean(isTerminal(state)) || turn !== "HUMAN"}
          state={state}
          onPlay={handlePlay}
        />
      </View>
      {gameResult && (
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            {getWinner(gameResult.winner) === "HUMAN" && "You Won!"}
            {getWinner(gameResult.winner) === "BOT" && "You Lost!"}
            {getWinner(gameResult.winner) === "DRAW" && "It's a draw!"}
          </Text>
          <MyButton style={styles.buttonModal1} title={"Play Again!"} onPress={() => newGame()}></MyButton>
        </View>
      )}
    </View>
  );
}
