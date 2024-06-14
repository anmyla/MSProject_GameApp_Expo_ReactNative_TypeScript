import React, { ReactElement } from "react";
import { View, ScrollView, Image, Text, TextInput,  } from "react-native";
import styles from "./textInput";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";
import { GradienBackground, MyButton } from "../../components";

export default function TextInputField({  }: TextInput): ReactElement {
  return (
    <TextInput style={styles.textField} placeholder="Username">
      placeholderTextColor= "#000000";
    </TextInput>
  );
}
