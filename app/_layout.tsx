import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';

import '../global.css';

// export default Slot;

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <StatusBar />
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
