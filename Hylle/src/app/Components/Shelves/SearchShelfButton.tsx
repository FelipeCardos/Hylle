import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { View } from "react-native";
import { styles } from "../../Components/Shelves/ShelvesStyles";
import { Link } from "expo-router";

export default function SearchShelfButton() {
    return (
        <View style={styles.SearchShelfOpacity}>
            <Link href={'/SearchShelf'} asChild>
                <TouchableOpacity style={styles.IconAddShelf}>
                    <Feather name="search" size={30} color={"#CBB26B"} />
                </TouchableOpacity>
            </Link>
        </View>
    )
}