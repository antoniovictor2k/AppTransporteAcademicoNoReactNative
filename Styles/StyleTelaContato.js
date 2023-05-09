import { StyleSheet } from 'react-native';

const stylesTelaLogin = StyleSheet.create({

    telamain: {
        backgroundColor: '#113036',
        flex: 1,
        alignItems: 'center',
        flexWrap: 'nowrap',
    },


    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        backgroundColor: '#113036',
    },

    titulo: {
        marginTop: 30,

        fontSize: 32,
        fontWeight: 700,

        color: '#fff',

    },

    subTitulo: {
        marginTop: 10,

        fontSize: 28,
        fontWeight: 600,

        color: '#fff',

    },
    subTitulo1: {
        marginTop: 20,
        marginBottom: 20,

        fontSize: 28,
        fontWeight: 600,

        color: '#fff',

    },
    instituicao: {
        alignItems: 'center',
        marginBottom: 20,
        gap: 16,
    },
    dev: {
        marginTop: 20,
        alignItems: 'center',

        gap: 16,
    },

    contatoNome: {
        fontSize: 18,
        fontWeight: 500,
        color: '#CCCCCC',
    },
    contatoCidade: {
        fontSize: 18,
        fontWeight: 500,
        color: '#CCCCCC',
    },
    contatoFone: {
        fontSize: 18,
        fontWeight: 500,
        color: '#CCCCCC',
    },
    contatoEmail: {
        fontSize: 18,
        fontWeight: 500,
        color: '#CCCCCC',
    },
    contatoIcon: {
        fontSize: 20,
        color: '#CCCCCC',
    },

    icons: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'space-between',

    },
    icones: {
        fontSize: 28,

        color: '#CCCCCC',
    },

})

export default stylesTelaLogin;