import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { FC, memo } from 'react';

interface QuestionProps {
  item: {
    category?: string | null;
    correct_answer: string;
    difficulty?: string;
    incorrect_answers: string[];
    question: string;
    type?: string;
    onPress: () => void;
  };
}

const insertCorrectAnswer = (
  correctAnswer: string,
  incorrectAnswers: string[]
): string[] => {
  const answers = [...incorrectAnswers];
  const randomIndex = Math.floor(Math.random() * (answers.length + 1));
  answers.splice(randomIndex, 0, correctAnswer);
  return answers;
};

const getPrefix = (index: number): string => {
  const prefixes = ['A', 'B', 'C', 'D'];
  return prefixes[index] || '';
};

const Question: FC<QuestionProps> = ({ item }) => {
  if (!item) return null;

  const allAnswers = insertCorrectAnswer(
    item.correct_answer,
    item.incorrect_answers
  );
  return (
    <View>
      <View className='mt-10 border-8 rounded-xl border-questionBox w-full items-center p-10'>
        <Text className='text-white text-2xl font-semibold'>Question</Text>
        <Text className='text-white text-2xl font-semibold text-center mt-5'>
          {decodeURIComponent(item.question)}
        </Text>
      </View>

      <View className='mt-7'>
        <Text className='text-white text-xl font-semibold'>
          Choose correct option
        </Text>
        {allAnswers.map((answer, index) => (
          <Pressable
            key={index}
            className='bg-white mt-5 p-5 rounded-full flex-row items-center justify-start active:bg-green-600'
            onPress={item.onPress}
          >
            <Text className='font-semibold text-red-600'>
              {getPrefix(index)}.
            </Text>
            <Text className=''> {decodeURIComponent(answer)}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default memo(Question);
