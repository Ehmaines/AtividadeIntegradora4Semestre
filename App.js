import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./Components/Menu";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CreatePlate from "./Components/CreatePlate";
import Main from "./Components/Main"
import UpdatePlate from "./Components/UpdatePlate"
import DeletePlate from "./Components/DeletePlate";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false,  }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={Main}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Menu"
                        component={Menu}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="CreatePlate"
                        component={CreatePlate}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="UpdatePlate"
                        component={UpdatePlate}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="DeletePlate"
                        component={DeletePlate}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
