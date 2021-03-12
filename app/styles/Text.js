import styled, { css } from "styled-components";

const button1Style = css`
  ${({ color, blue, theme: { colors, fonts, size } }) => ({
    fontSize: size.s2,
    fontFamily: fonts[1],
    color: color ? color : blue ? colors.blue : colors.white,
  })}
`;

const button2Style = css`
  ${({ color, grey, theme: { colors, fonts, size } }) => ({
    fontSize: size.s1,
    fontFamily: fonts[1],
    color: color ? color : grey ? colors.grey : colors.darkBlue,
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
    fontSize: size.s2,
    fontFamily: fonts[0],
    color: colors.danger,
    marginVertical: space.s1,
  })}
`;

const heading1Style = css`
  ${({ theme: { fonts, size, colors } }) => ({
    fontFamily: fonts[2],
    fontSize: size.l1,
    color: colors.dark,
  })}
`;

const heading2Style = css`
  ${({ theme: { fonts, size, colors } }) => ({
    fontFamily: fonts[0],
    fontSize: size.l1,
    color: colors.dark,
  })}
`;

const small1Style = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[0],
    fontSize: size.s1,
  })}
`;
const small2Style = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[0],
    fontSize: size.s2,
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
  ${({ heading1 }) => heading1 && heading1Style}
  ${({ heading2 }) => heading2 && heading2Style}
  ${({ small1 }) => small1 && small1Style}
  ${({ small2 }) => small2 && small2Style}
`;

export default Text;
