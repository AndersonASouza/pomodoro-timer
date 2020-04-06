import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight + 20
  },
  textConfiguration: {
    fontSize: 30
  }
});
