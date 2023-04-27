import {useState} from 'react';
import {Text, TextInput, View, Image, Pressable, CheckBox }   from 'react-native';
import styles from './Styles/StyleTelaCadastro';


function TelaCadastro({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>

  <Image
          style={styles.imgLogo}
          source={require('./assets/logoMarcaLogin.png')}
        />

<View style={styles.telaMain}>
    <View style={styles.campoinputNomes}>
      <TextInput
      style={styles.inputTextoNome}
      placeholder='Nome'
      
      /> 
      <TextInput
      style={styles.inputTextoSobrenome}
      placeholder='Sobrenome'
      
      />
    </View>
      
      <TextInput
      style={styles.inputTexto}
      placeholder='Email'
      
      />
      <TextInput 
      style={styles.inputTexto}
      placeholder='Senha'
      
      />
      <TextInput 
      style={styles.inputTexto}
      placeholder='Confirmar senha'
      
      />
       {/* <View style={styles.checkboxContainer}>   
      
       <CheckBox
            value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
     
     <Text style={styles.label}>
     Li e concordo com os termos de uso e de 
     privacidade.
     </Text>
     
       </View> */}


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
     Tem uma conta?  
      <Text style={styles.linkTextoInscrevar}>
      fazer login
     </Text>
     </Text>
     </Pressable>
     
    </View>
  );
}

export default TelaCadastro;