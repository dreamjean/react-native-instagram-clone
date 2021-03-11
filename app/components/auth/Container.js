import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components";

import { colors, images } from "../../config";
import { Image, Text } from "../../styles";
import TextLinking from "./TextLinking";

const Container = ({ children, onLoginWithFackbook, caption, linkTitle, onNavigation }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={100}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <Wrapper>
        <Header>
          <Image insLogo source={images[0]} />
        </Header>
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <Medium>
          <Box>
            <Text body color={colors.grey}>
              OR
            </Text>
          </Box>
          <TextLinking logo={images[1]} title="Login With Facebook" onPress={onLoginWithFackbook} />
        </Medium>
        <Footer>
          <Text button1 color={colors.grey}>
            {caption}
          </Text>
          <TextLinking title={linkTitle} onPress={onNavigation} />
        </Footer>
      </Wrapper>
      <StatusBar style="dark" />
    </KeyboardAwareScrollView>
  );
};

const Wrapper = styled.View`
  flex: 1;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    paddingTop: space.l2,
  })}
`;

const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  ${({ theme: { space } }) => ({
    padding: space.l1,
  })}
`;

const ChildrenWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m1,
    paddingVertical: space.l1,
  })}
`;

const Medium = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: space.l2,
    marginTop: space.m1,
  })}
`;

const Box = styled.View`
  position: absolute;
  top: -12px;
  width: 100px;
  align-items: center;
  align-self: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme: { space } }) => ({
    margin: space.m1,
  })}
`;

export default Container;
