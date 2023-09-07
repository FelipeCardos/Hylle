import api from "@/Services/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface Shelf {
    id_shelf: string,
    User_id: string,
    title: string,
    creation_time: string,
}

export default function ShelfFeed(){
    const [shelves, setShelves] = useState<Shelf[]>([]);

    useEffect(()=>{
        getShelves();
    },[]);

    async function getShelves(){
        const userString = await AsyncStorage.getItem("@user");
        if (!userString) {
            return;
        }
        const user = JSON.parse(userString);

        if (!user || !user.id) {
            return;
        }

        try {
            const response = await api.get(`/user/${user.id}/shelves`);
            setShelves(response.data); 
        } catch (error) {
            console.error("Erro ao buscar prateleiras:", error);
        }
    }

    return(
        <View>
            {shelves.map(shelf => (
                <Text key={shelf.id_shelf}>{shelf.title}</Text>
            ))}
        </View>
    )
}
