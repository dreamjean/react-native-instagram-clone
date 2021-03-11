import styled, { css } from 'styled-components';

const insLogoStyle = css`
  width: 60%;
`;

const fbLogoStyle = css`
  width: 15px;
  height: 15px;

  ${({ theme: { space } }) => ({
    marginRight: space.s2,
  })}
`;

const Image = styled.Image`
  ${({ insLogo }) => insLogo && insLogoStyle}
  ${({ fbLogo }) => fbLogo && fbLogoStyle}
`;

export default Image;
