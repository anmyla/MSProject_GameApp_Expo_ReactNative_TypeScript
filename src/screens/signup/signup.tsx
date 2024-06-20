import React, { ReactElement, useRef, useState } from "react";
import {
  ScrollView,
  TextInput as NativeTextInput,
  Alert,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator,
  Touchable,
  TouchableOpacity,
} from "react-native";

import styles from "./signup.styles";
import { GradienBackground, TextInput, MyButton } from "../../components";
import { Auth } from "aws-amplify";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";
import OTPInputView from "@twotalltotems/react-native-otp-input";

type SignUpProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SignUp">;
};

export default function SignUp({ navigation }: SignUpProps): ReactElement {
  const passwordRef = useRef<NativeTextInput | null>(null);
  const usernameRef = useRef<NativeTextInput | null>(null);
  const emailRef = useRef<NativeTextInput | null>(null);
  const [step, setStep] = useState<"signUp" | "OTP">("signUp");
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [authConfirming, setAuthConfriming] = useState(false);
  const [authResending, setAuthResending] = useState(false);

  const setFormInput = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

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
      setStep("OTP");
    } catch (error) {
      console.log(error instanceof Error);
      const errorMessage =
        (error as Error).message ||
        "An unknown error while signing in has occurred";
      Alert.alert("An error has occured! ", errorMessage);
    }
    setLoading(false);
  };

  const confirmCode = async (code: string) => {
    setAuthConfriming(true);
    try {
      await Auth.confirmSignUp(form.username, code);
      navigation.navigate("Login");
      Alert.alert("Success!", "You may now log in with your account!");
    } catch (error) {
      console.log(error instanceof Error);
      const errorMessage =
        (error as Error).message ||
        "An unknown error while auth confirmation has occurred";
      Alert.alert("An error has occured! ", errorMessage);
    }
    setAuthConfriming(false);
  };

  const resendCode = async (username: string) => {
    setAuthResending(true);
    try {
      await Auth.resendSignUp(username);
      navigation.navigate("Login");
      Alert.alert("Success!", "You may now log in with your account!");
    } catch (error) {
      console.log(error instanceof Error);
      const errorMessage =
        (error as Error).message ||
        "An unknown error while auth confirmation has occurred";
      Alert.alert("An error has occured! ", errorMessage);
    }
    setAuthResending(false);
  };

  return (
    <GradienBackground>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          {step === "OTP" && (
            <>
              <Text style={styles.heading}>
                Pleaser enter your Authentication pin sent to you via email:
              </Text>
              {authConfirming ? (
                <ActivityIndicator color={"#A59CD1"} />
              ) : (
                <>
                  <OTPInputView
                    pinCount={6}
                    placeholderCharacter="0"
                    placeholderTextColor="#BDBCBF"
                    codeInputFieldStyle={styles.pinInput}
                    codeInputHighlightStyle={styles.pinInputText}
                    onCodeFilled={(code) => {
                      confirmCode(code);
                    }}
                  />
                  {authResending ? (
                    <ActivityIndicator color={"#A59CD1"} />
                  ) : (
                    <TouchableOpacity
                      style={{ paddingHorizontal: 60 }}
                      onPress={() => {
                        resendCode(form.username);
                      }}
                    >
                      <Text style={styles.resendCode}>
                        No code? No Problem! Request another code
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </>
          )}
          {step === "signUp" && (
            <>
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
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </GradienBackground>
  );
}
