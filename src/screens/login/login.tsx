import React, { ReactElement, useRef, useState } from "react";
import { ScrollView, TextInput as NativeTextInput } from "react-native";
import styles from "./login.styles";
import { GradienBackground, TextInput, MyButton} from "../../components";

export default function Login(): ReactElement {
    const passwordRef = useRef<NativeTextInput | null>(null);
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);

    const setFormInput = (key : keyof typeof form, value: string) => {
        setForm({...form, [key]: value})
    }

    const login = () => {
        setLoading(true);
        const {username, password} = form;
        console.log(username, password)
        
        setLoading(false);
    }

    return (
    <GradienBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
        value={form.username} 
        onChangeText={(value) => {
            setFormInput('username', value)}}
        returnKeyType="next" 
        placeholder="Username"
        onSubmitEditing={()=>{ passwordRef.current?.focus()

        }}/>
        <TextInput 
        value={form.password}
        onChangeText={(value) => {
            setFormInput('password', value)}}
        ref={passwordRef}
        returnKeyType="done" 
        secureTextEntry 
        placeholder="Password"/>
        <MyButton title={"Log In"} onPress={login}/>
            
      </ScrollView>
    </GradienBackground>

  );
}
