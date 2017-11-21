import React from "react";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";
import Entry from "./containers/Entry";

console.ignoredYellowBox = ['Setting a timer'];

export default () => (
  <Provider store={store}>
    <View>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Main />
    </View>
  </Provider>
);
