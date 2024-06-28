import React, { ReactElement, useRef, useState } from "react";
import {
  ScrollView,
  TextInput as NativeTextInput,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "./login.styles";
import { GradientBackground, TextInput, MyButton } from "../../components";
import { Auth } from "aws-amplify";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";
import { RouteProp } from "@react-navigation/native";

type LoginProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Login">;
  route: RouteProp<StackNavigatorParams, "Login">;
};

export default function Login({ navigation, route }: LoginProps): ReactElement {
  const redirect = route.params?.redirect;
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
      redirect ? navigation.replace(redirect) : navigation.navigate("Home");
  } catch (error) {
      console.log(error instanceof Error);
      const errorMessage =
        (error as Error).message ||
        "An unknown error while signing in has occurred";
      Alert.alert("An error has occured while logging in! ", errorMessage);
    }
    setLoading(false);
  };

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Username:</Text>
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
        <Text style={styles.heading}>Password:</Text>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
          style={styles.forgotPasswordDiv}
        >
          <Text style={styles.signUpLink}>Forgot Password?</Text>
        </TouchableOpacity>

        <MyButton
          loading={loading}
          style={styles.loginButton}
          title={"Log In"}
          onPress={login}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={styles.signUpLinkDiv}
        >
          <Text style={styles.signUpLink}>New Here? Sign Up now! </Text>
        </TouchableOpacity>
      </ScrollView>
    </GradientBackground>
  );
}
