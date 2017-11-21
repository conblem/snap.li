import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

import Login from './Login'

const Main = ({ email }) =>
  email !== "" ? <Text>{email}</Text> : <Login />;

const mapStateToProps = state => ({
  email: state.user.email
});

export default connect(mapStateToProps)(Main);
