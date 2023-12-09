import { View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import { Box, HStack } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SearchShelfPage() {
    const [shelves, setShelves] = useState([]);
    useEffect(() => {
        const loadShelves = async () => {
            try {
                const asyncShelves = await AsyncStorage.getItem("@userShelves");
                if (asyncShelves) {
                    const parsedData = JSON.parse(asyncShelves);
                    console.log(parsedData); // Aqui você verá o conteúdo real dos dados

                }
            } catch (error) {
                console.error("Error loading shelves: ", error);
            }
        };
    
        loadShelves();
    }, []);
    return (
        <Box flex={1} flexDirection="column" safeArea>
            <HStack alignItems="center" justifyContent="space-between" w="100%" padding={4}>
                <Box>
                    <TouchableOpacity onPress={() => useRouter().back()}>
                        <Ionicons name="arrow-back" size={30} color={"#CBB26B"} />
                    </TouchableOpacity>
                </Box>
                <Box flex={1} flexDirection="row" justifyContent="flex-end" backgroundColor={"#CBB26B"}>
                    <TextInput
                        style={{ flex: 1, color: "white", paddingHorizontal: 10 }}
                        placeholder="Pesquisar"
                        placeholderTextColor="white"
                    />
                </Box>
            </HStack>
            <Box>
                <FlatList>
                    
                </FlatList>
            </Box>
        </Box>
    );

}
