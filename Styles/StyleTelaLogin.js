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
    marginTop: 75,
    width: 165,
    height: 105,
  },

// teste

tinyLogo: {
  width: 50,
  height: 50,
},

  inputTexto: {
    height: 45,
    width: 350,
    padding: 0,
    margin: -1,
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
    marginBottom: 0,
    marginTop: 12,
    paddingTop: 5,
  },
  textoButton: {
    color: '#000',
    fontSize: 18,
    fontWeight: 700,
  },
  linkSenha: {
    marginTop: 10,
  },
  linkInscricao: {
    color: '#fff',
    bottom: 20,
  },
  linkTexto: {
    fontWeight: 600,
    textAlign: 'center',
    color: '#93B8C2',
  },
  linkTextoSenha: {
    color: '#93B8C2',
    textAlign: 'center',
    fontWeight: 700,

  },
  linkTextoInscrevar: {
    color: '#FFF',
    fontWeight: 700,
    marginLeft: 10,
    paddingLeft: 10,
  },
})

export default stylesTelaLogin;