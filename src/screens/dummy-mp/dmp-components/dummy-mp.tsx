import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import React, { ReactElement, useState } from "react";
import styles from '../../single-player-game/single-player-games.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '../../../config/navigator';
import { GradientBackground } from "../../../components";
import { DummyGame } from "./game-dummy";


type DummyMPProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "DummyMPGame">;
};

export default function DummyMP({ navigation }: DummyMPProps): ReactElement {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <DummyGame/>
      </SafeAreaView>
    </GradientBackground>
  );
}
