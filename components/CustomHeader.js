import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from './CustomText';

const CustomHeader = () => (
    <View style={styles.container}>
        <TouchableHighlight 
            underlayColor={'#f2f2f2'} style={styles.RightContainer}
        >
            <Icon name="chevron-right" color="#03a3c5" size={20} />
        </TouchableHighlight>
        <Text>خانه</Text>

    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        width: '100%',
        height: 60,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        direction: 'rtl',
        elevation: 4
    },
    RightContainer: {
        width: 60,
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'baseline',
        borderRadius: 30,
    }
});

export default CustomHeader;
