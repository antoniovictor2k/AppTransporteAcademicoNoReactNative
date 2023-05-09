import { StyleSheet, Text, View, TextInput, Image, Pressable, Linking, FlatList, SafeAreaView, StatusBar, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/StyleTelaContato';
import { IconButton, MD3Colors } from 'react-native-paper';

const listDataBase = [

    {
        nome: 'Antonio Victor Pereira Severiano',
        cidade: 'Maceió/AL',
        email: 'avps2@aluno.ifal.edu.br',
        telefone: '(82) 99198-1626',
        linkWhatsapp: 'https://api.whatsapp.com/message/O4I654ATQMPYE1?autoload=1&app_absent=0',
        linkInstragram: 'https://www.instagram.com/antoniovictor2k',
        linkEmail: 'https://chat.google.com/room/AAAAC1GfjrU?cls=1',
        linkLinkedin: 'https://www.linkedin.com/in/antonio-victor-pereira-severiano-0aa170169/',
        linkGithub: 'https://github.com/antoniovictor2k',
    },
    {
        nome: 'Jeallyson Ferreira Da Silva',
        cidade: 'Rio Largo/AL',
        email: 'jfs63@aluno.ifal.edu.br',
        telefone: '(82) 99999-9999',
        linkWhatsapp: '',
        linkInstragram: 'https://www.instagram.com/jeallyson_ferreira',
        linkEmail: 'https://chat.google.com/room/AAAAC1GfjrU?cls=1',
        linkLinkedin: '',
        linkGithub: 'https://github.com/jeallyson',
    },


]





function TelaContato() {
    return (
        <SafeAreaView style={styles.telamain}>

            <Text style={styles.titulo}>Contatos</Text>


            <View style={styles.container}>

                <Text style={styles.subTitulo1}>Instituição</Text>

                <View style={styles.instituicao}>
                    <Text style={styles.contatoNome}>IFAL - Campus Rio Largo</Text>
                    <Text style={styles.contatoCidade}>Rio Largo/AL</Text>
                    <Text style={styles.contatoEmail}><Icon name="email" style={styles.contatoIcon} /> ifal@aluno.ifal.edu.br</Text>
                    <Text style={styles.contatoFone}><Icon name="phone" style={styles.contatoIcon} /> 2126-6290</Text>
                    <View style={styles.icons}>

                        <IconButton
                            icon="whatsapp"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('');
                            }}
                        />
                        <IconButton
                            icon="email"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('dg.riolargo@ifal.edu.br');
                            }}
                        />

                        <IconButton
                            icon="instagram"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://www.instagram.com/ifalriolargo/');
                            }}
                        />
                        <IconButton
                            icon="web"
                            iconColor={'#fff'}
                            size={26}
                            onPress={() => {
                                Linking.openURL('https://www2.ifal.edu.br/acesso-a-informacao/institucional/agenda-da-reitoria/rio-largo');
                            }}
                        />

                    </View>
                </View>

                <Text style={styles.subTitulo}>Desenvolvedores</Text>


                <FlatList
                    data={listDataBase}
                    renderItem={({ item }) => (
                        <View style={styles.dev}>
                            <Text style={styles.contatoNome}>{item.nome}</Text>
                            <Text style={styles.contatoCidade}>{item.cidade}</Text>
                            <Text style={styles.contatoEmail}><Icon name="email" style={styles.contatoIcon} /> {item.email}</Text>
                            <Text style={styles.contatoFone}><Icon name="phone" style={styles.contatoIcon} /> {item.telefone}</Text>
                            <View style={styles.icons}>

                                <IconButton
                                    icon="whatsapp"
                                    iconColor={'#fff'}
                                    size={26}
                                    onPress={() => {
                                        Linking.openURL(`${item.linkWhatsapp}`);
                                    }}
                                />
                                <IconButton
                                    icon="email"
                                    iconColor={'#fff'}
                                    size={26}
                                    onPress={() => {
                                        Linking.openURL(`${item.linkEmail}`);
                                    }}
                                />
                                <IconButton
                                    icon="linkedin"
                                    iconColor={'#fff'}
                                    size={26}
                                    onPress={() => {
                                        Linking.openURL(`${item.linkLinkedin}`);
                                    }}
                                />
                                <IconButton
                                    icon="instagram"
                                    iconColor={'#fff'}
                                    size={26}
                                    onPress={() => {
                                        Linking.openURL(`${item.linkInstragram}`);
                                    }}
                                />
                                <IconButton
                                    icon="github"
                                    iconColor={'#fff'}
                                    size={26}
                                    onPress={() => {
                                        Linking.openURL(`${item.linkGithub}`);
                                    }}
                                />
                            </View>
                        </View>
                    )} />

            </View>


        </SafeAreaView>
    );
};



export default TelaContato;