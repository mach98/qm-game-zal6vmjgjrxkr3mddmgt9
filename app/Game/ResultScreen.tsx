import { SafeAreaView, View, Text, Image } from 'react-native';
import React from 'react';
import { router, useGlobalSearchParams } from 'expo-router';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Smile, Frown } from '@/constants/images';

const ResultScreen = () => {
  const { correctAnswersCount, incorrectAnswersCount } =
    useGlobalSearchParams();
  return (
    <SafeAreaView className='flex-1 p-5 mt-10'>
      <Text className='self-center text-2xl font-semibold'>Results</Text>
      <View className='border-2 border-questionBox px-10 py-7 items-center mt-5 rounded-lg bg-questionBoxBg'>
        <Text className='font-semibold'>Total time used 01:00</Text>
        <View className='flex-row mt-5 justify-between w-4/5 h-7 items-center'>
          <View className='flex-row justify-between  w-1/3'>
            <Text className='font-semibold'>{correctAnswersCount} Correct</Text>
            <AntDesign name='checkcircle' color={'green'} size={20} />
          </View>
          <View className='border-r h-full' />
          <View className='flex-row justify-between  w-1/3'>
            <Text className='font-semibold'>
              {incorrectAnswersCount} Incorrect
            </Text>
            <MaterialIcons name='cancel' color={'red'} size={20} />
          </View>
        </View>
      </View>
      <View className='border-2 border-questionBox px-10 py-7 items-center mt-5 rounded-lg bg-questionBoxBg'>
        <Image
          source={correctAnswersCount === 10 ? Smile : Frown}
          className='w-1/4 h-1/4'
        />
        <Text className='text-lg font-semibold'>Better luck next time</Text>
        <Text className='text-2xl font-semibold'>
          Congratulations you won 🎉
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
