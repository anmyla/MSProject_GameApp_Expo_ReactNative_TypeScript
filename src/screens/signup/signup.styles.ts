import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

container: {
    paddingHorizontal: 30,
    paddingVertical: 40,
},
loginButton: {
    alignSelf: 'center',
    width: 200,
    marginTop: 40
},
heading: {
    fontFamily: "DeliusUnicase-Bold",
    textAlign: 'left',
    fontSize: 20,
    color: '#f2f2f2',
    marginTop: 20
},
pinInput: {
    color: '#fffff',
    fontFamily: "DeliusUnicase-Bold",
    fontSize: 20,
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: '#6C6B6D',
    borderBottomWidth: 3,
    borderBlockColor: '#ffffff'
}, 
pinInputText: {
    backgroundColor: '#ffffff'
},
resendCode: {
    color: '#f2f2f2',
    fontFamily: "DeliusUnicase-Bold",
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: "underline",
}

});

export default styles;