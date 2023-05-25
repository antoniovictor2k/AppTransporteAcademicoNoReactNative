import { Text, TextInput, View, Image, Pressable, } from 'react-native';
import { useState } from 'react'
import styles from '../Styles/StyleTelaLogin';


function TelaLogin({ navigation }) {
  const [email, setEmail] = useState(0);
  const [senha, setSenha] = useState(0);

  return (
    <View style={styles.container}>

      <Image
        style={styles.imgLogo}
        source={require('../assets/logoMarcaLogin.png')}
      />

      <View style={styles.telaMain}>

        <TextInput
          style={styles.inputTexto}
          keyboardType='email-address'
          placeholder='Email'
          placeholderTextColor='#fff'
        />
        <TextInput
          style={styles.inputTexto}
          secureTextEntry={true}
          placeholder='Senha'
          placeholderTextColor='#fff'

        />
        <Pressable style={styles.button}
          onPress={() => navigation.navigate('TelaPrincipalComMenu')}
        >
          <Text style={styles.textoButton}>
            Entrar
          </Text>
        </Pressable>
        <Pressable style={styles.linkSenha}

        >
          <Text style={styles.linkTextoSenha} onPress={() => navigation.navigate('RecuperarSenha')}>
            Esqueceu sua Senha?
          </Text>
        </Pressable>




      </View>
      <Pressable style={styles.linkInscricao}
        onPress={() => navigation.navigate('Cadastro')}

      >
        <Text style={styles.linkTexto}>
          Não tem uma conta?{' '}
          <Text style={styles.linkTextoInscrevar}>
            Inscrevar-se
          </Text>
        </Text>
      </Pressable>

    </View>
  );
}

export default TelaLogin;