import { StyleSheet, View, Pressable, Text } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
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
  },
  status: {
    alignSelf: 'center',
    marginBottom: 5,
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
  },
  square: {
    backgroundColor: '#e8e4f6',
    borderWidth: 1,
    borderColor: '#999',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  squareText: {
    fontSize: 62,
    fontWeight: 'bold',
    color: '#000',
  },
  boardRow: {
    flexDirection: 'row',
  },
  game: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameBoard: {
    marginBottom: 5,
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

  gameRestart: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
});
