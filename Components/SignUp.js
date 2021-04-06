import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../styles/signUpStyle";

export default class SignUp extends React.Component {
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
                        />
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.textInput}>Email: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#BFA89E"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.textInput}>Senha: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#BFA89E"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.textInput}>Confirmar Senha: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmar Senha"
                            placeholderTextColor="#BFA89E"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.textInput}>CPF: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#BFA89E"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.button}>
                        <LinearGradient
                            colors={["#9FFFF5", "#A1B5D8"]}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 0, y: 1 }}
                        >
                            <TouchableOpacity style={styles.btnSignUp}>
                                <Text style={styles.btnText}>SignUp</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={styles.signUp}>
                        <TouchableOpacity >
                            <Text style={styles.backBtnTxt}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}
