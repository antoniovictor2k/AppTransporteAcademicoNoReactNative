import { IconButton, ActivityIndicator, Button, TextInput, List, Avatar, } from 'react-native-paper';
import { View, Text, FlatList, SafeAreaView, Image, ScrollView, } from 'react-native';
import styles from '../Styles/StyleTelaCampus';

function RenderizarCampus() {

  const campi = [
    {
      instituto: 'Arapiraca',
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

export default TelaCampus;