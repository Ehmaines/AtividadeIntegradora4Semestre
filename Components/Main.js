import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../Firebase";
import styles from "../styles/mainStyle";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logoView}>
                        <Image
                            style={{ height: 140, width: 200 }}
                            source={require("../assets/logo.png")}
                        ></Image>
                    </View>
                    <View style={styles.logOut}>
                        <TouchableOpacity
                            style={styles.btnLogOut}
                            onPress={() => {
                                this.props.navigation.navigate("Login");
                            }}
                        >
                            <Text style={styles.btnLogoutText}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.main}>
                    <ImageBackground style={styles.imageView} source={require("../assets/main.jpg")}>
                    <View style={styles.btnView}>
                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    this.props.navigation.navigate("Menu");
                                }}
                            >
                                <Text style={styles.btnText}>Cardápio</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    this.props.navigation.navigate(
                                        "CreatePlate"
                                    );
                                }}
                            >
                                <Text style={styles.btnText}>Criar Prato</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    this.props.navigation.navigate("UpdatePlate");
                                }}
                            >
                                <Text style={styles.btnText}>Editar Prato</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    this.props.navigation.navigate("Menu");
                                }}
                            >
                                <Text style={styles.btnText}>Remover Prato</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
