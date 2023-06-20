import 'react-native-gesture-handler';
import { React, useEffect, useState } from 'react';
import { Text, View, Linking, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Avatar, Divider, Button } from 'react-native-paper';

// Imports de Telas 
import TelaPrincipal from './TelaPrincipal';
import TelaSobre from './TelaSobre'
import TelaContato from './TelaContato';
import TelaConfiguracao from './TelaConfiguracao';
import TelaCampus from './TelaCampus';
import styles from '../Styles/StyleTelaMenuPersonalizada';

// alterar aqui o endereço

function CustomDrawerContent(props) {
    const route = useRoute();
    const navigation = useNavigation();

    // guarda os dados do json nome, email e img aqui.
    const [nomeUsuario, setNomeUsuario] = useState(null);
    const [emailUsuario, setEmailUsuario] = useState(null);
    const [imageUrl, setImagemUrl] = useState(null);
    
    // pega o id do usuario na tela do login e através do navegation enviar aqui essa tela;
    const { itemId } = route.params ?? {};
   
    async function sendFormulario(id) {
        try {
            // passa o id para receber somente dados desse usuário;
            const response = await fetch(`https://back-end-transporte-academico-ifjfoi6st-antoniovictor2k.vercel.app/dados/${id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const json = await response.json();
            // envia os nomes para o use useState e depois exibir na tela menu;
            setEmailUsuario(json.email);
            setNomeUsuario(json.nome);

            if (json.imgUrl) {
                setImagemUrl(json.imgUrl);
              } else {
                setImagemUrl("https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQKp5ZsMFTZZrNFb_p2mduiKPipCDh7meawj_zla0mhOHNi_07O3TcMv-q-H-HBvH2G"); // ou defina uma URL padrão ou uma imagem de fallback
              }
              

            // setImagemUrl(json.imageUrl);
        } catch (error) {
            console.log(error);
            console.log("BackEnd não está retornando!");
        }
    };
    sendFormulario(itemId);

    return (
        <DrawerContentScrollView {...props} style={styles.paginaMenu}>
            <View>
                <View style={styles.cabecalho} >
                    {/* <Avatar.Icon theme={'outline'} size={100} icon="account-circle" style={{ backgroundColor: 'transparent' }} /> */}
                    <Avatar.Image size={68} source={{ uri: imageUrl }} />
                    <View style={styles.cabecalhoText}>
                        <Text style={styles.nomeDoAluno}> {nomeUsuario} </Text>
                        <Text style={styles.emailDoAluno}> {emailUsuario} </Text>
                    </View>
                </View>
                <Divider style={styles.linhaHorizotal} />
                <DrawerItemList {...props} />
                <Divider style={styles.linhaHorizotal2} />
                <View style={styles.links}>
                    <Text style={styles.link} onPress={() => {
                        Linking.openURL('https://youtube.com');
                    }}>Tutorial de Uso do App, Click Aqui.</Text>
                    <Text style={styles.link}>
                        <Text
                            onPress={() => navigation.navigate('TermosDeUso')}
                        >Termos de uso</Text>

                        {' '}e de{' '}
                        <Text
                            onPress={() => navigation.navigate('TermosDePrivacidade')}
                        >Privacidade</Text>
                    </Text>
                </View>
                <Button icon="logout" buttonColor='#B3DCE5' textColor='#000' mode="contained" style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    Sair
                </Button>
            </View>
            <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();
// para criar o icone do Menu
const CustomHeader = () => {
    const navigation = useNavigation();

    const toggleDrawer = () => {
        navigation.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={toggleDrawer}>
                <Icon name="menu" size={40} color="#fff" backgroundColor='#000' style={{ marginLeft: 15, borderRadius: 28 }} />
            </TouchableOpacity>
        </View>
    );
};

function TelaMenu() {
    const route = useRoute();
    const { itemId } = route.params ?? {};

    return (
        <Drawer.Navigator initialRouteName="Mapa" drawerContent={CustomDrawerContent}>

            <Drawer.Screen options={
                {
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => <CustomHeader />,
                    drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Mapa</Text>),
                    drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="map" />)
                }
            } name="Mapa" component={TelaPrincipal} />
            <Drawer.Screen options={
                {
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerTitle: '',
                    drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Sobre</Text>),
                    drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="home" />)
                }
            } name="TelaSobre" component={TelaSobre} />
            <Drawer.Screen options={
                {
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerTitle: '',
                    drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Contatos</Text>),
                    drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="contacts" />)
                }
            } name="TelaContato" component={TelaContato} />
            <Drawer.Screen options={
                {
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerTitle: '',
                    drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Campus</Text>),
                    drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="school" />)
                }
            } name="TelaCampus" component={TelaCampus} />
            <Drawer.Screen options={
                {
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerTitle: '',
                    drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Configuração</Text>),
                    drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="settings" />)
                }
            } name="TelaConfiguracao" component={TelaConfiguracao} initialParams={{ itemId: itemId }} />
        </Drawer.Navigator>
    );
}

export default TelaMenu;
