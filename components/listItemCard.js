import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import SIcon from 'react-native-vector-icons/Foundation';
import Text from '../components/CustomText';

const ListItemCard = ({ item, onPress }) => (
  <TouchableHighlight activeOpacity={1} underlayColor="#f2f2f2" onPress={onPress}>
    <View style={styles.listCardView}>
      <View style={styles.imageView}>
        <Image
          source={{ uri: item.homePic[0], cache: 'force-cache' }}
          fadeDuration={1000}
          //Ios only
          defaultSource={{ uri: 'kelidAvalBlue' }}
          style={styles.preImage}
        />
      </View>
      <View style={styles.infoView}>
        <View style={styles.cardViewTitles}>
          <Text style={styles.cardText} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.cardText} numberOfLines={1}>
            {item.price}
          </Text>
        </View>
        <View style={styles.infoIconView}>
          <FIcon
            name="parking"
            // color="#03a3c5"
            color="#00b300"
            size={20}
            style={[styles.infoIcon, { display: item.parking === true ? 'flex' : 'none' }]}
          />
          <SIcon
            name="elevator"
            // color="#03a3c5"
            color="#ff6600"
            size={20}
            style={[styles.infoIcon, { display: item.elevator === true ? 'flex' : 'none' }]}
          />
        </View>
        <View style={styles.bottomCardInfo}>
          <Text style={styles.bottomCardInfoText}>{item.numOfRooms}</Text>
          <Text style={styles.bottomCardInfoText}>{item.area}</Text>
          <Text style={styles.bottomCardInfoText}>{item.estateType}</Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

export default ListItemCard;

const styles = StyleSheet.create({
  listCardView: {
    height: wp('40%'),
    width: wp('90%'),
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1
    },
    alignSelf: 'center',
    shadowRadius: 3,
    shadowColor: '#111111',
    shadowOpacity: 0.2,
    borderRadius: wp('2.5%'),
    margin: wp('2.5%'),
    elevation: 3,
    flexDirection: 'row'
  },
  imageView: {
    flex: 1
  },
  preImage: {
    width: wp('38%'),
    height: wp('38%'),
    borderRadius: wp('2.5%'),
    position: 'absolute',
    margin: wp('1.1%')
  },
  infoView: {
    flex: 1,
    overflow: 'hidden',
    padding: wp('1.25%'),
    justifyContent: 'space-between',
    height: '100%'
  },
  cardViewTitles: {
    width: '53%',
    alignSelf: 'flex-end'
  },
  cardText: {
    textAlign: 'right',
    width: wp('44%'),
    alignSelf: 'flex-end',
    fontSize: 14,
    //wp('3.5%')
    marginBottom: wp('2.5%')
  },
  bottomCardInfo: {
    flexDirection: 'row',
    alignSelf: 'center',
    direction: 'rtl',
    backgroundColor: '#03a3c5',
    padding: wp('1.25%'),
    borderRadius: wp('2%'),
    width: '100%',
    height: '20%',
    justifyContent: 'space-evenly'
  },
  bottomCardInfoText: {
    color: 'white',
    marginLeft: wp('1.25%'),
    marginRight: wp('1.25%'),
    overflow: 'hidden',
    fontSize: 12, //wp('2.8%')
    alignSelf: 'center'
  },
  infoIconView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: wp('1.25%')
  },
  infoIcon: {
    margin: 5,
    alignSelf: 'center'
  }
});
