import { SafeAreaView, View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { BackgroundImage } from '@/constants/images';

const Home = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray mt-16'>
      <View>
        <Image
          style={{ width: 200, height: 20 }}
          source={BackgroundImage}
          resizeMode='contain'
        />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
