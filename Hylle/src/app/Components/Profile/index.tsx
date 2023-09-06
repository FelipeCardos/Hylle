import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Defina um tipo para a estrutura do objeto de usuário
interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    status: string;
    role: string;
    firstName: string;
    lastName: string;
}

export default function UserInfoProfile() {
    const [user, setUser] = useState<User>({
        id: "",
        username: "",
        email: "",
        password: "",
        status: "",
        role: "",
        firstName: "",
        lastName: ""
    }); // Inicialize com uma estrutura vazia

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userDataString = await AsyncStorage.getItem("@user");
                if (userDataString) {
                    const userData = JSON.parse(userDataString);
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        getUserData();
    }, []);

    return (
        <View>
            <Text>
                {user.username || "No username available"}
            </Text>
            <Text>
                {user.email || "No username available"}
            </Text>
            <Text>
                {user.firstName || "No username available"}
            </Text>
            <Text>
                {user.lastName || "No username available"}
            </Text>
        </View>
    );
}
