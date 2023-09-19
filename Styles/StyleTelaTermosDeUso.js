import { StyleSheet } from "react-native";

const styleTelaTermosDeUso = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#113036",
    padding: 20,
  },
  titulo: {
    marginTop: 40,
    marginBottom: 20,
    fontWeight: 700,
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
  buttonFechar: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 9999,
  },
  heading: {
    fontWeight: 700,
    fontSize: 22,
    color: "#fff",
    marginTop: 8,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: "#ccc",
  },
  listItem: {
    fontSize: 15,
    color: "#ccc",
  },
  developer: {
    marginTop: 70,
    marginBottom: 20,
    color: "#cccccc",
    textAlign: "center",
  },
});

export default styleTelaTermosDeUso;
