import react, { useState } from "react";
import { View, Image, Pressable, Text, Alert } from "react-native";
import { Checkbox, Button, TextInput } from "react-native-paper";
import styles from "../Styles/StyleTelaCadastro";


function TelaCadastro({ navigation }) {
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [checked, setChecked] = useState(false);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, SetmostrarSenha] = useState(true);
  const [iconeSenha, SetIconeSenha] = useState("eye-off");

  async function sendFormulario() {
    if (!nome || !sobrenome) {
      Alert.alert(
        "Nome e sobrenome obrigatório",
        "Por favor, complete todas as seções do formulário antes de continuar.",
        [
          {
            text: "Ok",
            style: "cancel",
          },
        ]
      );
      return;
    }

    if (!validateEmail(email)) {
      setDisplay3(true);
      setTimeout(() => {
        setDisplay3(false);
      }, 4000);
      return;
    }

    if (email === null) {
      Alert.alert(
        "Email obrigatório",
        "Por favor, complete todas as seções do formulário antes de continuar.",
        [
          {
            text: "Ok",
            style: "cancel",
          },
        ]
      );
      return;
    }
    if (!senha || !confirmarSenha) {
      Alert.alert(
        "Senha obrigatório",
        "Por favor, complete todas as seções do formulário antes de continuar.",
        [
          {
            text: "Ok",
            style: "cancel",
          },
        ]
      );
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert(
        "Senhas diferentes",
        'Os campus "Senha" e "Confirmar senha" devem ser exatamente iguais.',
        [
          {
            text: "Ok",
            style: "cancel",
          },
        ]
      );
      return;
    }
    if (checked === false) {
      Alert.alert(
        "Marcar o checkbox",
        'É obrigatório marcar a caixinha "Li e concordo com os termos."',
        [
          {
            text: "Ok",
            style: "cancel",
          },
        ]
      );
      return;
    }

    try {
      const response = await fetch(
        `https://back-end-transporte-academico-ifjfoi6st-antoniovictor2k.vercel.app/cadastro`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
          }),
        }
      );

      const json = await response.json();

      if (json === "Email já está sendo utilizado") {
        setDisplay2(true);
        setTimeout(() => {
          setDisplay2(false);
        }, 4000);
        return;
      }

      Alert.alert(
        "Usuário cadastrado",
        "O usuário foi cadastrado com sucesso. Por favor, faça o login.",
        [
          {
            text: "Ok",
            style: "cancel",
          },
        ]
      );

      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      console.log("BackEnd não está retornando!");
      // Exibir uma mensagem de erro na tela
      setDisplay4(true);
      setTimeout(() => {
        setDisplay4(false);
      }, 4000);
      return;
    }
  }

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

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  function handleConfirmarSenhaChange(text) {
    // setConfirmarSenha(text);
    senha === confirmarSenha ? setDisplay(false) : setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.telaMain}>
        <Image
          style={styles.imgLogo}
          source={require("../assets/logoMarcaLogin.png")}
        />
        {display4 && (
          <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
            Desculpe, o servidor não está respondendo no momento.
          </Text>
        )}
        <View style={styles.campoinputNomes}>
          <TextInput
            mode="outlined"
            label={"Nome *"}
            activeOutlineColor="#ccc"
            textColor="#fff"
            theme={tema}
            right={<TextInput.Icon icon="text" iconColor="#fff" />}
            onChangeText={setNome}
            style={styles.inputTextoNome}
          />
          <TextInput
            mode="outlined"
            label="Sobrenome *"
            activeOutlineColor="#ccc"
            textColor="#fff"
            theme={tema}
            right={<TextInput.Icon icon="text" iconColor="#fff" />}
            onChangeText={setSobrenome}
            style={styles.inputTextoSobrenome}
          />
        </View>
        {display2 && (
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Usuário já cadastrado, faça o login.
          </Text>
        )}
        {display3 && (
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Por favor, digite um email válido
          </Text>
        )}
        <TextInput
          mode="outlined"
          label="Email *"
          activeOutlineColor="#ccc"
          textColor="#fff"
          theme={tema}
          right={<TextInput.Icon icon="email" iconColor="#fff" />}
          onChangeText={setEmail}
          style={styles.inputTexto}
          onBlur={() => validateEmail(email)}
        />
        {display && (
          <Text style={{ color: "#fff", textAlign: "center" }}>
            As senhas não possuem a mesma combinação.
          </Text>
        )}
        <TextInput
          mode="outlined"
          label="Senha *"
          activeOutlineColor="#ccc"
          textColor="#fff"
          theme={tema}
          secureTextEntry={mostrarSenha}
          onChangeText={setSenha}
          right={
            <TextInput.Icon
              icon={iconeSenha}
              onPress={senhaVisivel}
              iconColor="#fff"
            />
          }
          style={styles.inputTexto}
        />
        <TextInput
          mode="outlined"
          label="Confirmar senha *"
          maxLength={20}
          activeOutlineColor="#ccc"
          textColor="#fff"
          theme={tema}
          secureTextEntry={mostrarSenha}
          onChangeText={setConfirmarSenha}
          onBlur={handleConfirmarSenhaChange}
          right={
            <TextInput.Icon
              icon={iconeSenha}
              onPress={senhaVisivel}
              iconColor="#fff"
            />
          }
          style={styles.inputTexto}
        />
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.label}>
            Li e concordo com os{" "}
            <Text
              style={styles.linkExterno}
              onPress={() => navigation.navigate("TermosDeUso")}
            >
              Termos de uso{" "}
            </Text>
            <Text>e de </Text>
            <Text
              style={styles.linkExterno}
              onPress={() => navigation.navigate("TermosDePrivacidade")}
            >
              Privacidade.
            </Text>
          </Text>
        </View>
        <Button
          style={styles.button}
          onPress={() => sendFormulario()}
          icon={"account-plus"}
          buttonColor="#000"
          textColor="#000"
        >
          <Text style={styles.textoButton}>Cadastrar-se</Text>
        </Button>
        <Pressable
          style={styles.linkLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.linkTexto}>
            Tem uma conta?{" "}
            <Text style={styles.linkTextoLogin}>Fazer login</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default TelaCadastro;
