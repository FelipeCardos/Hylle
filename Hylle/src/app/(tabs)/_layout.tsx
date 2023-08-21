import { Tabs } from "expo-router";

export default function TabRoutesLayout() {
  return(
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="Shelves"
        options={{
          title: "Shelves",
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="Scan"
        options={{
          title: "Scan",
        }}
      />

        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
          }}
        />
    </Tabs>
  )
}