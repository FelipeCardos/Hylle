import React from 'react';
import FormRegister from './Components/Register/FormRegister';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Register(){
    return (
        <SafeAreaView className='bg-mainBlue flex-1 items-center justify-center'>
            <FormRegister/>
        </SafeAreaView>
    )
}