import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import {
  ForgotPasswordScreen,
  LoginScreen,
  Register1Screen,
  Register2Screen,
  Register3Screen,
  SplashScreen,
} from "../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Register3" component={Register3Screen} />
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register1" component={Register1Screen} />
    <Stack.Screen name="Register2" component={Register2Screen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
