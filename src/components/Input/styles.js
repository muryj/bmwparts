import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input: {
    flex: 1,
    paddingLeft: 10,
    textAlign: "left",
    color: "black",
    fontSize: 17,
    letterSpacing: -0.16,
    fontWeight: "400"
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5
  },
  inputWrapperFocused: {
    borderBottomColor: "blue"
  },
  inputUnfocused: {
  }
});
