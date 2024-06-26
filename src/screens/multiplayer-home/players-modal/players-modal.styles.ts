import { StyleSheet, Dimensions } from "react-native";


const SCREEN_HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    modalContainer: {
        height: SCREEN_HEIGHT * 0.6,
        marginTop: SCREEN_HEIGHT * 0.4
    },
    searchContainer: {
        padding: 20,
        backgroundColor: "#2a0080"
    },
    playerItem: {
        backgroundColor: "#2a0080",
        borderTopWidth: 1,
        borderColor: "#2a0080",
        padding: 15,
        marginBottom: 20
    }
});

export default styles;
