import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Configuration from "./pages/Configuration";
import CheckList from "./pages/CheckList";
import Timer from "./pages/Timer";

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ecf0f1"
        inactiveColor="#b2bec3"
        screenOptions={{
          headerShown: false
        }}
        barStyle={{ backgroundColor: "#c0392b" }}
      >
        <Tab.Screen
          name="CheckList"
          component={CheckList}
          options={{
            tabBarLabel: "Lista",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="check-square-o" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          screenOptions={{ headerShown: false }}
          name="Timer"
          component={Timer}
          options={{
            tabBarLabel: "Timer",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="clock-o" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Configuration"
          component={Configuration}
          options={{
            tabBarLabel: "Configuração",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="gear" color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
