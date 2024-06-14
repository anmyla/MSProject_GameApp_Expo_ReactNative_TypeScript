import React, { ReactElement } from "react";
import { ScrollView } from "react-native";
import styles from "./login.styles";
import { GradienBackground, TextInput} from "../../components";

export default function Login(): ReactElement {
  return (
    <GradienBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput placeholder="Username"/>
        <TextInput  placeholder="Password"/>
      </ScrollView>
    </GradienBackground>

  );
}
