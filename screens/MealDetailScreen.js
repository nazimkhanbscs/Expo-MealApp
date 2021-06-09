import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import Text from "../components/Text";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <View style={{ marginVertical: 1 }}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={{}}>{selectedMeal.duration}m</Text>
          <Text style={{}}>{selectedMeal.complexity.toUpperCase()}</Text>
          <Text st yle={{}}>
            {selectedMeal.affordability.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <ListItem>{step}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData, props) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <IconButton
        name="ios-star"
        size={20}
        // color={Colors.accentColor}
        color="white"
        onPress={() => console.log("hello")}
        // onPress={() => Alert.alert("You Pressed star Button")}
        style={{ marginRight: 40 }}
      />
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 22,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
