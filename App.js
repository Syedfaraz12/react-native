import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CameraScreen from './src/CameraScreen';
import CropImageScreen from './src/CropImageScreen';

const AppNavigator = createStackNavigator(
  {
    Camera: CameraScreen,
    CropImage: CropImageScreen,
  },
  {
    initialRouteName: 'Camera',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);