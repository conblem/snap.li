import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { Camera, Permissions } from "expo";

import CameraMenu from "../components/CameraMenu";
import { navigateSend } from "../store/actions";

const styles = StyleSheet.create({
  camera: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  photo: {
    flex: 1
  }
});

class CameraContainer extends Component {
  state = {
    hasCameraPermission: null,
    position: Camera.Constants.Type.front,
    camera: null,
    photo: null
  };
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  switchCamera = () => {
    this.setState({
      position:
        this.state.position === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };
  snap = async () => {
    if (!this.camera) return;
    const { uri } = await this.camera.takePictureAsync();
    console.log(uri);
    console.log("uri");
    this.setState({ photo: uri });
  };
  send = () => this.props.send(this.state.photo);
  render() {
    const { hasCameraPermission, position, photo } = this.state;
    if (hasCameraPermission != true) return <Text>Permission</Text>;
    return (
      <View style={styles.container}>
        {photo === null ? (
          <Camera
            ref={ref => (this.camera = ref)}
            style={styles.camera}
            type={position}
          />
        ) : (
          <Image source={{ uri: photo }} style={styles.photo} />
        )}
        <CameraMenu
          snap={photo === null ? this.snap : this.send}
          close={() => this.setState({ photo: null })}
          switchCamera={this.switchCamera}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ navigation }) => ({ navigation });
const mapDispatchToProps = dispatch => ({
  send: photo => dispatch(navigateSend(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer);
