
import React, { ReactElement } from 'react';
import { Text, SafeAreaView, View } from 'react-native'
import styles from './single-player-games.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '../../config/navigator';
import { Game, GradientBackground } from '../../components';

type SinglePlayerGameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SinglePlayerGame">;
}; 

export default function SinglePlayerGame({ navigation }: SinglePlayerGameProps): ReactElement {
  

  return (
    <GradientBackground>
    <SafeAreaView style= {styles.container}>
      <Game />
    </SafeAreaView>
    </GradientBackground>
  )
}

