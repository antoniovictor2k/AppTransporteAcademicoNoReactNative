import { IconButton, ActivityIndicator, Button, TextInput, List, Avatar, } from 'react-native-paper';
import { View, Text, FlatList, SafeAreaView, Image, ScrollView, } from 'react-native';
import styles from '../Styles/StyleTelaCampus';

function RenderizarCampus() {

  const campi = [
    {
      instituto: 'Arapiraca',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/arapiraca.jpeg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Batalha',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/batalha.jpeg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Benedito Bentes',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/beneditoBentes.jpeg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Coruripe',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/coruripe.jpeg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Maceió',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/maceio.jpg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Maragogi',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/maragogi.webp'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Marechal Deodoro',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/marechalDeodoro.png'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Murici',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/murici.jpg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Palmeira dos Índios',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/palmeiraDosIndios.webp'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Penedo',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/penedo.jpg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Piranhas',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/piranhas.jpg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Rio Largo',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/rioLargo.webp'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    
    {
      instituto: 'Santana do Ipanema',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/santanaDoIpanema.jpeg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'São Miguel dos Campos',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/saoMiguelDosCampus.jpg'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Satuba',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/satuba.png'),
      linkInstagram: '',
      linkSiteOficial: '',
      linkGoogleMaps: '',
    },
    {
      instituto: 'Viçosa',
      longitude: 4534534,
      latitude: 44784345,
      img: require('../assets/CampusIFAL/vicosa.jpeg'),
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
            <Avatar.Image size={100} source={item.img} />
            <View style={styles.itemContent}>
              <Text style={styles.instituto}>{item.instituto}</Text>
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