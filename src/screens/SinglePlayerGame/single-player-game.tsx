import React, { ReactElement } from 'react';
import { View, Text, Button } from 'react-native'
import styles from './single-player-games.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '../../config/navigator';

type SinglePlayerGameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SinglePlayerGame">;
}; 
export default function SinglePlayerGame({ navigation }: SinglePlayerGameProps): ReactElement {
  return (
    <View style= {styles.container}>
        <Text style={{ fontFamily: "DeliusUnicase-Bold" }}>Single Player Game</Text>
    </View>
  )
}