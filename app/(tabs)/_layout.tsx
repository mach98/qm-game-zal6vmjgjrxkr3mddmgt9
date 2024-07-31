import { Tabs } from 'expo-router';

export default () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='index' />
      <Tabs.Screen name='wallet' />
      <Tabs.Screen name='store' />
      <Tabs.Screen name='leaderboard' />
      <Tabs.Screen name='settings' />
    </Tabs>
  );
};
