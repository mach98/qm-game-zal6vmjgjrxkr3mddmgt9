import CustomTabBarButton from '@/components/CustomTabBarButton';
import { COLORS } from '@/constants/colors';
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Octicons,
} from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: COLORS.white,
        tabBarActiveTintColor: COLORS.white,
        tabBarIcon: ({ color, size, focused }) => {
          switch (route.name) {
            case 'index':
              return <Octicons name='home' size={20} color={color} />;
            case 'wallet':
              return <Entypo name='wallet' size={20} color={color} />;
            case 'store':
              return <FontAwesome5 name='store' size={20} color={color} />;
            case 'leaderboard':
              return <FontAwesome name='trophy' size={20} color={color} />;
            case 'settings':
              return (
                <Ionicons name='settings-outline' size={20} color={color} />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Home',
          tabBarButton: (props) => (
            <CustomTabBarButton route='home' {...props} />
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tabs.Screen
        name='wallet'
        options={{
          tabBarLabel: 'Wallet',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tabs.Screen
        name='store'
        options={{
          tabBarLabel: 'Store',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tabs.Screen
        name='leaderboard'
        options={{
          tabBarLabel: 'LeaderBoard',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          tabBarLabel: 'Settings',
          tabBarButton: (props) => (
            <CustomTabBarButton route='settings' {...props} />
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    borderTopWidth: 0,
    height: 60,
  },
});
