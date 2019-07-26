import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: "50%",
    resizeMode: "contain"
  },
  formControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    width: "70%",
    paddingHorizontal: 30
  },
  formControlsText: {
    fontSize: 17
  },
  form: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "70%",
    zIndex: 100
  },
  round1: {
    position: "absolute",
    borderRadius: 50,
    width: 1,
    height: 1,
    backgroundColor: "red",
    top: 0,
    left: 50,
    zIndex: 1
  },
  round2: {
    position: "absolute",
    borderRadius: 50,
    width: 1,
    height: 1,
    backgroundColor: "blue",
    top: 0,
    left: 200,
    zIndex: 1
  }
});
