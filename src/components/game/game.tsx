import { Text, View } from "react-native";
import { ReactElement, useEffect, useState, useRef } from "react";
import Board from "../game-board/board";
import styles from "./game.styles";
import { BoardState, isBoardEmpty } from '../../utils';
import { isTerminal, getBestMove } from '../../utils';
import { Audio } from 'expo-av';
import *  as Haptics from 'expo-haptics';

type GameProps = {};

export default function Game({}: GameProps): ReactElement {
  const [state, setState] = useState<BoardState>(Array(9).fill(null));

  const [turn, setTurn] = useState<"HUMAN" | "BOT">(
    Math.random() < 0.5 ? "HUMAN" : "BOT"
  );
  const [isHumanMaximizing, setIsHumanMaximizing] = useState<boolean>(true);
  const gameResult = isTerminal(state);
  const popSoundRef = useRef<Audio.Sound | null>(null);
  const popSoundRef2 = useRef<Audio.Sound | null>(null);

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
      if (symbol === 'X') {
        popSoundRef.current?.replayAsync();  // Play sound for X
      } else {
        popSoundRef2.current?.replayAsync();  // Play sound for O
      }
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);  // Trigger haptics
    } catch (error) {
      console.log("SOUND ERROR: " + error);
    }
  };




  /*
  const move = (square: number, symbol: "X" | "O"): void => {
    const stateCopy: BoardState = [...state];
    if (stateCopy[square] || isTerminal(stateCopy)) {
      return;
    }
    stateCopy[square] = symbol;
    setState(stateCopy);
    try {
      symbol === 'X' ? popSoundRef.current?.replayAsync() : popSoundRef2.current?.replayAsync();
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      console.log("SOUND ERROR: " + error);
    }
  };
  */

  const handlePlay = (square: number): void => {
    if (turn !== "HUMAN") {
      return;
    }
    move(square, isHumanMaximizing ? "X" : "O");
    setTurn("BOT");
  };

  useEffect(() => {
    if (gameResult) {
      alert("Game Over");
    } else if (turn === "BOT") {
        if (isBoardEmpty(state)) {
          const posMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
          const firstMove =
            posMoves[Math.floor(Math.random() * posMoves.length)];
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

  useEffect(() => {
    const popSoundObject = new Audio.Sound();
    const popSoundObject2 = new Audio.Sound();
    const loadSounds = async () => {
      try {
        await popSoundObject.loadAsync(require("../../../assets/sounds/pop_1.wav"));
        popSoundRef.current = popSoundObject;
      } catch (error) {
        console.log("Error loading pop_1.wav: " + error);
      }

      try {
        await popSoundObject2.loadAsync(require("../../../assets/sounds/pop_2.wav"));
        popSoundRef2.current = popSoundObject2;
      } catch (error) {
        console.log("Error loading pop_2.wav: " + error);
      }
    };

    loadSounds();

    return () => {
      if (popSoundObject) {
        popSoundObject.unloadAsync();
      }
      if (popSoundObject2) {
        popSoundObject2.unloadAsync();
      }
    };
  }, []);

 /* 
  useEffect(() => {
    const popSoundObject = new Audio.Sound();
    const popSoundObject2 = new Audio.Sound();
    const loadSounds = async () => {
      await popSoundObject.loadAsync(
        require("../../../assets/sounds/pop_1.wav")
      );
      popSoundRef.current = popSoundObject;
    };

    const loadSounds2 = async () => {
      await popSoundObject2.loadAsync(
        require("../../../assets/sounds/pop_2.wav")
      );
      popSoundRef2.current = popSoundObject2;
    };
    loadSounds();
    loadSounds2();

    return () => {
      popSoundObject && popSoundObject.unloadAsync();
      popSoundObject2 && popSoundObject2.unloadAsync();
    };
  }, []);

  */

  return (
    <View style={styles.game}>
      <View style={styles.gameBoard}>
        <Text style={styles.title}>TicTacToe</Text>
        <Board
          disabled={Boolean(isTerminal(state)) || turn !== "HUMAN"}
          state={state}
          onPlay={handlePlay}
        />
      </View>
    </View>
  );
}
