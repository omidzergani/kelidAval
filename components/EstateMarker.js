import React from 'react';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Mapbox from '@mapbox/react-native-mapbox-gl';

const EstateMarker = ({ id, cordinate, onPress }) => (
  <Mapbox.PointAnnotation id={id} coordinate={cordinate} title="ساختم">
    <View>
      <Icon name="home" color="#03a3c5" size={25} light />
    </View>
    <Mapbox.Callout
      containerStyle={{
        backgroundColor: '#03a3c5',
        width: 150,
        borderRadius: 50
      }}
    >
      <View>
        <Button
          color="white"
          style={{
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 10,
            width: 150,
            fontFamily: 'IRANSansMobile'
          }}
          title="اطلاعات بیشتر"
          onPress={onPress}
        >
          برای اطلاعات بیشتر دکمه زیر را لمس کنید.
        </Button>
      </View>
    </Mapbox.Callout>
  </Mapbox.PointAnnotation>
);

export default EstateMarker;
