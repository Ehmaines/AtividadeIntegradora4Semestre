import React from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../Firebase";
import styles from "../styles/updateStyles";

export default class UpdatePlate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            price: 0,
            description: "",
            idToChange: "",
            info: [],
        };
        this.ref = firebase.firestore().collection("plates");
        this.changeIdToSelected = this.changeIdToSelected.bind(this);
        this.updateRef = this.updateRef.bind(this);
    }

    componentDidMount() {
        this.read();
    }

    updateRef(text) {
        if (text !== "" || text === undefined) {
                this.ref = firebase.firestore().collection(text);
                this.read();
        }
    }

    read() {
        this.setState({ info: [] });
        this.ref
            .orderBy("name")
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    var cliente = {
                        id: doc.id,
                        name: doc.data().name,
                        price: doc.data().price,
                    };
                    this.setState({ info: [...this.state.info, cliente] });
                });
            });
    }

    update() {
        var newName = this.state.name;
        var newprice = this.state.price;
        var id = this.state.idToChange;
        if (id === "") {
            alert("Id Não pode estar Vazio");
            return;
        }
        if (newName === "") {
            alert("Por favor coloque o nome também");
            return;
        }
        if (newprice === 0) {
            alert("Por favor coloque o Preço também");
            return;
        }
        this.ref.doc(id).update({ name: newName, price: newprice });
        this.read();
        alert("Cliente Atualizado com sucesso!");
        this.setState({name: "", price: 0, idToChange:""})
    }

    changeIdToSelected(id, name, price) {
        this.setState({ idToChange: id, name: name, price: parseInt(price) });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.InsertDataContainer}>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>
                            Nome da Coleção:
                        </Text>
                        <TextInput
                            placeholder="Clientes"
                            onChangeText={(text) => this.updateRef(text)}
                            style={styles.InsertDataTextInput}
                        />
                    </View>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>Id:</Text>
                        <TextInput
                            onChangeText={(text) => this.setState({ id: text })}
                            style={styles.InsertDataTextInput}
                            value={this.state.idToChange}
                        />
                    </View>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>
                            Novo Nome do Usuário:
                        </Text>
                        <TextInput
                            onChangeText={(text) =>
                                this.setState({ name: text })
                            }
                            value={this.state.name}
                            style={styles.InsertDataTextInput}
                        />
                    </View>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>Nova Idade:</Text>
                        <TextInput
                            onChangeText={(text) =>
                                this.setState({ price: parseInt(text) })
                            }
                            value={this.state.price.toString()}
                            style={styles.InsertDataTextInput}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <Button
                        title="ATUALIZAR DADOS"
                        onPress={() => this.update()}
                    />
                </View>
                <Text style={styles.InsertDataText}>
                    Toque no cliente que quer alterar
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
                                    item.price
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
                                    Idade: <Text>{item.price}</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                ></FlatList>
            </View>
        );
    }
}
