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
        marginTop: 45,
        width: 165,
        height: 100,
    },
    inputTexto: {
        height: 50,
        width: 350,
        padding: 10,
        margin: 5,
        color: '#fff',
        backgroundColor: 'rgba(204, 204, 204, 0.3)',
        borderRadius: 10,
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
    linkSenha: {
        marginTop: 10,
    },

})

export default stylesTelaLogin;