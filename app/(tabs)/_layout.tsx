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
      })}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Home',
          tabBarButton: (props) => (
            <CustomTabBarButton route='home' {...props}>
              <Octicons name='home' size={25} color={COLORS.white} />
            </CustomTabBarButton>
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tabs.Screen
        name='wallet'
        options={{
          tabBarLabel: 'Wallet',
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Entypo name='wallet' size={25} color={COLORS.white} />
            </CustomTabBarButton>
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tabs.Screen
        name='store'
        options={{
          tabBarLabel: 'Store',
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <FontAwesome5 name='store' size={25} color={COLORS.white} />
            </CustomTabBarButton>
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tabs.Screen
        name='leaderboard'
        options={{
          tabBarLabel: 'LeaderBoard',
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <FontAwesome name='trophy' size={25} color={COLORS.white} />
            </CustomTabBarButton>
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          tabBarLabel: 'Settings',
          tabBarButton: (props) => (
            <CustomTabBarButton route='settings' {...props}>
              <Ionicons
                name='settings-outline'
                size={25}
                color={COLORS.white}
              />
            </CustomTabBarButton>
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
