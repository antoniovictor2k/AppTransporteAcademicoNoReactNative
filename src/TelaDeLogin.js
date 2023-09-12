import { View, Image, Pressable } from "react-native";
import { useState } from "react";
import { Text, TextInput, ActivityIndicator, Button } from "react-native-paper";
import styles from "../Styles/StyleTelaLogin";

// alterar aqui o endereço
// const localhost = "192.168.1.121";

function TelaLogin({ navigation }) {
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [mostrarSenha, SetmostrarSenha] = useState(true);
  const [iconeSenha, SetIconeSenha] = useState("eye-off");

  async function sendFormulario() {
    if (!validateEmail(email)) {
      setDisplay3(true);
      setTimeout(() => {
        setDisplay3(false);
      }, 4000);
      return;
    }

    try {
      const response = await fetch(
        `https://back-end-transporte-academico-ifjfoi6st-antoniovictor2k.vercel.app/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            senha: senha,
          }),
        }
      );
      const json = await response.json();
      console.log("Testando: ");

      if (json === "error") {
        setDisplay(true);
        setTimeout(() => {
          setDisplay(false);
        }, 4000);
        return;
      }

      // Navegação para outra tela após receber os dados
      navigation.navigate("TelaPrincipalComMenu", { itemId: json._id, nomeDoUsuario: json.nome });
    } catch (error) {
      console.log(error);
      console.log("BackEnd não está retornando!");
      // Exibir uma mensagem de erro na tela
      setDisplay2(true);
      setTimeout(() => {
        setDisplay2(false);
      }, 4000);
    }
  }

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const senhaVisivel = () => {
    mostrarSenha == true ? SetmostrarSenha(false) : SetmostrarSenha(true);
    iconeSenha == "eye-off"
      ? SetIconeSenha("eye")
      : SetIconeSenha("eye-off");
  };

  const tema = {
    colors: {
      onSurfaceVariant: "white",
    },
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgLogo}
        source={require("../assets/logoMarcaLogin.png")}
      />
      <View style={styles.telaMain}>
        {display && (
          <Text style={{ color: "#fff", fontSize: 16 }}>
            Usuário e/ou senha inválidos
          </Text>
        )}
        {display3 && (
          <Text style={{ color: "#fff", fontSize: 16 }}>
            Por favor, digite um email válido
          </Text>
        )}
        {display2 && (
          <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
            Desculpe, o servidor não está respondendo no momento.
          </Text>
        )}
        <TextInput
          label="Email"
          mode="outlined"
          right={<TextInput.Icon icon="email" iconColor="#fff" />}
          onChangeText={setEmail}
          textColor="#fff"
          placeholderTextColor={"#fff"}
          labelTextColor={"#fff"}
          activeOutlineColor="#ccc"
          style={styles.inputTexto}
          theme={tema}
          onBlur={() => validateEmail(email)}
        />
        <TextInput
          label="Senha"
          secureTextEntry={mostrarSenha}
          textColor="#fff"
          right={
            <TextInput.Icon
              icon={iconeSenha}
              iconColor="#fff"
              onPress={senhaVisivel}
            />
          }
          onChangeText={setSenha}
          theme={tema}
          mode="outlined"
          style={styles.inputTexto}
          activeOutlineColor="#ccc"
        />
        <Button
          style={styles.button}
          onPress={() => sendFormulario()}
          icon={"login"}
          buttonColor="#000"
          textColor="#000"
        >
          <Text style={styles.textoButton}>Entrar</Text>
        </Button>
        <Pressable style={styles.linkSenha}>
          <Text
            style={styles.linkTextoSenha}
            onPress={() => navigation.navigate("RecuperarSenha")}
          >
            Esqueceu sua Senha?
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.linkInscricao}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.linkTexto}>
          Não tem uma conta?{" "}
          <Text style={styles.linkTextoInscrevar}>Inscreva-se</Text>
        </Text>
      </Pressable>
    </View>
  );
}

export default TelaLogin;
