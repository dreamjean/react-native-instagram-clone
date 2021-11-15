import { useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import { AuthContainer, TextButton } from "../../components";
import {
  ErrorMessage,
  Form,
  FormPreferredContact,
} from "../../components/form";
import { db, firebase } from "../../firebase";

const validationSchema = Yup.object().shape({
  showPhone: Yup.boolean(),
  phone: Yup.string().when("showPhone", {
    is: true,
    then: Yup.string()
      .min(6)
      .required("Phone number is required.")
      .label("Phone"),
  }),
  email: Yup.string()
    .email()
    .when("showPhone", {
      is: false,
      then: Yup.string()
        .email("Please use a valid email address.")
        .required("Email address is required.")
        .label("Email"),
    }),
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

const Register1Screen = ({ navigation }) => {
  const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (userInfo) => {
    Keyboard.dismiss();
    // setLoading(true);

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(userInfo.email, userInfo.password);

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
    navigation.navigate("Register2");
  };

  // if (loading) return <ActivityIndicator />;

  return (
    <AuthContainer>
      <Form
        initialValues={{
          showPhone: true,
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormPreferredContact name="showPhone" />
      </Form>
      <Footer>
        <TextButton
          caption="Already have an account? "
          title="Log in."
          onPress={() => navigation.navigate("Login")}
        />
      </Footer>
    </AuthContainer>
  );
};

const Footer = styled.View`
  ${({ theme: { colors, space } }) => ({
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey,
    padding: space.s2,
  })}
`;

export default Register1Screen;
