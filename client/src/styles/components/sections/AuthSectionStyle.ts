import styled from 'styled-components';

interface AuthSectionProps {
  $minusHeight?: string;
  $background?: string;
}

export const AuthSection = styled.section<AuthSectionProps>`
  width: 100%;
  height: ${(props) =>
    props.$minusHeight ? `calc(100vh - ${props.$minusHeight})` : '100vh'};
  background: ${(props) =>
    props.$background ? props.$background : 'transparent'};
`;
