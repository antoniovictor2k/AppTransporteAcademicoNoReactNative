import { StyleSheet } from 'react-native';

 const stylesTelaLogin = StyleSheet.create({
   
    telamain:{
        backgroundColor: '#113036',
    
        flex:1,
       alignItems:'center',
    },
   
   
    container:{
     flex:1,
     justifyContent:'center',
    textAlign: 'center',
    justifyItems:'center' ,
    alignItems:'center',

     backgroundColor: '#113036',

   },
  
    titulo:{
    marginTop:70,
    
    fontSize:32,
    fontWeight:700,
    
    color:'#fff',
    
  },

    subTitulo:{
        marginTop:-120,
       
        fontSize:24,
        fontWeight:700,
        
        color:'#fff',
        
    },
    dev:{
        marginTop:80,
   
       alignItems:'center',

       gap:16,
    },
    
    contatoNome:{
        fontSize:20,
        fontWeight:700,
        color:'#fff',
    },
    contatoCidade:{
        fontSize:20,
        fontWeight:700,
        color:'#fff',
    },
    contatoFone:{
        fontSize:20,
        fontWeight:700,
        color:'#fff',
    },
    contatoIcon:{
        fontSize:18,
        fontWeight:700,
        color:'#fff',
    },

    icons:{
        flexDirection:'row',
        gap:15,
        justifyContent:'space-between',

    },
    icones:{
        fontSize:28,

        color:'#fff',
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
    linkTextoSenha:{
      color:'#605C5d',
      textAlign:'center',
      fontWeight:700,

    },
    linkTextoInscrevar:{
      color:'#fff',
      fontWeight:700,
      marginLeft:10,
      paddingLeft:10,
    
    },
 })

export default stylesTelaLogin;