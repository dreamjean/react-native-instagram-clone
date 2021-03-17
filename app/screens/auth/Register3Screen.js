import React, { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import Cake from "../../assets/svg/cake.svg";
import { AuthContainer, Button } from "../../components";
import DatePicker from "../../components/DatePicker";
import { ErrorMessage, Form, SubmitButton } from "../../components/form";
import { colors } from "../../config";
// import { db, firebase } from "../../firebase";
import { Text } from "../../styles";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().label("Full name"),
  password: Yup.string()
    .required()
    .min(6)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
  savePassword: Yup.boolean(),
});

const Register3Screen = () => {
  const [error] = useState();
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    Keyboard.dismiss();
    // setLoading(true);

    // try {
    //   await firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password);

    //   const { uid } = firebase.auth().currentUser;

    //   db.collection("users").doc(uid).set({
    //     username: userInfo.username,
    //     email: userInfo.email,
    //     avatar: null,
    //   });
    // } catch (error) {
    //   setError(error.message);
    // }

    // setLoading(false);
  };

  // if (loading) return <ActivityIndicator />;

  return (
    <AuthContainer>
      <Header>
        <Cake width={90} height={80} />
        <Text title1 marginTop={12}>
          Add Birghday
        </Text>
        <Text small2 color={colors.grey} center marginTop={8}>
          {"This wont't be part of your public profile. "}
          <Text color={colors.darkBlue}>Why do I need to provide my birthday.</Text>
        </Text>
      </Header>
      <Form
        initialValues={{
          fullName: "",
          password: "",
          savePassword: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />

        <SubmitButton title="Continue and Sync Contacts" />
      </Form>

      <Button
        title="Continue Without Syncing Contacts"
        bgColor="transparent"
        color={colors.blue}
        onPress={() => true}
        marginTop={8}
      />
      <DatePicker />
    </AuthContainer>
  );
};

const Header = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.m2,
    paddingTop: space.l2 * 2,
  })}
`;

export default Register3Screen;
