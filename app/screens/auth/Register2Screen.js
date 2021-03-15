import React, { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import { AuthContainer } from "../../components";
import { ErrorMessage, Form, FormField, SubmitButton } from "../../components/form";
import { db, firebase } from "../../firebase";
import { Text } from "../../styles";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
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

const Register2Screen = () => {
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
    <AuthContainer>
      <Header>
        <Text title>Enter Confirmation Code</Text>
        <Text body>Enter the confirmation code we sent to email.</Text>
        <Text>Resend Code.</Text>
      </Header>
      <Form
        initialValues={{
          username: "",
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
          onSubmitEditing={() => focusNextField("password")}
          placeholder="Username"
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="username"
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
        <SubmitButton title="Next" />
      </Form>
    </AuthContainer>
  );
};

const Header = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingTop: space.l2,
  })}
`;

export default Register2Screen;
