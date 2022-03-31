import { motion } from 'framer-motion';
import styled from 'styled-components';

interface SectionProps {
  applyFullscreen?: boolean;
  background?: string;
}

const Container = styled.section<SectionProps>`
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  padding: 7.5rem 0 10rem;
  overflow-x: hidden;
  ${(props) =>
    props.applyFullscreen
      ? {
          minHeight: '100vh',
        }
      : {}}
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > div {
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Content = styled(motion.div)`
  margin-top: 5rem;
`;

const Title = styled(motion.h3)`
  font-size: var(--text-3xl);
  line-height: 100%;
  text-transform: uppercase;
  color: var(--gray-800);
  text-align: center;
`;

const Description = styled(motion.p)`
  font-size: var(--text-md);
  font-weight: 300;
  color: var(--gray-300);
  text-align: center;
  margin-top: 1.5rem;
`;

export { Container, Content, Title, Description };
