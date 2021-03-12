import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { Text } from "../../styles";

const TextButton = ({ caption, color, title, onPress, margin }) => {
  return (
    <Wrapper {...{ margin }}>
      <Text button2 grey>
        {caption}
      </Text>
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
        {...{ onPress }}
      >
        <Text button2 {...{ color }}>
          {title}
        </Text>
      </Pressable>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ margin, theme: { space } }) => ({
    margin: margin ? margin : space.s3,
  })}
`;

export default TextButton;
