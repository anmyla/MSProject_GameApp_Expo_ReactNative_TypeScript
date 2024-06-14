import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
container: {
    alignItems: "center",
    position: 'relative'
},
logo: {
    height: 150,
    maxWidth: '90%',
    resizeMode: 'contain',
    marginTop: 150,
    marginBottom: 50
},
button: {
    margin: 10
},
infoBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
    marginTop: 30
},
userInfoText: {
    fontFamily: "DeliusUnicase-Regular",
    color : '#f2f2f2',
    fontSize: 14

},
username: {
    fontFamily: "DeliusUnicase-Bold",
    color : '#f2f2f2',
    fontSize: 14
}

});

export default styles;