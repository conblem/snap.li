import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import { Camera, Permissions } from 'expo';

import CameraMenu from '../components/CameraMenu'

const styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    photo: {
        flex: 1
    }
})

export default class CameraContainer extends Component {
    state = {
        hasCameraPermission: null,
        position: Camera.Constants.Type.front,
        camera: null,
        photo: null
    }
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    switchCamera = () => {
        this.setState({
            position: this.state.position === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back,
        });
    }
    snap = async () => {
        if (!this.camera) return
        const { base64 } = await this.camera.takePictureAsync({ base64: true })
        const photo = "data:image/jpg;base64," + base64
        this.setState({ photo })
    }
    send = () => {
        const { navigation } = this.props
        const { photo } = this.state
        navigation.navigate('Send', { photo })
    }
    render() {
        const { hasCameraPermission, position, photo } = this.state
        if (hasCameraPermission != true) return <Text>Permission</Text>
        return <Camera ref={ref => this.camera = ref} style={styles.camera} type={position}>
            <View style={styles.container}>
                {photo ? <Image source={{ uri: photo }} style={styles.photo} /> : <View />}
                <CameraMenu snap={photo ? this.send : this.snap} close={() => this.setState({ photo: null })} switchCamera={this.switchCamera} />
            </View>
        </Camera>
    }
}