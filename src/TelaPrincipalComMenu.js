import 'react-native-gesture-handler';
import { useEffect, useState, useRef } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles/StyleTelaPrincipalComMenu';
import { IconButton, MD3Colors } from 'react-native-paper';

// Imports de Telas 
import TelaSobre from './TelaSobre'

function TelaPrincipal() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('A permissão para acessar o local foi negada');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0622,
                longitudeDelta: 0.01921,
            })


        })();
    }, []);

    let text = 'Esperando...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }


    return (
        <View style={styles.paginaMenu}>


            <MapView style={styles.mapView}
                initialRegion={location}
                showsUserLocation={true}
            // loadingEnabled={true}
            />

            <IconButton style={styles.buttonCompartilharLocalizacao}
                icon="bus-marker"
                iconColor={'#fff'}
                size={55}
                containerColor={'#000'}
                onPress={() => console.log('Funcionando') + alert('Funcionando')}
            />

        </View>

    );
}


function App() {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', }}>Antonio A Primeira Tela Esta Funcionando</Text>
        </View>
    );
}
function AppTwo() {
    return (
        <View style={styles.container}>
            <Text >App 2</Text>
        </View>
    );
}
function AppTwo2() {
    return (
        <View style={styles.container}>
            <Text>App 3</Text>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function Menu({ navigation }) {
    return (

        <Drawer.Navigator initialRouteName="TelaPrincipal">

            <Drawer.Screen
                name="TelaPrincipal"
                component={TelaPrincipal}
                options={
                    {
                        headerShown: false,
                        drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Mapa</Text>),
                        drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="map" />)
                    }
                }
            />
            <Drawer.Screen
                name="TelaSobre"

                component={TelaSobre}

                options={
                    {
                        headerShown: false,
                        drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Sobre</Text>),
                        drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="home" />)
                    }
                }
            />
            <Drawer.Screen
                name="MeuApp"
                component={AppTwo}
                options={
                    {
                        drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Contatos</Text>),
                        drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="contacts" />)
                    }
                }

            />
            <Drawer.Screen
                name="AppTwo2"
                component={AppTwo2}

                options={
                    {

                        drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Configuração</Text>),
                        drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="settings" />)
                    }
                }

            />
        </Drawer.Navigator>

    )
}


function TelaMenu({ navigation }) {
    return (
        <NavigationContainer independent={true} >
            <Menu />
        </NavigationContainer>
    )
};

export default TelaMenu;