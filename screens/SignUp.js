import React, { Component } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';
import { toSignUpScreen } from '../navigation/To';
import Text from '../components/CustomText';
import Loading from '../components/Loading';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      dataRecived: false,
      error: false,
      userName: '',
      email: '',
      phoneNumber: '',
      password: '',
      samePassword: '',
      disableSubmit: true
    };
  }

  // set the value of phone number textInput to State phoneNumber property
  setUserName = async value => {
    await this.setState({ ...this.state, userName: value });
    this.areInputsFiled();
  };
  // set the value of phone number textInput to State phoneNumber property
  setEmail = async value => {
    await this.setState({ ...this.state, email: value });
    this.areInputsFiled();
  };
  // set the value of phone number textInput to State phoneNumber property
  setPhoNum = async value => {
    await this.setState({ ...this.state, phoneNumber: value });
    this.areInputsFiled();
  };

  // set the value of password textInput to State password property
  setPassword = async value => {
    await this.setState({ ...this.state, password: value });
    this.areInputsFiled();
  };
  // set the value of password textInput to State password property
  setSamePassword = async value => {
    await this.setState({ ...this.state, samePassword: value });
    this.areInputsFiled();
  };

  //foucs on phoneNumber inputbox
  phoneNumberFoucs = () => this.phoneNumberRef.focus();
  //foucs on password inputbox
  emailFoucs = () => this.emailRef.focus();
  //foucs on username inputbox
  userNameFoucs = () => this.userNameRef.focus();
  //foucs on password inputbox
  passwordFoucs = () => this.passwordRef.focus();
  //foucs on samePassword inputbox
  samePasswordFoucs = () => this.samePasswordRef.focus();
  // check if inputs box are filed and active the login button
  areInputsFiled = () => {
    if (
      this.state.userName.length > 4 &&
      this.state.email.length > 6 &&
      this.state.phoneNumber.length > 9 &&
      this.state.password.length > 4 &&
      this.state.samePassword.length > 4
    ) {
      // this.setState({ ...this.state, disableSubmit: false });
      this.setState({ ...this.state, disableSubmit: false });
    } else {
      this.setState({ ...this.state, disableSubmit: true });
    }
  };

  // showing and hiding loading on submit button pressed
  get colapseLoading() {
    return this.state.fetching === true ? (
      <View style={styles.loading}>
        <Loading speed={1.2} />
      </View>
    ) : null;
  }
  // login in kelid aval
  submit = () => {
    this.userNameRef.blur();
    this.phoneNumberRef.blur();
    this.passwordRef.blur();

    this.setState({ ...this.state, fetching: true });
    setTimeout(() => this.setState({ ...this.state, fetching: false }), 2000);
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
              placeholder="نام و نام خانوادگی"
              placeholderTextColor="darkgray"
              selectionColor="#0383c5"
              autoCorrect={false}
              onChangeText={this.setUserName}
              onSubmitEditing={this.emailFoucs}
              ref={textInput => {
                this.userNameRef = textInput;
              }}
              autoFocus
            />

            <TextInput
              style={styles.textInput}
              placeholder="ایمیل"
              placeholderTextColor="darkgray"
              selectionColor="#0383c5"
              autoCorrect={false}
              onChangeText={this.setEmail}
              onSubmitEditing={this.phoneNumberFoucs}
              ref={textInput => {
                this.emailRef = textInput;
              }}
              autoFocus
            />

            <TextInput
              style={styles.textInput}
              placeholder="شماره تلفن خود را وارد کنید"
              placeholderTextColor="darkgray"
              selectionColor="#0383c5"
              dataDetectorTypes="phoneNumber"
              keyboardType="number-pad"
              onChangeText={this.setPhoNum}
              ref={textInput => {
                this.phoneNumberRef = textInput;
              }}
              onSubmitEditing={this.passwordFoucs}
              maxLength={11}
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
              onSubmitEditing={this.samePasswordFoucs}
            />

            <TextInput
              style={styles.textInput}
              placeholder="رمز ورود خود را مجددا وارد کنید"
              placeholderTextColor="darkgray"
              selectionColor="#0383c5"
              secureTextEntry
              autoCorrect={false}
              onChangeText={this.setSamePassword}
              ref={textInput => {
                this.samePasswordRef = textInput;
              }}
            />

            <CustomButton
              label="تایید"
              width={100}
              height={50}
              borderRadius={30}
              color="#0383c5"
              disabled={this.state.disableSubmit}
              onPress={this.submit}
            />

            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                display: this.state.error ? 'flex' : 'none',
                fontSize: 12,
                marginTop: -10
              }}
            >
              نام کاربری یا رمز ورود شما اشتباه است
            </Text>
          </View>
          {this.colapseLoading}

          <Text
            style={{ textAlign: 'center' }}
            onPress={() => this.props.navigation.navigate(toSignUpScreen())}
          >
            ثبت نام نکرده اید روی اینجا را لمس کنید
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
  textInput: {
    backgroundColor: '#f2f2f2',
    width: 250,
    borderRadius: 0,
    marginBottom: 10,
    color: '#555555',
    fontFamily: 'IRANSansMobile',
    textAlign: 'center',
    height: wp('13%'),
    borderBottomWidth: StyleSheet.hairlineWidth,
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
  }
});

const mapStateToProps = state => ({
  ...state,
  store: state.nav
});

export default connect(mapStateToProps)(SignUp);
