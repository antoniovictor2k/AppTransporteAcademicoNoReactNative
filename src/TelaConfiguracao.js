import React, { useState, } from 'react';
import { Text, View, ScrollView, } from 'react-native';
import styles from '../Styles/StyleTelaConfiguracao';
import { Checkbox, Button, TextInput, } from 'react-native-paper';


function TelaConfiguracao() {

    const [checked, setChecked] = useState(false);
    const [novoEmail, setNovoEmail] = useState(false);
    const [novaSenha, setNovaSenha] = useState(false);
    const [novoNome, setNovoNome] = useState(false);
    const [novoSobrenome, setNovoSobrenome] = useState(false);
    const [relatarErro, setRelatarErro] = useState(false);
    const [motivoDelete, setmotivoDelete] = useState(false);
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
        <ScrollView style={styles.main}>
            <Text style={styles.titulo}>Configuração</Text>
            <View style={styles.container}>
                <Text style={styles.sobTitulo} >Alterar email</Text>
                <TextInput
                    keyboardType='email-address'
                    label={'Email'}
                    mode='outlined'
                    right={<TextInput.Icon icon="email" iconColor='#fff' />}
                    textColor='#fff'
                    activeOutlineColor='#fff'
                    style={styles.inputTexto}
                    theme={tema}
                />
                <Button style={styles.button}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                    icon={'update'}
                    textColor='#fff'
                >
                    <Text style={styles.textoButton}>
                        Confirmar alteração
                    </Text>
                </Button>
                <Text style={styles.sobTitulo}  >Alterar senha</Text>
                <TextInput
                    label={'Senha'}
                    secureTextEntry={mostrarSenha}
                    mode='outlined'
                    right={<TextInput.Icon icon={iconeSenha} iconColor='#fff' onPress={senhaVisivel} />}
                    textColor='#fff'
                    activeOutlineColor='#fff'
                    style={styles.inputTexto}
                    theme={tema}
                />
                <Button style={styles.button}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                    icon={'update'}
                    textColor='#fff'
                >
                    <Text style={styles.textoButton}>
                        Confirmar alteração
                    </Text>
                </Button>
                <Text style={styles.sobTitulo}  >Alterar nome e sobrenome</Text>
                <View style={styles.campoinputNomes}>
                    <TextInput
                        label={'Nome'}
                        mode='outlined'
                        right={<TextInput.Icon icon="text" iconColor='#fff' />}
                        textColor='#fff'
                        activeOutlineColor='#fff'
                        style={styles.inputTextoNome}
                        theme={tema}
                    />
                    <TextInput
                        label={'Sobrenome'}
                        mode='outlined'
                        right={<TextInput.Icon icon="text" iconColor='#fff' />}
                        textColor='#fff'
                        activeOutlineColor='#fff'
                        style={styles.inputTextoSobrenome}
                        theme={tema}
                    />
                </View>
                <Button style={styles.button}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                    icon={'update'}
                    textColor='#fff'
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
                    style={styles.inputTextoDescricao}
                    theme={tema}
                />
                <Button style={styles.button}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                    icon={'alert-circle'}
                    textColor='#fff'
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
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
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