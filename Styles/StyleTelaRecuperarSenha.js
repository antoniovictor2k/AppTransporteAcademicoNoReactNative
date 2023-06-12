import { StyleSheet } from 'react-native';

const stylesTelaLogin = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        backgroundColor: '#113036',
    },
    telaMain: {

        justifyContent: 'center',
        textAlign: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
        color: '#fff',
    },
    imgLogo: {
        marginTop: 100,
        width: 165,
        height: 105,
    },
    inputTexto: {
        height: 45,
        width: 350,
        padding: 0,
        margin: 1,
        color: '#fff',
        backgroundColor: '#416169',
        borderRadius: 6,
    },
    button: {
        width: 350,
        height: 45,
        color: '#fff',
        backgroundColor: '#000',
        borderRadius: 6,
        marginBottom: 0,
        marginTop: 5,
        paddingTop: 5,
    },
    textoButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 700,
    },
    linkLogin: {
        color: '#fff',
        bottom: 20,
    },
    linkTexto: {
        fontWeight: 600,
        textAlign: 'center',
        color: '#93B8C2',
    },
    linkTextoLogin: {
        color: '#fff',
        fontWeight: 700,
        marginLeft: 10,
        paddingLeft: 10,
    },

})

export default stylesTelaLogin;