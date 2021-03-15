import styled from "styled-components";

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, fonts, size } }) => ({
    fontFamily: fonts[0],
    fontSize: size.m1,
    color: colors.dark,
  })}
`;

export default Input;
