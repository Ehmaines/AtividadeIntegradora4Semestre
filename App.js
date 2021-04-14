import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Components/Main";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CreatePlate from "./Components/CreatePlate";
import { LogBox } from "react-native";
const Stack = createStackNavigator();

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

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
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={Main}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="CreatePlate"
                        component={CreatePlate}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
