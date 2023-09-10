import api from "@/Services/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles, GradientView } from "./ShelvesStyles";

interface Shelf {
  id_shelf: string;
  User_id: string;
  title: string;
  creation_time: string;
}

export default function ShelfFeed() {
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
    } catch (error) {
      console.error("Erro ao buscar prateleiras:", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getShelves(); // Chame getShelves() diretamente aqui para buscar os dados quando o componente é montado
  }, []);

  const handleRefresh = () => {
    getShelves();
  };

  return (
    <View style={styles.FeedShelves}>
      <FlatList
        data={shelves}
        renderItem={({ item }) => {
          return (
              <GradientView colors={["#ffffff","#dBc691","#CBB26B"]}>
            <View style={styles.ShelfFromFeed}>
                <Text>{item.title}</Text>
            </View>
              </GradientView>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}
