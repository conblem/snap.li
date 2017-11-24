import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1
  },
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 24,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold"
  },
  textArea: {
    justifyContent: "flex-end"
  },
  children: {
    marginTop: 20
  }
});

export default ({ title, subTitle = "", HeaderComponent = View, children }) => (
  <View style={styles.screen}>
    <View style={styles.header}>
      <View style={styles.textArea}>
        <Text>{subTitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <HeaderComponent />
    </View>
    <View style={styles.children}>{children}</View>
  </View>
);
