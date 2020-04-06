import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe6e9"
    // paddingHorizontal: 24,
    // marginTop: Constants.statusBarHeight + 20
  },
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  timer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  timerText: {
    fontSize: 65,
    fontWeight: "bold",
    color: "#34495e"
  },
  menuButton: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  button: {
    flex: 1,
    borderRadius: 8,
    // backgroundColor: "#bdc3c7",
    alignItems: "center",
    justifyContent: "center"
  }
});
