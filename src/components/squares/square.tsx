import { Text, TouchableOpacity } from "react-native";
import  styles  from "./square.styles";
import { ReactElement } from "react";
import { SquareProps } from "../../utils";

export default function Square({ value, onSquareClick, highlight }: SquareProps): ReactElement
 {
    return (
      <TouchableOpacity style={[styles.square, highlight && styles.highlightedSquare]}
      onPress={onSquareClick}>
        <Text style={styles.squareText}>{value}</Text>
      </TouchableOpacity>
    );
  }