import { StyleSheet } from 'react-native';

const stylesTelaLogin = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#113036',
        textAlign: 'center',


    },
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },
    titulo: {
        marginTop: 30,
        marginBottom: 40,
        fontSize: 32,
        fontWeight: 700,
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',


    },
    sobTitulo: {
        marginTop: 30,
        fontSize: 27,
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
        width: 165,
        height: 100,
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
    developer: {
        marginTop: 70,
        marginBottom: 20,
    },


})

export default stylesTelaLogin;