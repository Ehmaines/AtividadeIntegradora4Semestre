import React from "react";
import { Button, Text, View, FlatList } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../Firebase";
import styles from "../styles/deleteStyles";

export default class DeletePlate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            price: 0,
            description: "",
            id: "",
            idToChange: "",
            info: [],
        };
        this.ref = firebase.firestore().collection("plates");
        this.changeIdToSelected = this.changeIdToSelected.bind(this);
    }

    componentDidMount() {
        this.ler();
    }

    ler() {
        this.setState({ info: [] });
        this.ref
            .orderBy("name")
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    var plate = {
                        id: doc.id,
                        name: doc.data().name,
                        price: doc.data().price,
                        description: doc.data().description,
                    };
                    this.setState({ info: [...this.state.info, plate] });
                });
            });
    }

    delete() {
        if (this.state.idToChange === "") {
            alert("Id Não pode estar Vazio");
            return;
        }
        this.ref.doc(this.state.idToChange).delete();
        alert("Prato Deletado com sucesso!");
        this.ler();
    }

    changeIdToSelected(id, nome, idade) {
        this.setState({ idToChange: id, nome: nome, idade: parseInt(idade) });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.InsertDataContainer}>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>Id:</Text>
                        <TextInput
                            onChangeText={(text) => this.setState({ id: text })}
                            style={styles.InsertDataTextInput}
                            value={this.state.idToChange}
                        />
                    </View>
                   
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => this.delete()}
                    >
                        <Text style={{ color: "#9FFFF5", fontSize: 20 }}>
                            Deletar Prato
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonBack}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate("Main")}
                    >
                        <Text style={{ color: "#9FFFF5", fontSize: 20 }}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.InsertDataText}>
                    Toque no prato que quer deletar
                </Text>
                <FlatList
                    style={styles.ListInfo}
                    data={this.state.info}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                this.changeIdToSelected(
                                    item.id,
                                    item.name,
                                    item.price,
                                    item.description
                                )
                            }
                        >
                            <View style={styles.info}>
                                <Text style={styles.textInfoName}>
                                    Id: <Text>{item.id}</Text>
                                </Text>
                                <Text style={styles.textInfoName}>
                                    Prato: <Text>{item.name}</Text>
                                </Text>
                                <Text style={styles.textInfoName}>
                                    Preço: <Text>R$ {item.price}</Text>
                                </Text>
                                <Text style={styles.textInfoName}>
                                    Descrição: <Text>{item.description}</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                ></FlatList>
            </View>
        );
    }
}
