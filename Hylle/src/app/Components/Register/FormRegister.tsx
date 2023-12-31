import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import api from '../../../Services/Api';
import { useRouter } from 'expo-router';


export default function FormRegister() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    async function registerNewUser(data: object) {
        console.log(data)
        await api.post('oauth/register', data).then((res) => {
            if (res.status === 200) {
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


    return (
        <View className="w-3/4
                        h-3/4
                        rounded-lg
                        items-stretch ...">
            <View>
                <TextInput onChangeText={setUsername}
                    placeholder='Username'
                    className='w-full
                                       block
                                       rounded-md
                                       py-2
                                       bg-white
                                       pl-5
                                       pr-3
                                       shadow-sm'/>
            </View>
            <View>
                <TextInput onChangeText={setEmail}
                    placeholder='Email'
                    className='w-full
                            block
                            rounded-md
                            py-2
                            bg-white
                            pl-5
                            pr-3
                            shadow-sm
                            mt-4'/>
            </View>
            <TextInput onChangeText={setFirstName}
                placeholder='First Name'
                className='w-full
                            block
                            rounded-md
                            py-2
                            bg-white
                            pl-5
                            pr-3
                            shadow-sm
                            mt-4'/>
            <View>
                <TextInput onChangeText={setLastName}
                    placeholder='Last Name'
                    className='w-full
                            block
                            rounded-md
                            py-2
                            bg-white
                            pl-5
                            pr-3
                            shadow-sm
                            mt-4'/>
            </View>
            <TextInput onChangeText={setPassword}
                placeholder='Password'
                className='w-full
                            block
                            rounded-md
                            py-2
                            bg-white
                            pl-5
                            pr-3
                            shadow-sm
                            mt-4'/>
            <View>
            </View>
            <TextInput onChangeText={setPasswordConfirmation}
                placeholder='Password Confirmation'
                className='w-full
                            block
                            rounded-md
                            py-2
                            bg-white
                            pl-5
                            pr-3
                            shadow-sm
                            mt-4'/>
            <View>
                <TouchableOpacity onPress={handleRegister}
                    className='self-end
                              bg-gold
                              mt-12
                              w-full
                              py-3
                              rounded-lg'>
                    <Text className='text-darkBlue
                                    text-xl
                                    text-center
                                    items-center
                                    justify-center'>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}