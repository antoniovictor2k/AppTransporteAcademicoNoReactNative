import React, { useEffect, useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { View, Alert, Image } from "react-native";
import {
  IconButton,
  Text,
  ActivityIndicator,
  Button,
  List,
} from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import styles from "../Styles/StyleTelaPrincipalComMenu";

// A partir deste ponto, você pode acessar suas variáveis de ambiente normalmente usando process.env
const apiKey = process.env.GOOGLE_MAPS_APIKEY;

const GOOGLE_MAPS_APIKEY = "AIzaSyCmObYS2GipCgK-Ev4UvwKw_P9zbxq_yrI";

const localhost = "192.168.0.105";

function TelaPrincipal() {
  const route = useRoute();
  const { itemId, nomeDoUsuario } = route.params ?? {};
  // console.log(nomeDoUsuario)
  const mapRef = useRef(null);
  const [localizacao, setLocalizacao] = useState(null);
  const [verificarproviderStatus, setVerificarproviderStatus] = useState(null)
  // chama o use effcet do localização 
  const [activeUseEffect, SetActiveUseEffect] = useState(false)
  // !!! 
  const [localizacao_inicial, setLocalizacao_inicial] = useState({
    latitude: -9.5676652,
    latitudeDelta: 0.0222,
    longitude: -35.751119,
    longitudeDelta: 0.399,
  });
  const [localizacaoAtualDoOnibus, setLocalizacaoAtualDoOnibus] =
    useState(null);
  const [carregando, setCarregando] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [compartilharBusAtual, setCompartilharBusAtual] = useState(false);
  const [destinoIFALMaceio, setDestinoIFALMaceio] = useState({
    latitude: -9.6650989,
    longitude: -35.7300404,
    latitudeDelta: 0.0622,
    longitudeDelta: 0.01921,
  });
  const [opcoes_de_destino, setOpcoes_de_destino] = useState(false);
  const [destino_escolhido, setDestino_escolhido] = useState("");

  const [obterLocalizacao, setObterLocalizacao] = useState(false);
  const [display, setDisplay] = useState(false);
 
  // Guadar dados de quem esta enviando o destino.

  const [destino, setDestino] = useState("");
  const [activeCompartilhamento, setActiveCompartilhamento] = useState(true);
  const [compartilharBus, setCompartilharBus] = useState(false);
  const [idUser, setIdUser] = useState(null);

  // Guadar dados de quem enviou a localização

  const [receber_usuario, setReceber_usuario] = useState("");
  const [receber_destino, setReceber_destino] = useState("");
  const [receber_ultima_atualizacao, setReceber_ultima_atualizacao] =
    useState("");
  const [
    verificar_se_pode_enviar_localizacao,
    setVerificar_se_pode_enviar_localizacao,
  ] = useState(false);

  const id_banco_rota = "64d6e99b9685703099a16352";

  function exibirHoraMinuto() {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();

    const horaFormatada = hora < 10 ? `0${hora}` : hora;
    const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;

    return `${horaFormatada}:${minutoFormatado}`;
  }


  // obsevação aqui!!!


  //INICIO Verificar se localizaçao já esta sendo enviado

  async function receber_localizacao_do_onibus(id) {
    try {
      // passa o id para receber somente dados desse usuário;
      const response = await fetch(
        `https://back-end-transporte-academico.vercel.app/receberlocalizacao/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
        );
        
        const time = new Date();
        const timeHora = time.getHours();
      const json = await response.json();
      const busActive = json.compartilhando;
      const hora = parseInt(json.ultima_att_onibus);
      // console.log(json)
      // console.log(json.localizacao_atual_bus.latitude);
      // envia os nomes para o use useState e depois exibir na tela menu;

      setVerificar_se_pode_enviar_localizacao(json.compartilhando);
      setReceber_ultima_atualizacao(json.ultima_att_onibus);
      setReceber_usuario(json.usuario_id);
      setReceber_destino(json.destino_do_bus);

      setLocalizacaoAtualDoOnibus({
        latitude: json.localizacao_atual_bus.latitude,
        longitude: json.localizacao_atual_bus.longitude,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.1699,
      });

// console.log(timeHora, ' e ', hora);
      // mostrar marcação somente se estivem verdadeiro o compartilhamento.

      // add null se o comartilhamento vim false, para aparecer a messagem na tela
      
      if (busActive) {
        console.log("Chegando aqui... bus_atual");
      } else if (busActive !== true) {
        console.log("É falso ");
        setLocalizacaoAtualDoOnibus(null);
        
      }

      // console.log(json);
    } catch (error) {
      console.log(error);
      console.log("BackEnd não está retornando! Receber");
    }
  }

  // FIM  Verificar se localizaçao já esta sendo enviado


  const ativarDirecionarBusCompartilhado = () => {
    console.log("onPRESS ativarDirecionarBusCompartilhado!")
    SetActiveUseEffect(true);
    mapRef.current?.animateToRegion(localizacaoAtualDoOnibus);
    
  };
  const desativarCompartilharBus = () => {
    setCompartilharBusAtual(false);
    setCompartilharBus(false);
  };
  const ativarCompartilharBus = () => {
    setCompartilharBusAtual(false);
    setCompartilharBus(true);
  };
  const ativarCompartilharBusAtual = () => {
    setCompartilharBus(false);
    setCompartilharBusAtual(true);
  };
  const block_opcoes_de_destino = () => {
    setOpcoes_de_destino(!opcoes_de_destino);
  };

  //Inicio enviar localizaçao

  async function atualizarLocalizacao(id) {
    try {
      const dadosAtualizados = {};
      const horaMinutoAtual = exibirHoraMinuto();

      if (idUser) {
        dadosAtualizados.usuario_id = idUser;
      }

      if (localizacao) {
        dadosAtualizados.localizacao_atual_bus = localizacao;
      }

      if (destino) {
        dadosAtualizados.destino_do_bus = destino;
      }

      if (destino) {
        dadosAtualizados.ultima_att_onibus = horaMinutoAtual;
      }

      dadosAtualizados.compartilhando = activeCompartilhamento;

      const response = await fetch(
        `https://back-end-transporte-academico.vercel.app/enviarcompartilhamento/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dadosAtualizados),
        }
      );

      const json = await response.json();

      // tenatr verificar se esta em true
      if (json === "O true em uso.") {
        console.log("Error, alguem esta compartilhando");
        return;
      }

      if (response.ok) {
        console.log("localização esta sendo enviada para o back end");
      } else {
        console.log("Erro ao atualizar os dados do usuário");
      }
    } catch (error) {
      console.log(error);
      console.log("BackEnd não está respondendo! ATT");
    }
  }

  //FIM enviar localizaçao

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        let { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
          setErrorMsg("A permissão para acessar o local foi negada");
          return;
        }
  
        let providerStatus = await Location.getProviderStatusAsync({});
        if (!providerStatus.gpsAvailable) {
          setErrorMsg("O GPS não está ativado");
          setVerificarproviderStatus(providerStatus);
          setCarregando(true);
          setCompartilharBusAtual(false);
          setCompartilharBus(false);
          return;
        }
       
        setCarregando(false);
       
      

      } catch (error) {
        console.error("Erro ao obter permissões ou status do GPS:", error);
      }
    };
  
    // Inicializa o temporizador quando o componente é montado
    fetchLocationData();
  
    
  }, [verificarproviderStatus, compartilharBus, activeUseEffect]);


  const ChameLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocalizacao({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0187,
        longitudeDelta: 0.04299,
      });
    } catch (error) {
      // Lidar com erros aqui, por exemplo, exibir uma mensagem de erro
      console.error("Erro ao obter a localização:", error);
    }
  };

  useEffect(() => {
    let intervalId;
console.log("teste antes da validação ChameLocation ")
if (obterLocalizacao) {
  // Iniciar a obtenção contínua da localização a cada 10 segundos (ou outro intervalo de sua escolha)
  
  
  intervalId = setInterval(() => {
    ChameLocation();
    
    console.log("teste DEPOIS da validação ChameLocation 10SS")
      }, 4000); // Intervalo de 10 segundos (em milissegundos)
    }

    return () => {
      // Limpar o intervalo quando o componente for desmontado ou quando parar de obter a localização
      clearInterval(intervalId);
    };
  }, [obterLocalizacao]);

  
