import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { COLORS } from '@/constants/colors';
import Svg, { Path } from 'react-native-svg';

interface CustomTabBarButtonProps {
  children: ReactNode;
  accessibilityState: { selected: boolean };
  onPress: () => void;
  route: string;
}

const CustomTabBarButton: FC<CustomTabBarButtonProps> = ({
  children,
  accessibilityState,
  onPress,
  route,
}) => {
  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <View
          style={[
            styles.svgGapFiller,
            {
              borderTopLeftRadius: route === 'home' ? 10 : 0,
            },
          ]}
        />
        <Svg width={80} height={65} viewBox='0 0 75 61'>
          <Path
            d='M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z'
            fill={COLORS.primary}
          />
        </Svg>
        <View
          style={[
            styles.svgGapFiller,
            {
              borderTopRightRadius: route === 'settings' ? 10 : 0,
            },
          ]}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={styles.activeBtn}
        >
          <Text>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          styles.inactiveBtn,
          {
            borderTopLeftRadius: route === 'home' ? 10 : 0,
            borderTopRightRadius: route === 'settings' ? 10 : 0,
          },
        ]}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  activeBtn: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    top: -22,
  },
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  inactiveBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgGapFiller: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
