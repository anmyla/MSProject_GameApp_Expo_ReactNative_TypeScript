import { Text, TouchableOpacity } from "react-native";
import  styles  from "./square.styles";
import { ReactElement } from "react";


type SquareProps = {
    value: string | null;
    onSquareClick: () => void;
  }

export default function Square({ value, onSquareClick }: SquareProps): ReactElement
 {
    return (
      <TouchableOpacity style={styles.square} onPress={onSquareClick}>
        <Text style={styles.squareText}>{value}</Text>
      </TouchableOpacity>
    );
  }







/*
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { SquareProps } from '../IProps'

const Square:  React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return (
      <TouchableOpacity style={styles.square} onPress={onSquareClick}>
        <Text style={styles.squareText}>{value}</Text>
      </TouchableOpacity>
    );
  }
  
  export default Square;

  */