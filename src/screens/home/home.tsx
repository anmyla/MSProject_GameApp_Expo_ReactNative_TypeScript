import React, { ReactElement, useState } from "react";
import { View, ScrollView, Image, Text, Alert } from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";
import { GradientBackground, MyButton } from "../../components";
import { useAuth } from "../../contexts/auth-context";
import { signOut } from "../../utils";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/images/logo.png")}
        />
        <View>
          <MyButton
            title="Single PLayer"
            style={styles.button}
            onPress={() => {
              navigation.navigate("SinglePlayerGame");
            }}
          />
          <MyButton 
            onPress={() => {
              if(user){
                navigation.navigate("MultiplayerHome");
              }
              else{
                navigation.navigate("Login");
              }
            }}
          title="Multi Player" style={styles.button} />
          <MyButton
            loading={signingOut}
            title={user ? "Logout" : "Login"}
            style={styles.button}
            onPress={async () => {
              if (user) {
                setSigningOut(true);
                try {
                  await signOut();
                } catch (error) {
                  Alert.alert("Error!", "Error signning out!");
                }
                setSigningOut(false);
              } else {
                navigation.navigate("Login");
              }
            }}
          />
          <MyButton
            title="Settings"
            style={styles.button}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          />
          <View style={styles.infoBox}>
            {user && (
              <Text style={styles.userInfoText}>
                Logged in as:{" "}
                <Text style={styles.username}>{user.username}</Text>{" "}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
