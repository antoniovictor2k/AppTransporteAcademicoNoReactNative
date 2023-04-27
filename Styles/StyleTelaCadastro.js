import { StyleSheet } from 'react-native';

 const stylesTelaCadastro = StyleSheet.create({
   container:{
     flex:1,
     justifyContent:'center',
    textAlign: 'center',
    justifyItems:'center' ,
     flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems:'center',
     backgroundColor: '#113036',
   },
    telaMain:{
    justifyContent:'center',
    textAlign: 'center',
    justifyItems:'center' ,
     flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems:'center',
    flex: 1,
    color:'#fff',
    },
    imgLogo:{
      marginTop:20,
      fontWeight:700,
      fontSize: 18,
      color:'#fff',
      textAlign:'center',
      alignItems:'center',
      width:115,
      height:70,
    },

    textoTitulo:{
      color:'#fff',
      fontSize:30,
    },
    campoinputNomes:{
     flexDirection: 'row',
    },
    inputTextoNome:{
    height: 40,
    width: 144,
     padding:20,
     margin:5,
    color:'#fff',
    backgroundColor: 'rgba(204, 204, 204, 0.3)',
    borderRadius: 10,
    },
    inputTextoSobrenome:{
    height: 40,
    width: 144,
     padding:20,
     margin:5,
    color:'#fff',
     background: 'rgba(204, 204, 204, 0.3)',
    borderRadius: 10,
    },
    inputTexto:{
    height: 40,
    width: 300,
     padding:20,
     margin:5,
    color:'#fff',
     background: 'rgba(204, 204, 204, 0.3)',
    borderRadius: 10,
    },
    button:{
      width:300,
      height: 40 ,
      color:'#fff',
    backgroundColor: '#000',
    borderRadius: 10 ,
    marginBottom: 0 ,
    marginTop: 5 ,
    },
    textoButton:{
      color:'#fff',
      fontSize:18,
      fontWeight:700,
      padding: 6 ,
    },
    linkSenha:{
    marginTop: 5 ,
    },
    linkInscricao:{
      color:'#fff',
      bottom:0,
    },
    linkTexto:{
      fontWeight:600,
      textAlign:'center',
      color:'#aaa',

    },
    linkTextoInscrevar:{
      color:'#fff',
      fontWeight:700,
      marginLeft:5,
    },
     checkboxContainer: {
    width:300,   
    flexDirection: 'row',
    marginBottom: 10,
    // border:'solid #fff',

  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    color:'#eee',
      // textAlign:'center',
      fontWeight:500,
    margin: 4,
    
  },
 })

export default stylesTelaCadastro;