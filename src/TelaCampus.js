import axios from 'axios';
import { useState, useEffect } from 'react';
import { IconButton, Avatar, ActivityIndicator, Button } from 'react-native-paper';
import { View, Text, FlatList, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dentro de um componente funcional

import styles from '../Styles/StyleTelaCampus';

function RenderizarCampus() {
  const [campi, setCampi] = useState([]);
  const navigation = useNavigation();
  // const [renderizarNovamente, setRenderizarNovamente] = useState(false);

  useEffect(() => {
    fetchData();
    console.log("Full useEffect: ");
  }, []);

// https://mockapi.io/projects
// Login com gitHub

  async function fetchData() {
    try {
      const response = await axios.get('https://6480815ff061e6ec4d496548.mockapi.io/campi');
      const data = response.data;
      setCampi(data);
    } catch (error) {
      console.error(error);
    }
  }

  // const chamaRender = () =>{
  //   renderizarNovamente === false ? setRenderizarNovamente(true):setRenderizarNovamente(false);
  //   console.log("OnPress chamaRender: ", renderizarNovamente);
  // }

  if (campi.length === 0) {
    return (
      <View style={styles.container}>

        <ActivityIndicator
          animating={true}
          color={'#fff'}
          size={'large'}
        />
        <Text style={{ fontWeight: 600, color: "#fff", marginTop: 30, }}>Carregando...</Text>
      </View>
    );
  };
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
                    navigation.navigate('Mapa', { itemId: item});
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
      <Text style={styles.titulo}>Câmpus IFAL</Text>
      <RenderizarCampus />
      <Text style={styles.developer}>Developer by Antonio Victor - 2023</Text>
    </View>
  );
}

export default TelaCampus;
