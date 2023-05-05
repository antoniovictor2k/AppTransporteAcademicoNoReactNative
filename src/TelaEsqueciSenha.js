import {Text, TextInput, View, Image, Pressable }   from 'react-native';
import styles from '../Styles/StyleTelaLogin';


function TelaEsqueciSenha({ navigation }) {
  return (
    <View style={styles.container}>

  <Image
          style={styles.imgLogo}
          source={require('../assets/logoMarcaLogin.png')}
        />

<View style={styles.telaMain}>
    
      <TextInput
      style={styles.inputTexto}
      placeholder='Email'
      placeholderTextColor='#fff'
      />
      
     <Pressable style={styles.button}
     onPress={() => alert("Senha cadastrada foi enviada para seu email")}
     >
     <Text style={styles.textoButton}>
     Recuperar senha
     </Text>
     </Pressable>
    
     
     
     
    
</View>
     <Pressable style={styles.linkInscricao}
     onPress={() => navigation.navigate('Login')}

     >
     <Text style={styles.linkTexto}>
     Lembra da senha?{' '}
      <Text style={styles.linkTextoInscrevar}>
      Fazer Login
     </Text>
     </Text>
     </Pressable>
     
    </View>
  );
}

export default TelaEsqueciSenha;