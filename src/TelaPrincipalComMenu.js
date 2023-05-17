import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import MapViewDirections from 'react-native-maps-directions';


// Imports de Telas 
import TelaPrincipal from './TelaPrincipal';
import TelaSobre from './TelaSobre'
import TelaContato from './TelaContato';
import TelaConfiguracao from './TelaConfiguracao';
import styles from '../Styles/StyleTelaPrincipalComMenu';



// Em TEste

function TestePerfil() {
    return (
        <View style={styles.container}>
            <Text>teste Perfil</Text>
        </View>
    );
}

// Fim (Em TEste)
const Drawer = createDrawerNavigator();

function Menu({ navigation }) {
    return (

        <Drawer.Navigator 
        initialRouteName="TelaPrincipal"
        // drawerContent={TelaMenuPersonalizada}
        screenOptions={{
            drawerStyle: {
              backgroundColor: '#113036',
             
            },
          }}
        
        >

            <Drawer.Screen
                name="TestePerfil"
                component={TestePerfil}
                options={
                    {   
                        drawerContentStyle:{backgroundColor:'#ffffff'},
                        headerShown: false,
                        drawerLabel: (({ focused }) => <Text style={styles.optionsTextosNome}>Antonio <Text style={styles.optionsTextosEmail} >     avps2@aluno.ifal.edu.br</Text></Text>),
                      
                        drawerIcon: (({ focused }) => <Icon style={styles.optionsIconesPerfil} name="account-circle" />)
                    }
                }
            />
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
                name="TelaContato"
                component={TelaContato}
                options={
                    {
                        headerShown: false,
                        drawerLabel: (({ focused }) => <Text style={styles.optionsTextos}>Contatos</Text>),
                        drawerIcon: (({ focused }) => <Icon style={styles.optionsIcones} name="contacts" />)
                    }
                }

            />
            <Drawer.Screen
                name="TelaConfiguracao"
                component={TelaConfiguracao}

                options={
                    {
                        headerShown: false,
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