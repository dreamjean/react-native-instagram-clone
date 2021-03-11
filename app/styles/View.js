import styled, { css } from "styled-components";

const circleStyle = css``;

const View = styled.View`
  ${({ circle }) => circle && circleStyle}
`;

export default View;
