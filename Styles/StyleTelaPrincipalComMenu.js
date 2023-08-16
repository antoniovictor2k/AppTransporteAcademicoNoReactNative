import { StyleSheet } from "react-native";

const stylesTelaMenu = StyleSheet.create({
  paginaMenu: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#113036",
  },
  containerFlex: {
    backgroundColor: "#113036",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carregando: {
    fontWeight: 600,
    color: "#fff",
    marginTop: 30,
  },
  buttonAtivarGPS: {
    width: 350,
    height: 45,
    color: "#000",
    backgroundColor: "#B3DCE5",
    borderRadius: 6,
    marginBottom: 0,
    marginTop: 20,
    paddingTop: 5,
    marginBottom: 60,
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconLocalizacaoMenu: {
    top: 390,
    alignSelf: "center",
  },
  marker: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  checkIcon: {
    position: "absolute",
    bottom: 30,
  },

  localizacao_atual_bus: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'#cccccc89',
    borderRadius: 12,
  },

  tinyLogo: {
    width: 50,
    height: 40,
    transform: [{ rotate: "260deg" }],
  },

  myLocationButton: {
    position: "absolute",
    bottom: 100,
    right: 50,
  },
  myLocationButton: {
    position: "absolute",
    bottom: 120,
    right: 12,
  },
  mostrarRotaIFAL: {
    position: "absolute",
    bottom: 180,
    right: 12,
  },
  mostrarMarkerSchool: {
    position: "absolute",
    bottom: 240,
    right: 12,
  },
  imgLogo: {
    marginTop: 45,
    width: 165,
    height: 100,
  },
  optionsTextos: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
  },
  optionsTextosNome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
  },
  optionsTextosEmail: {
    color: "#fff",
    fontSize: 10,
    fontWeight: 400,
  },
  optionsIcones: {
    color: "#fff",
    fontSize: 28,
  },
  optionsIconesPerfil: {
    color: "#fff",
    fontSize: 52,
  },
  viemBusAtual: {
    marginBottom: 300,
    backgroundColor: "#fff",
    alignSelf: "center",
    width: 90,
    borderRadius: 8,
    textAlien: "center",
  },
  textBusAtual:{
    textAlign:'center'
},
  buttonCompartilharLocalizacao: {
    marginBottom: 50,
    alignSelf: "center",
  },
});

export default stylesTelaMenu;
