// const GOOGLE_MAPS_APIKEY = 'AIzaSyBRMU4LkxXu-mcV8mtB-p0R5jBR0V1iWI8';
import React, { useEffect, useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { View, Alert, Linking, Platform } from 'react-native';
import { IconButton, Text, ActivityIndicator, Button } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import Settings from 'react-native-settings';
import Constants from 'expo-constants';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../Styles/StyleTelaPrincipalComMenu';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCmObYS2GipCgK-Ev4UvwKw_P9zbxq_yrI';
// AIzaSyCmObYS2GipCgK-Ev4UvwKw_P9zbxq_yrI
const localhost = '192.168.0.105';


function TelaPrincipal() {

  const route = useRoute();
  const { itemId } = route.params ?? {};
  const mapRef = useRef(null);
  const [localizacao, setLocalizacao] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mostrarRota, setMostrarRota] = useState(false);
  const [compartilharBus, setCompartilharBus] = useState(false);
  const [destinoIFALMaceio, setDestinoIFALMaceio] = useState({
    latitude: -9.6650989, longitude: -35.7300404, latitudeDelta: 0.0622, longitudeDelta: 0.01921,
  });


  const ativarMostrarRota = () => {
    localizacao && setMostrarRota(!mostrarRota);
  };

  const ativarCompartilharBus = () => {
    if (!localizacao) {
      Alert.alert(
        'Verifique se o GPS está ligado',
        'Impossível compartilhar sua localização, ligue GPS para Continuar',
        [
          {
            text: 'Tentar novamente',
            style: 'cancel',
          },
          {
            text: 'Ativar GPS',
          },
        ],
      );
      return;
    }
    setCompartilharBus(!compartilharBus);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      (async () => {

        let { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
          setErrorMsg('A permissão para acessar o local foi negada');
          return;
        }

        let providerStatus = await Location.getProviderStatusAsync();
        if (!providerStatus.gpsAvailable) {
          setErrorMsg('O GPS não está ativado');
          setCarregando(true);
          return;
        }
        setCarregando(false);
        // obter dados a casa 2 segundos da localização
        if (compartilharBus === true) {
          let localicaoCompartinhada = await Location.getCurrentPositionAsync({});
        };

      })();


    }, 2000); // Chama a cada 2 segundo (2000 milissegundos)

    return () => {
      clearInterval(interval);
    };
  });
  // Correçao de tela piscando ....
  useEffect(() => {
    async function obterLocalizacao() {
      setCarregando(false);
      try {
        let localizacao = await Location.getCurrentPositionAsync({});
        setLocalizacao({
          latitude: localizacao.coords.latitude,
          longitude: localizacao.coords.longitude,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.1699,
        });
      } catch (error) {
        console.log('Erro ao obter a localização:', error);
      }
    }
    if (!localizacao) {
      console.log(" localizacaoAtual(); OK")
    }
    localizacaoAtual();
    obterLocalizacao();
  }, []);

  // console.log(destinoIFALMaceio);


  const localizacaoAtual = () => {
    mapRef.current.animateToRegion(localizacao);
  };

  const centralizarLocalizacaoDeMarker = () => {
    mapRef.current?.animateToRegion(destinoIFALMaceio);
  };


  useEffect(() => {

    if (itemId) {
      setDestinoIFALMaceio({
        latitude: parseFloat(itemId.localizacao.latitude),
        longitude: parseFloat(itemId.localizacao.longitude),
        latitudeDelta: parseFloat(itemId.localizacao.latitudeDelta),
        longitudeDelta: parseFloat(itemId.localizacao.longitudeDelta),
      });
      // chamando useeffect localização
      mapRef.current?.animateToRegion({
        latitude: parseFloat(itemId.localizacao.latitude),
        longitude: parseFloat(itemId.localizacao.longitude),
        latitudeDelta: parseFloat(itemId.localizacao.latitudeDelta),
        longitudeDelta: parseFloat(itemId.localizacao.longitudeDelta),
      });
    }
  }, [itemId]);

  // abrir configuração do depositivo;
  const handleOpenSettings = () => {
    if (Constants.appOwnership === 'expo') {
      // Código específico para o Expo
      Linking.openSettings();
    }
    else {
      // Código específico para ambiente nativo
      if (Platform.OS === 'android') {
        // Lógica para Android nativo
        const result = Settings.openSetting('ACTION_LOCATION_SOURCE_SETTINGS');
      } else {
        // Lógica para iOS nativo
        alert("Sistema IOS indisponivel no momento...")
      }
    }
  };

  // No Expo, 
  // não há uma maneira direta de abrir as configurações de localização do dispositivo para ativar manualmente. 
  // O Expo não fornece essa funcionalidade específica

  if (carregando) {
    return (
      <View style={styles.containerFlex}>
        <ActivityIndicator
          animating={true}
          color={'#fff'}
          size={'large'}
        />
        <Text style={styles.carregando}> {errorMsg} </Text>
        <Text style={styles.carregando}>Por favor ligue o GPS para continuar</Text>
        <Button
          icon={'cog-sync-outline'}
          textColor='#000'
          buttonColor='#B3DCE5'
          onPress={handleOpenSettings}
          style={styles.buttonAtivarGPS}>
          Ativar GPS
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.paginaMenu}>
      <MapView
        style={styles.mapView}
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

        {compartilharBus && (
          <Marker
            coordinate={localizacao}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <IconButton
              icon="bus-school"
              size={38}
              iconColor="#000"
            />
          </Marker>
        )}
        {mostrarRota && (
          <MapViewDirections
            origin={localizacao}
            destination={destinoIFALMaceio}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={6}
            strokeColor="green"
          />
        )}
      </MapView>

      <IconButton
        style={styles.mostrarMarkerSchool}
        icon="school"
        iconColor="#fff"
        containerColor="#000"
        size={34}
        onTouchEnd={centralizarLocalizacaoDeMarker}
      />
      <IconButton
        style={styles.myLocationButton}
        icon="crosshairs-gps"
        iconColor="#fff"
        size={34}
        containerColor="#000"
        onTouchEnd={localizacaoAtual}
      />

      <IconButton
        style={styles.mostrarRotaIFAL}
        icon="map-marker-path"
        iconColor="#fff"
        containerColor="#000"
        size={34}
        onTouchEnd={ativarMostrarRota}
      />
      <IconButton
        style={styles.buttonCompartilharLocalizacao}
        icon="bus-marker"
        iconColor="#fff"
        size={55}
        containerColor="#000"
        onPress={ativarCompartilharBus}
      />
    </View>
  );
}

export default TelaPrincipal;
