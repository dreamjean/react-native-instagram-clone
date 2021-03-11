import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';

import { colors, images } from '../../config';
import { Image, Text } from '../../styles';
import TextLinking from './TextLinking';

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
        <Image insLogo source={images[0]} />
        <ChildrenBox>{children}</ChildrenBox>
        <Medium>
          <Box>
            <Text body color={colors.grey}>
              OR
            </Text>
          </Box>
          <TextLinking
            image={images[1]}
            title="Login With Facebook"
            onPress={onLoginWithFackbook}
          />
        </Medium>
        <Footer>
          <Text color={colors.grey}>{caption}</Text>
          <TextLinking title={linkTitle} onPress={onNavigation} />
        </Footer>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
};

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ChildrenBox = styled.View`
  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

const Medium = styled.View`
  flex: 1;
  border-top-width: 1px;
  border-block-width: 1px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.grey,
    marginTop: space.m2,
  })}
`;

const Box = styled.View`
  width: 80px;
  align-items: center;
  align-self: center;
  justify-content: center;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    marginTop: -(space.m2 + space.s2),
  })}
`;

const Footer = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    margin: space.m1,
  })}
`;

export default Container;
