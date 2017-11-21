import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

import Login from './Login'
import Main from './Main'

const Entry = ({ uid, chats }) =>
  uid !== "" ? <Main style={{ flex: 1 }} /> : <Login />;

const mapStateToProps = state => ({
  uid: state.user.uid
});

export default connect(mapStateToProps)(Entry);
