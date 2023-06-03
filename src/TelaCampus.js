import React from 'react';
import { IconButton, ActivityIndicator, Button, TextInput, List, Avatar, Card } from 'react-native-paper';
import { View, Text, FlatList, SafeAreaView, Image, ScrollView, } from 'react-native';
import styles from '../Styles/StyleTelaCampus';

function RenderizarCampus() {

  const campi = [
    {
      id:1,
      nome: 'Benedito Bentes',
      anoFundacao: 2016,
      diretor: 'Alexandre Bonfim',
      // img: require(''),
    },
    {
      id:2,
      nome: 'Poço',
      anoFundacao: 1909,
      diretor: 'Damião Augusto',
      // img: require(''),
    },
    {
      id:3,
      nome: 'Marechal deodoro',
      anoFundacao: 1995,
      diretor: 'Éder Souza.',
      // img: require(''),
    },
    {
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
  
 
  

export default TelaCampus;