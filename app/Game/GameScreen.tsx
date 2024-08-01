import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { BackgroundImage } from '@/constants/images';

const GameScreen = () => {
  return (
    <View>
      <ImageBackground source={BackgroundImage}></ImageBackground>
    </View>
  );
};

export default GameScreen;
