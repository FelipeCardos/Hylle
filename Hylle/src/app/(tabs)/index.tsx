import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity} from "react-native";


export default function Home(){

    function logout() {
        console.log(AsyncStorage.getItem('@user'))
        AsyncStorage.removeItem('@token');
        AsyncStorage.removeItem('@user');
    }

    return(
        <View>
            <TouchableOpacity onPress={()=>logout()}>
                <Text>
                    logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}