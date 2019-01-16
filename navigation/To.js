import { NavigationActions } from 'react-navigation';

export const toMainScreen = prop =>
  NavigationActions.navigate({
    routeName: 'Main',
    params: prop
  });

export const toEstateScreen = prop =>
  NavigationActions.navigate({
    routeName: 'estateScreen',
    params: prop
  });

export const toLoginScreen = prop =>
  NavigationActions.navigate({
    routeName: 'LoginScreen',
    params: prop
  });

export const toSignUpScreen = prop =>
  NavigationActions.navigate({
    routeName: 'SignUp',
    params: prop
  });
