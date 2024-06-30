import { Image, Text, View } from "react-native";
import { ReactElement, useEffect, useState } from "react";
import Board from "../game-board/board";
import styles from "./game.styles";
import { BoardState, Square, isBoardEmpty } from "../../utils";
import { isTerminal, getBestMove, useSounds } from "../../utils";
import MyButton from "../buttons/buttons";
import { useSettings, difficulty } from "../../contexts/settings-context";
import { AntDesign } from "@expo/vector-icons";

type GameProps = {};

export default function Game({}: GameProps): ReactElement {
  const [state, setState] = useState<BoardState>(Array(9).fill(null));
  const [turn, setTurn] = useState<"HUMAN" | "BOT">(
    Math.random() < 0.5 ? "HUMAN" : "BOT"
  );
  const [isHumanMaximizing, setIsHumanMaximizing] = useState<boolean>(true);
  const gameResult = isTerminal(state);
  const [betweenGame, setBetweenGame] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [winsCount, setWinsCount] = useState({
    wins: 0,
    losses: 0,
    draws: 0,
  });

  const playSound = useSounds();
  const {settings} = useSettings();

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

    // Update history
    const nextHistory = history.slice(0, currentMove + 1).concat([stateCopy]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
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
    setHistory([Array(9).fill(null)]);
    setTurn(Math.random() < 0.5 ? "HUMAN" : "BOT");
    setBetweenGame(false)
  };

  useEffect(() => {
    if (gameResult) {
      setBetweenGame(true);
      const winner = getWinner(gameResult.winner);
      if (winner === "HUMAN") {
        playSound("win");
        if(!betweenGame) {
        setWinsCount({ ...winsCount, wins: winsCount.wins + 1 });
        }
      }
      if (winner === "BOT") {
        playSound("loss");
        if(!betweenGame) {
        setWinsCount({ ...winsCount, losses: winsCount.losses + 1 });
        }
      }
      if (winner === "DRAW") {
        playSound("draw");
        if(!betweenGame) {
        setWinsCount({ ...winsCount, draws: winsCount.draws + 1 });
        }
      }
    } else if (turn === "BOT") {
      if (isBoardEmpty(state)) {
        const posMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        const firstMove = posMoves[Math.floor(Math.random() * posMoves.length)];
        move(firstMove, "X");
        setIsHumanMaximizing(false);
        setTurn("HUMAN");
      } else {
        const best = getBestMove(state, !isHumanMaximizing, 0, parseInt(settings ? settings.difficulty : '1'));
        move(best, isHumanMaximizing ? "O" : "X");
        setTurn("HUMAN");
      }
    }
  }, [state, turn]);

  const handleStepBack = () => {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
      setState(history[currentMove - 1]);
    }
  };

  const handleStepForward = () => {
    if (currentMove < history.length - 1) {
      setCurrentMove(currentMove + 1);
      setState(history[currentMove + 1]);
    }
  };

  const thisResult = () => {
    if (gameResult) {
      const winner = getWinner(gameResult.winner);
      if (winner === "HUMAN") {
        return "You Won!";
      } else if (winner === "BOT") {
        return "You Lost!";
      } else {
        return "It's a draw!";
      }
    }
  };

  return (
    <View style={styles.game}>
      <Image
        style={styles.logo}
        source={require("../../../assets/images/logo2.png")}
      />
      <View style={styles.difficulty}>
        <Text style={styles.difficultyText}>Level: {settings ? difficulty[settings.difficulty] : 'Breezy'}</Text>
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
          disabled={Boolean(isTerminal(state)) || turn !== "HUMAN" || betweenGame}
          state={state}
          onPlay={handlePlay} 
          />
      </View>
      {betweenGame && (
        <View style={styles.modal}>
          <Text style={styles.modalText}>{thisResult()}</Text>
          <View style={styles.buttonContainer}>
            <AntDesign
              name="caretleft"
              size={24}
              color="#f2f2f2"
              onPress={handleStepBack}
              style={styles.stepButton}
            />
            <MyButton title="Start" onPress={() => { newGame()}}/>
            <AntDesign
              name="caretright"
              size={24}
              color="#f2f2f2"
              onPress={handleStepForward}
              style={styles.stepButton}
            />
          </View>
        </View>
      )}
    </View>
  );
}
