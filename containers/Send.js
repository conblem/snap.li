import React from "react";
import { StyleSheet, FlatList, Button } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import ListTile from "../components/ListTile";

import { requestPostSnap } from "../store/actions";

const Send = ({ send, navigation }) => (
  <Screen title="Send" subTitle="Choose a friend">
    <Button
      onPress={() => {
        console.log(navigation);
        send("NKQgmUHb73To7ww4ZmmGXYkP3Gt2", navigation.state.params.photo);
      }}
      title="Send"
    />
    <FlatList data={[]} renderItem={ListTile} />
  </Screen>
);

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  send: (to, photo) => dispatch(requestPostSnap({ to, photo }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Send);
