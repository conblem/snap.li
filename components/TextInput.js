import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 8,
    backgroundColor: "#E7E7E7",
    borderWidth: 0,
    borderRadius: 12,
    padding: 8
  }
});

export default props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={StyleSheet.flatten([styles.textInput, props.style])}
  />
);
