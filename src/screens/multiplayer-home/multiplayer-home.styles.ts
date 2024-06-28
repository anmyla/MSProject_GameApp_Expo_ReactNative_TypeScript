import { StyleSheet } from "react-native";
import { globalStyles } from "../../utils";

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    item: {
        backgroundColor: '#000000',
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#f2f2f2',
        marginBottom: 20
    },
    itemTitle: {
        color: '#f2f2f2',
        textAlign: "center",
        fontSize: 17,
        marginBottom: 10
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    newGameButton: {
        backgroundColor: '#f2f2f2',
        padding: 20,
        paddingBottom: 30
    },
    newGameButtonText: {
        color: '#000000',
        textAlign: "center",
        fontSize: 17
    },
    itemBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});

export default styles;
