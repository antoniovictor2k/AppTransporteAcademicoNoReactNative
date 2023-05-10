import { Text, TextInput, View, Image, Pressable, Linking, ScrollView } from 'react-native';
import styles from '../Styles/StyleTelaSobre';
import { IconButton, MD3Colors } from 'react-native-paper';

function TelaSobre() {
    return (

        <ScrollView style={styles.main}>

            <View style={styles.container}>
                <Text style={styles.titulo}>Sobre</Text>


                <Text style={styles.sobTitulo}>Introdução</Text>
                <Text style={styles.textoPadrao}>
                    O aplicativo está sendo desenvolvindo com intuito de ajudar os estudante,
                    em relação ao transporte escolar, a ideia foi criar um app no qual os mesmo possam compartilhar
                    sua localização com os demais e assim facilitar o acesso ao transporte escolar no local exato e, em
                    um horário aproximado que o transporte vai
                    esta passando no ponto, através do compartilhamento de outros alunos.
                </Text>
                <Text style={styles.sobTitulo}>
                    Linguagens e programas utilizados
                </Text>
                <Text style={styles.textoPadrao}>
                    HTML linguagem de marcação, javaScript, Css, Sql, Sequelize, Node.js,
                    Express, Figma, GitHub, Visual Studio, Reach native, Myqsl, Postman.
                </Text>
                <Text style={styles.sobTitulo}>
                    Deseveloper by JEVA system
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