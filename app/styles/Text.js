import styled, { css } from "styled-components";

const button1Style = css`
  ${({ color, blue, theme: { colors, fonts, size } }) => ({
    fontSize: size.s2,
    fontFamily: fonts[0],
    color: color ? color : blue ? colors.blue : colors.white,
    textTransform: "capitalize",
  })}
`;

const button2Style = css`
  ${({ theme: { colors, size, fonts } }) => ({
    fontSize: size.s2,
    fontFamily: fonts[0],
    color: colors.blue2,
  })}
`;

const bodyStyle = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[0],
    fontSize: size.m1,
  })}
`;

const dangerStyle = css`
  ${({ theme: { colors, size, fonts, space } }) => ({
    fontSize: size.s1,
    fontFamily: fonts[0],
    color: colors.danger,
    marginVertical: space.s2,
  })}
`;

const Text = styled.Text`
  ${({ center, color, marginTop, margin, opacity, right, white, theme: { colors } }) => ({
    color: color ? color : white ? colors.white : colors.dark,
    textAlign: center ? "center" : right ? "right" : "left",
    margin,
    marginTop,
    opacity,
  })}

  ${({ button1 }) => button1 && button1Style}
  ${({ button2 }) => button2 && button2Style}
  ${({ body }) => body && bodyStyle}
  ${({ danger }) => danger && dangerStyle}
`;

export default Text;
