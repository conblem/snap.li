import React from "react";
import { StyleSheet, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import { formatRelative } from "date-fns";
import _ from "lodash";
import firebase from "firebase";

import Screen from "../components/Screen";
import ListTile from "../components/ListTile";

import { requestLogout } from "../store/actions";

const Chats = ({ chats, logout }) => {
  const data = _.map(chats, ({ user, timestamp }, key) => ({
    title: user,
    key,
    subTitle: formatRelative(new Date(timestamp * 1000), new Date()),
    onPress: console.log
  }));
  return (
    <Screen title="Snaps" subTitle="Keine neuen nachrichten">
      <Button title="Logout" onPress={logout} />
      <FlatList data={data} renderItem={ListTile} />
    </Screen>
  );
};

const mapStateToProps = state => ({
  chats: state.chats.items
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(requestLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
