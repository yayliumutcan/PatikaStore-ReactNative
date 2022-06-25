import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
    Header: {
        flexDirection: 'row',
        margin:10,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        marginBottom:3,
        borderColor: 'blue',
        backgroundColor: 'white',
    },
    HeaderTextOne: {
        paddingLeft: 10,
        color: 'blue',
        fontSize: 26,
        fontWeight: '700',
    },
    HeaderTextTwo: {
        color: 'coral',
        fontSize: 26,
        fontWeight: '700',
    },
    SearchContainer: {
        
        backgroundColor: 'white',
        margin:10,
        marginTop:3,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'blue',
    },
    input: {
        paddingLeft: 10,
        fontSize: 18,
    },

});