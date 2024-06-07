import React, { ReactElement } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";
import { GradienBackground, MyButton } from "../../components";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <GradienBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/images/logo.png")}
        />
        <View>
          <MyButton title="Single PLayer"  />
          <MyButton title="Multi PLayer"  />
          <MyButton title="Login"  />
          <MyButton title="Settings"  />
        </View>
      </ScrollView>
    </GradienBackground>
  );
}
