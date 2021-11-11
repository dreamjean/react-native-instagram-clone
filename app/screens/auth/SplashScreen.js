import styled from "styled-components";

import { Button, Footer } from "../../components";
import { colors, images } from "../../config";
import { Image, Text } from "../../styles";

const SplashScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Image insLogo source={images[0]} />
        <Text body color={colors.grey} center marginTop={20}>
          Sign up to see photos and videos from your friends.
        </Text>
        <Button
          logo="facebook"
          title="Continue with Facebook"
          marginTop={20}
          onPress={() => true}
        />
      </Header>
      <Footer
        caption="Already have an account? "
        title="Log in"
        label="Sign up with email or phone number"
        onNavigation={() => navigation.navigate("Login")}
        onPress={() => navigation.navigate("Register1")}
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
