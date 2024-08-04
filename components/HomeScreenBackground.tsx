import { View, SafeAreaView, ImageBackground } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { BackgroundImage } from '@/constants/images';

interface HomeScreenBackgroundProps {
  children: ReactNode;
}

const HomeScreenBackground: FC<HomeScreenBackgroundProps> = ({ children }) => {
  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <ImageBackground
        source={BackgroundImage}
        className='h-2/5 w-full flex-1 bg-primary rounded-br-2xl'
      >
        {/* <View /> */}
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreenBackground;
