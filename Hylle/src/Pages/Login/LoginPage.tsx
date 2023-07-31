import React from "react";
import { View, Text } from "react-native";
import { Login } from '../../Components/Login/Login';

export function LoginPage(){
    return(
        <View style={{flex: 1}}>
            <Login/>
        </View>
    );
}