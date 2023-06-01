import { View, Image, Pressable }   from 'react-native';
import { IconButton, Text, TextInput, ActivityIndicator, Button,} from 'react-native-paper';
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
      mode='outlined'
      label='Email'
      activeOutlineColor='#fff'
      textColor='#fff'
      keyboardType='email-address'
      right={<TextInput.Icon icon="email"/>}
      style={styles.inputTexto}
      />
      
     <Button style={styles.button}
     onPress={() => alert("Senha cadastrada foi enviada para seu email")}
    icon={'lock-reset'}
    textColor='#fff'
    >
     <Text style={styles.textoButton}>
     Recuperar senha
     </Text>
     </Button>
    
     
     
     
    
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