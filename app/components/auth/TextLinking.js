import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Image, Text } from "../../styles";

const TextLinking = ({ style, logo, title, onPress }) => {
  return (
    <Touchable {...{ style, onPress }}>
      {logo && <Image fbLogo source={logo} />}
      <Text button1 blue>
        {title}
      </Text>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

export default TextLinking;
