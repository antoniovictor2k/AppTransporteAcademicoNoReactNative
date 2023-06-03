import { StyleSheet, StatusBar } from 'react-native';

const stylesTelaCampus = StyleSheet.create({

    main:{

        flex: 1,
        backgroundColor: '#113036',
    },
    container: {
        marginTop: StatusBar.currentHeight || 0,

        textAlign: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },
    titulo: {
        marginTop: 100,
        // marginBottom: 40,
        fontSize: 32,
        fontWeight: 700,
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',


    },
    sobTitulo: {
        marginTop: 0,
        fontSize: 18,
        fontWeight: 700,
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',


    },
    textoPadrao: {
        marginTop: 16,
        color: "#cccccc",
        fontWeight: 500,
        fontSize: 18,
        width: 330,
        alignItems: 'center',
        textAlign: 'justify',


    },
    imgLogo: {
        marginTop: 45,
        width: 145,
        height: 80,
    },

    button: {
        width: 350,
        height: 50,
        color: '#fff',
        backgroundColor: '#000',
        borderRadius: 10,
        marginBottom: 0,
        marginTop: 5,
    },
    textoButton: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 700,
        paddingTop: 6,
        textAlign: 'center',
    },
    
    list: {
        backgroundColor: '#101010',
        margin: 1,
        borderRadius: 10,
        paddingLeft: 6,
        width:380,
      },
    developer: {
        marginTop: 50,
        marginBottom: 0,
        color:'#fff',
        textAlign:'center',

    },


})

export default stylesTelaCampus;
