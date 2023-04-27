import {Text, TextInput, View, Image, Pressable }   from 'react-native';
import styles from './Styles/StyleTelaLogin';


function TelaLogin({ navigation }) {
  return (
    <View style={styles.container}>

  <Image
          style={styles.imgLogo}
          source={require('./assets/logoMarcaLogin.png')}
        />

<View style={styles.telaMain}>
    
      <TextInput
      style={styles.inputTexto}
      placeholder='Email'
      placeholderTextColor='#fff'
      />
      <TextInput 
      style={styles.inputTexto}
      placeholder='Senha'
      placeholderTextColor='#fff'
      
      />
     <Pressable style={styles.button}
       onPress={() => alert('link indisponível, acessar através do link (Inscrevar-se), na parte inferior da tela.')}
     >
     <Text style={styles.textoButton}>
     Entrar
     </Text>
     </Pressable>
     <Pressable style={styles.linkSenha}
        // onPress={() => navigation.navigate('TelaDeCadastro')}
          >
     <Text style={styles.linkTextoSenha}  onPress={() => alert('link indisponível, acessar através do link (Inscrevar-se), na parte inferior da tela.')}>
     Esqueceu sua Senha?
     </Text>
     </Pressable>
     
     
     
    
</View>
     <Pressable style={styles.linkInscricao}
     onPress={() => navigation.navigate('Cadastro')}

     >
     <Text style={styles.linkTexto}>
     Não tem uma conta?  
      <Text style={styles.linkTextoInscrevar}>
      Inscrevar-se
     </Text>
     </Text>
     </Pressable>
     
    </View>
  );
}

export default TelaLogin;