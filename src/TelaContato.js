import { Text, View, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/StyleTelaContato';
import { IconButton } from 'react-native-paper';

function TelaContato() {
    return (
        <ScrollView style={styles.mais}>
            <View style={styles.telamain}>
                <Text style={styles.titulo}>Contatos</Text>
                <View style={styles.container}>
                    <Text style={styles.subTitulo1}>Instituição</Text>
                    <View style={styles.card}>
                        <View style={styles.instituicao}>
                            <Text style={styles.contatoNome}>IFAL - Campus Rio Largo</Text>
                            <Text style={styles.contatoCidade}>Rio Largo / AL</Text>
                            <Text style={styles.contatoEmail}><Icon name="email" style={styles.contatoIcon} /> dg.riolargo@ifal.edu.br</Text>
                            <Text style={styles.contatoFone}><Icon name="phone" style={styles.contatoIcon} /> (82) 2126-6290</Text>
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
                                    icon="instagram"
                                    iconColor={'#fff'}
                                    size={26}
                                    onPress={() => {
                                        Linking.openURL('https://www.instagram.com/ifalriolargo');
                                    }}
                                />
                                <IconButton
                                    icon="web"
                                    iconColor={'#fff'}
                                    size={26}
                                    onPress={() => {
                                        Linking.openURL('https://www2.ifal.edu.br/campus/riolargo');
                                    }}
                                />

                            </View>
                        </View>
                    </View>
                    <Text style={styles.subTitulo}>Desenvolvedor</Text>
                    <View style={styles.card}>
                        <View style={styles.dev}>
                            <Text style={styles.contatoNome}>Antonio Victor Pereira Severiano</Text>
                            <Text style={styles.contatoCidade}>Maceió / AL</Text>
                            <Text style={styles.contatoEmail}><Icon name="email" style={styles.contatoIcon} /> avps2@aluno.ifal.edu.br</Text>
                            <Text style={styles.contatoFone}><Icon name="phone" style={styles.contatoIcon} />(82) 99198-1626</Text>
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
                    </View>
                   
                </View>
                <Text style={styles.developer}>Developer by Antonio Victor - 2023</Text>
            </View>
        </ScrollView>
    );
};

export default TelaContato;