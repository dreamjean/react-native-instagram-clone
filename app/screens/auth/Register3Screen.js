import React, { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import Cake from "../../assets/svg/cake.svg";
import { AuthContainer } from "../../components";
import { ErrorMessage, Form, FormDatePicker, SubmitButton } from "../../components/form";
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
  birthday: Yup.object().shape({
    date: Yup.number().min(1).max(31).required(),
    month: Yup.string().min(0).max(11).required(),
    year: Yup.number().min(1900).max(2021).required(),
  }),
});

const Register3Screen = () => {
  const [error] = useState();
  // const [loading, setLoading] = useState(false);
  // const { values } = useFormikContext();
  // const { date, month, year } = values["birthday"];

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
          birthday: { data: 1, month: 1, year: 2000 },
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />

        <SubmitButton title="Next" />
        <FormDatePicker name="birthday" />
      </Form>
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

// const TextWrapper = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
// `;

export default Register3Screen;
