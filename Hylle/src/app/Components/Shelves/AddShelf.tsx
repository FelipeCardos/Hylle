import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from './ShelvesStyles'
import { Link, useRouter } from "expo-router";

export default function AddShelf() {

  function handleAddShelf() {
    useRouter().replace("/NewShelf")
  }

  return (
    <View style={styles.AddShelfOpacity}>
      <Link href={'/NewShelf'} asChild>
        <TouchableOpacity style={styles.IconAddShelf}>
          <AntDesign name="pluscircle" size={30} color={"#CBB26B"} />
        </TouchableOpacity>
      </Link>
    </View>
  );
}


