
import React, { ReactElement } from 'react';
import { Text, SafeAreaView } from 'react-native'
import styles from './single-player-games.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '../../config/navigator';
import { Game, GradienBackground } from '../../components';

type SinglePlayerGameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SinglePlayerGame">;
}; 

export default function SinglePlayerGame({ navigation }: SinglePlayerGameProps): ReactElement {
  return (
    <GradienBackground>
    <SafeAreaView style= {styles.container}>
      <Game />
    </SafeAreaView>
    </GradienBackground>
  )
}

