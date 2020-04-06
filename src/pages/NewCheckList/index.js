import React from "react";
import { View, Text } from "react-native";

import styles from "./style.js";

export default function NewCheckList(props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>New Check List</Text>
      </View>
      <View></View>
    </View>
  );
}
