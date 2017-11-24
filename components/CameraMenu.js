import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  menu: {
    height: 100,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    backgroundColor: "white"
  }
});

export default ({ switchCamera, snap, close }) => (
  <View style={styles.menu}>
    <TouchableOpacity onPress={switchCamera}>
      <MaterialIcons name="switch-camera" size={30} color="white" />
    </TouchableOpacity>
    <TouchableOpacity onPress={snap}>
      <View style={styles.circle} />
    </TouchableOpacity>
    <TouchableOpacity onPress={close}>
      <MaterialIcons name="close" size={30} color="white" />
    </TouchableOpacity>
  </View>
);
