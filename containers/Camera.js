import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Camera, Permissions } from 'expo';

const styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    menu: {
        height: 100,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    circle: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        backgroundColor: 'white'
    }
})

export default class extends Component {
    state = {
        hasCameraPermission: null,
        position: Camera.Constants.Type.front,
        camera: null
    }
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    switchCamera = () => {
        console.log('hoi')
        this.setState({
            type: this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back,
        });
    }
    snap = async () => {
        const { camera } = this.state
        if (!camera) return
        const { base64 } = await camera.takePictureAsync();
        const photo = 'data:image/jpg;base64,' + base64
        console.log(photo)
    }
    render() {
        const { hasCameraPermission, position } = this.state
        if (hasCameraPermission != true) return <Text>Permission</Text>
        return <Camera ref={camera => this.setState({ camera })} style={styles.camera} type={position}>
            <View style={styles.container}>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={this.switchCamera} >
                        <MaterialIcons name="switch-camera" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.snap}>
                        <View style={styles.circle} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="close" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </Camera>
    }
}