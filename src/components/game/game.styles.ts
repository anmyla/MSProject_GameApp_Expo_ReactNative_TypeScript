import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    gameInfo: {
        marginTop: 5,
      },
    
      gameInfoButtonText: {
        fontSize: 14,
        color: '#fff',
      },
    
      gameInfoButton: {
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#999',
        padding: 3,
        margin: 2
      },
    
      gameRestart: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
      },
      game: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      gameBoard: {
        marginBottom: 5,
      },
      title: {
        fontSize: 50,
        borderWidth: 1,
        borderColor: '#999',
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        marginBottom: 5,
        color: '#fff',
      }

});

export default styles;


