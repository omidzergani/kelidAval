import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ style, onPress, children, numberOfLines = 1, ellipsizeMode = 'clip' }) => (
  <Text
    style={[{ fontFamily: 'IRANSansMobile' }, style]}
    onPress={onPress}
    textBreakStrategy={'highQuality'}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}
  >
    {children}
  </Text>
);

export default CustomText;
