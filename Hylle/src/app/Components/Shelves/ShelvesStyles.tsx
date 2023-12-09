import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import {LinearGradient} from 'expo-linear-gradient';

export const styles = StyleSheet.create({
    AddShelfOpacity: {
      justifyContent: 'center',
      alignItems: 'center',
      height : 50,
      width:50,
    },
    IconAddShelf: {
      width: 30,
      height: 30, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    FeedShelves:{
        flex:1,
        paddingTop:0
    },
    ShelfFromFeed:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#CBB26B',
        height:60,
        flex:1,
        margin:2,
    },
    SearchShelfOpacity:{
      justifyContent: 'center',
      alignItems: 'center',
      height : 50,
      width:50,
    },
    ShelfSearchInput:{
      backgroundColor:"gray",
      width:300,
    },
    ShelfListContainer:{
      flex: 1,
      paddingHorizontal: 10,
      paddingTop: 10,  
    },
    ShelfListItem:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      borderWidth: 1,
      borderColor: '#CBB26B', // Altere a cor da borda conforme necessário
      borderRadius: 5,
      padding: 10,
  
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },

  });
  export const GradientView = styled(LinearGradient)`
  flex: 1;
`;
  