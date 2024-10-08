import React, { ReactElement, useRef, useState } from "react";
import {
    ScrollView,
    TextInput as NativeTextInput,
    Alert,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { GradientBackground, TextInput, MyButton, MyText } from "../../components";
import styles from "./change-password.styles";
import { Auth } from "aws-amplify";
import { useAuth } from "../../contexts/auth-context";
import { useHeaderHeight } from "@react-navigation/elements";

export default function ChangePassword(): ReactElement {
    const headerHeight = useHeaderHeight();
    const { user } = useAuth();
    const newPasswordRef = useRef<NativeTextInput | null>(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        oldPassword: "",
        newPassword: ""
    });
    const setFormInput = (key: keyof typeof form, value: string) => {
        setForm({ ...form, [key]: value });
    };

    const changePassword = async () => {
        const { oldPassword, newPassword } = form;
        setLoading(true);
        try {
            await Auth.changePassword(user, oldPassword, newPassword);
            setForm({
                oldPassword: "",
                newPassword: ""
            });
            Alert.alert("Success!", "Password Changed Successfully!");
        } catch (error) {
            const typedError = error as Error;
            Alert.alert("Error!", typedError.message || "An error has occurred in changing you password!");
        }
        setLoading(false);
    };

    return (
        <GradientBackground>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={headerHeight}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.container}>
                    {!user ? (
                        <MyText style={styles.text}>You are not logged in!</MyText>
                    ) : (
                        <>
                            <MyText weight="400" style={styles.text}>
                                Change Password For Username:{" "}
                                <MyText weight="700">{user.username}</MyText>
                            </MyText>
                            <TextInput
                                secureTextEntry
                                returnKeyType="next"
                                style={{ marginBottom: 20 }}
                                placeholder="Old Password"
                                onSubmitEditing={() => {
                                    newPasswordRef.current?.focus();
                                }}
                                value={form.oldPassword}
                                onChangeText={value => setFormInput("oldPassword", value)}
                            />
                            <TextInput
                                secureTextEntry
                                returnKeyType="done"
                                style={{ marginBottom: 30 }}
                                ref={newPasswordRef}
                                placeholder="New Password"
                                value={form.newPassword}
                                onChangeText={value => setFormInput("newPassword", value)}
                            />

                            <MyButton
                                loading={loading}
                                onPress={changePassword}
                                title="Change Password"
                            />
                        </>
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </GradientBackground>
    );
}
