import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { FC, memo, useState } from 'react';
import { COLORS } from '@/constants/colors';

interface QuestionProps {
  item: {
    category?: string | null;
    correct_answer: string;
    difficulty?: string;
    incorrect_answers: string[];
    question: string;
    type?: string;
  };
  selectedAnswerIndex: number | null;
  setSelectedAnswerIndex: (index: number | null) => void;
  onAnswerSelection: (isCorrect: boolean) => void;
}

export const insertCorrectAnswer = (
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

const Question: FC<QuestionProps> = ({
  item,
  selectedAnswerIndex,
  setSelectedAnswerIndex,
  onAnswerSelection,
}) => {
  if (!item) return null;

  const allAnswers = insertCorrectAnswer(
    item.correct_answer,
    item.incorrect_answers
  );

  const handlePress = (index: number) => {
    setSelectedAnswerIndex(index);
    const isCorrect = allAnswers[index] === item.correct_answer;
    onAnswerSelection(isCorrect);
  };
  return (
    <View className='w-full'>
      <View
        className='mt-10 rounded-xl border-questionBox items-center p-10 bg-white'
        style={{ borderWidth: 8, borderColor: COLORS.questionBox }}
      >
        <Text className='text-black text-2xl font-semibold'>Question</Text>
        <Text className='text-black text-xl font-semibold text-center mt-5'>
          {decodeURIComponent(item.question)}
        </Text>
      </View>

      <View className='mt-7'>
        <Text className='text-white text-xl font-semibold'>
          Choose correct option
        </Text>
        {allAnswers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              selectedAnswerIndex === index && styles.selectedAnswerButton,
              selectedAnswerIndex === index &&
                allAnswers[index] === item.correct_answer &&
                styles.correctAnswerButton,
              selectedAnswerIndex === index &&
                allAnswers[index] !== item.correct_answer &&
                styles.incorrectAnswerButton,
            ]}
            onPress={() => handlePress(index)}
          >
            <Text className='font-semibold'>{getPrefix(index)}.</Text>
            <Text style={{ marginLeft: 10, fontSize: 15, alignSelf: 'center' }}>
              {' '}
              {decodeURIComponent(answer)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  answerButton: {
    backgroundColor: 'white',
    marginTop: 10,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  selectedAnswerButton: {
    borderColor: 'white',
  },
  correctAnswerButton: {
    backgroundColor: COLORS.correctAnswerColor,
    borderColor: COLORS.correctAnswerBorder,
    borderWidth: 2,
  },
  incorrectAnswerButton: {
    backgroundColor: COLORS.incorrectAnswerColor,
    borderColor: COLORS.incorrectAnswerBorder,
    borderWidth: 2,
    borderRadius: 50,
  },
});

export default memo(Question);
