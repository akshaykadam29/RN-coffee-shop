import React from 'react';
import {StyleSheet, View} from 'react-native';
import Lineargradient from 'react-native-linear-gradient';
import {COLORS, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface GradientBgIconProps {
  name: string;
  color: string;
  size: number;
}

const GradientBgIcon: React.FC<GradientBgIconProps> = ({name, color, size}) => {
  return (
    <View style={styles.container}>
      <Lineargradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.linearGradientBg}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <CustomIcon name={name} color={color} size={size} />
      </Lineargradient>
    </View>
  );
};

export default GradientBgIcon;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  linearGradientBg: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
