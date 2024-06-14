import React, { ReactElement } from "react";
import { View, ScrollView, Image, Text, TextInput } from "react-native";
import styles from "./login.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";
import { GradienBackground, MyButton } from "../../components";

type LoginProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Login">;
};

export default function Login({ navigation }: LoginProps): ReactElement {
  return (
    <GradienBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput />
      </ScrollView>
      <View>
        <Text>Login</Text>
      </View>
    </GradienBackground>
  );
}
