import 'react-native-gesture-handler';
import { useEffect, useState, useRef } from 'react';
// import MapView from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import * as Location from 'expo-location';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/StyleTelaPrincipalComMenu';
import { IconButton, MD3Colors } from 'react-native-paper';



function TelaPrincipal() {
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
        <View style={styles.paginaMenu}>


            <MapView style={styles.mapView}
              provider={PROVIDER_GOOGLE}
                initialRegion={location}
                showsUserLocation={true}
               showsMyLocationButton={true}
               myLocationButtonStyle={styles.myLocationButton}
      
            />

            <IconButton style={styles.buttonCompartilharLocalizacao}
                icon="bus-marker"
                iconColor={'#fff'}
                size={55}
                containerColor={'#000'}
                onPress={() => console.log('Funcionando') + alert('Funcionando')}
            />

        </View>

    );
}
export default TelaPrincipal;