import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function BookPage(){
    const { id } = useLocalSearchParams<{id:string}>();
    const { title } = useLocalSearchParams<{title:string}>();

    return(
        <View>
            <Stack.Screen options={{headerTitle:`${title}`}}/>
        </View>
    )
}