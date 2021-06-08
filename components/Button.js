import React from "react";
import { View, TouchableNativeFeedback, StyleSheet } from "react-native";
import Text from "../components/Text";
const Button = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={{ ...styles.buttonContainer, ...props.style }}>
        <Text style={{ ...styles.BtnText, ...props.style }}>
          {" "}
          {props.children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: 190,
    marginTop: 10,
    backgroundColor: "#969696",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnText: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
  },
});
export default Button;
