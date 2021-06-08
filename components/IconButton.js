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
    <TouchableComp activeOpacity={0.6}>
      <View style={styles.container}>
        <Ionicons
          {...props}
          style={{ ...styles.icon, ...props.style }}
          color={Platform.OS === "android" ? props.color : Colors.primaryColor}
        />
      </View>
    </TouchableComp>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
});

export default IconButton;
