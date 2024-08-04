import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { COLORS } from '@/constants/colors';

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} />
      <GestureHandlerRootView>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
}
