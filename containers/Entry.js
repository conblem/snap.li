import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

import Login from './Login'
import Chats from './Chats'

const Entry = ({ uid, chats }) =>
  uid !== "" ? <Chats /> : <Login />;

const mapStateToProps = state => ({
  uid: state.user.uid
});

export default connect(mapStateToProps)(Entry);
