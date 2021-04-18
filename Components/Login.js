import React from "react";
import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../Firebase";
import styles from "../styles/loginStyle";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            emailInDb: "",
            passwordInDb: "",
        };

        this.ref = firebase.firestore().collection("usuarios");
    }

    getUserInDB = () => {
        this.ref
            .doc(this.state.email)
            .get()
            .then((doc) => {
                if (!doc.exists) {
                    alert("Usuario não existe");
                    this.setState({
                        emailInDb: "",
                        passwordInDb: "",
                    });
                    return;
                }
                this.setState({
                    emailInDb: doc.data().email,
                    passwordInDb: doc.data().password,
                });
                this.login();
            })
            .catch((error) => {
                alert("Erro:", error);
            });
    };

    login = () => {
        let emailInDb = this.state.emailInDb;
        let passwordInDb = this.state.passwordInDb;
        let email = this.state.email;
        let password = this.state.password;

        if (password !== passwordInDb) {
            alert("Senha Incorreta!");
            return;
        }

        this.setState({
            emailInDb: "",
            passwordInDb: "",
        });

        this.props.navigation.navigate("Main");
    };

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={["#30292f", "#413749", "#435d87", "#2274a5"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    locations={[0.1, 0.2, 0.5, 0.6]}
                    style={styles.gradient}
                >
                    <View style={styles.login}>
                        <Text style={styles.textInput}>Email: </Text>
                        <TextInput
                            keyboardType="email-address"
                            style={styles.input}
                            placeholder="Email"
                            autoCapitalize="none"
                            placeholderTextColor="#BFA89E"
                            onChangeText={(text) => {
                                this.setState({ email: text });
                            }}
                        />
                    </View>
                    <View style={styles.login}>
                        <Text style={styles.textInput}>Senha: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#BFA89E"
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({ password: text });
                            }}
                        />
                    </View>
                    <View style={styles.button}>
                        <LinearGradient
                            colors={["#9FFFF5", "#A1B5D8"]}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 0, y: 1 }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    this.getUserInDB();
                                }}
                                style={styles.btnLogin}
                            >
                                <Text style={styles.btnText}>Login</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.signUpTxt}>
                            Não tem um Usuário?{" "}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate("SignUp")
                            }
                            style={styles.signUpBtn}
                        >
                            <Text style={styles.signUpBtnTxt}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}
