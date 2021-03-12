import React from "react";
import styled from "styled-components";

import { Footer } from "../../components";
import { colors } from "../../config";
import { Text, View } from "../../styles";

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View container padding={20}>
      <Text heading1 marginTop={20}>
        Login Help
      </Text>
      <Wrapper>
        <Text heading2 marginTop={16}>
          Fing Your Account
        </Text>
        <Text button1 color={colors.grey} center marginTop={12}>
          Enter your username or the email or phone number linked to your account.
        </Text>
      </Wrapper>
      <Footer
        title="Need more help?"
        color={colors.blue}
        logo
        label="Log in with facebook"
        onNavigation={() => navigation.navigate("Register")}
        onPress={() => true}
      />
    </View>
  );
};

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

export default ForgotPasswordScreen;
