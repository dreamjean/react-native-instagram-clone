import styled, { css } from "styled-components";

import { calender } from "../config";

const { ROW_HEIGHT } = calender;

const containerStyle = css`
  flex: 1;
  ${"" /* justify-content: center; */}

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    paddingHorizontal: space.m1,
  })}
`;

const inputBoxStyle = css`
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

const View = styled.View`
  ${({ container }) => container && containerStyle}
  ${({ inputBox }) => inputBox && inputBoxStyle}
`;

export default View;
