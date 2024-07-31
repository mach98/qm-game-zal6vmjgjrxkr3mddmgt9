import { SafeAreaView, View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { BackgroundImage } from '@/constants/images';

const Home = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray'>
      <View>
        <ImageBackground
          source={BackgroundImage}
          className='h-1/2 w-full bg-primary'
        >
          <View className='p-5'>
            <View className='flex-row justify-between'>
              <Text>Home</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Home;
