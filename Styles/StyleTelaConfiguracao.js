import { StyleSheet } from 'react-native';

const StyleTelaConfiguracao = StyleSheet.create({

    main: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#113036',
    },
    container: {
        backgroundColor: '#113036',
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
        marginBottom: 8,
        fontSize: 24,
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
    campoinputNomes: {
        flexDirection: 'row',
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
    inputTextoDescricao: {

        height: 120,
        width: 350,
        paddingLeft: 10,
        paddingTop: -100,
        margin: 5,
        color: '#fff',
        backgroundColor: 'rgba(204, 204, 204, 0.3)',
        borderRadius: 10,
    },
    inputTextoNome: {
        height: 50,
        width: 170,
        padding: 10,
        margin: 5,
        color: '#fff',
        backgroundColor: 'rgba(204, 204, 204, 0.3)',
        borderRadius: 10,
    },
    inputTextoSobrenome: {
        height: 50,
        width: 170,
        padding: 10,
        margin: 5,
        color: '#fff',
        backgroundColor: 'rgba(204, 204, 204, 0.3)',
        borderRadius: 10,
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
    buttonDelete: {
        width: 350,
        height: 50,
        color: '#fff',
        backgroundColor: '#F7280C',
        borderRadius: 10,
        marginBottom: 0,
        marginTop: 5,
    },
    textoButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        paddingTop: 6,
        textAlign: 'center',
    },
    textoButtonDelete: {
        color: '#cccccc',
        fontSize: 28,
        fontWeight: 800,
        paddingTop: 4,
        textAlign: 'center',
    },
    checkboxContainer: {
        width: 300,
        flexDirection: 'row',
        marginBottom: 0,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        color: '#eee',
        fontWeight: 500,
        margin: 4,
    },
    anexo:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      image: {
        width: '80%',
        height: 30,
        marginTop: 20,
      },

    developer: {
        marginTop: 70,
        marginBottom: 20,
        color:'#cccccc',
    },





})

export default StyleTelaConfiguracao;