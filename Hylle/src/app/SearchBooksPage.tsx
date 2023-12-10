import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './Components/Search/SearchStyle';
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import axios, { AxiosResponse } from 'axios';
import {GOOGLE_BOOKS_URL,GET_GOOGLE_BOOKS_BY_NAME_ENDPOINT,GOOGLE_BOOKS_KEY_HEADER} from 'Services/Api';

interface VolumeInfo {
  title: string;
  // outras propriedades relevantes do volume...
}

interface GoogleBookItem {
  id: string;
  volumeInfo: VolumeInfo;
  // outras propriedades relevantes do livro...
}

export default function SearchBooksPage() {
  const [search, setSearch] = useState<string>('');
  const [googleSearchBooks, setGoogleSearchBooks] = useState<GoogleBookItem[]>([]);

  const searchBooks = async (text: string) => {
    setSearch(text); // Atualiza o estado do texto de busca
    if (text.length > 2) { // Verifica se a string de busca é suficiente para iniciar a busca
      try {
        const response: AxiosResponse<{ items: GoogleBookItem[] }> = await axios.get(
          `${GOOGLE_BOOKS_URL}${GET_GOOGLE_BOOKS_BY_NAME_ENDPOINT}${text}${GOOGLE_BOOKS_KEY_HEADER}`
        );
        setGoogleSearchBooks(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    } else {
      setGoogleSearchBooks([]); // Limpa os resultados se o texto de busca for insuficiente
    }
  };

  const renderItem = ({ item }: { item: GoogleBookItem }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item.volumeInfo.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => useRouter().back()}>
          <Ionicons name="arrow-back" size={30} color={"#CBB26B"} />
        </TouchableOpacity>
        <View style={styles.SearchInputContainer}>
          <TouchableOpacity>
            <FontAwesome style={styles.SearchIcon} name="search" size={20} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.SearchInput}
            placeholder="Search"
            value={search}
            onChangeText={(text) => searchBooks(text)} // Chama a função de busca ao alterar o texto
          />
        </View>
      </View>
      <FlatList
        data={googleSearchBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // Outras props da FlatList, se necessário
      />
    </SafeAreaView>
  );
}
