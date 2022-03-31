import styled from 'styled-components';

interface ButtonProps {
  $horizontalPadding?: number;
  $verticalPadding?: number;

  $mt?: number;
  $mb?: number;

  $fontSize?: string;
  $radius?: number;

  $background: string;
  $backgroundHovered: string;

  $color?: string;
  $extends?: boolean;

  $zIndex?: number;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.$extends ? '100%' : 'auto')};

  border-radius: ${(props) => `${props.$radius}px`};
  border: 0;

  margin-bottom: ${(props) => `${props.$mb}rem`};
  margin-top: ${(props) => `${props.$mt}rem`};

  padding-left: ${(props) => `${props.$horizontalPadding}rem`};
  padding-right: ${(props) => `${props.$horizontalPadding}rem`};
  padding-top: ${(props) => `${props.$verticalPadding}rem`};
  padding-bottom: ${(props) => `${props.$verticalPadding}rem`};

  background-color: ${(props) => `var(--${props.$background})`};
  transition: background-color 0.25s;

  font-weight: 400;
  font-size: ${(props) =>
    props.$fontSize ? `var(--text-${props.$fontSize})` : 'sm'};

  color: ${(props) => `var(--${props.$color})`};
  cursor: pointer;

  z-index: ${(props) => props.$zIndex};

  i {
    margin-right: 0.5rem;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    background-color: ${(props) => `var(--${props.$backgroundHovered})`};
  }
`;

export default Button;
