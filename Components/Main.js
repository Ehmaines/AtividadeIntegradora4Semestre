import React from "react";
import { Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../Firebase";
import styles from "../styles/mainStyle";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };

        this.ref = firebase.firestore().collection("plates");
    }

    componentDidMount() {
        this.read();
    }

    read() {
        this.ref.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                var plate = {
                    name: doc.data().name,
                    price: doc.data().price,
                    description: doc.data().description,
                };
                this.setState({ data: [...this.state.data, plate] });
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listView}>
                    <FlatList
                    style={styles.list}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <View style={styles.plate}>
                                <View style={styles.plateName}>
                                    <Text style={styles.plateNameText}>{item.name}</Text>
                                </View>
                                <View style={styles.plateDetails}>
                                    <Text style={styles.platePrice}>Preço: {item.price}</Text>
                                    <Text style={styles.plateDescription}>Descrição: {item.description}</Text>
                                </View>
                            </View>
                        )}
                    ></FlatList>
                </View>
                <View style={styles.viewBtn}>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate("CreatePlate");}}>
                    <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
}
