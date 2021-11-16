import { useState } from "react";
import { Keyboard, Pressable } from "react-native";
import styled from "styled-components/native";
import * as Yup from "yup";

import { AuthContainer, Button } from "../../components";
import {
  ErrorMessage,
  Form,
  FormCheckbox,
  FormField,
  SubmitButton,
} from "../../components/form";
import { colors } from "../../config";
import { db, firebase } from "../../firebase";
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

const Register2Screen = () => {
  const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

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
  };

  // if (loading) return <ActivityIndicator />;

  return (
    <AuthContainer>
      <Header>
        <Text title1 style={{ textTransform: "uppercase" }}>
          Name and password
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
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="username"
          autoCorrect={false}
          blurOnSubmit={false}
          iconName="user"
          keyboardAppearance="default"
          keyboardType="default"
          name="fullName"
          onSubmitEditing={() => focusNextField("password")}
          placeholder="Full name"
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
          onRef={(input) => (inputs["password"] = input)}
          placeholder="Password"
          returnKeyLabel="next"
          returnKeyType="next"
          secureTextEntry
          textContentType="password"
        />
        <FormCheckbox name="savePassword" title="Remenber password" />
        <SubmitButton title="Continue and Sync Contacts" />
      </Form>

      <Button
        title="Continue Without Syncing Contacts"
        bgColor="transparent"
        color={colors.blue}
        onPress={() => true}
        marginTop={8}
      />
      <Footer>
        <Text small1 center color={colors.grey}>
          Your contacts will be periodically synced and stored on Instagram
          servers to help you and others find friends, and to help us provide a
          better service. To remove contacts, go to Settings and disconnect.{" "}
          <Pressable onPress={() => true}>
            <Text button2 opacity={0.7} color={colors.dark}>
              Learn More.
            </Text>
          </Pressable>
        </Text>
      </Footer>
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

const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;

  ${({ theme: { space } }) => ({
    paddingBottom: space.m1,
  })}
`;

export default Register2Screen;
