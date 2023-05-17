import 'react-native-gesture-handler';
import { useEffect, useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/StyleTelaPrincipalComMenu';
import { IconButton, MD3Colors } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBRMU4LkxXu-mcV8mtB-p0R5jBR0V1iWI8';




function TelaPrincipal() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);
    const [showRoute, setShowRoute] = useState(false);
    const [destination, setDestination] = useState({
        latitude: -9.511487,
        longitude: -35.803943
    });

    const [region, setRegion] = useState({
        latitude: -9.511487,
        longitude: -35.803943,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.01921,
    });

    const handleShowRoute = () => {
        setShowRoute(true);
    };




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

    const mapRef = useRef(null);

    const handlePressMyLocation = () => {

        mapRef.current.animateToRegion(location);
    };
    const localicacaoIFALRioLargo = () => {

        mapRef.current.animateToRegion(region);
    };

    return (
        <View style={styles.paginaMenu}>


            <MapView style={styles.mapView}
                ref={mapRef}
                initialRegion={location}
                showsUserLocation={true}
                showsMyLocationButton={false}



            >
                <Marker
                    coordinate={region}
                    anchor={{ x: 0.5, y: 0.5 }}
                >
                    <View style={styles.marker}>
                        <IconButton
                            icon="map-marker"
                            size={65}
                            iconColor={'#ff0000'}

                            style={styles.icon}
                        />
                        <IconButton
                            icon="school"
                            size={22}
                            iconColor={'#fff'}
                            containerColor={'#000000'}
                            style={styles.checkIcon}
                        />
                    </View>
                </Marker>

                {showRoute && (
                    <MapViewDirections
                        origin={location}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={6}
                        strokeColor="green"
                    />
                )}
            </MapView>
            <View style={styles.myLocationButton} onTouchEnd={handlePressMyLocation}>
                <IconButton
                    icon={'crosshairs-gps'}
                    iconColor={'#fff'}
                    size={34}
                    containerColor={'#000'}

                />
            </View>

            <IconButton
                style={styles.mostrarMarkerSchool}
                icon={'school'}
                iconColor={'#fff'}
                containerColor={'#000'}
                size={34}
                onTouchEnd={localicacaoIFALRioLargo}
            />
            <IconButton
                style={styles.mostrarRotaIFAL}
                icon={'map-marker-path'}
                iconColor={'#fff'}
                containerColor={'#000'}
                size={34}
                onPress={() => console.log('Funcionando') + alert('Funcionando')}
            />
            <IconButton style={styles.buttonCompartilharLocalizacao}
                icon="bus-marker"
                iconColor={'#fff'}
                size={55}
                containerColor={'#000'}
                onPress={handleShowRoute}

            />

        </View>

    );
}



export default TelaPrincipal;