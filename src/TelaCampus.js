<<<<<<< HEAD
import { IconButton, ActivityIndicator, Button, TextInput, List, Avatar, } from 'react-native-paper';
=======
import React from 'react';
import { IconButton, ActivityIndicator, Button, TextInput, List, Avatar, Card } from 'react-native-paper';
>>>>>>> 230df8b170d8ea2e8d9d1f6a1f8c3b5aa1a8cdb4
import { View, Text, FlatList, SafeAreaView, Image, ScrollView, } from 'react-native';
import styles from '../Styles/StyleTelaCampus';

function RenderizarCampus() {

  const campi = [
    {
<<<<<<< HEAD
      instituto: 'Arapiraca',
      longitude: 4534534,
      latitude: 44784345,
=======
      id:1,
      nome: 'Benedito Bentes',
      anoFundacao: 2016,
      diretor: 'Alexandre Bonfim',
>>>>>>> 230df8b170d8ea2e8d9d1f6a1f8c3b5aa1a8cdb4
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
<<<<<<< HEAD
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
=======
      id:2,
      nome: 'Poço',
      anoFundacao: 1909,
      diretor: 'Damião Augusto',
>>>>>>> 230df8b170d8ea2e8d9d1f6a1f8c3b5aa1a8cdb4
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
<<<<<<< HEAD
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
=======
      id:3,
      nome: 'Marechal deodoro',
      anoFundacao: 1995,
      diretor: 'Éder Souza.',
>>>>>>> 230df8b170d8ea2e8d9d1f6a1f8c3b5aa1a8cdb4
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
<<<<<<< HEAD
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      // img: require(''),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },

  ];


  return (
    <View style={styles.container}>
      <FlatList
        data={campi}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Avatar.Image size={100} />
            {/* <Avatar.Image size={100} source={item.img} /> */}
            <View style={styles.itemContent}>
              <Text style={styles.instituto}>{item.instituto}</Text>
              <Text style={styles.localizacao}>
                Longitude:{' '}
                <Text style={styles.resLocalizacao}>{item.longitude}</Text>
              </Text>
              <Text style={styles.localizacao}>
                Latitude:{' '}
                <Text style={styles.resLocalizacao}>{item.latitude}</Text>
              </Text>
              <View style={styles.icones}>
                <IconButton
                  icon="instagram"
                  size={26}
                  iconColor={'#fff'}
                  onPress={() => console.log('ok')}
                />
                <IconButton
                  icon="web"
                  size={26}
                  iconColor={'#fff'}
                  onPress={() => console.log('ok')}
                />
                <IconButton
                  icon="map"
                  size={26}
                  iconColor={'#fff'}
                  onPress={() => console.log('ok')}
                />
              </View>
            </View>

          </View>
        )}
        numColumns={2} // Exibe os itens em duas colunas
      />
    </View>
  );
}

function TelaCampus() {
  return (
    <View style={styles.main}>
      <Text style={styles.titulo}>Campus IFAL</Text>
      <RenderizarCampus />
      <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
    </View>
  );
}
=======
      id:4,
      nome: 'Satuba',
      anoFundacao: 1911,
      diretor: 'Uilliane Faustino',
      // img: require(''),
    },
    {
      id:5,
      nome: 'Rio Largo',
      anoFundacao: 2014,
      diretor: 'Edel Alexandre',
      // img: require(''),
    },
    {
      id:6,
      nome: 'Viçosa',
      anoFundacao: 2016,
      diretor: 'Valdomiro Odilon',
      // img: require(''),
    },
    {
      id:7,
      nome: 'Viçosa',
      anoFundacao: 2016,
      diretor: 'Valdomiro Odilon',
      // img: require(''),
    },
    {
      id:8,
      nome: 'Viçosa 8',
      anoFundacao: 2016,
      diretor: 'Valdomiro Odilon',
      // img: require(''),
    },
    {
      id:9,
      nome: 'Viçosa',
      anoFundacao: 2016,
      diretor: 'Valdomiro Odilon',
      // img: require(''),
    },
    {
      id:10,
      nome: 'Nao sei',
      anoFundacao: 2016,
      diretor: 'Valdomiro Odilon',
      // img: require(''),
    },
  ];

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {campi.map((item) => (
            <View key={item.id} style={styles.list}>
              {/* <Avatar.Image size={60} source={item.img} /> */}
              <Image
        style={styles.imgIFAL}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
              {/* <View style={styles.listTexto}> */}
              <Text style={styles.sobTitulo}>
                Campus: <Text style={styles.sobTitulo}>{item.nome}</Text>
              </Text>
                <Text style={styles.sobTitulo}>
                  Logitudade:{' '}
                  <Text style={styles.sobTitulo}>{item.anoFundacao}</Text>
                </Text>
                <Text style={styles.sobTitulo}>
                  Latitude: <Text style={styles.sobTitulo}>{item.diretor}</Text>
                </Text>
              {/* </View> */}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  function TelaCampus() {
    return (
      <ScrollView style={styles.main}>
       
          <Text style={styles.titulo}>Campus - IFAL</Text>
         
            <RenderizarCampus />
          
        
        <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
      </ScrollView>
    );
  }
  
 
  
>>>>>>> 230df8b170d8ea2e8d9d1f6a1f8c3b5aa1a8cdb4

export default TelaCampus;