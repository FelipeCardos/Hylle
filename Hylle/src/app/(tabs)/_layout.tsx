import React from "react";
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
        name="Profile"
        options={{
          title: "Profile",
        }}
      />

    </Tabs>
  )
}