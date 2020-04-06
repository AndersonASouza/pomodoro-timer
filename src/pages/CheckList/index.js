import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./style.js";

export default function CheckList() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Lista de tarefas</Text>
      </View>
      <View style={styles.addTask}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <FontAwesome name="plus-circle" size={60} color="#c0392b" />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            { isFinished: true, name: "API do aplicativo", time: 3 },
            { isFinished: false, name: "Testes automatizados", time: 2 },
            { isFinished: true, name: "API do aplicativo", time: 3 },
            { isFinished: false, name: "Testes automatizados", time: 2 },
            { isFinished: true, name: "API do aplicativo", time: 3 },
            { isFinished: false, name: "Testes automatizados", time: 2 },
            { isFinished: true, name: "API do aplicativo", time: 3 },
            { isFinished: false, name: "Testes automatizados", time: 2 },
            { isFinished: true, name: "API do aplicativo", time: 3 },
            { isFinished: false, name: "Testes automatizados", time: 2 },
            { isFinished: true, name: "API do aplicativo", time: 3 },
            { isFinished: false, name: "Testes automatizados", time: 2 },
            { isFinished: true, name: "API do aplicativo", time: 3 },
            { isFinished: false, name: "Testes automatizados", time: 2 }
          ]}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <FontAwesome
                name={item.isFinished ? "check-square-o" : "square-o"}
                size={40}
                color={item.isFinished ? "#2ecc71" : "#e74c3c"}
                style={
                  item.isFinished ? { marginRight: 0 } : { marginRight: 5 }
                }
              />
              <View style={styles.boxText}>
                <Text style={styles.listText}>{item.name}</Text>
                <Text style={styles.listText}>{item.time}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
