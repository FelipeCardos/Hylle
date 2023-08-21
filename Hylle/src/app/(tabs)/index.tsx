import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity} from "react-native";

export default function Home(){

    function logout() {
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