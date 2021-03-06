import React from "react";
import { Text, View } from "react-native";
import { FlatList } from 'react-native';
import {TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../Firebase";
import styles from "../styles/menuStyle";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            refreshing: false,
        };
        this.ref = firebase.firestore().collection("plates");
    }
    componentDidMount() {
        this.read();
    }

    refresh = () => {
        this.setState({ refreshing: true, }, () => {
            this.read();
        });
    };

    read () {
        this.setState({ data: [],}, () => {
            this.ref
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    var plate = {
                        name: doc.data().name,
                        price: doc.data().price,
                        description: doc.data().description,
                    };
                    this.setState({ data: [...this.state.data, plate] });
                });
            })
            .then(() => {
                this.setState({ refreshing: false,});
            });
        }); //Previne que duplique a lista
        
        
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listView}>
                        <FlatList
                            refreshing={this.state.refreshing}
                            onRefresh={this.refresh}
                            style={styles.list}
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <View style={styles.plate}>
                                    <View style={styles.plateName}>
                                        <Text style={styles.plateNameText}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View style={styles.plateDetails}>
                                        <Text style={styles.platePrice}>
                                            Pre??o: {item.price}
                                        </Text>
                                        <Text style={styles.plateDescription}>
                                            Descri????o: {item.description}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        ></FlatList>
                </View>
                <View style={styles.viewBtn}>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                this.props.navigation.navigate("CreatePlate");
                            }}
                        >
                            <Text style={styles.btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnBackView}>
                        <TouchableOpacity
                            style={styles.btnBack}
                            onPress={() => {
                                this.props.navigation.navigate("Main");
                            }}
                        >
                            <Text style={styles.btnBackText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
