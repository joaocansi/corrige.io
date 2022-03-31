import { motion } from 'framer-motion';
import styled from 'styled-components';

interface FlexContainerProps {
  $background?: string;
  $space?: number;

  $mt?: number;
  $mb?: number;
  $ml?: number;
  $mr?: number;

  $pt?: number;
  $pb?: number;
  $pl?: number;
  $pr?: number;

  $verticalMargin?: number;
  $horizontalMargin?: number;

  $verticalPadding?: number;
  $horizontalPadding?: number;

  $maxWidth?: number;
  $height?: string;
  $extends?: boolean;

  $direction?: string;
  $align?: string;
  $justify?: string;

  $wrap?: boolean;
  $shadow?: string;

  $radius?: number;
}

const FlexContainer = styled.div<FlexContainerProps>`
  border-radius: ${(props) => `${props.$radius}px`};

  box-shadow: ${(props) => (props.$shadow ? props.$shadow : 'none')};
  background-color: ${(props) =>
    props.$background ? `var(--${props.$background})` : 'transparent'};

  width: ${(props) => (props.$extends ? '100%' : 'auto')};
  height: ${(props) => (props.$height ? props.$height : 'auto')};
  max-width: ${(props) =>
    props.$maxWidth ? `${props.$maxWidth}px` : 'initial'};

  margin-bottom: ${(props) => (props.$mb ? `${props.$mb}rem` : 0)};
  margin-top: ${(props) => (props.$mt ? `${props.$mt}rem` : 0)};
  margin-left: ${(props) => (props.$ml ? `${props.$ml}rem` : 0)};
  margin-right: ${(props) => (props.$mr ? `${props.$mr}rem` : 0)};

  padding-bottom: ${(props) => (props.$pb ? `${props.$pb}rem` : 0)};
  padding-top: ${(props) => (props.$pt ? `${props.$pt}rem` : 0)};
  padding-left: ${(props) => (props.$pl ? `${props.$pl}rem` : 0)};
  padding-right: ${(props) => (props.$pr ? `${props.$pr}rem` : 0)};

  ${(props) =>
    props.$verticalMargin
      ? {
          marginTop: `${props.$verticalMargin}rem`,
          marginBottom: `${props.$verticalMargin}rem`,
        }
      : {}}

  ${(props) =>
    props.$horizontalMargin
      ? {
          marginLeft: `${props.$horizontalMargin}rem`,
          marginRight: `${props.$horizontalMargin}rem`,
        }
      : {}}

${(props) =>
    props.$verticalPadding
      ? {
          paddingTop: `${props.$verticalPadding}rem`,
          paddingBottom: `${props.$verticalPadding}rem`,
        }
      : {}}

  ${(props) =>
    props.$horizontalPadding
      ? {
          paddingLeft: `${props.$horizontalPadding}rem`,
          paddingRight: `${props.$horizontalPadding}rem`,
        }
      : {}}

  display: flex;
  flex-direction: ${(props) => (props.$direction ? props.$direction : 'row')};
  gap: ${(props) => `${props.$space}px`};
  align-items: ${(props) => (props.$align ? props.$align : 'initial')};
  justify-content: ${(props) => (props.$justify ? props.$justify : 'initial')};
  flex-wrap: ${(props) => (props.$wrap ? 'wrap' : 'initial')};

  ${(props) =>
    props.$maxWidth
      ? {
          maxWidth: props.$maxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
        }
      : {}};
`;

export default FlexContainer;
