import styled, { css } from "styled-components";

import { colors } from "../config";

const areaNumStyle = css`
  ${({ theme: { colors, fonts, size } }) => ({
    fontFamily: fonts[0],
    fontSize: size.m1,
    color: colors.blue,
  })}
`;

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

const title1Style = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[1],
    fontSize: size.m3,
    color: colors.dark,
    textTransform: "capitalize",
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

  ${({ areaNum }) => areaNum && areaNumStyle}
  ${({ button1 }) => button1 && button1Style}
  ${({ button2 }) => button2 && button2Style}
  ${({ body }) => body && bodyStyle}
  ${({ danger }) => danger && dangerStyle}
  ${({ small1 }) => small1 && small1Style}
  ${({ small2 }) => small2 && small2Style}
  ${({ title1 }) => title1 && title1Style}
`;

export default Text;
