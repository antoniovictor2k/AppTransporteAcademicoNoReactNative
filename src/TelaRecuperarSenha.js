import {Text, TextInput, View, Image, Pressable }   from 'react-native';
import { useState } from 'react'
import styles from '../Styles/StyleTelaRecuperarSenha';


function TelaRecuperarSenha({ navigation }) {
  const [emailRecuperar, setEmailRecuperar] = useState(0);
  
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
      keyboardType='email-address'
      />
      
     <Pressable style={styles.button}
     onPress={() => alert("Senha cadastrada foi enviada para seu email")}
     >
     <Text style={styles.textoButton}>
     Recuperar senha
     </Text>
     </Pressable>
    
     
     
     
    
</View>
     <Pressable style={styles.linkLogin}
     onPress={() => navigation.navigate('Login')}

     >
     <Text style={styles.linkTexto}>
     Lembra da senha?{' '}
      <Text style={styles.linkTextoLogin}>
      Fazer Login
     </Text>
     </Text>
     </Pressable>
     
    </View>
  );
}

export default TelaRecuperarSenha;