import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    gradient: {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    login: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "95%",
        fontSize: 25,
        color: "#BFA89E",
        padding: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "#A1B5D8",
    },
    textInput: {
        color: "#9FFFF5",
        fontSize: 25,
        alignSelf: "center",
    },
    button:{
        width:"100%",
        display:"flex",
        alignItems: "center",
        justifyContent:"center",
        marginTop: 30,
    },
    btnSignUp:{
        width:250,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        borderWidth:2,
        borderColor:"#A1B5D8"
    },
    btnText:{
        fontSize: 20,
        color:"#30292F"
    },
    signUp:{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    backBtnTxt: {
        fontSize: 25,
        fontWeight:"700",
        textDecorationLine: "underline",
        color:"#9FFFF5"
    }
});

export default styles;