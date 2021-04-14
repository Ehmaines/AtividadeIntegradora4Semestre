import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BFA89E",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    InsertData: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
    },
    InsertDataContainer: {
        width: "100%",
    },
    InsertDataText: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 10,
    },
    InsertDataTextInput: {
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 2,
        width: "50%",
        height: 45,
        alignItems: "flex-end",
        fontSize: 25,
        marginLeft: 10,
        paddingLeft: 10,
    },
    button: {
        marginRight: 120,
        marginTop: 25,
        alignSelf: "flex-end",
        width: "40%",
        borderWidth: 2,
    },
});

export default styles;