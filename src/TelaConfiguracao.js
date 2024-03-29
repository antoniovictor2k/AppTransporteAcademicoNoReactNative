import React, { useState } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../Styles/StyleTelaConfiguracao";
import { Checkbox, Button, TextInput } from "react-native-paper";

function TelaConfiguracao(props) {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);
  const [novoEmail, setNovoEmail] = useState("");
  const [novoImgURL, setNovoImgURL] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");
  const [novoNome, setNovoNome] = useState("");
  const [novoSobrenome, setNovoSobrenome] = useState("");
  const [mostrarSenha, SetmostrarSenha] = useState(true);
  const [iconeSenha, SetIconeSenha] = useState("eye-off");
  const route = useRoute();
  const { itemId } = route.params ?? {};

  const senhaVisivel = () => {
    mostrarSenha == true ? SetmostrarSenha(false) : SetmostrarSenha(true);
    iconeSenha == "eye-off" ? SetIconeSenha("eye") : SetIconeSenha("eye-off");
  };
  const tema = {
    colors: {
      onSurfaceVariant: "white",
    },
  };

  // deleta conta
  async function sendFormularioDelete(id) {
    if (checked === false) {
      Alert.alert(
        "Marcar o checkbox",
        'É obrigatório marcar a caixinha "Estou ciente que ..."',
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
      // Deleta o usuário com base no ID
      const response = await fetch(
        `https://back-end-transporte-academico-ifjfoi6st-antoniovictor2k.vercel.app/excluir/${id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        Alert.alert(
          "Usuário Excluído",
          "Sua conta foi excluída com sucesso. Sentiremos sua falta!",
          [
            {
              text: "Sair",
              style: "cancel",
            },
          ]
        );
        navigation.navigate("Login");
      } else {
        console.log("Erro ao deletar usuário");
      }
    } catch (error) {
      console.log("BackEnd não está respondendo ou Usuário já excluído.");
    }
  }

  // Atualizar dados da conta
  async function sendFormularioUpdate(id) {
    if (
      !novoEmail &&
      !novaSenha &&
      !novoNome &&
      !novoSobrenome &&
      !novoImgURL
    ) {
      Alert.alert(
        "Nenhum dado foi alterado",
        "Faça alguma alteração antes de confirmar.",
        [{ text: "Tenta novamente", style: "cancel" }]
      );
      return;
    }
    if (novaSenha !== confirmarNovaSenha) {
      Alert.alert(
        "Combinação está diferente",
        "Senha e Confirmar Senha Precisar  ser iguais.",
        [{ text: "Tenta novamente", style: "cancel" }]
      );
      return;
    }

    try {
      const dadosAtualizados = {};

      if (novoImgURL) {
        dadosAtualizados.imgUrl = novoImgURL;
      }

      if (novoNome) {
        dadosAtualizados.nome = novoNome;
      }

      if (novoSobrenome) {
        dadosAtualizados.sobrenome = novoSobrenome;
      }

      if (novoEmail) {
        if (!validateEmail(novoEmail)) {
          Alert.alert(
            "Digite um email válido",
            `Exemplo: ${novoEmail}@aluno.ifal.edu.br ou ${novoEmail}@gmail.com`,
            [
              {
                text: "Tenta novamente",
                style: "cancel",
              },
            ]
          );
          return;
        }

        dadosAtualizados.email = novoEmail;
      }

      if (novaSenha) {
        dadosAtualizados.senha = novaSenha;
      }

      const response = await fetch(
        `https://back-end-transporte-academico-ifjfoi6st-antoniovictor2k.vercel.app/atualizar/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dadosAtualizados),
        }
      );

      const json = await response.json();

      if (json === "O email já está em uso.") {
        Alert.alert("Email já Existe", "Tente outro Email, por favor!", [
          { text: "Tenta novamente", style: "cancel" },
        ]);
        return;
      }

      if (response.ok) {
        Alert.alert(
          "Dado(s) atualizado(s)",
          "Dado(s) atualizado(s) com sucesso",
          [{ text: "Ok", style: "cancel" }]
          );
          setNovoNome("");
          setNovoSobrenome("");
          setNovoEmail("");
          setNovoImgURL("");
          setNovaSenha("");
          setConfirmarNovaSenha("");
        } else {
        console.log("Erro ao atualizar os dados do usuário");
      }
    } catch (error) {
      console.log("BackEnd não está respondendo!");
    }
  }

  // chama função set update
  const atualizarDados = () => {
    sendFormularioUpdate(itemId);
  };

  const validateEmail = (novoEmail) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(novoEmail);
  };

  // keyboardShouldPersistTaps='handled' isso tava dando um erro por falta desse bicho.

  return (
    <ScrollView style={styles.main} keyboardShouldPersistTaps="handled">
      <Text style={styles.titulo}>Conta</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.sobTitulo1}>Alterar Dados Cadastrais</Text>
          <TextInput
            keyboardType="url"
            label={"Img URL"}
            mode="outlined"
            value={novoImgURL}
            right={<TextInput.Icon icon="link" iconColor="#fff" />}
            textColor="#fff"
            onChangeText={setNovoImgURL}
            activeOutlineColor="#ccc"
            style={styles.inputTexto}
            theme={tema}
          />

          <View style={styles.campoinputNomes}>
            <TextInput
              label={"Nome"}
              mode="outlined"
              value={novoNome}
              right={<TextInput.Icon icon="text" iconColor="#fff" />}
              textColor="#fff"
              onChangeText={setNovoNome}
              activeOutlineColor="#ccc"
              style={styles.inputTextoNome}
              theme={tema}
            />
            <TextInput
              label={"Sobrenome"}
              mode="outlined"
              value={novoSobrenome}
              right={<TextInput.Icon icon="text" iconColor="#fff" />}
              textColor="#fff"
              onChangeText={setNovoSobrenome}
              activeOutlineColor="#ccc"
              style={styles.inputTextoSobrenome}
              theme={tema}
            />
          </View>

          <TextInput
            label={"Email"}
            mode="outlined"
            value={novoEmail}
            right={<TextInput.Icon icon="email" iconColor="#fff" />}
            textColor="#fff"
            onChangeText={setNovoEmail}
            activeOutlineColor="#ccc"
            style={styles.inputTexto}
            theme={tema}
            onBlur={() => validateEmail(novoEmail)}
          />

          <TextInput
            label={"Senha"}
            value={novaSenha}
            secureTextEntry={mostrarSenha}
            mode="outlined"
            right={
              <TextInput.Icon
                icon={iconeSenha}
                iconColor="#fff"
                onPress={senhaVisivel}
              />
            }
            textColor="#fff"
            onChangeText={setNovaSenha}
            activeOutlineColor="#ccc"
            style={styles.inputTexto}
            theme={tema}
          />
          <TextInput
            label={"Confirmar Senha"}
            secureTextEntry={mostrarSenha}
            mode="outlined"
            value={confirmarNovaSenha}
            right={
              <TextInput.Icon
                icon={iconeSenha}
                iconColor="#fff"
                onPress={senhaVisivel}
              />
            }
            textColor="#fff"
            onChangeText={setConfirmarNovaSenha}
            activeOutlineColor="#ccc"
            style={styles.inputTexto}
            theme={tema}
          />
          <Button
            style={styles.button}
            onPress={atualizarDados}
            icon={"update"}
            textColor="#000"
          >
            <Text style={styles.textoButton}>Alterar</Text>
          </Button>
        </View>

        <View style={styles.card}>
          <Text style={styles.sobTitulo}>Excluir Conta</Text>

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{ color: "#ff0000" }}>*</Text>
            <Text style={styles.label}>
              Estou ciente que ao excluir minha conta, todos os meus dados serão
              apagados do banco de dados do app.
            </Text>
          </View>
          <Button
            style={styles.buttonDelete}
            onPress={() => sendFormularioDelete(itemId)}
            icon={"delete-circle"}
            textColor="#000"
          >
            <Text style={styles.textoButtonDelete}>Excluir</Text>
          </Button>
        </View>
        <Text style={styles.developer}>Developer by Antonio Victor - 2023</Text>
      </View>
    </ScrollView>
  );
}

export default TelaConfiguracao;
