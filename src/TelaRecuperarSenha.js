import React, { useState } from 'react';
import { View, Image, Pressable } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import styles from '../Styles/StyleTelaRecuperarSenha';


function TelaRecuperarSenha({ navigation }) {
  const [emailRecuperar, setEmailRecuperar] = useState('');
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);

  const [senhaRecuperada, setSenhaRecuperada] = useState('');

  async function sendFormulario() {

    if (!validateEmail(emailRecuperar)) {
      setDisplay3(true);
      setTimeout(() => {
        setDisplay3(false);
      }, 4000);
      return;
    }

    try {
      const response = await fetch(`https://back-end-transporte-academico-ifjfoi6st-antoniovictor2k.vercel.app/recuperarsenha`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailRecuperar,
        }),
      });

      const json = await response.json();

      if (json.msg === 'Usuário não encontrado') {

        setDisplay(true);
        setTimeout(() => {
          setDisplay(false);
        }, 4000);
        setSenhaRecuperada(null);

      } else {

        const senhaRecuperada = json.senha; // Obtém a senha recuperada do JSON
        setSenhaRecuperada(senhaRecuperada); // Atualiza o estado com a senha recuperada
        setTimeout(() => {
          setSenhaRecuperada(false);
        }, 9000);

      }
    } catch (error) {
      console.log(error);
      console.log("BackEnd não está retornando!");
      // Exibir uma mensagem de erro na tela
      setDisplay2(true);
      setTimeout(() => {
        setDisplay2(false);
      }, 4000);
    }
  };

  const validateEmail = (emailRecuperar) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(emailRecuperar);
  };

  const tema = {
    colors: {
      onSurfaceVariant: 'white',
    },
  };
  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require('../assets/logoMarcaLogin.png')} />
      <View style={styles.telaMain}>
        {senhaRecuperada ? (
          <View>
            <Text style={{ color: "#fff", fontSize: 18, }}>Email: {emailRecuperar}</Text>
            <Text style={{ color: "#fff", fontSize: 18, }}>Senha: {senhaRecuperada}</Text>
          </View>
        ) : null}
        {display3 &&
          <Text style={{ color: "#fff", fontSize: 16, }}>Por favor, digite um email válido</Text>
        }
        {display &&
          <Text style={{ color: "#fff", fontSize: 16, }}>Usuário e/ou senha inválidos</Text>
        }
        {display2 &&
          <Text style={{ color: "#fff", fontSize: 16, textAlign: 'center', }}>Desculpe, o servidor não está respondendo no momento.</Text>
        }
        <TextInput
          mode="outlined"
          label="Email"
          activeOutlineColor="#fff"
          textColor="#fff"
          onChangeText={setEmailRecuperar}
          theme={tema}
          right={<TextInput.Icon icon="email" iconColor="#fff" />}
          style={styles.inputTexto}
          onBlur={() => validateEmail(emailRecuperar)}
        />
        <Button style={styles.button} onPress={sendFormulario} icon="lock-reset" textColor="#000">
          <Text style={styles.textoButton}>Recuperar</Text>
        </Button>
      </View>
      <Pressable style={styles.linkLogin} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkTexto}>
          Lembra da senha? <Text style={styles.linkTextoLogin}>Fazer Login</Text>
        </Text>
      </Pressable>
    </View>
  );
}

export default TelaRecuperarSenha;
