import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight + 20
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  },
  titleText: {
    fontSize: 30
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  boxText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15
  },
  listText: {
    fontSize: 20,
    alignItems: "center"
  },
  addTask: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 20
  }
});
