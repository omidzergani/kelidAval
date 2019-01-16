import React from 'react';
import { Text, View } from 'react-native';

const componentName = ({
    title, bacgroundColor, style
}) => (
    <View style={[style, { bacgroundColor }]}>
        <Text style={{}}>{title}</Text>
    </View>
);

export default componentName;
