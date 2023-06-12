import 'react-native-gesture-handler';
import { useEffect, useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { View, Alert } from 'react-native';
import { IconButton, Text, ActivityIndicator } from 'react-native-paper';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../Styles/StyleTelaPrincipalComMenu';
import TelaCarregando from './TelaCarregando';

// chave api google
const GOOGLE_MAPS_APIKEY = 'AIzaSyBRMU4LkxXu-mcV8mtB-p0R5jBR0V1iWI8';


function TelaPrincipal() {
    const [localizacao, setLocalizacao] = useState(null);
    const [carregando, setCarregando] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [mostrarRota, setMostrarRota] = useState(false);
    const [compartilharBus, setCompartilharBus] = useState(false);
    const [destinoIFALMaceio, setdestinoIFALMaceio] = useState({
        latitude: -9.6650989, longitude: -35.7300404, latitudeDelta: 0.0622, longitudeDelta: 0.01921,
    });
    // -9.6650989,-35.7300404

    const ativarMostrarRota = () => {
        { localizacao && mostrarRota === false ? setMostrarRota(true) : setMostrarRota(false) }

    };
    const ativarCompartilharBus = () => {
        if (localizacao === null) {

            Alert.alert(
                'Verifique se o GPS esta ligado',
                'Impossivel compartilha sua localização.',
                [
                    {
                        text: 'Cancelar',
                        style: 'cancel',
                    },
                    {
                        text: 'Ativar GPS',

                    },
                ],

            );
            return;
        }
        compartilharBus === false ? setCompartilharBus(true) : setCompartilharBus(false);

    };

    useEffect(() => {
        (async () => {

            let { granted } = await Location.requestForegroundPermissionsAsync();
            if (!granted) {
                setErrorMsg('A permissão para acessar o local foi negada');

                alert("A permissão para acessar o local foi negada")
                return;
            }
            let localizacao = await Location.getCurrentPositionAsync({});

            {
                MapView &&
                    setLocalizacao(localizacao);
                setLocalizacao({
                    latitude: localizacao.coords.latitude,
                    longitude: localizacao.coords.longitude,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.1699,
                    // latitudeDelta: 0.0622,
                    // longitudeDelta: 0.01921,
                })
            }

        }

        )

            ();

    }, []);

    const mapRef = useRef(null);

    const localicacaoAtual = () => {
        mapRef.current.animateToRegion(localizacao);

    };
    const localicacaoIFALRioLargo = () => {
        mapRef.current.animateToRegion(destinoIFALMaceio);

    };


    if (carregando === true) {

        return (
            <View style={styles.paginaMenu}>
                <TelaCarregando />
                <Text>Por favor liga o GPS para continuar</Text>
            </View>
        );
    }
    return (
        <View style={styles.paginaMenu}>
            <MapView style={styles.mapView}
                ref={mapRef}
                initialRegion={localizacao}
                showsUserLocation={true}
                showsMyLocationButton={false}
            >
                <Marker
                    coordinate={destinoIFALMaceio}
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

                {compartilharBus &&
                    <Marker coordinate={localizacao}
                        anchor={{ x: 0.5, y: 0.5 }}
                    >
                        <IconButton
                            icon="bus-school"
                            size={38}
                            iconColor='#EBCE08'
                            mode='outlined'

                        />
                    </Marker>
                }
                {/* validade do google vencinda por isso não estou conseguindo a rota */}
                {mostrarRota &&
                    <MapViewDirections
                        origin={localizacao}
                        destination={destinoIFALMaceio}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={6}
                        strokeColor="green"
                    />
                }

            </MapView>

            <IconButton
                style={styles.mostrarMarkerSchool}
                icon={'school'}
                iconColor={'#fff'}
                containerColor={'#000'}
                size={34}
                onTouchEnd={localicacaoIFALRioLargo}
            />
            <IconButton
                style={styles.myLocationButton}
                icon={'crosshairs-gps'}
                iconColor={'#fff'}
                size={34}
                containerColor={'#000'}
                onTouchEnd={localicacaoAtual}
            />
            <IconButton
                style={styles.mostrarRotaIFAL}
                icon={'map-marker-path'}
                iconColor={'#fff'}
                containerColor={'#000'}
                size={34}
                onTouchEnd={ativarMostrarRota}
            />
            <IconButton style={styles.buttonCompartilharLocalizacao}
                icon="bus-marker"
                iconColor={'#fff'}
                size={55}
                containerColor={'#000'}
                onPress={ativarCompartilharBus}

            />

        </View>

    );
}

export default TelaPrincipal;