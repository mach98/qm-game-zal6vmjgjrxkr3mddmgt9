import { Stack } from 'expo-router';

export default () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='GameScreen' options={{ headerShown: false }} />
    </Stack>
  );
};
