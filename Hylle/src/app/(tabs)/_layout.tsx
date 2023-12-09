import { Tabs } from "expo-router";
import { MaterialCommunityIcons, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import SearchShelfButton from "../Components/Shelves/SearchShelfButton";
import { View } from "react-native";
import AddShelfButton from "../Components/Shelves/AddShelfButton";

export default function TabRoutesLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="Shelves"
        options={{
          title: "Shelves",
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="bookshelf" size={size} color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
            <SearchShelfButton />
            <AddShelfButton />
          </View>
          )
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ size, color }) => <FontAwesome name="search" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="Scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ size, color }) => <Ionicons name="scan" size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => <AntDesign name="user" size={size} color={color} />
        }}
      />
    </Tabs>
  )
}