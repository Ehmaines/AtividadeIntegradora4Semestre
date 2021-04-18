import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#BFA89E",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    listView: {
        flex: 5,
        alignSelf: "center",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#30292F",
        marginTop: 20,
        height: "85%",
        width: "85%",
        borderRadius: 10,
    },
    plate: {
        margin: 10,
    },
    plateNameText: {
        color: "#9FFFF5",
        fontSize: 30,
    },
    platePrice: {
        color: "#A1B5D8",
        fontSize: 22,
    },
    plateDescription: {
        color: "#A1B5D8",
        fontSize: 22,
    },
    viewBtn: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection:"row",
        marginRight: 10,
    },
    btnView: {
        display: "flex",
        alignSelf: "flex-end",
        marginBottom: 10,
        marginRight:15,
    },
    btnBackText: {
        fontSize:15,
        fontWeight:"bold",
        backgroundColor: "#A1B5D8",
        height: 20,
        width: 100,
        textAlign: "center",
        borderRadius:10,
    },
    btnText: {
        fontSize: 65,
        backgroundColor: "#A1B5D8",
        height: 100,
        width: 100,
        borderRadius: 50,
        textAlign: "center",
    },
});

export default styles;
