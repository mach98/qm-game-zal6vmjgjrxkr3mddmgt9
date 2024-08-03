import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, { useState, FC, useEffect } from 'react';
import { BackgroundImage } from '@/constants/images';
import useDecodedData from '@/hooks/useDecodedData';
import Question from '@/components/Question';
import useDataDecoded from '@/hooks/useDataDecoded';

interface GameScreenProps {
  item: {
    category?: string;
    correct_answer: string;
    difficulty?: string;
    incorrect_answers: string[];
    question: string;
    type?: string;
  };
}

const GameScreen: FC<GameScreenProps> = ({ item }) => {
  //const [questions, setQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const url =
    'https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986';
  //   const url = process.env.EXPO_PUBLIC_API_URL;

  const { data, loading, error } = useDecodedData(url);
  if (loading)
    return (
      <SafeAreaView className='bg-homeBg flex-1 items-center justify-center'>
        <ActivityIndicator size='large' color='#0000ff' />
      </SafeAreaView>
    );
  if (error) {
    console.error('Error in HomeScreen:', error);
    return <Text>Error: {error.message}</Text>;
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex + 1 < data.length ? prevIndex + 1 : 0
    );
  };

  // console.log('Rendered data:', data[currentQuestionIndex]);
  return (
    <SafeAreaView className='items-start justify-start p-5 bg-primary flex-1'>
      <View className='flex-row justify-between w-1/2 items-center'>
        <Text className='text-white text-xl'>00.00.46</Text>
        <Text className='text-white text-xl'>Timer</Text>
      </View>
      <Question
        item={{ ...data?.[currentQuestionIndex], onPress: handleNextQuestion }}
      />
    </SafeAreaView>
  );
};

export default GameScreen;
