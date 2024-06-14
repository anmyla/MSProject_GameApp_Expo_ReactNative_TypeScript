import React, { ReactElement } from "react";
import { TextInput as NativeTextInput, TextInputProps as NativeInputProps } from "react-native";
import styles from "./textInput.styles";


export default function TextInput(props: NativeInputProps): ReactElement {
  return (
    <NativeTextInput
      style={styles.textField}
      placeholderTextColor={'#171716'}
      {...props}>
    </NativeTextInput>
  );
}
