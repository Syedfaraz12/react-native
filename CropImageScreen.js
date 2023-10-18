import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

class CropImageScreen extends Component {
  state = {
    imageUri: this.props.navigation.getParam('imageUri', null),
  };

  cropImage = () => {
    ImagePicker.openCropper({
      path: this.state.imageUri,
      width: 300,
      height: 400,
    }).then((image) => {
      // Handle the cropped image as needed
      console.log(image);
    });
  };

  render() {
    return (
      <View>
        <Image
          source={{ uri: this.state.imageUri }}
          style={{ width: '100%', height: 400 }}
        />
        <Button title="Crop Image" onPress={this.cropImage} />
      </View>
    );
  }
}

export default CropImageScreen;