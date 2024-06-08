import { Text, TouchableOpacity } from "react-native";
import  styles  from "./square.styles";
import { ReactElement } from "react";
import { SquareProps } from "../../utils";

export default function Square({ value, onSquareClick }: SquareProps): ReactElement
 {
    return (
      <TouchableOpacity style={styles.square} onPress={onSquareClick}>
        <Text style={styles.squareText}>{value}</Text>
      </TouchableOpacity>
    );
  }