// Font and Asset loading using Hooks

import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
// import MealsNavigator from "./navigation/MealsNavigator";
import MealsFavTabNavigator from "./navigation/MealsNavigator";

export default function App() {
  const [loaded] = useFonts({
    ...Ionicons.font,
    // Montserrat: require("./assets/fonts/Montserrat.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <MealsFavTabNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ccccff",
    alignItems: "center",
    justifyContent: "center",
  },
});
