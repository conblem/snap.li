import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";
import Entry from "./containers/Entry";

console.ignoredYellowBox = ["Setting a timer"];

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
});

export default () => (
  <View style={styles.app}>
    <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    <Provider store={store}>
      <Entry />
    </Provider>
  </View>
);
