import { StyleSheet } from 'react-native';

const stylesTelaMenu = StyleSheet.create({
    paginaMenu: {
        ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    },

    mapView: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: 20,
    },
    iconLocalizacaoMenu: {
        top: -390, alignSelf: 'center',

    },
    myLocationButton:{
        // position: 'absolute',
        marginTop: 100,
        right: 10,
        zIndex: 9999,
backgroundColor:'#ff0000',
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
        top: -300,
        alignSelf: 'center',
    },
   
})

export default stylesTelaMenu;