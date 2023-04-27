import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useRef } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Text, TextInput, View, Image, Pressable, Linking } from 'react-native';
import styles from '../Styles/StyleTelaLogin';
import { IconButton, MD3Colors } from 'react-native-paper';


function TelaPrincipal({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('A permissão para acessar o local foi negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.01921,
      })


    })();
  }, []);

  let text = 'Esperando...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <View>


      <MapView style={{ height: 999, marginLeft:10,}}
        initialRegion={location}
        showsUserLocation={true}
      // loadingEnabled={true}
      />
      <IconButton style={{ top: -1000, marginTop: 40, marginLeft: 20, }}
        icon="menu"
        iconColor={'#fff'}
        size={35}
        containerColor={'#000'}
        onPress={() => navigation.navigate("TelaMenu")}
      />
      <IconButton style={{ top: -390, alignSelf: 'center', }}
        icon="map-marker-account"
        iconColor={'#fff'}
        size={55}
        containerColor={'#000'}
        onPress={() => console.log('Funcionando') + alert('Funcionando')}
      />

    </View>

  );
}




export default TelaPrincipal;