import styled, { css } from "styled-components/native";

import { calender } from "../config";

const { ROW_HEIGHT } = calender;

const containerStyle = css`
  flex: 1;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    paddingHorizontal: space.l1,
  })}
`;

const inputBoxStyle = css`
  flex-direction: row;
  border-width: 1px;
  height: ${ROW_HEIGHT}px;
  align-items: center;

  ${({ error, touched, theme: { colors, space, radii } }) => ({
    borderColor: touched && error ? colors.danger : colors.grey,
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
