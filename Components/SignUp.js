import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../Firebase";
import styles from "../styles/signUpStyle";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            cpf: "",
        };
        this.ref = firebase.firestore().collection("usuarios");
    }

    signUp = () => {
        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;
        let cpf = this.state.cpf;

        if (this.state.password !== this.state.confirmPassword || this.state.password === undefined || this.state.confirmPassword === undefined) {
            alert("As senhas devem ser iguais");
            return;
        }
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!regex.test(email)){
            alert("Por favor insira um email válido!");
            return;
        }

        this.ref
        .doc(email)
        .get()
        .then((doc) => {
            if (doc.exists) {
                alert("Usuario Já existe");
                return;
            }
            this.ref.doc(email).set({
                cpf: cpf,
                username: username,
                email: email,
                password: password
            })
            alert("Usuário Cadastrado com sucesso!")
            this.props.navigation.navigate("Login")
        })
        .catch((error) => {
            alert("Erro:", error);
        });

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
                    <View style={styles.signUp}>
                        <Text style={styles.textInput}>Usuário: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Usuário"
                            placeholderTextColor="#BFA89E"
                            onChangeText={(text) =>
                                this.setState({ username: text })
                            }
                        />
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.textInput}>Email: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#BFA89E"
                            onChangeText={(text) =>
                                this.setState({ email: text })
                            }
                        />
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.textInput}>Senha: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#BFA89E"
                            secureTextEntry={true}
                            onChangeText={(text) =>
                                this.setState({ password: text })
                            }
                        />
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.textInput}>Confirmar Senha: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmar Senha"
                            placeholderTextColor="#BFA89E"
                            secureTextEntry={true}
                            onChangeText={(text) =>
                                this.setState({
                                    confirmPassword: text,
                                })
                            }
                        />
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.textInput}>CPF: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="CPF"
                            placeholderTextColor="#BFA89E"
                            onChangeText={(text) =>
                                this.setState({ cpf: text })
                            }
                        />
                    </View>
                    <View style={styles.button}>
                        <LinearGradient
                            colors={["#9FFFF5", "#A1B5D8"]}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 0, y: 1 }}
                        >
                            <TouchableOpacity
                                style={styles.btnSignUp}
                                onPress={() => {
                                    this.signUp();
                                }}
                            >
                                <Text style={styles.btnText}>SignUp</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={styles.signUp}>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate("Login")
                            }
                        >
                            <Text style={styles.backBtnTxt}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}
