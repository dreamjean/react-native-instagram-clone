import { Feather } from "@expo/vector-icons";
import styled from "styled-components";

import { Button, Footer } from "../../components";
import { colors } from "../../config";
import { Text, View } from "../../styles";

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View container padding={20}>
      <Header>
        <IconBox>
          <Feather name="lock" size={40} color={colors.dark} />
        </IconBox>
        <Text title1 marginTop={16}>
          Trouble logging in?
        </Text>
        <Text button1 color={colors.grey} center marginTop={12}>
          Enter your username or the email or phone number linked to your account.
        </Text>

        <Button title="Send Login Link" onPress={() => true} />
        <Button
          bgColor="transparent"
          color={colors.blue}
          marginTop={0}
          title="Need more help?"
          onPress={() => true}
        />
      </Header>
      <Footer
        title="Back To Login"
        color={colors.blue}
        logo
        label="Continue with Facebook"
        onNavigation={() => navigation.navigate("Login")}
        onPress={() => true}
      />
    </View>
  );
};

const Header = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingVertical: space.m1,
  })}
`;

const IconBox = styled.View`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 3px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.dark,
    marginTop: space.l2,
  })}
`;

export default ForgotPasswordScreen;
