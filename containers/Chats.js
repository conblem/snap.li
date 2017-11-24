import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import { formatRelative } from "date-fns";
import _ from "lodash";

import Screen from "../components/Screen";
import ListTile from "../components/ListTile";

const Chats = ({ chats }) => {
  const data = _.map(chats, ({ user, timestamp }, key) => ({
    title: user,
    key,
    subTitle: formatRelative(new Date(timestamp * 1000), new Date()),
    onPress: console.log
  }));
  return (
    <Screen title="Snaps" subTitle="Keine neuen nachrichten">
      <FlatList data={data} renderItem={ListTile} />
    </Screen>
  );
};

const mapStateToProps = state => ({
  chats: state.chats.items
});

export default connect(mapStateToProps)(Chats);
