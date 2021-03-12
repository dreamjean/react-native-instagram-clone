import styled, { css } from "styled-components";

const containerStyle = css`
  flex: 1;

  ${({ padding, theme: { colors } }) => ({
    backgroundColor: colors.white,
    padding,
  })}
`;

const View = styled.View`
  ${({ container }) => container && containerStyle}
`;

export default View;
