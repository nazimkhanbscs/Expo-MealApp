import React from "react";
import { Text, StyleSheet } from "react-native";

function BtnText(props) {
  return (
    <Text {...props} style={{ ...styles.text, ...props.style }}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});
export default BtnText;
