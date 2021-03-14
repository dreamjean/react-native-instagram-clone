import { Fontisto } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Keyboard, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components";
import * as Yup from "yup";

import { Footer, TextButton } from "../../components";
import { ErrorMessage, Form, FormField, SubmitButton } from "../../components/form";
import { colors, images } from "../../config";
import { firebase } from "../../firebase";
import { Image } from "../../styles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
});

const LoginScreen = ({ navigation }) => {
  const [error, setError] = useState();
  const [secureText, setSecureText] = useState(true);
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  const handleSubmit = async ({ email, password }) => {
    Keyboard.dismiss();

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        setError(error.message);
      });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={100}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            position: "absolute",
            top: 28,
            left: 12,
          })}
          onPress={() => navigation.goBack()}
        >
          <Fontisto name="angle-left" size={18} color={colors.dark} />
        </Pressable>
        <Header>
          <Image insLogo source={images[0]} />
        </Header>
        <FormWrapper>
          <Form
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage error={error} visible={error} />
            <FormField
              allowFontScaling={false}
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              blurOnSubmit={false}
              clearButtonMode="while-editing"
              keyboardAppearance="default"
              keyboardType="email-address"
              name="email"
              onSubmitEditing={() => focusNextField("password")}
              placeholder="Email"
              returnKeyLabel="next"
              returnKeyType="next"
              textContentType="emailAddress"
            />
            <FormField
              allowFontScaling={false}
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              blurOnSubmit={false}
              icon={secureText ? "eye-slash" : "eye"}
              iconColor={secureText ? colors.grey : colors.blue}
              keyboardAppearance="default"
              keyboardType="default"
              maxLength={50}
              name="password"
              onPress={() => setSecureText((prev) => !prev)}
              onRef={(input) => (inputs["password"] = input)}
              placeholder="Password"
              returnKeyLabel="go"
              returnKeyType="go"
              secureTextEntry={secureText}
              textContentType="password"
            />
            <SubmitButton title="Login" />
          </Form>
          <TextButton
            caption="Forgot your login details? "
            title="Get help logging in."
            onPress={() => navigation.navigate("ForgotPassword")}
            margin={16}
          />
        </FormWrapper>
        <Footer
          caption="Don't have an account? "
          title="Sign up."
          logo
          label="Continue with Facebook"
          onNavigation={() => navigation.navigate("Register")}
          onPress={() => true}
        />
      </Container>
      <StatusBar style="dark" />
    </KeyboardAwareScrollView>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    paddingTop: space.l2,
  })}
`;

const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const FormWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;

  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

export default LoginScreen;
