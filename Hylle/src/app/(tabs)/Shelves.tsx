import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShelfFeed from "../Components/Shelves";

export default function Shelves(){
    return(
        <SafeAreaView className='bg-mainBlue flex-1 items-center justify-center'>
            <ShelfFeed/>
        </SafeAreaView>
    )
}