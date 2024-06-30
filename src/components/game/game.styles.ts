import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
  logo: {
    height: 140,
    maxWidth: '100%',
    resizeMode: 'contain',
    marginTop: 0,
    marginBottom: 0
},
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

      game: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -90

      },
      gameBoard: {
        marginBottom: 5,
        marginTop: -20,
      },
      modal: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: -120,
        padding: 10,
        borderWidth: 1,
        borderColor: '#999',
        width: 250,

      },
      modalText: {
          fontFamily: "DeliusUnicase-Bold",
          color: '#ffffff',
          fontSize: 20,
          textAlign: 'center',
          marginBottom: 20
      },
      buttonModal1: {
          width: 180,
          alignSelf: 'center',
          backgroundColor: '#B8B3D9'
      },
      title: {
        fontSize: 40,
        fontFamily: "DeliusUnicase-Bold",
        borderWidth: 1,
        borderColor: '#999',
        paddingTop: 6,
        paddingLeft: 6,
        paddingBottom: 6,
        alignItems: 'center',
        marginBottom: 5,
        color: '#fff',
        width: 250,
      },
      difficulty: {
        fontSize: 40,
        width: 250,
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
      },
      results: {
        marginTop: 10,
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
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
      stepButton: {
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },   

});

export default styles;


