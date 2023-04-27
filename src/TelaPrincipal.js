import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useRef } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import {Text, TextInput, View, Image, Pressable, Linking }   from 'react-native';

import styles from '../Styles/StyleTelaLogin';


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
        <Text style={{position:'relative', fontSize:20, color:'#fff', backgroundColor:'#000', }}>Ola antonio</Text>
<MapView style={{height:1000,}}
  initialRegion={location}
  showsUserLocation={true}
  loadingEnabled={true}
/>

    </View>

  );
}

export default TelaPrincipal;