import { motion } from 'framer-motion';
import styled from 'styled-components';

interface DecorationProps {
  width?: number;
  position?: string;
  invert?: boolean;
  positionY?: number;
  positionX?: number;
}

interface SectionDivisionProps {
  mt?: number;
  mb?: number;

  align?: string;
}

interface SectionContentProps {
  maxWidth?: number;
  reverse?: boolean;
}

interface SectionProps {
  background?: string;
}

const Section = styled.section<SectionProps>`
  width: 100%;

  position: relative;

  background: ${(props) =>
    props.background ? `var(--${props.background})` : 'var(--white)'};
  padding: 7rem 0;
`;

const SectionContent = styled.div<SectionContentProps>`
  width: 90%;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : '1200px')};

  margin: 0 auto;
  display: flex;

  gap: 30px;
  z-index: 1000;

  @media (max-width: 1090px) {
    flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
  }
`;

const SectionTitle = styled.h4`
  font-size: var(--text-2xl);
  text-transform: uppercase;

  color: var(--gray-900);
  width: 100%;

  margin-bottom: 1rem;
  z-index: 1000;
`;

const SectionDescription = styled.p`
  color: var(--gray-600);
  font-size: var(--text-md);

  font-weight: 300;
`;

const SectionDivision = styled(motion.div)<SectionDivisionProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: ${(props) => (props.mt ? `${props.mt}rem` : '0')};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : '0')};

  text-align: ${(props) => (props.align ? `${props.align}` : 'left')};

  @media (max-width: 1090px) {
    margin-bottom: 0;
    margin-top: 0;

    text-align: center;
  }

  z-index: 1000;
`;

const SectionTitleCentered = styled.h4`
  font-size: var(--text-2xl);
  text-transform: uppercase;

  color: var(--gray-900);
  width: 100%;

  text-align: center;
  z-index: 1000;
`;

const CircleDecoration = styled.div<DecorationProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.width}px`};

  border-radius: 50%;

  position: absolute;
  left: ${(props) => `${props.positionX}%`};
  bottom: ${(props) => `${props.positionY}%`};

  border: 10px solid var(--white);
`;

const Decoration = styled.div<DecorationProps>`
  position: absolute;

  height: 300px;
  width: 100%;

  overflow: hidden;

  background-color: var(--background);
  background-image: radial-gradient(
      150px circle at 22% 50%,
      var(--background) 50%,
      transparent 51%
    ),
    radial-gradient(170px circle at 22% 50%, var(--white) 50%, transparent 51%),
    radial-gradient(
      95px circle at 75% 0%,
      var(--background) 50%,
      transparent 51%
    ),
    radial-gradient(110px circle at 75% 0%, var(--white) 50%, transparent 51%),
    radial-gradient(
      130px circle at 50% 100%,
      var(--background) 50%,
      transparent 51%
    ),
    radial-gradient(150px circle at 50% 100%, var(--white) 50%, transparent 51%);

  ${(props) =>
    props.position === 'top'
      ? {
          top: 0,
        }
      : {
          bottom: 0,
        }}

  ${(props) =>
    props.invert
      ? {
          transform: 'rotate(180deg)',
        }
      : {}}
`;

const StripedDecoration = styled.div<DecorationProps>`
  width: 210px;
  height: 80px;
  background: url(/decorations/decoration.png);
  background-repeat: no-repeat;
  position: absolute;

  left: ${(props) => `${props.positionX}%`};
  bottom: ${(props) => `${props.positionY}%`};

  @media (max-width: 1090px) {
    display: none;
  }
`;

export {
  Section,
  SectionContent,
  StripedDecoration,
  SectionDescription,
  SectionTitleCentered,
  SectionDivision,
  SectionTitle,
  CircleDecoration,
  Decoration,
};
