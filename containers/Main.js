import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

const Main = ({ email }) =>
  email !== "" ? <Text>{email}</Text> : <Text>Please login</Text>;

const mapStateToProps = state => ({
  email: state.user.email
});

export default connect(mapStateToProps)(Main);
