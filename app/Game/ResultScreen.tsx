import { SafeAreaView, View, Text } from 'react-native';
import React from 'react';
import { router, useGlobalSearchParams } from 'expo-router';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const ResultScreen = () => {
  const { correctAnswersCount, incorrectAnswersCount } =
    useGlobalSearchParams();
  return (
    <SafeAreaView className='flex-1 p-5 mt-10'>
      <Text className='self-center text-2xl font-semibold'>Results</Text>
      <View className='border-2 border-questionBox p-10 items-center'>
        <Text>Total time used 01:00</Text>
        <View className='flex-row mt-5 justify-between w-4/5'>
          <View className='flex-row items-start justify-between'>
            <Text className='font-semibold'>{correctAnswersCount} Correct</Text>
            <AntDesign name='checkcircle' color={'green'} size={15} />
          </View>
          <View className='flex-row items-start justify-between'>
            <Text className='font-semibold'>
              {incorrectAnswersCount} Incorrect
            </Text>
            <MaterialIcons name='cancel' color={'red'} size={15} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
