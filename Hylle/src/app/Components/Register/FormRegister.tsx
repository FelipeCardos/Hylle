import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function FormRegister(){
    return(
        <ScrollView>
            <Text>Username</Text>
            <TextInput></TextInput>
            <Text>Email</Text>
            <TextInput></TextInput>
            <Text>First Name</Text>
            <TextInput></TextInput>
            <Text>Last Name</Text>
            <TextInput></TextInput>
            <Text>Password</Text>
            <TextInput></TextInput>
            <Text>Password Confirmation</Text>
            <TextInput></TextInput>
        </ScrollView>
    );
}