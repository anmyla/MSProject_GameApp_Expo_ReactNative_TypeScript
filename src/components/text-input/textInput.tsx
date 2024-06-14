import React, { ReactElement, forwardRef } from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";
import styles from "./textInput.styles";

const TextInput = forwardRef<NativeTextInput, NativeTextInputProps>(
  ({ style, ...props }: NativeTextInputProps, ref): ReactElement => {
    return (
      <NativeTextInput
        ref={ref}
        placeholderTextColor={"#171716"}
        style={[styles.textField, style]}
      ></NativeTextInput>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;

/*
export default function TextInput(props: NativeInputProps): ReactElement {
  return (
    <NativeTextInput
      style={styles.textField}
      placeholderTextColor={'#171716'}
      {...props}>
    </NativeTextInput>
  );
}
*/
