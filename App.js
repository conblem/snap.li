import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>Test hoi</Text>
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
