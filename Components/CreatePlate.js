import React from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../styles/createPlateStyle"
import firebase from "../Firebase";

export default class CreatePlate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            price: 0,
            description: "",
        };
    }

    adicionar() {
        var ref = firebase.firestore().collection("plates");
        ref.add({
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        });
        alert("Prato adicionado com sucesso!");
        this.setState({ name: "", price: 0, description: "" });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.InsertDataContainer}>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>
                            Nome do Prato;
                        </Text>
                        <TextInput
                            placeholder="Nome do Prato"
                            onChangeText={(text) =>
                                this.setState({ name: text })
                            }
                            style={styles.InsertDataTextInput}
                        />
                    </View>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>Descrição:</Text>
                        <TextInput
                            onChangeText={(text) =>
                                this.setState({ description: text })
                            }
                            style={styles.InsertDataTextInput}
                            placeholder="Descrição"
                        />
                    </View>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>Preço:</Text>
                        <TextInput
                            onChangeText={(text) =>
                                this.setState({ price: parseInt(text) })
                            }
                            style={styles.InsertDataTextInput}
                            style={styles.InsertDataTextInput}
                            placeholder="Preço"
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <Button
                        title="Salvar Prato"
                        onPress={() => this.adicionar()}
                    />
                </View>
            </View>
        );
    }
}
