import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const IconButton = (props) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.container}>
      <TouchableComp>
        <Ionicons
          {...props}
          style={{ ...styles.icon, ...props.style }}
          color={Platform.OS === "android" ? props.color : Colors.primaryColor}
          size={25}
        />
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  icon: {
    marginRight: 15,
    marginLeft: 15,
  },
});

export default IconButton;
