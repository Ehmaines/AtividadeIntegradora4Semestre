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
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
    },
    input: {
        width: '60%',
        fontSize: 25,
        color: "#BFA89E",
        padding: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "#A1B5D8",
        margin: 5,
    },
    textInput: {
        color: "#9FFFF5",
        fontSize: 25,
        width: '25%',
        alignSelf: "center",
    },
    button:{
        width:"100%",
        display:"flex",
        alignItems: "center",
        justifyContent:"center",
        marginTop: 30,
    },
    btnLogin:{
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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    signUpTxt:{
        fontSize:20,
        color: "#BFA89E"
    },
    signUpBtnTxt: {
        fontSize: 20,
        fontWeight:"700",
        textDecorationLine: "underline",
        color:"#9FFFF5"
    }

});

export default styles;