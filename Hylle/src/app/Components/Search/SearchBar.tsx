import { styles } from './SearchStyle';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, View, Text } from "react-native";
import {  router } from "expo-router";


export default function SearchBar() {

    return (
        <View>
            <TouchableOpacity style={styles.SearchBarContainer} onPress={()=>{
                router.push({
                    pathname:"/SearchBooksPage"
                })
            }}>
                <FontAwesome style={styles.SearchIcon} name="search" size={24} color="black" />
                <Text style={styles.SearchButton}> What do you want to search?</Text>
            </TouchableOpacity>
        </View>
    )
}