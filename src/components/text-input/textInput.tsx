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
        placeholderTextColor={"#B8B6C1"}
        style={[styles.textField, style]}
        {...props}
      />
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
