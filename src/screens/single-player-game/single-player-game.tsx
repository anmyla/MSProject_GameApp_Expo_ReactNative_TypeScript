
import React, { ReactElement } from 'react';
import { Text, SafeAreaView, View } from 'react-native'
import styles from './single-player-games.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '../../config/navigator';
import { Game, GradienBackground, MyButton } from '../../components';

type SinglePlayerGameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SinglePlayerGame">;
}; 

export default function SinglePlayerGame({ navigation }: SinglePlayerGameProps): ReactElement {
  return (
    <GradienBackground>
    <SafeAreaView style= {styles.container}>
    <View>
         <Text style= {styles.title}>TICTACTOE</Text>
    </View> 
      <View style= {styles.difficulty}>
         <Text style= {styles.difficultyText}>Difficulty: Hard</Text>
      </View>   
      <View style = {styles.results}>
            <View style={styles.resultsBox}>
              <Text style = {styles.resultsBoxText}>Wins</Text>
              <Text style = {styles.resultsBoxCount}>0</Text>
            </View>
            <View style={styles.resultsBox}>
              <Text style = {styles.resultsBoxText}>Draws</Text>
              <Text style = {styles.resultsBoxCount}>0</Text>
            </View>
            <View style={styles.resultsBox}>
              <Text style = {styles.resultsBoxText}>Losses</Text>
              <Text style = {styles.resultsBoxCount}>0</Text>
            </View>
      </View>
      <Game />
      <View style={styles.modal}>
          <Text style= {styles.modalText}>YOU WON!</Text>
          <MyButton title={'Play Again!'}></MyButton>
      </View>
    </SafeAreaView>
    </GradienBackground>
  )
}

