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
    color: '#fff',
    fontSize: 18,
    fontFamily: "DeliusUnicase-Bold",
},
choices: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginHorizontal: -5
},
choice: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 5
},
choiceText: {
    color: '#000',
    fontFamily: "DeliusUnicase-Bold",
}, 
switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
}



});

export default styles;