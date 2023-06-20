import React, { useState, } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../Styles/StyleTelaConfiguracao';
import { Checkbox, Button, TextInput, } from 'react-native-paper';

// alterar aqui o endereço
// 192.168.1.122


function TelaConfiguracao(props) {
    const navigation = useNavigation();

    const [checked, setChecked] = useState(false);
    const [novoEmail, setNovoEmail] = useState(null);
    const [novoImgURL, setNovoImgURL] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [novoNome, setNovoNome] = useState(null);
    const [novoSobrenome, setNovoSobrenome] = useState(null);
    const [relatarErro, setRelatarErro] = useState(null);
    const [motivoDelete, setmotivoDelete] = useState(null);
    const [mostrarSenha, SetmostrarSenha] = useState(true)
    const [iconeSenha, SetIconeSenha] = useState('lock')
    const [guardaID, setGuardaID] = useState(null);
    const route = useRoute();
    const { itemId } = route.params ?? {};

    const senhaVisivel = () => {
        mostrarSenha == true ? SetmostrarSenha(false) : SetmostrarSenha(true);
        iconeSenha == 'lock' ? SetIconeSenha('lock-open-variant') : SetIconeSenha('lock');
    }
    const tema = {
        colors: {

            onSurfaceVariant: 'white'
        }
    }

    // deleta conta
    async function sendFormularioDelete(id) {

        if (checked === false) {
            Alert.alert(
                'Marcar o checkbox',
                'É obrigatório marcar a caixinha "Estou ciente que ..."',
                [
                    {
                        text: 'Ok',
                        style: 'cancel',
                    },
                ],
            );
            return;
        };


        try {
            // Deleta o usuário com base no ID
            const response = await fetch(`https://back-end-transporte-academico-ifjfoi6st-antoniovictor2k.vercel.app/excluir/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                Alert.alert(
                    'Usuário Excluído',
                    'Sua conta foi excluída com sucesso. Sentiremos sua falta!',
                    [
                        {
                            text: 'Sair',
                            style: 'cancel',
                        },
                    ],
                );
                navigation.navigate('Login');
            } else {
                console.log('Erro ao deletar usuário');
            }
        } catch (error) {
            console.log(error);
            console.log('BackEnd não está respondendo ou Usuário já excluído.');
        }
    }

    // Atualizar dados da conta
    async function sendFormularioUpdate(id) {


        if (!novoEmail && !novaSenha && !novoNome && !novoSobrenome && !novoImgURL) {
            Alert.alert('Nenhum dado foi alterado', 'Faça alguma alteração antes de confirmar.', [
                { text: 'Tenta novamente', style: 'cancel' },
            ]);
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
                    Alert.alert('Digite um email válido',
                        `Exemplo: ${novoEmail}@aluno.ifal.edu.br ou ${novoEmail}@gmail.com`,
                        [
                            {
                                text: 'Tenta novamente',
                                style: 'cancel'
                            },
                        ]);
                    return;
                }


                dadosAtualizados.email = novoEmail;
            }

            if (novaSenha) {
                dadosAtualizados.senha = novaSenha;
            }


            const response = await fetch(`https://back-end-transporte-academico-ifjfoi6st-antoniovictor2k.vercel.app/atualizar/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosAtualizados),
            });

            const json = await response.json();
            console.log("esta chegando aqui no verificar email")
            if (json === "O email já está em uso.") {
                Alert.alert('Email já Existe', 'Tente outro Email, por favor!', [
                    { text: 'Tenta novamente', style: 'cancel' },
                ]);
                return;
            }

            if (response.ok) {
                Alert.alert('Dado(s) atualizado(s)', 'Dado(s) atualizado(s) com sucesso', [
                    { text: 'Ok', style: 'cancel' },
                ]);
            } else {
                console.log('Erro ao atualizar os dados do usuário');
            }
        } catch (error) {
            console.log(error);
            console.log('BackEnd não está respondendo!');
        }
    };

    // chama função set update  
    const atualizarDados = () => {
        sendFormularioUpdate(itemId);
    };

    const validateEmail = (novoEmail) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(novoEmail);
    };

    return (
        // keyboardShouldPersistTaps='handled' isso dando um erro por falta desse bicho.
        <ScrollView style={styles.main} keyboardShouldPersistTaps='handled'>
            <Text style={styles.titulo}>Configuração</Text>
            <View style={styles.container}>
                <Text style={styles.sobTitulo1} >Alterar Img URL</Text>

                <TextInput
                    keyboardType='url'
                    label={'Img URL'}
                    mode='outlined'
                    right={<TextInput.Icon icon="link" iconColor='#fff' />}
                    textColor='#fff'
                    onChangeText={setNovoImgURL}
                    activeOutlineColor='#fff'
                    style={styles.inputTexto}
                    theme={tema}

                />
                <Text style={styles.sobTitulo2} >Alterar nome e sobrenome</Text>

                <View style={styles.campoinputNomes}>
                    <TextInput
                        label={'Nome'}
                        mode='outlined'
                        right={<TextInput.Icon icon="text" iconColor='#fff' />}
                        textColor='#fff'
                        onChangeText={setNovoNome}
                        activeOutlineColor='#fff'
                        style={styles.inputTextoNome}
                        theme={tema}
                    />
                    <TextInput
                        label={'Sobrenome'}
                        mode='outlined'
                        right={<TextInput.Icon icon="text" iconColor='#fff' />}
                        textColor='#fff'
                        onChangeText={setNovoSobrenome}
                        activeOutlineColor='#fff'
                        style={styles.inputTextoSobrenome}
                        theme={tema}
                    />
                </View>

                <Text style={styles.sobTitulo} >Alterar email</Text>

                <TextInput
                    keyboardType='email-address'
                    label={'Email'}
                    mode='outlined'
                    right={<TextInput.Icon icon="email" iconColor='#fff' />}
                    textColor='#fff'
                    onChangeText={setNovoEmail}
                    activeOutlineColor='#fff'
                    style={styles.inputTexto}
                    theme={tema}
                    onBlur={() => validateEmail(novoEmail)}
                />

                <Text style={styles.sobTitulo}>Alterar senha</Text>
                <TextInput
                    label={'Senha'}
                    secureTextEntry={mostrarSenha}
                    mode='outlined'
                    right={<TextInput.Icon icon={iconeSenha} iconColor='#fff' onPress={senhaVisivel} />}
                    textColor='#fff'
                    onChangeText={setNovaSenha}
                    activeOutlineColor='#fff'
                    style={styles.inputTexto}
                    theme={tema}
                />
                <Button style={styles.button}
                    onPress={atualizarDados}
                    icon={'update'}
                    textColor='#000'
                >
                    <Text style={styles.textoButton}>
                        Confirmar alteração
                    </Text>
                </Button>

                <Text style={styles.sobTitulo}  >Reportar erro</Text>
                <TextInput
                    label={'Descreva o ocorrido...'}
                    mode='outlined'
                    textColor='#fff'
                    activeOutlineColor='#fff'
                    onChangeText={setRelatarErro}
                    style={styles.inputTextoDescricao}
                    theme={tema}
                />
                <Button style={styles.button}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                    icon={'alert-circle'}
                    textColor='#000'
                >
                    <Text style={styles.textoButton}>
                        Enviar
                    </Text>
                </Button>
                <Text style={styles.sobTitulo}  >Deletar conta</Text>
                <TextInput
                    label={'Por qual motivo deseja excluir sua conta?'}
                    mode='outlined'
                    textColor='#fff'
                    activeOutlineColor='#fff'
                    onChangeText={setmotivoDelete}
                    style={styles.inputTextoDescricao}
                    theme={tema}
                />
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={styles.label}>
                        Estou ciente que ao excluir minha conta, todos os meus dados serão apagados do banco de dados do app.
                    </Text>
                </View>
                <Button style={styles.buttonDelete}
                    onPress={() => sendFormularioDelete(itemId)}
                    icon={'delete-circle'}
                    textColor='#000'
                >
                    <Text style={styles.textoButtonDelete}>
                        Excluir conta
                    </Text>
                </Button>
                <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
            </View>
        </ScrollView>
    );
};

export default TelaConfiguracao;