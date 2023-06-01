import React, { useState, } from 'react';
import { Text, View, Pressable, Linking, ScrollView, } from 'react-native';
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




    return (
        <ScrollView style={styles.main}>
            <Text style={styles.titulo}>Configuração</Text>

            <View style={styles.container}>
                <Text style={styles.sobTitulo} >Alterar email</Text>

                <TextInput
                    keyboardType='email-address'
                    label={'Email'}
                    mode='outlined'
                    right={<TextInput.Icon icon="email" />}
                    textColor='#fff'
                    activeOutlineColor='#fff'
                    style={styles.inputTexto}
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
                    secureTextEntry
                    mode='outlined'
                    right={<TextInput.Icon icon="lock" />}
                    textColor='#fff'
                    activeOutlineColor='#fff'
                    style={styles.inputTexto}
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
                        right={<TextInput.Icon icon="text" />}
                        textColor='#fff'
                        activeOutlineColor='#fff'
                        style={styles.inputTextoNome}
                    />

                    <TextInput
                        label={'Sobrenome'}
                        mode='outlined'
                        right={<TextInput.Icon icon="text" />}
                        textColor='#fff'
                        activeOutlineColor='#fff'
                        style={styles.inputTextoSobrenome}
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
                    right={<TextInput.Icon icon="file" />}
                    textColor='#fff'
                    activeOutlineColor='#fff'
                    style={styles.inputTextoDescricao}
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
                    right={<TextInput.Icon icon="file" />}
                    textColor='#fff'
                    activeOutlineColor='#fff'
                    style={styles.inputTextoDescricao}
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