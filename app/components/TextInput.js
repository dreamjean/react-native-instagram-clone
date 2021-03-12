import { FontAwesome5 } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { calender, colors } from "../config";

const { ROW_HEIGHT } = calender;

const TextInput = forwardRef(({ error, icon, iconColor, onPress, ...rest }, ref) => {
  return (
    <Container {...{ error }}>
      <Input
        {...{ ref }}
        {...rest}
        numberOfLines={1}
        selectionColor={colors.blue}
        placeholderTextcolor={colors.grey}
        underlineColorAndroid="transparent"
      />
      {icon && (
        <Pressable {...{ onPress }}>
          <FontAwesome5 name={icon} size={24} color={iconColor} />
        </Pressable>
      )}
    </Container>
  );
});

const Container = styled.View`
  flex-direction: row;
  border-width: 1px;
  height: ${ROW_HEIGHT}px;
  align-items: center;

  ${({ error, theme: { colors, space, radii } }) => ({
    borderColor: error ? colors.danger : colors.grey,
    borderRadius: radii.s1,
    marginVertical: space.s2,
    paddingHorizontal: space.s3,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, fonts, size, space } }) => ({
    fontFamily: fonts[0],
    fontSize: size.m1,
    color: colors.dark,
    padding: space.s2,
  })}
`;

export default TextInput;
