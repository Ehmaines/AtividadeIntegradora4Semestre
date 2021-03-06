import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BFA89E",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    InsertDataContainer: {
        width: "100%",
        height: "60%",
        marginTop: 20,
    },
    InsertData: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "98%",
    },
    InsertDataDetails: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50%",
        width: "100%",
        marginBottom: 10,
        marginTop: 10,
    },
    InsertDataTextInputDetails: {
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 2,
        width: "98%",
        height: "85%",
        alignItems: "flex-end",
        fontSize: 25,
        paddingLeft: 10,
    },
    InsertDataText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    InsertDataTextInput: {
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 2,
        width: "50%",
        height: 45,
        alignItems: "flex-end",
        fontSize: 25,
        paddingLeft: 10,
    },
    button: {
        marginTop: 5,
        alignSelf: "center",
        width: "80%",
        borderWidth: 2,
    },
    buttonBack: {
        marginTop: 15,
        alignSelf: "center",
        width: "30%",
        borderWidth: 2,
    },
    btn:{
        width:"100%",
        backgroundColor:"#30292F",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    btnUpdatePlate:{
        width:"100%",
        backgroundColor:"#30292F",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    textInfo: {
        fontWeight: "normal",
    },
    ListInfo: {
        width: "100%",
    },
    info: {
        borderWidth: 1,
        margin: 10,
    },
    textInfoName: {
        margin: 5,
    },
});

export default styles;
