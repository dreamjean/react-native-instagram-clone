import React, { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import { ErrorMessage, Form, FormField, SubmitButton } from "../../components/form";
import { db, firebase } from "../../firebase";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().max(50).label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required()
    .label("Confirm Password"),
});

const RegisterScreen = () => {
  const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  const handleSubmit = async (userInfo) => {
    Keyboard.dismiss();
    // setLoading(true);

    try {
      await firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password);

      const { uid } = firebase.auth().currentUser;

      db.collection("users").doc(uid).set({
        username: userInfo.username,
        email: userInfo.email,
        avatar: null,
      });
    } catch (error) {
      setError(error.message);
    }

    // setLoading(false);
  };

  // if (loading) return <ActivityIndicator />;

  return (
    <Container>
      <Form
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="username"
          autoCorrect={false}
          blurOnSubmit={false}
          iconName="user"
          keyboardAppearance="default"
          keyboardType="default"
          name="username"
          onSubmitEditing={() => focusNextField("email")}
          placeholder="Username"
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="username"
        />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          blurOnSubmit={false}
          iconName="mail"
          keyboardAppearance="default"
          keyboardType="email-address"
          name="email"
          onSubmitEditing={() => focusNextField("password")}
          onRef={(input) => (inputs["email"] = input)}
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
          iconName="lock1"
          keyboardAppearance="default"
          keyboardType="default"
          maxLength={50}
          name="password"
          onSubmitEditing={() => focusNextField("confirmPassword")}
          onRef={(input) => (inputs["password"] = input)}
          placeholder="Password"
          returnKeyLabel="next"
          returnKeyType="next"
          secureTextEntry
          textContentType="password"
        />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          blurOnSubmit={false}
          iconName="lock1"
          keyboardAppearance="default"
          keyboardType="default"
          maxLength={50}
          name="confirmPassword"
          onRef={(input) => (inputs["confirmPassword"] = input)}
          placeholder="Confirm Password"
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default RegisterScreen;
