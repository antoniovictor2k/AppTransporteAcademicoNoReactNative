import { View, Image, Pressable, } from 'react-native';
import { useState } from 'react'
import { Text, TextInput, ActivityIndicator, Button, } from 'react-native-paper';
import styles from '../Styles/StyleTelaLogin';

function TelaLogin({ navigation }) {
  const [email, setEmail] = useState(0);
  const [senha, setSenha] = useState(0);
  const [mostrarSenha, SetmostrarSenha] = useState(true)
  const [iconeSenha, SetIconeSenha] = useState('lock')


  const senhaVisivel = () => {
    mostrarSenha == true ? SetmostrarSenha(false) : SetmostrarSenha(true);
    iconeSenha == 'lock' ? SetIconeSenha('lock-open-variant') : SetIconeSenha('lock');
  }
  const tema = {
    colors: {

      onSurfaceVariant: 'white'
    }
  }


  return (
    <View style={styles.container}>

      <Image
        style={styles.imgLogo}
        source={require('../assets/logoMarcaLogin.png')}
      />

      <View style={styles.telaMain}>
        <TextInput
          keyboardType='email-address'
          label={'Email'}
          mode='outlined'
          right={<TextInput.Icon icon="email" iconColor='#fff' />}
          textColor='#fff'
          placeholderTextColor={"#fff"}
          labelTextColor={"#fff"}
          activeOutlineColor='#fff'
          activeUnderlineColor='#fff'
          style={styles.inputTexto}
          theme={tema}
        />
        <TextInput
          label="Senha"
          secureTextEntry={mostrarSenha}
          textColor='#fff'
          right={<TextInput.Icon icon={iconeSenha} iconColor='#fff' onPress={senhaVisivel} />}
          theme={tema}
          mode='outlined'
          style={styles.inputTexto}
          activeOutlineColor='#fff'
        />
        <Button style={styles.button}
          onPress={() => navigation.navigate('TelaPrincipalComMenu')}
          icon={'login'}
          buttonColor='#fff'
          textColor='#FFF'
        >
          <Text style={styles.textoButton}>
            Entrar
          </Text>
        </Button>
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