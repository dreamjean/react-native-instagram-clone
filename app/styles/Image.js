import styled, { css } from "styled-components";

const insLogoStyle = css`
  width: 60%;
  height: 40px;
`;

const fbLogoStyle = css`
  width: 25px;
  height: 25px;

  ${({ theme: { space } }) => ({
    resizeMode: "contain",
    marginRight: space.s3,
  })}
`;

const Image = styled.Image`
  ${({ insLogo }) => insLogo && insLogoStyle}
  ${({ fbLogo }) => fbLogo && fbLogoStyle}
`;

export default Image;
