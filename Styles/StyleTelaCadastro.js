import { StyleSheet } from 'react-native';

const stylesTelaCadastro = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    // justifyItems: 'center',
    // alignItems: 'center',
    backgroundColor: '#113036',
 
  },
  telaMain: {

    alignItems: 'center',
    flex: 1,
    color: '#fff',
    zIndex:999,
   
  },
  imgLogo: {
    marginTop: 75,
    marginBottom: 75,
    width: 115,
    height: 70,
  },

  textoTitulo: {
    color: '#fff',
    fontSize: 30,
  },
  campoinputNomes: {
    flexDirection: 'row',
    zIndex:999,
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
    marginTop: 50,
  

  },
  textoButton: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 700,
    padding: 6,
  },

  linkLogin: {
    color: '#fff',
    marginTop: 10,

  },
  linkTexto: {
    fontWeight: 600,
    textAlign: 'center',
    color: '#aaa',

  },
  linkTextoLogin: {
    color: '#fff',
    fontWeight: 700,
    marginLeft: 5,
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
  linkExterno: {
    fontWeight: 700,
    fontSize: 16,
  },
})

export default stylesTelaCadastro;