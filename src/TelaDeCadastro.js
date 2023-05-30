import react, { useState, useContext } from 'react';
import { Text, TextInput, View, Image, Pressable, Linking, ScrollView, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Checkbox, Dialog, Portal, Provider, Button } from 'react-native-paper';
import styles from '../Styles/StyleTelaCadastro';
import TelaTermosDeUso from './TelaTermosDeUso'



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
            keyboardType='email-address'
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

          <Pressable style={styles.button}
            onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
          >
            <Text style={styles.textoButton}>
              Cadastrar-se
            </Text>
          </Pressable>




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