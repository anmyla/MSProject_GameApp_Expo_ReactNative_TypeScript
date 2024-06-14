import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React, { ReactElement } from "react";
import styles from "./button.styles";

type MyButtonProps = {
  title: string;
  loading: boolean;
} & TouchableOpacityProps;

export default function MyButton({
  title,
  style,
  loading,
  ...props
}: MyButtonProps): ReactElement {
  return (
    <TouchableOpacity
      disabled={loading}
      {...props}
      style={[styles.button, style]}
    >
      {loading ? (
        <ActivityIndicator color="#000" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
