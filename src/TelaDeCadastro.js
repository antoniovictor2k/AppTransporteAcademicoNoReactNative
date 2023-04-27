import {useState} from 'react';
import {Text, TextInput, View, Image, Pressable, Linking }   from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from '../Styles/StyleTelaCadastro';



function TelaCadastro({ navigation }) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>

  <Image
          style={styles.imgLogo}
          source={require('../assets/logoMarcaLogin.png')}
        />

<View style={styles.telaMain}>
    <View style={styles.campoinputNomes}>
      <TextInput
      style={styles.inputTextoNome}
      placeholder='Nome'
      placeholderTextColor='#fff'

      
      /> 
      <TextInput
      style={styles.inputTextoSobrenome}
      placeholder='Sobrenome'
      placeholderTextColor='#fff'

      
      />
    </View>
      
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
      <TextInput 
      style={styles.inputTexto}
      placeholder='Confirmar senha'
      placeholderTextColor='#fff'

      
      />
       <View style={styles.checkboxContainer}>   
      
       <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />

     
     <Text style={styles.label}>
     Li e concordo com os{' '} 
     <Text style={styles.linkExterno}
     onPress={() => {
      Linking.openURL('https://geolocalizacateste.netlify.app/paginas/termo_de_uso');}}
      
     >
     Termos de uso{' '}
     </Text>
     <Text>
      e de{' '}
     </Text>
     <Text style={styles.linkExterno}
     onPress={() => {
      Linking.openURL('https://geolocalizacateste.netlify.app/paginas/politica_de_privacidade');}}
     >
     Privacidade.
     </Text>

     </Text>
     
       </View>


     <Pressable style={styles.button}
       onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
     >
     <Text style={styles.textoButton}>
     Cadastrar-se
     </Text>
     </Pressable>
     
     
     
    
</View>
     <Pressable style={styles.linkInscricao}
     onPress={() => navigation.navigate('Login')}
     >
     <Text style={styles.linkTexto}>
     Tem uma conta?{' '}
      <Text style={styles.linkTextoInscrevar}>
      Fazer login
     </Text>
     </Text>
     </Pressable>
     
    </View>
  );
}

export default TelaCadastro;