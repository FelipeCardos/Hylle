import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import {LinearGradient} from 'expo-linear-gradient';

export const styles = StyleSheet.create({
    AddShelfOpacity: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      height : 50,
      width:50,
    },
    IconAddShelf: {
      position: 'absolute',
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
        height:100,
        flex:1,
        margin:2,

    }

  });
  export const GradientView = styled(LinearGradient)`
  flex: 1;
`;
  