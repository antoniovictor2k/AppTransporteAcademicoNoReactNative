import { StyleSheet, StatusBar } from 'react-native';

const stylesTelaCampus = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#113036',
    },
    container: {
        marginTop: StatusBar.currentHeight || 0,
        textAlign: 'center',
        flex:1,
        textAlign: 'center',
        justifyItems: 'center',
        justifyContent:'center',
        alignItems:'center',
    },
    titulo: {
        marginTop: 30,
        // marginBottom: 40,
        fontSize: 32,
        fontWeight: 700,
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',
    },
    instituto: {
        fontSize: 20,
        fontWeight: 700,
        color: '#fff',
        textAlign: 'center',
    },
    localizacao: {
        fontSize: 16,
        fontWeight: 700,
        color: '#fff',
        textAlign: 'center',
    },
    resLocalizacao: {
        fontSize: 16,
        fontWeight: 700,
        color: '#ccc',
        textAlign: 'center',
    },
   
    itemContainer: {
        backgroundColor: '#051C21',
        borderRadius: 8,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        // gap:5,
        width: 180, 
        height: 250,
    },
   
    icones: {
        flexDirection:'row'
    },
    developer: {
        marginTop: 50,
        marginBottom: 20,
        color: '#93B8C2',
        textAlign: 'center',

    },
})

export default stylesTelaCampus;
