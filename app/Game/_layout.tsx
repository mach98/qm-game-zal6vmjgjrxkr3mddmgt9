import { Stack } from 'expo-router';

export default () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='GameScreen' />
      <Stack.Screen name='ResultScreen' />
    </Stack>
  );
};
