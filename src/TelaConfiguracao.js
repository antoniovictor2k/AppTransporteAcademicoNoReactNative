import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Linking, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/StyleTelaConfiguracao';
import { IconButton, MD3Colors, Checkbox } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';



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
                    style={styles.inputTexto}
                    keyboardType='email-address'
                    placeholder='Email'
                    placeholderTextColor='#fff'
                />
                <Pressable style={styles.button}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                >
                    <Text style={styles.textoButton}>
                        Confirmar alteração
                    </Text>
                </Pressable>
                <Text style={styles.sobTitulo}  >Alterar senha</Text>

                <TextInput
                    style={styles.inputTexto}

                    placeholder='Senha'
                    placeholderTextColor='#fff'
                />
                <Pressable style={styles.button}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                >
                    <Text style={styles.textoButton}>
                        Confirmar alteração
                    </Text>
                </Pressable>
                <Text style={styles.sobTitulo}  >Alterar nome e sobrenome</Text>
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
                <Pressable style={styles.button}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                >
                    <Text style={styles.textoButton}>
                        Confirmar alteração
                    </Text>
                </Pressable>
                <Text style={styles.sobTitulo}  >Reportar erro</Text>

                <TextInput
                    style={styles.inputTextoDescricao}
                    placeholder='Descreva o ocorrido...'
                    placeholderTextColor='#fff'
                />


                <Pressable style={styles.button}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                >
                    <Text style={styles.textoButton}>
                        Enviar
                    </Text>
                </Pressable>
                <Text style={styles.sobTitulo}  >Deletar conta</Text>

                <TextInput
                    style={styles.inputTextoDescricao}

                    placeholder='Por qual motivo deseja excluir sua conta?'
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
                        Estou ciente que ao excluir minha conta, todos os meus dados serão apagados do banco de dados do app.
                    </Text>

                </View>
                <Pressable style={styles.buttonDelete}
                    onPress={() => alert('link indisponível, acessar através do link (Fazer Login), na parte inferior da tela.')}
                >
                    <Text style={styles.textoButtonDelete}>
                        Excluir conta
                    </Text>
                </Pressable>




                <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
            </View>

        </ScrollView>
    );
};

export default TelaConfiguracao;