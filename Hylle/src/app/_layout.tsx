import React from "react";
import { Stack } from "expo-router";

export default function StackLayout(){
    return(
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="Register" options={{headerTitle:'Register', headerShown:true}}/>
        <Stack.Screen name="NewShelf" options={{headerTitle:'Create Shelf', headerShown:false}}/>
    </Stack>
    )
}