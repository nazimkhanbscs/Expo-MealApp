// Font and Asset loading using Hooks

import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
// import MealsNavigator from "./navigation/MealsNavigator";

import { createStore, combineReducers } from "redux";
import MealsFavTabNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);
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

  return (
    <Provider store={store}>
      <MealsFavTabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ccccff",
    alignItems: "center",
    justifyContent: "center",
  },
});
