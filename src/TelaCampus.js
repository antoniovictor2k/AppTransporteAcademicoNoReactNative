import axios from 'axios';
import { useState, useEffect } from 'react';
import { IconButton, Avatar, } from 'react-native-paper';
import { View, Text, FlatList, Linking } from 'react-native';
import styles from '../Styles/StyleTelaCampus';

function RenderizarCampus() {
  const [campi, setCampi] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('https://6480815ff061e6ec4d496548.mockapi.io/campi');
      const data = response.data;
      setCampi(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={campi}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Avatar.Image size={100} source={{ uri: item.img }} />
            <View style={styles.itemContent}>
              <Text style={styles.instituto}>{item.nome}</Text>
              <View style={styles.icones}>
                <IconButton
                  icon="instagram"
                  size={26}
                  iconColor={'#fff'}
                  onPress={() => {
                    Linking.openURL(item.linkInstagram);
                  }}
                />
                <IconButton
                  icon="web"
                  size={26}
                  iconColor={'#fff'}
                  onPress={() => {
                    Linking.openURL(item.linkSiteOficial);
                  }}
                />
                <IconButton
                  icon="map"
                  size={26}
                  iconColor={'#fff'}
                  onPress={() => {
                    Linking.openURL(item.linkGoogleMaps);
                  }}
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

export default TelaCampus;
