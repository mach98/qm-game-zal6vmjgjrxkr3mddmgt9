import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, { useState, FC, useEffect } from 'react';
import { BackgroundImage } from '@/constants/images';
import useDecodedData from '@/hooks/useDecodedData';

interface GameScreenProps {
  item: {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  };
}

const GameScreen: FC<GameScreenProps> = ({ item }) => {
  const [questions, setQuestions] = useState(null);
  const url =
    'https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986';

  const { data, loading, error } = useDecodedData(url);

  // const insertCorrectAnswer

  console.log('Rendered data:', data);
  return (
    <SafeAreaView className='items-start justify-start p-5 bg-primary flex-1'>
      <View className='flex-row justify-between w-1/2 items-center'>
        <Text className='text-white text-xl'>00.00.46</Text>
        <Text className='text-white text-xl'>Timer</Text>
      </View>
      <View className='mt-10 border-8 rounded-xl border-questionBox w-full items-center p-10'>
        <Text className='text-white text-2xl font-semibold'>Question</Text>
        <Text className='text-white text-2xl font-semibold text-center mt-5'>
          {item?.question}
        </Text>
      </View>

      <View className='mt-7'>
        <Text>Choose correct option</Text>
        {/* {item.} */}
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;
