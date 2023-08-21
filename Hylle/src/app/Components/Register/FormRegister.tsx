import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import api from '../../../Services/Api';
import { useRouter} from 'expo-router';


export default function FormRegister(){
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    async function registerNewUser(data:object){
        console.log(data)
        await api.post('oauth/register', data).then((res)=>{
            if(res.status === 200){
                console.log('User registered successfully');
                useRouter().replace('/');

            }
            else
                console.log("error" + res);
        })
    }

    function handleRegister() {
        if (
            username === '' ||
            email === '' ||
            firstName === '' ||
            lastName === '' ||
            password === '' ||
            passwordConfirmation === ''
        ) {
            Alert.alert('Please fill in all fields.');
            return;
        }
    
        if (password !== passwordConfirmation) {
            Alert.alert('Passwords do not match.');
            return;
        }
    
        const newUser = {
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
        };
        registerNewUser(newUser);
    }
    

    return(
        <ScrollView>
            <Text>Username</Text>
            <TextInput onChangeText={setUsername}></TextInput>
            <Text>Email</Text>
            <TextInput onChangeText={setEmail}></TextInput>
            <Text>First Name</Text>
            <TextInput onChangeText={setFirstName}></TextInput>
            <Text>Last Name</Text>
            <TextInput onChangeText={setLastName}></TextInput>
            <Text>Password</Text>
            <TextInput onChangeText={setPassword}></TextInput>
            <Text>Password Confirmation</Text>
            <TextInput onChangeText={setPasswordConfirmation}></TextInput>
            <TouchableOpacity onPress={handleRegister}>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}