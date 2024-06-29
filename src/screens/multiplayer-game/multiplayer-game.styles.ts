import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 80
    },
    modal: {
        position: "absolute",
        backgroundColor: "#CDB1D1",
        bottom: 40,
        left: 30,
        right: 30,
        padding: 30,
        borderWidth: 3,
        borderColor: "#e6e6ff"
    },
    modalText: {
        color: "#f2f2f2",
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
        color: "#CDB1D1",
    },
    playerUsername: {
        color: "#CDB1D1",
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
