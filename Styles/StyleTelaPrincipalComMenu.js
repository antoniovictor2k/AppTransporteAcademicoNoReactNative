import { StyleSheet } from 'react-native';

const stylesTelaMenu = StyleSheet.create({
    paginaMenu: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#113036',
    },
    mapView: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    iconLocalizacaoMenu: {
        top: 390, alignSelf: 'center',
    },
    marker: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkIcon: {
        position: 'absolute',
        bottom: 30,
    },

    myLocationButton: {
        position: 'absolute',
        bottom: 100,
        right: 50,

    },
    myLocationButton: {
        position: 'absolute',
        bottom: 120,
        right: 12,

    },
    mostrarRotaIFAL: {
        position: 'absolute',
        bottom: 180,
        right: 12,
    },
    mostrarMarkerSchool: {
        position: 'absolute',
        bottom: 240,
        right: 12,
    },
    imgLogo: {
        marginTop: 45,
        width: 165,
        height: 100,
    },
    optionsTextos: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 700,
    },
    optionsTextosNome: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 700,
    },
    optionsTextosEmail: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 400,
    },
    optionsIcones: {
        color: '#fff',
        fontSize: 28,
    },
    optionsIconesPerfil: {
        color: '#fff',
        fontSize: 52,
    },
    buttonCompartilharLocalizacao: {
        marginBottom: 50,
        alignSelf: 'center',
    },

})

export default stylesTelaMenu;