import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import api from "@/Services/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateShelf() {
  const [shelfTitle, setShelfTitle] = useState("");
  const [user, setUser] = useState({ id: 0 }); // Inicialize com um valor padrão

  useEffect(() => {
    const getUser = async () => {
      try {
        const userString = await AsyncStorage.getItem("@user");
        if (userString) {
          const parsedUser = JSON.parse(userString);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Error fetching user from AsyncStorage:", error);
      }
    };
    getUser();
  }, []);

  async function handleCreateShelf() {
    if (shelfTitle === "") {
      alert("The title is null");
    } else {
      const data = {
        title: shelfTitle,
      };

      try {
        // Verifique se user.id está definido antes de usá-lo
        if (user.id) {
          await api.post(`shelf/new?userId=${user.id}`, data);
          alert("Shelf created successfully");
        } else {
          alert("User ID is missing.");
        }
      } catch (error) {
        console.error("Error creating shelf:", error);
        alert("Error creating shelf");
      }
    }
  }

  return (
    <View className="w-3/4 my-0.5 items-center">
      <Text>Give your shelf a name</Text>
      <View className="w-3/4 my-0.5">
        {/** INPUT LOGIN AREA */}
        <TextInput
          placeholder="My shelf"
          value={shelfTitle}
          onChangeText={setShelfTitle}
          className="placeholder:italic border-b-lightGold block w-full rounded-md py-2 pl-5 pr-3"
        />
      </View>

      <Link href={"/(tabs)/Shelves"}>
        <TouchableOpacity className="border-white rounded-xl">
          <Text>Cancel</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
        className="border-white rounded-xl bg-gold"
        onPress={handleCreateShelf}
      >
        <Text>Create</Text>
      </TouchableOpacity>
    </View>
  );
}
