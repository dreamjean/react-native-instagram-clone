import React from "react";
import styled from "styled-components";

import { Button, Footer } from "../../components";
import { images } from "../../config";
import { Image } from "../../styles";

const SplashScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Image insLogo source={images[0]} />
        <Button logo="facebook" title="Log in with Facebook" marginTop={40} onPress={() => true} />
      </Header>
      <Footer
        caption="Already have an account? "
        title="Log in"
        label="Sign up with email or phone number"
        onNavigation={() => navigation.navigate("Login")}
        onPress={() => navigation.navigate("Register")}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const Header = styled.View`
  flex-grow: 2;
  justify-content: flex-end;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.m1,
    paddingBottom: space.l2,
  })}
`;

export default SplashScreen;
