import React, { ReactElement, useRef } from "react";
import { ScrollView, TextInput as NativeTextInput } from "react-native";
import styles from "./login.styles";
import { GradienBackground, TextInput} from "../../components";

export default function Login(): ReactElement {
    const passwordRef = useRef<NativeTextInput | null>(null);
  return (
    <GradienBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput 
        returnKeyType="next" 
        placeholder="Username"
        onSubmitEditing={()=>{ passwordRef.current?.focus()

        }}/>
        <TextInput 
        ref={passwordRef}
        returnKeyType="done" 
        secureTextEntry 
        placeholder="Password"/>
      </ScrollView>
    </GradienBackground>

  );
}
