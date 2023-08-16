import { Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/StyleTelaSobre';

function TelaSobre() {
    return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Sobre</Text>
                <Text style={styles.sobTitulo}>Introdução</Text>
                <Text style={styles.textoPadrao}>
                    O aplicativo está sendo desenvolvindo com intuito de ajudar os estudantes,
                    em relação ao transporte escolar, a ideia foi criar um app no qual os mesmos possam compartilhar
                    sua localização com os demais e assim facilitar o acesso ao transporte escolar no local exato e, em
                    um horário aproximado que o transporte vai
                    está passando no ponto, através do compartilhamento de outros alunos.
                </Text>
                <Text style={styles.sobTitulo}>
                    Linguagens e Programas Utilizados
                </Text>
                <Text style={styles.textoPadrao}>
                    JavaScript, Sql, Sequelize, Node.js,
                    Express, CSS3, Figma, GitHub, Visual Studio, React native, MongoDB.
                </Text>
                <Text style={styles.sobTitulo}>
                    Desenvolvedor Antonio Victor
                </Text>
                <Text style={styles.textoPadrao}>
                    Desenvolvedor Front End Web e Mobile, conhecimento em JavaScript, HTML5, CSS3, React Native, MongoDB, Angular, Python, Mysql, Git.
                </Text>
                <Text style={styles.developer}>Developer by Antonio Victor - 2023</Text>
            </View>
        </ScrollView>

    );
}

export default TelaSobre;