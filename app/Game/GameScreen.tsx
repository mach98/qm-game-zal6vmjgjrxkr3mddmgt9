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
import Question, { insertCorrectAnswer } from '@/components/Question';
import useDataDecoded from '@/hooks/useDataDecoded';
import { router } from 'expo-router';

const GameScreen: FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const url =
    'https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986';
  //   const url = process.env.EXPO_PUBLIC_API_URL;

  const { data, loading, error } = useDecodedData(url);

  // useEffect(() => {
  //   if (data) {
  //     const currentQuestion = data[currentQuestionIndex];
  //     setAllAnswers(
  //       insertCorrectAnswer(
  //         currentQuestion.correct_answer,
  //         currentQuestion.incorrect_answers
  //       )
  //     );
  //   }
  // }, [data, currentQuestionIndex]);
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
    setSelectedAnswerIndex(null);
    if (currentQuestionIndex + 1 < data?.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      router.replace({
        pathname: '/Game/ResultScreen',
        params: {
          correctAnswersCount,
          incorrectAnswersCount,
        },
      });
    }
  };

  const handleAnswerSelection = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswersCount((prev) => prev + 1);
    } else {
      setIncorrectAnswersCount((prev) => prev + 1);
    }
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };

  //console.log('Rendered data:', data[currentQuestionIndex]);
  return (
    <SafeAreaView className='items-start justify-start p-5 bg-primary flex-1 mt-10'>
      <View className='flex-row justify-between w-1/2 items-center'>
        <Text className='text-white text-xl'>00.00.46</Text>
        <Text className='text-white text-xl'>Timer</Text>
      </View>
      <Question
        item={data?.[currentQuestionIndex]}
        selectedAnswerIndex={selectedAnswerIndex}
        setSelectedAnswerIndex={setSelectedAnswerIndex}
        onAnswerSelection={handleAnswerSelection}
      />
    </SafeAreaView>
  );
};

export default GameScreen;
