import { StyleSheet } from "react-native";

const stylesTelaMenu = StyleSheet.create({
  paginaMenu: {
    ...StyleSheet.absoluteFillObject,
    color: "#fff",
    backgroundColor: "#113036",
  },
  cabecalho: {
    marginLeft: 15,
    marginBottom: 10,
    color: "#fff",
    flexDirection: "row",
  },
  nomeDoAluno: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
  },
  emailDoAluno: {
    color: "#93B8C2",
    fontSize: 13,
    fontWeight: 600,
  },
  cabecalhoText: {
    marginTop: 10,
    marginLeft: 0,
  },
  linhaHorizotal: {
    backgroundColor: "#93B8C2",
    marginBottom: 30,
  },
  linhaHorizotal2: {
    backgroundColor: "#93B8C2",
    marginTop: 60,
    marginBottom: 35,
  },
  links: {
    margin: 20,
  },
  link: {
    color: "#93B8C2",
    fontSize: 14,
    fontWeight: 600,
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
  button: {
    marginTop: 50,
    margin: 15,
    borderRadius: 6,
  },
  developer: {
    marginTop: 110,
    marginBottom: 10,
    textAlign: "center",
    color: "#93B8C2",
  },
});

export default stylesTelaMenu;
