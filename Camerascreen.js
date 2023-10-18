import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

class CameraScreen extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.props.navigation.navigate('CropImage', { imageUri: data.uri });
    }
  };

  render() {
    return (
      <View>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={{ flex: 1 }}
        />
        <Button title="Take Picture" onPress={this.takePicture} />
      </View>
    );
  }
}

export default CameraScreen;