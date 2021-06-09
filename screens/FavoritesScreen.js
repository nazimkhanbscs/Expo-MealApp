import React from "react";
import { Ionicons } from "@expo/vector-icons";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <Ionicons
        name="ios-menu"
        size={30}
        color="white"
        style={{ marginLeft: 10 }}
        onPress={() => {
          navigationData.navigation.toggleDrawer();
        }}
      />
    ),
  };
};
export default FavoritesScreen;
