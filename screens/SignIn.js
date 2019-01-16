import React, { Component } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';
import { toSignUpScreen } from '../navigation/To';
import Text from '../components/CustomText';
import Loading from '../components/Loading';

class SingIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      dataRecived: false,
      error: false,
      password: '',
      emailOrPho: '',
      disableSubmit: true
    };
  }

  // set phone number or email textInput to State emailOrPho property
  setPhoNum = async value => {
    await this.setState({ ...this.state, emailOrPho: value });
    this.areInputsFiled();
  };

  // set the value of password textInput to State password property
  setPassword = async value => {
    await this.setState({ ...this.state, password: value });
    this.areInputsFiled();
  };

  // showing and hiding loading on submit button pressed
  get colapseLoading() {
    return this.state.fetching === true ? (
      <View style={styles.loading}>
        <Loading speed={1.2} />
      </View>
    ) : null;
  }
  //foucs on emailOrPho inputbox
  emailOrPhoFoucs = () => this.emailOrPho.focus();

  //foucs on password inputbox
  passwordFoucs = () => this.passwordRef.focus();

  // check if inputs box are filed and active the login button
  areInputsFiled = () => {
    if (this.state.emailOrPho.length > 1 && this.state.password.length > 4) {
      // this.setState({ ...this.state, disableSubmit: false });
      this.setState({ ...this.state, disableSubmit: false });
    } else {
      this.setState({ ...this.state, disableSubmit: true });
    }
  };

  // login in kelid aval
  submit = () => {
    this.passwordRef.blur();
    this.emailOrPhoRef.blur();
    this.setState({ ...this.state, fetching: true });
    setTimeout(async () => await this.setState({ ...this.state, fetching: false }), 2000);
  };

  //getting the action from ../navigate/To.js and navigate to screen that action give us
  navigateToSignUp = () => this.props.navigation.navigate(toSignUpScreen());

  render() {
    return (
      <View>
        <SafeAreaView style={styles.container}>
          <View style={styles.login}>
            <TextInput
              style={styles.textInput}
              placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
              placeholderTextColor="darkgray"
              selectionColor="#0383c5"
              keyboardType="email-address"
              autoFocus
              onChangeText={this.setPhoNum}
              ref={textInput => {
                this.emailOrPhoRef = textInput;
              }}
              onSubmitEditing={this.passwordFoucs}
            />

            <TextInput
              style={styles.textInput}
              placeholder="رمز ورود خود را وارد کنید"
              placeholderTextColor="darkgray"
              selectionColor="#0383c5"
              secureTextEntry
              autoCorrect={false}
              onChangeText={this.setPassword}
              ref={textInput => {
                this.passwordRef = textInput;
              }}
            />

            <CustomButton
              label="ورود"
              // ref="btnLogin"
              width={100}
              height={50}
              borderRadius={30}
              color="#0383c5"
              onPress={this.submit}
              disabled={this.state.disableSubmit}
            />
          </View>

          {this.colapseLoading}

          <Text style={styles.navigateBtn} onPress={this.navigateToSignUp}>
            ایا ثبت نام نکرده اید؟ ثبت نام کنید
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center'
  },
  login: {
    flex: 20,
    justifyContent: 'center'
  },
  signUp: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end'
  },
  textInput: {
    backgroundColor: '#f2f2f2',
    width: 250,
    borderRadius: 0,
    marginBottom: 10,
    color: '#555555',
    fontFamily: 'IRANSansMobile',
    textAlign: 'center',
    height: wp('13%'),
    borderBottomWidth: 1,
    borderBottomColor: '#03a3c5'
  },
  loading: {
    flex: 1,
    position: 'absolute',
    width: wp('100%'),
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(10,10,10,0.8)'
  },
  navigateBtn: {
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray'
  }
});

const mapStateToProps = state => ({
  ...state,
  store: state.nav
});

export default connect(mapStateToProps)(SingIn);
