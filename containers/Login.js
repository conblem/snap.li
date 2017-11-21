import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'
import firebase from 'firebase'

import Screen from '../components/Screen'

export default class extends Component {
    state = {
        email: '',
        password: ''
    }
    login = async () => {
        const {email, password} = this.state
        if(email === "" || password === "") return
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        }
        catch(error) {
            console.error(error)
        }
    }
    render() {
        return <Screen title="Settings">
        <View>
            <TextInput onChangeText={email => this.setState({email})} />
            <TextInput onChangeText={password => this.setState({password})} secureTextEntry={true} />
            <Button onPress={this.login} title="Login" />
        </View>
    </Screen>
    }

}