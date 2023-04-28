import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Imports de Telas 
import TelaPrincipal from './TelaPrincipal';
import TelaSobre from './TelaSobre'
import styles from '../Styles/StyleTelaPrincipalComMenu';

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