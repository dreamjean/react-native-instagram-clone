import styled, { css } from "styled-components";

const accountStyle = css`
  width: 100px;
  height: 100px;
  align-self: center;

  ${({ theme: { space } }) => ({
    resizeMode: "contain",
    margin: space.m1,
  })}
`;

const insLogoStyle = css`
  width: 60%;
  height: 70px;

  ${{ resizeMode: "contain" }}
`;

const Image = styled.Image`
  ${({ account }) => account && accountStyle}
  ${({ insLogo }) => insLogo && insLogoStyle}
`;

export default Image;
