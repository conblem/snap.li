import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  addNavigationHelpers,
  TabNavigator,
  StackNavigator
} from "react-navigation";

import Send from "./Send";
import Chats from "./Chats";
import Camera from "./Camera";

const Tabs = TabNavigator({
  Chats: {
    screen: Chats,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarVisible: false
    }
  }
});

export const Stack = StackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Send: {
      screen: Send
    }
  },
  { headerMode: "none" }
);

const Main = ({ navigation, dispatch }) => (
  <Stack
    navigation={addNavigationHelpers({
      dispatch,
      state: navigation
    })}
  />
);

const mapStateToProps = ({ navigation }) => ({
  navigation
});

export default connect(mapStateToProps)(Main);
