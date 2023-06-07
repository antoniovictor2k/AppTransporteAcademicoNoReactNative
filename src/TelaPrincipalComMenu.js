import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Linking, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Avatar, Divider, Button } from 'react-native-paper';

// Imports de Telas 
import TelaPrincipal from './TelaPrincipal';
import TelaSobre from './TelaSobre'
import TelaContato from './TelaContato';
import TelaConfiguracao from './TelaConfiguracao';
import TelaCampus from './TelaCampus';
import styles from '../Styles/StyleTelaMenuPersonalizada';

function CustomDrawerContent(props) {
    const navigation = useNavigation();
    return (
        <DrawerContentScrollView {...props} style={styles.paginaMenu}>
            <View>
             <View style={styles.cabecalho}>
                    <Avatar.Icon theme={'outline'} size={100} icon="account-circle" style={{ backgroundColor: 'transparent' }} />
                    <Text style={styles.nomeDoAluno}>Aluno</Text>
                    <Text style={styles.emailDoAluno}>aluno.ifal@aluno.ifal.edu.br</Text>
                </View>
                <Divider style={styles.linhaHorizotal} />
                <DrawerItemList {...props} />
                <Divider style={styles.linhaHorizotal2} />
                <View style={styles.links}>
                    <Text style={styles.link} onPress={() => {
                        Linking.openURL('https://youtube.com');
                    }}>Tutorial de Uso do App, Click Aqui.</Text>
                    <Text style={styles.link}>
                        <Text onPress={() => {
                            Linking.openURL('https://geolocalizacateste.netlify.app/paginas/termo_de_uso');
                        }}>Termos de uso</Text>
                        {' '}e de{' '}
                        <Text onPress={() => {
                            Linking.openURL('https://geolocalizacateste.netlify.app/paginas/politica_de_privacidade');
                        }}>Privacidade</Text>
                    </Text>
                </View>
                <Button icon="logout" buttonColor='#000' mode="contained" style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    Sair
                </Button>
            </View>
            <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

const CustomHeader = () => {
    const navigation = useNavigation();

    const toggleDrawer = () => {
        navigation.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={toggleDrawer}>
                <Icon name="menu" size={38} color="#fff" backgroundColor='#000' style={{ marginLeft: 20, borderRadius: 50 }} />
            </TouchableOpacity>
        </View>
    );
};

function TelaMenu() {
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
                    headerTitle: '',
                    headerLeft: () => <CustomHeader />,
                    drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Sobre</Text>),
                    drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="home" />)
                }
            } name="TelaSobre" component={TelaSobre} />
            <Drawer.Screen options={
                {
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => <CustomHeader />,
                    drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Contatos</Text>),
                    drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="contacts" />)
                }
            } name="TelaContato" component={TelaContato} />
            <Drawer.Screen options={
                {
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => <CustomHeader />,
                    drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Campus</Text>),
                    drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="school" />)
                }
            } name="TelaCampus" component={TelaCampus} />
            <Drawer.Screen options={
                {
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => <CustomHeader />,
                    drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Configuração</Text>),
                    drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="settings" />)
                }
            } name="TelaConfiguracao" component={TelaConfiguracao} />
        </Drawer.Navigator>
    );
}

export default TelaMenu;
