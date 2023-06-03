import { IconButton, ActivityIndicator, Button, TextInput, List, Avatar, } from 'react-native-paper';
import { View, Text, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';
import styles from '../Styles/StyleTelaCampus';

function RenderizarCampus() {

  const campi = [
    {
      nome: 'Benedito Bentes',
      anoFundacao: 2016,
      diretor: 'Alexandre Bonfim',
      // img: require(''),
    },
    {
      nome: 'Poço',
      anoFundacao: 1909,
      diretor: 'Damião Augusto',
      // img: require(''),
    },
    {
      nome: 'Marechal deodoro',
      anoFundacao: 1995,
      diretor: 'Éder Souza.',
      // img: require(''),
    },
    // {
    //   nome: 'Satuba',
    //   anoFundacao: 1911,
    //   diretor: 'Uilliane Faustino',
    //   // img: require(''),
    // },
    // {
    //   nome: 'Rio Largo',
    //   anoFundacao: 2014,
    //   diretor: 'Edel Alexandre',
    //   // img: require(''),
    // },
    // {
    //   nome: 'Viçosa',
    //   anoFundacao: 2016,
    //   diretor: 'Valdomiro Odilon',
    //   // img: require(''),
    // },
    // {
    //   nome: 'Viçosa',
    //   anoFundacao: 2016,
    //   diretor: 'Valdomiro Odilon',
    //   // img: require(''),
    // },
    // {
    //   nome: 'Viçosa',
    //   anoFundacao: 2016,
    //   diretor: 'Valdomiro Odilon',
    //   // img: require(''),
    // },
    // {
    //   nome: 'Viçosa',
    //   anoFundacao: 2016,
    //   diretor: 'Valdomiro Odilon',
    //   // img: require(''),
    // },
    // {
    //   nome: 'Viçosa',
    //   anoFundacao: 2016,
    //   diretor: 'Valdomiro Odilon',
    //   // img: require(''),
    // },
  ];


  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={campi}
      renderItem={({ item }) => (
        <View>
          <List.Item
            style={styles.list}
            title={() => (
              <Text style={styles.sobTitulo}>
                IFAL - Campus:{' '}
                <Text style={styles.sobTitulo}>{item.nome}</Text>
              </Text>
            )}
            description={() => (
              <View>
                <Text style={styles.sobTitulo}>
                  Inaugurado em:{' '}
                  <Text style={styles.sobTitulo}>
                    {item.anoFundacao}
                  </Text>
                </Text>
                <Text style={styles.sobTitulo}>
                  Diretor(a):{' '}
                  <Text style={styles.sobTitulo}>{item.diretor}</Text>
                </Text>
              </View>
            )}
            left={(props) => <Avatar.Image size={50} source={item.img} />}
          />
        </View>
      )}
    />
      <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
  </SafeAreaView>
);

};

function TelaCampus(){
return(
  <View style={styles.main}>
  <View style={styles.container}>
    <Text style={styles.titulo}>Antonio</Text>
<SafeAreaView>
    <RenderizarCampus />
</SafeAreaView>
  </View>
    <Text style={styles.developer}>Developer by JEVA System - 2023</Text>

</View>
)

};

export default TelaCampus;