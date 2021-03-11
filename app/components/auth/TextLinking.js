import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

import { Image, Text } from '../../styles';

const TextLinking = ({ backgroundColor, logo, title, onPress }) => {
  return (
    <Touchable {...{ backgroundColor, onPress }}>
      {logo && <Image fbLogo source={logo} />}
      <TextBox>
        <Text button1 blue>
          {title}
        </Text>
      </TextBox>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginTop: space.m1,
  })}
`;

const TextBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default TextLinking;
