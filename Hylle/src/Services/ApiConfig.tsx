import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthorizationHeader = async () => {
  const token = await AsyncStorage.getItem('@token');
  return {
    Authorization: `Bearer ${token}`,
  };
};
