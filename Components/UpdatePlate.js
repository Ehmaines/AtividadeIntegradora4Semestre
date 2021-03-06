import React from "react";
import { Text, View, FlatList } from "react-native";
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
    }

    componentDidMount() {
        this.read();
    }

    read() {
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

    update() {
        var newName = this.state.name;
        var newprice = this.state.price;
        var newDescription = this.state.description;
        var id = this.state.idToChange;
        if (id === "") {
            alert("Id Não pode estar Vazio");
            return;
        }
        if (newName === "") {
            alert("Por favor coloque o nome também");
            return;
        }
        if (newDescription === "") {
            alert("Por favor coloque a descrição também");
            return;
        }
        if (newprice === 0) {
            alert("Por favor coloque o Preço também");
            return;
        }
        this.ref.doc(id).update({ name: newName, price: newprice, description: newDescription });
        alert("Prato Atualizado com sucesso!");
        this.read();
        this.setState({ name: "", price: 0, description: "", idToChange: "" });
    }

    changeIdToSelected(id, name, price, description) {
        this.setState({
            idToChange: id,
            name: name,
            price: parseFloat(price),
            description: description,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.InsertDataContainer}>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>Id:</Text>
                        <TextInput
                            enabled={false}
                            onChangeText={(text) => this.setState({ id: text })}
                            style={styles.InsertDataTextInput}
                            value={this.state.idToChange}
                        />
                    </View>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>Novo Prato:</Text>
                        <TextInput
                            onChangeText={(text) =>
                                this.setState({ name: text })
                            }
                            value={this.state.name}
                            style={styles.InsertDataTextInput}
                        />
                    </View>
                    <View style={styles.InsertData}>
                        <Text style={styles.InsertDataText}>Novo Preço:</Text>
                        <TextInput
                            onChangeText={(text) =>
                                this.setState({ price: parseFloat(text) })
                            }
                            value={this.state.price.toString()}
                            style={styles.InsertDataTextInput}
                        />
                    </View>
                    <View style={styles.InsertDataDetails}>
                        <Text style={styles.InsertDataText}>Descrição:</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical="top"
                            placeholder="Descrição"
                            onChangeText={(text) =>
                                this.setState({ description: text })
                            }
                            value={this.state.description}
                            style={styles.InsertDataTextInputDetails}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => this.update()}
                    >
                        <Text style={{ color: "#9FFFF5", fontSize: 20 }}>
                            Atualizar Prato
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
                    Toque no prato que quer alterar
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
                                    preço: <Text>{item.price}</Text>
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
