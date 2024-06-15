import React, { ReactElement, useRef, useState } from "react";
import {
  ScrollView,
  TextInput as NativeTextInput,
  Alert,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./signup.styles";
import { GradienBackground, TextInput, MyButton } from "../../components";
import { Auth } from "aws-amplify";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";

type SignUpProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SignUp">;
};

export default function SignUp({ navigation }: SignUpProps): ReactElement {
  const passwordRef = useRef<NativeTextInput | null>(null);
  const usernameRef = useRef<NativeTextInput | null>(null);
  const emailRef = useRef<NativeTextInput | null>(null);
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
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
  const signUp = async () => {
    setLoading(true);
    const { username, password, email, name } = form;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
        },
      });
      navigation.navigate("Home");
    } catch (error) {
      console.log(error instanceof Error);
      const errorMessage =
        (error as Error).message ||
        "An unknown error while signing in has occurred";
      Alert.alert("An error has occured! ", errorMessage);
    }
    setLoading(false);
  };

  return (
    <GradienBackground>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.heading}>Name:</Text>
          <TextInput
            value={form.name}
            onChangeText={(value) => {
              setFormInput("name", value);
            }}
            returnKeyType="next"
            placeholder="name"
            onSubmitEditing={() => {
              usernameRef.current?.focus();
            }}
          />
          <Text style={styles.heading}>Username:</Text>
          <TextInput
            ref={usernameRef}
            value={form.username}
            onChangeText={(value) => {
              setFormInput("username", value);
            }}
            returnKeyType="next"
            placeholder="Username"
            onSubmitEditing={() => {
              emailRef.current?.focus();
            }}
          />
          <Text style={styles.heading}>Email:</Text>
          <TextInput
            keyboardType="email-address"
            ref={emailRef}
            value={form.email}
            onChangeText={(value) => {
              setFormInput("email", value);
            }}
            returnKeyType="next"
            placeholder="email"
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
          />
          <Text style={styles.heading}>Password:</Text>
          <TextInput
            ref={passwordRef}
            value={form.password}
            onChangeText={(value) => {
              setFormInput("password", value);
            }}
            returnKeyType="done"
            secureTextEntry
            placeholder="Password"
          />
          <MyButton
            loading={loading}
            style={styles.loginButton}
            title={"Register"}
            onPress={signUp}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </GradienBackground>
  );
}
