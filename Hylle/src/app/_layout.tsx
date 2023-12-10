import React from "react";
import { Stack } from "expo-router";

export default function StackLayout(){
    return(
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="Register" options={{headerTitle:'Register', headerShown:true}}/>
        <Stack.Screen name="NewShelf" options={{headerTitle:'Create Shelf', headerShown:false}}/>
        <Stack.Screen name="SearchShelf" options={{headerTitle:'', headerShown:false}}/>
        <Stack.Screen name="Books/[id,title]" options={{headerTitle:'', headerShown:true}} />
        <Stack.Screen name="SearchBooksPage" options={{headerTitle:'', headerShown:false}} />
    </Stack>
    )
}