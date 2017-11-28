import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import firebase from "firebase";

import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

export default class Login extends Component {
  state = {
    error: "",
    email: "",
    password: ""
  };
  login = () => {
    console.log("login");
    const { email, password } = this.state;
    if (email === "" || password === "") return;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("success");
        this.setState({ error: "" });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  };
  render() {
    return (
      <Screen title="Login">
        <View>
          <Text>{this.state.error}</Text>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder="Mail"
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
            placeholder="Password"
          />
          <Button onPress={this.login} title="Login" />
        </View>
      </Screen>
    );
  }
}
