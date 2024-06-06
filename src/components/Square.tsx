import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { SquareProps } from "../IProps";

const Square:  React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return (
      <TouchableOpacity style={styles.square} onPress={onSquareClick}>
        <Text style={styles.squareText}>{value}</Text>
      </TouchableOpacity>
    );
  }
  
  export default Square;