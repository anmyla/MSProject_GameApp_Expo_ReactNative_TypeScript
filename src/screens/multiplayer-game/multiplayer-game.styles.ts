import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 80
    },
    modal: {
        position: "absolute",
        backgroundColor: "#2a0080",
        bottom: 40,
        left: 30,
        right: 30,
        padding: 30,
        borderWidth: 3,
        borderColor: "#e6e6ff"
    },
    modalText: {
        color: "#e6e6ff",
        fontSize: 28,
        textAlign: "center",
        marginBottom: 30
    },
    turn: {
        color:  "#e6e6ff",
        fontSize: 22,
        textAlign: "center",
        marginBottom: 20
    },
    gameInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 80
    },
    playerName: {
        color: "#2a0080",
    },
    playerUsername: {
        color: "#2a0080",
        fontSize: 12
    },
    player: {
        width: "40%",
        backgroundColor:  "#e6e6ff",
        borderWidth: 1,
        borderColor: "#dcccff",
        padding: 10
    },
    playerTurn: {
        borderWidth: 3
    },
    vs: {
        width: "10%"
    },
    vsText: {
        color:  "#e6e6ff",
        textAlign: "center"
    }
});

export default styles;
