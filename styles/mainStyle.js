import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    header:{
        flex:1,
        width:"100%",
        backgroundColor:"#BFA89E",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
    },
    logOut:{
        width:"100%",
        display:"flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    btnLogOut:{
        backgroundColor:"#2274A5",
        borderWidth:2,
        borderColor:"#30292F",
        padding: 10
    },
    btnLogoutText:{
        fontSize:15,
        color:"#9FFFF5"        
    },
    main:{
        flex:2,
        width:"100%",
    },
    imageView:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width:"100%",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
    },
    btnView:{
        flex:1,
        width:"100%",
        display:"flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    // buttons:{
    //     width:"100%",
    //     display:"flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height:"10%",
    // },
    btn:{
        width:200,
        height:50,
        borderRadius:10,
        backgroundColor:"#2274A5",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
    },
    btnText:{
        fontSize:25,
        color:"#9FFFF5"
    },

});

export default styles;
