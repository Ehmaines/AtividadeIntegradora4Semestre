import React from "react";
import { Button, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../styles/createPlateStyle";
import firebase from "../Firebase";

export default class CreatePlate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            priceTxt: "",
            price: 0,
            description: "",
        };
    }

    changePrice(text) {
        let number = parseFloat(text);

        if (text === "" || text == " ") return;

        if (text.slice(-1) === ".") {
        }
        if (
            isNaN(number) ||
            (isNaN(parseFloat(text.slice(-1))) && text.slice(-1) !== ".")
        ) {
            alert("Apenas Numeros Por Favor!");
            this.setState({ priceTxt: "" });
            return;
        }

        this.setState({ price: number });
        this.setState({ priceTxt: number });
    }

    addPlate() {
        var ref = firebase.firestore().collection("plates");
        if (
            this.state.name === "" ||
            this.state.description === "" ||
            this.state.price === 0
        ) {
            alert("Todos os campos são Obrigatórios!!");
            return;
        }
        ref.add({
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        });
        alert("Prato adicionado com sucesso!");
        this.setState({ name: "", priceTxt:"", price: 0, description: "" });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.InsertDataContainer}>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>
                            Nome do Prato:
                        </Text>
                        <TextInput
                            placeholder="Prato"
                            onChangeText={(text) =>
                                this.setState({ name: text })
                            }
                            value={this.state.name}
                            style={styles.InsertDataTextInput}
                        />
                    </View>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>Preço:</Text>
                        <TextInput
                            value={this.state.priceTxt}
                            onChangeText={(text) => {
                                this.changePrice(text);
                            }}
                            style={styles.InsertDataTextInput}
                            keyboardType="numeric"
                            placeholder="Preço"
                        />
                    </View>
                    <View style={styles.InsertDataDetails}>
                        <Text style={styles.InsertDataText}>Descrição:</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical="top"
                            onChangeText={(text) =>
                                this.setState({ description: text })
                            }
                            style={styles.InsertDataTextInputDetails}
                            placeholder="Descrição"
                            value={this.state.description}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={() => {
                            this.addPlate();
                        }}
                    >
                        <Text style={{ color: "#9FFFF5", fontSize: 30 }}>
                            Adicionar Prato
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonBack}>
                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={() => this.props.navigation.navigate("Main")}
                    >
                        <Text style={{ color: "#9FFFF5", fontSize: 20 }}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
