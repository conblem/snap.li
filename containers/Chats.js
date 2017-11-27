import React from "react";
import { StyleSheet, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import { formatRelative } from "date-fns";
import _ from "lodash";
import firebase from "firebase";

import Screen from "../components/Screen";
import ListTile from "../components/ListTile";

import { requestLogout, requestGetSnap } from "../store/actions";
import getChats from "../store/selectors/getChats";

const Chats = ({ chats, logout, getSnap }) => {
  const data = chats.map(chat => ({
    ...chat,
    onPress: ({ key, snaps }) => {
      console.log(key);
      console.log(snaps);
      getSnap(key, snaps[0]);
    }
  }));
  return (
    <Screen title="Snaps" subTitle="Keine neuen nachrichten">
      <Button title="Logout" onPress={logout} />
      <FlatList data={data} renderItem={ListTile} />
    </Screen>
  );
};

const mapStateToProps = state => ({
  chats: getChats(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(requestLogout()),
  getSnap: (from, snap) => dispatch(requestGetSnap({ from, snap }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
