import React, { ReactElement, useRef, useState } from "react";
import { ScrollView, TextInput as NativeTextInput, Alert } from "react-native";
import styles from "./login.styles";
import { GradienBackground, TextInput, MyButton } from "../../components";
import { Auth } from "aws-amplify";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";


type LoginProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};


export default function Login({navigation}: LoginProps): ReactElement {
  const passwordRef = useRef<NativeTextInput | null>(null);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const setFormInput = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  /*
  const signup = async () => {
    try {
      const resSignUp = await Auth.signUp({
        username: "test",
        password: "testtest",
        attributes: {
          email: "test@test.com",
          name: "test",
        },
      });
      console.log(resSignUp);
    } catch (error) {
      console.log(error);
      Alert.alert("An error has occured! ", error.message);
    }
  };
*/
  const login = async () => {
    setLoading(true);
    const { username, password } = form;
    try {
      await Auth.signIn(username, password);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Alert.alert("An error has occured! ", error.message);
    }
    setLoading(false);
  };

  return (
    <GradienBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          value={form.username}
          onChangeText={(value) => {
            setFormInput("username", value);
          }}
          returnKeyType="next"
          placeholder="Username"
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
        />
        <TextInput
          value={form.password}
          onChangeText={(value) => {
            setFormInput("password", value);
          }}
          ref={passwordRef}
          returnKeyType="done"
          secureTextEntry
          placeholder="Password"
        />
        <MyButton
          loading={loading}
          style={styles.loginButton}
          title={"Log In"}
          onPress={login}
        />
      </ScrollView>
    </GradienBackground>
  );
}

/*
<MyButton
loading={loading}
style={styles.loginButton}
title={"Sign Up"}
onPress={signup}
/>
*/
