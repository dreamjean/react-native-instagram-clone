import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";

import { colors } from "../../config";
import { Text } from "../../styles";
import Button from "../Button";
import TextButton from "./TextButton";

const Footer = ({ logo, label, caption, title, onPress, onNavigation }) => {
  return (
    <>
      <SplitLine>
        <Box>
          <Text small color={colors.grey}>
            OR
          </Text>
        </Box>
        <Button bgColor="transparent" color={colors.blue} title={label} {...{ logo, onPress }} />
      </SplitLine>
      <TextButton {...{ caption, title }} onPress={onNavigation} />
    </>
  );
};

const SplitLine = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: space.m2,
  })}
`;

const Box = styled.View`
  position: absolute;
  top: -10px;
  width: 100px;
  align-items: center;
  align-self: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

export default Footer;
