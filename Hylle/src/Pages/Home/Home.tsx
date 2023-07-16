import React from "react";
import { View, Text, Button } from "react-native";
import { Story } from '../../Components/Story/Story';
import { MainFeed } from "../../Components/MainFeed/MainFeed";

export function Home(){
    return(
        <View>
            <Story/>
            <MainFeed/>
        </View>
    );
}