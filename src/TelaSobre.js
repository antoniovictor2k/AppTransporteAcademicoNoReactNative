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
                    O aplicativo está sendo desenvolvindo com intuito de ajudar os estudante,
                    em relação ao transporte escolar, a ideia foi criar um app no qual o mesmo possam compartilhar
                    sua localização com os demais e assim facilitar o acesso ao transporte escolar no local exato e, em
                    um horário aproximado que o transporte vai
                    esta passando no ponto, através do compartilhamento de outros alunos.
                </Text>
                <Text style={styles.sobTitulo}>
                    Linguagens e programas utilizados
                </Text>
                <Text style={styles.textoPadrao}>
                    JavaScript, Css, Sql, Sequelize, Node.js,
                    Express, Figma, GitHub, Visual Studio, React native, MongoDB, Vercel.
                </Text>
                <Text style={styles.sobTitulo}>
                    Developer by JEVA system
                </Text>
                <Text style={styles.textoPadrao}>
                    JEVA system, vem dos nomes dos desenvolvedores, JE de Jeallyson e VA de Antonio Victor, System de sistemas.
                </Text>
                <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
            </View>
        </ScrollView>

    );
}

export default TelaSobre;