console.log(localizacao)
  // teste
  


  useEffect(() => {
    const intervalAPI = setInterval(() => {
      (async () => {
      

        if (compartilharBus === true) {
          console.log("Compartilhamento Ativado...");
          setOpcoes_de_destino(false);
          setIdUser(nomeDoUsuario);
          if (destino_escolhido === "rio-largo") {
            setDestino("Rio Largo");
            console.log("rio largo escolhido");

            atualizarLocalizacao(id_banco_rota);
          } else {
            console.log("Nenhum destino");
          }
        } else if (compartilharBus === false) {
          receber_localizacao_do_onibus(id_banco_rota);
        }
      })();
    }, 2000); // Chama a cada 3 segundo (2000 milissegundos)

    return () => {
      clearInterval(intervalAPI);
    };
  });




  const localizacaoAtual = () => {
    console.log("onPRESS localizacaoAtual!")
    SetActiveUseEffect(true);
    mapRef.current?.animateToRegion(localizacao);
  };

  const centralizarLocalizacaoDeMarker = () => {
    mapRef.current?.animateToRegion(destinoIFALMaceio);
  };

  useEffect(() => {
    if (itemId) {
      console.log("itemid");
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
    if (nomeDoUsuario) {
      console.log("nomeDoUsuario");
      setIdUser(nomeDoUsuario);
    }
  }, [itemId, nomeDoUsuario]);
  // console.log(idUser)
  // abrir configuração do depositivo;

  const getLocation = async () => {
    
  
    try {
      // Solicita permissão de localização ao usuário
      
      let providerStatus = await Location.getProviderStatusAsync({});
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (providerStatus.gpsAvailable) {
        setErrorMsg("O GPS está ativado");
        SetActiveUseEffect(true);
        // setCarregando(false);
      }
      
      console.log("TEste proviStu: ", providerStatus)
      
      if (status !== "granted") {
        console.log("A permissão de localização foi negada.");
        setVerificarproviderStatus(providerStatus)
        return;
      }
      
     
      console.log("teste ", status);
      
      // Obtém a localização atual do usuário
      let location = await Location.getCurrentPositionAsync({});

      console.log("teste LOcal: ",location)

      // Faça algo com as coordenadas de latitude e longitude aqui
      // console.log(`location OK`);
    } catch (error) {
      console.log("Erro ao obter a localização:", error);

    }
  };


  

  // No Expo,
  // não há uma maneira direta de abrir as configurações de localização do dispositivo para ativar manualmente.
  // O Expo não fornece essa funcionalidade específica

  // setDisplay(true);
if(display){
  setTimeout(() => {
    console.log('teste display')
    setDisplay(false);
  }, 4000);
};

  const OpcoesMenuBus = () => (
    <List.Section
      style={{ backgroundColor: "#ccc", padding: 10, borderRadius: 12 }}
    >
      <List.Subheader>Enviar ou Receber Localização</List.Subheader>
      <List.Item
        title="Enviar Localização"
        onPress={() => {
           setDestino_escolhido("rio-largo");
         setDisplay(true);
          ativarCompartilharBus();
          setObterLocalizacao(true)
          setOpcoes_de_destino(false);
        }}
        left={() => <List.Icon icon="upload" />}
      />
      <List.Item
        title="Receber Localização"
        onPress={() => {
          setDisplay(false);
          ativarCompartilharBusAtual();
          setOpcoes_de_destino(false);
          setObterLocalizacao(false);
        }}
        left={() => <List.Icon icon="download" />}
      />

      <List.Item
        title="Parar"
        onPress={() => {
          setDisplay(false);
          desativarCompartilharBus();
           setOpcoes_de_destino(false); 
           setObterLocalizacao(false);
        }}
        left={() => <List.Icon icon="stop" />}
      />
    </List.Section>
  );

  if (carregando) {
    return (
      <View style={styles.containerFlex}>
        <Text style={styles.carregando}> {errorMsg} </Text>
        <Text style={styles.carregando}>
          Por favor ligue o GPS para continuar
        </Text>
        <Button
          icon={"cog-sync-outline"}
          textColor="#000"
          buttonColor="#B3DCE5"
          onPress={getLocation}
          style={styles.buttonAtivarGPS}
        >
          Ativar GPS
        </Button>
      </View>
    );
  }

  // console.log(localizacao);

  return (
    <View style={styles.paginaMenu}>
      <MapView
        style={styles.mapView}
        ref={mapRef}
        initialRegion={localizacao_inicial}
        showsUserLocation={true}
        showsMyLocationButton={false}
      >
        <Marker coordinate={destinoIFALMaceio} anchor={{ x: 0.5, y: 0.5 }}>
          <View style={styles.marker}>
            <IconButton
              icon="map-marker"
              size={65}
              iconColor={"#ff0000"}
              style={styles.icon}
            />
            <IconButton
              icon="school"
              size={22}
              iconColor={"#fff"}
              containerColor={"#000000"}
              style={styles.checkIcon}
            />
          </View>
        </Marker>

        {compartilharBus && localizacao !== null ? (
          <Marker coordinate={localizacao} anchor={{ x: 0.5, y: 0.5 }}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/bus_des.png")}
            />
          </Marker>
        ) : null}

        {compartilharBusAtual && localizacaoAtualDoOnibus !== null ? (
          <Marker
            coordinate={localizacaoAtualDoOnibus}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <View style={styles.localizacao_atual_bus}>
              <Text style={{ color: "#000", fontSize: 12 }}>
                {receber_usuario} - {receber_destino}
              </Text>
              <Text style={{ color: "#000", fontSize: 12 }}>
                Última Att {receber_ultima_atualizacao}
              </Text>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/bus_rem.png")}
              />
            </View>
          </Marker>
        ) : null}
        
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
        icon="bus-marker"
        iconColor="#fff"
        containerColor="#000"
        size={34}
        onTouchEnd={ativarDirecionarBusCompartilhado}
      />
      {compartilharBusAtual && localizacaoAtualDoOnibus === null ? (
        <View style={styles.viemBusAtual}>
          <Text style={styles.textBusAtual}>
            Não há Rota ou Histórico disponível!
          </Text>
        </View>
      ) : null}

{ display &&

        <View style={styles.viemBusAtual2}>
          <Text style={styles.textBusAtual}>
          Iniciando compartilhamento...
          </Text>
        </View>
}
      {opcoes_de_destino && <OpcoesMenuBus />}
      <IconButton
        style={styles.buttonCompartilharLocalizacao}
        icon="bus-multiple"
        iconColor="#fff"
        size={55}
        containerColor="#000"
        onPress={block_opcoes_de_destino}
      />
    </View>
  );
}

export default TelaPrincipal;
