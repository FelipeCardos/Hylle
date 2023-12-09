import api from "@/Services/Api";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, FlatList, RefreshControl, Image } from "react-native";
import { styles } from "./ShelvesStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, router } from "expo-router";

interface Shelf {
  id: string;
  title: string;
  creationTime: string;
}

const ShelfFeed = () => {
  const [shelves, setShelves] = useState<Shelf[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getShelves = async () => {
    try {
      setRefreshing(true);

      const userString = await AsyncStorage.getItem("@user");
      if (!userString) {
        return;
      }
      const user = JSON.parse(userString);

      if (!user || !user.id) {
        return;
      }

      const response = await api.get(`/user/${user.id}/shelves`);
      setShelves(response.data);
      await AsyncStorage.setItem("@userShelves", JSON.stringify(response.data));
    } catch (error) {
      console.error("Erro ao buscar prateleiras:", error);
    } finally {
      console.log(shelves);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getShelves();
  }, []);

  const handleRefresh = () => {
    getShelves();
  };

  const renderItem = ({ item }: { item: Shelf }) => (
    <View style={styles.ShelfListItem}>
        <TouchableOpacity onPress={()=>{
          router.push({
            pathname:"/Books/[id,title]",
            params:{id:item.id, title:item.title},
          })
        }}>
          <View>
            <Image
              source={require('assets/shelfImage.jpg')}
              style={styles.image}
              resizeMode="contain"
            />
            <Text>{item.title}</Text>
            <Text>{item.id}</Text>
          </View>
        </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.ShelfListContainer}>
      <FlatList
        data={shelves}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      />
    </View>
  );
};

export default ShelfFeed;
