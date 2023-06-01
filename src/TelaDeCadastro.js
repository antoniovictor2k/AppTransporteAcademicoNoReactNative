import react, { useState, } from 'react';
import { View, Image, Pressable, Text, Alert } from 'react-native';
import { Checkbox, Button, TextInput, } from 'react-native-paper';
import styles from '../Styles/StyleTelaCadastro';

function TelaCadastro({ navigation }) {

  const [checked, setChecked] = useState(false);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [visivel, setVisivel] = useState(false);

  const ativaVisibilidade = () =>
    visivel === true ? setVisivel(false) : setVisivel(true);

  return (
    <View style={styles.container}>

      <View style={styles.telaMain}>
        <Image
          style={styles.imgLogo}
          source={require('../assets/logoMarcaLogin.png')}
        />

        <View
          enableOnAndroid={true}>
          <View style={styles.campoinputNomes}>
            <TextInput
              mode='outlined'
              label='Nome'
              placeholderTextColor='#fff'
              activeOutlineColor='#fff'
              right={<TextInput.Icon icon="text" />}
              style={styles.inputTextoNome}
            />
            <TextInput
              mode='outlined'
              label='Sobrenome'
              placeholderTextColor='#fff'
              activeOutlineColor='#fff'
              right={<TextInput.Icon icon="text" />}
              style={styles.inputTextoSobrenome}
            />
          </View>

          <TextInput
            mode='outlined'
            keyboardType='email-address'
            label='Email'
            placeholderTextColor='#fff'
            activeOutlineColor='#fff'
            right={<TextInput.Icon icon="email" />}
            style={styles.inputTexto}
          />
          
          <TextInput
            mode='outlined'
            label='Senha'
            placeholderTextColor='#fff'
            activeOutlineColor='#fff'
            secureTextEntry
            right={<TextInput.Icon icon="lock" />}
            style={styles.inputTexto}
          />

          <TextInput
            mode='outlined'
            label='Confirmar senha'
            placeholderTextColor='#fff'
            activeOutlineColor='#fff'
            secureTextEntry
            right={<TextInput.Icon icon="lock" />}
            style={styles.inputTexto}
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
                onPress={() => navigation.navigate('TermosDeUso')}
              >
                Termos de uso{' '}
              </Text>
              <Text>
                e de{' '}
              </Text>
              <Text style={styles.linkExterno}
                onPress={() => navigation.navigate('TermosDePrivacidade')}
              >
                Privacidade.
              </Text>
            </Text>

          </View>

          <Button style={styles.button}
            onPress={() =>
              Alert.alert(
                'Aviso',
                'link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.',
                [
                  {
                    text: 'Ok',
                    style: 'cancel'
                  }
                ]
              )}
            icon={'account-plus'}
            buttonColor='#fff'
            textColor='#fff'
          >
            <Text style={styles.textoButton}>
              Cadastrar-se
            </Text>
          </Button>

          <Pressable style={styles.linkLogin}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.linkTexto}>
              Tem uma conta?{' '}
              <Text style={styles.linkTextoLogin}>
                Fazer login
              </Text>
            </Text>
          </Pressable>
        </ View>




      </View>


    </View>
  );
}

export default TelaCadastro;