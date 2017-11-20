import React from "react";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";
import Main from "./containers/Main";

export default () => (
  <Provider store={store}>
    <View>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Main />
    </View>
  </Provider>
);
