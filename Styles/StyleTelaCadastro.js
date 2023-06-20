import { StyleSheet } from 'react-native';

const stylesTelaCadastro = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#113036',
  },
  telaMain: {
    alignItems: 'center',
    flex: 1,
    color: '#fff',
  },
  imgLogo: {
    marginTop: 75,
    marginBottom: 60,
    width: 125,
    height: 80,
  },
  textoTitulo: {
    color: '#fff',
    fontSize: 30,
  },
  campoinputNomes: {
    flexDirection: 'row',
    zIndex: 99999,
  },
  inputTextoNome: {
    height: 45,
    width: 170,
    padding: 0,
    marginRight: 5,
    marginBottom: 1,
    color: '#fff',
    backgroundColor: '#416169',
    borderRadius: 6,
  },
  inputTextoSobrenome: {
    height: 45,
    width: 170,
    padding: 0,
    marginLeft: 5,
    marginBottom: 1,
    color: '#fff',
    backgroundColor: '#416169',
    borderRadius: 6,
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
    color: '#000',
    backgroundColor: '#B3DCE5',
    borderRadius: 6,
    paddingTop: 3,
    marginTop: 50,
  },
  textoButton: {
    color: '#000',
    fontSize: 18,
    fontWeight: 700,
  },

  linkLogin: {
    color: '#fff',
    marginTop: 10,
  },
  linkTexto: {
    fontWeight: 600,
    textAlign: 'center',
    color: '#93B8C2',
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
    color: '#fff',
    marginLeft:-64,
    alignItems:'center'
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: 500,
    margin: 4,
  },
  linkExterno: {
    fontWeight: 700,
    fontSize: 16,
  },
})

export default stylesTelaCadastro;