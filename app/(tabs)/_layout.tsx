import { Tabs } from 'expo-router';

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2364AA',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        },
        tabBarLabelStyle: {
          color: 'white',
          fontSize: 12,
          fontWeight: 'bold',
          padding: 10,
        },
      }}
    >
      <Tabs.Screen name='index' options={{ tabBarLabel: 'Home' }} />
      <Tabs.Screen name='wallet' options={{ tabBarLabel: 'Wallet' }} />
      <Tabs.Screen name='store' options={{ tabBarLabel: 'Store' }} />
      <Tabs.Screen
        name='leaderboard'
        options={{ tabBarLabel: 'LeaderBoard' }}
      />
      <Tabs.Screen name='settings' options={{ tabBarLabel: 'Settings' }} />
    </Tabs>
  );
};
