import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

container: {
    paddingHorizontal: 30,
    paddingVertical: 40,
},
loginButton: {
    alignSelf: 'center',
    width: 200,
    marginTop: 50
},
heading: {
    fontFamily: "DeliusUnicase-Bold",
    textAlign: 'left',
    fontSize: 20,
    color: '#f2f2f2',
    marginTop: 40
},
signUpLinkDiv: {
    marginTop: 50,
    alignContent: 'center',
    paddingHorizontal: 20
},
forgotPasswordDiv: {
    marginTop: 50,
    alignContent: 'center',
    paddingHorizontal: 20
},
signUpLink: {
    color: '#f2f2f2',
    fontFamily: "DeliusUnicase-Bold",
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: "underline",

}

});

export default styles;