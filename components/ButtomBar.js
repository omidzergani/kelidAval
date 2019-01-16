import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Header } from 'react-navigation';

export default class ButtomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
  }

  render() {
    return (
      <View style={styles.bottomBar}>
        <View>
          <TouchableOpacity style={[styles.buttons, { opacity: 0.4 }]} disabled>
            <Icon name="comments" color="#f2f2f2" size={wp('8%')} solid />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              Linking.openURL(`tel:${this.props.phoneNumber}`);
            }}
          >
            <Icon name="phone-square" color="#f2f2f2" size={wp('8%')} solid />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              this.setState({ saved: !this.state.saved });
              this.props.onPressSaved === Function ? this.props.onPressSaved() : null;
            }}
          >
            <Icon
              name="heart"
              color="#f2f2f2"
              size={wp('8%')}
              solid={this.state.saved}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 15,
    height: Header.HEIGHT - 10,
    width: wp('95%'),
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#f2f2f2',
    backgroundColor: '#03a3c5',
    margin: 10,
    borderRadius: wp('1%'),
    shadowRadius: 10,
    shadowOpacity: 0.3
  },
  buttons: {
    width: wp('30%'),
    alignContent: 'center',
    alignItems: 'center'
  }
});
