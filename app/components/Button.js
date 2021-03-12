import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { calender, colors } from "../config";
import { Text } from "../styles";

const { ROW_HEIGHT } = calender;

const Button = ({
  bgColor = colors.blue,
  color = colors.white,
  loading = false,
  logo = false,
  marginTop = 12,
  onPress,
  title,
  width = "100%",
}) => {
  return (
    <Touchable {...{ bgColor, width, marginTop, onPress }} disable={loading}>
      {logo && (
        <MaterialCommunityIcons
          style={{ marginRight: 8 }}
          name="facebook"
          size={24}
          color={color}
        />
      )}
      {loading ? (
        <Loading />
      ) : (
        <Text button1 {...{ color }}>
          {title}
        </Text>
      )}
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: ${ROW_HEIGHT}px;
  flex-direction: row;

  ${({ bgColor, width, marginTop, theme: { colors, radii } }) => ({
    backgroundColor: bgColor ? bgColor : colors.blue,
    borderRadius: radii.s1,
    marginTop,
    width,
  })}
`;

const Loading = styled.ActivityIndicator.attrs(({ theme: { colors } }) => ({
  color: colors.white,
  size: "small",
}));

export default Button;
