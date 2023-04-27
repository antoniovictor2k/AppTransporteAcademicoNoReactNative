import { StyleSheet } from 'react-native';

const stylesTelaCadastro = StyleSheet.create({
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
    flex: 1,
    color: '#fff',
  },
  imgLogo: {
    marginTop: 20,

    width: 115,
    height: 70,
  },

  textoTitulo: {
    color: '#fff',
    fontSize: 30,
  },
  campoinputNomes: {
    flexDirection: 'row',
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
    marginBottom: 0,
    marginTop: 5,
  },
  textoButton: {
    color: '#fff',
    fontSize: 23,
    textAlign:'center',
    fontWeight: 700,
    padding: 6,
  },
  linkSenha: {
    marginTop: 5,
  },
  linkInscricao: {
    color: '#fff',
    bottom: 0,
  },
  linkTexto: {
    fontWeight: 600,
    textAlign: 'center',
    color: '#aaa',
    
  },
  linkTextoInscrevar: {
    color: '#fff',
    fontWeight: 700,
    marginLeft: 5,
  },
  checkboxContainer: {
    // marginLeft:55,
    width: 300,
    flexDirection: 'row',
    marginBottom: 10,
    // border:'solid #fff',

  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    color: '#eee',
    // textAlign:'center',
    fontWeight: 500,
    margin: 4,

  },
})

export default stylesTelaCadastro;