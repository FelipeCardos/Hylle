import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    SearchBarContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'blue',
        borderWidth:1,
        justifyContent:'center',
        borderRadius:10,
        marginHorizontal:10
    },
    SearchIcon:{
        alignItems:'center',
        marginLeft:5,
    },
    SearchButton:{
        marginLeft:5,
        paddingVertical:10,
        flex:1
    },
    SearchInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'blue',
        borderWidth:1,
        borderRadius:10,
        marginHorizontal:10,
        flex:1
    },
    SearchInput:{
        marginLeft:5,
        paddingVertical:5,
        flex:1,
        paddingHorizontal:5
    }

});