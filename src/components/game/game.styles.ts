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
        position: 'relative'
      },
      gameBoard: {
        marginBottom: 5,
      },
      modal: {
        backgroundColor: '#B8B3D9',
        position: 'absolute',
        bottom: 20,
        left: 30,
        right: 30,
        padding: 30,
        borderWidth: 1,
        borderColor: '#999'
    
    },
    modalText: {
        fontFamily: "DeliusUnicase-Bold",
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },

title: {
  fontSize: 40,
  fontFamily: "DeliusUnicase-Bold",
  borderWidth: 1,
  borderColor: '#999',
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: 14,
  paddingRight: 14,
  alignSelf: 'center',
  marginBottom: 5,
  color: '#fff',
},
difficulty: {
  fontSize: 40,
  borderWidth: 1,
  borderColor: '#999',
  alignSelf: 'center',
  marginBottom: 15,
  marginTop: 15,
  color: '#fff',
},
difficultyText : { 
      fontFamily: "DeliusUnicase-Bold",
      color: '#ffffff',
      fontSize: 20,
      alignSelf: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 32,
      paddingRight: 32
},
results: {
  flexDirection: 'row',
  height: 100,
  alignSelf: 'center',
  marginBottom: 15,
  color: '#fff',

},
resultsBox: {
  borderWidth: 1,
  borderColor: '#999',
  margin: 3,
  height: 80,
  width: 80
},
resultsBoxText: {
  fontFamily: "DeliusUnicase-Bold",
  color: '#ffffff',
  fontSize: 15,
  alignSelf: 'center',
  paddingTop: 10,
  marginBottom: 5

},
resultsBoxCount: {
  fontFamily: "DeliusUnicase-Bold",
  color: '#ffffff',
  fontSize: 20,
  alignSelf: 'center',
  marginTop: 5

},

});

export default styles;


