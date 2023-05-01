import { StyleSheet, Text, View, TextInput, Image, Pressable, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/StyleTelaContato';
import { IconButton, MD3Colors } from 'react-native-paper';


function TelaContato() {
    return (
        <View style={styles.telamain}>
            <Text style={styles.titulo}>Contatos</Text>
            <View style={styles.container}>
                <Text style={styles.subTitulo}>Desenvolvedores</Text>

                <View style={styles.dev}>
                    <Text style={styles.contatoNome}>Antonio Victor Pereira Severiano</Text>
                    <Text style={styles.contatoCidade}>Maceió / AL</Text>
                    <Text style={styles.contatoEmail}><Icon name="email" style={styles.contatoIcon} /> avps2@aluno.ifal.edu.br</Text>
                    <Text style={styles.contatoFone}><Icon name="phone" style={styles.contatoIcon} /> Tel: (82) 99198-1626</Text>
                    <View style={styles.icons}>

                        <IconButton
                            icon="whatsapp"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://api.whatsapp.com/message/O4I654ATQMPYE1?autoload=1&app_absent=0');
                            }}
                        />
                        <IconButton
                            icon="email"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://chat.google.com/room/AAAAC1GfjrU?cls=1');
                            }}
                        />
                        <IconButton
                            icon="linkedin"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://www.linkedin.com/in/antonio-victor-pereira-severiano-0aa170169/');
                            }}
                        />
                        <IconButton
                            icon="instagram"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://www.instagram.com/antoniovictor2k');
                            }}
                        />
                        <IconButton
                            icon="github"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://github.com/antoniovictor2k');
                            }}
                        />
                    </View>
                </View>

                <View style={styles.dev}>

                    <Text style={styles.contatoNome}>Jeallyson Ferreira da Silva</Text>
                    <Text style={styles.contatoCidade}>Rio Largo / AL</Text>
                    <Text style={styles.contatoEmail}><Icon name="email" style={styles.contatoIcon} /> jfs63@aluno.ifal.edu.br</Text>
                    <Text style={styles.contatoFone}><Icon name="phone" style={styles.contatoIcon} /> Tel: (82) 99999-9999</Text>
                    <View style={styles.icons}>

                        <IconButton
                            icon="whatsapp"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://github.com/jeallyson');
                            }}
                        />
                        <IconButton
                            icon="email"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://chat.google.com/room/AAAAC1GfjrU?cls=1');
                            }}
                        />
                        <IconButton
                            icon="linkedin"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://github.com/jeallyson');
                            }}
                        />
                        <IconButton
                            icon="instagram"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://www.instagram.com/jeallyson_ferreira');
                            }}
                        />
                        <IconButton
                            icon="github"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://github.com/jeallyson');
                            }}
                        />

                    </View>


                </View>

            </View>
        </View>
    );
};

export default TelaContato;