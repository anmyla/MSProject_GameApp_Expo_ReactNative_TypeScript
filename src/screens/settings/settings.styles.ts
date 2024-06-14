import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
container: {
    paddingHorizontal: 30,
    paddingVertical: 40

}, 
field: {
    marginBottom: 30

},
label: {
    color: '#f2f2f2',
    fontSize: 14,
    fontFamily: "DeliusUnicase-Bold",
},
choices: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginHorizontal: -5,
},
choice: {
    backgroundColor: '#171716',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    width: '30%',

},
choiceText: {
    color: '#f2f2f2',
    fontFamily: "DeliusUnicase-Bold",
    textAlign: 'center'
}, 
switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
}



});

export default styles;