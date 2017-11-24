import React, { Component } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import firebase from "firebase";

import Screen from "../components/Screen";

export default class Login extends Component {
  state = {
    error: "",
    email: "",
    password: ""
  };
  login = async () => {
    const { email, password } = this.state;
    if (email === "" || password === "") return;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({ error: "" });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    return (
      <Screen title="Settings">
        <View>
          <Text>{this.state.error}</Text>
          <TextInput onChangeText={email => this.setState({ email })} />
          <TextInput
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
          />
          <Button onPress={this.login} title="Login" />
        </View>
      </Screen>
    );
  }
}
